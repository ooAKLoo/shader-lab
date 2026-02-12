import type { EyetrackParams } from "./types";

export const DEFAULT_CONFIG: EyetrackParams = {
  eyeGap: 72,
  eyeWidth: 220,
  eyeHeight: 88,
  eyeRadius: 999,
  pupilSize: 86,
  smoothing: 0.12,
  sensitivity: 0.08,
  cardColor: "#7fa0ff",
  blinkInterval: 5,
  blinkStyle: "center",
};

export interface EyePreset {
  id: string;
  label: string;
  params: EyetrackParams;
}

export const EYE_PRESETS: EyePreset[] = [
  {
    id: "classic",
    label: "Classic",
    params: {
      eyeGap: 72,
      eyeWidth: 220,
      eyeHeight: 88,
      eyeRadius: 999,
      pupilSize: 86,
      smoothing: 0.12,
      sensitivity: 0.08,
      cardColor: "#7fa0ff",
      blinkInterval: 5,
      blinkStyle: "center",
    },
  },
  {
    id: "frog",
    label: "Frog",
    params: {
      eyeGap: 130,
      eyeWidth: 140,
      eyeHeight: 140,
      eyeRadius: 999,
      pupilSize: 60,
      smoothing: 0.06,
      sensitivity: 0.05,
      cardColor: "#5db85a",
      blinkInterval: 8,
      blinkStyle: "top",
    },
  },
  {
    id: "cat",
    label: "Cat",
    params: {
      eyeGap: 56,
      eyeWidth: 120,
      eyeHeight: 100,
      eyeRadius: 999,
      pupilSize: 56,
      smoothing: 0.22,
      sensitivity: 0.14,
      cardColor: "#2d2d2d",
      blinkInterval: 6,
      blinkStyle: "top",
    },
  },
  {
    id: "robot",
    label: "Robot",
    params: {
      eyeGap: 60,
      eyeWidth: 110,
      eyeHeight: 110,
      eyeRadius: 16,
      pupilSize: 60,
      smoothing: 0.30,
      sensitivity: 0.12,
      cardColor: "#4a4a4a",
      blinkInterval: 7,
      blinkStyle: "center",
    },
  },
  {
    id: "anime",
    label: "Anime",
    params: {
      eyeGap: 48,
      eyeWidth: 180,
      eyeHeight: 130,
      eyeRadius: 999,
      pupilSize: 120,
      smoothing: 0.18,
      sensitivity: 0.10,
      cardColor: "#ffb3c6",
      blinkInterval: 4,
      blinkStyle: "top",
    },
  },
  {
    id: "alien",
    label: "Alien",
    params: {
      eyeGap: 110,
      eyeWidth: 100,
      eyeHeight: 120,
      eyeRadius: 999,
      pupilSize: 36,
      smoothing: 0.30,
      sensitivity: 0.16,
      cardColor: "#3a1f5e",
      blinkInterval: 10,
      blinkStyle: "center",
    },
  },
];
