import React from "react";
import type { NeonParams } from "./NeonCanvas";

interface Props {
  params: NeonParams;
  onChange: (params: NeonParams) => void;
}

type PresetKey = "electric" | "plasma" | "aurora" | "cyberpunk";

const PRESETS: { id: PresetKey; label: string; params: NeonParams }[] = [
  {
    id: "electric",
    label: "Electric Blue",
    params: { speed: 1.0, scale: 1.0, hueShift: 0.5, saturation: 0.8, brightness: 1.0, warpStrength: 0.3 },
  },
  {
    id: "plasma",
    label: "Hot Plasma",
    params: { speed: 1.5, scale: 1.2, hueShift: 0.0, saturation: 0.9, brightness: 1.2, warpStrength: 0.5 },
  },
  {
    id: "aurora",
    label: "Aurora Flow",
    params: { speed: 0.6, scale: 0.8, hueShift: 0.3, saturation: 0.7, brightness: 0.9, warpStrength: 0.4 },
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk",
    params: { speed: 1.2, scale: 1.5, hueShift: 0.8, saturation: 1.0, brightness: 1.1, warpStrength: 0.6 },
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

export const NeonControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.speed === params.speed &&
      p.params.scale === params.scale &&
      p.params.hueShift === params.hueShift
  );

  return (
    <>
      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Speed"
            value={params.speed}
            min={0}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Scale"
            value={params.scale}
            min={0.3}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, scale: v })}
          />
          <Slider
            label="Warp Strength"
            value={params.warpStrength}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, warpStrength: v })}
          />
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Color
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Hue Shift"
            value={params.hueShift}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ ...params, hueShift: v })}
          />
          <Slider
            label="Saturation"
            value={params.saturation}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, saturation: v })}
          />
          <Slider
            label="Brightness"
            value={params.brightness}
            min={0.3}
            max={1.5}
            step={0.1}
            onChange={(v) => onChange({ ...params, brightness: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Style Presets
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
