export interface Dot {
  // Current state (mutated every frame)
  x: number;
  y: number;
  radius: number;
  opacity: number;
  r: number;
  g: number;
  b: number;

  // Lerp source (snapshot when transition starts)
  fromX: number;
  fromY: number;
  fromRadius: number;
  fromOpacity: number;
  fromR: number;
  fromG: number;
  fromB: number;

  // Lerp target
  toX: number;
  toY: number;
  toRadius: number;
  toOpacity: number;
  toR: number;
  toG: number;
  toB: number;

  // Per-dot transition delay (0-1, based on distance sorting)
  delay: number;
}

export interface FormationTarget {
  x: number; // 0-1 normalized
  y: number; // 0-1 normalized
  radius: number;
  opacity: number;
  r: number;
  g: number;
  b: number;
}

export interface Dotgrid2AudioAnalysis {
  bass: number;
  mud: number;
  mid: number;
  high: number;
  energy: number;
  onset: number;
  isBeat: boolean;
  lowBeat: boolean;
  midBeat: boolean;
  highBeat: boolean;
  lookAheadKick: number;
  lookAheadSnare: number;
  lookAheadHat: number;
  anticipation: number;
  bpm: number;
  beatInBar: number;
  barProgress: number;
}

export type FormationType =
  | "scatter"
  | "grid"
  | "wave"
  | "circle"
  | "heart"
  | "text"
  | "burst"
  | "spiral"
  | "converge"
  | "rain"
  | "ripple";

export type NarrativeSection =
  | "intro"
  | "verse"
  | "prechorus"
  | "chorus"
  | "interlude"
  | "outro";

export type NarrativeMotif = "order" | "flow" | "desire" | "peak" | "resolve";
export type BeatAccent = "kick" | "snare" | "hat" | "full";

export type EasingFn = (t: number) => number;

export interface TimelineEvent {
  time: number;          // seconds
  formation: FormationType;
  /** For "text" formation */
  text?: string;
  /** Transition duration in ms */
  transitionMs: number;
  /** Easing function name */
  easing: "easeInOutCubic" | "easeOutQuint" | "easeInOutQuart" | "easeOutBounce" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "linear";
  /** Color override [r, g, b] or null to keep current */
  color?: [number, number, number];
  /** Radius override or null */
  radius?: number;
  /** Opacity override or null */
  opacity?: number;
  /** Stagger amount 0-1 */
  stagger: number;
  /** Optional pulse intensity on beats (0 = none, 1 = max) */
  beatPulse: number;
  /** Narrative section for product/UX and adaptive rendering */
  section?: NarrativeSection;
  /** Visual motif identity for reprise/variation */
  motif?: NarrativeMotif;
  /** Variation amount (0-1) under same motif */
  variation?: number;
  /** Quantize transition start to beat grid (in beats) */
  quantizeBeats?: number;
  /** Which beat role should feel dominant in this event */
  accent?: BeatAccent;
  /** Event dynamic intensity 0-1 */
  intensity?: number;
  /** Optional label for debugging */
  label?: string;
}

export interface Dotgrid2Params {
  dotCount: number;
  baseRadius: number;
  colorR: number;
  colorG: number;
  colorB: number;
  bgR: number;
  bgG: number;
  bgB: number;
  directionProfile: "balanced" | "rhythm" | "story";
  directionStrength: number;
}
