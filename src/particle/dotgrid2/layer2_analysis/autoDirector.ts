import type { Dotgrid2AudioAnalysis, Dotgrid2Params, NarrativeSection, TimelineEvent } from "../shared/types";

export interface DirectionState {
  narrativeIntensity: number;
  rhythmTightness: number;
  motifConsistency: number;
  textDensity: number;
  atmosphere: number;
}

export interface AutoVisualTargets {
  dotCount: number;
  baseRadius: number;
  bgR: number;
  bgG: number;
  bgB: number;
}

const NEUTRAL_DIRECTION: DirectionState = {
  narrativeIntensity: 0.68,
  rhythmTightness: 0.66,
  motifConsistency: 0.78,
  textDensity: 0.65,
  atmosphere: 0.6,
};

const SECTION_BASE: Record<NarrativeSection, DirectionState> = {
  intro: {
    narrativeIntensity: 0.48,
    rhythmTightness: 0.38,
    motifConsistency: 0.9,
    textDensity: 0.35,
    atmosphere: 0.82,
  },
  verse: {
    narrativeIntensity: 0.62,
    rhythmTightness: 0.58,
    motifConsistency: 0.84,
    textDensity: 0.56,
    atmosphere: 0.66,
  },
  prechorus: {
    narrativeIntensity: 0.76,
    rhythmTightness: 0.72,
    motifConsistency: 0.78,
    textDensity: 0.66,
    atmosphere: 0.56,
  },
  chorus: {
    narrativeIntensity: 0.9,
    rhythmTightness: 0.87,
    motifConsistency: 0.7,
    textDensity: 0.84,
    atmosphere: 0.48,
  },
  interlude: {
    narrativeIntensity: 0.52,
    rhythmTightness: 0.45,
    motifConsistency: 0.88,
    textDensity: 0.4,
    atmosphere: 0.75,
  },
  outro: {
    narrativeIntensity: 0.4,
    rhythmTightness: 0.34,
    motifConsistency: 0.92,
    textDensity: 0.32,
    atmosphere: 0.86,
  },
};

const PROFILE_OFFSETS: Record<Dotgrid2Params["directionProfile"], Partial<DirectionState>> = {
  balanced: {},
  rhythm: {
    rhythmTightness: 0.12,
    narrativeIntensity: -0.05,
    motifConsistency: -0.08,
    textDensity: -0.08,
    atmosphere: -0.08,
  },
  story: {
    rhythmTightness: -0.08,
    narrativeIntensity: 0.12,
    motifConsistency: 0.05,
    textDensity: 0.1,
    atmosphere: 0.08,
  },
};

const SECTION_DENSITY: Record<NarrativeSection, number> = {
  intro: 0.52,
  verse: 0.7,
  prechorus: 0.8,
  chorus: 0.95,
  interlude: 0.62,
  outro: 0.44,
};

const SECTION_RADIUS: Record<NarrativeSection, number> = {
  intro: 1.35,
  verse: 1.85,
  prechorus: 2.15,
  chorus: 2.55,
  interlude: 1.65,
  outro: 1.15,
};

const SECTION_BG: Record<NarrativeSection, [number, number, number]> = {
  intro: [246, 247, 250],
  verse: [243, 245, 249],
  prechorus: [238, 242, 247],
  chorus: [231, 238, 244],
  interlude: [245, 247, 250],
  outro: [248, 248, 250],
};

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function withProfile(base: DirectionState, profile: Dotgrid2Params["directionProfile"]): DirectionState {
  const offset = PROFILE_OFFSETS[profile];
  return {
    narrativeIntensity: clamp(base.narrativeIntensity + (offset.narrativeIntensity ?? 0), 0, 1),
    rhythmTightness: clamp(base.rhythmTightness + (offset.rhythmTightness ?? 0), 0, 1),
    motifConsistency: clamp(base.motifConsistency + (offset.motifConsistency ?? 0), 0, 1),
    textDensity: clamp(base.textDensity + (offset.textDensity ?? 0), 0, 1),
    atmosphere: clamp(base.atmosphere + (offset.atmosphere ?? 0), 0, 1),
  };
}

