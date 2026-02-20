export type RenderMode = "dots" | "trail" | "pixel";
export type MorphMode = "perChar" | "mixed";

export interface TextParticleParams {
  charFrom: string;
  charTo: string;
  particleCount: number;
  renderMode: RenderMode;
  morphMode: MorphMode;
  speed: number;
  particleSize: number;
  color: string;
  bgColor: string;
  autoLoop: boolean;
}
