import React, { useCallback, useEffect, useRef, useState } from "react";
import { HIGHLIGHT_SEGMENTS, getTimelineContext } from "./timeline";
import type { Dotgrid2AudioAnalysis, Dotgrid2Params } from "../shared/types";
import { useAudioAnalyzer } from "../layer2_analysis/useAudioAnalyzer";
import { resolveAutoVisualTargets, resolveDirectionState } from "../layer2_analysis/autoDirector";
import { DEFAULT_LRC_URL, DEFAULT_TRACK_TITLE, DEFAULT_TRACK_URL } from "../content/media";
import { getLyricAtTime, loadLrc, type LyricLine } from "../content/lyrics";

interface Props {
  params: Dotgrid2Params;
  onChange: (params: Dotgrid2Params) => void;
  audioTimeRef: React.MutableRefObject<number>;
  analysisRef: React.MutableRefObject<Dotgrid2AudioAnalysis>;
  onPlayingChange: (playing: boolean) => void;
}

const VISUAL_LEAD_SEC = 0.04;

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

const SECTION_LABELS: Record<string, string> = {
  intro: "Intro",
  verse: "Verse",
  prechorus: "Pre-Chorus",
  chorus: "Chorus",
  interlude: "Interlude",
  outro: "Outro",
};

const PROFILE_LABELS: Record<Dotgrid2Params["directionProfile"], string> = {
  balanced: "Balanced",
  rhythm: "Rhythm",
  story: "Story",
};

