import React from "react";
import type { FibonacciParams, ColorMode, PaletteId } from "./types";
import { COLOR_MODES, PALETTES } from "./constants";

interface Props {
  params: FibonacciParams;
  onChange: (params: FibonacciParams) => void;
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
        {step >= 1 ? value : value.toFixed(step >= 0.01 ? 2 : 3)}
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

export const FibonacciControls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* Phyllotaxis */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Phyllotaxis
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Dots"
            value={params.numDots}
            min={10}
            max={2000}
            step={10}
            onChange={(v) => onChange({ ...params, numDots: v })}
          />
          <Slider
            label="Spread"
            value={params.spread}
            min={2}
            max={50}
            step={0.5}
            onChange={(v) => onChange({ ...params, spread: v })}
          />
          <Slider
            label="Angle"
            value={params.angleStep}
            min={0}
            max={360}
            step={0.01}
            onChange={(v) => onChange({ ...params, angleStep: v })}
          />
          <div className="text-[8px] text-neutral-300 -mt-1">
            137.5° = Golden Angle (sunflower)
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Base Size"
            value={params.baseSize}
            min={0.5}
            max={30}
            step={0.5}
            onChange={(v) => onChange({ ...params, baseSize: v })}
          />
          <Slider
            label="Growth"
            value={params.sizeGrowth}
            min={0}
            max={0.5}
            step={0.005}
            onChange={(v) => onChange({ ...params, sizeGrowth: v })}
          />
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Mode
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {COLOR_MODES.map((mode) => (
            <button
              key={mode.value}
              onClick={() => onChange({ ...params, colorMode: mode.value as ColorMode })}
              className={`px-2 py-1 rounded-lg text-[9px] font-medium transition-all ${
                params.colorMode === mode.value
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {params.colorMode === "solid" && (
            <ColorInput
              label="Dot Color"
              value={params.dotColor}
              onChange={(v) => onChange({ ...params, dotColor: v })}
            />
          )}

          {(params.colorMode === "radial" ||
            params.colorMode === "angular" ||
            params.colorMode === "alternating") && (
            <div>
              <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
                Palette
              </div>
              <div className="flex flex-col gap-1.5">
                {PALETTES.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => onChange({ ...params, palette: p.value as PaletteId })}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all ${
                      params.palette === p.value
                        ? "bg-neutral-800"
                        : "bg-neutral-100 hover:bg-neutral-200"
                    }`}
                  >
                    <div className="flex gap-0.5">
                      {p.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-sm"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-[9px] font-medium ${
                        params.palette === p.value ? "text-white" : "text-neutral-500"
                      }`}
                    >
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <ColorInput
            label="Background"
            value={params.bgColor}
            onChange={(v) => onChange({ ...params, bgColor: v })}
          />
        </div>
      </div>

      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <Toggle
          label="Auto Rotate"
          value={params.animate}
          onChange={(v) => onChange({ ...params, animate: v })}
        />
      </div>
    </>
  );
};
