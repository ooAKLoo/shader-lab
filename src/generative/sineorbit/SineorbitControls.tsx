import React, { useState } from "react";
import type { SineorbitParams, ShapeType, BlendModeType } from "./types";
import { SHAPE_TYPES, BLEND_MODES } from "./constants";

interface Props {
  params: SineorbitParams;
  onChange: (params: SineorbitParams) => void;
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

export const SineorbitControls: React.FC<Props> = ({ params, onChange }) => {
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
      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Shape Type
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {SHAPE_TYPES.map((st) => (
            <button
              key={st.value}
              onClick={() => onChange({ ...params, shapeType: st.value as ShapeType })}
              className={`px-2 py-1 rounded-lg text-[9px] font-medium transition-all ${
                params.shapeType === st.value
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Width" value={params.shapeWidth} min={5} max={80} step={1} onChange={(v) => onChange({ ...params, shapeWidth: v })} />
          <Slider label="Height" value={params.shapeHeight} min={5} max={80} step={1} onChange={(v) => onChange({ ...params, shapeHeight: v })} />
        </div>
      </div>

      {/* Orbit */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Orbit Layout
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Layers" value={params.layerCount} min={1} max={30} step={1} onChange={(v) => onChange({ ...params, layerCount: v })} />
          <Slider label="Base Radius" value={params.baseRadius} min={5} max={100} step={1} onChange={(v) => onChange({ ...params, baseRadius: v })} />
          <Slider label="Radius Step" value={params.radiusStep} min={5} max={60} step={1} onChange={(v) => onChange({ ...params, radiusStep: v })} />
          <Slider label="Base Items" value={params.baseItems} min={2} max={20} step={1} onChange={(v) => onChange({ ...params, baseItems: v })} />
          <Slider label="Items Increment" value={params.itemsIncrement} min={0} max={10} step={1} onChange={(v) => onChange({ ...params, itemsIncrement: v })} />
        </div>
      </div>

      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Global Speed" value={params.globalSpeed} min={0} max={3} step={0.1} onChange={(v) => onChange({ ...params, globalSpeed: v })} />
          <Slider label="Layer Rotation" value={params.layerRotationSpeed} min={0} max={3} step={0.1} onChange={(v) => onChange({ ...params, layerRotationSpeed: v })} />
          <Slider label="Layer Twist" value={params.layerTwist} min={0} max={2} step={0.05} onChange={(v) => onChange({ ...params, layerTwist: v })} />
          <Slider label="Item Spin" value={params.itemSpinSpeed} min={0} max={5} step={0.1} onChange={(v) => onChange({ ...params, itemSpinSpeed: v })} />
        </div>
      </div>

      {/* Sine Morph */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Sine Morph
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Amplitude" value={params.sineAmp} min={0} max={50} step={1} onChange={(v) => onChange({ ...params, sineAmp: v })} />
          <Slider label="Frequency" value={params.sineFreq} min={0.5} max={10} step={0.1} onChange={(v) => onChange({ ...params, sineFreq: v })} />
          <Slider label="Morph Speed" value={params.morphSpeed} min={0} max={5} step={0.1} onChange={(v) => onChange({ ...params, morphSpeed: v })} />
        </div>
      </div>

      {/* Blend & Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Blend Mode
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {BLEND_MODES.map((bm) => (
            <button
              key={bm.value}
              onClick={() => onChange({ ...params, blendMode: bm.value as BlendModeType })}
              className={`px-2 py-1 rounded-lg text-[9px] font-medium transition-all ${
                params.blendMode === bm.value
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
              }`}
            >
              {bm.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Opacity" value={params.opacity} min={0.05} max={1} step={0.05} onChange={(v) => onChange({ ...params, opacity: v })} />
          <ColorInput label="Inner Color" value={params.colorInner} onChange={(v) => onChange({ ...params, colorInner: v })} />
          <ColorInput label="Outer Color" value={params.colorOuter} onChange={(v) => onChange({ ...params, colorOuter: v })} />
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
