import React from 'react';
import type { EchotraceParams, ShapeType, BlendMode } from './types';
import { SHAPES, BLEND_MODES } from './constants';

interface Props {
  params: EchotraceParams;
  onChange: (params: EchotraceParams) => void;
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

export const EchotraceControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Shape Selection */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Shape
        </div>
        <div className="flex gap-1.5">
          {SHAPES.map((shape) => (
            <button
              key={shape.value}
              onClick={() => onChange({ ...params, shape: shape.value as ShapeType })}
              className={`flex-1 h-8 rounded-lg text-sm font-bold transition-all ${
                params.shape === shape.value
                  ? 'bg-neutral-800 text-white'
                  : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'
              }`}
            >
              {shape.label}
            </button>
          ))}
        </div>

        {params.shape === 'text' && (
          <input
            type="text"
            value={params.text}
            onChange={(e) => onChange({ ...params, text: e.target.value })}
            maxLength={10}
            className="w-full mt-2 px-2 py-1.5 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
            placeholder="Text content"
          />
        )}
      </div>

      {/* Style */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Style
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Size"
            value={params.size}
            min={10}
            max={200}
            step={5}
            onChange={(v) => onChange({ ...params, size: v })}
          />

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                Blend Mode
              </span>
            </div>
            <select
              value={params.blendMode}
              onChange={(e) => onChange({ ...params, blendMode: e.target.value as BlendMode })}
              className="w-full px-2 py-1.5 text-[9px] bg-neutral-100 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-400"
            >
              {BLEND_MODES.map((mode) => (
                <option key={mode.value} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Color
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                Base Hue
              </span>
              <div
                className="w-4 h-4 rounded-full border border-neutral-200"
                style={{ backgroundColor: `hsl(${params.baseHue}, 100%, 50%)` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={params.baseHue}
              onChange={(e) => onChange({ ...params, baseHue: parseInt(e.target.value) })}
              className="w-full h-1 rounded-full appearance-none cursor-pointer"
              style={{
                background: 'linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))',
              }}
            />
          </div>

          <Slider
            label="Rainbow Speed"
            value={params.hueSpeed}
            min={0}
            max={20}
            step={0.5}
            onChange={(v) => onChange({ ...params, hueSpeed: v })}
          />
        </div>
      </div>

      {/* Physics */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Physics
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Trail Length"
            value={params.trailLength}
            min={5}
            max={200}
            step={5}
            onChange={(v) => onChange({ ...params, trailLength: v })}
          />

          <Slider
            label="Spin Speed"
            value={params.rotationSpeed}
            min={-20}
            max={20}
            step={1}
            onChange={(v) => onChange({ ...params, rotationSpeed: v })}
          />

          <Toggle
            label="Fade Out"
            value={params.opacityDecay}
            onChange={(v) => onChange({ ...params, opacityDecay: v })}
          />

          <Toggle
            label="Shrink Trail"
            value={params.scaleDecay}
            onChange={(v) => onChange({ ...params, scaleDecay: v })}
          />
        </div>
      </div>
    </>
  );
};
