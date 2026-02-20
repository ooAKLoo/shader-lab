export type PaletteName = "cyberpunk" | "fire" | "ocean" | "nature" | "monochrome";
export type FlowDirection = "outward" | "inward";

export interface SankeyflowParams {
  numBranches: number;
  curvature: number;
  rotationSpeed: number;
  particleCount: number;
  baseSpeed: number;
  flowDirection: FlowDirection;
  palette: PaletteName;
  glowIntensity: number;
  trailFade: number;
  lineWidthMultiplier: number;
  showParticles: boolean;
  showCore: boolean;
  // Shape modulation
  petalCount: number;   // 0 = circle, >0 = flower petals
  petalDepth: number;   // 0~1, how deep petals indent
  aspectRatio: number;  // 1 = circle, <1 = tall, >1 = wide
  spiralTwist: number;  // 0 = radial, >0 = spiral outward offset
}
