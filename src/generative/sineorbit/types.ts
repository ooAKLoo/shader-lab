export type ShapeType = "circle" | "ellipse" | "petal" | "triangle" | "diamond";

export type BlendModeType = "ADD" | "NORMAL" | "SCREEN" | "MULTIPLY";

export interface SineorbitParams {
  layerCount: number;
  baseRadius: number;
  radiusStep: number;
  baseItems: number;
  itemsIncrement: number;
  globalSpeed: number;
  layerRotationSpeed: number;
  layerTwist: number;
  itemSpinSpeed: number;
  shapeType: ShapeType;
  shapeWidth: number;
  shapeHeight: number;
  sineAmp: number;
  sineFreq: number;
  morphSpeed: number;
  bgColor: string;
  colorInner: string;
  colorOuter: string;
  opacity: number;
  blendMode: BlendModeType;
}
