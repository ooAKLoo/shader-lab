import React from "react";
import type { LettermorphParams } from "./types";

interface Props {
  params: LettermorphParams;
  onChange: (params: LettermorphParams) => void;
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
        {step >= 1 ? value : value.toFixed(step >= 0.1 ? 1 : step >= 0.01 ? 2 : 3)}
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

export const LettermorphControls: React.FC<Props> = ({ params, onChange }) => {
  const update = <K extends keyof LettermorphParams>(key: K, val: LettermorphParams[K]) => {
    onChange({ ...params, [key]: val });
  };

  return (
    <>
      {/* Timeline */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Timeline
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Letter Duration" value={params.letterDuration} min={0.3} max={4.0} step={0.1} onChange={(v) => update("letterDuration", v)} />
        </div>
      </div>

      {/* Glyph */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Glyph
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Stroke Width" value={params.strokeWidth} min={0.01} max={0.15} step={0.005} onChange={(v) => update("strokeWidth", v)} />
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
          <Slider label="Bloat" value={params.bloat} min={-0.3} max={0.3} step={0.01} onChange={(v) => update("bloat", v)} />
        </div>
      </div>

      {/* Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Style
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Glow" value={params.glowSharp} min={2} max={30} step={0.5} onChange={(v) => update("glowSharp", v)} />
          <Slider label="Edge" value={params.edgeSharp} min={10} max={80} step={1} onChange={(v) => update("edgeSharp", v)} />
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

      {/* Post */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Post Processing
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Vignette" value={params.vignette} min={0} max={1} step={0.01} onChange={(v) => update("vignette", v)} />
          <Slider label="Grain" value={params.grain} min={0} max={0.15} step={0.01} onChange={(v) => update("grain", v)} />
        </div>
      </div>
    </>
  );
};
