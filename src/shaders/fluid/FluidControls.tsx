import React from "react";
import type { FluidParams } from "./FluidCanvas";

interface Props {
  params: FluidParams;
  onChange: (params: FluidParams) => void;
}

type PresetKey = "calm" | "vibrant" | "psychedelic" | "cosmic";

const PRESETS: { id: PresetKey; label: string; params: FluidParams }[] = [
  {
    id: "calm",
    label: "Calm Ocean",
    params: { speed: 0.5, scale: 1.0, hueSpeed: 0.5, saturation: 0.6, brightness: 0.8, contrast: 1.2 },
  },
  {
    id: "vibrant",
    label: "Vibrant Flow",
    params: { speed: 1.0, scale: 1.2, hueSpeed: 1.0, saturation: 0.7, brightness: 0.8, contrast: 1.2 },
  },
  {
    id: "psychedelic",
    label: "Psychedelic",
    params: { speed: 1.5, scale: 1.5, hueSpeed: 2.0, saturation: 0.9, brightness: 0.8, contrast: 1.4 },
  },
  {
    id: "cosmic",
    label: "Cosmic Nebula",
    params: { speed: 0.8, scale: 0.8, hueSpeed: 0.3, saturation: 0.8, brightness: 0.7, contrast: 1.5 },
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

export const FluidControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.speed === params.speed &&
      p.params.scale === params.scale &&
      p.params.hueSpeed === params.hueSpeed
  );

  return (
    <>
      {/* Flow Dynamics */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Flow Dynamics
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
            label="Hue Speed"
            value={params.hueSpeed}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, hueSpeed: v })}
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
            max={1.2}
            step={0.1}
            onChange={(v) => onChange({ ...params, brightness: v })}
          />
          <Slider
            label="Contrast"
            value={params.contrast}
            min={0.8}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, contrast: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Fluid Presets
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
