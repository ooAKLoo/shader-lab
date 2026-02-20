export type DemoType = "gooey" | "parallax" | "frosted" | "scrollformations" | "letteranimations" | "gradienttopography" | "draggablegrid";

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
    id: "scrollformations",
    name: "Scroll Formations",
    description: "Scroll-driven grid layout animations",
    author: "codrops",
    url: "https://github.com/codrops/OnScrollLayoutFormations",
  },
  {
    id: "letteranimations",
    name: "Letter Animations",
    description: "SVG shape decorative letter effects",
    author: "codrops",
    url: "https://github.com/codrops/DecorativeLetterAnimations",
  },
  {
    id: "gradienttopography",
    name: "Gradient Topography",
    description: "SVG blob morphing gradient menu",
    author: "codrops",
    url: "https://github.com/codrops/GradientTopographyAnimation",
  },
  {
    id: "draggablegrid",
    name: "Draggable Grid",
    description: "GSAP Draggable + Flip product grid",
    author: "joffreysp",
    url: "https://github.com/joffreysp/draggable-grid",
  },
];
