export interface ShapePreset {
  label: string;
  m: number;
  n1: number;
  n2: number;
  n3: number;
  full?: Partial<SuperformulaParams>;
}

export interface SuperformulaParams {
  numRings: number;
  maxRadius: number;
  baseCircles: number;
  circleIncrement: number;
  circleBaseSize: number;
  circleScale: number;
  colorCenter: string;
  colorEdge: string;
  bgColor: string;
  alternateOffset: boolean;
  rotationSpeed: number;
  mathM: number;
  mathN1: number;
  mathN2: number;
  mathN3: number;
  shapeRotation: number;
}
