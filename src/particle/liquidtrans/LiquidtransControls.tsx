import React from "react";
import type { LiquidtransParams, DistortionStyle, TextureStyle } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: LiquidtransParams;
  onChange: (params: LiquidtransParams) => void;
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

const DISTORTION_OPTIONS: { value: DistortionStyle; label: string }[] = [
  { value: "swirl", label: "Swirl" },
  { value: "stretch", label: "Stretch" },
  { value: "radial", label: "Radial" },
  { value: "turbulent", label: "Turbulent" },
];

const TEXTURE_OPTIONS: { value: TextureStyle; label: string }[] = [
  { value: "flat", label: "Flat" },
  { value: "silk", label: "Silk" },
  { value: "oil", label: "Oil" },
  { value: "watercolor", label: "Aqua" },
  { value: "metal", label: "Metal" },
];

function paramsMatch(a: LiquidtransParams, b: LiquidtransParams): boolean {
  return (
    a.speed === b.speed &&
    a.scale === b.scale &&
    a.swirl === b.swirl &&
    a.turbulence === b.turbulence &&
    a.edgeSoftness === b.edgeSoftness &&
    a.color1 === b.color1 &&
    a.color2 === b.color2 &&
    a.color3 === b.color3 &&
    a.vignette === b.vignette &&
    a.grain === b.grain &&
    a.mouseForce === b.mouseForce &&
    a.mouseRadius === b.mouseRadius &&
    a.symmetry === b.symmetry &&
    a.hueDrift === b.hueDrift &&
    a.distortion === b.distortion &&
    a.texture === b.texture
  );
}

export const LiquidtransControls: React.FC<Props> = ({ params, onChange }) => {
  const update = <K extends keyof LiquidtransParams>(key: K, val: LiquidtransParams[K]) => {
    onChange({ ...params, [key]: val });
  };

  const activePreset = PRESETS.find((p) => paramsMatch(p.params, params));

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-4 gap-1.5">
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
                    background: `linear-gradient(135deg, ${preset.params.color1} 0%, ${preset.params.color2} 50%, ${preset.params.color3} 100%)`,
                  }}
                />
                <span
                  className={`text-[8px] font-medium leading-none ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
        {activePreset && (
          <div className="mt-2 text-[9px] text-neutral-400">
            {activePreset.label}
          </div>
        )}
      </div>

      {/* Animation + Pause */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
            Animation
          </span>
          <button
            onClick={() => update("paused", !params.paused)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-medium transition-all ${
              params.paused
                ? "bg-amber-100 text-amber-700"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            {params.paused ? "\u25B6 Play" : "\u23F8 Pause"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0} max={2} step={0.01} onChange={(v) => update("speed", v)} />
          <Slider label="Scale" value={params.scale} min={0.5} max={6} step={0.1} onChange={(v) => update("scale", v)} />
        </div>
      </div>

      {/* Distortion Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Distortion Style
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {DISTORTION_OPTIONS.map((opt) => {
            const isActive = params.distortion === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => update("distortion", opt.value)}
                className={`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Texture Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Texture
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {TEXTURE_OPTIONS.map((opt) => {
            const isActive = params.texture === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => update("texture", opt.value)}
                className={`py-1.5 px-1 rounded-lg text-[9px] font-medium transition-all ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fluid */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Fluid
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Swirl" value={params.swirl} min={0} max={8} step={0.1} onChange={(v) => update("swirl", v)} />
          <Slider label="Turbulence" value={params.turbulence} min={0.1} max={2} step={0.01} onChange={(v) => update("turbulence", v)} />
          <Slider label="Edge Softness" value={params.edgeSoftness} min={0.01} max={0.8} step={0.01} onChange={(v) => update("edgeSoftness", v)} />
        </div>
      </div>

      {/* Interaction */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Interaction
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Mouse Force" value={params.mouseForce} min={0} max={3} step={0.01} onChange={(v) => update("mouseForce", v)} />
          <Slider label="Mouse Radius" value={params.mouseRadius} min={0.05} max={0.8} step={0.01} onChange={(v) => update("mouseRadius", v)} />
        </div>
      </div>

      {/* Symmetry & Hue */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Transform
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Symmetry" value={params.symmetry} min={1} max={8} step={1} onChange={(v) => update("symmetry", v)} />
          <Slider label="Hue Drift" value={params.hueDrift} min={0} max={1} step={0.01} onChange={(v) => update("hueDrift", v)} />
        </div>
      </div>

      {/* Post Processing */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Post Processing
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Vignette" value={params.vignette} min={0} max={1} step={0.01} onChange={(v) => update("vignette", v)} />
          <Slider label="Grain" value={params.grain} min={0} max={0.3} step={0.01} onChange={(v) => update("grain", v)} />
        </div>
      </div>

      {/* Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Custom Colors
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="color" value={params.color1} onChange={(e) => update("color1", e.target.value)} className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Color A</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="color" value={params.color2} onChange={(e) => update("color2", e.target.value)} className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Color B</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="color" value={params.color3} onChange={(e) => update("color3", e.target.value)} className="w-6 h-6 rounded-lg border-0 cursor-pointer" />
            <span className="text-[9px] text-neutral-500">Color C</span>
          </div>
        </div>
      </div>
    </>
  );
};
