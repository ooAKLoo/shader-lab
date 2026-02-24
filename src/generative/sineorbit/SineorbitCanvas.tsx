import React, { useEffect, useRef, useCallback } from "react";
import type { SineorbitParams, ShapeType, BlendModeType } from "./types";

interface Props {
  params: SineorbitParams;
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

function blendModeToComposite(mode: BlendModeType): GlobalCompositeOperation {
  switch (mode) {
    case "ADD": return "lighter";
    case "SCREEN": return "screen";
    case "MULTIPLY": return "multiply";
    default: return "source-over";
  }
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  shape: ShapeType,
  w: number,
  h: number,
  morphT: number
) {
  switch (shape) {
    case "circle":
      ctx.beginPath();
      ctx.arc(0, 0, w / 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    case "ellipse":
      ctx.beginPath();
      ctx.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case "petal": {
      const cw = w / 2;
      const ch = h / 2 + Math.sin(morphT) * h * 0.15;
      ctx.beginPath();
      ctx.moveTo(0, -ch);
      ctx.bezierCurveTo(cw, -ch * 0.6, cw, ch * 0.6, 0, ch);
      ctx.bezierCurveTo(-cw, ch * 0.6, -cw, -ch * 0.6, 0, -ch);
      ctx.fill();
      break;
    }
    case "triangle":
      ctx.beginPath();
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(w / 2, h / 2);
      ctx.lineTo(-w / 2, h / 2);
      ctx.closePath();
      ctx.fill();
      break;
    case "diamond":
      ctx.beginPath();
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(w / 2, 0);
      ctx.lineTo(0, h / 2);
      ctx.lineTo(-w / 2, 0);
      ctx.closePath();
      ctx.fill();
      break;
  }
}

export const SineorbitCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(performance.now());

  const draw = useCallback((time: number) => {
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
    const elapsed = (time - startTimeRef.current) / 1000;
    const globalT = elapsed * params.globalSpeed;

    ctx.globalCompositeOperation = blendModeToComposite(params.blendMode);

    for (let layer = 0; layer < params.layerCount; layer++) {
      const layerT = layer / (params.layerCount - 1 || 1);
      const orbitRadius = params.baseRadius + layer * params.radiusStep;
      const numItems = params.baseItems + layer * params.itemsIncrement;
      const layerAngle = globalT * params.layerRotationSpeed * (layer % 2 === 0 ? 1 : -1) + layer * params.layerTwist;
      const color = lerpColor(params.colorInner, params.colorOuter, layerT);

      for (let i = 0; i < numItems; i++) {
        const itemAngle = (i / numItems) * Math.PI * 2 + layerAngle;
        const sineOffset = params.sineAmp * Math.sin(params.sineFreq * itemAngle + globalT * params.morphSpeed);
        const r = orbitRadius + sineOffset;

        const x = cx + r * Math.cos(itemAngle);
        const y = cy + r * Math.sin(itemAngle);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(itemAngle + globalT * params.itemSpinSpeed);
        ctx.fillStyle = color;
        ctx.globalAlpha = params.opacity;

        const morphT = globalT * params.morphSpeed + layer * 0.5;
        drawShape(ctx, params.shapeType, params.shapeWidth, params.shapeHeight, morphT);

        ctx.restore();
      }
    }

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
  }, [params]);

  useEffect(() => {
    const loop = (time: number) => {
      draw(time);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => draw(performance.now()));
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
