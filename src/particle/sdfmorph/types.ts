export interface SdfmorphParams {
  // Timeline
  bpm: number;
  globalSpeed: number;
  easeId: number;

  // Morph
  morphBloat: number;
  liquidMix: number;
  liquidK: number;
  liquidMidBoost: number;

  // Shapes
  shapeSize: number;
  starPoints: number;
  starInnerRatio: number;
  sequence: [number, number, number, number, number];

  // Motion
  rotBase: number;
  rotMorph: number;
  scaleBreath: number;
  scaleMorph: number;

  // Style
  strokeWidth: number;
  glowStrength: number;
  fillStrength: number;

  // Colors
  bgColorA: string;
  bgColorB: string;
  inkColorA: string;
  inkColorB: string;

  // Post
  vignette: number;
  grain: number;
}

export const SHAPE_NAMES = ["Circle", "Box", "Triangle", "Star", "Hexagon", "Ring"];
export const EASE_NAMES = ["Linear", "Smooth", "Cubic InOut", "Back Out", "Elastic Out", "Expo InOut"];
