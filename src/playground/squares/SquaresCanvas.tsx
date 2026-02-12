import React, { useEffect, useRef, useCallback } from "react";
import type { SquaresParams } from "./types";

interface Props {
  params: SquaresParams;
}

type RGB = { r: number; g: number; b: number };

const STOPS: { p: number; color: RGB }[] = [
  { p: 0.0, color: { r: 15, g: 25, b: 60 } },
  { p: 0.25, color: { r: 40, g: 70, b: 140 } },
  { p: 0.45, color: { r: 90, g: 160, b: 200 } },
  { p: 0.6, color: { r: 255, g: 220, b: 150 } },
  { p: 0.75, color: { r: 255, g: 140, b: 60 } },
  { p: 0.9, color: { r: 220, g: 70, b: 40 } },
  { p: 1.0, color: { r: 120, g: 30, b: 60 } },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(a: RGB, b: RGB, t: number): RGB {
  return { r: lerp(a.r, b.r, t), g: lerp(a.g, b.g, t), b: lerp(a.b, b.b, t) };
}

function getColor(p: number, bias: number): RGB {
  if (p < 0) return STOPS[0].color;
  p = Math.min(1, Math.max(0, Math.pow(p, bias)));
  for (let i = 0; i < STOPS.length - 1; i++) {
    if (p >= STOPS[i].p && p <= STOPS[i + 1].p) {
      const t = (p - STOPS[i].p) / (STOPS[i + 1].p - STOPS[i].p);
      return lerpColor(STOPS[i].color, STOPS[i + 1].color, t);
    }
  }
  return STOPS[STOPS.length - 1].color;
}

// Box-Muller transform for normal distribution
function normalRandom(mean: number, stddev: number): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return mean + z * stddev;
}

function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}

function perturbColor(color: RGB, amount: number): RGB {
  return {
    r: clamp(color.r + (Math.random() * 2 - 1) * amount, 0, 255),
    g: clamp(color.g + (Math.random() * 2 - 1) * amount, 0, 255),
    b: clamp(color.b + (Math.random() * 2 - 1) * amount, 0, 255),
  };
}

export const SquaresCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);

    const spreadX = w * params.spread;
    const spreadY = h * params.spread;

    for (let i = 0; i < params.count; i++) {
      const x = normalRandom(w / 2, spreadX);
      const y = normalRandom(h / 2, spreadY);
      const rw = normalRandom(params.size, params.sizeVariance);
      const rh = normalRandom(params.size, params.sizeVariance);
      const color = getColor(y / h, params.gammaBias);
      const perturbed = perturbColor(color, params.perturbation);
      ctx.fillStyle = `rgba(${perturbed.r | 0},${perturbed.g | 0},${perturbed.b | 0},${params.opacity})`;
      ctx.fillRect(x, y, rw, rh);
    }
  }, [params]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => draw());
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
