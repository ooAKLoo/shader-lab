import React from "react";
import type { HypergridParams } from "./HypergridCanvas";

interface Props {
  params: HypergridParams;
  onChange: (params: HypergridParams) => void;
}

const COLOR_PRESETS: { id: string; label: string; c1: string; c2: string }[] = [
  { id: "neon", label: "Neon Blue", c1: "#4040ff", c2: "#40a0ff" },
  { id: "cyber", label: "Cyber Pink", c1: "#ff40a0", c2: "#a040ff" },
  { id: "matrix", label: "Matrix", c1: "#00ff66", c2: "#00aa44" },
  { id: "solar", label: "Solar", c1: "#ff8800", c2: "#ffdd00" },
  { id: "ice", label: "Ice", c1: "#88ccff", c2: "#ffffff" },
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

export const HypergridControls: React.FC<Props> = ({ params, onChange }) => {
  const currentColorPreset = COLOR_PRESETS.find(
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
            label="Speed"
            value={params.speed}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Glow"
            value={params.glow}
            min={0.1}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, glow: v })}
          />
          <Slider
            label="Grid Size"
            value={params.gridSize}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, gridSize: v })}
          />
        </div>
      </div>

      {/* Color Theme */}
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
                currentColorPreset?.id === preset.id
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
        {currentColorPreset && (
          <div className="mt-2 text-[9px] font-medium text-neutral-500">
            {currentColorPreset.label}
          </div>
        )}

        {/* Custom Color Pickers */}
        <div className="mt-3 flex gap-3">
          <div className="flex-1">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1">
              Primary
            </div>
            <div className="flex items-center gap-1.5">
              <label className="w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block">
                <input
                  type="color"
                  value={params.color1}
                  onChange={(e) => onChange({ ...params, color1: e.target.value })}
                  className="w-full h-full cursor-pointer opacity-0 absolute"
                />
                <div className="w-full h-full rounded-lg" style={{ background: params.color1 }} />
              </label>
              <span className="text-[9px] font-medium text-neutral-400 tabular-nums uppercase">
                {params.color1}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1">
              Accent
            </div>
            <div className="flex items-center gap-1.5">
              <label className="w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block">
                <input
                  type="color"
                  value={params.color2}
                  onChange={(e) => onChange({ ...params, color2: e.target.value })}
                  className="w-full h-full cursor-pointer opacity-0 absolute"
                />
                <div className="w-full h-full rounded-lg" style={{ background: params.color2 }} />
              </label>
              <span className="text-[9px] font-medium text-neutral-400 tabular-nums uppercase">
                {params.color2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
