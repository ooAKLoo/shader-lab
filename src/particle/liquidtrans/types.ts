export type DistortionStyle = "swirl" | "stretch" | "radial" | "turbulent";
export type TextureStyle = "flat" | "silk" | "oil" | "watercolor" | "metal";

export interface LiquidtransParams {
  speed: number;
  scale: number;
  swirl: number;
  turbulence: number;
  edgeSoftness: number;
  color1: string;
  color2: string;
  color3: string;
  // Phase 1
  vignette: number;
  grain: number;
  paused: boolean;
  // Phase 2
  mouseForce: number;
  mouseRadius: number;
  symmetry: number;
  // Phase 3
  hueDrift: number;
  distortion: DistortionStyle;
  texture: TextureStyle;
}
