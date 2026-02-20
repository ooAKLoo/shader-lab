export interface PaletteColors {
  name: string;
  bg: string;
  node: string;
  line: string;
  accent: string;
  glow: string;
  warm: string;
}

export interface VizModeInfo {
  id: number;
  name: string;
  fftWeight: number;
  globalWeight: number;
}

export interface LayoutShapeInfo {
  name: string;
}

export const PALETTES: Record<string, PaletteColors> = {
  cosmic:  { name: "Cosmic",  bg: "#08081a", node: "#c4b5fd", line: "#6366f1", accent: "#f0abfc", glow: "#8b5cf6", warm: "#a78bfa" },
  ocean:   { name: "Ocean",   bg: "#071520", node: "#7dd3fc", line: "#0284c7", accent: "#67e8f9", glow: "#0ea5e9", warm: "#38bdf8" },
  ember:   { name: "Ember",   bg: "#1a0808", node: "#fca5a5", line: "#dc2626", accent: "#fbbf24", glow: "#ef4444", warm: "#f97316" },
  aurora:  { name: "Aurora",  bg: "#0a1210", node: "#86efac", line: "#16a34a", accent: "#a3e635", glow: "#22c55e", warm: "#4ade80" },
  neon:    { name: "Neon",    bg: "#10061a", node: "#f9a8d4", line: "#db2777", accent: "#a78bfa", glow: "#ec4899", warm: "#818cf8" },
  mono:    { name: "Mono",    bg: "#0a0a0a", node: "#d4d4d4", line: "#525252", accent: "#ffffff", glow: "#a3a3a3", warm: "#e5e5e5" },
  astral:  { name: "Astral",  bg: "#060614", node: "#4d80cc", line: "#1a3a6b", accent: "#6699dd", glow: "#3366bb", warm: "#5588cc" },
};

export const VIZ_MODES: Record<string, VizModeInfo> = {
  ripple:       { id: 0, name: "Ripple",        fftWeight: 0.15, globalWeight: 0.6  },
  spectralRing: { id: 1, name: "Spectral Ring", fftWeight: 0.5,  globalWeight: 0.3  },
  logSpiral:    { id: 2, name: "Log Spiral",    fftWeight: 0.5,  globalWeight: 0.3  },
  unified:      { id: 3, name: "Unified",       fftWeight: 0.0,  globalWeight: 1.0  },
  aurora:       { id: 4, name: "Aurora",         fftWeight: 0.15, globalWeight: 0.5  },
};

export const LAYOUT_SHAPES: Record<string, LayoutShapeInfo> = {
  disc:   { name: "Disc"   },
  square: { name: "Square" },
  hex:    { name: "Hex"    },
  ring:   { name: "Ring"   },
  star:   { name: "Star"   },
  heart:  { name: "Heart"  },
};
