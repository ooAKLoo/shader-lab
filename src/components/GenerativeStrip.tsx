import React, { useRef, useEffect } from "react";
import { GENERATIVES, type GenerativeType } from "../generative/generativeTypes";

interface GenerativeStripProps {
  active: GenerativeType;
  onSelect: (id: GenerativeType) => void;
}

export const GenerativeStrip: React.FC<GenerativeStripProps> = ({ active, onSelect }) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0">
      {GENERATIVES.map((gen) => {
        const isActive = active === gen.id;
        return (
          <button
            key={gen.id}
            ref={isActive ? activeRef : null}
            onClick={() => onSelect(gen.id)}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {gen.name}
          </button>
        );
      })}
    </div>
  );
};