export function resolveDirectionState(
  params: Dotgrid2Params,
  event: TimelineEvent,
  analysis: Dotgrid2AudioAnalysis
): DirectionState {
  const section = event.section ?? "verse";
  const profiled = withProfile(SECTION_BASE[section], params.directionProfile);
  const energy = clamp(analysis.energy, 0, 1);
  const onset = clamp(analysis.onset, 0, 1);

  const dynamic: DirectionState = {
    narrativeIntensity: clamp(profiled.narrativeIntensity + energy * 0.12 + (analysis.midBeat ? 0.05 : 0), 0, 1),
    rhythmTightness: clamp(
      profiled.rhythmTightness + onset * 0.2 + (analysis.lowBeat ? 0.08 : 0) + (analysis.highBeat ? 0.03 : 0),
      0,
      1
    ),
    motifConsistency: clamp(profiled.motifConsistency - onset * 0.16 - (section === "chorus" ? 0.04 : 0), 0, 1),
    textDensity: clamp(profiled.textDensity + (analysis.midBeat ? 0.04 : 0) + (section === "chorus" ? 0.06 : 0), 0, 1),
    atmosphere: clamp(profiled.atmosphere + (0.36 - energy) * 0.24, 0, 1),
  };

  const strength = clamp(params.directionStrength, 0, 1);
  const mix = 0.35 + strength * 0.65;

  return {
    narrativeIntensity: clamp(lerp(NEUTRAL_DIRECTION.narrativeIntensity, dynamic.narrativeIntensity, mix), 0, 1),
    rhythmTightness: clamp(lerp(NEUTRAL_DIRECTION.rhythmTightness, dynamic.rhythmTightness, mix), 0, 1),
    motifConsistency: clamp(lerp(NEUTRAL_DIRECTION.motifConsistency, dynamic.motifConsistency, mix), 0, 1),
    textDensity: clamp(lerp(NEUTRAL_DIRECTION.textDensity, dynamic.textDensity, mix), 0, 1),
    atmosphere: clamp(lerp(NEUTRAL_DIRECTION.atmosphere, dynamic.atmosphere, mix), 0, 1),
  };
}

export function resolveAutoVisualTargets(
  params: Dotgrid2Params,
  direction: DirectionState,
  section: NarrativeSection,
  analysis: Dotgrid2AudioAnalysis
): AutoVisualTargets {
  const densityBase = SECTION_DENSITY[section];
  const profileDensityOffset =
    params.directionProfile === "rhythm" ? 0.08 : params.directionProfile === "story" ? -0.04 : 0;

  const density = clamp(
    densityBase +
      profileDensityOffset +
      direction.narrativeIntensity * 0.08 +
      analysis.energy * 0.12 +
      analysis.onset * 0.1 -
      analysis.mud * 0.14,
    0.3,
    1
  );

  let dotCount = Math.round(420 + density * 1880);
  if (params.directionProfile === "rhythm") {
    dotCount += Math.round(analysis.onset * 120);
  }
  dotCount = Math.round(clamp(dotCount, 360, 2400));

  const baseRadius = clamp(
    SECTION_RADIUS[section] +
      analysis.bass * 1.05 +
      direction.rhythmTightness * 0.35 +
      analysis.onset * 0.22 -
      analysis.mud * 0.2,
    0.9,
    4.4
  );

  const baseBg = SECTION_BG[section];
  const energyDarken = 6 + analysis.energy * 26 + direction.rhythmTightness * 8 + analysis.mud * 12;
  let r = baseBg[0] - energyDarken;
  let g = baseBg[1] - energyDarken * 0.95;
  let b = baseBg[2] - energyDarken * 0.88;

  if (params.directionProfile === "rhythm") {
    r -= 4;
    g -= 3;
    b -= 1;
  } else if (params.directionProfile === "story") {
    r += 8;
    g += 3;
    b -= 4;
  }

  const beatLift = analysis.lowBeat || analysis.midBeat ? 6 : 0;
  r += beatLift;
  g += beatLift * 0.8;
  b += beatLift * 0.6;

  return {
    dotCount,
    baseRadius,
    bgR: Math.round(clamp(r, 0, 255)),
    bgG: Math.round(clamp(g, 0, 255)),
    bgB: Math.round(clamp(b, 0, 255)),
  };
}
