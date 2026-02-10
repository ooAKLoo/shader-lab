import React from "react";
import type { VortexParams } from "./VortexCanvas";

interface Props {
  params: VortexParams;
  onChange: (params: VortexParams) => void;
}

type PresetKey = "arcane" | "biohazard" | "inferno" | "void";

const COLOR_PRESETS: { id: PresetKey; label: string; c1: string; c2: string }[] = [
  { id: "arcane", label: "Arcane", c1: "#8b5cf6", c2: "#06b6d4" },
  { id: "biohazard", label: "Biohazard", c1: "#4ade80", c2: "#022c22" },
  { id: "inferno", label: "Inferno", c1: "#f59e0b", c2: "#b91c1c" },
  { id: "void", label: "The Void", c1: "#ffffff", c2: "#000000" },
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
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
  </div>
);

export const VortexControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2
  );

  return (
    <>
      {/* Parameters */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Flow Speed"
            value={params.speed}
            min={0}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Twist Intensity"
            value={params.suction}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, suction: v })}
          />
          <Slider
            label="Noise Density"
            value={params.density}
            min={1}
            max={10}
            step={0.5}
            onChange={(v) => onChange({ ...params, density: v })}
          />
        </div>
      </div>

      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Resonance
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
