import React from "react";
import type { LuminaParams } from "./LuminaCanvas";

interface Props {
  params: LuminaParams;
  onChange: (params: LuminaParams) => void;
}

type PresetKey = "ocean" | "sunset" | "aurora" | "midnight";

const COLOR_PRESETS: { id: PresetKey; label: string; c1: string; c2: string; c3: string }[] = [
  { id: "ocean", label: "Deep Ocean", c1: "#000d33", c2: "#1a664d", c3: "#ffcc33" },
  { id: "sunset", label: "Sunset", c1: "#1a0a2e", c2: "#b44d12", c3: "#f5d442" },
  { id: "aurora", label: "Aurora", c1: "#0a1628", c2: "#2dd4bf", c3: "#a78bfa" },
  { id: "midnight", label: "Midnight", c1: "#0f172a", c2: "#334155", c3: "#e2e8f0" },
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

export const LuminaControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2 && p.c3 === params.color3
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
            max={2}
            step={0.01}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Zoom / Scale"
            value={params.zoom}
            min={0.5}
            max={10}
            step={0.1}
            onChange={(v) => onChange({ ...params, zoom: v })}
          />
          <Slider
            label="Warp Strength"
            value={params.warpStrength}
            min={0}
            max={8}
            step={0.1}
            onChange={(v) => onChange({ ...params, warpStrength: v })}
          />
        </div>
      </div>

      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Theme Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() =>
                onChange({ ...params, color1: preset.c1, color2: preset.c2, color3: preset.c3 })
              }
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2}, ${preset.c3})`,
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

      {/* Custom Colors */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Custom Palette
        </div>
        <div className="flex flex-col gap-2">
          {[
            { key: "color1" as const, label: "Base" },
            { key: "color2" as const, label: "Mid" },
            { key: "color3" as const, label: "Highlight" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-[9px] font-medium text-neutral-400 w-12">{label}</span>
              <div className="flex-1 flex items-center gap-1.5 bg-neutral-50 rounded-lg px-2 py-1">
                <input
                  type="color"
                  value={params[key]}
                  onChange={(e) => onChange({ ...params, [key]: e.target.value })}
                  className="w-4 h-4 rounded cursor-pointer bg-transparent p-0"
                  style={{ border: "none" }}
                />
                <span className="text-[9px] font-mono text-neutral-500">{params[key]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
