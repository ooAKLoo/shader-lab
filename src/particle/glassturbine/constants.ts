import type { GlassturbineParams } from "./types";

export const DEFAULT_CONFIG: GlassturbineParams = {
  bladeCount: 3,
  bladeArc: 100,
  rotationSpeed: 0.8,
  trailFade: 0.04,
  bladeOpacity: 0.35,
  innerRadius: 0.15,
  glowIntensity: 15,
  bgColor: "#1a0a2e",
  bladeColor: "#8b5cf6",
  highlightColor: "#e0d0ff",
};

export interface GlassturbinePreset {
  id: string;
  label: string;
  params: GlassturbineParams;
}

export const PRESETS: GlassturbinePreset[] = [
  {
    id: "glass-purple",
    label: "Glass Purple",
    params: { ...DEFAULT_CONFIG },
  },
  {
    id: "crystal-blue",
    label: "Crystal Blue",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#0a1628",
      bladeColor: "#3b82f6",
      highlightColor: "#bfdbfe",
      bladeArc: 110,
    },
  },
  {
    id: "rose-gold",
    label: "Rose Gold",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#1c0f0f",
      bladeColor: "#f472b6",
      highlightColor: "#fce7f3",
      bladeOpacity: 0.3,
      trailFade: 0.03,
    },
  },
  {
    id: "monochrome",
    label: "Mono",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#0a0a0a",
      bladeColor: "#a3a3a3",
      highlightColor: "#ffffff",
      bladeOpacity: 0.25,
      trailFade: 0.05,
    },
  },
  {
    id: "emerald-glass",
    label: "Emerald",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#0a1a14",
      bladeColor: "#10b981",
      highlightColor: "#d1fae5",
      bladeCount: 4,
      bladeArc: 75,
    },
  },
  {
    id: "amber-turbine",
    label: "Amber",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#1a140a",
      bladeColor: "#f59e0b",
      highlightColor: "#fef3c7",
      bladeCount: 5,
      bladeArc: 60,
      rotationSpeed: 1.2,
    },
  },
  {
    id: "neon-cyan",
    label: "Neon Cyan",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#0a1a1a",
      bladeColor: "#06b6d4",
      highlightColor: "#cffafe",
      trailFade: 0.02,
      glowIntensity: 25,
    },
  },
  {
    id: "slow-ghost",
    label: "Ghost",
    params: {
      ...DEFAULT_CONFIG,
      bgColor: "#0f0f1a",
      bladeColor: "#6366f1",
      highlightColor: "#c7d2fe",
      bladeCount: 2,
      bladeArc: 150,
      rotationSpeed: 0.3,
      trailFade: 0.015,
      bladeOpacity: 0.2,
    },
  },
];
