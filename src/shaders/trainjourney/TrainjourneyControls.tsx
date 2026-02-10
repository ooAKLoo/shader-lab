import React from "react";
import type { TrainjourneyParams } from "./TrainjourneyCanvas";

interface Props {
  params: TrainjourneyParams;
  onChange: (params: TrainjourneyParams) => void;
}

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
        {value.toFixed(step < 0.1 ? 2 : 1)}
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

const SPEED_PRESETS = [
  { id: "slow", label: "Slow", speed: 0.3 },
  { id: "cruise", label: "Cruise", speed: 1.0 },
  { id: "express", label: "Express", speed: 2.0 },
];

export const TrainjourneyControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0.1} max={3.0} step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })} />
          <Slider label="Film Grain" value={params.grain} min={0.0} max={0.4} step={0.01}
            onChange={(v) => onChange({ ...params, grain: v })} />
          <Slider label="Vignette" value={params.vignette} min={0.0} max={1.0} step={0.1}
            onChange={(v) => onChange({ ...params, vignette: v })} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Speed Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SPEED_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({ ...params, speed: preset.speed })}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-medium transition-all ${
                params.speed === preset.speed
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
