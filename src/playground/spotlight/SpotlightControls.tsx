import React from 'react';
import type { SpotlightParams } from './types';
import { COLOR_PRESETS } from './constants';

interface Props {
  params: SpotlightParams;
  onChange: (params: SpotlightParams) => void;
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
        {value.toFixed(step >= 1 ? 0 : 1)}
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

export const SpotlightControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) =>
      p.bg === params.bgColor &&
      p.shape1 === params.shape1Color &&
      p.shape2 === params.shape2Color &&
      p.shape3 === params.shape3Color
  );

  const applyPreset = (preset: typeof COLOR_PRESETS[number]) => {
    onChange({
      ...params,
      bgColor: preset.bg,
      shape1Color: preset.shape1,
      shape2Color: preset.shape2,
      shape3Color: preset.shape3,
    });
  };

  return (
    <>
      {/* Text Content */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Text Content
        </div>
        <input
          type="text"
          value={params.text}
          onChange={(e) => onChange({ ...params, text: e.target.value })}
          maxLength={30}
          className="w-full px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
          placeholder="Enter text"
        />
      </div>

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
                background: `linear-gradient(135deg, ${preset.shape1}, ${preset.shape2}, ${preset.shape3})`,
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

      {/* Custom Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Custom Colors
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput
            label="Background"
            value={params.bgColor}
            onChange={(v) => onChange({ ...params, bgColor: v })}
          />
          <ColorInput
            label="Shape 1"
            value={params.shape1Color}
            onChange={(v) => onChange({ ...params, shape1Color: v })}
          />
          <ColorInput
            label="Shape 2"
            value={params.shape2Color}
            onChange={(v) => onChange({ ...params, shape2Color: v })}
          />
          <ColorInput
            label="Shape 3"
            value={params.shape3Color}
            onChange={(v) => onChange({ ...params, shape3Color: v })}
          />
        </div>
      </div>

      {/* Shape Sizes */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape Sizes
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Shape 1 Size"
            value={params.shape1Size}
            min={200}
            max={1000}
            step={10}
            onChange={(v) => onChange({ ...params, shape1Size: v })}
          />
          <Slider
            label="Shape 2 Size"
            value={params.shape2Size}
            min={150}
            max={800}
            step={10}
            onChange={(v) => onChange({ ...params, shape2Size: v })}
          />
          <Slider
            label="Shape 3 Size"
            value={params.shape3Size}
            min={100}
            max={600}
            step={10}
            onChange={(v) => onChange({ ...params, shape3Size: v })}
          />
        </div>
      </div>

      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Stagger"
            value={params.stagger}
            min={0}
            max={0.5}
            step={0.01}
            onChange={(v) => onChange({ ...params, stagger: v })}
          />
          <Slider
            label="Cursor Size"
            value={params.cursorSize}
            min={10}
            max={50}
            step={1}
            onChange={(v) => onChange({ ...params, cursorSize: v })}
          />
          <Slider
            label="Font Size"
            value={params.fontSize}
            min={40}
            max={200}
            step={5}
            onChange={(v) => onChange({ ...params, fontSize: v })}
          />
        </div>
      </div>
    </>
  );
};
