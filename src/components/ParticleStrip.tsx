import React, { useRef, useEffect } from "react";
import { PARTICLES, type ParticleType } from "../particle/particleTypes";

interface ParticleStripProps {
  active: ParticleType;
  onSelect: (id: ParticleType) => void;
}

export const ParticleStrip: React.FC<ParticleStripProps> = ({ active, onSelect }) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0">
      {PARTICLES.map((particle) => {
        const isActive = active === particle.id;
        return (
          <button
            key={particle.id}
            ref={isActive ? activeRef : null}
            onClick={() => onSelect(particle.id)}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {particle.name}
          </button>
        );
      })}
    </div>
  );
};
