import React, { useState } from "react";
import type { SuperformulaParams } from "./types";
import { SHAPE_PRESETS } from "./constants";

interface Props {
  params: SuperformulaParams;
  onChange: (params: SuperformulaParams) => void;
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
        {step >= 1 ? value : value.toFixed(step >= 0.01 ? 2 : 3)}
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

const Toggle: React.FC<{
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between">
    <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
      {label}
    </span>
    <button
      onClick={() => onChange(!value)}
      className={`relative w-7 h-4 rounded-full transition-colors ${
        value ? "bg-neutral-800" : "bg-neutral-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
          value ? "translate-x-3" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);

const ColorInput: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
}> = ({ label, value, onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <div
        className="w-4 h-4 rounded border border-neutral-200"
        style={{ backgroundColor: value }}
      />
    </div>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-7 bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"
    />
  </div>
);

export const SuperformulaControls: React.FC<Props> = ({ params, onChange }) => {
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
      {/* Shape Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Shape Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SHAPE_PRESETS.map((preset) => {
            const isActive =
              params.mathM === preset.m &&
              params.mathN1 === preset.n1 &&
              params.mathN2 === preset.n2 &&
              params.mathN3 === preset.n3;
            return (
              <button
                key={preset.label}
                onClick={() =>
                  onChange({
                    ...params,
                    mathM: preset.m,
                    mathN1: preset.n1,
                    mathN2: preset.n2,
                    mathN3: preset.n3,
                    ...preset.full,
                  })
                }
                className={`px-2 py-1 rounded-lg text-[9px] font-medium transition-all ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Superformula Math */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Superformula
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="m (Symmetry)" value={params.mathM} min={1} max={20} step={1} onChange={(v) => onChange({ ...params, mathM: v })} />
          <Slider label="n1" value={params.mathN1} min={0.01} max={20} step={0.01} onChange={(v) => onChange({ ...params, mathN1: v })} />
          <Slider label="n2" value={params.mathN2} min={0.01} max={20} step={0.01} onChange={(v) => onChange({ ...params, mathN2: v })} />
          <Slider label="n3" value={params.mathN3} min={0.01} max={20} step={0.01} onChange={(v) => onChange({ ...params, mathN3: v })} />
        </div>
      </div>

      {/* Ring Layout */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Ring Layout
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Rings" value={params.numRings} min={1} max={30} step={1} onChange={(v) => onChange({ ...params, numRings: v })} />
          <Slider label="Max Radius" value={params.maxRadius} min={50} max={600} step={10} onChange={(v) => onChange({ ...params, maxRadius: v })} />
          <Slider label="Base Circles" value={params.baseCircles} min={3} max={20} step={1} onChange={(v) => onChange({ ...params, baseCircles: v })} />
          <Slider label="Circle Increment" value={params.circleIncrement} min={0} max={10} step={1} onChange={(v) => onChange({ ...params, circleIncrement: v })} />
          <Slider label="Circle Size" value={params.circleBaseSize} min={1} max={60} step={1} onChange={(v) => onChange({ ...params, circleBaseSize: v })} />
          <Slider label="Size Scale" value={params.circleScale} min={0.5} max={2} step={0.01} onChange={(v) => onChange({ ...params, circleScale: v })} />
          <Toggle label="Alternate Offset" value={params.alternateOffset} onChange={(v) => onChange({ ...params, alternateOffset: v })} />
          <Slider label="Angle" value={params.shapeRotation} min={0} max={6.28} step={0.01} onChange={(v) => onChange({ ...params, shapeRotation: v })} />
        </div>
      </div>

      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <Slider label="Rotation Speed" value={params.rotationSpeed} min={0} max={5} step={0.1} onChange={(v) => onChange({ ...params, rotationSpeed: v })} />
      </div>

      {/* Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Colors
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput label="Center" value={params.colorCenter} onChange={(v) => onChange({ ...params, colorCenter: v })} />
          <ColorInput label="Edge" value={params.colorEdge} onChange={(v) => onChange({ ...params, colorEdge: v })} />
          <ColorInput label="Background" value={params.bgColor} onChange={(v) => onChange({ ...params, bgColor: v })} />
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
