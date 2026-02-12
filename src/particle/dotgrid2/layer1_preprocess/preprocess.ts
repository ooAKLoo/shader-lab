import type { Dotgrid2AudioAnalysis } from "../shared/types";

interface Biquad {
  b0: number;
  b1: number;
  b2: number;
  a1: number;
  a2: number;
  z1: number;
  z2: number;
}

export interface PrecomputedFrame {
  time: number;
  bass: number;
  mud: number;
  mid: number;
  high: number;
  energy: number;
  onset: number;
  lowBeat: boolean;
  midBeat: boolean;
  highBeat: boolean;
}

export interface PrecomputedTrack {
  frameStep: number;
  frames: PrecomputedFrame[];
  lowBeatTimes: number[];
  midBeatTimes: number[];
  highBeatTimes: number[];
  bpm: number;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
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

function percentile(values: number[], p: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = clamp(p, 0, 1) * (sorted.length - 1);
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  const t = pos - lo;
  return sorted[lo] + (sorted[hi] - sorted[lo]) * t;
}

function toDb(v: number): number {
  return 20 * Math.log10(v + 1e-9);
}

function normalizeDbSeries(raw: number[]): number[] {
  if (raw.length === 0) return [];
  const dbSeries = raw.map((v) => toDb(Math.max(v, 0)));
  const floor = percentile(dbSeries, 0.14);
  const ceil = Math.max(floor + 10, percentile(dbSeries, 0.96));
  const span = Math.max(ceil - floor, 1e-6);
  return dbSeries.map((db) => clamp((db - floor) / span, 0, 1));
}

function normalizeSeries(raw: number[]): number[] {
  if (raw.length === 0) return [];
  const floor = percentile(raw, 0.2);
  const ceil = Math.max(floor + 1e-5, percentile(raw, 0.97));
  const span = Math.max(ceil - floor, 1e-6);
  return raw.map((v) => clamp((v - floor) / span, 0, 1));
}

function pushHistory(history: number[], value: number, maxLen: number): void {
  history.push(value);
  if (history.length > maxLen) history.shift();
}

function createBandPass(sampleRate: number, centerHz: number, q: number): Biquad {
  const w0 = (2 * Math.PI * centerHz) / sampleRate;
  const alpha = Math.sin(w0) / (2 * q);
  const cosW0 = Math.cos(w0);

  const a0 = 1 + alpha;
  return {
    b0: alpha / a0,
    b1: 0,
    b2: -alpha / a0,
    a1: (-2 * cosW0) / a0,
    a2: (1 - alpha) / a0,
    z1: 0,
    z2: 0,
  };
}

function runBiquad(filter: Biquad, input: number): number {
  const out = filter.b0 * input + filter.z1;
  filter.z1 = filter.b1 * input - filter.a1 * out + filter.z2;
  filter.z2 = filter.b2 * input - filter.a2 * out;
  return out;
}

function mixToMono(buffer: AudioBuffer): Float32Array {
  const channels = buffer.numberOfChannels;
  const len = buffer.length;
  const mono = new Float32Array(len);

  for (let ch = 0; ch < channels; ch++) {
    const data = buffer.getChannelData(ch);
    for (let i = 0; i < len; i++) mono[i] += data[i];
  }

  const inv = 1 / Math.max(channels, 1);
  for (let i = 0; i < len; i++) mono[i] *= inv;
  return mono;
}

function normalizeBpm(mutBpm: number): number {
  let bpm = mutBpm;
  while (bpm < 72) bpm *= 2;
  while (bpm > 182) bpm /= 2;
  return clamp(bpm, 72, 182);
}

function estimateBpm(beatTimes: number[]): number {
  if (beatTimes.length < 4) return 96;
  const intervals: number[] = [];
  for (let i = 1; i < beatTimes.length; i++) {
    const dt = beatTimes[i] - beatTimes[i - 1];
    if (dt > 0.24 && dt < 1.0) intervals.push(dt);
  }
  if (intervals.length < 3) return 96;
  return normalizeBpm(60 / median(intervals));
}

export function preprocessAudioBuffer(buffer: AudioBuffer): PrecomputedTrack {
  const mono = mixToMono(buffer);
  const sampleRate = buffer.sampleRate;
  const hop = Math.max(128, Math.round(sampleRate / 115));
  const frameStep = hop / sampleRate;

  const bassFilter = createBandPass(sampleRate, 90, 1.25);
  const mudFilter = createBandPass(sampleRate, 620, 0.76);
  const midFilter = createBandPass(sampleRate, 3200, 0.9);
  const highFilter = createBandPass(sampleRate, 7600, 0.92);

  const bassRaw: number[] = [];
  const mudRaw: number[] = [];
  const midRaw: number[] = [];
  const highRaw: number[] = [];
  const rmsRaw: number[] = [];

  let bassSq = 0;
  let mudSq = 0;
  let midSq = 0;
  let highSq = 0;
  let rmsSq = 0;
  let count = 0;

  for (let i = 0; i < mono.length; i++) {
    const x = mono[i];
    const bass = runBiquad(bassFilter, x);
    const mud = runBiquad(mudFilter, x);
    const mid = runBiquad(midFilter, x);
    const high = runBiquad(highFilter, x);

    bassSq += bass * bass;
    mudSq += mud * mud;
    midSq += mid * mid;
    highSq += high * high;
    rmsSq += x * x;
    count++;

    if (count >= hop) {
      bassRaw.push(Math.sqrt(bassSq / count));
      mudRaw.push(Math.sqrt(mudSq / count));
      midRaw.push(Math.sqrt(midSq / count));
      highRaw.push(Math.sqrt(highSq / count));
      rmsRaw.push(Math.sqrt(rmsSq / count));

      bassSq = 0;
      mudSq = 0;
      midSq = 0;
      highSq = 0;
      rmsSq = 0;
      count = 0;
    }
  }

  if (count > 0) {
    bassRaw.push(Math.sqrt(bassSq / count));
    mudRaw.push(Math.sqrt(mudSq / count));
    midRaw.push(Math.sqrt(midSq / count));
    highRaw.push(Math.sqrt(highSq / count));
    rmsRaw.push(Math.sqrt(rmsSq / count));
  }

  const bassSeries = normalizeDbSeries(bassRaw);
  const mudSeries = normalizeDbSeries(mudRaw);
  const midSeries = normalizeDbSeries(midRaw);
  const highSeries = normalizeDbSeries(highRaw);
  const rmsSeries = normalizeDbSeries(rmsRaw);

  const length = bassSeries.length;
  const lowBeatFlags = new Array<boolean>(length).fill(false);
  const midBeatFlags = new Array<boolean>(length).fill(false);
  const highBeatFlags = new Array<boolean>(length).fill(false);
  const onsetRaw = new Array<number>(length).fill(0);
  const energy = new Array<number>(length).fill(0);

  const lowFluxHistory: number[] = [];
  const midFluxHistory: number[] = [];
  const highFluxHistory: number[] = [];
  const mudFluxHistory: number[] = [];
  const rmsFluxHistory: number[] = [];

  const lowBeatTimes: number[] = [];
  const midBeatTimes: number[] = [];
  const highBeatTimes: number[] = [];

  let prevBass = 0;
  let prevMud = 0;
  let prevMid = 0;
  let prevHigh = 0;
  let prevRms = 0;

  let cooldownLow = 0;
  let cooldownMid = 0;
  let cooldownHigh = 0;

  for (let i = 0; i < length; i++) {
    const bass = clamp(bassSeries[i] - mudSeries[i] * 0.34, 0, 1);
    const mud = mudSeries[i];
    const mid = clamp(midSeries[i] * 0.94 + bassSeries[i] * 0.06, 0, 1);
    const high = highSeries[i];
    const rms = rmsSeries[i];

    energy[i] = bass * 0.58 + mid * 0.26 + high * 0.16;

    const lowFlux = Math.max(0, bass - prevBass);
    const mudFlux = Math.max(0, mud - prevMud);
    const midFlux = Math.max(0, mid - prevMid);
    const highFlux = Math.max(0, high - prevHigh);
    const rmsFlux = Math.max(0, rms - prevRms);

    prevBass = bass;
    prevMud = mud;
    prevMid = mid;
    prevHigh = high;
    prevRms = rms;

    pushHistory(lowFluxHistory, lowFlux, 64);
    pushHistory(midFluxHistory, midFlux, 64);
    pushHistory(highFluxHistory, highFlux, 64);
    pushHistory(mudFluxHistory, mudFlux, 64);
    pushHistory(rmsFluxHistory, rmsFlux, 64);

    if (cooldownLow > 0) cooldownLow--;
    if (cooldownMid > 0) cooldownMid--;
    if (cooldownHigh > 0) cooldownHigh--;

    const meanLowFlux = mean(lowFluxHistory);
    const meanMidFlux = mean(midFluxHistory);
    const meanHighFlux = mean(highFluxHistory);
    const meanMudFlux = mean(mudFluxHistory);
    const meanRmsFlux = mean(rmsFluxHistory);

    const lowScore = lowFlux * 1.52 + rmsFlux * 0.68 - mudFlux * 0.72;
    const midScore = midFlux * 1.22 + rmsFlux * 0.36;
    const highScore = highFlux * 1.18 + rmsFlux * 0.3;

    const lowThreshold = meanLowFlux * 1.44 + meanRmsFlux * 0.36 + meanMudFlux * 0.45 + 0.008;
    const midThreshold = meanMidFlux * 1.62 + meanRmsFlux * 0.28 + 0.007;
    const highThreshold = meanHighFlux * 1.75 + meanRmsFlux * 0.22 + 0.006;

    const time = i * frameStep;

    if (cooldownLow <= 0 && lowScore > lowThreshold && bass > 0.08) {
      lowBeatFlags[i] = true;
      lowBeatTimes.push(time);
      cooldownLow = 11;
    }
    if (cooldownMid <= 0 && midScore > midThreshold && mid > 0.07) {
      midBeatFlags[i] = true;
      midBeatTimes.push(time);
      cooldownMid = 9;
    }
    if (cooldownHigh <= 0 && highScore > highThreshold && high > 0.06) {
      highBeatFlags[i] = true;
      highBeatTimes.push(time);
      cooldownHigh = 5;
    }

    onsetRaw[i] = Math.max(0, lowScore * 1.12 + midScore * 0.9 + highScore * 0.8);
  }

  const onset = normalizeSeries(onsetRaw);
  const bpm = estimateBpm(lowBeatTimes);

  const frames: PrecomputedFrame[] = new Array(length);
  for (let i = 0; i < length; i++) {
    frames[i] = {
      time: i * frameStep,
      bass: clamp(bassSeries[i] - mudSeries[i] * 0.34, 0, 1),
      mud: mudSeries[i],
      mid: clamp(midSeries[i] * 0.94 + bassSeries[i] * 0.06, 0, 1),
      high: highSeries[i],
      energy: energy[i],
      onset: onset[i],
      lowBeat: lowBeatFlags[i],
      midBeat: midBeatFlags[i],
      highBeat: highBeatFlags[i],
    };
  }

  return {
    frameStep,
    frames,
    lowBeatTimes,
    midBeatTimes,
    highBeatTimes,
    bpm,
  };
}

function lowerBound(values: number[], target: number): number {
  let l = 0;
  let r = values.length;
  while (l < r) {
    const m = (l + r) >> 1;
    if (values[m] < target) l = m + 1;
    else r = m;
  }
  return l;
}

export function getLookAheadPulse(times: number[], now: number, windowSec = 0.34, preRollSec = 0.05): number {
  if (times.length === 0) return 0;
  const start = lowerBound(times, now - preRollSec);
  let pulse = 0;

  for (let i = start; i < times.length; i++) {
    const dt = times[i] - now;
    if (dt > windowSec) break;
    if (dt <= 0) {
      pulse = Math.max(pulse, 1);
      continue;
    }
    const shaped = Math.exp(-dt * 8.2);
    pulse = Math.max(pulse, shaped);
  }

  return clamp(pulse, 0, 1);
}

export function samplePrecomputedFrame(track: PrecomputedTrack | null, time: number): PrecomputedFrame | null {
  if (!track || track.frames.length === 0) return null;
  const idx = clamp(Math.round(time / track.frameStep), 0, track.frames.length - 1);
  return track.frames[idx] ?? null;
}

export function mergeWithPrecomputed(
  base: Dotgrid2AudioAnalysis,
  track: PrecomputedTrack | null,
  time: number
): Dotgrid2AudioAnalysis {
  if (!track) return base;
  const frame = samplePrecomputedFrame(track, time);
  if (!frame) return base;

  const bass = base.bass * 0.58 + frame.bass * 0.42;
  const mud = base.mud * 0.62 + frame.mud * 0.38;
  const mid = base.mid * 0.64 + frame.mid * 0.36;
  const high = base.high * 0.65 + frame.high * 0.35;
  const energy = base.energy * 0.64 + frame.energy * 0.36;
  const onset = clamp(base.onset * 0.62 + frame.onset * 0.38, 0, 1);

  return {
    ...base,
    bass: clamp(bass, 0, 1),
    mud: clamp(mud, 0, 1),
    mid: clamp(mid, 0, 1),
    high: clamp(high, 0, 1),
    energy: clamp(energy, 0, 1),
    onset,
  };
}
