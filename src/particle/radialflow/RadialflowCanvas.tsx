import React, { useEffect, useRef } from "react";
import type { RadialflowParams } from "./types";

interface Props {
  params: RadialflowParams;
}

interface Particle {
  progress: number;
  speed: number;
  nodeIndex: number;
  size: number;
}

interface Node {
  angle: number;
  x: number;
  y: number;
}

const getBezierPoint = (
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
) => {
  const invT = 1 - t;
  return {
    x: invT * invT * p0.x + 2 * invT * t * p1.x + t * t * p2.x,
    y: invT * invT * p0.y + 2 * invT * t * p1.y + t * t * p2.y,
  };
};

export const RadialflowCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let rafId: number;

    function initParticles() {
      const p = paramsRef.current;
      const arr: Particle[] = [];
      for (let i = 0; i < p.particleCount; i++) {
        arr.push({
          progress: Math.random(),
          speed: (p.speed / 1000) * (0.8 + Math.random() * 0.4),
          nodeIndex: Math.floor(Math.random() * p.nodeCount),
          size: p.particleSize * (0.5 + Math.random()),
        });
      }
      particlesRef.current = arr;
    }

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
      ctx.fillStyle = `rgba(10, 10, 10, ${1 - p.trailLength})`;
      ctx.fillRect(0, 0, w, h);

      const centerX = w / 2;
      const centerY = h / 2;
      const radius = Math.min(w, h) * 0.4;

      rotationRef.current += p.rotationSpeed / 1000;

      // Compute nodes
      const nodes: Node[] = [];
      for (let i = 0; i < p.nodeCount; i++) {
        const angle = (i / p.nodeCount) * Math.PI * 2 + rotationRef.current;
        nodes.push({
          angle,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        });
      }

      // Sync particle count
      while (particlesRef.current.length < p.particleCount) {
        particlesRef.current.push({
          progress: Math.random(),
          speed: (p.speed / 1000) * (0.8 + Math.random() * 0.4),
          nodeIndex: Math.floor(Math.random() * p.nodeCount),
          size: p.particleSize * (0.5 + Math.random()),
        });
      }
      if (particlesRef.current.length > p.particleCount) {
        particlesRef.current.length = p.particleCount;
      }

      // Update and draw particles
      for (const pt of particlesRef.current) {
        pt.progress += pt.speed;
        if (pt.progress > 1) {
          pt.progress = 0;
          pt.nodeIndex = Math.floor(Math.random() * p.nodeCount);
          pt.speed = (p.speed / 1000) * (0.8 + Math.random() * 0.4);
          pt.size = p.particleSize * (0.5 + Math.random());
        }

        const node = nodes[pt.nodeIndex % nodes.length];
        const t = p.direction === "outward" ? pt.progress : 1 - pt.progress;

        // Control point for curvature
        const cpAngle = node.angle + (p.curvature * Math.PI) / 2;
        const cpRadius = radius * 0.5;
        const cp = {
          x: centerX + Math.cos(cpAngle) * cpRadius,
          y: centerY + Math.sin(cpAngle) * cpRadius,
        };

        const pos = getBezierPoint(t, { x: centerX, y: centerY }, cp, node);

        // Color
        let color = p.primaryColor;
        if (p.colorMode === "gradient") {
          color = t > 0.5 ? p.secondaryColor : p.primaryColor;
        } else if (p.colorMode === "rainbow") {
          color = `hsla(${(pt.nodeIndex / p.nodeCount) * 360}, 70%, 60%, 1)`;
        }

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = color;

        if (p.glowIntensity > 0) {
          ctx.shadowBlur = p.glowIntensity;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      // Draw center and outer nodes subtly
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
      ctx.fill();

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    }

    resize();
    ctx.fillStyle = "#0a0a0a";
    const rect = canvas!.getBoundingClientRect();
    ctx.fillRect(0, 0, rect.width, rect.height);
    initParticles();

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
      style={{ background: "#0a0a0a" }}
    />
  );
};
