import React from "react";
import type { MetaballParams } from "./types";

interface Props {
  params: MetaballParams;
  onChange: (params: MetaballParams) => void;
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

export const MetaballControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Speed"
            value={params.speed}
            min={0.3}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Split Count"
            value={params.splitCount}
            min={2}
            max={8}
            step={1}
            onChange={(v) => onChange({ ...params, splitCount: v })}
          />
          <Slider
            label="Scatter Radius"
            value={params.scatterRadius}
            min={50}
            max={300}
            step={10}
            onChange={(v) => onChange({ ...params, scatterRadius: v })}
          />
        </div>
      </div>

      {/* Particle */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Particle
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Size"
            value={params.particleSize}
            min={15}
            max={80}
            step={5}
            onChange={(v) => onChange({ ...params, particleSize: v })}
          />
        </div>
      </div>

      {/* Gooey Filter */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Gooey Filter
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Blur"
            value={params.blur}
            min={4}
            max={30}
            step={1}
            onChange={(v) => onChange({ ...params, blur: v })}
          />
          <Slider
            label="Contrast"
            value={params.contrast}
            min={5}
            max={40}
            step={1}
            onChange={(v) => onChange({ ...params, contrast: v })}
          />
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                Color
              </span>
            </div>
            <input
              type="color"
              value={params.color}
              onChange={(e) => onChange({ ...params, color: e.target.value })}
              className="w-full h-6 rounded cursor-pointer border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
