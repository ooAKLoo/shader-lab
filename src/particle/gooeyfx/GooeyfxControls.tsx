import React from "react";
import type { GooeyfxParams, GooeyfxMode, GooeyfxBarShape } from "./types";

interface Props {
  params: GooeyfxParams;
  onChange: (params: GooeyfxParams) => void;
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

const MODES: { value: GooeyfxMode; label: string }[] = [
  { value: "spectrum", label: "Spectrum" },
  { value: "wave", label: "Wave" },
  { value: "pulse", label: "Pulse" },
];

const SHAPES: { value: GooeyfxBarShape; label: string }[] = [
  { value: "rect", label: "Rect" },
  { value: "round", label: "Round" },
  { value: "pill", label: "Pill" },
];

export const GooeyfxControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Mode */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Mode
        </div>
        <div className="flex gap-1.5">
          {MODES.map((m) => (
            <button
              key={m.value}
              onClick={() => onChange({ ...params, mode: m.value })}
              className={`flex-1 text-[9px] py-1.5 rounded-lg font-medium transition-colors ${
                params.mode === m.value
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

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
            label="Bar Count"
            value={params.barCount}
            min={8}
            max={32}
            step={1}
            onChange={(v) => onChange({ ...params, barCount: v })}
          />
          <Slider
            label="Bar Width"
            value={params.barWidth}
            min={10}
            max={30}
            step={1}
            onChange={(v) => onChange({ ...params, barWidth: v })}
          />
          {/* Bar Shape */}
          <div>
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5">
              Bar Shape
            </div>
            <div className="flex gap-1.5">
              {SHAPES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => onChange({ ...params, barShape: s.value })}
                  className={`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${
                    params.barShape === s.value
                      ? "bg-neutral-800 text-white"
                      : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
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
            max={20}
            step={1}
            onChange={(v) => onChange({ ...params, blur: v })}
          />
          <Slider
            label="Threshold"
            value={params.threshold}
            min={10}
            max={40}
            step={1}
            onChange={(v) => onChange({ ...params, threshold: v })}
          />
          {/* Crisp toggle */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
              Crisp Edges
            </span>
            <button
              onClick={() => onChange({ ...params, crisp: !params.crisp })}
              className={`w-8 h-4 rounded-full transition-colors relative ${
                params.crisp ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform ${
                  params.crisp ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
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
