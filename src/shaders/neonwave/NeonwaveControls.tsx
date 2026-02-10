import React from "react";
import type { NeonwaveParams } from "./NeonwaveCanvas";

interface Props {
  params: NeonwaveParams;
  onChange: (params: NeonwaveParams) => void;
}

const COLOR_PRESETS: { id: string; label: string; c1: string; c2: string }[] = [
  { id: "cyber", label: "Cyber", c1: "#2266ff", c2: "#9933ff" },
  { id: "retrowave", label: "Retrowave", c1: "#ff1493", c2: "#ff6600" },
  { id: "emerald", label: "Emerald", c1: "#00cc66", c2: "#00bbff" },
  { id: "inferno", label: "Inferno", c1: "#ff3300", c2: "#ffaa00" },
  { id: "frost", label: "Frost", c1: "#33ccff", c2: "#6666ff" },
];

type MotionPresetKey = "calm" | "cruise" | "rush" | "dream";

const MOTION_PRESETS: { id: MotionPresetKey; label: string; params: Pick<NeonwaveParams, "speed" | "height" | "smoothness"> }[] = [
  { id: "calm", label: "Calm Waves", params: { speed: 0.3, height: 2.2, smoothness: 1.0 } },
  { id: "cruise", label: "Night Cruise", params: { speed: 0.5, height: 2.0, smoothness: 1.5 } },
  { id: "rush", label: "Speed Rush", params: { speed: 1.0, height: 1.8, smoothness: 0.8 } },
  { id: "dream", label: "Dream Flight", params: { speed: 0.2, height: 2.5, smoothness: 2.0 } },
];

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
        {value.toFixed(2)}
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

export const NeonwaveControls: React.FC<Props> = ({ params, onChange }) => {
  const currentMotionPreset = MOTION_PRESETS.find(
    (p) =>
      p.params.speed === params.speed &&
      p.params.height === params.height &&
      p.params.smoothness === params.smoothness
  );

  const currentColorPreset = COLOR_PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2
  );

  return (
    <>
      {/* Motion */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Motion
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Speed"
            value={params.speed}
            min={0}
            max={2}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Height"
            value={params.height}
            min={1.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, height: v })}
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
            label="Smoothness"
            value={params.smoothness}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, smoothness: v })}
          />
        </div>
      </div>

      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Theme
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({ ...params, color1: preset.c1, color2: preset.c2 })}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentColorPreset?.id === preset.id
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})`,
              }}
              title={preset.label}
            />
          ))}
        </div>
        {currentColorPreset && (
          <div className="mt-2 text-[9px] font-medium text-neutral-500">
            {currentColorPreset.label}
          </div>
        )}

        {/* Custom Color Pickers */}
        <div className="mt-3 flex gap-3">
          <div className="flex-1">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1">
              Wave
            </div>
            <div className="flex items-center gap-1.5">
              <label className="w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block">
                <input
                  type="color"
                  value={params.color1}
                  onChange={(e) => onChange({ ...params, color1: e.target.value })}
                  className="w-full h-full cursor-pointer opacity-0 absolute"
                />
                <div className="w-full h-full rounded-lg" style={{ background: params.color1 }} />
              </label>
              <span className="text-[9px] font-medium text-neutral-400 tabular-nums uppercase">
                {params.color1}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-1">
              Sky
            </div>
            <div className="flex items-center gap-1.5">
              <label className="w-6 h-6 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 block">
                <input
                  type="color"
                  value={params.color2}
                  onChange={(e) => onChange({ ...params, color2: e.target.value })}
                  className="w-full h-full cursor-pointer opacity-0 absolute"
                />
                <div className="w-full h-full rounded-lg" style={{ background: params.color2 }} />
              </label>
              <span className="text-[9px] font-medium text-neutral-400 tabular-nums uppercase">
                {params.color2}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Flight Presets
        </div>
        <div className="flex flex-col gap-1.5">
          {MOTION_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({ ...params, ...preset.params })}
              className={`px-3 py-2 rounded-lg text-[10px] font-medium transition-all ${
                currentMotionPreset?.id === preset.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
