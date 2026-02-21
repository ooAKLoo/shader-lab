import React, { useState } from "react";
import type { CosmicvortexParams } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: CosmicvortexParams;
  onChange: (params: CosmicvortexParams) => void;
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

function paramsMatch(a: CosmicvortexParams, b: CosmicvortexParams): boolean {
  return (
    a.particleCount === b.particleCount &&
    a.spiralArms === b.spiralArms &&
    a.spiralTightness === b.spiralTightness &&
    a.rotationSpeed === b.rotationSpeed &&
    a.trailFade === b.trailFade &&
    a.innerRadius === b.innerRadius &&
    a.diskRadius === b.diskRadius &&
    a.diskWidth === b.diskWidth &&
    a.particleSize === b.particleSize &&
    a.glowIntensity === b.glowIntensity &&
    a.warmAccentRatio === b.warmAccentRatio &&
    a.depthIntensity === b.depthIntensity &&
    a.bgColor === b.bgColor &&
    a.diskColor === b.diskColor &&
    a.accentColor === b.accentColor
  );
}

export const CosmicvortexControls: React.FC<Props> = ({ params, onChange }) => {
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
                    background: `radial-gradient(circle, ${preset.params.bgColor} 25%, ${preset.params.accentColor} 55%, ${preset.params.diskColor} 80%, ${preset.params.bgColor} 100%)`,
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

      {/* Structure */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Structure
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Particle Count"
            value={params.particleCount}
            min={1000}
            max={6000}
            step={100}
            onChange={(v) => onChange({ ...params, particleCount: v })}
          />
          <Slider
            label="Spiral Arms"
            value={params.spiralArms}
            min={2}
            max={8}
            step={1}
            onChange={(v) => onChange({ ...params, spiralArms: v })}
          />
          <Slider
            label="Spiral Tightness"
            value={params.spiralTightness}
            min={0.1}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, spiralTightness: v })}
          />
          <Slider
            label="Inner Radius"
            value={params.innerRadius}
            min={0.02}
            max={0.2}
            step={0.01}
            onChange={(v) => onChange({ ...params, innerRadius: v })}
          />
          <Slider
            label="Disk Radius"
            value={params.diskRadius}
            min={0}
            max={0.5}
            step={0.01}
            onChange={(v) => onChange({ ...params, diskRadius: v })}
          />
          <Slider
            label="Disk Width"
            value={params.diskWidth}
            min={0.05}
            max={0.3}
            step={0.01}
            onChange={(v) => onChange({ ...params, diskWidth: v })}
          />
        </div>
      </div>

      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Rotation Speed"
            value={params.rotationSpeed}
            min={0.1}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, rotationSpeed: v })}
          />
          <Slider
            label="Trail Fade"
            value={params.trailFade}
            min={0.01}
            max={0.15}
            step={0.01}
            onChange={(v) => onChange({ ...params, trailFade: v })}
          />
        </div>
      </div>

      {/* Visual */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Visual
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Particle Size"
            value={params.particleSize}
            min={0.5}
            max={4.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, particleSize: v })}
          />
          <Slider
            label="Glow Intensity"
            value={params.glowIntensity}
            min={0}
            max={40}
            step={1}
            onChange={(v) => onChange({ ...params, glowIntensity: v })}
          />
          <Slider
            label="Warm Accent Ratio"
            value={params.warmAccentRatio}
            min={0}
            max={0.5}
            step={0.01}
            onChange={(v) => onChange({ ...params, warmAccentRatio: v })}
          />
          <Slider
            label="Depth Intensity"
            value={params.depthIntensity}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, depthIntensity: v })}
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
            <span className="text-[9px] text-neutral-400 w-16">Background</span>
            <input
              type="color"
              value={params.bgColor}
              onChange={(e) => onChange({ ...params, bgColor: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Disk</span>
            <input
              type="color"
              value={params.diskColor}
              onChange={(e) => onChange({ ...params, diskColor: e.target.value })}
              className="flex-1 h-6 rounded cursor-pointer border-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-neutral-400 w-16">Accent</span>
            <input
              type="color"
              value={params.accentColor}
              onChange={(e) => onChange({ ...params, accentColor: e.target.value })}
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
