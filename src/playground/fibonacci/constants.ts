import type { FibonacciParams, PaletteId } from "./types";

export const DEFAULT_CONFIG: FibonacciParams = {
  numDots: 80,
  spread: 18,
  angleStep: 137.5,
  baseSize: 4,
  sizeGrowth: 0.05,
  colorMode: "solid",
  palette: "fire",
  dotColor: "#222222",
  bgColor: "#ffffff",
  animate: false,
};

export const COLOR_MODES = [
  { value: "solid", label: "Solid" },
  { value: "rainbow", label: "Rainbow" },
  { value: "radial", label: "Radial" },
  { value: "angular", label: "Angular" },
  { value: "alternating", label: "Arms" },
] as const;

export const PALETTES: { value: PaletteId; label: string; colors: string[] }[] = [
  { value: "fire", label: "Fire", colors: ["#ffe259", "#ffa751", "#ff512f", "#dd2476"] },
  { value: "ocean", label: "Ocean", colors: ["#89f7fe", "#66a6ff", "#005bea", "#00c6fb"] },
  { value: "cyber", label: "Cyber", colors: ["#00ff87", "#60efff", "#0061ff", "#ff00aa", "#ff004c"] },
  { value: "nature", label: "Nature", colors: ["#abecd6", "#fbed96", "#a8e063", "#24c6dc", "#514a9d"] },
  { value: "pastel", label: "Pastel", colors: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"] },
];
