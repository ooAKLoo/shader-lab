import { useRef, useState, useCallback, useEffect } from "react";
import type { AudioAnalysis } from "./musicPresets";

export type AudioState = "idle" | "loading" | "playing" | "paused";

const FFT_SIZE = 2048;
const HALF_FFT = FFT_SIZE / 2; // 1024 bins

// Frequency band bin ranges (at 44100Hz sample rate, each bin ≈ 21.5Hz)
const BASS_END = 15;      // 0-323Hz
const MID_END = 80;       // 344-1720Hz
const HIGH_END = 512;     // 1742-11025Hz

// Beat detection constants
const BEAT_HISTORY_SIZE = 43;  // ~0.7s at 60fps
const BEAT_THRESHOLD_MULT = 1.4;
const BEAT_ABS_THRESHOLD = 0.15;
const BEAT_COOLDOWN = 12;      // ~200ms

function avgRange(data: Uint8Array, start: number, end: number): number {
  let sum = 0;
  const count = end - start + 1;
  for (let i = start; i <= end && i < data.length; i++) {
    sum += data[i];
  }
  return sum / count / 255;
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
  const freqDataRef = useRef<Uint8Array | null>(null);

  // Beat detection state
  const energyHistoryRef = useRef<number[]>([]);
  const beatCooldownRef = useRef(0);
  const beatCountRef = useRef(0);

  // Analysis result (ref, not state — 60fps updates without re-render)
  const analysisRef = useRef<AudioAnalysis>({
    bass: 0, mid: 0, high: 0, energy: 0, isBeat: false, beatCount: 0,
  });

  const cleanup = useCallback(() => {
    cancelAnimationFrame(rafIdRef.current);
    if (audioElRef.current) {
      audioElRef.current.pause();
      audioElRef.current.src = "";
    }
    if (sourceRef.current) {
      try { sourceRef.current.disconnect(); } catch {}
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    sourceRef.current = null;
    audioElRef.current = null;
    analyserRef.current = null;
    freqDataRef.current = null;
    energyHistoryRef.current = [];
    beatCooldownRef.current = 0;
    beatCountRef.current = 0;
    analysisRef.current = { bass: 0, mid: 0, high: 0, energy: 0, isBeat: false, beatCount: 0 };
  }, []);

  const analyzeFrame = useCallback(() => {
    const analyser = analyserRef.current;
    const data = freqDataRef.current;
    if (!analyser || !data) return;

    analyser.getByteFrequencyData(data);

    const bass = avgRange(data, 0, BASS_END);
    const mid = avgRange(data, BASS_END + 1, MID_END);
    const high = avgRange(data, MID_END + 1, Math.min(HIGH_END, HALF_FFT - 1));
    const energy = bass * 0.5 + mid * 0.3 + high * 0.2;

    // Beat detection: adaptive threshold
    const history = energyHistoryRef.current;
    history.push(energy);
    if (history.length > BEAT_HISTORY_SIZE) history.shift();

    let avgEnergy = 0;
    for (let i = 0; i < history.length; i++) avgEnergy += history[i];
    avgEnergy /= history.length;

    let isBeat = false;
    if (beatCooldownRef.current > 0) {
      beatCooldownRef.current--;
    } else if (energy > avgEnergy * BEAT_THRESHOLD_MULT && energy > BEAT_ABS_THRESHOLD) {
      isBeat = true;
      beatCooldownRef.current = BEAT_COOLDOWN;
      beatCountRef.current++;
    }

    analysisRef.current = {
      bass, mid, high, energy, isBeat, beatCount: beatCountRef.current,
    };

    // Update currentTime (throttled — only via ref, state updated in separate interval)
    if (audioElRef.current) {
      setCurrentTime(audioElRef.current.currentTime);
    }

    rafIdRef.current = requestAnimationFrame(analyzeFrame);
  }, []);

  const loadFile = useCallback((file: File) => {
    cleanup();
    setAudioState("loading");
    setFileName(file.name);

    // Create AudioContext lazily
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;

    // Resume context if suspended (autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Create analyser
    const analyser = ctx.createAnalyser();
    analyser.fftSize = FFT_SIZE;
    analyser.smoothingTimeConstant = 0.8;
    analyserRef.current = analyser;
    freqDataRef.current = new Uint8Array(analyser.frequencyBinCount);

    // Create audio element
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;

    const audio = new Audio();
    audio.crossOrigin = "anonymous";
    audio.src = url;
    audioElRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
      setAudioState("paused");
    });

    audio.addEventListener("ended", () => {
      setAudioState("paused");
      cancelAnimationFrame(rafIdRef.current);
    });

    // Connect: audio → source → analyser → destination
    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    sourceRef.current = source;

    audio.load();
  }, [cleanup, analyzeFrame]);

  const play = useCallback(() => {
    const audio = audioElRef.current;
    const ctx = audioCtxRef.current;
    if (!audio) return;
    if (ctx && ctx.state === "suspended") ctx.resume();
    audio.play();
    setAudioState("playing");
    rafIdRef.current = requestAnimationFrame(analyzeFrame);
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
    setCurrentTime(time);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [cleanup]);

  return {
    analysisRef,
    audioState,
    fileName,
    duration,
    currentTime,
    loadFile,
    play,
    pause,
    toggle,
    seek,
    cleanup,
  };
}
