import React, { useEffect, useRef, useState, useId } from "react";
import type { GooeyfxParams } from "./types";

interface Props {
  params: GooeyfxParams;
}

interface BarState {
  current: number;
  target: number;
  rising: boolean;
  cooldown: number;
}

export const GooeyfxCanvas: React.FC<Props> = ({ params }) => {
  const filterId = `goo-fx-${useId().replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    bars: BarState[];
    time: number;
    height: number;
  }>({
    bars: [],
    time: 0,
    height: 400,
  });
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const [barPixelHeights, setBarPixelHeights] = useState<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastTime = 0;

    function resize() {
      stateRef.current.height = container!.getBoundingClientRect().height;
    }

    function ensureBars() {
      const count = paramsRef.current.barCount;
      const s = stateRef.current;
      while (s.bars.length < count) {
        s.bars.push({
          current: 0.05,
          target: 0.15 + Math.random() * 0.75,
          rising: true,
          cooldown: Math.random() * 0.4,
        });
      }
      if (s.bars.length > count) {
        s.bars.length = count;
      }
    }

    function update(dt: number) {
      const s = stateRef.current;
      const p = paramsRef.current;
      s.time += dt * p.speed;

      ensureBars();
      const bars = s.bars;
      if (bars.length === 0) return;

      if (p.mode === "spectrum") {
        // Random bar heights — like audio spectrum visualizer
        for (const bar of bars) {
          const riseLerp = 1 - Math.pow(0.01, dt * p.speed * 4);
          const fallLerp = 1 - Math.pow(0.01, dt * p.speed * 2);
          bar.current += (bar.target - bar.current) * (bar.rising ? riseLerp : fallLerp);

          if (bar.cooldown > 0) {
            bar.cooldown -= dt * p.speed;
            continue;
          }

          if (Math.abs(bar.current - bar.target) < 0.03) {
            if (bar.rising) {
              // Was high → go back down
              bar.rising = false;
              bar.target = 0.03 + Math.random() * 0.08;
              bar.cooldown = 0;
            } else {
              // Was low → go up to random height
              bar.rising = true;
              bar.target = 0.2 + Math.random() * 0.8;
              bar.cooldown = Math.random() * 0.5 / p.speed;
            }
          }
        }
      } else if (p.mode === "wave") {
        // Sine wave flowing across bars
        for (let i = 0; i < bars.length; i++) {
          const phase = (i / bars.length) * Math.PI * 2;
          const h1 = Math.sin(s.time * 2 + phase) * 0.5 + 0.5;
          const h2 = Math.sin(s.time * 3.3 + phase * 1.6) * 0.5 + 0.5;
          bars[i].target = 0.08 + h1 * 0.45 + h2 * 0.35;
          const f = 1 - Math.pow(0.001, dt * p.speed * 3);
          bars[i].current += (bars[i].target - bars[i].current) * f;
        }
      } else {
        // Pulse — emanates from center outward
        const center = (bars.length - 1) / 2;
        for (let i = 0; i < bars.length; i++) {
          const dist = Math.abs(i - center) / Math.max(center, 1);
          const h = Math.sin(s.time * 3 - dist * 4);
          bars[i].target = 0.08 + Math.max(0, h) * 0.85;
          const f = 1 - Math.pow(0.001, dt * p.speed * 3);
          bars[i].current += (bars[i].target - bars[i].current) * f;
        }
      }

      const maxH = s.height * 0.65;
      setBarPixelHeights(bars.map((b) => Math.max(b.current * maxH, 2)));
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
    ensureBars();

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  const offset = Math.floor(params.threshold / 2);
  const floorHeight = 25;

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* SVG filter definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={params.blur}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${params.threshold} -${offset}`}
              result="goo"
            />
            {params.crisp && (
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            )}
          </filter>
        </defs>
      </svg>

      {/* Gooey filtered layer */}
      <div
        className="absolute inset-0"
        style={{ filter: `url(#${filterId})` }}
      >
        {/* Floor — connects bar bases into continuous gooey mass */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: floorHeight,
            background: params.color,
          }}
        />
        {/* Bars — centered at bottom, growing upward */}
        <div
          style={{
            position: "absolute",
            bottom: floorHeight - 5,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {barPixelHeights.map((h, i) => (
            <div
              key={i}
              style={{
                width: params.barWidth,
                height: h,
                background: params.color,
                borderRadius:
                  params.barShape === "pill"
                    ? 999
                    : params.barShape === "round"
                    ? `${params.barWidth / 2}px ${params.barWidth / 2}px 0 0`
                    : 0,
                willChange: "height",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
