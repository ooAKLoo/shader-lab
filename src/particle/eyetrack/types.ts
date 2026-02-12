export type BlinkStyle = "center" | "top";

export interface EyetrackParams {
  eyeGap: number;
  eyeWidth: number;
  eyeHeight: number;
  eyeRadius: number;
  pupilSize: number;
  smoothing: number;
  sensitivity: number;
  cardColor: string;
  blinkInterval: number;
  blinkStyle: BlinkStyle;
}
