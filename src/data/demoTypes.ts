export type DemoType = "gooey" | "parallax" | "frosted" | "videotext";

export interface DemoEntry {
  id: DemoType;
  name: string;
  description: string;
  author: string;
  url: string;
}

export const DEMOS: DemoEntry[] = [
  {
    id: "gooey",
    name: "Gooey Overlay",
    description: "Scroll-driven liquid drops",
    author: "ksenia-k",
    url: "https://codepen.io/ksenia-k/pen/NWmMxLg",
  },
  {
    id: "parallax",
    name: "Parallax Scroll",
    description: "SVG landscape parallax",
    author: "isladjan",
    url: "https://codepen.io/isladjan/pen/abdyPBw",
  },
  {
    id: "frosted",
    name: "Frosted Glass",
    description: "CSS backdrop-filter cards",
    author: "lessthanthree",
    url: "https://codepen.io/lessthanthree/pen/LENwGyZ",
  },
  {
    id: "videotext",
    name: "Video Text",
    description: "SVG filter video text fill",
    author: "thebabydino",
    url: "https://codepen.io/thebabydino/pen/RNBwBYe",
  },
];
