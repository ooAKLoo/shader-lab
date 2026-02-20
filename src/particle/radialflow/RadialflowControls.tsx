import React from "react";
import type { RadialflowParams } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: RadialflowParams;
  onChange: (params: RadialflowParams) => void;
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

function paramsMatch(a: RadialflowParams, b: RadialflowParams): boolean {
  return (
    a.nodeCount === b.nodeCount &&
    a.particleCount === b.particleCount &&
    a.speed === b.speed &&
    a.particleSize === b.particleSize &&
    a.trailLength === b.trailLength &&
    a.curvature === b.curvature &&
    a.direction === b.direction &&
    a.colorMode === b.colorMode &&
    a.primaryColor === b.primaryColor &&
    a.secondaryColor === b.secondaryColor &&
    a.glowIntensity === b.glowIntensity &&
    a.rotationSpeed === b.rotationSpeed
  );
}

export const RadialflowControls: React.FC<Props> = ({ params, onChange }) => {
  const activePreset = PRESETS.find((p) => paramsMatch(p.params, params));

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-5 gap-1.5">
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
                    background:
                      preset.params.colorMode === "rainbow"
                        ? "conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"
                        : `linear-gradient(135deg, ${preset.params.primaryColor} 0%, ${preset.params.secondaryColor} 100%)`,
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

      {/* Flow Dynamics */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Flow Dynamics
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Node Count"
            value={params.nodeCount}
            min={2}
            max={32}
            step={1}
            onChange={(v) => onChange({ ...params, nodeCount: v })}
          />
          <Slider
            label="Particle Density"
            value={params.particleCount}
            min={10}
            max={1000}
            step={10}
            onChange={(v) => onChange({ ...params, particleCount: v })}
          />
          <Slider
            label="Flow Speed"
            value={params.speed}
            min={1}
            max={20}
            step={1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Curvature"
            value={params.curvature}
            min={-2}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, curvature: v })}
          />
        </div>
      </div>

      {/* Visual Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Visual Style
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Particle Size"
            value={params.particleSize}
            min={0.5}
            max={10}
            step={0.5}
            onChange={(v) => onChange({ ...params, particleSize: v })}
          />
          <Slider
            label="Trail Length"
            value={params.trailLength}
            min={0.01}
            max={0.5}
            step={0.01}
            onChange={(v) => onChange({ ...params, trailLength: v })}
          />
          <Slider
            label="Glow Intensity"
            value={params.glowIntensity}
            min={0}
            max={50}
            step={1}
            onChange={(v) => onChange({ ...params, glowIntensity: v })}
          />
          <Slider
            label="Rotation"
            value={params.rotationSpeed}
            min={-10}
            max={10}
            step={0.5}
            onChange={(v) => onChange({ ...params, rotationSpeed: v })}
          />
        </div>
      </div>

      {/* Configuration */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Configuration
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              onChange({
                ...params,
                direction: params.direction === "outward" ? "inward" : "outward",
              })
            }
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-all"
          >
            <span className="text-[8px] text-neutral-400 uppercase mb-0.5">
              Direction
            </span>
            <span className="text-[10px] font-medium text-neutral-700 capitalize">
              {params.direction}
            </span>
          </button>
          <button
            onClick={() => {
              const modes: RadialflowParams["colorMode"][] = [
                "gradient",
                "monochrome",
                "rainbow",
              ];
              const next =
                modes[(modes.indexOf(params.colorMode) + 1) % modes.length];
              onChange({ ...params, colorMode: next });
            }}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-all"
          >
            <span className="text-[8px] text-neutral-400 uppercase mb-0.5">
              Color Mode
            </span>
            <span className="text-[10px] font-medium text-neutral-700 capitalize">
              {params.colorMode}
            </span>
          </button>
        </div>
      </div>

      {/* Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Colors
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Primary</span>
            <input
              type="color"
              value={params.primaryColor}
              onChange={(e) =>
                onChange({ ...params, primaryColor: e.target.value })
              }
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Secondary</span>
            <input
              type="color"
              value={params.secondaryColor}
              onChange={(e) =>
                onChange({ ...params, secondaryColor: e.target.value })
              }
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
