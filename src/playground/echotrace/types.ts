export type ShapeType = 'circle' | 'square' | 'triangle' | 'star' | 'text';

export type BlendMode = 'normal' | 'screen' | 'overlay' | 'difference' | 'exclusion' | 'plus-lighter';

export interface EchotraceParams {
  trailLength: number;
  shape: ShapeType;
  text: string;
  size: number;
  opacityDecay: boolean;
  scaleDecay: boolean;
  rotationSpeed: number;
  hueSpeed: number;
  baseHue: number;
  blendMode: BlendMode;
  spread: number;
  lag: number;
}

export interface Point {
  x: number;
  y: number;
  id: number;
  angle: number;
  hue: number;
  timestamp: number;
}
