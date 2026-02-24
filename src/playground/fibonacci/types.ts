export type ColorMode = "solid" | "rainbow" | "radial" | "angular" | "alternating";

export type PaletteId = "fire" | "ocean" | "cyber" | "nature" | "pastel";

export interface FibonacciParams {
  numDots: number;
  spread: number;
  angleStep: number;
  baseSize: number;
  sizeGrowth: number;
  colorMode: ColorMode;
  palette: PaletteId;
  dotColor: string;
  bgColor: string;
  animate: boolean;
}
