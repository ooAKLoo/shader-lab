import React, { useRef, useEffect, useState, useMemo } from "react";

export interface PhaseInfo {
  name: string;
  duration: number;
  color: string;
  copyText: string;
}

interface Props {
  phases: PhaseInfo[];
  animStateRef: React.RefObject<{ phase: number; progress: number }>;
  totalCopyText?: string;
}

export const PhaseTimeline: React.FC<Props> = ({
  phases,
  animStateRef,
  totalCopyText,
}) => {
  const playheadRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const activePhaseRef = useRef(0);

  const total = useMemo(
    () => phases.reduce((s, p) => s + p.duration, 0),
    [phases]
  );

  useEffect(() => {
    let rafId: number;
    const tick = () => {
      const state = animStateRef.current;
      if (state && playheadRef.current) {
        const { phase, progress } = state;
        let elapsed = 0;
        for (let i = 0; i < phase && i < phases.length; i++) {
          elapsed += phases[i].duration;
        }
        elapsed += (phases[phase]?.duration ?? 0) * progress;
        const pct = total > 0 ? (elapsed / total) * 100 : 0;
        playheadRef.current.style.left = `${Math.min(pct, 100)}%`;

        if (phase !== activePhaseRef.current) {
          activePhaseRef.current = phase;
          setActivePhase(phase);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phases, total, animStateRef]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(
      () => setCopiedIndex((prev) => (prev === index ? null : prev)),
      1500
    );
  };

  return (
    <div className="bg-white rounded-xl p-3 mb-2">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
          Phase Timeline
        </div>
        <div className="text-[9px] text-neutral-400 tabular-nums">
          {(total / 1000).toFixed(1)}s
        </div>
      </div>

      {/* Timeline bar */}
      <div className="relative h-6 flex gap-px rounded-lg overflow-hidden mb-2.5">
        {phases.map((phase, i) => {
          const widthPct = total > 0 ? (phase.duration / total) * 100 : 0;
          const isActive = activePhase === i;
          return (
            <div
              key={i}
              className={`relative flex items-center justify-center transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
              style={{
                width: `${widthPct}%`,
                backgroundColor: phase.color,
              }}
            >
              <span className="text-[8px] font-medium text-white/90 truncate px-1.5 select-none">
                {phase.name}
              </span>
            </div>
          );
        })}
        {/* Playhead */}
        <div
          ref={playheadRef}
          className="absolute top-0 bottom-0 w-px bg-neutral-800 pointer-events-none"
          style={{ left: 0, zIndex: 10 }}
        >
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-neutral-800" />
        </div>
      </div>

      {/* Phase legend with copy buttons */}
      <div className="flex flex-col gap-1">
        {phases.map((phase, i) => {
          const isActive = activePhase === i;
          const isCopied = copiedIndex === i;
          return (
            <div
              key={i}
              className={`flex items-center gap-2 group cursor-pointer rounded-lg px-1.5 py-1 transition-all ${
                isActive
                  ? "bg-neutral-50"
                  : "hover:bg-neutral-50 opacity-60 hover:opacity-100"
              }`}
              onClick={() => handleCopy(phase.copyText, i)}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: phase.color }}
              />
              <span className="text-[9px] text-neutral-600 flex-1 truncate">
                {phase.name}
                <span className="text-neutral-400 ml-1.5 tabular-nums">
                  {phase.duration}ms
                </span>
              </span>
              <div
                className={`transition-opacity ${
                  isCopied
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {isCopied ? (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#71717a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a1a1aa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Copy all button */}
      {totalCopyText && (
        <button
          className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
          onClick={() => handleCopy(totalCopyText, -1)}
        >
          {copiedIndex === -1 ? (
            <>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#71717a"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-[9px] font-medium text-neutral-500">
                Copied
              </span>
            </>
          ) : (
            <>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a1a1aa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span className="text-[9px] font-medium text-neutral-400">
                Copy Full Description
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
