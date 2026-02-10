import React from "react";
import type { NeontextParams } from "./NeontextCanvas";

interface Props {
  params: NeontextParams;
  onChange: (params: NeontextParams) => void;
}

type PresetKey = "subtle" | "vibrant" | "neon" | "minimalist";

const PRESETS: { id: PresetKey; label: string; params: NeontextParams }[] = [
  {
    id: "subtle",
    label: "Subtle Glow",
    params: { textGlow: 3.0, textScale: 1.0, terrainBrightness: 0.3 },
  },
  {
    id: "vibrant",
    label: "Vibrant Pop",
    params: { textGlow: 5.0, textScale: 1.0, terrainBrightness: 0.5 },
  },
  {
    id: "neon",
    label: "Full Neon",
    params: { textGlow: 8.0, textScale: 1.2, terrainBrightness: 0.2 },
  },
  {
    id: "minimalist",
    label: "Minimal Mood",
    params: { textGlow: 2.0, textScale: 0.8, terrainBrightness: 0.1 },
  },
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
        {value.toFixed(2)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
  </div>
);

export const NeontextControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.textGlow === params.textGlow &&
      p.params.textScale === params.textScale &&
      p.params.terrainBrightness === params.terrainBrightness
  );

  return (
    <>
      {/* Text */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Text
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Glow Intensity"
            value={params.textGlow}
            min={1}
            max={10}
            step={0.5}
            onChange={(v) => onChange({ ...params, textGlow: v })}
          />
          <Slider
            label="Scale"
            value={params.textScale}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, textScale: v })}
          />
        </div>
      </div>

      {/* Terrain */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Terrain
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Brightness"
            value={params.terrainBrightness}
            min={0}
            max={1}
            step={0.1}
            onChange={(v) => onChange({ ...params, terrainBrightness: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Neon Presets
        </div>
        <div className="flex flex-col gap-1.5">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange(preset.params)}
              className={`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${
                currentPreset?.id === preset.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