export const Dotgrid2Controls: React.FC<Props> = ({
  params,
  onChange,
  audioTimeRef,
  analysisRef: sharedAnalysisRef,
  onPlayingChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const bassBarRef = useRef<HTMLDivElement>(null);
  const midBarRef = useRef<HTMLDivElement>(null);
  const highBarRef = useRef<HTMLDivElement>(null);

  const kickBarRef = useRef<HTMLDivElement>(null);
  const snareBarRef = useRef<HTMLDivElement>(null);
  const hatBarRef = useRef<HTMLDivElement>(null);

  const eventLabelRef = useRef<HTMLDivElement>(null);
  const sectionLabelRef = useRef<HTMLDivElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const bpmLabelRef = useRef<HTMLDivElement>(null);

  const lyricCurrentRef = useRef<HTMLDivElement>(null);
  const lyricNextRef = useRef<HTMLDivElement>(null);

  const autoDotsRef = useRef<HTMLDivElement>(null);
  const autoRadiusRef = useRef<HTMLDivElement>(null);
  const autoBgRef = useRef<HTMLDivElement>(null);

  const meterRafRef = useRef<number>(0);
  const beatVisualRef = useRef({ kick: 0, snare: 0, hat: 0 });
  const previewUntilRef = useRef<number | null>(null);
  const didInitRef = useRef(false);
  const lyricsRef = useRef<LyricLine[]>([]);

  const [copyHint, setCopyHint] = useState("");

  const {
    analysisRef,
    audioTimeRef: localAudioTimeRef,
    audioState,
    fileName,
    duration,
    currentTime,
    loadFile,
    loadUrl,
    play,
    pause,
    toggle,
    seek,
  } = useAudioAnalyzer();

  useEffect(() => {
    onPlayingChange(audioState === "playing");
  }, [audioState, onPlayingChange]);

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;

    loadUrl(DEFAULT_TRACK_URL, DEFAULT_TRACK_TITLE);
    void loadLrc(DEFAULT_LRC_URL).then((lines) => {
      lyricsRef.current = lines;
    });
  }, [loadUrl]);

  const handleUseDefault = useCallback(() => {
    loadUrl(DEFAULT_TRACK_URL, DEFAULT_TRACK_TITLE);
    previewUntilRef.current = null;
    void loadLrc(DEFAULT_LRC_URL).then((lines) => {
      lyricsRef.current = lines;
    });
  }, [loadUrl]);

  const updateMeters = useCallback(() => {
    const a = analysisRef.current;
    const t = localAudioTimeRef.current;

    const visualTime = duration > 0 ? Math.min(duration, t + VISUAL_LEAD_SEC) : t + VISUAL_LEAD_SEC;

    sharedAnalysisRef.current = { ...a };
    audioTimeRef.current = visualTime;

    if (bassBarRef.current) bassBarRef.current.style.width = `${clamp01(a.bass) * 100}%`;
    if (midBarRef.current) midBarRef.current.style.width = `${clamp01(a.mid) * 100}%`;
    if (highBarRef.current) highBarRef.current.style.width = `${clamp01(a.high) * 100}%`;

    beatVisualRef.current.kick = Math.max(beatVisualRef.current.kick * 0.88, a.lowBeat ? 1 : a.bass * 0.45);
    beatVisualRef.current.snare = Math.max(beatVisualRef.current.snare * 0.9, a.midBeat ? 1 : a.mid * 0.42);
    beatVisualRef.current.hat = Math.max(beatVisualRef.current.hat * 0.84, a.highBeat ? 1 : a.high * 0.5);

    if (kickBarRef.current) kickBarRef.current.style.width = `${clamp01(beatVisualRef.current.kick) * 100}%`;
    if (snareBarRef.current) snareBarRef.current.style.width = `${clamp01(beatVisualRef.current.snare) * 100}%`;
    if (hatBarRef.current) hatBarRef.current.style.width = `${clamp01(beatVisualRef.current.hat) * 100}%`;

    const { event, nextEvent } = getTimelineContext(visualTime);

    if (eventLabelRef.current) {
      eventLabelRef.current.textContent = event.label || event.formation;
    }
    if (sectionLabelRef.current) {
      sectionLabelRef.current.textContent = SECTION_LABELS[event.section || "verse"] || "Section";
    }
    if (nextLabelRef.current) {
      nextLabelRef.current.textContent =
        nextEvent != null
          ? `${formatTime(nextEvent.time)} · T-${Math.max(0, nextEvent.time - visualTime).toFixed(1)}s`
          : "END";
    }
    if (bpmLabelRef.current) {
      bpmLabelRef.current.textContent = `${Math.round(a.bpm)} BPM · Beat ${a.beatInBar + 1}/4`;
    }

    const lyricState = getLyricAtTime(lyricsRef.current, t + 0.02);
    if (lyricCurrentRef.current) {
      lyricCurrentRef.current.textContent = lyricState.current || "-";
    }
    if (lyricNextRef.current) {
      lyricNextRef.current.textContent = lyricState.next || "";
    }

    const direction = resolveDirectionState(params, event, a);
    const auto = resolveAutoVisualTargets(params, direction, event.section || "verse", a);
    if (autoDotsRef.current) autoDotsRef.current.textContent = `${auto.dotCount}`;
    if (autoRadiusRef.current) autoRadiusRef.current.textContent = `${auto.baseRadius.toFixed(2)} px`;
    if (autoBgRef.current) autoBgRef.current.textContent = `rgb(${auto.bgR}, ${auto.bgG}, ${auto.bgB})`;

    if (previewUntilRef.current != null && audioState === "playing" && t >= previewUntilRef.current) {
      previewUntilRef.current = null;
      pause();
    }

    meterRafRef.current = requestAnimationFrame(updateMeters);
  }, [analysisRef, audioState, audioTimeRef, duration, localAudioTimeRef, params, pause, sharedAnalysisRef]);

  useEffect(() => {
    meterRafRef.current = requestAnimationFrame(updateMeters);
    return () => cancelAnimationFrame(meterRafRef.current);
  }, [updateMeters]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadFile(file);
      previewUntilRef.current = null;
      lyricsRef.current = [];
    }
  };

  const handlePreview = (start: number, durationSec: number) => {
    seek(start);
    previewUntilRef.current = start + durationSec;
    play();
  };

  const handleCopyShotList = async () => {
    const text = HIGHLIGHT_SEGMENTS.map((seg) => `${seg.label}: ${formatTime(seg.start)}-${formatTime(seg.start + seg.duration)}  ${seg.description}`).join("\n");

    if (!navigator.clipboard) {
      setCopyHint("浏览器不支持剪贴板");
      window.setTimeout(() => setCopyHint(""), 1800);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopyHint("已复制片段时间轴");
    } catch {
      setCopyHint("复制失败");
    }

    window.setTimeout(() => setCopyHint(""), 1800);
  };

  return (
    <>
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
            <button
              onClick={handleUseDefault}
              className="text-[9px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex-shrink-0"
            >
              Use Default
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
                  onChange={(e) => {
                    previewUntilRef.current = null;
                    seek(parseFloat(e.target.value));
                  }}
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

              <div className="grid grid-cols-[34px_1fr] gap-x-2 gap-y-1.5 text-[8px]">
                <span className="text-neutral-400">Now</span>
                <div ref={eventLabelRef} className="text-neutral-600 truncate" />
                <span className="text-neutral-400">Section</span>
                <div ref={sectionLabelRef} className="text-neutral-600 truncate" />
                <span className="text-neutral-400">Next</span>
                <div ref={nextLabelRef} className="text-neutral-500 truncate tabular-nums" />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Lyrics</div>
        <div ref={lyricCurrentRef} className="text-[12px] text-neutral-800 leading-relaxed min-h-6" />
        <div ref={lyricNextRef} className="text-[9px] text-neutral-400 mt-1 min-h-4" />
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Direction</div>
        <div className="text-[8px] text-neutral-500 mb-3">
          算法自动控制节奏、叙事、点数、半径和背景色。
        </div>

        <div className="flex gap-1 mb-3">
          {(Object.keys(PROFILE_LABELS) as Dotgrid2Params["directionProfile"][]).map((profile) => (
            <button
              key={profile}
              onClick={() => onChange({ ...params, directionProfile: profile })}
              className={`flex-1 text-[9px] px-2 py-1 rounded-md transition-colors ${
                params.directionProfile === profile
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {PROFILE_LABELS[profile]}
            </button>
          ))}
        </div>

        <PercentSliderRow
          label="Direction Strength"
          value={params.directionStrength}
          onChange={(v) => onChange({ ...params, directionStrength: v })}
        />
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Auto Visual</div>
        <div className="grid grid-cols-[64px_1fr] gap-y-1.5 text-[8px]">
          <span className="text-neutral-400">Dot Count</span>
          <div ref={autoDotsRef} className="text-neutral-700 tabular-nums" />
          <span className="text-neutral-400">Base Radius</span>
          <div ref={autoRadiusRef} className="text-neutral-700 tabular-nums" />
          <span className="text-neutral-400">Background</span>
          <div ref={autoBgRef} className="text-neutral-700 tabular-nums" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">Quick Preview</div>
        <div className="flex flex-col gap-1.5">
          {HIGHLIGHT_SEGMENTS.map((seg) => (
            <button
              key={seg.id}
              onClick={() => handlePreview(seg.start, seg.duration)}
              className="text-left px-2 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <div className="text-[9px] font-medium text-neutral-700">
                {seg.label} · {formatTime(seg.start)}-{formatTime(seg.start + seg.duration)}
              </div>
              <div className="text-[8px] text-neutral-500">{seg.description}</div>
            </button>
          ))}

          <button
            onClick={handleCopyShotList}
            className="text-[9px] px-2 py-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Copy Shot List
          </button>
          {copyHint && <div className="text-[8px] text-neutral-500">{copyHint}</div>}
        </div>
      </div>
    </>
  );
};

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

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

const PercentSliderRow: React.FC<{
  label: string;
  value: number;
  onChange: (v: number) => void;
}> = ({ label, value, onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">{label}</span>
      <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">{Math.round(value * 100)}%</span>
    </div>
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
  </div>
);
