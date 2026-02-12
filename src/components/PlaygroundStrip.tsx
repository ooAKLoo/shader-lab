import React, { useRef, useEffect } from "react";
import { PLAYGROUNDS, type PlaygroundType } from "../data/playgroundTypes";

interface PlaygroundStripProps {
  active: PlaygroundType;
  onSelect: (id: PlaygroundType) => void;
}

export const PlaygroundStrip: React.FC<PlaygroundStripProps> = ({ active, onSelect }) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0">
      {PLAYGROUNDS.map((playground) => {
        const isActive = active === playground.id;
        return (
          <button
            key={playground.id}
            ref={isActive ? activeRef : null}
            onClick={() => onSelect(playground.id)}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {playground.name}
          </button>
        );
      })}
    </div>
  );
};
