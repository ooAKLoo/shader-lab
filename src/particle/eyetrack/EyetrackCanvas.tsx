import React, { useEffect, useRef, useState, useCallback } from "react";
import type { EyetrackParams } from "./types";

interface Props {
  params: EyetrackParams;
}

interface EyeState {
  currentX: number;
  currentY: number;
}

export const EyetrackCanvas: React.FC<Props> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const eyeRefs = useRef<(HTMLDivElement | null)[]>([null, null]);
  const pupilRefs = useRef<(HTMLDivElement | null)[]>([null, null]);
  const stateRef = useRef<EyeState[]>([
    { currentX: 0, currentY: 0 },
    { currentX: 0, currentY: 0 },
  ]);
  const targetRef = useRef({ x: 0, y: 0 });

  const [blinkPhase, setBlinkPhase] = useState(false);

  const setEyeRef = useCallback(
    (idx: number) => (el: HTMLDivElement | null) => {
      eyeRefs.current[idx] = el;
    },
    []
  );

  const setPupilRef = useCallback(
    (idx: number) => (el: HTMLDivElement | null) => {
      pupilRefs.current[idx] = el;
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    function handlePointer(e: MouseEvent | TouchEvent) {
      const p = "touches" in e ? e.touches[0] : e;
      if (p) {
        targetRef.current = { x: p.clientX, y: p.clientY };
      }
    }

    function tick() {
      const p = paramsRef.current;

      for (let i = 0; i < 2; i++) {
        const eye = eyeRefs.current[i];
        const pupil = pupilRefs.current[i];
        if (!eye || !pupil) continue;

        const r = eye.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        const dx = targetRef.current.x - cx;
        const dy = targetRef.current.y - cy;

        const maxX = r.width * 0.18;
        const maxY = r.height * 0.10;

        const clamp = (v: number, min: number, max: number) =>
          Math.max(min, Math.min(max, v));

        const tx = clamp(dx * p.sensitivity, -maxX, maxX);
        const ty = clamp(dy * p.sensitivity, -maxY, maxY);

        const state = stateRef.current[i];
        state.currentX += (tx - state.currentX) * p.smoothing;
        state.currentY += (ty - state.currentY) * p.smoothing;

        pupil.style.transform = `translate(calc(-50% + ${state.currentX}px), calc(-50% + ${state.currentY}px))`;
      }

      rafId = requestAnimationFrame(tick);
    }

    // Initialize target to container center
    const rect = container.getBoundingClientRect();
    targetRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    window.addEventListener("mousemove", handlePointer, { passive: true });
    window.addEventListener("touchmove", handlePointer as EventListener, {
      passive: true,
    });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handlePointer);
      window.removeEventListener(
        "touchmove",
        handlePointer as EventListener
      );
    };
  }, []);

  // Blink timer
  useEffect(() => {
    const interval = params.blinkInterval * 1000;
    if (interval <= 0) return;

    const timer = setInterval(() => {
      setBlinkPhase(true);
      setTimeout(() => setBlinkPhase(false), 200);
    }, interval);

    return () => clearInterval(timer);
  }, [params.blinkInterval]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{ background: "#0b0f14" }}
    >
      {/* Card */}
      <div
        style={{
          width: "min(860px, 92%)",
          aspectRatio: "16 / 9",
          background: params.cardColor,
          borderRadius: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Eyes container */}
        <div
          style={{
            display: "flex",
            gap: params.eyeGap,
            transform: "translateY(12px)",
          }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              ref={setEyeRef(i)}
              style={{
                width: params.eyeWidth,
                height: params.eyeHeight,
                background: "#fff",
                borderRadius: params.eyeRadius,
                overflow: "hidden",
                position: "relative",
                boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.02)",
                /* clip-path blink: center = top+bottom close; top = eyelid drops down */
                clipPath: blinkPhase
                  ? params.blinkStyle === "top"
                    ? `inset(100% 0 0 0 round ${params.eyeRadius}px)`
                    : `inset(50% 0 50% 0 round ${params.eyeRadius}px)`
                  : `inset(0 round ${params.eyeRadius}px)`,
                transition: "clip-path 0.12s ease-in-out",
              }}
            >
              {/* Pupil */}
              <div
                ref={setPupilRef(i)}
                style={{
                  width: params.pupilSize,
                  height: params.pupilSize * 1.28,
                  background: "#000",
                  borderRadius: 999,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  willChange: "transform",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
