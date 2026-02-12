import React from 'react';
import type { SquaresParams } from './types';

interface Props {
  params: SquaresParams;
  onChange: (params: SquaresParams) => void;
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

export const SquaresControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Distribution */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Distribution
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Count"
            value={params.count}
            min={500}
            max={15000}
            step={500}
            onChange={(v) => onChange({ ...params, count: v })}
          />
          <Slider
            label="Spread"
            value={params.spread}
            min={0.1}
            max={1.0}
            step={0.05}
            onChange={(v) => onChange({ ...params, spread: v })}
          />
        </div>
      </div>

      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Size"
            value={params.size}
            min={10}
            max={120}
            step={5}
            onChange={(v) => onChange({ ...params, size: v })}
          />
          <Slider
            label="Size Variance"
            value={params.sizeVariance}
            min={0}
            max={60}
            step={5}
            onChange={(v) => onChange({ ...params, sizeVariance: v })}
          />
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Color
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Opacity"
            value={params.opacity}
            min={0.05}
            max={1.0}
            step={0.05}
            onChange={(v) => onChange({ ...params, opacity: v })}
          />
          <Slider
            label="Perturbation"
            value={params.perturbation}
            min={0}
            max={80}
            step={5}
            onChange={(v) => onChange({ ...params, perturbation: v })}
          />
          <Slider
            label="Gamma Bias"
            value={params.gammaBias}
            min={0.5}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, gammaBias: v })}
          />
        </div>
      </div>
    </>
  );
};
