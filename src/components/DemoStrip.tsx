import React from "react";
import type { DemoType } from "../data/demoTypes";
import { DEMOS } from "../data/demoTypes";

interface DemoStripProps {
  active: DemoType;
  onSelect: (demo: DemoType) => void;
}

export const DemoStrip: React.FC<DemoStripProps> = ({ active, onSelect }) => {
  return (
    <div className="px-5 py-3 flex-shrink-0">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {DEMOS.map((demo) => (
          <button
            key={demo.id}
            onClick={() => onSelect(demo.id)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
              active === demo.id
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {demo.name}
          </button>
        ))}
      </div>
    </div>
  );
};
