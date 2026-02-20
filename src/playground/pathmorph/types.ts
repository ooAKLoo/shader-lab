export type EasingType = "easeInOut" | "easeOut" | "easeIn" | "linear" | "bounce";

export interface PathmorphParams {
  charFrom: string;
  charTo: string;
  duration: number;
  easing: EasingType;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  showStroke: boolean;
  showFill: boolean;
  bgColor: string;
}
