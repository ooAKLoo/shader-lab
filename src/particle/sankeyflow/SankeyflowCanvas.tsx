import React, { useEffect, useRef, useMemo } from "react";
import type { SankeyflowParams } from "./types";
import { PALETTES } from "./constants";

interface Props {
  params: SankeyflowParams;
}

interface BranchData {
  weight: number;
  colorIndex: number;
  lengthModifier: number;
}

interface Particle {
  branchId: number;
  t: number;
  speedModifier: number;
  sizeModifier: number;
  offsetX: number;
  offsetY: number;
}

interface PathData {
  p0x: number;
  p0y: number;
  p1x: number;
  p1y: number;
  p2x: number;
  p2y: number;
  p3x: number;
  p3y: number;
  weight: number;
  color: string;
}

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const SankeyflowCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef(0);

  // Pre-generate stable branch data (up to 100 branches)
  const branchData = useMemo<BranchData[]>(() => {
    return Array.from({ length: 100 }, () => ({
      weight: randomRange(0.2, 1.0),
      colorIndex: Math.floor(Math.random() * 4),
      lengthModifier: randomRange(0.8, 1.2),
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    // Offscreen canvas for glow: render particles here first, then
    // composite onto the main canvas with blur — avoids per-particle shadowBlur
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d")!;

    let rafId: number;
    let w = 0;
    let h = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      offscreen.width = w * dpr;
      offscreen.height = h * dpr;
      offCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function syncParticles(count: number) {
      const arr = particlesRef.current;
      while (arr.length < count) {
        arr.push({
          branchId: Math.floor(Math.random() * 100),
          t: Math.random(),
          speedModifier: randomRange(0.5, 1.5),
          sizeModifier: randomRange(0.5, 2.0),
          offsetX: randomRange(-5, 5),
          offsetY: randomRange(-5, 5),
        });
      }
      if (arr.length > count) arr.length = count;
    }

    // Reusable path array to avoid allocations
    const paths: PathData[] = [];

    function render() {
      const cfg = paramsRef.current;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.min(w, h) * 0.45;
      const colors = PALETTES[cfg.palette];

      // Sync particle count
      syncParticles(cfg.particleCount);

      // 1. Trail fade
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(10, 10, 12, ${cfg.trailFade})`;
      ctx.fillRect(0, 0, w, h);

      // System rotation
      rotationRef.current += cfg.rotationSpeed / 1000;

      // 2. Calculate paths
      const angleStep = (Math.PI * 2) / cfg.numBranches;
      paths.length = 0;

      for (let i = 0; i < cfg.numBranches; i++) {
        const bd = branchData[i];
        const angle = i * angleStep + rotationRef.current;
        let R = maxRadius * bd.lengthModifier;

        // Shape modulation: petal/flower
        if (cfg.petalCount > 0 && cfg.petalDepth > 0) {
          const petalFactor =
            1 - cfg.petalDepth * Math.cos(angle * cfg.petalCount);
          R *= petalFactor;
        }

        // Spiral twist: offset the endpoint angle outward
        const endAngle = angle + cfg.spiralTwist;

        // Aspect ratio: stretch X axis
        const ex = cx + R * Math.cos(endAngle) * cfg.aspectRatio;
        const ey = cy + R * Math.sin(endAngle);

        const p0x = cx;
        const p0y = cy;
        const p3x = ex;
        const p3y = ey;

        const twist1 = angle + cfg.curvature;
        const twist2 = endAngle - cfg.curvature;
        const cR = R * 0.35;

        paths.push({
          p0x,
          p0y,
          p1x: cx + cR * Math.cos(twist1) * cfg.aspectRatio,
          p1y: cy + cR * Math.sin(twist1),
          p2x: p3x - cR * Math.cos(twist2) * cfg.aspectRatio,
          p2y: p3y - cR * Math.sin(twist2),
          p3x,
          p3y,
          weight: bd.weight,
          color: colors[bd.colorIndex],
        });
      }

      // 3. Draw base Sankey lines (low opacity)
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < paths.length; i++) {
        const p = paths[i];
        ctx.beginPath();
        ctx.moveTo(p.p0x, p.p0y);
        ctx.bezierCurveTo(p.p1x, p.p1y, p.p2x, p.p2y, p.p3x, p.p3y);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.weight * cfg.lineWidthMultiplier * 2;
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // 4. Render particles to offscreen canvas (no shadow — fast)
      if (cfg.showParticles) {
        offCtx.clearRect(0, 0, w, h);

        const particles = particlesRef.current;
        const flowDir = cfg.flowDirection === "outward" ? 1 : -1;
        const speed = cfg.baseSpeed / 1000;
        const numBranches = cfg.numBranches;
        const isOutward = cfg.flowDirection === "outward";

        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          const path = paths[pt.branchId % numBranches];

          // Update progress
          pt.t += speed * pt.speedModifier * flowDir;
          if (pt.t > 1) pt.t = 0;
          if (pt.t < 0) pt.t = 1;

          // Cubic bezier position (inlined for performance)
          const t = pt.t;
          const u = 1 - t;
          const uu = u * u;
          const uuu = uu * u;
          const tt = t * t;
          const ttt = tt * t;

          const bx =
            uuu * path.p0x +
            3 * uu * t * path.p1x +
            3 * u * tt * path.p2x +
            ttt * path.p3x;
          const by =
            uuu * path.p0y +
            3 * uu * t * path.p1y +
            3 * u * tt * path.p2y +
            ttt * path.p3y;

          // Volume spread: wide in middle, narrow at ends
          const spread = Math.sin(t * Math.PI);
          const x = bx + pt.offsetX * spread;
          const y = by + pt.offsetY * spread;

          // Particle size
          const baseSize = pt.sizeModifier * path.weight * 2.5;
          const currentSize = isOutward
            ? baseSize * (1 - t * 0.5)
            : baseSize * (0.5 + t * 0.5);

          if (currentSize < 0.1) continue;

          offCtx.fillStyle = path.color;
          offCtx.beginPath();
          offCtx.arc(x, y, currentSize, 0, Math.PI * 2);
          offCtx.fill();
        }

        // 5. Composite: draw offscreen as glow layer
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(offscreen, 0, 0, w, h);

        if (cfg.glowIntensity > 0) {
          ctx.filter = `blur(${cfg.glowIntensity}px)`;
          ctx.globalAlpha = 0.5;
          ctx.drawImage(offscreen, 0, 0, w, h);
          ctx.filter = "none";
          ctx.globalAlpha = 1.0;
        }
      }

      // 6. Energy core
      if (cfg.showCore) {
        ctx.globalCompositeOperation = "source-over";
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 25);
        coreGrad.addColorStop(0, "#ffffff");
        coreGrad.addColorStop(0.3, colors[0]);
        coreGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, 25, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    }

    resize();
    ctx.fillStyle = "#0a0a0c";
    ctx.fillRect(0, 0, w, h);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas!);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [branchData]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: "#0a0a0c" }}
    />
  );
};
