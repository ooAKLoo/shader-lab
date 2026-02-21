import React, { useState } from "react";
import type { TrailfadeParams } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: TrailfadeParams;
  onChange: (params: TrailfadeParams) => void;
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

function paramsMatch(a: TrailfadeParams, b: TrailfadeParams): boolean {
  return (
    a.fused === b.fused &&
    a.branches === b.branches &&
    a.trailFade === b.trailFade &&
    a.speed === b.speed &&
    a.radius === b.radius &&
    a.curve === b.curve &&
    a.brushSize === b.brushSize &&
    a.glowBlur === b.glowBlur &&
    a.fusedDepth === b.fusedDepth &&
    a.colorCenter === b.colorCenter &&
    a.colorEdge === b.colorEdge &&
    a.bgTop === b.bgTop &&
    a.bgBottom === b.bgBottom
  );
}

export const TrailfadeControls: React.FC<Props> = ({ params, onChange }) => {
  const activePreset = PRESETS.find((p) => paramsMatch(p.params, params));
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const json = JSON.stringify(params, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-3 gap-1.5">
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
                    background: `linear-gradient(135deg, ${preset.params.bgTop}, ${preset.params.bgBottom})`,
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

      {/* Gooey Fuse Toggle */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
              Gooey Fuse
            </div>
            <div className="text-[10px] text-neutral-500 mt-0.5">
              {params.fused ? "Arcs merged" : "Individual arcs"}
            </div>
          </div>
          <button
            onClick={() => onChange({ ...params, fused: !params.fused })}
            className={`relative w-9 h-5 rounded-full transition-colors ${
              params.fused ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                params.fused ? "translate-x-[18px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
        {params.fused && (
          <div className="mt-3">
            <Slider
              label="Fuse Strength"
              value={params.fusedDepth}
              min={0}
              max={1}
              step={0.05}
              onChange={(v) => onChange({ ...params, fusedDepth: v })}
            />
          </div>
        )}
      </div>

      {/* Motion & Trail */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion & Trail
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Branches"
            value={params.branches}
            min={1}
            max={8}
            step={1}
            onChange={(v) => onChange({ ...params, branches: v })}
          />
          <Slider
            label="Trail Fade"
            value={params.trailFade}
            min={1}
            max={30}
            step={1}
            onChange={(v) => onChange({ ...params, trailFade: v })}
          />
          <Slider
            label="Speed"
            value={params.speed}
            min={1}
            max={15}
            step={0.5}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
        </div>
      </div>

      {/* Brush Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Brush Shape
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Radius"
            value={params.radius}
            min={50}
            max={300}
            step={1}
            onChange={(v) => onChange({ ...params, radius: v })}
          />
          <Slider
            label="Curve"
            value={params.curve}
            min={-200}
            max={200}
            step={1}
            onChange={(v) => onChange({ ...params, curve: v })}
          />
          <Slider
            label="Thickness"
            value={params.brushSize}
            min={5}
            max={80}
            step={1}
            onChange={(v) => onChange({ ...params, brushSize: v })}
          />
        </div>
      </div>

      {/* Glow & Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Glow & Colors
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Glow Blur"
            value={params.glowBlur}
            min={0}
            max={50}
            step={1}
            onChange={(v) => onChange({ ...params, glowBlur: v })}
          />
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Center</span>
            <input
              type="color"
              value={params.colorCenter}
              onChange={(e) => onChange({ ...params, colorCenter: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Edge</span>
            <input
              type="color"
              value={params.colorEdge}
              onChange={(e) => onChange({ ...params, colorEdge: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">BG Top</span>
            <input
              type="color"
              value={params.bgTop}
              onChange={(e) => onChange({ ...params, bgTop: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">BG Bottom</span>
            <input
              type="color"
              value={params.bgBottom}
              onChange={(e) => onChange({ ...params, bgBottom: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
        </div>
      </div>

      {/* Copy Params */}
      <button
        onClick={handleCopy}
        className={`w-full py-2 rounded-xl text-[10px] font-medium transition-all ${
          copied
            ? "bg-neutral-800 text-white"
            : "bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700"
        }`}
      >
        {copied ? "Copied!" : "Copy Params"}
      </button>
    </>
  );
};
