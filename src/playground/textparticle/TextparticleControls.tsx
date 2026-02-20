import React from "react";
import type { TextParticleParams } from "./types";
import { RENDER_MODES, MORPH_MODES, PRESET_PAIRS } from "./constants";

interface Props {
  params: TextParticleParams;
  onChange: (params: TextParticleParams) => void;
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

export const TextparticleControls: React.FC<Props> = ({ params, onChange }) => {
  const triggerMorph = () => {
    window.dispatchEvent(new CustomEvent("textparticle-morph"));
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
              maxLength={8}
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
              maxLength={8}
              onChange={(e) => onChange({ ...params, charTo: e.target.value || "B" })}
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

      {/* Morph Mode */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Morph Mode
        </div>
        <div className="flex gap-1.5">
          {MORPH_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange({ ...params, morphMode: m.id })}
              className={`flex-1 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                params.morphMode === m.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="text-[8px] text-neutral-400 mt-2">
          {MORPH_MODES.find((m) => m.id === params.morphMode)?.desc}
        </div>
      </div>

      {/* Render Mode */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Render Mode
        </div>
        <div className="flex gap-1.5">
          {RENDER_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => onChange({ ...params, renderMode: m.id })}
              className={`flex-1 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                params.renderMode === m.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Parameters */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Particle Count"
            value={params.particleCount}
            min={500}
            max={6000}
            step={500}
            onChange={(v) => onChange({ ...params, particleCount: v })}
          />
          <Slider
            label="Speed"
            value={params.speed}
            min={0.01}
            max={0.1}
            step={0.01}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Particle Size"
            value={params.particleSize}
            min={0.5}
            max={5}
            step={0.5}
            onChange={(v) => onChange({ ...params, particleSize: v })}
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
            <input
              type="color"
              value={params.color}
              onChange={(e) => onChange({ ...params, color: e.target.value })}
              className="w-6 h-6 rounded cursor-pointer border-0"
            />
            <span className="text-[9px] text-neutral-500">Particle</span>
          </div>
          <div className="flex items-center gap-2">
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

      {/* Options */}
      <div className="bg-white rounded-xl p-3">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
            Auto Loop
          </span>
          <button
            onClick={() => onChange({ ...params, autoLoop: !params.autoLoop })}
            className={`w-8 h-4 rounded-full transition-colors ${
              params.autoLoop ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-white shadow transition-transform ${
                params.autoLoop ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};
