import { useCallback, useEffect, useRef, useState } from "react";
import type { Dotgrid2AudioAnalysis } from "../shared/types";
import {
  getLookAheadPulse,
  mergeWithPrecomputed,
  preprocessAudioBuffer,
  samplePrecomputedFrame,
  type PrecomputedTrack,
} from "../layer1_preprocess/preprocess";

export type AudioState = "idle" | "loading" | "playing" | "paused";

const FFT_SIZE = 1024;
const HISTORY_SIZE = 56;
const LOW_COOLDOWN = 10;
const MID_COOLDOWN = 8;
const HIGH_COOLDOWN = 4;
const DEFAULT_BPM = 96;

const DB_FLOOR = -88;
const DB_CEIL = -18;

interface PeakState {
  value: number;
  hold: number;
}

export const EMPTY_ANALYSIS: Dotgrid2AudioAnalysis = {
  bass: 0,
  mud: 0,
  mid: 0,
  high: 0,
  energy: 0,
  onset: 0,
  isBeat: false,
  lowBeat: false,
  midBeat: false,
  highBeat: false,
  lookAheadKick: 0,
  lookAheadSnare: 0,
  lookAheadHat: 0,
  anticipation: 0,
  bpm: DEFAULT_BPM,
  beatInBar: 0,
  barProgress: 0,
};

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function safeNumber(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}

function mean(values: number[]): number {
  if (values.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < values.length; i++) total += values[i];
  return total / values.length;
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) return (sorted[mid - 1] + sorted[mid]) / 2;
  return sorted[mid];
}

function pushHistory(history: number[], value: number): void {
  history.push(value);
  if (history.length > HISTORY_SIZE) history.shift();
}

function calcRms(timeData: Uint8Array): number {
  let sumSq = 0;
  for (let i = 0; i < timeData.length; i++) {
    const v = (timeData[i] - 128) / 128;
    sumSq += v * v;
  }
  return Math.sqrt(sumSq / Math.max(timeData.length, 1));
}

function dbToNorm(db: number): number {
  if (!Number.isFinite(db)) return 0;
  return clamp((db - DB_FLOOR) / (DB_CEIL - DB_FLOOR), 0, 1);
}

function avgBandDb(data: Float32Array, sampleRate: number, fftSize: number, startHz: number, endHz: number): number {
  const nyquist = sampleRate * 0.5;
  const sHz = clamp(startHz, 0, nyquist);
  const eHz = clamp(endHz, sHz + 1, nyquist);
  const binHz = sampleRate / fftSize;

  const start = clamp(Math.floor(sHz / binHz), 0, data.length - 1);
  const end = clamp(Math.ceil(eHz / binHz), start, data.length - 1);

  let sum = 0;
  let count = 0;
  for (let i = start; i <= end; i++) {
    const v = data[i];
    if (!Number.isFinite(v)) continue;
    sum += v;
    count++;
  }
  if (count === 0) return DB_FLOOR;
  return sum / count;
}

function avgBandNorm(data: Float32Array, sampleRate: number, fftSize: number, startHz: number, endHz: number): number {
  return dbToNorm(avgBandDb(data, sampleRate, fftSize, startHz, endHz));
}

function applyPeakEnvelope(state: PeakState, target: number, attack: number, release: number, holdFrames: number): number {
  const nextTarget = safeNumber(target);
  if (!Number.isFinite(state.value)) state.value = 0;

  if (nextTarget >= state.value) {
    state.value += (nextTarget - state.value) * clamp(attack, 0, 1);
    state.hold = holdFrames;
    return safeNumber(state.value);
  }

  if (state.hold > 0) {
    state.hold--;
    return safeNumber(state.value);
  }

  state.value += (nextTarget - state.value) * clamp(release, 0, 1);
  return safeNumber(state.value);
}

