import React, { useEffect, useRef } from "react";
import type { FissionParams } from "./types";

interface Props {
  params: FissionParams;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  targetX: number;
  targetY: number;
  targetRadius: number;
}

type Phase = "idle" | "grow" | "split" | "scatter" | "gather" | "shrink";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

export const FissionCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let rafId: number;
    let lastTime = 0;
    let centerX = 0;
    let centerY = 0;
    let particles: Particle[] = [];
    let phase: Phase = "idle";
    let phaseTimer = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      centerX = rect.width / 2;
      centerY = rect.height / 2;
    }

    function startPhase(next: Phase) {
      const p = paramsRef.current;
      phase = next;
      phaseTimer = 0;

      switch (next) {
        case "idle": {
          particles = [{
            x: centerX, y: centerY, radius: 0,
            targetX: centerX, targetY: centerY, targetRadius: 0,
          }];
          break;
        }
        case "grow": {
          if (particles.length === 0) {
            particles = [{
              x: centerX, y: centerY, radius: 0,
              targetX: centerX, targetY: centerY, targetRadius: 0,
            }];
          }
          particles[0].targetRadius = p.particleSize;
          particles[0].targetX = centerX;
          particles[0].targetY = centerY;
          break;
        }
        case "split": {
          const count = p.splitCount;
          const parent = particles[0];
          const newParticles: Particle[] = [];
          for (let i = 0; i < count; i++) {
            const angle = (i * 2 * Math.PI) / count;
            newParticles.push({
              x: parent.x, y: parent.y, radius: parent.radius,
              targetX: centerX + Math.cos(angle) * p.scatterRadius,
              targetY: centerY + Math.sin(angle) * p.scatterRadius,
              targetRadius: p.particleSize * 0.45,
            });
          }
          particles = newParticles;
          break;
        }
        case "scatter":
          break;
        case "gather": {
          for (const pt of particles) {
            pt.targetX = centerX;
            pt.targetY = centerY;
            pt.targetRadius = p.particleSize * 0.45;
          }
          break;
        }
        case "shrink": {
          particles = [{
            x: centerX, y: centerY,
            radius: particles[0]?.radius || p.particleSize * 0.45,
            targetX: centerX, targetY: centerY,
            targetRadius: p.particleSize,
          }];
          break;
        }
      }
    }

    function getPhaseDuration(ph: Phase): number {
      const speed = paramsRef.current.speed;
      const base: Record<Phase, number> = {
        idle: 0.3, grow: 1.2, split: 1.5,
        scatter: 0.8, gather: 1.5, shrink: 1.0,
      };
      return base[ph] / speed;
    }

    const PHASE_ORDER: Phase[] = ["idle", "grow", "split", "scatter", "gather", "shrink"];

    function nextPhase() {
      const idx = PHASE_ORDER.indexOf(phase);
      startPhase(PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]);
    }

    function drawParticle(pt: Particle) {
      const p = paramsRef.current;
      const [r, g, b] = hexToRgb(p.color);
      const glowR = pt.radius * p.glowIntensity * 2;

      // Outer glow
      if (glowR > 0) {
        const outer = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, glowR);
        outer.addColorStop(0, `rgba(${r},${g},${b},0.35)`);
        outer.addColorStop(0.5, `rgba(${r},${g},${b},0.1)`);
        outer.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = outer;
        ctx.fill();
      }

      // Core
      if (pt.radius > 0) {
        const core = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, pt.radius);
        core.addColorStop(0, "rgba(255,255,255,0.95)");
        core.addColorStop(0.4, `rgba(${r},${g},${b},0.8)`);
        core.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
      }
    }

    function update(dt: number) {
      const p = paramsRef.current;
      const t = 1 - Math.pow(0.001, dt * p.speed);
      phaseTimer += dt;

      for (const pt of particles) {
        pt.x = lerp(pt.x, pt.targetX, t);
        pt.y = lerp(pt.y, pt.targetY, t);
        pt.radius = lerp(pt.radius, pt.targetRadius, t);
      }

      if (phaseTimer >= getPhaseDuration(phase)) {
        if (phase === "shrink") {
          particles[0].targetRadius = 0;
          if (particles[0].radius < 0.5) nextPhase();
        } else {
          nextPhase();
        }
      }
    }

    function render() {
      const p = paramsRef.current;
      const rect = canvas!.getBoundingClientRect();

      // Trail: semi-transparent black overlay for motion trail
      ctx.fillStyle = `rgba(0,0,0,${p.trailAlpha})`;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Additive blending for glow overlap
      ctx.globalCompositeOperation = "lighter";
      for (const pt of particles) {
        drawParticle(pt);
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function animate(time: number) {
      const dt = lastTime === 0 ? 0.016 : Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      update(dt);
      render();
      rafId = requestAnimationFrame(animate);
    }

    resize();
    // Fill black initially
    const rect = canvas!.getBoundingClientRect();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, rect.width, rect.height);
    startPhase("idle");

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas!);
    rafId = requestAnimationFrame(animate);

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
