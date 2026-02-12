import React, { useRef, useEffect, useCallback } from "react";
import type { AudioState } from "./useAudioAnalyzer";
import type { AudioAnalysis, Choreographer } from "./musicPresets";
import { MUSIC_PRESETS, getActivePresetIndex } from "./musicPresets";

interface Props {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  audioState: AudioState;
  fileName: string | null;
  duration: number;
  currentTime: number;
  onLoadFile: (file: File) => void;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  analysisRef: React.RefObject<AudioAnalysis>;
  choreographer: Choreographer;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export const MusicModeSection: React.FC<Props> = ({
  enabled,
  onToggle,
  audioState,
  fileName,
  duration,
  currentTime,
  onLoadFile,
  onTogglePlay,
  onSeek,
  analysisRef,
  choreographer,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bassBarRef = useRef<HTMLDivElement>(null);
  const midBarRef = useRef<HTMLDivElement>(null);
  const highBarRef = useRef<HTMLDivElement>(null);
  const presetPillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotZoneRef = useRef<HTMLDivElement>(null);
  const crossZoneRef = useRef<HTMLDivElement>(null);
  const meterRafRef = useRef<number>(0);

  // RAF loop for level meters + zone indicators (DOM-direct, no re-render)
  const updateMeters = useCallback(() => {
    if (!enabled) return;
    const a = analysisRef.current;
    if (bassBarRef.current) bassBarRef.current.style.width = `${a.bass * 100}%`;
    if (midBarRef.current) midBarRef.current.style.width = `${a.mid * 100}%`;
    if (highBarRef.current) highBarRef.current.style.width = `${a.high * 100}%`;

    // Update preset pill highlights
    const activeIdx = getActivePresetIndex();
    presetPillRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIdx) {
        el.style.backgroundColor = "#3b82f6";
        el.style.color = "#fff";
      } else {
        el.style.backgroundColor = "#f5f5f5";
        el.style.color = "#a3a3a3";
      }
    });

    // Update zone indicator
    const zone = choreographer.zone;
    const inDots = zone === "dots";
    const inCrosses = zone === "crosses";
    if (dotZoneRef.current) {
      dotZoneRef.current.style.backgroundColor = inDots ? "#7c93ab" : "#f5f5f5";
      dotZoneRef.current.style.color = inDots ? "#fff" : "#a3a3a3";
    }
    if (crossZoneRef.current) {
      crossZoneRef.current.style.backgroundColor = inCrosses ? "#ab6e7e" : "#f5f5f5";
      crossZoneRef.current.style.color = inCrosses ? "#fff" : "#a3a3a3";
    }

    meterRafRef.current = requestAnimationFrame(updateMeters);
  }, [enabled, analysisRef, choreographer]);

  useEffect(() => {
    if (enabled && audioState === "playing") {
      meterRafRef.current = requestAnimationFrame(updateMeters);
    }
    return () => cancelAnimationFrame(meterRafRef.current);
  }, [enabled, audioState, updateMeters]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onLoadFile(file);
  };

  return (
    <div className="bg-white rounded-xl p-3 mb-2">
      {/* Header: Music Mode toggle */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
          Music Mode
        </span>
        <button
          onClick={() => onToggle(!enabled)}
          className={`relative w-8 h-4 rounded-full transition-colors ${
            enabled ? "bg-blue-500" : "bg-neutral-200"
          }`}
        >
          <span
            className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${
              enabled ? "translate-x-4.5" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>

      {enabled && (
        <div className="flex flex-col gap-2.5">
          {/* File upload */}
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
              {fileName ? "Change" : "Upload"}
            </button>
            {fileName && (
              <span className="text-[9px] text-neutral-400 truncate">{fileName}</span>
            )}
          </div>

          {/* Playback controls */}
          {(audioState === "playing" || audioState === "paused") && (
            <div className="flex items-center gap-2">
              <button
                onClick={onTogglePlay}
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

              {/* Progress bar */}
              <div className="flex-1 flex items-center gap-1.5">
                <input
                  type="range"
                  min={0}
                  max={duration || 1}
                  step={0.1}
                  value={currentTime}
                  onChange={(e) => onSeek(parseFloat(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
                />
              </div>

              <span className="text-[8px] text-neutral-400 tabular-nums flex-shrink-0">
                {formatTime(currentTime)}/{formatTime(duration)}
              </span>
            </div>
          )}

          {audioState === "loading" && (
            <span className="text-[9px] text-neutral-400">Loading...</span>
          )}

          {/* Level meters */}
          {(audioState === "playing" || audioState === "paused") && (
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-neutral-400 w-6 flex-shrink-0">Bass</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    ref={bassBarRef}
                    className="h-full bg-blue-400 rounded-full transition-none"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-neutral-400 w-6 flex-shrink-0">Mid</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    ref={midBarRef}
                    className="h-full bg-green-400 rounded-full transition-none"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-neutral-400 w-6 flex-shrink-0">High</span>
                <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    ref={highBarRef}
                    className="h-full bg-purple-400 rounded-full transition-none"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Zone indicator + Energy preset */}
          <div className="flex items-center gap-3">
            {/* Zone */}
            <div>
              <div className="text-[8px] text-neutral-400 mb-1">Zone</div>
              <div className="flex gap-1">
                <div
                  ref={dotZoneRef}
                  className="text-[7px] px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "#7c93ab", color: "#fff" }}
                >
                  Dots
                </div>
                <div
                  ref={crossZoneRef}
                  className="text-[7px] px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "#f5f5f5", color: "#a3a3a3" }}
                >
                  Crosses
                </div>
              </div>
            </div>

            {/* Energy */}
            <div>
              <div className="text-[8px] text-neutral-400 mb-1">Energy</div>
              <div className="flex gap-1">
                {MUSIC_PRESETS.map((preset, i) => (
                  <div
                    key={preset.name}
                    ref={(el) => { presetPillRefs.current[i] = el; }}
                    className="text-[7px] px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "#f5f5f5", color: "#a3a3a3" }}
                  >
                    {preset.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
