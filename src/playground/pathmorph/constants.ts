import type { PathmorphParams, EasingType } from "./types";

export const DEFAULT_CONFIG: PathmorphParams = {
  charFrom: "A",
  charTo: "Z",
  duration: 1.2,
  easing: "easeInOut",
  strokeColor: "#ffffff",
  fillColor: "#4f46e5",
  strokeWidth: 2,
  showStroke: true,
  showFill: true,
  bgColor: "#0a0a0a",
};

export const EASING_OPTIONS: { id: EasingType; label: string }[] = [
  { id: "easeInOut", label: "Ease In-Out" },
  { id: "easeOut", label: "Ease Out" },
  { id: "easeIn", label: "Ease In" },
  { id: "linear", label: "Linear" },
  { id: "bounce", label: "Bounce" },
];

export const PRESET_PAIRS: { from: string; to: string; label: string }[] = [
  { from: "A", to: "Z", label: "A → Z" },
  { from: "O", to: "Q", label: "O → Q" },
  { from: "日", to: "月", label: "日 → 月" },
  { from: "人", to: "大", label: "人 → 大" },
];
