import React, { useEffect, useRef, useState } from "react";
import type { LiquidfillParams, LiquidfillShape } from "./types";

interface Props {
  params: LiquidfillParams;
}

interface Harmonic {
  freq: number;
  amp: number;
  phase: number;
}

interface SplashParticle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
}

type Phase = "idle" | "expand" | "splash" | "absorb" | "fill" | "shrink";

const SHAPE_HARMONICS: Record<LiquidfillShape, Harmonic[]> = {
  blob: [
    { freq: 2, amp: 0.15, phase: 0 },
    { freq: 3, amp: 0.1, phase: 1.2 },
  ],
  star: [
    { freq: 5, amp: 0.3, phase: 0 },
    { freq: 10, amp: 0.05, phase: 0.5 },
  ],
  organic: [
    { freq: 3, amp: 0.12, phase: 0 },
    { freq: 5, amp: 0.08, phase: 2.1 },
    { freq: 7, amp: 0.05, phase: 0.7 },
  ],
  flower: [
    { freq: 6, amp: 0.2, phase: 0 },
    { freq: 3, amp: 0.05, phase: 1.5 },
    { freq: 12, amp: 0.03, phase: 0 },
  ],
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getHarmonics(shape: LiquidfillShape, complexity: number): Harmonic[] {
  const base = SHAPE_HARMONICS[shape];
  const result = base.map((h) => ({ ...h }));
  const extraCount = Math.max(0, complexity - base.length);
  for (let i = 0; i < extraCount; i++) {
    result.push({
      freq: (i + result.length + 1) * 2 + 1,
      amp: 0.04 / (i + 1),
      phase: i * 1.618,
    });
  }
  return result;
}

function interpolateHarmonics(from: Harmonic[], to: Harmonic[], t: number): Harmonic[] {
  const maxLen = Math.max(from.length, to.length);
  const result: Harmonic[] = [];
  for (let i = 0; i < maxLen; i++) {
    const f = from[i] || { freq: to[i].freq, amp: 0, phase: to[i].phase };
    const tgt = to[i] || { freq: from[i].freq, amp: 0, phase: from[i].phase };
    result.push({
      freq: lerp(f.freq, tgt.freq, t),
      amp: lerp(f.amp, tgt.amp, t),
      phase: lerp(f.phase, tgt.phase, t),
    });
  }
  return result;
}

function generateBlobPath(
  cx: number,
  cy: number,
  baseRadius: number,
  harmonics: Harmonic[],
  time: number,
  numPoints: number,
): string {
  const points: [number, number][] = [];
  for (let i = 0; i < numPoints; i++) {
    const theta = (i / numPoints) * Math.PI * 2;
    let r = baseRadius;
    for (const h of harmonics) {
      r += baseRadius * h.amp * Math.sin(h.freq * theta + h.phase + time);
    }
    points.push([cx + r * Math.cos(theta), cy + r * Math.sin(theta)]);
  }
  return pointsToSmoothPath(points);
}

/** Catmull-Rom → cubic Bézier closed path */
function pointsToSmoothPath(pts: [number, number][]): string {
  const n = pts.length;
  if (n < 3) return "";
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  d += " Z";
  return d;
}

let nextId = 0;

const PHASE_ORDER: Phase[] = ["idle", "expand", "splash", "absorb", "fill", "shrink"];
const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 0.3,
  expand: 0.8,
  splash: 0.4,
  absorb: 0.6,
  fill: 0.3,
  shrink: 0.5,
};

