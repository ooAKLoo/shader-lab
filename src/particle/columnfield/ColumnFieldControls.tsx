import React, { useCallback, useEffect, useRef } from "react";
import type { Dotgrid2AudioAnalysis } from "../dotgrid2/shared/types";
import { useAudioAnalyzer } from "../dotgrid2/layer2_analysis/useAudioAnalyzer";
import type { ColumnFieldParams } from "./types";
import { PALETTES, VIZ_MODES, LAYOUT_SHAPES } from "./presets";

interface Props {
  params: ColumnFieldParams;
  onChange: (params: ColumnFieldParams) => void;
  analysisRef: React.MutableRefObject<Dotgrid2AudioAnalysis>;
  analyserNodeRef: React.MutableRefObject<AnalyserNode | null>;
  onPlayingChange: (playing: boolean) => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

export const ColumnFieldControls: React.FC<Props> = ({
  params,
  onChange,
  analysisRef: sharedAnalysisRef,
  analyserNodeRef: sharedAnalyserNodeRef,
  onPlayingChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const bassBarRef = useRef<HTMLDivElement>(null);
  const midBarRef = useRef<HTMLDivElement>(null);
  const highBarRef = useRef<HTMLDivElement>(null);

  const kickBarRef = useRef<HTMLDivElement>(null);
  const snareBarRef = useRef<HTMLDivElement>(null);
  const hatBarRef = useRef<HTMLDivElement>(null);

  const bpmLabelRef = useRef<HTMLDivElement>(null);

  const meterRafRef = useRef<number>(0);
  const beatVisualRef = useRef({ kick: 0, snare: 0, hat: 0 });

  const {
    analysisRef,
    analyserNodeRef,
    audioState,
    fileName,
    duration,
    currentTime,
    loadFile,
    toggle,
    seek,
  } = useAudioAnalyzer();

  useEffect(() => {
    onPlayingChange(audioState === "playing");
  }, [audioState, onPlayingChange]);

  const updateMeters = useCallback(() => {
    const a = analysisRef.current;

    // Bridge: sync analysis data to shared refs
    sharedAnalysisRef.current = { ...a };
    // Bridge: sync raw analyser node
    if (analyserNodeRef.current) {
      sharedAnalyserNodeRef.current = analyserNodeRef.current;
    }

    if (bassBarRef.current) bassBarRef.current.style.width = `${clamp01(a.bass) * 100}%`;
    if (midBarRef.current) midBarRef.current.style.width = `${clamp01(a.mid) * 100}%`;
    if (highBarRef.current) highBarRef.current.style.width = `${clamp01(a.high) * 100}%`;

    beatVisualRef.current.kick = Math.max(beatVisualRef.current.kick * 0.88, a.lowBeat ? 1 : a.bass * 0.45);
    beatVisualRef.current.snare = Math.max(beatVisualRef.current.snare * 0.9, a.midBeat ? 1 : a.mid * 0.42);
    beatVisualRef.current.hat = Math.max(beatVisualRef.current.hat * 0.84, a.highBeat ? 1 : a.high * 0.5);

    if (kickBarRef.current) kickBarRef.current.style.width = `${clamp01(beatVisualRef.current.kick) * 100}%`;
    if (snareBarRef.current) snareBarRef.current.style.width = `${clamp01(beatVisualRef.current.snare) * 100}%`;
    if (hatBarRef.current) hatBarRef.current.style.width = `${clamp01(beatVisualRef.current.hat) * 100}%`;

    if (bpmLabelRef.current) {
      bpmLabelRef.current.textContent = `${Math.round(a.bpm)} BPM · Beat ${a.beatInBar + 1}/4`;
    }

    meterRafRef.current = requestAnimationFrame(updateMeters);
  }, [analysisRef, analyserNodeRef, sharedAnalysisRef, sharedAnalyserNodeRef]);

  useEffect(() => {
    meterRafRef.current = requestAnimationFrame(updateMeters);
    return () => cancelAnimationFrame(meterRafRef.current);
  }, [updateMeters]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) loadFile(file);
  };

  return (
    <>
      {/* Music */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Music</div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-[9px] px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-colors flex-shrink-0"
            >
              {fileName ? "Change" : "Upload Song"}
            </button>
            {fileName && <span className="text-[9px] text-neutral-400 truncate">{fileName}</span>}
          </div>

          {(audioState === "playing" || audioState === "paused") && (
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                className="w-5 h-5 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors flex-shrink-0"
              >
                {audioState === "playing" ? (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                    <rect x="1" y="1" width="2" height="6" rx="0.5" />
                    <rect x="5" y="1" width="2" height="6" rx="0.5" />
                  </svg>
                ) : (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                    <polygon points="1.5,0.5 7,4 1.5,7.5" />
                  </svg>
                )}
              </button>

              <div className="flex-1 flex items-center gap-1.5">
                <input
                  type="range"
                  min={0}
                  max={duration || 1}
                  step={0.05}
                  value={currentTime}
                  onChange={(e) => seek(parseFloat(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
                />
              </div>

              <span className="text-[8px] text-neutral-400 tabular-nums flex-shrink-0">
                {formatTime(currentTime)}/{formatTime(duration)}
              </span>
            </div>
          )}

          {audioState === "loading" && <span className="text-[9px] text-neutral-400">Loading...</span>}

          {(audioState === "playing" || audioState === "paused") && (
            <>
              <div className="flex flex-col gap-1.5">
                <MeterRow label="Bass" refEl={bassBarRef} color="bg-blue-400" />
                <MeterRow label="Mid" refEl={midBarRef} color="bg-green-400" />
                <MeterRow label="High" refEl={highBarRef} color="bg-rose-400" />
              </div>

              <div className="flex flex-col gap-1.5">
                <MeterRow label="Kick" refEl={kickBarRef} color="bg-indigo-500" />
                <MeterRow label="Snare" refEl={snareBarRef} color="bg-emerald-500" />
                <MeterRow label="Hat" refEl={hatBarRef} color="bg-amber-500" />
              </div>

              <div ref={bpmLabelRef} className="text-[8px] text-neutral-500 tabular-nums" />
            </>
          )}
        </div>
      </div>

      {/* Viz Mode */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Viz Mode</div>
        <div className="flex flex-wrap gap-1">
          {Object.entries(VIZ_MODES).map(([key, info]) => (
            <button
              key={key}
              onClick={() => onChange({ ...params, vizMode: key })}
              className={`text-[9px] px-2 py-1 rounded-md transition-colors ${
                params.vizMode === key
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {info.name}
            </button>
          ))}
        </div>
      </div>

      {/* Shape */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Shape</div>
        <div className="flex flex-wrap gap-1">
          {Object.entries(LAYOUT_SHAPES).map(([key, info]) => (
            <button
              key={key}
              onClick={() => onChange({ ...params, layoutShape: key })}
              className={`text-[9px] px-2 py-1 rounded-md transition-colors ${
                params.layoutShape === key
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {info.name}
            </button>
          ))}
        </div>
      </div>

      {/* Palette */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Palette</div>
        <div className="flex flex-wrap gap-1">
          {Object.entries(PALETTES).map(([key, pal]) => (
            <button
              key={key}
              onClick={() => onChange({ ...params, palette: key })}
              className={`text-[9px] px-2 py-1 rounded-md transition-colors flex items-center gap-1 ${
                params.palette === key
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: pal.glow }}
              />
              {pal.name}
            </button>
          ))}
        </div>
      </div>

      {/* Bloom */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Bloom</div>
        <div className="flex flex-col gap-2">
          <SliderRow
            label="Intensity"
            value={params.bloomIntensity}
            min={0} max={5} step={0.1}
            onChange={(v) => onChange({ ...params, bloomIntensity: v })}
          />
          <SliderRow
            label="Threshold"
            value={params.bloomThreshold}
            min={0} max={1} step={0.05}
            onChange={(v) => onChange({ ...params, bloomThreshold: v })}
          />
          <SliderRow
            label="Radius"
            value={params.bloomRadius}
            min={0} max={1} step={0.05}
            onChange={(v) => onChange({ ...params, bloomRadius: v })}
          />
        </div>
      </div>

      {/* Camera */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Camera</div>
        <div className="flex flex-col gap-2">
          <SliderRow
            label="Orbit Speed"
            value={params.cameraOrbitSpeed}
            min={0} max={0.5} step={0.01}
            onChange={(v) => onChange({ ...params, cameraOrbitSpeed: v })}
          />
          <SliderRow
            label="Distance"
            value={params.cameraDistance}
            min={5} max={20} step={0.5}
            onChange={(v) => onChange({ ...params, cameraDistance: v })}
          />
          <SliderRow
            label="Height"
            value={params.cameraHeight}
            min={2} max={12} step={0.5}
            onChange={(v) => onChange({ ...params, cameraHeight: v })}
          />
        </div>
      </div>
    </>
  );
};

const MeterRow: React.FC<{ label: string; refEl: React.RefObject<HTMLDivElement>; color: string }> = ({
  label,
  refEl,
  color,
}) => (
  <div className="flex items-center gap-1.5">
    <span className="text-[8px] text-neutral-400 w-8 flex-shrink-0">{label}</span>
    <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
      <div ref={refEl} className={`h-full ${color} rounded-full transition-none`} style={{ width: "0%" }} />
    </div>
  </div>
);

const SliderRow: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}> = ({ label, value, min, max, step, onChange }) => (
  <div className="flex items-center gap-2">
    <span className="text-[8px] text-neutral-400 w-16 flex-shrink-0">{label}</span>
    <input
      type="range"
      min={min} max={max} step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="flex-1 h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
    <span className="text-[8px] text-neutral-400 tabular-nums w-8 text-right">{value.toFixed(1)}</span>
  </div>
);
