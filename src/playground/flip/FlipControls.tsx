import React from 'react';
import type { FlipParams } from './types';
import { COLOR_PRESETS } from './constants';

interface Props {
  params: FlipParams;
  onChange: (params: FlipParams) => void;
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
        {value.toFixed(step >= 1 ? 0 : 2)}
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
        value ? 'bg-neutral-800' : 'bg-neutral-300'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
          value ? 'translate-x-3' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export const FlipControls: React.FC<Props> = ({ params, onChange }) => {
  const applyPreset = (preset: typeof COLOR_PRESETS[number]) => {
    onChange({
      ...params,
      ...preset.colors,
    });
  };

  const currentPreset = COLOR_PRESETS.find(
    (p) =>
      p.colors.colorF === params.colorF &&
      p.colors.colorL === params.colorL &&
      p.colors.colorI === params.colorI &&
      p.colors.colorP === params.colorP
  );

  return (
    <>
      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
                  ? 'ring-2 ring-neutral-800 ring-offset-1 scale-110'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
              style={{
                background: `linear-gradient(135deg, ${preset.colors.colorF}, ${preset.colors.colorL}, ${preset.colors.colorI}, ${preset.colors.colorP})`,
              }}
              title={preset.label}
            />
          ))}
        </div>
        {currentPreset && (
          <div className="mt-2 text-[9px] font-medium text-neutral-500">
            {currentPreset.label}
          </div>
        )}
      </div>

      {/* Letter Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Letter Colors
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput
            label="F Color"
            value={params.colorF}
            onChange={(v) => onChange({ ...params, colorF: v })}
          />
          <ColorInput
            label="L Color"
            value={params.colorL}
            onChange={(v) => onChange({ ...params, colorL: v })}
          />
          <ColorInput
            label="I Color"
            value={params.colorI}
            onChange={(v) => onChange({ ...params, colorI: v })}
          />
          <ColorInput
            label="P Color"
            value={params.colorP}
            onChange={(v) => onChange({ ...params, colorP: v })}
          />
        </div>
      </div>

      {/* Background & Text */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Background & Text
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput
            label="Background"
            value={params.bgColor}
            onChange={(v) => onChange({ ...params, bgColor: v })}
          />
          <ColorInput
            label="Text Color"
            value={params.textColor}
            onChange={(v) => onChange({ ...params, textColor: v })}
          />
          <Slider
            label="Font Size"
            value={params.fontSize}
            min={5}
            max={20}
            step={0.5}
            onChange={(v) => onChange({ ...params, fontSize: v })}
          />
        </div>
      </div>

      {/* Animation Settings */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Duration"
            value={params.duration}
            min={0.3}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, duration: v })}
          />
          <Slider
            label="Stagger"
            value={params.stagger}
            min={0}
            max={0.3}
            step={0.01}
            onChange={(v) => onChange({ ...params, stagger: v })}
          />
          <Slider
            label="Interval"
            value={params.interval}
            min={0.5}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, interval: v })}
          />
          <Toggle
            label="Auto Play"
            value={params.autoPlay}
            onChange={(v) => onChange({ ...params, autoPlay: v })}
          />
          <Toggle
            label="Spin on Final"
            value={params.spinOnFinal}
            onChange={(v) => onChange({ ...params, spinOnFinal: v })}
          />
        </div>
      </div>
    </>
  );
};
