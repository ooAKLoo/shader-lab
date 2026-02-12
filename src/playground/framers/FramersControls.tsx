import React from 'react';
import type { FramersParams } from './types';

interface Props {
  params: FramersParams;
  onChange: (params: FramersParams) => void;
}

const Slider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}> = ({ label, value, min, max, step, unit = '', onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">
        {value.toFixed(step >= 1 ? 0 : step >= 0.1 ? 1 : 2)}{unit}
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

export const FramersControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Text */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Text
        </div>
        <input
          type="text"
          value={params.text}
          onChange={(e) => onChange({ ...params, text: e.target.value })}
          maxLength={20}
          className="w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
          placeholder="Enter text"
        />
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
            min={0.1}
            max={2.0}
            step={0.1}
            unit="s"
            onChange={(v) => onChange({ ...params, duration: v })}
          />
        </div>
      </div>

      {/* Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Colors
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput
            label="Background"
            value={params.bgColor}
            onChange={(v) => onChange({ ...params, bgColor: v })}
          />
          <ColorInput
            label="Text"
            value={params.textColor}
            onChange={(v) => onChange({ ...params, textColor: v })}
          />
        </div>
      </div>
    </>
  );
};
