import React, { useEffect, useRef, useState, useCallback } from "react";
import type { MetaballParams } from "./types";

interface Props {
  params: MetaballParams;
}

interface Particle {
  id: number;
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

let nextId = 0;

export const MetaballCanvas: React.FC<Props> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    particles: Particle[];
    phase: Phase;
    phaseTimer: number;
    centerX: number;
    centerY: number;
  }>({
    particles: [],
    phase: "idle",
    phaseTimer: 0,
    centerX: 0,
    centerY: 0,
  });
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const [renderParticles, setRenderParticles] = useState<Particle[]>([]);

  const initParticle = useCallback((): Particle => {
    const s = stateRef.current;
    return {
      id: nextId++,
      x: s.centerX,
      y: s.centerY,
      radius: 0,
      targetX: s.centerX,
      targetY: s.centerY,
      targetRadius: 0,
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastTime = 0;

    function resize() {
      const rect = container!.getBoundingClientRect();
      stateRef.current.centerX = rect.width / 2;
      stateRef.current.centerY = rect.height / 2;
    }

    function startPhase(phase: Phase) {
      const s = stateRef.current;
      const p = paramsRef.current;
      s.phase = phase;
      s.phaseTimer = 0;

      switch (phase) {
        case "idle": {
          s.particles = [
            {
              id: nextId++,
              x: s.centerX,
              y: s.centerY,
              radius: 0,
              targetX: s.centerX,
              targetY: s.centerY,
              targetRadius: 0,
            },
          ];
          break;
        }
        case "grow": {
          if (s.particles.length === 0) {
            s.particles = [
              {
                id: nextId++,
                x: s.centerX,
                y: s.centerY,
                radius: 0,
                targetX: s.centerX,
                targetY: s.centerY,
                targetRadius: 0,
              },
            ];
          }
          const particle = s.particles[0];
          particle.targetRadius = p.particleSize;
          particle.targetX = s.centerX;
          particle.targetY = s.centerY;
          break;
        }
        case "split": {
          const count = p.splitCount;
          const parent = s.particles[0];
          const newParticles: Particle[] = [];
          for (let i = 0; i < count; i++) {
            const angle = (i * 2 * Math.PI) / count;
            const dist = p.scatterRadius;
            newParticles.push({
              id: nextId++,
              x: parent.x,
              y: parent.y,
              radius: parent.radius,
              targetX: s.centerX + Math.cos(angle) * dist,
              targetY: s.centerY + Math.sin(angle) * dist,
              targetRadius: p.particleSize * 0.5,
            });
          }
          s.particles = newParticles;
          break;
        }
        case "scatter": {
          break;
        }
        case "gather": {
          for (const particle of s.particles) {
            particle.targetX = s.centerX;
            particle.targetY = s.centerY;
            particle.targetRadius = p.particleSize * 0.5;
          }
          break;
        }
        case "shrink": {
          s.particles = [
            {
              id: nextId++,
              x: s.centerX,
              y: s.centerY,
              radius: s.particles[0]?.radius || p.particleSize * 0.5,
              targetX: s.centerX,
              targetY: s.centerY,
              targetRadius: p.particleSize,
            },
          ];
          break;
        }
      }
    }

    function getPhaseDuration(phase: Phase): number {
      const speed = paramsRef.current.speed;
      const base: Record<Phase, number> = {
        idle: 0.3,
        grow: 1.2,
        split: 1.5,
        scatter: 0.8,
        gather: 1.5,
        shrink: 1.0,
      };
      return base[phase] / speed;
    }

    const PHASE_ORDER: Phase[] = [
      "idle",
      "grow",
      "split",
      "scatter",
      "gather",
      "shrink",
    ];

    function nextPhase() {
      const s = stateRef.current;
      const idx = PHASE_ORDER.indexOf(s.phase);
      const next = PHASE_ORDER[(idx + 1) % PHASE_ORDER.length];
      startPhase(next);
    }

    function update(dt: number) {
      const s = stateRef.current;
      const p = paramsRef.current;
      const lerpFactor = 1 - Math.pow(0.001, dt * p.speed);

      s.phaseTimer += dt;

      for (const particle of s.particles) {
        particle.x = lerp(particle.x, particle.targetX, lerpFactor);
        particle.y = lerp(particle.y, particle.targetY, lerpFactor);
        particle.radius = lerp(particle.radius, particle.targetRadius, lerpFactor);
      }

      if (s.phaseTimer >= getPhaseDuration(s.phase)) {
        if (s.phase === "shrink") {
          s.particles[0].targetRadius = 0;
          if (s.particles[0].radius < 0.5) {
            nextPhase();
          }
        } else {
          nextPhase();
        }
      }

      setRenderParticles([...s.particles]);
    }

    function animate(time: number) {
      const dt =
        lastTime === 0
          ? 0.016
          : Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      update(dt);
      rafId = requestAnimationFrame(animate);
    }

    resize();
    startPhase("idle");

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [initParticle]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* Gooey filter layer: blur + contrast = metaball merge */}
      <div
        className="absolute inset-0"
        style={{
          filter: `blur(${params.blur}px) contrast(${params.contrast})`,
          background: "#000",
        }}
      >
        {renderParticles.map((p) => {
          const d = p.radius * 2;
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: d,
                height: d,
                borderRadius: "50%",
                background: params.color,
                transform: "translate(-50%, -50%)",
                willChange: "left, top, width, height",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
