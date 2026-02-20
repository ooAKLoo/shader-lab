import React from "react";
import type { SankeyflowParams, PaletteName, FlowDirection } from "./types";
import { PALETTES, PRESETS } from "./constants";

interface Props {
  params: SankeyflowParams;
  onChange: (params: SankeyflowParams) => void;
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

function paramsMatch(a: SankeyflowParams, b: SankeyflowParams): boolean {
  return (
    a.numBranches === b.numBranches &&
    a.curvature === b.curvature &&
    a.rotationSpeed === b.rotationSpeed &&
    a.particleCount === b.particleCount &&
    a.baseSpeed === b.baseSpeed &&
    a.flowDirection === b.flowDirection &&
    a.palette === b.palette &&
    a.glowIntensity === b.glowIntensity &&
    a.trailFade === b.trailFade &&
    a.lineWidthMultiplier === b.lineWidthMultiplier &&
    a.showParticles === b.showParticles &&
    a.showCore === b.showCore &&
    a.petalCount === b.petalCount &&
    a.petalDepth === b.petalDepth &&
    a.aspectRatio === b.aspectRatio &&
    a.spiralTwist === b.spiralTwist
  );
}

const PALETTE_NAMES: PaletteName[] = [
  "cyberpunk",
  "fire",
  "ocean",
  "nature",
  "monochrome",
];

export const SankeyflowControls: React.FC<Props> = ({ params, onChange }) => {
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

      {/* Display Toggles */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Display
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium text-neutral-500">
              Particles
            </span>
            <button
              onClick={() =>
                onChange({ ...params, showParticles: !params.showParticles })
              }
              className={`relative w-8 h-4 rounded-full transition-colors ${
                params.showParticles ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <span
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                  params.showParticles ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium text-neutral-500">
              Energy Core
            </span>
            <button
              onClick={() =>
                onChange({ ...params, showCore: !params.showCore })
              }
              className={`relative w-8 h-4 rounded-full transition-colors ${
                params.showCore ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <span
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                  params.showCore ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Topology */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Topology
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Branches"
            value={params.numBranches}
            min={3}
            max={40}
            step={1}
            onChange={(v) => onChange({ ...params, numBranches: v })}
          />
          <Slider
            label="Curvature"
            value={params.curvature}
            min={0}
            max={2.5}
            step={0.1}
            onChange={(v) => onChange({ ...params, curvature: v })}
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

      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Petal Count"
            value={params.petalCount}
            min={0}
            max={12}
            step={1}
            onChange={(v) => onChange({ ...params, petalCount: v })}
          />
          <Slider
            label="Petal Depth"
            value={params.petalDepth}
            min={0}
            max={0.9}
            step={0.05}
            onChange={(v) => onChange({ ...params, petalDepth: v })}
          />
          <Slider
            label="Aspect Ratio"
            value={params.aspectRatio}
            min={0.3}
            max={2.5}
            step={0.1}
            onChange={(v) => onChange({ ...params, aspectRatio: v })}
          />
          <Slider
            label="Spiral Twist"
            value={params.spiralTwist}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, spiralTwist: v })}
          />
        </div>
      </div>

      {/* Particles */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Particles
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Count"
            value={params.particleCount}
            min={50}
            max={1500}
            step={50}
            onChange={(v) => onChange({ ...params, particleCount: v })}
          />
          <Slider
            label="Speed"
            value={params.baseSpeed}
            min={1}
            max={20}
            step={1}
            onChange={(v) => onChange({ ...params, baseSpeed: v })}
          />
          <div>
            <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide block mb-2">
              Flow Direction
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {(["outward", "inward"] as FlowDirection[]).map((dir) => (
                <button
                  key={dir}
                  onClick={() => onChange({ ...params, flowDirection: dir })}
                  className={`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all capitalize ${
                    params.flowDirection === dir
                      ? "bg-neutral-800 text-white"
                      : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                  }`}
                >
                  {dir}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetics */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Aesthetics
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide block mb-2">
              Palette
            </span>
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
          <Slider
            label="Glow Intensity"
            value={params.glowIntensity}
            min={0}
            max={40}
            step={1}
            onChange={(v) => onChange({ ...params, glowIntensity: v })}
          />
          <Slider
            label="Trail Fade"
            value={params.trailFade}
            min={0.01}
            max={0.4}
            step={0.01}
            onChange={(v) => onChange({ ...params, trailFade: v })}
          />
          <Slider
            label="Line Weight"
            value={params.lineWidthMultiplier}
            min={0}
            max={8}
            step={0.5}
            onChange={(v) => onChange({ ...params, lineWidthMultiplier: v })}
          />
        </div>
      </div>
    </>
  );
};
