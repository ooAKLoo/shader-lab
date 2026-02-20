import React from "react";
import type { StarfieldParams, StarfieldPalette } from "./types";
import { PALETTES, PRESETS } from "./constants";

interface Props {
  params: StarfieldParams;
  onChange: (params: StarfieldParams) => void;
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

function paramsMatch(a: StarfieldParams, b: StarfieldParams): boolean {
  return (
    a.starCount === b.starCount &&
    a.speed === b.speed &&
    a.minSize === b.minSize &&
    a.maxSize === b.maxSize &&
    a.spread === b.spread &&
    a.depth === b.depth &&
    a.fov === b.fov &&
    a.bloomStrength === b.bloomStrength &&
    a.bloomRadius === b.bloomRadius &&
    a.bloomThreshold === b.bloomThreshold &&
    a.tiltSensitivity === b.tiltSensitivity &&
    a.palette === b.palette &&
    a.showWarpButton === b.showWarpButton &&
    a.warpMultiplier === b.warpMultiplier
  );
}

const PALETTE_NAMES: StarfieldPalette[] = [
  "neon",
  "warm",
  "cool",
  "pastel",
  "monochrome",
];

export const StarfieldControls: React.FC<Props> = ({ params, onChange }) => {
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
            const colors = PALETTES[preset.params.palette];
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
                    background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
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

      {/* Warp Interaction */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Warp Interaction
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium text-neutral-500">
              Hover Button
            </span>
            <button
              onClick={() =>
                onChange({ ...params, showWarpButton: !params.showWarpButton })
              }
              className={`relative w-8 h-4 rounded-full transition-colors ${
                params.showWarpButton ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <span
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                  params.showWarpButton ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </div>
          {params.showWarpButton && (
            <Slider
              label="Warp Multiplier"
              value={params.warpMultiplier}
              min={5}
              max={50}
              step={1}
              onChange={(v) => onChange({ ...params, warpMultiplier: v })}
            />
          )}
        </div>
      </div>

      {/* Stars */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Stars
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Count"
            value={params.starCount}
            min={5000}
            max={50000}
            step={5000}
            onChange={(v) => onChange({ ...params, starCount: v })}
          />
          <Slider
            label="Speed"
            value={params.speed}
            min={0.5}
            max={20}
            step={0.5}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Min Size"
            value={params.minSize}
            min={1}
            max={10}
            step={1}
            onChange={(v) => onChange({ ...params, minSize: v })}
          />
          <Slider
            label="Max Size"
            value={params.maxSize}
            min={5}
            max={30}
            step={1}
            onChange={(v) => onChange({ ...params, maxSize: v })}
          />
        </div>
      </div>

      {/* Space */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Space
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Spread"
            value={params.spread}
            min={50}
            max={400}
            step={10}
            onChange={(v) => onChange({ ...params, spread: v })}
          />
          <Slider
            label="Depth"
            value={params.depth}
            min={100}
            max={500}
            step={10}
            onChange={(v) => onChange({ ...params, depth: v })}
          />
          <Slider
            label="FOV"
            value={params.fov}
            min={30}
            max={90}
            step={5}
            onChange={(v) => onChange({ ...params, fov: v })}
          />
          <Slider
            label="Tilt Sensitivity"
            value={params.tiltSensitivity}
            min={0}
            max={0.2}
            step={0.01}
            onChange={(v) => onChange({ ...params, tiltSensitivity: v })}
          />
        </div>
      </div>

      {/* Bloom */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Bloom
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Strength"
            value={params.bloomStrength}
            min={0}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, bloomStrength: v })}
          />
          <Slider
            label="Radius"
            value={params.bloomRadius}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, bloomRadius: v })}
          />
          <Slider
            label="Threshold"
            value={params.bloomThreshold}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, bloomThreshold: v })}
          />
        </div>
      </div>

      {/* Palette */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Palette
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {PALETTE_NAMES.map((name) => {
            const isActive = params.palette === name;
            const colors = PALETTES[name];
            return (
              <button
                key={name}
                onClick={() => onChange({ ...params, palette: name })}
                className={`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg transition-all ${
                  isActive
                    ? "bg-neutral-800 ring-1 ring-neutral-700"
                    : "bg-neutral-50 hover:bg-neutral-100"
                }`}
              >
                <div className="flex -space-x-0.5">
                  {colors.slice(0, 3).map((c, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span
                  className={`text-[7px] font-medium leading-none capitalize ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
