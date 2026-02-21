import React, { useEffect, useRef } from "react";
import type { GlassturbineParams } from "./types";

interface Props {
  params: GlassturbineParams;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

export const GlassturbineCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let rafId: number;
    let lastTime = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fill with bg to prevent flash
      const [r, g, b] = hexToRgb(paramsRef.current.bgColor);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(0, 0, rect.width, rect.height);
    }

    function render(time: number) {
      const dt = lastTime ? (time - lastTime) / 1000 : 0.016;
      lastTime = time;

      const p = paramsRef.current;
      const w = canvas!.getBoundingClientRect().width;
      const h = canvas!.getBoundingClientRect().height;
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.4;

      // 1. Trail fade — overlay bg with alpha
      const [bgR, bgG, bgB] = hexToRgb(p.bgColor);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(${bgR},${bgG},${bgB},${p.trailFade})`;
      ctx.fillRect(0, 0, w, h);

      // 2. Update rotation
      angleRef.current += p.rotationSpeed * dt;

      // 3. Draw blades
      const bladeAngleRad = (p.bladeArc * Math.PI) / 180;
      const gapAngle = (2 * Math.PI) / p.bladeCount;
      const innerR = maxR * p.innerRadius;

      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < p.bladeCount; i++) {
        const startAngle = angleRef.current + i * gapAngle;
        const endAngle = startAngle + bladeAngleRad;

        // Create radial gradient for glass effect
        const grad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, maxR);
        const [hR, hG, hB] = hexToRgb(p.highlightColor);
        const [bR, bG, bB] = hexToRgb(p.bladeColor);
        grad.addColorStop(0, `rgba(${hR},${hG},${hB},${p.bladeOpacity * 0.8})`);
        grad.addColorStop(0.3, `rgba(${bR},${bG},${bB},${p.bladeOpacity})`);
        grad.addColorStop(0.7, `rgba(${bR},${bG},${bB},${p.bladeOpacity * 0.6})`);
        grad.addColorStop(1, `rgba(${bR},${bG},${bB},0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, maxR, startAngle, endAngle);
        ctx.arc(cx, cy, innerR, endAngle, startAngle, true);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        // Glow layer
        if (p.glowIntensity > 0) {
          ctx.save();
          ctx.filter = `blur(${p.glowIntensity}px)`;
          ctx.globalAlpha = 0.3;

          const glowGrad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, maxR);
          glowGrad.addColorStop(0, `rgba(${hR},${hG},${hB},${p.bladeOpacity * 0.5})`);
          glowGrad.addColorStop(0.5, `rgba(${bR},${bG},${bB},${p.bladeOpacity * 0.3})`);
          glowGrad.addColorStop(1, `rgba(${bR},${bG},${bB},0)`);

          ctx.beginPath();
          ctx.arc(cx, cy, maxR, startAngle, endAngle);
          ctx.arc(cx, cy, innerR, endAngle, startAngle, true);
          ctx.closePath();
          ctx.fillStyle = glowGrad;
          ctx.fill();

          ctx.restore();
        }
      }

      // 4. Center highlight
      ctx.globalCompositeOperation = "lighter";
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR + maxR * 0.1);
      const [chR, chG, chB] = hexToRgb(p.highlightColor);
      centerGrad.addColorStop(0, `rgba(${chR},${chG},${chB},0.6)`);
      centerGrad.addColorStop(0.5, `rgba(${chR},${chG},${chB},0.15)`);
      centerGrad.addColorStop(1, `rgba(${chR},${chG},${chB},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, innerR + maxR * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = centerGrad;
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

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

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: "#1a0a2e" }}
    />
  );
};
