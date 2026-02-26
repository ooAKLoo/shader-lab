import React from "react";
import type { DotscapeParams } from "./DotscapeCanvas";

interface Props {
  params: DotscapeParams;
  onChange: (params: DotscapeParams) => void;
}

type PresetKey = "deep" | "emerald" | "sunset" | "mono";

const COLOR_PRESETS: {
  id: PresetKey;
  label: string;
  c1: string;
  c2: string;
}[] = [
  { id: "deep", label: "Deep Space", c1: "#0a1628", c2: "#7db8e0" },
  { id: "emerald", label: "Emerald", c1: "#051a0a", c2: "#4ade80" },
  { id: "sunset", label: "Sunset", c1: "#1a0505", c2: "#f59e0b" },
  { id: "mono", label: "Monochrome", c1: "#0a0a0a", c2: "#e5e5e5" },
];

const Slider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}> = ({ label, value, min, max, step, onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">
        {value.toFixed(1)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-800"
    />
  </div>
);

export const DotscapeControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2
  );

  return (
    <>
      {/* Flow & Grid */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Flow & Grid
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Speed"
            value={params.speed}
            min={0}
            max={2}
            step={0.05}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Grid Density"
            value={params.gridDensity}
            min={20}
            max={100}
            step={1}
            onChange={(v) => onChange({ ...params, gridDensity: v })}
          />
          <Slider
            label="Domain Warp"
            value={params.warpStrength}
            min={0}
            max={10}
            step={0.1}
            onChange={(v) => onChange({ ...params, warpStrength: v })}
          />
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Appearance
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Dot Size"
            value={params.dotSize}
            min={0.3}
            max={2}
            step={0.05}
            onChange={(v) => onChange({ ...params, dotSize: v })}
          />
          <Slider
            label="Brightness"
            value={params.brightness}
            min={0.3}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, brightness: v })}
          />
        </div>
      </div>

      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Palette
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() =>
                onChange({ ...params, color1: preset.c1, color2: preset.c2 })
              }
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})`,
              }}
              title={preset.label}
            />
          ))}
        </div>
        {currentPreset && (
          <div className="mt-2 text-[9px] font-medium text-neutral-500">
            {currentPreset.label}
          </div>
        )}
      </div>
    </>
  );
};
