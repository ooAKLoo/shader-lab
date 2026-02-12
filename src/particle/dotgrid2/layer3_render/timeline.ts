import type { NarrativeMotif, NarrativeSection, TimelineEvent } from "../shared/types";

/**
 * Choreographed timeline for "爱江山更爱美人 - 李丽芬"
 *
 * Song structure (from LRC):
 *   0:00 - 0:29  Intro (instrumental)
 *   0:29 - 1:02  Verse 1 (道不尽红尘舍恋... 问世间情为何物)
 *   1:02 - 1:35  Verse 2 + Pre-chorus (看人间多少故事... 你就是那人间美人)
 *   1:35 - 2:19  Chorus (偷得半日闲... 爱江山更爱美人)
 *   2:19 - 2:53  Interlude (instrumental)
 *   2:53 - 3:26  Verse 3 (道不尽红尘舍恋...)
 *   3:26 - 3:59  Verse 4 (看人间多少故事...)
 *   3:59 - 4:42  Chorus 2 (偷得半日闲...)
 *   4:42 - 5:02  Final chorus + ending
 *
 * Design philosophy:
 *   - Intro: dots emerge gently (birth/awakening)
 *   - Verses: flowing organic shapes (contemplation, questioning)
 *   - Pre-chorus: tension builds (gathering, swirling)
 *   - Chorus: explosive, dramatic formations + text reveals
 *   - Interlude: breathing room, gentle patterns
 *   - Ending: converge to heart, fade
 */

// Warm colors for passionate moments
const WARM: [number, number, number] = [210, 130, 110];
const WARM_DEEP: [number, number, number] = [190, 90, 90];
// Cool colors for contemplative moments
const COOL: [number, number, number] = [140, 165, 195];
const COOL_LIGHT: [number, number, number] = [170, 185, 200];
// Neutral
const NEUTRAL: [number, number, number] = [180, 180, 185];
// Gold for climactic moments
const GOLD: [number, number, number] = [210, 175, 110];
// Deep rose for "爱" (love)
const ROSE: [number, number, number] = [195, 110, 130];

