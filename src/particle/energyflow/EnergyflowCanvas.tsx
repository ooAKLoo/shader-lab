import React, { useEffect, useRef } from "react";
import type { EnergyflowParams } from "./types";

interface Props {
  params: EnergyflowParams;
}

interface Particle {
  progress: number;
  speed: number;
  offset: number;
}

export const EnergyflowCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const particlesMapRef = useRef<Map<string, Particle[]>>(new Map());

  // Sync particles when streams change
  useEffect(() => {
    const map = particlesMapRef.current;
    const currentIds = new Set(params.streams.map((s) => s.id));

    // Remove particles for deleted streams
    for (const key of map.keys()) {
      if (!currentIds.has(key)) map.delete(key);
    }

    // Add/update particles for each stream
    for (const stream of params.streams) {
      const existing = map.get(stream.id);
      if (!existing || existing.length !== stream.lineCount) {
        const arr: Particle[] = [];
        for (let i = 0; i < stream.lineCount; i++) {
          arr.push({
            progress: Math.random(),
            speed: (stream.speed / 1000) * (0.8 + Math.random() * 0.4),
            offset: (Math.random() - 0.5) * stream.spread,
          });
        }
        map.set(stream.id, arr);
      }
    }
  }, [
    params.streams
      .map((s) => s.id + s.lineCount + s.spread + s.speed)
      .join("|"),
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let rafId: number;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function render() {
      const p = paramsRef.current;
      const rect = canvas!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Trail effect
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Screen blending for glow
      ctx.globalCompositeOperation = "screen";

      for (const stream of p.streams) {
        const particles = particlesMapRef.current.get(stream.id);
        if (!particles) continue;

        const tx = w * stream.targetX;
        const ty = h * stream.targetY;
        const sx = w * stream.sourceX;
        const sy = h * stream.sourceY;

        for (const pt of particles) {
          pt.progress += pt.speed;
          if (pt.progress > 1) {
            pt.progress = 0;
            pt.speed =
              (stream.speed / 1000) * (0.8 + Math.random() * 0.4);
            pt.offset = (Math.random() - 0.5) * stream.spread;
          }

          const startY = sy + pt.offset;

          // Cubic bezier control points
          const dist = Math.sqrt((tx - sx) ** 2 + (ty - startY) ** 2);
          const cp1x = sx + (tx - sx) * 0.4;
          const cp1y =
            startY + (ty - startY) * stream.curvature * (dist / 500);
          const cp2x = sx + (tx - sx) * 0.7;
          const cp2y = ty - (ty - startY) * 0.1;

          // Draw bezier path with pulse gradient
          ctx.beginPath();
          ctx.moveTo(sx, startY);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, tx, ty);

          const gradient = ctx.createLinearGradient(sx, startY, tx, ty);
          const p1 = Math.max(0, pt.progress - 0.15);
          const p2 = pt.progress;
          const p3 = Math.min(1, pt.progress + 0.15);
          const alphaHex = Math.floor(stream.opacity * 255)
            .toString(16)
            .padStart(2, "0");

          gradient.addColorStop(0, "transparent");
          gradient.addColorStop(p1, `${stream.color}00`);
          gradient.addColorStop(p2, `${stream.color}${alphaHex}`);
          gradient.addColorStop(p3, `${stream.color}00`);
          gradient.addColorStop(1, "transparent");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = stream.width * (1 - pt.progress * 0.5);
          ctx.stroke();

          // Head particle
          if (pt.progress > 0.05 && pt.progress < 0.95) {
            const t = pt.progress;
            const it = 1 - t;
            const cx =
              it ** 3 * sx +
              3 * it ** 2 * t * cp1x +
              3 * it * t ** 2 * cp2x +
              t ** 3 * tx;
            const cy =
              it ** 3 * startY +
              3 * it ** 2 * t * cp1y +
              3 * it * t ** 2 * cp2y +
              t ** 3 * ty;

            ctx.fillStyle = stream.color;
            ctx.beginPath();
            ctx.arc(cx, cy, stream.width * 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";

      // Draw target markers
      if (!p.showMarkers) {
        rafId = requestAnimationFrame(render);
        return;
      }
      for (const stream of p.streams) {
        const tx = w * stream.targetX;
        const ty = h * stream.targetY;

        ctx.strokeStyle = stream.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.25;

        // Crosshair
        ctx.beginPath();
        ctx.moveTo(tx - 12, ty);
        ctx.lineTo(tx + 12, ty);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(tx, ty - 12);
        ctx.lineTo(tx, ty + 12);
        ctx.stroke();

        // Circle
        ctx.beginPath();
        ctx.arc(tx, ty, 8, 0, Math.PI * 2);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = stream.color;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(tx, ty, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;
      }

      rafId = requestAnimationFrame(render);
    }

    resize();
    ctx.fillStyle = "#000";
    const rect = canvas!.getBoundingClientRect();
    ctx.fillRect(0, 0, rect.width, rect.height);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas!);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: "#000" }}
    />
  );
};
