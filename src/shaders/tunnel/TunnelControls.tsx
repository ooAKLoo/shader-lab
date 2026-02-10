import React from "react";
import type { TunnelParams } from "./TunnelCanvas";

interface Props {
  params: TunnelParams;
  onChange: (params: TunnelParams) => void;
}

const COLOR_PRESETS = [
  { id: "cyber", label: "Cyber", c1: "#4f46e5", c2: "#06b6d4" },
  { id: "inferno", label: "Inferno", c1: "#dc2626", c2: "#f59e0b" },
  { id: "matrix", label: "Matrix", c1: "#059669", c2: "#d4ff00" },
  { id: "void", label: "Void", c1: "#a855f7", c2: "#1e1b4b" },
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

export const TunnelControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2
  );

  return (
    <>
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0} max={2} step={0.05}
            onChange={(v) => onChange({ ...params, speed: v })} />
          <Slider label="Twist" value={params.twist} min={0} max={3} step={0.1}
            onChange={(v) => onChange({ ...params, twist: v })} />
          <Slider label="Noise" value={params.noise} min={0} max={2} step={0.1}
            onChange={(v) => onChange({ ...params, noise: v })} />
          <Slider label="Tunnel Width" value={params.width} min={2} max={8} step={0.5}
            onChange={(v) => onChange({ ...params, width: v })} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Theme
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({ ...params, color1: preset.c1, color2: preset.c2 })}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{ background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})` }}
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
