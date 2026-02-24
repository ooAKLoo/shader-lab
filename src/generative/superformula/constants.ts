import type { SuperformulaParams, ShapePreset } from "./types";

export const DEFAULT_CONFIG: SuperformulaParams = {
  numRings: 9,
  maxRadius: 139,
  baseCircles: 1,
  circleIncrement: 2,
  circleBaseSize: 46,
  circleScale: 1.0,
  colorCenter: "#0055ff",
  colorEdge: "#00ffd5",
  bgColor: "#050510",
  alternateOffset: true,
  rotationSpeed: 0,
  mathM: 5,
  mathN1: 0.3,
  mathN2: 1,
  mathN3: 1,
  shapeRotation: 0,
};

export const SHAPE_PRESETS: ShapePreset[] = [
  { label: "Circle", m: 4, n1: 2, n2: 2, n3: 2 },
  { label: "Polygon", m: 5, n1: 1, n2: 1, n3: 1 },
  { label: "Star", m: 5, n1: 0.3, n2: 1, n3: 1 },
  { label: "Petal", m: 6, n1: 0.4, n2: 4, n3: 4 },
  { label: "Starfish", m: 5, n1: 1.5, n2: 0.5, n3: 0.5 },
  { label: "Gear", m: 8, n1: 10, n2: 10, n3: 10 },
  {
    label: "Bloom",
    m: 6,
    n1: 0.01,
    n2: 9.95,
    n3: 7.29,
    full: {
      numRings: 12,
      maxRadius: 139,
      baseCircles: 1,
      circleIncrement: 2,
      circleBaseSize: 46,
      circleScale: 1,
      alternateOffset: true,
      rotationSpeed: 0,
      shapeRotation: 2.21,
    },
  },
];
