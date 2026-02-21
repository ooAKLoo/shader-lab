import React from "react";
import type { GlassturbineParams } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: GlassturbineParams;
  onChange: (params: GlassturbineParams) => void;
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
        {step >= 1 ? value : value.toFixed(step >= 0.1 ? 1 : 2)}
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

function paramsMatch(a: GlassturbineParams, b: GlassturbineParams): boolean {
  return (
    a.bladeCount === b.bladeCount &&
    a.bladeArc === b.bladeArc &&
    a.rotationSpeed === b.rotationSpeed &&
    a.trailFade === b.trailFade &&
    a.bladeOpacity === b.bladeOpacity &&
    a.innerRadius === b.innerRadius &&
    a.glowIntensity === b.glowIntensity &&
    a.bgColor === b.bgColor &&
    a.bladeColor === b.bladeColor &&
    a.highlightColor === b.highlightColor
  );
}

export const GlassturbineControls: React.FC<Props> = ({ params, onChange }) => {
  const activePreset = PRESETS.find((p) => paramsMatch(p.params, params));

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {PRESETS.map((preset) => {
            const isActive = activePreset?.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onChange(preset.params)}
                className={`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg transition-all ${
                  isActive
                    ? "bg-neutral-800 ring-1 ring-neutral-700"
                    : "bg-neutral-50 hover:bg-neutral-100"
                }`}
              >
                <div
                  className={`w-full h-5 rounded-md overflow-hidden ${
                    isActive ? "ring-1 ring-white/30" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, ${preset.params.highlightColor} 0%, ${preset.params.bladeColor} 50%, ${preset.params.bgColor} 100%)`,
                  }}
                />
                <span
                  className={`text-[7px] font-medium leading-none ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topology */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Topology
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Blade Count"
            value={params.bladeCount}
            min={2}
            max={6}
            step={1}
            onChange={(v) => onChange({ ...params, bladeCount: v })}
          />
          <Slider
            label="Blade Arc"
            value={params.bladeArc}
            min={30}
            max={170}
            step={1}
            onChange={(v) => onChange({ ...params, bladeArc: v })}
          />
          <Slider
            label="Inner Radius"
            value={params.innerRadius}
            min={0}
            max={0.8}
            step={0.01}
            onChange={(v) => onChange({ ...params, innerRadius: v })}
          />
        </div>
      </div>

      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Rotation Speed"
            value={params.rotationSpeed}
            min={-5}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, rotationSpeed: v })}
          />
          <Slider
            label="Trail Fade"
            value={params.trailFade}
            min={0.01}
            max={0.3}
            step={0.01}
            onChange={(v) => onChange({ ...params, trailFade: v })}
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
            label="Blade Opacity"
            value={params.bladeOpacity}
            min={0.1}
            max={0.8}
            step={0.01}
            onChange={(v) => onChange({ ...params, bladeOpacity: v })}
          />
          <Slider
            label="Glow Intensity"
            value={params.glowIntensity}
            min={0}
            max={30}
            step={1}
            onChange={(v) => onChange({ ...params, glowIntensity: v })}
          />
        </div>
      </div>

      {/* Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Colors
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Background</span>
            <input
              type="color"
              value={params.bgColor}
              onChange={(e) => onChange({ ...params, bgColor: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Blade</span>
            <input
              type="color"
              value={params.bladeColor}
              onChange={(e) => onChange({ ...params, bladeColor: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Highlight</span>
            <input
              type="color"
              value={params.highlightColor}
              onChange={(e) => onChange({ ...params, highlightColor: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
