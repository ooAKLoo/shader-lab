import React, { useEffect, useRef, useCallback } from "react";
import type { TextParticleParams } from "./types";

interface Props {
  params: TextParticleParams;
}

interface Particle {
  sx: number; sy: number;
  tx: number; ty: number;
  x: number;  y: number;
  vx: number; vy: number;
  /** per-particle random angle for dissolve/converge jitter */
  jAngle: number;
  /** per-particle random magnitude scale (0.5–1.5) */
  jMag: number;
  /** per-particle random delay (0–0.3) for staggered dissolution */
  jDelay: number;
}

/**
 * Animation phases:
 *  idle_source  → show solid source text (hold)
 *  dissolve     → solid source text fades out, particles fade in at source positions
 *  morph        → particles interpolate from source to target
 *  converge     → particles fade out at target positions, solid target text fades in
 *  idle_target  → show solid target text (hold)
 *  Then reverse when auto-loop is on.
 */
type Phase = "idle_source" | "dissolve" | "morph" | "converge" | "idle_target";

const DISSOLVE_DURATION = 0.7;   // seconds — longer for smooth dissolution
const CONVERGE_DURATION = 0.7;
const IDLE_HOLD = 1.2;           // seconds to hold solid text
const MAX_JITTER = 40;           // max pixel displacement during dissolve/converge

function sampleText(
  text: string,
  width: number,
  height: number,
  count: number
): { x: number; y: number }[] {
  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;
  const ctx = offscreen.getContext("2d")!;

  const fontSize = computeFontSize(text, width, height, ctx);
  ctx.fillStyle = "#fff";
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels: { x: number; y: number }[] = [];
  const step = 2;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (imageData.data[(y * width + x) * 4 + 3] > 128) {
        pixels.push({ x, y });
      }
    }
  }

  shuffle(pixels);
  return pixels.slice(0, count);
}

function computeFontSize(
  text: string,
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
): number {
  // start large, shrink to fit
  let fontSize = Math.min(width, height) * 0.7;
  ctx.font = `bold ${fontSize}px sans-serif`;
  let metrics = ctx.measureText(text);
  // shrink if text is wider than 90% of canvas
  while (metrics.width > width * 0.9 && fontSize > 20) {
    fontSize *= 0.9;
    ctx.font = `bold ${fontSize}px sans-serif`;
    metrics = ctx.measureText(text);
  }
  return fontSize;
}

function samplePerChar(
  text: string,
  width: number,
  height: number,
  totalCount: number
): { x: number; y: number }[][] {
  const chars = [...text];
  if (chars.length === 0) return [];

  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;
  const ctx = offscreen.getContext("2d")!;

  const fontSize = computeFontSize(text, width, height, ctx);
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textBaseline = "middle";

  const fullMetrics = ctx.measureText(text);
  const fullWidth = fullMetrics.width;
  const startX = (width - fullWidth) / 2;
  let offsetX = startX;

  const charPositions: { char: string; x: number }[] = [];
  for (const ch of chars) {
    const m = ctx.measureText(ch);
    charPositions.push({ char: ch, x: offsetX });
    offsetX += m.width;
  }

  const countPerChar = Math.floor(totalCount / chars.length);
  const results: { x: number; y: number }[][] = [];

  for (const { char, x } of charPositions) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(char, x, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels: { x: number; y: number }[] = [];
    const step = 2;
    for (let py = 0; py < height; py += step) {
      for (let px = 0; px < width; px += step) {
        if (imageData.data[(py * width + px) * 4 + 3] > 128) {
          pixels.push({ x: px, y: py });
        }
      }
    }
    shuffle(pixels);
    results.push(pixels.slice(0, countPerChar));
  }

  return results;
}

