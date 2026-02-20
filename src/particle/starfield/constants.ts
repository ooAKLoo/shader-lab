import type { StarfieldParams, StarfieldPalette } from "./types";

export const PALETTES: Record<StarfieldPalette, string[]> = {
  neon: ["#ff00ff", "#00ffff", "#ffff00", "#ff3366", "#33ff99"],
  warm: ["#ff6633", "#ff3366", "#ffcc00", "#ff9900", "#ff0066"],
  cool: ["#3366ff", "#00ccff", "#6633ff", "#0099ff", "#33cccc"],
  pastel: ["#ffb3d9", "#b3d9ff", "#d9ffb3", "#ffffb3", "#d9b3ff"],
  monochrome: ["#ffffff", "#cccccc", "#999999", "#e6e6e6", "#b3b3b3"],
};

export const DEFAULT_CONFIG: StarfieldParams = {
  starCount: 30000,
  speed: 4,
  minSize: 3,
  maxSize: 15,
  spread: 200,
  depth: 300,
  fov: 50,
  bloomStrength: 2,
  bloomRadius: 0,
  bloomThreshold: 0,
  tiltSensitivity: 0.05,
  palette: "neon",
  showWarpButton: false,
  warpMultiplier: 25,
};

export interface StarfieldPreset {
  id: string;
  label: string;
  params: StarfieldParams;
}

export const PRESETS: StarfieldPreset[] = [
  {
    id: "default",
    label: "Warp Drive",
    params: { ...DEFAULT_CONFIG },
  },
  {
    id: "gentle",
    label: "Gentle Drift",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 15000,
      speed: 1,
      minSize: 2,
      maxSize: 8,
      bloomStrength: 1,
      palette: "pastel",
    },
  },
  {
    id: "hyperdrive",
    label: "Hyperdrive",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 50000,
      speed: 15,
      minSize: 4,
      maxSize: 20,
      bloomStrength: 3,
      palette: "neon",
    },
  },
  {
    id: "deep-space",
    label: "Deep Space",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 40000,
      speed: 2,
      minSize: 1,
      maxSize: 6,
      spread: 300,
      depth: 400,
      bloomStrength: 1.5,
      palette: "cool",
    },
  },
  {
    id: "fire-tunnel",
    label: "Fire Tunnel",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 35000,
      speed: 8,
      minSize: 5,
      maxSize: 18,
      spread: 150,
      bloomStrength: 2.5,
      palette: "warm",
    },
  },
  {
    id: "snow",
    label: "Snowfall",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 20000,
      speed: 1.5,
      minSize: 2,
      maxSize: 10,
      spread: 250,
      bloomStrength: 1,
      palette: "monochrome",
    },
  },
  {
    id: "nebula",
    label: "Nebula",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 45000,
      speed: 3,
      minSize: 3,
      maxSize: 12,
      spread: 180,
      depth: 350,
      fov: 60,
      bloomStrength: 2.5,
      bloomRadius: 0.5,
      palette: "pastel",
    },
  },
  {
    id: "vortex",
    label: "Vortex",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 40000,
      speed: 10,
      minSize: 4,
      maxSize: 16,
      spread: 120,
      depth: 250,
      fov: 70,
      bloomStrength: 2,
      tiltSensitivity: 0.1,
      palette: "neon",
    },
  },
  {
    id: "interactive",
    label: "Interactive",
    params: {
      ...DEFAULT_CONFIG,
      starCount: 50000,
      speed: 1,
      minSize: 3,
      maxSize: 15,
      bloomStrength: 2,
      palette: "neon",
      showWarpButton: true,
      warpMultiplier: 25,
    },
  },
];
