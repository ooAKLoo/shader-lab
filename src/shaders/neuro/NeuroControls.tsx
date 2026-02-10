import React from "react";
import type { NeuroParams } from "./NeuroCanvas";

interface Props {
  params: NeuroParams;
  onChange: (params: NeuroParams) => void;
}

type PresetKey = "classic" | "neon" | "matrix" | "synthwave";

const PRESETS: { id: PresetKey; label: string; params: NeuroParams }[] = [
  {
    id: "classic",
    label: "Classic Cyber",
    params: { speed: 0.2, zoom: 3.0, colorShift: 0.0, complexity: 1.0, contrast: 1.0 },
  },
  {
    id: "neon",
    label: "Neon City",
    params: { speed: 0.4, zoom: 2.5, colorShift: 2.0, complexity: 1.2, contrast: 1.3 },
  },
  {
    id: "matrix",
    label: "Digital Matrix",
    params: { speed: 0.3, zoom: 3.5, colorShift: 3.5, complexity: 0.8, contrast: 0.8 },
  },
  {
    id: "synthwave",
    label: "Synthwave",
    params: { speed: 0.15, zoom: 2.8, colorShift: 5.0, complexity: 1.5, contrast: 1.2 },
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

export const NeuroControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.speed === params.speed &&
      p.params.zoom === params.zoom &&
      p.params.colorShift === params.colorShift
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
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Zoom"
            value={params.zoom}
            min={1}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, zoom: v })}
          />
          <Slider
            label="Complexity"
            value={params.complexity}
            min={0.3}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, complexity: v })}
          />
        </div>
      </div>

      {/* Visual */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Visual
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Color Shift"
            value={params.colorShift}
            min={0}
            max={6.28}
            step={0.1}
            onChange={(v) => onChange({ ...params, colorShift: v })}
          />
          <Slider
            label="Contrast"
            value={params.contrast}
            min={0.5}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, contrast: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Cyberpunk Presets
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
