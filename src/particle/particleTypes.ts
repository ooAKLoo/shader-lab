export type ParticleType = "fission" | "metaball" | "sdfmorph" | "lettermorph" | "liquidfill" | "gooeyfx" | "eyetrack" | "liquidtrans" | "dotgrid";

export interface ParticleEntry {
  id: ParticleType;
  name: string;
  description: string;
}

export const PARTICLES: ParticleEntry[] = [
  {
    id: "fission",
    name: "Fission",
    description: "Canvas 2D particle split-merge with additive glow",
  },
  {
    id: "metaball",
    name: "Metaball",
    description: "CSS Gooey filter particle split-merge with liquid fusion",
  },
  {
    id: "sdfmorph",
    name: "SDF Morph",
    description: "WebGL SDF shape morphing with liquid fusion and easing curves",
  },
  {
    id: "lettermorph",
    name: "Letter Morph",
    description: "26 Letters A-Z SDF morphing with liquid fusion",
  },
  {
    id: "liquidfill",
    name: "Liquid Fill",
    description: "CSS Gooey filter blob expansion with SVG path morphing and splash particles",
  },
  {
    id: "gooeyfx",
    name: "Gooey FX",
    description: "SVG Gooey filter with crisp circles and gooey blob connections",
  },
  {
    id: "eyetrack",
    name: "Eye Track",
    description: "CSS cursor-following eyes with lerp smoothing and blink animation",
  },
  {
    id: "liquidtrans",
    name: "Liquid Trans",
    description: "WebGL noise-driven liquid marble transition with domain warping",
  },
  {
    id: "dotgrid",
    name: "Dot Grid",
    description: "Canvas 2D dot-to-grid morphing with staggered easing",
  },
];
