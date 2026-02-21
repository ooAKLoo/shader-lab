import React, { useEffect, useRef } from "react";
import type { CosmicvortexParams } from "./types";

interface Props {
  params: CosmicvortexParams;
}

interface Particle {
  angle: number;
  radius: number;
  size: number;
  opacity: number;
  colorIndex: number;
  radialDrift: number;
  z: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

// Pre-render a soft glow dot on an offscreen canvas (replaces expensive shadowBlur)
function createGlowSprite(size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  const s = Math.ceil(size * 4);
  c.width = s;
  c.height = s;
  const ctx = c.getContext("2d")!;
  const half = s / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.3, "rgba(255,255,255,0.6)");
  grad.addColorStop(0.7, "rgba(255,255,255,0.15)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
  return c;
}

function spawnParticle(
  armCount: number,
  tightness: number,
  innerR: number,
  diskR: number,
  diskW: number,
  maxR: number,
  warmRatio: number,
): Particle {
  const arm = Math.floor(Math.random() * armCount);
  const armOffset = (arm * 2 * Math.PI) / armCount;

  const u = Math.random();
  const v = Math.random();
  const gauss = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  const diskCenter = diskR * maxR;
  const diskSigma = diskW * maxR;
  let r = diskCenter + gauss * diskSigma;
  const minR = innerR * maxR * 1.05;
  if (r < minR) r = minR + Math.random() * diskSigma * 0.5;
  if (r > maxR * 0.95) r = maxR * 0.95 - Math.random() * diskSigma * 0.3;

  const spiralAngle = tightness * Math.log(r / minR + 1);
  const scatter = (Math.random() - 0.5) * 0.8;
  const angle = armOffset + spiralAngle + scatter;

  return {
    angle,
    radius: r,
    size: 0.3 + Math.random() * 0.7,
    opacity: 0.3 + Math.random() * 0.7,
    colorIndex: Math.random() < warmRatio ? 1 : 0,
    radialDrift: -(0.5 + Math.random() * 1.5),
    z: Math.random(),
  };
}

export const CosmicvortexCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let rafId: number;
    let lastTime = 0;
    let cw = 0;
    let ch = 0;

