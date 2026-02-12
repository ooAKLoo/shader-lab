import React, { useCallback, useEffect, useRef } from "react";
import type {
  BeatAccent,
  Dot,
  Dotgrid2AudioAnalysis,
  Dotgrid2Params,
  EasingFn,
  FormationTarget,
  NarrativeSection,
  TimelineEvent,
} from "../shared/types";
import { clearTextCache, generateFormation } from "./formations";
import { SONG_TIMELINE, findTimelineIndex } from "./timeline";
import { resolveAutoVisualTargets, resolveDirectionState } from "../layer2_analysis/autoDirector";

interface Props {
  params: Dotgrid2Params;
  audioTimeRef: React.RefObject<number>;
  analysisRef: React.RefObject<Dotgrid2AudioAnalysis>;
  isPlaying: boolean;
}

const DEFAULT_ANALYSIS: Dotgrid2AudioAnalysis = {
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
  bpm: 96,
  beatInBar: 0,
  barProgress: 0,
};

/* ── Easing functions ── */
const easings: Record<string, EasingFn> = {
  linear: (t) => t,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  easeOutBounce: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    if (t < 2 / d1) return n1 * (t - 1.5 / d1) * (t - 1.5 / d1) + 0.75;
    if (t < 2.5 / d1) return n1 * (t - 2.25 / d1) * (t - 2.25 / d1) + 0.9375;
    return n1 * (t - 2.625 / d1) * (t - 2.625 / d1) + 0.984375;
  },
  easeInBack: (t) => {
    const c = 1.70158;
    return (c + 1) * t * t * t - c * t * t;
  },
  easeOutBack: (t) => {
    const c = 1.70158;
    return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
  },
  easeInOutBack: (t) => {
    const c = 1.70158 * 1.525;
    return t < 0.5
      ? (Math.pow(2 * t, 2) * ((c + 1) * 2 * t - c)) / 2
      : (Math.pow(2 * t - 2, 2) * ((c + 1) * (2 * t - 2) + c) + 2) / 2;
  },
};

function getEasing(name: string): EasingFn {
  return easings[name] || easings.easeInOutCubic;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function safeNumber(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function accentGain(accent: BeatAccent, channel: BeatAccent): number {
  if (accent === "full") return 1;
  if (accent === channel) return 1.35;
  return 0.82;
}

function pulseEnvelope(phase: number, sharpness: number): number {
  const x = ((phase % 1) + 1) % 1;
  return Math.exp(-x * sharpness);
}

function quantizeStartTime(audioTime: number, event: TimelineEvent, bpm: number, tightness: number): number {
  const quantBeats = event.quantizeBeats ?? 0;
  if (quantBeats <= 0 || tightness < 0.12) return audioTime;

  const clampedBpm = clamp(bpm || 96, 72, 176);
  const beatDur = 60 / clampedBpm;
  const quantum = beatDur * quantBeats;
  if (quantum <= 0.001) return audioTime;

  const snapped = Math.ceil(audioTime / quantum) * quantum;
  const wait = snapped - audioTime;
  const maxWait = beatDur * (0.24 + tightness * 1.6);

  return wait <= maxWait ? snapped : audioTime;
}

/** Initialize dots at center with zero opacity */
function initDots(count: number): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < count; i++) {
    dots.push({
      x: 0.5,
      y: 0.5,
      radius: 0.5,
      opacity: 0,
      r: 180,
      g: 180,
      b: 185,
      fromX: 0.5,
      fromY: 0.5,
      fromRadius: 0.5,
      fromOpacity: 0,
      fromR: 180,
      fromG: 180,
      fromB: 185,
      toX: 0.5,
      toY: 0.5,
      toRadius: 0.5,
      toOpacity: 0,
      toR: 180,
      toG: 180,
      toB: 185,
      delay: 0,
    });
  }
  return dots;
}