export const LiquidfillCanvas: React.FC<Props> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    phase: "idle" as Phase,
    phaseTimer: 0,
    blobRadius: 0,
    targetRadius: 20,
    time: 0,
    centerX: 0,
    centerY: 0,
    viewportDiag: 1000,
    splashParticles: [] as SplashParticle[],
    currentHarmonics: getHarmonics("blob", 6),
    targetHarmonics: getHarmonics("blob", 6),
    morphProgress: 1,
    lastShape: "blob" as LiquidfillShape,
    lastComplexity: 6,
  });
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const [blobPath, setBlobPath] = useState("");
  const [renderParticles, setRenderParticles] = useState<SplashParticle[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastTime = 0;

    function resize() {
      const rect = container!.getBoundingClientRect();
      stateRef.current.centerX = rect.width / 2;
      stateRef.current.centerY = rect.height / 2;
      stateRef.current.viewportDiag =
        Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2 + 50;
    }

    function startPhase(phase: Phase) {
      const s = stateRef.current;
      const p = paramsRef.current;
      s.phase = phase;
      s.phaseTimer = 0;

      switch (phase) {
        case "idle":
          s.targetRadius = 20;
          s.splashParticles = [];
          break;
        case "expand":
          s.targetRadius = Math.min(s.centerX, s.centerY) * 0.3;
          break;
        case "splash": {
          const count = p.particleCount;
          const particles: SplashParticle[] = [];
          for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
            const edgeDist = s.blobRadius * 0.9;
            const force = p.splashForce;
            particles.push({
              id: nextId++,
              x: s.centerX + Math.cos(angle) * edgeDist,
              y: s.centerY + Math.sin(angle) * edgeDist,
              targetX: s.centerX + Math.cos(angle) * edgeDist * (1 + force * 1.5),
              targetY: s.centerY + Math.sin(angle) * edgeDist * (1 + force * 1.5),
              radius: 8 + Math.random() * 12,
            });
          }
          s.splashParticles = particles;
          break;
        }
        case "absorb":
          for (const particle of s.splashParticles) {
            particle.targetX = s.centerX;
            particle.targetY = s.centerY;
          }
          break;
        case "fill":
          s.targetRadius = s.viewportDiag;
          s.splashParticles = [];
          break;
        case "shrink":
          s.targetRadius = 0;
          break;
      }
    }

    function nextPhase() {
      const s = stateRef.current;
      const idx = PHASE_ORDER.indexOf(s.phase);
      startPhase(PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]);
    }

    function update(dt: number) {
      const s = stateRef.current;
      const p = paramsRef.current;

      s.time += dt * p.speed * 2;
      s.phaseTimer += dt;

      // Lerp blob radius
      const radiusLerp = 1 - Math.pow(0.001, dt * p.speed * 2);
      s.blobRadius = lerp(s.blobRadius, s.targetRadius, radiusLerp);

      // Lerp splash particles
      const particleLerp = 1 - Math.pow(0.001, dt * p.speed);
      for (const particle of s.splashParticles) {
        particle.x = lerp(particle.x, particle.targetX, particleLerp);
        particle.y = lerp(particle.y, particle.targetY, particleLerp);
      }

      // Handle shape / complexity morphing
      if (p.shape !== s.lastShape || p.complexity !== s.lastComplexity) {
        s.currentHarmonics =
          s.morphProgress >= 1
            ? s.targetHarmonics.map((h) => ({ ...h }))
            : interpolateHarmonics(s.currentHarmonics, s.targetHarmonics, s.morphProgress);
        s.targetHarmonics = getHarmonics(p.shape, p.complexity);
        s.morphProgress = 0;
        s.lastShape = p.shape;
        s.lastComplexity = p.complexity;
      }
      if (s.morphProgress < 1) {
        s.morphProgress = Math.min(1, s.morphProgress + dt * 2);
      }

      const harmonics =
        s.morphProgress >= 1
          ? s.targetHarmonics
          : interpolateHarmonics(s.currentHarmonics, s.targetHarmonics, s.morphProgress);

      // Generate blob SVG path
      if (s.blobRadius > 0.5) {
        const numPoints = 48 + Math.floor(p.complexity * 4);
        setBlobPath(
          generateBlobPath(s.centerX, s.centerY, s.blobRadius, harmonics, s.time, numPoints),
        );
      } else {
        setBlobPath("");
      }

      setRenderParticles([...s.splashParticles]);

      // Phase transitions
      const duration = PHASE_DURATIONS[s.phase] / p.speed;
      if (s.phaseTimer >= duration) {
        if (s.phase === "shrink" && s.blobRadius > 1) {
          // Wait for shrink animation to finish
        } else {
          nextPhase();
        }
      }
    }

    function animate(time: number) {
      const dt = lastTime === 0 ? 0.016 : Math.min((time - lastTime) / 1000, 0.05);
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
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          filter: `blur(${params.blur}px) contrast(${params.contrast})`,
          background: "#000",
        }}
      >
        {/* Main blob shape */}
        {blobPath && (
          <svg className="absolute inset-0 w-full h-full">
            <path d={blobPath} fill={params.color} />
          </svg>
        )}

        {/* Splash particles */}
        {renderParticles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.radius * 2,
              height: p.radius * 2,
              borderRadius: "50%",
              background: params.color,
              transform: "translate(-50%, -50%)",
              willChange: "left, top",
            }}
          />
        ))}
      </div>
    </div>
  );
};