function shuffle(arr: { x: number; y: number }[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function matchPoints(
  src: { x: number; y: number }[],
  dst: { x: number; y: number }[]
): Particle[] {
  const count = Math.min(src.length, dst.length);
  const particles: Particle[] = [];
  const used = new Set<number>();

  for (let i = 0; i < count; i++) {
    let bestIdx = -1;
    let bestDist = Infinity;
    for (let j = 0; j < dst.length; j++) {
      if (used.has(j)) continue;
      const dx = src[i].x - dst[j].x;
      const dy = src[i].y - dst[j].y;
      const d = dx * dx + dy * dy;
      if (d < bestDist) {
        bestDist = d;
        bestIdx = j;
      }
      if (d < 100) break;
    }
    if (bestIdx >= 0) {
      used.add(bestIdx);
      particles.push({
        sx: src[i].x, sy: src[i].y,
        tx: dst[bestIdx].x, ty: dst[bestIdx].y,
        x: src[i].x, y: src[i].y,
        vx: 0, vy: 0,
        jAngle: Math.random() * Math.PI * 2,
        jMag: 0.5 + Math.random(),
        jDelay: Math.random() * 0.3,
      });
    }
  }
  return particles;
}

function buildParticles(
  charFrom: string,
  charTo: string,
  width: number,
  height: number,
  count: number,
  mode: "perChar" | "mixed"
): Particle[] {
  if (mode === "mixed") {
    const srcPoints = sampleText(charFrom, width, height, count);
    const dstPoints = sampleText(charTo, width, height, count);
    return matchPoints(srcPoints, dstPoints);
  }

  const fromChars = [...charFrom];
  const toChars = [...charTo];
  const maxLen = Math.max(fromChars.length, toChars.length);
  while (fromChars.length < maxLen) fromChars.push(" ");
  while (toChars.length < maxLen) toChars.push(" ");

  const srcPerChar = samplePerChar(fromChars.join(""), width, height, count);
  const dstPerChar = samplePerChar(toChars.join(""), width, height, count);

  const allParticles: Particle[] = [];
  for (let i = 0; i < maxLen; i++) {
    const src = srcPerChar[i] || [];
    const dst = dstPerChar[i] || [];
    allParticles.push(...matchPoints(src, dst));
  }
  return allParticles;
}

/** Draw solid text centered on the canvas */
function drawSolidText(
  ctx: CanvasRenderingContext2D,
  text: string,
  width: number,
  height: number,
  color: string,
  alpha: number
) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  const fontSize = computeFontSize(text, width, height, ctx);
  ctx.fillStyle = color;
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);
  ctx.restore();
}

