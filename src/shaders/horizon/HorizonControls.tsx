import React from "react";
import type { HorizonParams } from "./HorizonCanvas";

interface Props {
  params: HorizonParams;
  onChange: (params: HorizonParams) => void;
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

const COLOR_PRESETS = [
  { id: "sunset", label: "Sunset", color1: "#c44b32", color2: "#f0a050", color3: "#9ab4ff" },
  { id: "arctic", label: "Arctic", color1: "#4a6a8a", color2: "#a0c8e0", color3: "#d8e8f0" },
  { id: "forest", label: "Forest", color1: "#2a4a2a", color2: "#5a8a4a", color3: "#b0c8a0" },
  { id: "desert", label: "Desert", color1: "#8a5a30", color2: "#d4a060", color3: "#e8d0a0" },
  { id: "midnight", label: "Midnight", color1: "#1a1040", color2: "#3a2870", color3: "#1a2040" },
];

export const HorizonControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.color1 === params.color1 && p.color2 === params.color2 && p.color3 === params.color3
  );

  return (
    <>
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Landscape
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0.1} max={3.0} step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })} />
          <Slider label="Layers" value={params.layers} min={4} max={16} step={1}
            onChange={(v) => onChange({ ...params, layers: v })} />
          <Slider label="Depth" value={params.depth} min={0.3} max={3.0} step={0.1}
            onChange={(v) => onChange({ ...params, depth: v })} />
          <Slider label="Turbulence" value={params.turbulence} min={0.3} max={2.5} step={0.1}
            onChange={(v) => onChange({ ...params, turbulence: v })} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Theme
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({
                ...params,
                color1: preset.color1,
                color2: preset.color2,
                color3: preset.color3,
              })}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{ background: `linear-gradient(180deg, ${preset.color3}, ${preset.color2}, ${preset.color1})` }}
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

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Custom Colors
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="color" value={params.color1}
              onChange={(e) => onChange({ ...params, color1: e.target.value })}
              className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Near</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="color" value={params.color2}
              onChange={(e) => onChange({ ...params, color2: e.target.value })}
              className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Mid</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="color" value={params.color3}
              onChange={(e) => onChange({ ...params, color3: e.target.value })}
              className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Sky</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Post Processing
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Film Grain" value={params.grain} min={0.0} max={0.3} step={0.01}
            onChange={(v) => onChange({ ...params, grain: v })} />
          <Slider label="Vignette" value={params.vignette} min={0.0} max={1.0} step={0.1}
            onChange={(v) => onChange({ ...params, vignette: v })} />
        </div>
      </div>
    </>
  );
};
