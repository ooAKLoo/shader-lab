import React from "react";
import type { PathmorphParams } from "./types";
import { EASING_OPTIONS, PRESET_PAIRS } from "./constants";

interface Props {
  params: PathmorphParams;
  onChange: (params: PathmorphParams) => void;
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

export const PathmorphControls: React.FC<Props> = ({ params, onChange }) => {
  const triggerMorph = () => {
    window.dispatchEvent(new CustomEvent("pathmorph-morph"));
  };

  return (
    <>
      {/* Characters */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Characters
        </div>
        <div className="flex gap-2 mb-3">
          <div className="flex-1">
            <label className="text-[9px] text-neutral-400 mb-1 block">From</label>
            <input
              type="text"
              value={params.charFrom}
              maxLength={1}
              onChange={(e) => onChange({ ...params, charFrom: e.target.value || "A" })}
              onKeyDown={(e) => e.key === "Enter" && triggerMorph()}
              className="w-full h-8 rounded-lg bg-neutral-100 text-center text-sm font-bold text-neutral-700 outline-none focus:ring-1 focus:ring-neutral-300"
            />
          </div>
          <div className="flex items-end pb-1 text-neutral-300">→</div>
          <div className="flex-1">
            <label className="text-[9px] text-neutral-400 mb-1 block">To</label>
            <input
              type="text"
              value={params.charTo}
              maxLength={1}
              onChange={(e) => onChange({ ...params, charTo: e.target.value || "Z" })}
              onKeyDown={(e) => e.key === "Enter" && triggerMorph()}
              className="w-full h-8 rounded-lg bg-neutral-100 text-center text-sm font-bold text-neutral-700 outline-none focus:ring-1 focus:ring-neutral-300"
            />
          </div>
        </div>

        {/* Presets */}
        <div className="flex gap-1.5 flex-wrap">
          {PRESET_PAIRS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                onChange({ ...params, charFrom: p.from, charTo: p.to });
                setTimeout(triggerMorph, 50);
              }}
              className="px-2 py-1 rounded-md bg-neutral-100 text-[9px] text-neutral-500 hover:bg-neutral-200 transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Morph Button */}
      <button
        onClick={triggerMorph}
        className="w-full h-9 rounded-xl bg-neutral-800 text-white text-[11px] font-medium hover:bg-neutral-700 transition-colors mb-2"
      >
        Morph
      </button>

      {/* Easing */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Easing
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {EASING_OPTIONS.map((e) => (
            <button
              key={e.id}
              onClick={() => onChange({ ...params, easing: e.id })}
              className={`px-2 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                params.easing === e.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {e.label}
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
            label="Duration"
            value={params.duration}
            min={0.3}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, duration: v })}
          />
          <Slider
            label="Stroke Width"
            value={params.strokeWidth}
            min={0}
            max={6}
            step={0.5}
            onChange={(v) => onChange({ ...params, strokeWidth: v })}
          />
        </div>
      </div>

      {/* Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Style
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={params.fillColor}
                onChange={(e) => onChange({ ...params, fillColor: e.target.value })}
                className="w-6 h-6 rounded cursor-pointer border-0"
              />
              <span className="text-[9px] text-neutral-500">Fill</span>
            </div>
            <button
              onClick={() => onChange({ ...params, showFill: !params.showFill })}
              className={`w-8 h-4 rounded-full transition-colors ${
                params.showFill ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow transition-transform ${
                  params.showFill ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={params.strokeColor}
                onChange={(e) => onChange({ ...params, strokeColor: e.target.value })}
                className="w-6 h-6 rounded cursor-pointer border-0"
              />
              <span className="text-[9px] text-neutral-500">Stroke</span>
            </div>
            <button
              onClick={() => onChange({ ...params, showStroke: !params.showStroke })}
              className={`w-8 h-4 rounded-full transition-colors ${
                params.showStroke ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow transition-transform ${
                  params.showStroke ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="color"
              value={params.bgColor}
              onChange={(e) => onChange({ ...params, bgColor: e.target.value })}
              className="w-6 h-6 rounded cursor-pointer border-0"
            />
            <span className="text-[9px] text-neutral-500">Background</span>
          </div>
        </div>
      </div>
    </>
  );
};
