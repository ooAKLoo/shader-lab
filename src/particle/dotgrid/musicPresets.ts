import type { DotgridParams } from "./types";

export interface AudioAnalysis {
  bass: number;   // 0-1
  mid: number;    // 0-1
  high: number;   // 0-1
  energy: number; // 0-1
  isBeat: boolean;
  beatCount: number;
}

/* ── Energy presets (drive visual params: gridSize, speed, color) ── */

export interface MusicPreset {
  name: string;
  energyMin: number;
  energyMax: number;
  gridSize: number;
  speed: number;
  dotRadius: number;
  stagger: number;
}

export const MUSIC_PRESETS: MusicPreset[] = [
  { name: "Calm",    energyMin: 0,    energyMax: 0.25, gridSize: 40, speed: 0.5, dotRadius: 1.0, stagger: 0.2 },
  { name: "Groove",  energyMin: 0.25, energyMax: 0.5,  gridSize: 28, speed: 1.0, dotRadius: 1.4, stagger: 0.45 },
  { name: "Intense", energyMin: 0.5,  energyMax: 0.75, gridSize: 20, speed: 1.6, dotRadius: 1.8, stagger: 0.65 },
  { name: "Frenzy",  energyMin: 0.75, energyMax: 1.0,  gridSize: 14, speed: 2.4, dotRadius: 2.4, stagger: 0.85 },
];

/* ── Zone-based Choreographer ── */
//
// Two visual worlds:
//   Dot World   (phases 0,1) — Spread ↔ Morph  — dots float and connect
//   Cross World (phases 2,3,4) — Shrink → Spin → Hold — crosses tighten and spin
//
// Energy determines which world to live in.
// Transitions only happen at natural cycle boundaries:
//   Dot→Cross: when Morph (1) would advance to Shrink (2) — let it through
//   Cross→Dot: when Hold (4) would loop to Spread (0) — let it through
// Within each world, the sub-cycle runs uninterrupted.
//
// The only forced jump is a rare "drop" event: massive bass spike while in
// Dot World → skip directly to Spin (phase 3) for dramatic impact.

export type Zone = "dots" | "crosses" | "transitioning";

const ZONE_SWITCH_DELAY = 120;    // ~2s sustained energy before switching zone
const DROP_COOLDOWN = 480;        // ~8s between forced drop jumps
const CROSS_THRESHOLD = 0.42;     // smoothedEnergy above this → target crosses
const DOT_THRESHOLD = 0.32;       // smoothedEnergy below this → target dots

export class Choreographer {
  zone: Zone = "dots";
  private targetZone: "dots" | "crosses" = "dots";
  smoothedEnergy = 0;
  private zoneHoldFrames = 0;
  private lastSeenPhase = -1;
  private dropCooldown = 0;

  reset(): void {
    this.zone = "dots";
    this.targetZone = "dots";
    this.smoothedEnergy = 0;
    this.zoneHoldFrames = 0;
    this.lastSeenPhase = -1;
    this.dropCooldown = 0;
  }

