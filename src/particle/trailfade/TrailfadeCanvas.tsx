import React, { useEffect, useRef } from "react";
import type { TrailfadeParams } from "./types";

interface Props {
  params: TrailfadeParams;
}

export const TrailfadeCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let rafId: number;
    let angle = 0;
    let cw = 0;
    let ch = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      cw = rect.width;
      ch = rect.height;
      canvas!.width = cw * dpr;
      canvas!.height = ch * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function render() {
      const p = paramsRef.current;
      const w = cw;
      const h = ch;
      const cx = w / 2;
      const cy = h / 2;

      // Trail fade using destination-out
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0, 0, 0, ${p.trailFade / 100})`;
      ctx.fillRect(0, 0, w, h);

      // Draw brush heads
      ctx.globalCompositeOperation = "source-over";
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((angle * Math.PI) / 180);

      for (let i = 0; i < p.branches; i++) {
        ctx.save();
        ctx.rotate((i * 2 * Math.PI) / p.branches);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(p.curve, p.radius / 2, p.radius, 0);

        ctx.lineWidth = p.brushSize;
        ctx.lineCap = "round";

        const grad = ctx.createLinearGradient(0, 0, p.radius, 0);
        grad.addColorStop(0, p.colorCenter);
        grad.addColorStop(1, p.colorEdge);
        ctx.strokeStyle = grad;

        ctx.shadowColor = p.colorEdge;
        ctx.shadowBlur = p.glowBlur;

        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      angle += p.speed;
      rafId = requestAnimationFrame(render);
    }

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas!);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  // fusedDepth maps to SVG gooey filter: blur stdDeviation 3~25
  const blur = 3 + params.fusedDepth * 22;
  // Alpha contrast: higher = sharper merge edges
  const alphaGain = 10 + params.fusedDepth * 14;
  const alphaBias = -(3 + params.fusedDepth * 6);

  return (
    <>
      {/* SVG Gooey filter definition */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="trailfade-gooey" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${alphaGain} ${alphaBias}`}
              result="gooey"
            />
          </filter>
        </defs>
      </svg>
      <canvas
        ref={canvasRef}
        className="w-full h-full block mix-blend-screen"
        style={params.fused ? { filter: "url(#trailfade-gooey)" } : undefined}
      />
    </>
  );
};
