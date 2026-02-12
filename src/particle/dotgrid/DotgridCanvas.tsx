import React, { useEffect, useRef, useCallback } from "react";
import type { DotgridParams } from "./types";

interface PhaseOverride {
  trigger: boolean;
  phase: number;
}

interface Props {
  params: DotgridParams;
  animStateRef?: React.MutableRefObject<{ phase: number; progress: number }>;
  phaseOverrideRef?: React.MutableRefObject<PhaseOverride | null>;
}

const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function getGridInfo(width: number, height: number, gridSize: number) {
  const cols = Math.ceil(width / gridSize) + 2;
  const rows = Math.ceil(height / gridSize) + 2;
  const offsetX = ((width % gridSize) - gridSize) / 2;
  const offsetY = ((height % gridSize) - gridSize) / 2;
  return { cols, rows, offsetX, offsetY };
}

/** phase 0 = spread (dots fly out from center), phase 1 = morph (dots → grid lines) */
function renderFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  progress: number,
  p: DotgridParams
) {
  const cx = width / 2;
  const cy = height / 2;
  const { cols, rows, offsetX, offsetY } = getGridInfo(width, height, p.gridSize);
  const maxDist = Math.sqrt(cx * cx + cy * cy);
  const color = `${p.colorR}, ${p.colorG}, ${p.colorB}`;

  ctx.clearRect(0, 0, width, height);

  // === Spread: dots fly from center to grid positions ===
  if (phase === 0) {
    const globalT = easeInOutQuart(progress);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const targetX = offsetX + c * p.gridSize;
        const targetY = offsetY + r * p.gridSize;
        const dx = targetX - cx;
        const dy = targetY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const staggerDelay = (dist / maxDist) * p.stagger;
        const localT = Math.max(0, Math.min(1, (globalT - staggerDelay) / (1 - staggerDelay)));
        const easedT = easeOutQuint(localT);
        if (easedT <= 0) continue;

        const x = cx + dx * easedT;
        const y = cy + dy * easedT;
        const opacity = Math.min(easedT * 2, 1);
        const dotR = (p.dotRadius * 0.67) + easedT * (p.dotRadius * 0.33);

        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();
      }
    }
  }

  // === Morph: each dot stretches into cross-shaped grid lines ===
  else if (phase === 1) {
    const morphT = easeOutQuint(easeInOutCubic(progress));

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = offsetX + c * p.gridSize;
        const py = offsetY + r * p.gridSize;
        const dotRadius = p.dotRadius * (1 - morphT * 0.85);
        const armLength = (p.gridSize / 2) * morphT;
        const armThickness = p.dotRadius * (1 - morphT) + 1 * morphT;

        ctx.fillStyle = `rgba(${color}, 1)`;
        ctx.strokeStyle = `rgba(${color}, 1)`;

        if (dotRadius > 0.15) {
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.lineWidth = armThickness;
        ctx.lineCap = "round";

        if (armLength > 0.5) {
          if (c < cols - 1) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + armLength, py);
            ctx.stroke();
          }
          if (c > 0) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px - armLength, py);
            ctx.stroke();
          }
          if (r < rows - 1) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px, py + armLength);
            ctx.stroke();
          }
          if (r > 0) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px, py - armLength);
            ctx.stroke();
          }
        }
      }
    }
  }

  // === Shrink: arms retract to form individual separated crosses ===
  else if (phase === 2) {
    const shrinkT = easeInOutCubic(progress);
    const fullArm = p.gridSize / 2;
    const targetArm = p.gridSize * 0.2;
    const armLength = fullArm + (targetArm - fullArm) * shrinkT;
    const dotRadius = p.dotRadius * 0.15;

    ctx.fillStyle = `rgba(${color}, 1)`;
    ctx.strokeStyle = `rgba(${color}, 1)`;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = offsetX + c * p.gridSize;
        const py = offsetY + r * p.gridSize;

        if (dotRadius > 0.15) {
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + armLength, py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - armLength, py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + armLength); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - armLength); ctx.stroke();
      }
    }
  }

  // === Spin: crosses rotate 360° ===
  else if (phase === 3) {
    const spinT = easeInOutCubic(progress);
    const angle = spinT * Math.PI * 2;
    const armLength = p.gridSize * 0.2;
    const dotRadius = p.dotRadius * 0.15;

    ctx.fillStyle = `rgba(${color}, 1)`;
    ctx.strokeStyle = `rgba(${color}, 1)`;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = offsetX + c * p.gridSize;
        const py = offsetY + r * p.gridSize;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle);

        if (dotRadius > 0.15) {
          ctx.beginPath();
          ctx.arc(0, 0, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(armLength, 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-armLength, 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, armLength); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -armLength); ctx.stroke();

        ctx.restore();
      }
    }
  }

  // === Hold: static individual crosses ===
  else if (phase === 4) {
    const armLength = p.gridSize * 0.2;
    const dotRadius = p.dotRadius * 0.15;

    ctx.fillStyle = `rgba(${color}, 1)`;
    ctx.strokeStyle = `rgba(${color}, 1)`;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = offsetX + c * p.gridSize;
        const py = offsetY + r * p.gridSize;

        if (dotRadius > 0.15) {
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + armLength, py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - armLength, py); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + armLength); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - armLength); ctx.stroke();
      }
    }
  }
}