export const TextparticleCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    particles: Particle[];
    phase: Phase;
    phaseTime: number;       // elapsed time in current phase (seconds)
    morphProgress: number;   // 0→1 for the morph phase
    forward: boolean;
    rafId: number;
    needsResample: boolean;
    width: number;
    height: number;
    lastTimestamp: number;
  }>({
    particles: [],
    phase: "idle_source",
    phaseTime: 0,
    morphProgress: 0,
    forward: true,
    rafId: 0,
    needsResample: true,
    width: 0,
    height: 0,
    lastTimestamp: 0,
  });

  const paramsRef = useRef(params);
  paramsRef.current = params;

  const resample = useCallback((width: number, height: number) => {
    const p = paramsRef.current;
    const particles = buildParticles(
      p.charFrom, p.charTo, width, height, p.particleCount, p.morphMode
    );
    const st = stateRef.current;
    st.particles = particles;
    st.phase = "idle_source";
    st.phaseTime = 0;
    st.morphProgress = 0;
    st.forward = true;
    st.width = width;
    st.height = height;
    st.needsResample = false;
    st.lastTimestamp = 0;
  }, []);

  useEffect(() => {
    stateRef.current.needsResample = true;
  }, [params.charFrom, params.charTo, params.particleCount, params.morphMode]);

  useEffect(() => {
    const handler = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      resample(Math.floor(rect.width * dpr), Math.floor(rect.height * dpr));
    };
    window.addEventListener("textparticle-morph", handler);
    return () => window.removeEventListener("textparticle-morph", handler);
  }, [resample]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      stateRef.current.needsResample = true;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    resample(canvas.width, canvas.height);

    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (timestamp: number) => {
      const st = stateRef.current;
      const p = paramsRef.current;

      if (st.needsResample) {
        resample(canvas.width, canvas.height);
      }

      // delta time in seconds
      const dt = st.lastTimestamp ? (timestamp - st.lastTimestamp) / 1000 : 0;
      st.lastTimestamp = timestamp;

      // advance phase time
      st.phaseTime += dt;

      // phase transitions
      if (st.phase === "idle_source" && st.phaseTime >= IDLE_HOLD) {
        st.phase = "dissolve";
        st.phaseTime = 0;
      } else if (st.phase === "dissolve" && st.phaseTime >= DISSOLVE_DURATION) {
        st.phase = "morph";
        st.phaseTime = 0;
        st.morphProgress = 0;
      } else if (st.phase === "morph" && st.morphProgress >= 1) {
        st.phase = "converge";
        st.phaseTime = 0;
      } else if (st.phase === "converge" && st.phaseTime >= CONVERGE_DURATION) {
        st.phase = "idle_target";
        st.phaseTime = 0;
      } else if (st.phase === "idle_target" && st.phaseTime >= IDLE_HOLD && p.autoLoop) {
        // reverse direction and restart
        st.forward = !st.forward;
        st.phase = "dissolve";
        st.phaseTime = 0;
        st.morphProgress = 0;
        // reset velocity for trail mode
        for (const pt of st.particles) {
          pt.vx = 0;
          pt.vy = 0;
          pt.x = st.forward ? pt.sx : pt.tx;
          pt.y = st.forward ? pt.sy : pt.ty;
        }
      }

      // advance morph progress during morph phase
      if (st.phase === "morph") {
        st.morphProgress = Math.min(1, st.morphProgress + p.speed);
      }

      // --- Render ---
      ctx.fillStyle = p.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = st.particles;
      const size = p.particleSize * (window.devicePixelRatio || 1);
      const w = canvas.width;
      const h = canvas.height;

      const srcText = st.forward ? p.charFrom : p.charTo;
      const dstText = st.forward ? p.charTo : p.charFrom;

      if (st.phase === "idle_source") {
        drawSolidText(ctx, srcText, w, h, p.color, 1);
      } else if (st.phase === "dissolve") {
        // Dissolve uses a pulse-like jitter (0 -> peak -> 0), so it can
        // hand off to morph at t=0 without a visible position jump.
        const rawT = Math.min(1, st.phaseTime / DISSOLVE_DURATION);
        const dpr = window.devicePixelRatio || 1;
        const jitterMax = MAX_JITTER * dpr;

        // solid text stays visible for the first 60%, then fades quickly
        const textAlpha = rawT < 0.6 ? 1 : 1 - easeInOut((rawT - 0.6) / 0.4);
        drawSolidText(ctx, srcText, w, h, p.color, textAlpha);

        // particles: staggered start, pulse jitter, and gradual size growth
        ctx.fillStyle = p.color;
        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          // staggered per-particle progress
          const localT = Math.max(0, Math.min(1, (rawT - pt.jDelay) / (1 - pt.jDelay)));
          const eased = easeInOut(localT);
          const jitterPulse = Math.sin(Math.PI * eased);

          const anchorX = st.forward ? pt.sx : pt.tx;
          const anchorY = st.forward ? pt.sy : pt.ty;
          // jitter: 0 at both ends, strongest in the middle
          const jx = Math.cos(pt.jAngle) * jitterMax * pt.jMag * jitterPulse;
          const jy = Math.sin(pt.jAngle) * jitterMax * pt.jMag * jitterPulse;
          // particle size grows from 0.3× to 1×
          const pSize = size * (0.3 + 0.7 * eased);

          ctx.globalAlpha = Math.min(1, eased * 2); // fade in quickly
          ctx.beginPath();
          ctx.arc(anchorX + jx, anchorY + jy, pSize, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      } else if (st.phase === "morph") {
        const t = easeInOut(st.morphProgress);
        drawParticles(ctx, particles, st.forward, t, size, p);
      } else if (st.phase === "converge") {
        // Converge also uses pulse-like jitter, avoiding the abrupt "pop-out"
        // right after morph reaches t=1.
        const rawT = Math.min(1, st.phaseTime / CONVERGE_DURATION);
        const dpr = window.devicePixelRatio || 1;
        const jitterMax = MAX_JITTER * dpr;

        // particles: stay continuous from morph end, then fade out smoothly
        ctx.fillStyle = p.color;
        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          const localT = Math.max(0, Math.min(1, rawT / (1 - pt.jDelay)));
          const eased = easeInOut(localT);
          const jitterPulse = Math.sin(Math.PI * eased);

          const anchorX = p.renderMode === "trail"
            ? (st.forward ? pt.x + (pt.tx - pt.x) * eased : pt.x + (pt.sx - pt.x) * eased)
            : (st.forward ? pt.tx : pt.sx);
          const anchorY = p.renderMode === "trail"
            ? (st.forward ? pt.y + (pt.ty - pt.y) * eased : pt.y + (pt.sy - pt.y) * eased)
            : (st.forward ? pt.ty : pt.sy);
          const jx = Math.cos(pt.jAngle) * jitterMax * pt.jMag * jitterPulse;
          const jy = Math.sin(pt.jAngle) * jitterMax * pt.jMag * jitterPulse;
          const pSize = size * (1 - 0.2 * eased);
          const baseAlpha = p.renderMode === "trail" ? 0.6 : 1;

          ctx.globalAlpha = baseAlpha * (1 - eased);
          ctx.beginPath();
          ctx.arc(anchorX + jx, anchorY + jy, pSize, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        // solid text fades in from 40% onward
        const textAlpha = rawT < 0.4 ? 0 : easeInOut((rawT - 0.4) / 0.6);
        drawSolidText(ctx, dstText, w, h, p.color, textAlpha);
      } else if (st.phase === "idle_target") {
        drawSolidText(ctx, dstText, w, h, p.color, 1);
      }

      st.rafId = requestAnimationFrame(animate);
    };

    stateRef.current.rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(stateRef.current.rafId);
      ro.disconnect();
    };
  }, [resample]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

