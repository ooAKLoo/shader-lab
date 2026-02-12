import type { TextMaskParams } from "./types";

export const DEFAULT_CONFIG: TextMaskParams = {
  slides: [
    { line1: "WE ARE", line2: "thinkers", line3: "+Doers" },
    { line1: "WE ARE", line2: "optimists", line3: "+realists" },
    { line1: "WE ARE", line2: "willing", line3: "+able" },
  ],
  duration: 1.5,
  interval: 5,
  autoPlay: true,
  color1: "#f5a147",
  color2: "#51cad8",
  color3: "#2a5e6e",
  bgColor: "#112b39",
};

export const COLOR_PRESETS = [
  {
    id: "original",
    label: "Original",
    colors: { color1: "#f5a147", color2: "#51cad8", color3: "#2a5e6e" },
  },
  {
    id: "sunset",
    label: "Sunset",
    colors: { color1: "#ff6b6b", color2: "#feca57", color3: "#ee5a6f" },
  },
  {
    id: "ocean",
    label: "Ocean",
    colors: { color1: "#00d2ff", color2: "#3a7bd5", color3: "#0077b6" },
  },
  {
    id: "forest",
    label: "Forest",
    colors: { color1: "#56ab2f", color2: "#a8e063", color3: "#11998e" },
  },
  {
    id: "neon",
    label: "Neon",
    colors: { color1: "#f72585", color2: "#7209b7", color3: "#4cc9f0" },
  },
] as const;