/** Assign formation targets to dots, sorted by distance from center for stagger */
function assignTargets(dots: Dot[], targets: FormationTarget[], stagger: number): void {
  const indices = dots.map((_, i) => i);
  indices.sort((a, b) => {
    const da = Math.hypot(dots[a].x - 0.5, dots[a].y - 0.5);
    const db = Math.hypot(dots[b].x - 0.5, dots[b].y - 0.5);
    return da - db;
  });

  const sortedTargets = [...targets];
  sortedTargets.sort((a, b) => {
    const da = Math.hypot(a.x - 0.5, a.y - 0.5);
    const db = Math.hypot(b.x - 0.5, b.y - 0.5);
    return da - db;
  });

  for (let rank = 0; rank < indices.length; rank++) {
    const i = indices[rank];
    const t = sortedTargets[rank % sortedTargets.length];
    const dot = dots[i];

    dot.fromX = dot.x;
    dot.fromY = dot.y;
    dot.fromRadius = dot.radius;
    dot.fromOpacity = dot.opacity;
    dot.fromR = dot.r;
    dot.fromG = dot.g;
    dot.fromB = dot.b;

    dot.toX = t.x;
    dot.toY = t.y;
    dot.toRadius = t.radius;
    dot.toOpacity = t.opacity;
    dot.toR = t.r;
    dot.toG = t.g;
    dot.toB = t.b;

    dot.delay = (rank / Math.max(indices.length, 1)) * stagger;
  }
}