const RAW_TIMELINE: TimelineEvent[] = [
  // ═══════════════════════════════════════════════════════
  // INTRO (0:00 - 0:29) — Birth, emergence, breathing
  // ═══════════════════════════════════════════════════════
  {
    time: 0,
    formation: "converge",
    transitionMs: 100,
    easing: "linear",
    color: NEUTRAL,
    radius: 0.5,
    opacity: 0,
    stagger: 0,
    beatPulse: 0,
    label: "Silence - dots invisible at center",
  },
  {
    time: 0.5,
    formation: "scatter",
    transitionMs: 4000,
    easing: "easeOutQuint",
    color: COOL_LIGHT,
    radius: 1.2,
    opacity: 0.3,
    stagger: 0.8,
    beatPulse: 0,
    label: "Intro: gentle scatter emergence",
  },
  {
    time: 5,
    formation: "wave",
    transitionMs: 4000,
    easing: "easeInOutCubic",
    color: COOL,
    radius: 1.5,
    opacity: 0.5,
    stagger: 0.6,
    beatPulse: 0.1,
    label: "Intro: settle into gentle waves",
  },
  {
    time: 12,
    formation: "ripple",
    transitionMs: 4000,
    easing: "easeInOutCubic",
    color: COOL_LIGHT,
    radius: 1.5,
    opacity: 0.6,
    stagger: 0.7,
    beatPulse: 0.15,
    label: "Intro: ripple outward",
  },
  {
    time: 20,
    formation: "spiral",
    transitionMs: 5000,
    easing: "easeInOutQuart",
    color: COOL,
    radius: 1.6,
    opacity: 0.65,
    stagger: 0.5,
    beatPulse: 0.2,
    label: "Intro: spiral, building anticipation",
  },

  // ═══════════════════════════════════════════════════════
  // VERSE 1 (0:29 - 1:02) — 道不尽红尘舍恋 / 诉不完人间恩怨
  // Contemplation, questioning — flowing organic shapes
  // ═══════════════════════════════════════════════════════
  {
    time: 29,
    formation: "grid",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 1.8,
    opacity: 0.8,
    stagger: 0.55,
    beatPulse: 0.25,
    label: "V1: 道不尽红尘舍恋 - ordered grid (structure of fate)",
  },
  {
    time: 35,
    formation: "wave",
    transitionMs: 3000,
    easing: "easeInOutCubic",
    color: COOL,
    radius: 1.8,
    opacity: 0.85,
    stagger: 0.45,
    beatPulse: 0.3,
    label: "V1: 诉不完人间恩怨 - waves (emotion flowing)",
  },
  {
    time: 40.5,
    formation: "scatter",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: WARM,
    radius: 2.0,
    opacity: 0.8,
    stagger: 0.6,
    beatPulse: 0.3,
    label: "V1: 世世代代都是缘 - scatter (countless connections)",
  },
  {
    time: 46,
    formation: "circle",
    transitionMs: 3000,
    easing: "easeInOutQuart",
    color: COOL,
    radius: 1.8,
    opacity: 0.85,
    stagger: 0.5,
    beatPulse: 0.25,
    label: "V1: 留一半清醒 - circles (containment/clarity)",
  },
  {
    time: 52,
    formation: "spiral",
    transitionMs: 3000,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.0,
    opacity: 0.9,
    stagger: 0.4,
    beatPulse: 0.3,
    label: "V1: 问世间情为何物 - spiral inward (questioning)",
  },
  {
    time: 57,
    formation: "ripple",
    transitionMs: 3000,
    easing: "easeOutQuint",
    color: WARM_DEEP,
    radius: 2.2,
    opacity: 0.85,
    stagger: 0.65,
    beatPulse: 0.35,
    label: "V1: 直叫人生死相许 - ripple (echoing question)",
  },

  // ═══════════════════════════════════════════════════════
  // VERSE 2 + PRE-CHORUS (1:02 - 1:35)
  // 看人间多少故事 → 你就是那人间美人
  // Building tension toward chorus
  // ═══════════════════════════════════════════════════════
  {
    time: 62,
    formation: "grid",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 1.6,
    opacity: 0.8,
    stagger: 0.5,
    beatPulse: 0.3,
    label: "V2: 看人间多少故事 - grid (observing stories)",
  },
  {
    time: 68,
    formation: "wave",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: COOL,
    radius: 1.8,
    opacity: 0.85,
    stagger: 0.4,
    beatPulse: 0.35,
    label: "V2: 最销魂是 - flowing waves",
  },
  {
    time: 73,
    formation: "text",
    text: "美人",
    transitionMs: 2800,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 2.0,
    opacity: 0.95,
    stagger: 0.55,
    beatPulse: 0.3,
    label: "V2: 美人 reveal!",
  },
  {
    time: 78,
    formation: "circle",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.0,
    opacity: 0.9,
    stagger: 0.45,
    beatPulse: 0.35,
    label: "V2: 为她/你痴为她/你狂 - circles tightening",
  },
  {
    time: 84,
    formation: "spiral",
    transitionMs: 2500,
    easing: "easeInOutQuart",
    color: WARM_DEEP,
    radius: 2.2,
    opacity: 0.9,
    stagger: 0.5,
    beatPulse: 0.4,
    label: "Pre-chorus: building spiral (tension rising)",
  },
  {
    time: 90,
    formation: "converge",
    transitionMs: 2000,
    easing: "easeInBack",
    color: GOLD,
    radius: 2.5,
    opacity: 1.0,
    stagger: 0.3,
    beatPulse: 0.5,
    label: "Pre-chorus: converge (gathering energy for chorus)",
  },

  // ═══════════════════════════════════════════════════════
  // CHORUS 1 (1:35 - 2:19) — 偷得半日闲 → 爱江山更爱美人
  // PEAK ENERGY: explosive formations, text reveals, dramatic color
  // ═══════════════════════════════════════════════════════
  {
    time: 95,
    formation: "burst",
    transitionMs: 1200,
    easing: "easeOutBack",
    color: GOLD,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.7,
    beatPulse: 0.6,
    label: "CHORUS: 偷得半日闲 - BURST! (explosion of energy)",
  },
  {
    time: 99,
    formation: "wave",
    transitionMs: 2000,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.5,
    opacity: 1.0,
    stagger: 0.4,
    beatPulse: 0.5,
    label: "CHORUS: 醉煞这 - riding the wave",
  },
  {
    time: 104,
    formation: "text",
    text: "江山",
    transitionMs: 2200,
    easing: "easeOutQuint",
    color: GOLD,
    radius: 2.5,
    opacity: 1.0,
    stagger: 0.5,
    beatPulse: 0.5,
    label: "CHORUS: 江山 reveal!",
  },
  {
    time: 109,
    formation: "burst",
    transitionMs: 1500,
    easing: "easeOutBack",
    color: WARM_DEEP,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.65,
    beatPulse: 0.55,
    label: "CHORUS: burst transition",
  },
  {
    time: 113,
    formation: "heart",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 2.5,
    opacity: 1.0,
    stagger: 0.5,
    beatPulse: 0.5,
    label: "CHORUS: 半点朱唇 - heart shape (love)",
  },
  {
    time: 118,
    formation: "text",
    text: "爱",
    transitionMs: 2000,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 3.0,
    opacity: 1.0,
    stagger: 0.6,
    beatPulse: 0.55,
    label: "CHORUS: 爱 reveal! (CLIMAX)",
  },
  {
    time: 123,
    formation: "burst",
    transitionMs: 1000,
    easing: "easeOutBack",
    color: GOLD,
    radius: 3.0,
    opacity: 1.0,
    stagger: 0.8,
    beatPulse: 0.65,
    label: "CHORUS: 爱江山更爱美人 - explosive burst",
  },
  {
    time: 127,
    formation: "text",
    text: "爱美人",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: WARM_DEEP,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.55,
    beatPulse: 0.5,
    label: "CHORUS: 爱美人 text",
  },
  {
    time: 133,
    formation: "heart",
    transitionMs: 3000,
    easing: "easeInOutCubic",
    color: ROSE,
    radius: 2.5,
    opacity: 0.95,
    stagger: 0.4,
    beatPulse: 0.4,
    label: "CHORUS: ending heart (chorus winds down)",
  },

  // ═══════════════════════════════════════════════════════
  // INTERLUDE (2:19 - 2:53) — Breathing room
  // ═══════════════════════════════════════════════════════
  {
    time: 139,
    formation: "ripple",
    transitionMs: 4000,
    easing: "easeInOutCubic",
    color: COOL_LIGHT,
    radius: 1.8,
    opacity: 0.7,
    stagger: 0.6,
    beatPulse: 0.15,
    label: "Interlude: gentle ripple (exhale)",
  },
  {
    time: 148,
    formation: "spiral",
    transitionMs: 5000,
    easing: "easeInOutQuart",
    color: COOL,
    radius: 1.6,
    opacity: 0.65,
    stagger: 0.5,
    beatPulse: 0.2,
    label: "Interlude: slow spiral",
  },
  {
    time: 158,
    formation: "wave",
    transitionMs: 4000,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 1.5,
    opacity: 0.6,
    stagger: 0.45,
    beatPulse: 0.15,
    label: "Interlude: gentle waves ending",
  },
  {
    time: 167,
    formation: "grid",
    transitionMs: 3000,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 1.6,
    opacity: 0.7,
    stagger: 0.5,
    beatPulse: 0.2,
    label: "Interlude→V3: settling into grid",
  },

  // ═══════════════════════════════════════════════════════
  // VERSE 3 (2:53 - 3:26) — Same lyrics as V1, but evolved
  // ═══════════════════════════════════════════════════════
  {
    time: 173,
    formation: "scatter",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: COOL,
    radius: 1.8,
    opacity: 0.8,
    stagger: 0.5,
    beatPulse: 0.3,
    label: "V3: 道不尽红尘舍恋 - scatter (familiar but evolved)",
  },
  {
    time: 179,
    formation: "wave",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.0,
    opacity: 0.85,
    stagger: 0.4,
    beatPulse: 0.35,
    label: "V3: 诉不完人间恩怨 - waves (deeper emotion)",
  },
  {
    time: 185,
    formation: "circle",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 2.0,
    opacity: 0.85,
    stagger: 0.45,
    beatPulse: 0.3,
    label: "V3: 世世代代都是缘 - circles",
  },
  {
    time: 191,
    formation: "ripple",
    transitionMs: 3000,
    easing: "easeOutQuint",
    color: COOL,
    radius: 1.8,
    opacity: 0.85,
    stagger: 0.55,
    beatPulse: 0.3,
    label: "V3: 留一半清醒 - ripple",
  },
  {
    time: 197,
    formation: "spiral",
    transitionMs: 3000,
    easing: "easeInOutQuart",
    color: WARM_DEEP,
    radius: 2.2,
    opacity: 0.9,
    stagger: 0.4,
    beatPulse: 0.35,
    label: "V3: 问世间情为何物 - spiral",
  },

  // ═══════════════════════════════════════════════════════
  // VERSE 4 + PRE-CHORUS 2 (3:26 - 3:59)
  // ═══════════════════════════════════════════════════════
  {
    time: 206,
    formation: "grid",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: NEUTRAL,
    radius: 1.8,
    opacity: 0.85,
    stagger: 0.45,
    beatPulse: 0.35,
    label: "V4: 看人间多少故事 - grid",
  },
  {
    time: 212,
    formation: "wave",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.0,
    opacity: 0.9,
    stagger: 0.4,
    beatPulse: 0.35,
    label: "V4: 最销魂是 - waves",
  },
  {
    time: 217,
    formation: "text",
    text: "美人",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 2.2,
    opacity: 0.95,
    stagger: 0.5,
    beatPulse: 0.35,
    label: "V4: 美人 reveal",
  },
  {
    time: 222,
    formation: "heart",
    transitionMs: 2500,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.0,
    opacity: 0.9,
    stagger: 0.45,
    beatPulse: 0.4,
    label: "V4: 为她痴 - heart",
  },
  {
    time: 228,
    formation: "spiral",
    transitionMs: 2500,
    easing: "easeInOutQuart",
    color: WARM_DEEP,
    radius: 2.2,
    opacity: 0.95,
    stagger: 0.45,
    beatPulse: 0.45,
    label: "Pre-chorus 2: building spiral",
  },
  {
    time: 234,
    formation: "converge",
    transitionMs: 2000,
    easing: "easeInBack",
    color: GOLD,
    radius: 2.5,
    opacity: 1.0,
    stagger: 0.3,
    beatPulse: 0.5,
    label: "Pre-chorus 2: converge for chorus",
  },

  // ═══════════════════════════════════════════════════════
  // CHORUS 2 (3:59 - 4:42) — Even more dramatic than chorus 1
  // ═══════════════════════════════════════════════════════
  {
    time: 239,
    formation: "burst",
    transitionMs: 1000,
    easing: "easeOutBack",
    color: GOLD,
    radius: 3.0,
    opacity: 1.0,
    stagger: 0.75,
    beatPulse: 0.65,
    label: "CHORUS 2: BURST! (bigger explosion)",
  },
  {
    time: 243,
    formation: "wave",
    transitionMs: 1800,
    easing: "easeInOutCubic",
    color: WARM,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.4,
    beatPulse: 0.55,
    label: "CHORUS 2: riding the wave",
  },
  {
    time: 248,
    formation: "text",
    text: "江山",
    transitionMs: 2000,
    easing: "easeOutQuint",
    color: GOLD,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.5,
    beatPulse: 0.55,
    label: "CHORUS 2: 江山 reveal",
  },
  {
    time: 253,
    formation: "burst",
    transitionMs: 1200,
    easing: "easeOutBack",
    color: WARM_DEEP,
    radius: 3.0,
    opacity: 1.0,
    stagger: 0.7,
    beatPulse: 0.6,
    label: "CHORUS 2: transition burst",
  },
  {
    time: 257,
    formation: "heart",
    transitionMs: 2200,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 2.8,
    opacity: 1.0,
    stagger: 0.5,
    beatPulse: 0.55,
    label: "CHORUS 2: heart (love theme)",
  },
  {
    time: 262,
    formation: "text",
    text: "爱",
    transitionMs: 1800,
    easing: "easeOutQuint",
    color: ROSE,
    radius: 3.2,
    opacity: 1.0,
    stagger: 0.6,
    beatPulse: 0.6,
    label: "CHORUS 2: 爱 CLIMAX!",
  },
  {
    time: 267,
    formation: "burst",
    transitionMs: 800,
    easing: "easeOutBack",
    color: GOLD,
    radius: 3.2,
    opacity: 1.0,
    stagger: 0.85,
    beatPulse: 0.7,
    label: "CHORUS 2: 爱江山更爱美人 PEAK BURST!",
  },
  {
    time: 271,
    formation: "text",
    text: "爱美人",
    transitionMs: 2500,
    easing: "easeOutQuint",
    color: WARM_DEEP,
    radius: 3.0,
    opacity: 1.0,
    stagger: 0.55,
    beatPulse: 0.55,
    label: "CHORUS 2: 爱美人 text reveal",
  },

  // ═══════════════════════════════════════════════════════
  // FINAL (4:42 - 5:02) — Denouement
  // ═══════════════════════════════════════════════════════
  {
    time: 282,
    formation: "heart",
    transitionMs: 3000,
    easing: "easeInOutCubic",
    color: ROSE,
    radius: 2.5,
    opacity: 0.9,
    stagger: 0.4,
    beatPulse: 0.35,
    label: "Final: settling into heart",
  },
  {
    time: 290,
    formation: "ripple",
    transitionMs: 4000,
    easing: "easeInOutCubic",
    color: COOL_LIGHT,
    radius: 1.8,
    opacity: 0.6,
    stagger: 0.5,
    beatPulse: 0.15,
    label: "Final: gentle ripple (afterglow)",
  },
  {
    time: 297,
    formation: "converge",
    transitionMs: 5000,
    easing: "easeInOutQuart",
    color: NEUTRAL,
    radius: 1.0,
    opacity: 0.3,
    stagger: 0.6,
    beatPulse: 0,
    label: "Final: dots converge and fade (ending)",
  },
];

