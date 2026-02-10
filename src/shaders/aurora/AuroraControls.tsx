import React from "react";
import type { AuroraParams } from "./AuroraCanvas";

interface Props {
  params: AuroraParams;
  onChange: (params: AuroraParams) => void;
}

type PresetKey = "gentle" | "flow" | "ethereal" | "vivid";

const PRESETS: { id: PresetKey; label: string; params: AuroraParams }[] = [
  {
    id: "gentle",
    label: "Gentle Drift",
    params: { waveSpeed: 0.3, colorShift: 0.0, opacity: 0.3 },
  },
  {
    id: "flow",
    label: "Flowing Sky",
    params: { waveSpeed: 0.5, colorShift: 1.0, opacity: 0.4 },
  },
  {
    id: "ethereal",
    label: "Ethereal Mist",
    params: { waveSpeed: 0.2, colorShift: 2.0, opacity: 0.25 },
  },
  {
    id: "vivid",
    label: "Vivid Aurora",
    params: { waveSpeed: 0.7, colorShift: 0.5, opacity: 0.5 },
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

export const AuroraControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.waveSpeed === params.waveSpeed &&
      p.params.colorShift === params.colorShift &&
      p.params.opacity === params.opacity
  );

  return (
    <>
      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Wave Speed"
            value={params.waveSpeed}
            min={0}
            max={1}
            step={0.1}
            onChange={(v) => onChange({ ...params, waveSpeed: v })}
          />
          <Slider
            label="Color Shift"
            value={params.colorShift}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, colorShift: v })}
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
            label="Opacity"
            value={params.opacity}
            min={0.1}
            max={0.7}
            step={0.05}
            onChange={(v) => onChange({ ...params, opacity: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Aurora Presets
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