    // Pre-render glow sprite (created once, tinted at draw time via globalCompositeOperation)
    const glowSprite = createGlowSprite(16);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      cw = rect.width;
      ch = rect.height;
      canvas!.width = cw * dpr;
      canvas!.height = ch * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const [r, g, b] = hexToRgb(paramsRef.current.bgColor);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(0, 0, cw, ch);
    }

    function render(time: number) {
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0.016;
      lastTime = time;

      const p = paramsRef.current;
      const w = cw;
      const h = ch;
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.45;

      // Cache color conversions
      const bgRgb = hexToRgb(p.bgColor);
      const diskRgb = hexToRgb(p.diskColor);
      const accentRgb = hexToRgb(p.accentColor);

      // 1. Trail fade
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},${p.trailFade})`;
      ctx.fillRect(0, 0, w, h);

      // 2. Sync particle count
      const particles = particlesRef.current;
      const target = p.particleCount;
      while (particles.length < target) {
        particles.push(
          spawnParticle(p.spiralArms, p.spiralTightness, p.innerRadius, p.diskRadius, p.diskWidth, maxR, p.warmAccentRatio)
        );
      }
      if (particles.length > target) particles.length = target;

      // 3. Update particles
      const minR = p.innerRadius * maxR;
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        const normR = pt.radius / maxR;
        const omega = p.rotationSpeed / (Math.pow(normR + 0.05, 1.5) + 0.01);
        pt.angle += omega * dt;
        pt.radius += pt.radialDrift * dt;

        if (pt.radius < minR || pt.radius > maxR * 0.98) {
          particles[i] = spawnParticle(
            p.spiralArms, p.spiralTightness, p.innerRadius, p.diskRadius, p.diskWidth, maxR, p.warmAccentRatio
          );
        }
      }

      // 4. Draw accretion disk background glow (once per frame, cheap)
      ctx.globalCompositeOperation = "lighter";
      const diskCenter = p.diskRadius * maxR;
      const diskSigma = p.diskWidth * maxR;
      const diskGlowR = diskCenter + diskSigma * 1.5;
      const diskGlow = ctx.createRadialGradient(cx, cy, Math.max(0, diskCenter - diskSigma), cx, cy, diskGlowR);
      diskGlow.addColorStop(0, `rgba(${diskRgb[0]},${diskRgb[1]},${diskRgb[2]},0)`);
      diskGlow.addColorStop(0.3, `rgba(${diskRgb[0]},${diskRgb[1]},${diskRgb[2]},0.02)`);
      diskGlow.addColorStop(0.5, `rgba(${diskRgb[0]},${diskRgb[1]},${diskRgb[2]},0.04)`);
      diskGlow.addColorStop(0.7, `rgba(${diskRgb[0]},${diskRgb[1]},${diskRgb[2]},0.02)`);
      diskGlow.addColorStop(1, `rgba(${diskRgb[0]},${diskRgb[1]},${diskRgb[2]},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, diskGlowR, 0, Math.PI * 2);
      ctx.fillStyle = diskGlow;
      ctx.fill();

      // 5. Draw particles — NO shadowBlur, use glow sprite for bright particles
      const invTwoSigmaSq = 1 / (2 * diskSigma * diskSigma);
      const glowThreshold = 0.4;
      const spriteSize = glowSprite.width;
      // depthIntensity: 0 = no depth effect, 1 = far particles nearly invisible
      const di = p.depthIntensity;

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        const x = cx + Math.cos(pt.angle) * pt.radius;
        const y = cy + Math.sin(pt.angle) * pt.radius;

        const distToDisk = pt.radius - diskCenter;
        const diskFactor = Math.exp(-(distToDisk * distToDisk) * invTwoSigmaSq);

        // z=0 is far (small/dim), z=1 is near (full size/bright)
        // depthScale ranges from (1-di) to 1.0 based on z
        const depthScale = 1 - di * (1 - pt.z);
        const baseSize = pt.size * p.particleSize * depthScale;
        const drawSize = baseSize * (1 + diskFactor * 1.5);
        const drawOpacity = pt.opacity * (0.3 + diskFactor * 0.7) * depthScale;

        let cr: number, cg: number, cb: number;
        if (pt.colorIndex === 1) {
          cr = accentRgb[0]; cg = accentRgb[1]; cb = accentRgb[2];
        } else {
          const blend = diskFactor * 0.5;
          const inv = 1 - blend;
          cr = (255 * inv + diskRgb[0] * blend) | 0;
          cg = (255 * inv + diskRgb[1] * blend) | 0;
          cb = (255 * inv + diskRgb[2] * blend) | 0;
        }

        ctx.globalAlpha = drawOpacity;
        ctx.fillStyle = `rgb(${cr},${cg},${cb})`;

        if (drawSize < 1.2) {
          ctx.fillRect(x - drawSize * 0.5, y - drawSize * 0.5, drawSize, drawSize);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, drawSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw glow sprite for bright particles near disk (replaces shadowBlur)
        if (p.glowIntensity > 0 && diskFactor > glowThreshold) {
          const glowScale = (p.glowIntensity / 15) * diskFactor * drawSize * 0.3;
          const gs = spriteSize * glowScale;
          ctx.globalAlpha = drawOpacity * 0.35 * diskFactor;
          ctx.drawImage(glowSprite, x - gs * 0.5, y - gs * 0.5, gs, gs);
        }
      }

      ctx.globalAlpha = 1;

      // 6. Central void (event horizon)
      ctx.globalCompositeOperation = "source-over";
      const voidR = minR * 1.8;
      const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidR);
      voidGrad.addColorStop(0, `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},1)`);
      voidGrad.addColorStop(0.5, `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.95)`);
      voidGrad.addColorStop(0.8, `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.4)`);
      voidGrad.addColorStop(1, `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, voidR, 0, Math.PI * 2);
      ctx.fillStyle = voidGrad;
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";

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
      style={{ background: "#050510" }}
    />
  );
};
