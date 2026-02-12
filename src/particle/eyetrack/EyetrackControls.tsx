import React from "react";
import type { EyetrackParams } from "./types";
import { EYE_PRESETS } from "./constants";

interface Props {
  params: EyetrackParams;
  onChange: (params: EyetrackParams) => void;
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

function paramsMatch(a: EyetrackParams, b: EyetrackParams): boolean {
  return (
    a.eyeGap === b.eyeGap &&
    a.eyeWidth === b.eyeWidth &&
    a.eyeHeight === b.eyeHeight &&
    a.eyeRadius === b.eyeRadius &&
    a.pupilSize === b.pupilSize &&
    a.smoothing === b.smoothing &&
    a.sensitivity === b.sensitivity &&
    a.cardColor === b.cardColor &&
    a.blinkInterval === b.blinkInterval &&
    a.blinkStyle === b.blinkStyle
  );
}

export const EyetrackControls: React.FC<Props> = ({ params, onChange }) => {
  const activePreset = EYE_PRESETS.find((p) => paramsMatch(p.params, params));

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {EYE_PRESETS.map((preset) => {
            const isActive = activePreset?.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onChange(preset.params)}
                className={`relative h-8 rounded-lg text-[9px] font-medium transition-all overflow-hidden ${
                  isActive
                    ? "ring-2 ring-neutral-800 ring-offset-1"
                    : "opacity-75 hover:opacity-100"
                }`}
                style={{ background: preset.params.cardColor }}
              >
                {/* Mini eye preview */}
                <div className="absolute inset-0 flex items-center justify-center gap-[3px]">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="relative flex items-center justify-center"
                      style={{
                        width: 14,
                        height: 14 * (preset.params.eyeHeight / preset.params.eyeWidth),
                        background: "#fff",
                        borderRadius: Math.min(preset.params.eyeRadius, 999) * (14 / preset.params.eyeWidth),
                      }}
                    >
                      <div
                        style={{
                          width: 14 * (preset.params.pupilSize / preset.params.eyeWidth),
                          height: 14 * (preset.params.pupilSize / preset.params.eyeWidth) * 1.2,
                          background: "#000",
                          borderRadius: 999,
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Label */}
                <span
                  className="absolute bottom-0.5 left-0 right-0 text-center text-[7px] font-semibold"
                  style={{
                    color: isLightColor(preset.params.cardColor) ? "#333" : "#fff",
                  }}
                >
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Eye Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Eye Shape
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Eye Width"
            value={params.eyeWidth}
            min={100}
            max={320}
            step={10}
            onChange={(v) => onChange({ ...params, eyeWidth: v })}
          />
          <Slider
            label="Eye Height"
            value={params.eyeHeight}
            min={40}
            max={160}
            step={4}
            onChange={(v) => onChange({ ...params, eyeHeight: v })}
          />
          <Slider
            label="Eye Radius"
            value={params.eyeRadius}
            min={0}
            max={999}
            step={1}
            onChange={(v) => onChange({ ...params, eyeRadius: v })}
          />
          <Slider
            label="Eye Gap"
            value={params.eyeGap}
            min={20}
            max={150}
            step={2}
            onChange={(v) => onChange({ ...params, eyeGap: v })}
          />
          <Slider
            label="Pupil Size"
            value={params.pupilSize}
            min={30}
            max={140}
            step={2}
            onChange={(v) => onChange({ ...params, pupilSize: v })}
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
            label="Smoothing"
            value={params.smoothing}
            min={0.02}
            max={0.5}
            step={0.02}
            onChange={(v) => onChange({ ...params, smoothing: v })}
          />
          <Slider
            label="Sensitivity"
            value={params.sensitivity}
            min={0.02}
            max={0.2}
            step={0.01}
            onChange={(v) => onChange({ ...params, sensitivity: v })}
          />
          <Slider
            label="Blink Interval"
            value={params.blinkInterval}
            min={1}
            max={15}
            step={0.5}
            onChange={(v) => onChange({ ...params, blinkInterval: v })}
          />
          {/* Blink Style */}
          <div>
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5">
              Blink Style
            </div>
            <div className="flex gap-1.5">
              {(["center", "top"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => onChange({ ...params, blinkStyle: s })}
                  className={`flex-1 text-[9px] py-1 rounded-lg font-medium transition-colors ${
                    params.blinkStyle === s
                      ? "bg-neutral-800 text-white"
                      : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                  }`}
                >
                  {s === "center" ? "Center" : "Eyelid"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Appearance
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                Card Color
              </span>
            </div>
            <input
              type="color"
              value={params.cardColor}
              onChange={(e) => onChange({ ...params, cardColor: e.target.value })}
              className="w-full h-6 rounded cursor-pointer border-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

/** Simple perceived-brightness check for text contrast */
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 150;
}
