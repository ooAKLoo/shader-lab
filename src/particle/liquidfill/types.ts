export type LiquidfillShape = "blob" | "star" | "organic" | "flower";

export interface LiquidfillParams {
  speed: number;
  shape: LiquidfillShape;
  complexity: number;
  particleCount: number;
  splashForce: number;
  blur: number;
  contrast: number;
  color: string;
}
