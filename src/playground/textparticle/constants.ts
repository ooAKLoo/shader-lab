import type { TextParticleParams, RenderMode, MorphMode } from "./types";

export const DEFAULT_CONFIG: TextParticleParams = {
  charFrom: "AB",
  charTo: "CD",
  particleCount: 3000,
  renderMode: "dots",
  morphMode: "perChar",
  speed: 0.04,
  particleSize: 2,
  color: "#ffffff",
  bgColor: "#0a0a0a",
  autoLoop: true,
};

export const RENDER_MODES: { id: RenderMode; label: string }[] = [
  { id: "dots", label: "Dots" },
  { id: "trail", label: "Trail" },
  { id: "pixel", label: "Pixel Grid" },
];

export const MORPH_MODES: { id: MorphMode; label: string; desc: string }[] = [
  { id: "perChar", label: "Per-Char", desc: "Each character morphs independently" },
  { id: "mixed", label: "Mixed", desc: "All particles mix and find nearest target" },
];

export const PRESET_PAIRS: { from: string; to: string; label: string }[] = [
  { from: "AB", to: "CD", label: "AB → CD" },
  { from: "Hi", to: "你好", label: "Hi → 你好" },
  { from: "LOVE", to: "爱你", label: "LOVE → 爱你" },
  { from: "01", to: "10", label: "01 → 10" },
];
