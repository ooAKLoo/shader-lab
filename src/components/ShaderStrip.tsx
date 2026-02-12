import React, { useRef, useEffect } from "react";
import { SHADERS, type ShaderType } from "../data/shaderTypes";

interface ShaderStripProps {
  active: ShaderType;
  onSelect: (id: ShaderType) => void;
}

export const ShaderStrip: React.FC<ShaderStripProps> = ({ active, onSelect }) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-5 py-3 flex-shrink-0">
      {SHADERS.map((shader) => {
        const isActive = active === shader.id;
        return (
          <button
            key={shader.id}
            ref={isActive ? activeRef : null}
            onClick={() => onSelect(shader.id)}
            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {shader.name}
          </button>
        );
      })}
    </div>
  );
};