/** Draw particles in their current morph position using the selected render mode */
function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  forward: boolean,
  t: number,
  size: number,
  p: TextParticleParams
) {
  const mode = p.renderMode;
  ctx.fillStyle = p.color;

  if (mode === "pixel") {
    const gridSize = Math.max(2, Math.ceil(size * 1.5));
    for (let i = 0; i < particles.length; i++) {
      const pt = particles[i];
      const x = forward
        ? pt.sx + (pt.tx - pt.sx) * t
        : pt.tx + (pt.sx - pt.tx) * t;
      const y = forward
        ? pt.sy + (pt.ty - pt.sy) * t
        : pt.ty + (pt.sy - pt.ty) * t;
      const gx = Math.round(x / gridSize) * gridSize;
      const gy = Math.round(y / gridSize) * gridSize;
      ctx.fillRect(gx, gy, gridSize - 1, gridSize - 1);
    }
  } else if (mode === "trail") {
    ctx.globalAlpha = 0.6;
    for (let i = 0; i < particles.length; i++) {
      const pt = particles[i];
      const targetX = forward
        ? pt.sx + (pt.tx - pt.sx) * t
        : pt.tx + (pt.sx - pt.tx) * t;
      const targetY = forward
        ? pt.sy + (pt.ty - pt.sy) * t
        : pt.ty + (pt.sy - pt.ty) * t;
      pt.vx += (targetX - pt.x) * 0.15;
      pt.vy += (targetY - pt.y) * 0.15;
      pt.vx *= 0.85;
      pt.vy *= 0.85;
      pt.x += pt.vx;
      pt.y += pt.vy;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = p.color;
      ctx.lineWidth = size * 0.3;
      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
      ctx.lineTo(pt.x - pt.vx * 3, pt.y - pt.vy * 3);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  } else {
    for (let i = 0; i < particles.length; i++) {
      const pt = particles[i];
      const x = forward
        ? pt.sx + (pt.tx - pt.sx) * t
        : pt.tx + (pt.sx - pt.tx) * t;
      const y = forward
        ? pt.sy + (pt.ty - pt.sy) * t
        : pt.ty + (pt.sy - pt.ty) * t;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
