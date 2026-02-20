import React, { useEffect, useRef, useState, useCallback } from "react";
import type { PathmorphParams, EasingType } from "./types";
// @ts-ignore — flubber has no type declarations
import { interpolate as flubberInterpolate } from "flubber";
import opentype from "opentype.js";

interface Props {
  params: PathmorphParams;
}

// Noto Sans SC — supports Chinese + Latin + symbols (~8MB, lazy loaded)
const FONT_URL = "https://fonts.gstatic.com/s/notosanssc/v37/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_EnYxNbPzS5HE.ttf";

function getEasingFn(type: EasingType): (t: number) => number {
  switch (type) {
    case "linear": return (t) => t;
    case "easeIn": return (t) => t * t * t;
    case "easeOut": return (t) => 1 - Math.pow(1 - t, 3);
    case "bounce": return (t) => {
      const n1 = 7.5625, d1 = 2.75;
      let t2 = t;
      if (t2 < 1 / d1) return n1 * t2 * t2;
      else if (t2 < 2 / d1) return n1 * (t2 -= 1.5 / d1) * t2 + 0.75;
      else if (t2 < 2.5 / d1) return n1 * (t2 -= 2.25 / d1) * t2 + 0.9375;
      else return n1 * (t2 -= 2.625 / d1) * t2 + 0.984375;
    };
    case "easeInOut":
    default:
      return (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
}

function charToPath(font: opentype.Font, char: string, size: number): string {
  const path = font.getPath(char, 0, 0, size);
  return path.toSVG(2).replace(/<path d="/, "").replace(/".*/, "");
}

function getCharBounds(font: opentype.Font, char: string, size: number) {
  const path = font.getPath(char, 0, 0, size);
  const bb = path.getBoundingBox();
  return bb;
}

export const PathmorphCanvas: React.FC<Props> = ({ params }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [font, setFont] = useState<opentype.Font | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef = useRef(0);
  const stateRef = useRef({ progress: 0, animating: false, forward: true, startTime: 0 });
  const paramsRef = useRef(params);
  paramsRef.current = params;
  const interpolatorRef = useRef<((t: number) => string) | null>(null);
  const viewBoxRef = useRef("-20 -280 340 340");

  // Load font with progress
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadProgress(0);
    setError(null);

    fetch(FONT_URL).then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const contentLength = response.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      const reader = response.body!.getReader();
      const chunks: Uint8Array[] = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total > 0 && !cancelled) {
          setLoadProgress(Math.round((received / total) * 100));
        }
      }

      const buffer = new Uint8Array(received);
      let offset = 0;
      for (const chunk of chunks) {
        buffer.set(chunk, offset);
        offset += chunk.length;
      }

      const loadedFont = opentype.parse(buffer.buffer);
      if (!cancelled) {
        setFont(loadedFont);
        setLoading(false);
      }
    }).catch((err: Error) => {
      if (!cancelled) {
        setError(err.message);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, []);

  const buildInterpolator = useCallback(() => {
    if (!font) return;
    const p = paramsRef.current;
    const size = 300;
    try {
      const charFrom = p.charFrom || "A";
      const charTo = p.charTo || "Z";
      const pathFrom = charToPath(font, charFrom, size);
      const pathTo = charToPath(font, charTo, size);
      if (pathFrom && pathTo) {
        interpolatorRef.current = flubberInterpolate(pathFrom, pathTo, { maxSegmentLength: 5 });

        // compute viewBox from both chars' bounding boxes
        const bb1 = getCharBounds(font, charFrom, size);
        const bb2 = getCharBounds(font, charTo, size);
        const minX = Math.min(bb1.x1, bb2.x1) - 20;
        const minY = Math.min(bb1.y1, bb2.y1) - 20;
        const maxX = Math.max(bb1.x2, bb2.x2) + 20;
        const maxY = Math.max(bb1.y2, bb2.y2) + 20;
        viewBoxRef.current = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
        if (svgRef.current) {
          svgRef.current.setAttribute("viewBox", viewBoxRef.current);
        }
      }
    } catch {
      interpolatorRef.current = null;
    }
  }, [font]);

  // Rebuild on char change
  useEffect(() => {
    buildInterpolator();
    stateRef.current.progress = 0;
    stateRef.current.forward = true;
    stateRef.current.animating = true;
    stateRef.current.startTime = performance.now();
  }, [params.charFrom, params.charTo, buildInterpolator]);

  // Listen for morph trigger
  useEffect(() => {
    const handler = () => {
      buildInterpolator();
      stateRef.current.progress = 0;
      stateRef.current.forward = true;
      stateRef.current.animating = true;
      stateRef.current.startTime = performance.now();
    };
    window.addEventListener("pathmorph-morph", handler);
    return () => window.removeEventListener("pathmorph-morph", handler);
  }, [buildInterpolator]);

  // Animation loop
  useEffect(() => {
    if (!font) return;

    const animate = () => {
      const st = stateRef.current;
      const p = paramsRef.current;
      const interp = interpolatorRef.current;
      const pathEl = pathRef.current;

      if (interp && pathEl) {
        if (st.animating) {
          const elapsed = (performance.now() - st.startTime) / 1000;
          const rawT = Math.min(1, elapsed / p.duration);
          const easing = getEasingFn(p.easing);
          const t = st.forward ? easing(rawT) : easing(1 - rawT);

          const d = interp(t);
          pathEl.setAttribute("d", d);

          if (rawT >= 1) {
            st.animating = false;
            setTimeout(() => {
              st.forward = !st.forward;
              st.startTime = performance.now();
              st.animating = true;
            }, 600);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [font]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ backgroundColor: params.bgColor }}>
        <span className="text-[11px] text-neutral-400">
          Loading Noto Sans SC...
        </span>
        {/* Progress bar */}
        <div className="w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-500 rounded-full transition-all duration-300"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
        <span className="text-[9px] text-neutral-500 tabular-nums">
          {loadProgress}%
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: params.bgColor }}>
        <span className="text-[11px] text-red-400">Font load error: {error}</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center" style={{ backgroundColor: params.bgColor }}>
      <svg
        ref={svgRef}
        viewBox={viewBoxRef.current}
        className="w-[60%] h-[60%]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          d=""
          fill={params.showFill ? params.fillColor : "none"}
          stroke={params.showStroke ? params.strokeColor : "none"}
          strokeWidth={params.strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
