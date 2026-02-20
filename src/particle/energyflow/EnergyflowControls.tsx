import React from "react";
import type { EnergyflowParams, FlowStream } from "./types";
import { PRESETS } from "./constants";

interface Props {
  params: EnergyflowParams;
  onChange: (params: EnergyflowParams) => void;
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

function streamsMatch(a: EnergyflowParams, b: EnergyflowParams): boolean {
  if (a.showMarkers !== b.showMarkers) return false;
  if (a.streams.length !== b.streams.length) return false;
  return a.streams.every((s, i) => {
    const o = b.streams[i];
    return (
      s.color === o.color &&
      s.lineCount === o.lineCount &&
      s.spread === o.spread &&
      s.curvature === o.curvature &&
      s.speed === o.speed &&
      s.opacity === o.opacity &&
      s.width === o.width &&
      s.targetX === o.targetX &&
      s.targetY === o.targetY &&
      s.sourceX === o.sourceX &&
      s.sourceY === o.sourceY
    );
  });
}

export const EnergyflowControls: React.FC<Props> = ({ params, onChange }) => {
  const activePreset = PRESETS.find((p) => streamsMatch(p.params, params));

  const updateStream = (id: string, updates: Partial<FlowStream>) => {
    onChange({
      ...params,
      streams: params.streams.map((s) =>
        s.id === id ? { ...s, ...updates } : s,
      ),
    });
  };

  const addStream = () => {
    const newId = Math.random().toString(36).slice(2, 9);
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    onChange({
      ...params,
      streams: [
        ...params.streams,
        {
          id: newId,
          color: randomColor,
          lineCount: 50,
          spread: 200,
          curvature: 0.5,
          speed: 2,
          opacity: 0.6,
          width: 1,
          targetX: Math.random() * 0.6 + 0.2,
          targetY: Math.random() * 0.6 + 0.2,
          sourceX: -0.1,
          sourceY: Math.random(),
        },
      ],
    });
  };

  const removeStream = (id: string) => {
    if (params.streams.length <= 1) return;
    onChange({
      ...params,
      streams: params.streams.filter((s) => s.id !== id),
    });
  };

  return (
    <>
      {/* Presets */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Presets
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {PRESETS.map((preset) => {
            const isActive = activePreset?.id === preset.id;
            const colors = preset.params.streams.map((s) => s.color);
            const bg =
              colors.length === 1
                ? colors[0]
                : `linear-gradient(135deg, ${colors.map((c, i) => `${c} ${(i / (colors.length - 1)) * 100}%`).join(", ")})`;
            return (
              <button
                key={preset.id}
                onClick={() => onChange(preset.params)}
                className={`flex flex-col items-center gap-1 py-1.5 px-1 rounded-lg transition-all ${
                  isActive
                    ? "bg-neutral-800 ring-1 ring-neutral-700"
                    : "bg-neutral-50 hover:bg-neutral-100"
                }`}
              >
                <div
                  className={`w-full h-5 rounded-md overflow-hidden ${
                    isActive ? "ring-1 ring-white/30" : ""
                  }`}
                  style={{ background: bg }}
                />
                <span
                  className={`text-[7px] font-medium leading-none ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {preset.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Display */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
            Target Markers
          </span>
          <button
            onClick={() => onChange({ ...params, showMarkers: !params.showMarkers })}
            className={`relative w-8 h-4 rounded-full transition-colors ${
              params.showMarkers ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          >
            <span
              className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                params.showMarkers ? "left-[18px]" : "left-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Streams header + add button */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
          Streams ({params.streams.length})
        </span>
        <button
          onClick={addStream}
          className="text-[9px] font-medium text-neutral-500 bg-neutral-100 hover:bg-neutral-200 px-2 py-0.5 rounded-md transition-colors"
        >
          + Add
        </button>
      </div>

      {/* Per-stream controls */}
      {params.streams.map((stream, idx) => (
        <div key={stream.id} className="bg-white rounded-xl p-3 mb-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full border border-neutral-200"
                style={{ backgroundColor: stream.color }}
              />
              <span className="text-[9px] font-medium text-neutral-500">
                Flow #{idx + 1}
              </span>
            </div>
            {params.streams.length > 1 && (
              <button
                onClick={() => removeStream(stream.id)}
                className="text-[8px] text-neutral-400 hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-neutral-400 w-10">Color</span>
              <input
                type="color"
                value={stream.color}
                onChange={(e) =>
                  updateStream(stream.id, { color: e.target.value })
                }
                className="flex-1 h-5 rounded cursor-pointer border-0"
              />
            </div>
            <Slider
              label="Lines"
              value={stream.lineCount}
              min={10}
              max={300}
              step={10}
              onChange={(v) => updateStream(stream.id, { lineCount: v })}
            />
            <Slider
              label="Speed"
              value={stream.speed}
              min={0.5}
              max={10}
              step={0.5}
              onChange={(v) => updateStream(stream.id, { speed: v })}
            />
            <Slider
              label="Spread"
              value={stream.spread}
              min={0}
              max={1000}
              step={10}
              onChange={(v) => updateStream(stream.id, { spread: v })}
            />
            <Slider
              label="Curvature"
              value={stream.curvature}
              min={-2}
              max={2}
              step={0.1}
              onChange={(v) => updateStream(stream.id, { curvature: v })}
            />
            <Slider
              label="Opacity"
              value={stream.opacity}
              min={0.1}
              max={1.0}
              step={0.1}
              onChange={(v) => updateStream(stream.id, { opacity: v })}
            />
            <Slider
              label="Width"
              value={stream.width}
              min={0.5}
              max={4}
              step={0.1}
              onChange={(v) => updateStream(stream.id, { width: v })}
            />
            <div className="grid grid-cols-2 gap-2">
              <Slider
                label="Target X"
                value={stream.targetX}
                min={0}
                max={1}
                step={0.01}
                onChange={(v) => updateStream(stream.id, { targetX: v })}
              />
              <Slider
                label="Target Y"
                value={stream.targetY}
                min={0}
                max={1}
                step={0.01}
                onChange={(v) => updateStream(stream.id, { targetY: v })}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Slider
                label="Source X"
                value={stream.sourceX}
                min={-0.2}
                max={1.2}
                step={0.01}
                onChange={(v) => updateStream(stream.id, { sourceX: v })}
              />
              <Slider
                label="Source Y"
                value={stream.sourceY}
                min={-0.2}
                max={1.2}
                step={0.01}
                onChange={(v) => updateStream(stream.id, { sourceY: v })}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
