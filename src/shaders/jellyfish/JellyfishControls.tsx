import React from "react";
import type { JellyfishParams } from "./JellyfishCanvas";

interface Props {
  params: JellyfishParams;
  onChange: (params: JellyfishParams) => void;
}

const COLOR_PRESETS = [
  { id: "ocean", label: "Ocean", accent1: "#ff1a80", accent2: "#ff801a", bg1: "#1a80ff", bg2: "#1a8099" },
  { id: "abyss", label: "Abyss", accent1: "#00ffaa", accent2: "#00aaff", bg1: "#0a0033", bg2: "#001a33" },
  { id: "ember", label: "Ember", accent1: "#ff4400", accent2: "#ffcc00", bg1: "#1a0022", bg2: "#331a00" },
  { id: "arctic", label: "Arctic", accent1: "#66ccff", accent2: "#eeffff", bg1: "#001133", bg2: "#002244" },
  { id: "toxic", label: "Toxic", accent1: "#88ff00", accent2: "#ff00aa", bg1: "#001a00", bg2: "#0a0033" },
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

export const JellyfishControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.accent1 === params.accent1 && p.bg1 === params.bg1
  );

  return (
    <>
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0.2} max={2.0} step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })} />
          <Slider label="Gamma" value={params.gamma} min={1.0} max={3.5} step={0.1}
            onChange={(v) => onChange({ ...params, gamma: v })} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Palette
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({
                ...params,
                accent1: preset.accent1,
                accent2: preset.accent2,
                bg1: preset.bg1,
                bg2: preset.bg2,
              })}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{ background: `linear-gradient(135deg, ${preset.accent1}, ${preset.bg1})` }}
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

      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Interaction
        </div>
        <div className="text-[9px] text-neutral-500 leading-relaxed">
          Move mouse over canvas to control camera angle. Leave canvas for auto-animation.
        </div>
      </div>
    </>
  );
};