function inferSection(time: number): NarrativeSection {
  if (time < 29) return "intro";
  if (time < 84) return "verse";
  if (time < 95) return "prechorus";
  if (time < 139) return "chorus";
  if (time < 173) return "interlude";
  if (time < 228) return "verse";
  if (time < 239) return "prechorus";
  if (time < 282) return "chorus";
  return "outro";
}

function inferMotif(ev: TimelineEvent): NarrativeMotif {
  if (ev.formation === "grid" || ev.formation === "converge") return "order";
  if (ev.formation === "wave" || ev.formation === "ripple" || ev.formation === "spiral") return "flow";
  if (ev.formation === "heart" || ev.formation === "text") return "desire";
  if (ev.formation === "burst") return "peak";
  return "resolve";
}

function defaultQuantize(section: NarrativeSection): number {
  if (section === "chorus") return 0.5;
  if (section === "prechorus") return 1;
  if (section === "outro") return 2;
  return 1;
}

function defaultAccent(ev: TimelineEvent, section: NarrativeSection): "kick" | "snare" | "hat" | "full" {
  if (ev.formation === "burst" || ev.formation === "converge") return "kick";
  if (ev.formation === "text" || ev.formation === "heart") return "snare";
  if (ev.formation === "ripple" || ev.formation === "rain") return "hat";
  if (section === "chorus") return "full";
  return "kick";
}

