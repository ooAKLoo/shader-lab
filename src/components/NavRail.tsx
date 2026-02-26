import React from "react";
import { Layers, Palette, Sparkles, Atom, Hexagon, Info, BookOpen } from "lucide-react";
import type { Category } from "../data/shaderTypes";

interface NavRailProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const NAV_ITEMS: { id: Category; label: string; icon: React.FC<{ size?: number }> }[] = [
  { id: "shaders", label: "Shaders", icon: Layers },
  { id: "demos", label: "Demos", icon: Sparkles },
  { id: "playground", label: "Play", icon: Palette },
  { id: "particle", label: "Particle", icon: Atom },
  { id: "generative", label: "GenArt", icon: Hexagon },
];

export const NavRail: React.FC<NavRailProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-16 flex-shrink-0 flex flex-col items-center h-full py-4 gap-1">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-4">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="3" stroke="white" strokeWidth="1.5" />
          <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Category buttons */}
      {NAV_ITEMS.map((item) => {
        const isActive = activeCategory === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onCategoryChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? "" : ""
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-100"
              }`}
            >
              <item.icon size={18} />
            </div>
            <span
              className={`text-[8px] uppercase tracking-wide font-medium ${
                isActive ? "text-neutral-700" : "text-neutral-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Guide button */}
      <button
        onClick={() => onCategoryChange("guide")}
        className="flex flex-col items-center gap-1 mb-2"
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            activeCategory === "guide"
              ? "bg-neutral-800 text-white"
              : "text-neutral-400 hover:bg-neutral-100"
          }`}
        >
          <BookOpen size={18} />
        </div>
        <span
          className={`text-[8px] uppercase tracking-wide font-medium ${
            activeCategory === "guide" ? "text-neutral-700" : "text-neutral-400"
          }`}
        >
          Guide
        </span>
      </button>

      {/* Info section */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-neutral-100 transition-colors cursor-default">
          <Info size={18} />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[7px] text-neutral-400">GPU</span>
      </div>
    </div>
  );
};
