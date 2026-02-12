import React from "react";
import type { TextMaskParams, TextMaskSlide } from "./types";
import { COLOR_PRESETS } from "./constants";

interface Props {
  params: TextMaskParams;
  onChange: (params: TextMaskParams) => void;
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
        value ? "bg-neutral-800" : "bg-neutral-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
          value ? "translate-x-3" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);

export const TextmaskControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = COLOR_PRESETS.find(
    (p) =>
      p.colors.color1 === params.color1 &&
      p.colors.color2 === params.color2 &&
      p.colors.color3 === params.color3
  );

  const applyPreset = (preset: (typeof COLOR_PRESETS)[number]) => {
    onChange({ ...params, ...preset.colors });
  };

  const updateSlide = (index: number, field: keyof TextMaskSlide, value: string) => {
    const slides = params.slides.map((s, i) =>
      i === index ? { ...s, [field]: value } : s
    );
    onChange({ ...params, slides });
  };

  return (
    <>
      {/* Text Content */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Text Slides
        </div>
        <div className="flex flex-col gap-3">
          {params.slides.map((slide, i) => (
            <div key={i} className="bg-neutral-50 rounded-lg p-2">
              <div className="text-[8px] font-medium text-neutral-400 mb-1.5">
                Slide {i + 1}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  value={slide.line1}
                  onChange={(e) => updateSlide(i, "line1", e.target.value)}
                  maxLength={20}
                  className="w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400"
                  placeholder="Line 1"
                />
                <input
                  type="text"
                  value={slide.line2}
                  onChange={(e) => updateSlide(i, "line2", e.target.value)}
                  maxLength={20}
                  className="w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400"
                  placeholder="Line 2"
                />
                <input
                  type="text"
                  value={slide.line3}
                  onChange={(e) => updateSlide(i, "line3", e.target.value)}
                  maxLength={20}
                  className="w-full px-2 py-1 text-[9px] bg-white border border-neutral-200 rounded focus:outline-none focus:border-neutral-400"
                  placeholder="Line 3"
                />
              </div>
            </div>
          ))}
        </div>
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
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                background: `linear-gradient(135deg, ${preset.colors.color1}, ${preset.colors.color2}, ${preset.colors.color3})`,
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

      {/* Background */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Background
        </div>
        <ColorInput
          label="BG Color"
          value={params.bgColor}
          onChange={(v) => onChange({ ...params, bgColor: v })}
        />
      </div>

      {/* Bubble Colors */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Bubble Colors
        </div>
        <div className="flex flex-col gap-3">
          <ColorInput
            label="Color 1"
            value={params.color1}
            onChange={(v) => onChange({ ...params, color1: v })}
          />
          <ColorInput
            label="Color 2"
            value={params.color2}
            onChange={(v) => onChange({ ...params, color2: v })}
          />
          <ColorInput
            label="Color 3"
            value={params.color3}
            onChange={(v) => onChange({ ...params, color3: v })}
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
            label="Duration"
            value={params.duration}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, duration: v })}
          />
          <Slider
            label="Interval"
            value={params.interval}
            min={2}
            max={10}
            step={0.5}
            onChange={(v) => onChange({ ...params, interval: v })}
          />
          <Toggle
            label="Auto Play"
            value={params.autoPlay}
            onChange={(v) => onChange({ ...params, autoPlay: v })}
          />
        </div>
      </div>
    </>
  );
};
