import React from "react";
import type { IsometricParams } from "./IsometricCanvas";

interface Props {
  params: IsometricParams;
  onChange: (params: IsometricParams) => void;
}

type PresetKey = "default" | "dense" | "sparse" | "distant";

const PRESETS: { id: PresetKey; label: string; params: IsometricParams }[] = [
  {
    id: "default",
    label: "Default",
    params: { blockSize: 1.5, spacing: 2.5, timeSpeed: 0.8, mouseInfluence: 1.0, fogStart: 40, fogEnd: 100, camDistance: 80 },
  },
  {
    id: "dense",
    label: "Dense Grid",
    params: { blockSize: 1.8, spacing: 2.2, timeSpeed: 1.2, mouseInfluence: 0.8, fogStart: 30, fogEnd: 80, camDistance: 70 },
  },
  {
    id: "sparse",
    label: "Sparse Flow",
    params: { blockSize: 1.2, spacing: 3.5, timeSpeed: 0.5, mouseInfluence: 1.5, fogStart: 50, fogEnd: 120, camDistance: 100 },
  },
  {
    id: "distant",
    label: "Distant View",
    params: { blockSize: 1.5, spacing: 2.5, timeSpeed: 0.6, mouseInfluence: 0.5, fogStart: 60, fogEnd: 150, camDistance: 120 },
  },
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

export const IsometricControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) =>
      p.params.blockSize === params.blockSize &&
      p.params.spacing === params.spacing &&
      p.params.timeSpeed === params.timeSpeed &&
      p.params.camDistance === params.camDistance
  );

  return (
    <>
      {/* Geometry */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Geometry
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Block Size"
            value={params.blockSize}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, blockSize: v })}
          />
          <Slider
            label="Grid Spacing"
            value={params.spacing}
            min={1.5}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, spacing: v })}
          />
        </div>
      </div>

      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Time Speed"
            value={params.timeSpeed}
            min={0}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, timeSpeed: v })}
          />
          <Slider
            label="Mouse Influence"
            value={params.mouseInfluence}
            min={0}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, mouseInfluence: v })}
          />
        </div>
      </div>

      {/* Camera & Atmosphere */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Camera & Atmosphere
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Camera Distance"
            value={params.camDistance}
            min={50}
            max={150}
            step={5}
            onChange={(v) => onChange({ ...params, camDistance: v })}
          />
          <Slider
            label="Fog Start"
            value={params.fogStart}
            min={20}
            max={80}
            step={5}
            onChange={(v) => onChange({ ...params, fogStart: v })}
          />
          <Slider
            label="Fog End"
            value={params.fogEnd}
            min={60}
            max={180}
            step={10}
            onChange={(v) => onChange({ ...params, fogEnd: v })}
          />
        </div>
      </div>

      {/* Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          View Presets
        </div>
        <div className="flex flex-col gap-1.5">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange(preset.params)}
              className={`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${
                currentPreset?.id === preset.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
