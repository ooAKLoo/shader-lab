export interface RadialflowParams {
  nodeCount: number;
  particleCount: number;
  speed: number;
  particleSize: number;
  trailLength: number;
  curvature: number;
  direction: "outward" | "inward";
  colorMode: "gradient" | "monochrome" | "rainbow";
  primaryColor: string;
  secondaryColor: string;
  glowIntensity: number;
  rotationSpeed: number;
}
