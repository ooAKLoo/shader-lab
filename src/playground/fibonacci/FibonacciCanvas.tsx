import React, { useEffect, useRef, useCallback } from "react";
import type { FibonacciParams } from "./types";
import { PALETTES } from "./constants";

interface Props {
  params: FibonacciParams;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

function getGradientColor(colors: string[], t: number): string {
  if (t >= 1) return colors[colors.length - 1];
  if (t <= 0) return colors[0];
  const segment = 1 / (colors.length - 1);
  const index = Math.floor(t / segment);
  const remainder = (t - index * segment) / segment;
  const c1 = hexToRgb(colors[index]);
  const c2 = hexToRgb(colors[index + 1]);
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * remainder);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * remainder);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * remainder);
  return `rgb(${r},${g},${b})`;
}

export const FibonacciCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);

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
    ctx.fillStyle = params.bgColor;
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const paletteColors = PALETTES.find((p) => p.value === params.palette)?.colors ?? PALETTES[0].colors;

    for (let i = 0; i < params.numDots; i++) {
      const angle = i * params.angleStep * (Math.PI / 180) + rotationRef.current;
      const radius = params.spread * Math.sqrt(i);
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const dotSize = params.baseSize + radius * params.sizeGrowth;

      let fillColor = params.dotColor;

      if (params.colorMode === "rainbow") {
        fillColor = `hsl(${(i / params.numDots) * 360 - rotationRef.current * 100}, 80%, 60%)`;
      } else if (params.colorMode !== "solid") {
        if (params.colorMode === "alternating") {
          fillColor = paletteColors[i % paletteColors.length];
        } else {
          let t = 0;
          if (params.colorMode === "radial") {
            t = i / params.numDots;
          } else if (params.colorMode === "angular") {
            t = (((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2);
          }
          fillColor = getGradientColor(paletteColors, t);
        }
      }

      ctx.beginPath();
      ctx.arc(x, y, Math.max(0.1, dotSize), 0, 2 * Math.PI);
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
  }, [params]);

  // animation loop
  useEffect(() => {
    if (!params.animate) {
      cancelAnimationFrame(rafRef.current);
      draw();
      return;
    }

    const loop = () => {
      rotationRef.current -= 0.005;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [params.animate, draw]);

  // static redraw
  useEffect(() => {
    if (!params.animate) draw();
  }, [draw, params.animate]);

  // resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => {
      if (!params.animate) draw();
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw, params.animate]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