export const DotgridCanvas: React.FC<Props> = ({ params, animStateRef, phaseOverrideRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const animStateRefProp = useRef(animStateRef);
  animStateRefProp.current = animStateRef;
  const phaseOverrideRefProp = useRef(phaseOverrideRef);
  phaseOverrideRefProp.current = phaseOverrideRef;

  const sizeRef = useRef({ w: 0, h: 0 });

  const animRef = useRef({
    phase: 0,
    accumulatedTime: 0,
    lastTimestamp: null as number | null,
  });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    const a = animRef.current;
    const p = paramsRef.current;

    const durations = [p.spreadDuration, p.morphDuration, p.shrinkDuration ?? 1200, p.spinDuration ?? 1000, 600];
    const dur = durations[a.phase] ?? 800;
    const progress = Math.min(a.accumulatedTime / dur, 1);

    renderFrame(ctx, w, h, a.phase, progress, p);
  }, []);

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
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      draw();
    };

    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement!);
    return () => ro.disconnect();
  }, [draw]);

  useEffect(() => {
    let rafId: number;

    const tick = (ts: number) => {
      const a = animRef.current;
      const p = paramsRef.current;

      // Phase override from music mode
      const overrideRef = phaseOverrideRefProp.current;
      if (overrideRef?.current?.trigger) {
        a.phase = overrideRef.current.phase;
        a.accumulatedTime = 0;
        a.lastTimestamp = ts;
        overrideRef.current.trigger = false;
      }

      if (a.lastTimestamp === null) a.lastTimestamp = ts;
      const dt = (ts - a.lastTimestamp) * p.speed;
      a.lastTimestamp = ts;

      const durations = [p.spreadDuration, p.morphDuration, p.shrinkDuration ?? 1200, p.spinDuration ?? 1000, 600];
      const dur = durations[a.phase] ?? 800;
      a.accumulatedTime += dt;

      if (a.accumulatedTime >= dur) {
        a.phase++;
        a.accumulatedTime = 0;
        // Loop: after hold (phase 4), restart from spread (phase 0)
        if (a.phase > 4) {
          a.phase = 0;
        }
      }

      // Report animation state for PhaseTimeline
      const durations2 = [p.spreadDuration, p.morphDuration, p.shrinkDuration, p.spinDuration, 600];
      const dur2 = durations2[a.phase] ?? 600;
      const prog = dur2 > 0 ? Math.min(a.accumulatedTime / dur2, 1) : 0;
      if (animStateRefProp.current) {
        animStateRefProp.current.current = { phase: a.phase, progress: prog };
      }

      draw();
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [draw]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
