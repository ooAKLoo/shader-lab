import type { SdfmorphParams } from "./types";

export const DEFAULT_CONFIG: SdfmorphParams = {
  bpm: 112.0,
  globalSpeed: 1.0,
  easeId: 2,

  morphBloat: 0.08,
  liquidMix: 0.70,
  liquidK: 0.18,
  liquidMidBoost: 1.0,

  shapeSize: 0.36,
  starPoints: 5,
  starInnerRatio: 0.45,
  sequence: [0, 1, 2, 3, 0],

  rotBase: 0.15,
  rotMorph: 0.55,
  scaleBreath: 0.06,
  scaleMorph: 0.08,

  strokeWidth: 0.018,
  glowStrength: 0.35,
  fillStrength: 0.70,

  bgColorA: "#05060a",
  bgColorB: "#080f1a",
  inkColorA: "#1e59f2",
  inkColorB: "#e640bf",

  vignette: 0.35,
  grain: 0.03,
};
