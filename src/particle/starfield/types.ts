export type StarfieldPalette = "neon" | "warm" | "cool" | "pastel" | "monochrome";

export interface StarfieldParams {
  starCount: number;
  speed: number;
  minSize: number;
  maxSize: number;
  spread: number;
  depth: number;
  fov: number;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  tiltSensitivity: number;
  palette: StarfieldPalette;
  showWarpButton: boolean;
  warpMultiplier: number;
}
