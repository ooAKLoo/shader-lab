import type { SineorbitParams } from "./types";

export const DEFAULT_CONFIG: SineorbitParams = {
  layerCount: 11,
  baseRadius: 30,
  radiusStep: 25,
  baseItems: 6,
  itemsIncrement: 3,
  globalSpeed: 0.912,
  layerRotationSpeed: 0.54,
  layerTwist: 1,
  itemSpinSpeed: 0.66,
  shapeType: "circle",
  shapeWidth: 65,
  shapeHeight: 79,
  sineAmp: 0,
  sineFreq: 8.57,
  morphSpeed: 3.9,
  bgColor: "#00001a",
  colorInner: "#0066ff",
  colorOuter: "#00ffcc",
  opacity: 0.8,
  blendMode: "NORMAL",
};

export const SHAPE_TYPES = [
  { value: "circle", label: "Circle" },
  { value: "ellipse", label: "Ellipse" },
  { value: "petal", label: "Petal" },
  { value: "triangle", label: "Triangle" },
  { value: "diamond", label: "Diamond" },
] as const;

export const BLEND_MODES = [
  { value: "ADD", label: "Additive" },
  { value: "NORMAL", label: "Normal" },
  { value: "SCREEN", label: "Screen" },
  { value: "MULTIPLY", label: "Multiply" },
] as const;
