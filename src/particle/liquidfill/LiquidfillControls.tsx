import React from "react";
import type { LiquidfillParams, LiquidfillShape } from "./types";

interface Props {
  params: LiquidfillParams;
  onChange: (params: LiquidfillParams) => void;
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

const SHAPES: { value: LiquidfillShape; label: string }[] = [
  { value: "blob", label: "Blob" },
  { value: "star", label: "Star" },
  { value: "organic", label: "Organic" },
  { value: "flower", label: "Flower" },
];

export const LiquidfillControls: React.FC<Props> = ({ params, onChange }) => {
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
            label="Splash Force"
            value={params.splashForce}
            min={0.3}
            max={2.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, splashForce: v })}
          />
          <Slider
            label="Particle Count"
            value={params.particleCount}
            min={3}
            max={15}
            step={1}
            onChange={(v) => onChange({ ...params, particleCount: v })}
          />
        </div>
      </div>

      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5">
              Preset
            </div>
            <div className="flex gap-1.5">
              {SHAPES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => onChange({ ...params, shape: s.value })}
                  className={`flex-1 text-[9px] py-1 rounded-lg transition-colors ${
                    params.shape === s.value
                      ? "bg-neutral-800 text-white"
                      : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <Slider
            label="Complexity"
            value={params.complexity}
            min={3}
            max={12}
            step={1}
            onChange={(v) => onChange({ ...params, complexity: v })}
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
            min={8}
            max={35}
            step={1}
            onChange={(v) => onChange({ ...params, blur: v })}
          />
          <Slider
            label="Contrast"
            value={params.contrast}
            min={10}
            max={50}
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