export function useAudioAnalyzer() {
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const rafIdRef = useRef<number>(0);
  const freqDataRef = useRef<Float32Array | null>(null);
  const timeDataRef = useRef<Uint8Array | null>(null);

  const analysisRef = useRef<Dotgrid2AudioAnalysis>({ ...EMPTY_ANALYSIS });
  const audioTimeRef = useRef(0);

  const prevBandsRef = useRef({ low: 0, mud: 0, mid: 0, high: 0 });
  const prevRmsRef = useRef(0);
  const fluxHistoryRef = useRef({ low: [] as number[], mud: [] as number[], mid: [] as number[], high: [] as number[] });
  const rmsFluxHistoryRef = useRef<number[]>([]);
  const cooldownRef = useRef({ low: 0, mid: 0, high: 0 });
  const beatTimesRef = useRef<number[]>([]);
  const bpmRef = useRef(DEFAULT_BPM);

  const precomputedRef = useRef<PrecomputedTrack | null>(null);
  const preprocessTokenRef = useRef(0);

  const envelopeRef = useRef({
    bass: { value: 0, hold: 0 },
    mud: { value: 0, hold: 0 },
    mid: { value: 0, hold: 0 },
    high: { value: 0, hold: 0 },
    onset: { value: 0, hold: 0 },
  });

  const cleanup = useCallback(() => {
    preprocessTokenRef.current++;
    precomputedRef.current = null;

    cancelAnimationFrame(rafIdRef.current);

    if (audioElRef.current) {
      audioElRef.current.pause();
      audioElRef.current.src = "";
    }
    if (sourceRef.current) {
      try {
        sourceRef.current.disconnect();
      } catch {
        // noop
      }
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    sourceRef.current = null;
    audioElRef.current = null;
    analyserRef.current = null;
    freqDataRef.current = null;
    timeDataRef.current = null;

    prevBandsRef.current = { low: 0, mud: 0, mid: 0, high: 0 };
    prevRmsRef.current = 0;
    fluxHistoryRef.current = { low: [], mud: [], mid: [], high: [] };
    rmsFluxHistoryRef.current = [];
    cooldownRef.current = { low: 0, mid: 0, high: 0 };
    beatTimesRef.current = [];
    bpmRef.current = DEFAULT_BPM;

    envelopeRef.current = {
      bass: { value: 0, hold: 0 },
      mud: { value: 0, hold: 0 },
      mid: { value: 0, hold: 0 },
      high: { value: 0, hold: 0 },
      onset: { value: 0, hold: 0 },
    };

    analysisRef.current = { ...EMPTY_ANALYSIS };
    audioTimeRef.current = 0;
    setCurrentTime(0);
  }, []);

  const preprocessArrayBuffer = useCallback(async (arrayBuffer: ArrayBuffer, token: number) => {
    let tempCtx: AudioContext | null = null;

    try {
      let ctx = audioCtxRef.current;
      if (!ctx) {
        tempCtx = new AudioContext();
        ctx = tempCtx;
      }

      const decoded = await ctx.decodeAudioData(arrayBuffer.slice(0));
      const track = preprocessAudioBuffer(decoded);

      if (preprocessTokenRef.current !== token) return;

      precomputedRef.current = track;
      bpmRef.current = bpmRef.current * 0.6 + track.bpm * 0.4;
    } catch {
      if (preprocessTokenRef.current === token) {
        precomputedRef.current = null;
      }
    } finally {
      if (tempCtx) {
        await tempCtx.close().catch(() => {
          // noop
        });
      }
    }
  }, []);

  const analyzeFrame = useCallback(() => {
    const analyser = analyserRef.current;
    const freqData = freqDataRef.current;
    const timeData = timeDataRef.current;
    const audio = audioElRef.current;
    if (!analyser || !freqData || !timeData || !audio) return;

    analyser.getFloatFrequencyData(freqData);
    analyser.getByteTimeDomainData(timeData);

    const sampleRate = analyser.context.sampleRate;

    const kickBand = avgBandNorm(freqData, sampleRate, analyser.fftSize, 60, 120);
    const mudBand = avgBandNorm(freqData, sampleRate, analyser.fftSize, 300, 1000);
    const presenceBand = avgBandNorm(freqData, sampleRate, analyser.fftSize, 2000, 5000);
    const airBand = avgBandNorm(freqData, sampleRate, analyser.fftSize, 6000, 10000);

    const bassRaw = clamp(kickBand - mudBand * 0.34, 0, 1);
    const mudRaw = mudBand;
    const midRaw = clamp(presenceBand * 0.92 + kickBand * 0.08, 0, 1);
    const highRaw = airBand;
    const energyRaw = bassRaw * 0.58 + midRaw * 0.26 + highRaw * 0.16;

    const prev = prevBandsRef.current;
    const lowFlux = Math.max(0, bassRaw - prev.low);
    const mudFlux = Math.max(0, mudRaw - prev.mud);
    const midFlux = Math.max(0, midRaw - prev.mid);
    const highFlux = Math.max(0, highRaw - prev.high);

    prev.low = bassRaw;
    prev.mud = mudRaw;
    prev.mid = midRaw;
    prev.high = highRaw;

    const rms = calcRms(timeData);
    const rmsFlux = Math.max(0, rms - prevRmsRef.current);
    prevRmsRef.current = rms;

    pushHistory(fluxHistoryRef.current.low, lowFlux);
    pushHistory(fluxHistoryRef.current.mud, mudFlux);
    pushHistory(fluxHistoryRef.current.mid, midFlux);
    pushHistory(fluxHistoryRef.current.high, highFlux);
    pushHistory(rmsFluxHistoryRef.current, rmsFlux);

    const now = audio.currentTime;
    audioTimeRef.current = now;
    setCurrentTime(now);

    const meanRmsFlux = mean(rmsFluxHistoryRef.current);
    const meanLowFlux = mean(fluxHistoryRef.current.low);
    const meanMudFlux = mean(fluxHistoryRef.current.mud);
    const meanMidFlux = mean(fluxHistoryRef.current.mid);
    const meanHighFlux = mean(fluxHistoryRef.current.high);

    const lowScore = lowFlux * 1.52 + rmsFlux * 0.72 - mudFlux * 0.64;
    const midScore = midFlux * 1.22 + rmsFlux * 0.4;
    const highScore = highFlux * 1.18 + rmsFlux * 0.32;

    const lowThreshold = meanLowFlux * 1.48 + meanRmsFlux * 0.42 + meanMudFlux * 0.4 + 0.007;
    const midThreshold = meanMidFlux * 1.66 + meanRmsFlux * 0.32 + 0.007;
    const highThreshold = meanHighFlux * 1.78 + meanRmsFlux * 0.24 + 0.006;

    let lowBeat = false;
    let midBeat = false;
    let highBeat = false;

    if (cooldownRef.current.low > 0) cooldownRef.current.low--;
    if (cooldownRef.current.mid > 0) cooldownRef.current.mid--;
    if (cooldownRef.current.high > 0) cooldownRef.current.high--;

    if (cooldownRef.current.low <= 0 && lowScore > lowThreshold && bassRaw > 0.08) {
      lowBeat = true;
      cooldownRef.current.low = LOW_COOLDOWN;
      beatTimesRef.current.push(now);
      if (beatTimesRef.current.length > 20) beatTimesRef.current.shift();
    }

    if (cooldownRef.current.mid <= 0 && midScore > midThreshold && midRaw > 0.07) {
      midBeat = true;
      cooldownRef.current.mid = MID_COOLDOWN;
    }

    if (cooldownRef.current.high <= 0 && highScore > highThreshold && highRaw > 0.06) {
      highBeat = true;
      cooldownRef.current.high = HIGH_COOLDOWN;
    }

    const preTrack = precomputedRef.current;
    const preFrame = samplePrecomputedFrame(preTrack, now);

    if (preFrame) {
      if (!lowBeat && cooldownRef.current.low <= 1 && preFrame.lowBeat) {
        lowBeat = true;
        cooldownRef.current.low = LOW_COOLDOWN;
        beatTimesRef.current.push(now);
        if (beatTimesRef.current.length > 20) beatTimesRef.current.shift();
      }
      if (!midBeat && cooldownRef.current.mid <= 1 && preFrame.midBeat) {
        midBeat = true;
        cooldownRef.current.mid = MID_COOLDOWN;
      }
      if (!highBeat && cooldownRef.current.high <= 1 && preFrame.highBeat) {
        highBeat = true;
        cooldownRef.current.high = HIGH_COOLDOWN;
      }
    }

    const times = beatTimesRef.current;
    if (times.length >= 4) {
      const intervals: number[] = [];
      for (let i = 1; i < times.length; i++) {
        const dt = times[i] - times[i - 1];
        if (dt > 0.24 && dt < 1.0) intervals.push(dt);
      }
      if (intervals.length >= 3) {
        const bpmRaw = clamp(60 / median(intervals), 72, 182);
        bpmRef.current = bpmRef.current * 0.84 + bpmRaw * 0.16;
      }
    }

    if (preTrack) {
      bpmRef.current = bpmRef.current * 0.94 + preTrack.bpm * 0.06;
    }

    const bpm = clamp(bpmRef.current, 72, 182);
    const beats = (now * bpm) / 60;
    const beatInBar = ((Math.floor(beats) % 4) + 4) % 4;
    const barProgress = (((beats % 4) + 4) % 4) / 4;

    const onsetRaw = clamp((lowScore * 1.15 + midScore + highScore * 0.84) * 2.5, 0, 1);
    const isBeat = lowBeat || midBeat || highBeat;

    const merged = mergeWithPrecomputed(
      {
        bass: bassRaw,
        mud: mudRaw,
        mid: midRaw,
        high: highRaw,
        energy: energyRaw,
        onset: onsetRaw,
        isBeat,
        lowBeat,
        midBeat,
        highBeat,
        lookAheadKick: 0,
        lookAheadSnare: 0,
        lookAheadHat: 0,
        anticipation: 0,
        bpm,
        beatInBar,
        barProgress,
      },
      preTrack,
      now
    );

    const env = envelopeRef.current;
    const bass = applyPeakEnvelope(env.bass, merged.bass, 0.97, 0.08, 2);
    const mud = applyPeakEnvelope(env.mud, merged.mud, 0.88, 0.16, 1);
    const mid = applyPeakEnvelope(env.mid, merged.mid, 0.95, 0.1, 2);
    const high = applyPeakEnvelope(env.high, merged.high, 0.95, 0.11, 1);
    const onset = applyPeakEnvelope(env.onset, merged.onset, 0.98, 0.14, 1);

    const lookAheadKick = preTrack ? getLookAheadPulse(preTrack.lowBeatTimes, now, 0.34, 0.05) : 0;
    const lookAheadSnare = preTrack ? getLookAheadPulse(preTrack.midBeatTimes, now, 0.32, 0.05) : 0;
    const lookAheadHat = preTrack ? getLookAheadPulse(preTrack.highBeatTimes, now, 0.28, 0.04) : 0;
    const anticipation = clamp(lookAheadKick * 0.9 + lookAheadSnare * 0.62 + lookAheadHat * 0.5, 0, 1);

    analysisRef.current = {
      bass: clamp(safeNumber(bass), 0, 1),
      mud: clamp(safeNumber(mud), 0, 1),
      mid: clamp(safeNumber(mid), 0, 1),
      high: clamp(safeNumber(high), 0, 1),
      energy: clamp(safeNumber(bass) * 0.58 + safeNumber(mid) * 0.26 + safeNumber(high) * 0.16, 0, 1),
      onset: clamp(safeNumber(onset), 0, 1),
      isBeat: Boolean(isBeat),
      lowBeat: Boolean(lowBeat),
      midBeat: Boolean(midBeat),
      highBeat: Boolean(highBeat),
      lookAheadKick: clamp(safeNumber(lookAheadKick), 0, 1),
      lookAheadSnare: clamp(safeNumber(lookAheadSnare), 0, 1),
      lookAheadHat: clamp(safeNumber(lookAheadHat), 0, 1),
      anticipation: clamp(safeNumber(anticipation), 0, 1),
      bpm: clamp(safeNumber(bpm, DEFAULT_BPM), 72, 182),
      beatInBar: ((Math.floor(safeNumber(beatInBar)) % 4) + 4) % 4,
      barProgress: clamp(safeNumber(barProgress), 0, 1),
    };

    rafIdRef.current = requestAnimationFrame(analyzeFrame);
  }, []);

  const setupSource = useCallback(
    (srcUrl: string, displayName: string | null, revokeOnCleanup: boolean): number => {
      cleanup();
      const token = preprocessTokenRef.current;

      setAudioState("loading");
      setFileName(displayName);

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;

      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {
          // noop
        });
      }

      const analyser = ctx.createAnalyser();
      analyser.fftSize = FFT_SIZE;
      analyser.minDecibels = DB_FLOOR;
      analyser.maxDecibels = DB_CEIL;
      analyser.smoothingTimeConstant = 0.22;
      analyserRef.current = analyser;
      freqDataRef.current = new Float32Array(analyser.frequencyBinCount);
      timeDataRef.current = new Uint8Array(analyser.fftSize);

      if (revokeOnCleanup) {
        objectUrlRef.current = srcUrl;
      } else {
        objectUrlRef.current = null;
      }

      const audio = new Audio();
      audio.crossOrigin = "anonymous";
      audio.src = srcUrl;
      audioElRef.current = audio;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
        setAudioState("paused");
      });

      audio.addEventListener("ended", () => {
        setAudioState("paused");
        cancelAnimationFrame(rafIdRef.current);
      });

      const source = ctx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      sourceRef.current = source;

      audio.load();
      return token;
    },
    [cleanup]
  );

  const loadFile = useCallback(
    (file: File) => {
      const url = URL.createObjectURL(file);
      const token = setupSource(url, file.name, true);

      void file.arrayBuffer().then((buffer) => preprocessArrayBuffer(buffer, token));
    },
    [preprocessArrayBuffer, setupSource]
  );

  const loadUrl = useCallback(
    (url: string, displayName?: string) => {
      const fallback = url.split("/").pop() || "Audio";
      const token = setupSource(url, displayName ?? fallback, false);

      void fetch(url)
        .then((res) => (res.ok ? res.arrayBuffer() : Promise.reject(new Error("fetch failed"))))
        .then((buffer) => preprocessArrayBuffer(buffer, token))
        .catch(() => {
          if (preprocessTokenRef.current === token) {
            precomputedRef.current = null;
          }
        });
    },
    [preprocessArrayBuffer, setupSource]
  );

  const play = useCallback(() => {
    const audio = audioElRef.current;
    const ctx = audioCtxRef.current;
    if (!audio) return;

    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {
        // noop
      });
    }

    audio
      .play()
      .then(() => {
        setAudioState("playing");
        rafIdRef.current = requestAnimationFrame(analyzeFrame);
      })
      .catch(() => {
        setAudioState("paused");
      });
  }, [analyzeFrame]);

  const pause = useCallback(() => {
    const audio = audioElRef.current;
    if (!audio) return;
    audio.pause();
    setAudioState("paused");
    cancelAnimationFrame(rafIdRef.current);
  }, []);

  const toggle = useCallback(() => {
    if (audioState === "playing") pause();
    else if (audioState === "paused") play();
  }, [audioState, play, pause]);

  const seek = useCallback((time: number) => {
    const audio = audioElRef.current;
    if (!audio) return;
    audio.currentTime = time;
    audioTimeRef.current = time;
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {
          // noop
        });
        audioCtxRef.current = null;
      }
    };
  }, [cleanup]);

  return {
    analysisRef,
    audioTimeRef,
    audioState,
    fileName,
    duration,
    currentTime,
    loadFile,
    loadUrl,
    play,
    pause,
    toggle,
    seek,
    cleanup,
  };
}
