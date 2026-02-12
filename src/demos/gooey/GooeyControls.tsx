import React from "react";
import type { GooeyParams } from "./GooeyCanvas";

interface GooeyControlsProps {
  params: GooeyParams;
  onChange: (params: GooeyParams) => void;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

const rgbToHex = (rgb: [number, number, number]): string => {
  const r = Math.round(rgb[0] * 255);
  const g = Math.round(rgb[1] * 255);
  const b = Math.round(rgb[2] * 255);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const GooeyControls: React.FC<GooeyControlsProps> = ({ params, onChange }) => {
  const handleChange = (key: keyof GooeyParams, value: number | [number, number, number]) => {
    onChange({ ...params, [key]: value });
  };

  return (
    <div className="space-y-4">
      {/* Scroll Progress */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Scroll Progress</span>
          <span className="text-[10px] text-neutral-400">{params.scrollProgress.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={params.scrollProgress}
          onChange={(e) => handleChange("scrollProgress", parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Column Width */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Column Width</span>
          <span className="text-[10px] text-neutral-400">{params.colWidth.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="0.2"
          max="1.5"
          step="0.01"
          value={params.colWidth}
          onChange={(e) => handleChange("colWidth", parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Speed */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Speed</span>
          <span className="text-[10px] text-neutral-400">{params.speed.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={params.speed}
          onChange={(e) => handleChange("speed", parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Scale */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Scale</span>
          <span className="text-[10px] text-neutral-400">{params.scale.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="0.15"
          max="0.35"
          step="0.01"
          value={params.scale}
          onChange={(e) => handleChange("scale", parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Seed */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Seed</span>
          <span className="text-[10px] text-neutral-400">{params.seed.toFixed(3)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={params.seed}
          onChange={(e) => handleChange("seed", parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Color */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] text-neutral-500 uppercase tracking-wide">Color</span>
        </div>
        <input
          type="color"
          value={rgbToHex(params.color)}
          onChange={(e) => handleChange("color", hexToRgb(e.target.value))}
          className="w-full h-8 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};
