import React, { useCallback, useEffect, useRef } from "react";
import type {
  Dot,
  Dotgrid2AudioAnalysis,
  Dotgrid2Params,
  EasingFn,
  FormationTarget,
  FormationType,
} from "../shared/types";
import { clearTextCache, generateFormation } from "./formations";

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
  confidence: 0,
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

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function safeNumber(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}

function pulseEnvelope(phase: number, sharpness: number): number {
  const x = ((phase % 1) + 1) % 1;
  return Math.exp(-x * sharpness);
}

const BEAT_PULSE = 0.5;

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

export const Dotgrid2Canvas: React.FC<Props> = ({ params, audioTimeRef, analysisRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const dotsRef = useRef<Dot[]>(initDots(params.dotCount));
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const transRef = useRef({
    formation: "grid" as FormationType,
    transitionStart: 0,
    transitionMs: 2000,
    easingFn: easings.easeInOutCubic as EasingFn,
    stagger: 0.5,
  });

  const pulseRef = useRef({ kick: 0, snare: 0, hat: 0, global: 0 });

  // Re-init dots when dotCount changes
  useEffect(() => {
    if (dotsRef.current.length !== params.dotCount) {
      dotsRef.current = initDots(params.dotCount);
      // Force re-apply current formation
      const { w, h } = sizeRef.current;
      if (w > 0 && h > 0) {
        const targets = generateFormation(params.formation, params.dotCount, {
          radius: params.baseRadius,
          opacity: 1,
          color: [params.colorR, params.colorG, params.colorB],
          canvasWidth: w,
          canvasHeight: h,
        });
        assignTargets(dotsRef.current, targets, 0.5);
        transRef.current.transitionStart = (audioTimeRef.current ?? 0);
        transRef.current.formation = params.formation;
      }
    }
  }, [params.dotCount, params.formation, params.baseRadius, params.colorR, params.colorG, params.colorB, audioTimeRef]);

  // Formation switch via params.formation
  useEffect(() => {
    const { w, h } = sizeRef.current;
    if (w <= 0 || h <= 0) return;
    const dots = dotsRef.current;

    const targets = generateFormation(params.formation, dots.length, {
      radius: params.baseRadius,
      opacity: 1,
      color: [params.colorR, params.colorG, params.colorB],
      canvasWidth: w,
      canvasHeight: h,
    });

    const stagger = 0.5;
    assignTargets(dots, targets, stagger);

    transRef.current.formation = params.formation;
    transRef.current.transitionStart = (audioTimeRef.current ?? 0);
    transRef.current.transitionMs = 2000;
    transRef.current.easingFn = easings.easeInOutCubic;
    transRef.current.stagger = stagger;
  }, [params.formation, params.baseRadius, params.colorR, params.colorG, params.colorB, audioTimeRef]);

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
      confidence: clamp(safeNumber(rawAnalysis.confidence), 0, 1),
    };
    const audioTime = audioTimeRef.current ?? 0;
    const trans = transRef.current;

    // Transition progress
    const elapsed = (audioTime - trans.transitionStart) * 1000;
    const rawProgress = clamp(elapsed / Math.max(trans.transitionMs, 1), 0, 1);

    // Pulse system
    const pulse = pulseRef.current;
    pulse.kick = safeNumber(pulse.kick);
    pulse.snare = safeNumber(pulse.snare);
    pulse.hat = safeNumber(pulse.hat);
    pulse.global = safeNumber(pulse.global);
    if (analysis.lowBeat) pulse.kick = Math.max(pulse.kick, BEAT_PULSE);
    if (analysis.midBeat) pulse.snare = Math.max(pulse.snare, BEAT_PULSE);
    if (analysis.highBeat) pulse.hat = Math.max(pulse.hat, BEAT_PULSE);
    if (analysis.isBeat) pulse.global = Math.max(pulse.global, BEAT_PULSE * 0.58);

    // LookAhead contribution
    const lookAheadKick = analysis.lookAheadKick * BEAT_PULSE * 0.32;
    const lookAheadSnare = analysis.lookAheadSnare * BEAT_PULSE * 0.26;
    const lookAheadHat = analysis.lookAheadHat * BEAT_PULSE * 0.2;
    pulse.kick = Math.max(pulse.kick, lookAheadKick);
    pulse.snare = Math.max(pulse.snare, lookAheadSnare);
    pulse.hat = Math.max(pulse.hat, lookAheadHat);

    // Phase clocks
    const beatPhase = ((analysis.barProgress * 4) % 1 + 1) % 1;
    const eighthPhase = ((analysis.barProgress * 8) % 1 + 1) % 1;
    const anticipation = clamp(analysis.anticipation, 0, 1);
    const phaseLead = anticipation * 0.12;

    const beatClock = pulseEnvelope((beatPhase - phaseLead + 1) % 1, 14);
    const hatClock = pulseEnvelope((eighthPhase - phaseLead * 0.8 + 1) % 1, 18);
    const snareClock = pulseEnvelope((beatPhase + 0.5 - phaseLead * 0.6 + 1) % 1, 15);
    const barKickBoost = analysis.beatInBar === 0 ? 1.22 : analysis.beatInBar === 2 ? 1.02 : 0.86;

    pulse.kick = Math.max(pulse.kick, beatClock * BEAT_PULSE * 0.4 * barKickBoost);
    pulse.snare = Math.max(pulse.snare, snareClock * BEAT_PULSE * 0.3);
    pulse.hat = Math.max(pulse.hat, hatClock * BEAT_PULSE * 0.25);
    pulse.global = Math.max(pulse.global, anticipation * BEAT_PULSE * 0.22);

    // Decay
    const decay = clamp(0.92 - analysis.mud * 0.04, 0.78, 0.95);
    pulse.kick *= decay;
    pulse.snare *= decay * 0.93;
    pulse.hat *= decay * 0.87;
    pulse.global *= decay * 0.9;

    // Background: brightness driven by energy + mud
    const bgDim = clamp(analysis.energy * 0.06 + analysis.mud * 0.03, 0, 0.12);
    const bgR = clamp(Math.round(p.bgR - bgDim * 255), 0, 255);
    const bgG = clamp(Math.round(p.bgG - bgDim * 255), 0, 255);
    const bgB = clamp(Math.round(p.bgB - bgDim * 255), 0, 255);
    const fadeAlpha = clamp(safeNumber(0.2 + pulse.global * 0.03 + anticipation * 0.02, 0.18), 0.06, 0.35);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = `rgba(${bgR}, ${bgG}, ${bgB}, ${fadeAlpha})`;
    ctx.fillRect(0, 0, w, h);

    // Glow
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

    ctx.globalCompositeOperation = "source-over";

    // Per-dot rendering — all dots participate
    const kick = pulse.kick * (0.75 + analysis.bass * 0.72 + anticipation * 0.1);
    const snare = pulse.snare * (0.6 + analysis.mid * 0.75 + anticipation * 0.08);
    const hat = pulse.hat * (0.5 + analysis.high * 0.85 + anticipation * 0.06);
    const motionSpeed = clamp((0.7 + hat * 0.9 + anticipation * 0.55) * (1 - analysis.mud * 0.45), 0.45, 1.7);

    for (let i = 0; i < dots.length; i++) {
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

      const drawRadius = dot.radius * (1 + radiusBoost);
      const drawOpacity = clamp(
        dot.opacity + snare * 0.24 + hat * 0.12 * edgeFactor + kick * 0.1 + anticipation * 0.05 - analysis.mud * 0.06,
        0,
        1
      );

      // Sparkle
      const sparkle =
        hat * (0.4 + edgeFactor * 0.9) *
        (1 + anticipation * 0.6) *
        (1 - analysis.mud * 0.45);
      const px = dot.x * w + Math.sin(audioTime * (31 * motionSpeed) + i * 0.71) * sparkle;
      const py = dot.y * h + Math.cos(audioTime * (27 * motionSpeed) + i * 0.59) * sparkle;

      if (drawRadius < 0.2 || drawOpacity < 0.01) continue;

      // Color lift
      const lift = Math.round(
        (snare * 18 + hat * 24 * edgeFactor + analysis.onset * 16 + anticipation * 14 - analysis.mud * 10) * 0.8
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
  }, [analysisRef, audioTimeRef]);

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