export const SONG_TIMELINE: TimelineEvent[] = RAW_TIMELINE.map((ev, idx) => {
  const section = ev.section ?? inferSection(ev.time);
  return {
    ...ev,
    section,
    motif: ev.motif ?? inferMotif(ev),
    variation: ev.variation ?? ((idx % 5) / 5),
    quantizeBeats: ev.quantizeBeats ?? defaultQuantize(section),
    accent: ev.accent ?? defaultAccent(ev, section),
    intensity: ev.intensity ?? Math.max(0.15, Math.min(1, ev.beatPulse + 0.2)),
  };
});

export interface HighlightSegment {
  id: string;
  label: string;
  start: number;
  duration: number;
  description: string;
}

export const HIGHLIGHT_SEGMENTS: HighlightSegment[] = [
  {
    id: "hook15",
    label: "15s Hook",
    start: 118,
    duration: 15,
    description: "副歌核心句：爱字成形到爱美人收束",
  },
  {
    id: "story30",
    label: "30s Story",
    start: 90,
    duration: 30,
    description: "预副歌蓄势到第一次副歌爆发",
  },
  {
    id: "peak30",
    label: "30s Peak",
    start: 239,
    duration: 30,
    description: "第二次副歌高能段，适合展示节奏驱动",
  },
];

export function findTimelineIndex(time: number): number {
  let idx = 0;
  for (let i = SONG_TIMELINE.length - 1; i >= 0; i--) {
    if (time >= SONG_TIMELINE[i].time) {
      idx = i;
      break;
    }
  }
  return idx;
}

export function getTimelineContext(time: number): { event: TimelineEvent; nextEvent: TimelineEvent | null; index: number } {
  const index = findTimelineIndex(time);
  return {
    event: SONG_TIMELINE[index],
    nextEvent: index < SONG_TIMELINE.length - 1 ? SONG_TIMELINE[index + 1] : null,
    index,
  };
}
