import React from "react";
import type { SdfmorphParams } from "./types";
import { SHAPE_NAMES, EASE_NAMES } from "./types";

interface Props {
  params: SdfmorphParams;
  onChange: (params: SdfmorphParams) => void;
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

export const SdfmorphControls: React.FC<Props> = ({ params, onChange }) => {
  const update = <K extends keyof SdfmorphParams>(key: K, val: SdfmorphParams[K]) => {
    onChange({ ...params, [key]: val });
  };

  const updateSeq = (index: number, val: number) => {
    const newSeq = [...params.sequence] as [number, number, number, number, number];
    newSeq[index] = val;
    update("sequence", newSeq);
  };

  return (
    <>
      {/* Timeline */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Timeline
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="BPM" value={params.bpm} min={60} max={180} step={1} onChange={(v) => update("bpm", v)} />
          <Slider label="Speed" value={params.globalSpeed} min={0} max={3} step={0.01} onChange={(v) => update("globalSpeed", v)} />
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">Easing</span>
            </div>
            <select
              value={params.easeId}
              onChange={(e) => update("easeId", parseInt(e.target.value))}
              className="w-full text-[10px] px-2 py-1 rounded-lg bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer"
            >
              {EASE_NAMES.map((name, i) => (
                <option key={i} value={i}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Shape Sequence */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape Sequence
        </div>
        <div className="grid grid-cols-5 gap-1 mb-2">
          {params.sequence.map((sid, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <span className="text-[8px] text-neutral-400">{idx + 1}</span>
              <select
                value={sid}
                onChange={(e) => updateSeq(idx, parseInt(e.target.value))}
                className="w-full text-[9px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-700 border-0 outline-none cursor-pointer text-center"
              >
                {SHAPE_NAMES.map((n, i) => (
                  <option key={i} value={i}>{n}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Morph Physics */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Morph Physics
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Liquid Mix" value={params.liquidMix} min={0} max={1} step={0.01} onChange={(v) => update("liquidMix", v)} />
          <Slider label="Viscosity" value={params.liquidK} min={0.01} max={0.5} step={0.01} onChange={(v) => update("liquidK", v)} />
          <Slider label="Bloat" value={params.morphBloat} min={-0.5} max={0.5} step={0.01} onChange={(v) => update("morphBloat", v)} />
        </div>
      </div>

      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Base Rotation" value={params.rotBase} min={0} max={1} step={0.01} onChange={(v) => update("rotBase", v)} />
          <Slider label="Morph Rotation" value={params.rotMorph} min={0} max={2} step={0.01} onChange={(v) => update("rotMorph", v)} />
          <Slider label="Breath Scale" value={params.scaleBreath} min={0} max={0.2} step={0.01} onChange={(v) => update("scaleBreath", v)} />
        </div>
      </div>

      {/* Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Style
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Stroke Width" value={params.strokeWidth} min={0.001} max={0.1} step={0.001} onChange={(v) => update("strokeWidth", v)} />
          <Slider label="Glow" value={params.glowStrength} min={0} max={1} step={0.01} onChange={(v) => update("glowStrength", v)} />
          <Slider label="Fill" value={params.fillStrength} min={0} max={1} step={0.01} onChange={(v) => update("fillStrength", v)} />
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div>
              <span className="text-[8px] text-neutral-400 block mb-1">Ink A</span>
              <input type="color" value={params.inkColorA} onChange={(e) => update("inkColorA", e.target.value)} className="w-full h-5 rounded cursor-pointer border-0" />
            </div>
            <div>
              <span className="text-[8px] text-neutral-400 block mb-1">Ink B</span>
              <input type="color" value={params.inkColorB} onChange={(e) => update("inkColorB", e.target.value)} className="w-full h-5 rounded cursor-pointer border-0" />
            </div>
            <div>
              <span className="text-[8px] text-neutral-400 block mb-1">Bg A</span>
              <input type="color" value={params.bgColorA} onChange={(e) => update("bgColorA", e.target.value)} className="w-full h-5 rounded cursor-pointer border-0" />
            </div>
            <div>
              <span className="text-[8px] text-neutral-400 block mb-1">Bg B</span>
              <input type="color" value={params.bgColorB} onChange={(e) => update("bgColorB", e.target.value)} className="w-full h-5 rounded cursor-pointer border-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Geometry */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape Geometry
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Size" value={params.shapeSize} min={0.1} max={0.8} step={0.01} onChange={(v) => update("shapeSize", v)} />
          <Slider label="Star Inner Ratio" value={params.starInnerRatio} min={0.1} max={0.9} step={0.01} onChange={(v) => update("starInnerRatio", v)} />
          <Slider label="Star Points" value={params.starPoints} min={3} max={10} step={1} onChange={(v) => update("starPoints", v)} />
        </div>
      </div>

      {/* Post Processing */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Post Processing
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Vignette" value={params.vignette} min={0} max={1} step={0.01} onChange={(v) => update("vignette", v)} />
          <Slider label="Grain" value={params.grain} min={0} max={0.2} step={0.01} onChange={(v) => update("grain", v)} />
        </div>
      </div>
    </>
  );
};
