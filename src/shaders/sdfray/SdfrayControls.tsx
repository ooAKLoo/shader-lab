import React from "react";
import type { SdfrayParams } from "./SdfrayCanvas";

interface Props {
  params: SdfrayParams;
  onChange: (params: SdfrayParams) => void;
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

const PRESETS = [
  {
    id: "default",
    label: "Cyber",
    c1: "#ff2a5f",
    c2: "#00d2ff",
  },
  {
    id: "solar",
    label: "Solar",
    c1: "#ff8800",
    c2: "#ffee00",
  },
  {
    id: "matrix",
    label: "Matrix",
    c1: "#00ff66",
    c2: "#003311",
  },
  {
    id: "void",
    label: "Void",
    c1: "#8844ff",
    c2: "#110033",
  },
];

export const SdfrayControls: React.FC<Props> = ({ params, onChange }) => {
  const currentPreset = PRESETS.find(
    (p) => p.c1 === params.color1 && p.c2 === params.color2
  );

  return (
    <>
      {/* Shape & Transform */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Shape & Transform
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Shape Blend (Box ⇔ Sphere)"
            value={params.shapeBlend}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ ...params, shapeBlend: v })}
          />
          <Slider
            label="Twist"
            value={params.twist}
            min={0}
            max={5}
            step={0.1}
            onChange={(v) => onChange({ ...params, twist: v })}
          />
          <Slider
            label="Camera Distance"
            value={params.cameraZ}
            min={1.5}
            max={8}
            step={0.1}
            onChange={(v) => onChange({ ...params, cameraZ: v })}
          />
          <Slider
            label="Speed"
            value={params.speed}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
        </div>
      </div>

      {/* Lighting */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Lighting
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Light X"
            value={params.lightX}
            min={-10}
            max={10}
            step={0.1}
            onChange={(v) => onChange({ ...params, lightX: v })}
          />
          <Slider
            label="Light Y"
            value={params.lightY}
            min={-10}
            max={10}
            step={0.1}
            onChange={(v) => onChange({ ...params, lightY: v })}
          />
          <Slider
            label="Light Z"
            value={params.lightZ}
            min={-10}
            max={10}
            step={0.1}
            onChange={(v) => onChange({ ...params, lightZ: v })}
          />
          <Slider
            label="Ambient"
            value={params.ambient}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ ...params, ambient: v })}
          />
          <Slider
            label="Shininess"
            value={params.shininess}
            min={1}
            max={128}
            step={1}
            onChange={(v) => onChange({ ...params, shininess: v })}
          />
        </div>
      </div>

      {/* Color Presets */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() =>
                onChange({ ...params, color1: preset.c1, color2: preset.c2 })
              }
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                currentPreset?.id === preset.id
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
        {currentPreset && (
          <div className="mt-2 text-[9px] font-medium text-neutral-500">
            {currentPreset.label}
          </div>
        )}
      </div>
    </>
  );
};
