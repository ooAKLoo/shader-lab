import React, { useEffect, useRef, useCallback } from "react";
import type { SuperformulaParams } from "./types";

interface Props {
  params: SuperformulaParams;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

function lerpColor(c1: string, c2: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(c1);
  const [r2, g2, b2] = hexToRgb(c2);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${b})`;
}

function superformula(theta: number, m: number, n1: number, n2: number, n3: number): number {
  const a = 1;
  const b = 1;
  const t1 = Math.abs(Math.cos((m * theta) / 4) / a);
  const t2 = Math.abs(Math.sin((m * theta) / 4) / b);
  const r = Math.pow(Math.pow(t1, n2) + Math.pow(t2, n3), -1 / n1);
  return r;
}

export const SuperformulaCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef(0);

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
    const { numRings, maxRadius, baseCircles, circleIncrement, circleBaseSize, circleScale,
            colorCenter, colorEdge, alternateOffset, mathM, mathN1, mathN2, mathN3, shapeRotation } = params;

    for (let ring = 0; ring < numRings; ring++) {
      const ringT = ring / (numRings - 1 || 1);
      const ringRadius = (maxRadius * (ring + 1)) / numRings;
      const numCircles = baseCircles + ring * circleIncrement;
      const color = lerpColor(colorCenter, colorEdge, ringT);
      const size = circleBaseSize * Math.pow(circleScale, ring * 0.3);

      for (let i = 0; i < numCircles; i++) {
        const baseAngle = (i / numCircles) * Math.PI * 2;
        const offset = alternateOffset && ring % 2 === 1 ? Math.PI / numCircles : 0;
        const angle = baseAngle + offset + rotationRef.current + shapeRotation;

        const sf = superformula(angle, mathM, mathN1, mathN2, mathN3);
        const x = cx + ringRadius * sf * Math.cos(angle);
        const y = cy + ringRadius * sf * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, size * sf), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6 + 0.4 * (1 - ringT);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }, [params]);

  useEffect(() => {
    if (params.rotationSpeed === 0) {
      cancelAnimationFrame(rafRef.current);
      draw();
      return;
    }

    const loop = () => {
      rotationRef.current += params.rotationSpeed * 0.01;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [params.rotationSpeed, draw]);

  useEffect(() => {
    if (params.rotationSpeed === 0) draw();
  }, [draw, params.rotationSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => {
      if (params.rotationSpeed === 0) draw();
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw, params.rotationSpeed]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