  /**
   * Call once per frame.
   * @param currentPhase — the Canvas's current phase from animStateRef
   * @returns phase number to skip to, or null if no intervention needed
   */
  update(analysis: AudioAnalysis, currentPhase: number): number | null {
    // Smooth energy (slow EMA — avoids reacting to transient spikes)
    this.smoothedEnergy = this.smoothedEnergy * 0.97 + analysis.energy * 0.03;

    if (this.dropCooldown > 0) this.dropCooldown--;

    // Determine target zone from smoothed energy (with hysteresis band)
    const newTarget =
      this.smoothedEnergy > CROSS_THRESHOLD ? "crosses" as const :
      this.smoothedEnergy < DOT_THRESHOLD ? "dots" as const :
      this.targetZone;

    if (newTarget !== this.targetZone) {
      this.zoneHoldFrames = 0;
      this.targetZone = newTarget;
    }

    // Count how long target has been different from current zone
    if (this.targetZone !== this.zone && this.zone !== "transitioning") {
      this.zoneHoldFrames++;
      if (this.zoneHoldFrames >= ZONE_SWITCH_DELAY) {
        // Enter transitioning state — allow the full cycle to reach a natural boundary
        this.zone = "transitioning";
      }
    } else if (this.targetZone === this.zone) {
      this.zoneHoldFrames = 0;
    }

    // Drop detection: massive bass spike while in dots → force jump to Spin
    if (
      this.zone === "dots" &&
      this.dropCooldown <= 0 &&
      analysis.bass > 0.75 &&
      analysis.energy > 0.55 &&
      analysis.isBeat
    ) {
      this.zone = "crosses";
      this.targetZone = "crosses";
      this.zoneHoldFrames = 0;
      this.dropCooldown = DROP_COOLDOWN;
      this.lastSeenPhase = 3;
      return 3; // Force to Spin
    }

    // Detect phase changes in Canvas
    const phaseChanged = currentPhase !== this.lastSeenPhase;
    this.lastSeenPhase = currentPhase;

    if (!phaseChanged) return null;

    // Phase skipping logic per zone
    if (this.zone === "dots") {
      // Dot World: only phases 0,1 — when Canvas enters 2, redirect to 0
      if (currentPhase === 2) return 0;
    } else if (this.zone === "crosses") {
      // Cross World: only phases 2,3,4 — when Canvas enters 0, redirect to 2
      if (currentPhase === 0) return 2;
    } else {
      // Transitioning: let the cycle run freely until it reaches the natural boundary
      if (this.targetZone === "crosses" && currentPhase === 2) {
        // Just entered Shrink — lock into Cross World
        this.zone = "crosses";
        this.zoneHoldFrames = 0;
      } else if (this.targetZone === "dots" && currentPhase === 0) {
        // Just entered Spread — lock into Dot World
        this.zone = "dots";
        this.zoneHoldFrames = 0;
      }
    }

    return null;
  }
}

/* ── Preset selection + param mapping ── */

let activePresetIndex = 1;
let hysteresisCounter = 0;
const HYSTERESIS_FRAMES = 10;
let smoothedDurationEnergy = 0;

export function getActivePresetIndex(): number {
  return activePresetIndex;
}

export function resetMusicState(): void {
  activePresetIndex = 1;
  hysteresisCounter = 0;
  smoothedDurationEnergy = 0;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function mapAudioToParams(
  analysis: AudioAnalysis,
  _baseParams: DotgridParams
): DotgridParams {
  const { bass, mid, high, energy } = analysis;

  // Determine target preset from energy
  let targetIndex = 0;
  for (let i = MUSIC_PRESETS.length - 1; i >= 0; i--) {
    if (energy >= MUSIC_PRESETS[i].energyMin) {
      targetIndex = i;
      break;
    }
  }

  // Hysteresis: require sustained energy change before switching preset
  if (targetIndex !== activePresetIndex) {
    hysteresisCounter++;
    if (hysteresisCounter >= HYSTERESIS_FRAMES) {
      activePresetIndex = targetIndex;
      hysteresisCounter = 0;
    }
  } else {
    hysteresisCounter = 0;
  }

  const preset = MUSIC_PRESETS[activePresetIndex];
  const bassSq = bass * bass;

  // Bass → dotRadius boost + gridSize reduction
  const dotRadius = clamp(preset.dotRadius + bassSq * 1.2, 0.5, 3.0);
  const gridSize = clamp(Math.round(preset.gridSize - bassSq * 8), 12, 48);

  // Mid → color shift (warm shift on mid energy)
  const colorR = clamp(Math.round(165 + mid * 70), 0, 255);
  const colorG = clamp(Math.round(165 - mid * 40 + high * 30), 0, 255);
  const colorB = clamp(Math.round(170 + high * 60 - bass * 30), 0, 255);

  // High → speed and stagger boost
  const speed = clamp(preset.speed + high * 0.8, 0.3, 3.0);
  const stagger = clamp(preset.stagger + high * 0.15, 0, 1);

  // Duration shaping: smoothed energy tilts time toward the active world
  //   Low energy → long Spread/Morph (dot world breathes), short Shrink/Spin
  //   High energy → short Spread/Morph (rush through), long Spin (cross world breathes)
  smoothedDurationEnergy = smoothedDurationEnergy * 0.97 + energy * 0.03;
  const e = clamp(smoothedDurationEnergy, 0, 1);

  const spreadDuration = Math.round(lerp(3500, 1000, e));
  const morphDuration  = Math.round(lerp(3000, 800, e));
  const shrinkDuration = Math.round(lerp(800, 1400, e));
  const spinDuration   = Math.round(lerp(600, 2200, e));

  return {
    gridSize, speed, dotRadius, stagger,
    colorR, colorG, colorB,
    spreadDuration, morphDuration, shrinkDuration, spinDuration,
  };
}