export const Dotgrid2Canvas: React.FC<Props> = ({ params, audioTimeRef, analysisRef, isPlaying }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const dotsRef = useRef<Dot[]>(initDots(params.dotCount));
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const autoRef = useRef({
    dotCount: params.dotCount,
    baseRadius: params.baseRadius,
    bgR: params.bgR,
    bgG: params.bgG,
    bgB: params.bgB,
  });

  const transRef = useRef({
    eventIndex: -1,
    pendingIndex: -1,
    pendingStart: 0,
    transitionStart: 0,
    transitionMs: 2000,
    easingFn: easings.easeInOutCubic,
    beatPulse: 0.35,
    stagger: 0.5,
    accent: "full" as BeatAccent,
    intensity: 0.5,
    section: "intro" as NarrativeSection,
    direction: {
      narrativeIntensity: 0.68,
      rhythmTightness: 0.66,
      motifConsistency: 0.78,
      textDensity: 0.65,
      atmosphere: 0.6,
    },
  });

  const pulseRef = useRef({ kick: 0, snare: 0, hat: 0, global: 0 });

  useEffect(() => {
    if (dotsRef.current.length !== params.dotCount) {
      dotsRef.current = initDots(params.dotCount);
      transRef.current.eventIndex = -1;
      transRef.current.pendingIndex = -1;
      autoRef.current.dotCount = params.dotCount;
    }
  }, [params.dotCount]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    if (w <= 0 || h <= 0) return;

    const p = paramsRef.current;
    const dots = dotsRef.current;
    const rawAnalysis = analysisRef.current ?? DEFAULT_ANALYSIS;
    const analysis: Dotgrid2AudioAnalysis = {
      ...DEFAULT_ANALYSIS,
      ...rawAnalysis,
      bass: clamp(safeNumber(rawAnalysis.bass), 0, 1),
      mud: clamp(safeNumber(rawAnalysis.mud), 0, 1),
      mid: clamp(safeNumber(rawAnalysis.mid), 0, 1),
      high: clamp(safeNumber(rawAnalysis.high), 0, 1),
      energy: clamp(safeNumber(rawAnalysis.energy), 0, 1),
      onset: clamp(safeNumber(rawAnalysis.onset), 0, 1),
      isBeat: Boolean(rawAnalysis.isBeat),
      lowBeat: Boolean(rawAnalysis.lowBeat),
      midBeat: Boolean(rawAnalysis.midBeat),
      highBeat: Boolean(rawAnalysis.highBeat),
      lookAheadKick: clamp(safeNumber(rawAnalysis.lookAheadKick), 0, 1),
      lookAheadSnare: clamp(safeNumber(rawAnalysis.lookAheadSnare), 0, 1),
      lookAheadHat: clamp(safeNumber(rawAnalysis.lookAheadHat), 0, 1),
      anticipation: clamp(safeNumber(rawAnalysis.anticipation), 0, 1),
      bpm: clamp(safeNumber(rawAnalysis.bpm, 96), 60, 220),
      beatInBar: ((Math.floor(safeNumber(rawAnalysis.beatInBar)) % 4) + 4) % 4,
      barProgress: clamp(safeNumber(rawAnalysis.barProgress), 0, 1),
    };
    const audioTime = audioTimeRef.current ?? 0;
    const trans = transRef.current;

    const applyEvent = (index: number, startTime: number) => {
      const event = SONG_TIMELINE[index];
      if (!event) return;

      const direction = resolveDirectionState(p, event, analysis);
      const auto = resolveAutoVisualTargets(p, direction, event.section ?? "verse", analysis);
      const intensity = clamp((event.intensity ?? 0.5) * (0.7 + direction.narrativeIntensity * 0.7), 0.1, 1.25);
      const consistency = direction.motifConsistency;
      const chaos = clamp((1 - consistency) * 0.85 + (event.variation ?? 0) * 0.35, 0, 1);

      let formationType = event.formation;
      if (formationType === "text" && direction.textDensity < 0.38 && (event.variation ?? 0) > 0.45) {
        formationType = event.motif === "desire" ? "heart" : "wave";
      }

      const motifSeed = hashString(`${event.motif ?? event.formation}_${event.text ?? ""}`);
      const eventSeed = hashString(`${event.time}_${event.formation}_${event.text ?? ""}`);
      const seed = Math.round(lerp(eventSeed, motifSeed, consistency));

      trans.eventIndex = index;
      trans.transitionStart = startTime;
      trans.transitionMs = Math.max(120, event.transitionMs * (1.15 - direction.rhythmTightness * 0.32));
      trans.easingFn = getEasing(event.easing);
      trans.beatPulse = event.beatPulse * (0.7 + intensity * 0.55);
      trans.stagger = clamp(event.stagger * (0.85 + (1 - direction.rhythmTightness) * 0.35), 0, 1);
      trans.accent = event.accent ?? "full";
      trans.intensity = intensity;
      trans.section = event.section ?? "verse";
      trans.direction = direction;

      const targets = generateFormation(formationType, dots.length, {
        text: event.text,
        color: event.color,
        radius: auto.baseRadius * (0.88 + intensity * 0.34),
        opacity: clamp((event.opacity ?? 1) * (0.82 + intensity * 0.35), 0.05, 1),
        canvasWidth: w,
        canvasHeight: h,
        seed,
        variation: event.variation,
        chaos,
        textDensity: direction.textDensity,
      });

      assignTargets(dots, targets, trans.stagger);
    };

    const desiredIndex = findTimelineIndex(audioTime);

    if (trans.eventIndex < 0) {
      applyEvent(desiredIndex, audioTime);
      trans.pendingIndex = -1;
    } else if (desiredIndex < trans.eventIndex) {
      applyEvent(desiredIndex, audioTime);
      trans.pendingIndex = -1;
    } else if (desiredIndex > trans.eventIndex) {
      const isLargeJump = desiredIndex - trans.eventIndex > 1;
      if (isLargeJump || !isPlaying) {
        applyEvent(desiredIndex, audioTime);
        trans.pendingIndex = -1;
      } else if (trans.pendingIndex !== desiredIndex) {
        const nextEvent = SONG_TIMELINE[desiredIndex];
        const direction = resolveDirectionState(p, nextEvent, analysis);
        const startTime = quantizeStartTime(audioTime, nextEvent, analysis.bpm, direction.rhythmTightness);
        trans.pendingIndex = desiredIndex;
        trans.pendingStart = startTime;
      }
    }

    if (trans.pendingIndex >= 0 && audioTime >= trans.pendingStart) {
      const idx = trans.pendingIndex;
      trans.pendingIndex = -1;
      applyEvent(idx, trans.pendingStart);
    }

    const liveIndex = trans.eventIndex >= 0 ? trans.eventIndex : desiredIndex;
    const liveEvent = SONG_TIMELINE[liveIndex] ?? SONG_TIMELINE[0];
    const liveDirection = resolveDirectionState(p, liveEvent, analysis);
    const liveAuto = resolveAutoVisualTargets(p, liveDirection, liveEvent.section ?? "verse", analysis);

    autoRef.current.dotCount = lerp(autoRef.current.dotCount, liveAuto.dotCount, 0.08);
    autoRef.current.baseRadius = lerp(autoRef.current.baseRadius, liveAuto.baseRadius, 0.1);
    autoRef.current.bgR = lerp(autoRef.current.bgR, liveAuto.bgR, 0.08);
    autoRef.current.bgG = lerp(autoRef.current.bgG, liveAuto.bgG, 0.08);
    autoRef.current.bgB = lerp(autoRef.current.bgB, liveAuto.bgB, 0.08);

    const elapsed = (audioTime - trans.transitionStart) * 1000;
    const rawProgress = clamp(elapsed / Math.max(trans.transitionMs, 1), 0, 1);

    const pulse = pulseRef.current;
    pulse.kick = safeNumber(pulse.kick);
    pulse.snare = safeNumber(pulse.snare);
    pulse.hat = safeNumber(pulse.hat);
    pulse.global = safeNumber(pulse.global);
    if (analysis.lowBeat) pulse.kick = Math.max(pulse.kick, trans.beatPulse * accentGain(trans.accent, "kick"));
    if (analysis.midBeat) pulse.snare = Math.max(pulse.snare, trans.beatPulse * accentGain(trans.accent, "snare"));
    if (analysis.highBeat) pulse.hat = Math.max(pulse.hat, trans.beatPulse * accentGain(trans.accent, "hat"));
    if (analysis.isBeat) pulse.global = Math.max(pulse.global, trans.beatPulse * 0.58);

    const lookAheadKick = analysis.lookAheadKick * trans.beatPulse * 0.32;
    const lookAheadSnare = analysis.lookAheadSnare * trans.beatPulse * 0.26;
    const lookAheadHat = analysis.lookAheadHat * trans.beatPulse * 0.2;
    pulse.kick = Math.max(pulse.kick, lookAheadKick);
    pulse.snare = Math.max(pulse.snare, lookAheadSnare);
    pulse.hat = Math.max(pulse.hat, lookAheadHat);

    const beatPhase = ((analysis.barProgress * 4) % 1 + 1) % 1;
    const eighthPhase = ((analysis.barProgress * 8) % 1 + 1) % 1;
    const direction = liveDirection;
    const anticipation = clamp(analysis.anticipation, 0, 1);
    const phaseLead = anticipation * 0.12;

    const beatClock = pulseEnvelope((beatPhase - phaseLead + 1) % 1, 8 + direction.rhythmTightness * 12);
    const hatClock = pulseEnvelope((eighthPhase - phaseLead * 0.8 + 1) % 1, 12 + direction.rhythmTightness * 14);
    const snareClock = pulseEnvelope((beatPhase + 0.5 - phaseLead * 0.6 + 1) % 1, 9 + direction.rhythmTightness * 10);
    const barKickBoost = analysis.beatInBar === 0 ? 1.22 : analysis.beatInBar === 2 ? 1.02 : 0.86;

    pulse.kick = Math.max(pulse.kick, beatClock * trans.beatPulse * 0.4 * barKickBoost);
    pulse.snare = Math.max(pulse.snare, snareClock * trans.beatPulse * 0.3);
    pulse.hat = Math.max(pulse.hat, hatClock * trans.beatPulse * 0.25);
    pulse.global = Math.max(pulse.global, anticipation * trans.beatPulse * 0.22);

    const decay = clamp(0.92 - direction.rhythmTightness * 0.075 - analysis.mud * 0.04, 0.78, 0.95);
    pulse.kick *= decay;
    pulse.snare *= decay * 0.93;
    pulse.hat *= decay * 0.87;
    pulse.global *= decay * 0.9;

    const atmosphere = safeNumber(direction.atmosphere, 0.6);
    const bgR = Math.round(autoRef.current.bgR);
    const bgG = Math.round(autoRef.current.bgG);
    const bgB = Math.round(autoRef.current.bgB);
    const fadeAlpha = clamp(safeNumber(0.24 - atmosphere * 0.14 + pulse.global * 0.03 + anticipation * 0.02, 0.18), 0.06, 0.35);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = `rgba(${bgR}, ${bgG}, ${bgB}, ${fadeAlpha})`;
    ctx.fillRect(0, 0, w, h);

    if (atmosphere > 0.05) {
      const glow = ctx.createRadialGradient(
        w * 0.5,
        h * (0.4 + analysis.barProgress * 0.2),
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.7
      );
      const glowAlpha = clamp(safeNumber(0.03 + pulse.global * 0.05 + anticipation * 0.03, 0.04), 0, 1);
      glow.addColorStop(0, `rgba(255, 240, 220, ${glowAlpha})`);
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    }

    ctx.globalCompositeOperation = trans.section === "chorus" ? "lighter" : "source-over";

    const kick = pulse.kick * (0.75 + analysis.bass * 0.72 + anticipation * 0.1);
    const snare = pulse.snare * (0.6 + analysis.mid * 0.75 + anticipation * 0.08);
    const hat = pulse.hat * (0.5 + analysis.high * 0.85 + anticipation * 0.06);
    const baseScale = autoRef.current.baseRadius / Math.max(p.baseRadius, 0.01);
    const activeDots = clamp(Math.round(autoRef.current.dotCount), 80, dots.length);
    const motionSpeed = clamp((0.7 + hat * 0.9 + anticipation * 0.55) * (1 - analysis.mud * 0.45), 0.45, 1.7);

    for (let i = 0; i < activeDots; i++) {
      const dot = dots[i];

      const dotProgress = clamp((rawProgress - dot.delay) / (1 - dot.delay + 0.001), 0, 1);
      const eased = trans.easingFn(dotProgress);

      dot.x = lerp(dot.fromX, dot.toX, eased);
      dot.y = lerp(dot.fromY, dot.toY, eased);
      dot.radius = lerp(dot.fromRadius, dot.toRadius, eased);
      dot.opacity = lerp(dot.fromOpacity, dot.toOpacity, eased);
      dot.r = lerp(dot.fromR, dot.toR, eased);
      dot.g = lerp(dot.fromG, dot.toG, eased);
      dot.b = lerp(dot.fromB, dot.toB, eased);

      const distCenter = Math.hypot(dot.x - 0.5, dot.y - 0.5);
      const edgeFactor = clamp(distCenter / 0.72, 0, 1);
      const centerFactor = 1 - edgeFactor;

      const radiusBoost =
        kick * (0.22 + centerFactor * 0.45) +
        snare * 0.22 +
        hat * (0.06 + edgeFactor * 0.06) +
        analysis.onset * 0.08 +
        anticipation * 0.06 -
        analysis.mud * 0.08;

      const drawRadius = dot.radius * baseScale * (1 + radiusBoost);
      const drawOpacity = clamp(
        dot.opacity + snare * 0.24 + hat * 0.12 * edgeFactor + kick * 0.1 + anticipation * 0.05 - analysis.mud * 0.06,
        0,
        1
      );

      const sparkle =
        hat * (0.4 + edgeFactor * 0.9) *
        (0.5 + atmosphere * 0.9) *
        (1 + anticipation * 0.6) *
        (1 - analysis.mud * 0.45);
      const px = dot.x * w + Math.sin(audioTime * (31 * motionSpeed) + i * 0.71) * sparkle;
      const py = dot.y * h + Math.cos(audioTime * (27 * motionSpeed) + i * 0.59) * sparkle;

      if (drawRadius < 0.2 || drawOpacity < 0.01) continue;

      const lift = Math.round(
        (snare * 18 + hat * 24 * edgeFactor + analysis.onset * 16 + anticipation * 14 - analysis.mud * 10) *
          (0.6 + trans.intensity * 0.4)
      );
      const rr = clamp(Math.round(dot.r) + lift, 0, 255);
      const gg = clamp(Math.round(dot.g) + lift, 0, 255);
      const bb = clamp(Math.round(dot.b) + lift, 0, 255);

      ctx.beginPath();
      ctx.arc(px, py, drawRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rr}, ${gg}, ${bb}, ${drawOpacity})`;
      ctx.fill();
    }

    ctx.globalCompositeOperation = "source-over";
  }, [analysisRef, audioTimeRef, isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      clearTextCache();
      draw();
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement!);
    return () => ro.disconnect();
  }, [draw]);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      draw();
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [draw]);

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: `rgb(${params.bgR}, ${params.bgG}, ${params.bgB})` }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
