export type GooeyfxMode = "spectrum" | "wave" | "pulse";
export type GooeyfxBarShape = "rect" | "round" | "pill";

export interface GooeyfxParams {
  speed: number;
  mode: GooeyfxMode;
  barCount: number;
  barWidth: number;
  barShape: GooeyfxBarShape;
  blur: number;
  threshold: number;
  color: string;
  crisp: boolean;
}
