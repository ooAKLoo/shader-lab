import React from "react";
import type { FlowFieldParams } from "./FlowFieldCanvas";

interface Props {
  params: FlowFieldParams;
  onChange: (params: FlowFieldParams) => void;
}

type PresetKey = "calm" | "moderate" | "turbulent" | "storm";

const PRESETS: { id: PresetKey; label: string; params: FlowFieldParams }[] = [
  {
    id: "calm",
    label: "Calm Breeze",
    params: { flowSpeed: 0.1, streakLength: 1.0, zoom: 2.5, turbulence: 0.8, gridOpacity: 0.15 },
  },
  {
    id: "moderate",
    label: "Moderate Flow",
    params: { flowSpeed: 0.2, streakLength: 1.5, zoom: 2.5, turbulence: 1.2, gridOpacity: 0.15 },
  },
  {
    id: "turbulent",
    label: "Turbulent Current",
    params: { flowSpeed: 0.35, streakLength: 2.0, zoom: 2.0, turbulence: 1.8, gridOpacity: 0.1 },
  },
  {
    id: "storm",
    label: "Storm System",
    params: { flowSpeed: 0.5, streakLength: 2.5, zoom: 1.8, turbulence: 2.5, gridOpacity: 0.05 },
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

export const FlowFieldControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.flowSpeed === params.flowSpeed &&
      p.params.streakLength === params.streakLength &&
      p.params.turbulence === params.turbulence
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
            label="Flow Speed"
            value={params.flowSpeed}
            min={0}
            max={0.8}
            step={0.05}
            onChange={(v) => onChange({ ...params, flowSpeed: v })}
          />
          <Slider
            label="Turbulence"
            value={params.turbulence}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, turbulence: v })}
          />
          <Slider
            label="Streak Length"
            value={params.streakLength}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, streakLength: v })}
          />
        </div>
      </div>

      {/* View Settings */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          View Settings
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Zoom"
            value={params.zoom}
            min={1}
            max={4}
            step={0.1}
            onChange={(v) => onChange({ ...params, zoom: v })}
          />
          <Slider
            label="Grid Opacity"
            value={params.gridOpacity}
            min={0}
            max={0.3}
            step={0.05}
            onChange={(v) => onChange({ ...params, gridOpacity: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Flow Presets
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
