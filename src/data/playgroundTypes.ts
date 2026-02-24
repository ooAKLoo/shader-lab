export type PlaygroundType = "echotrace" | "spotlight" | "textmask" | "flip" | "framers" | "squares" | "textparticle" | "pathmorph" | "fibonacci";

export interface PlaygroundEntry {
  id: PlaygroundType;
  name: string;
  description: string;
}

export const PLAYGROUNDS: PlaygroundEntry[] = [
  {
    id: "echotrace",
    name: "EchoTrace",
    description: "Psychedelic motion trail",
  },
  {
    id: "spotlight",
    name: "Spotlight",
    description: "Cursor spotlight effect",
  },
  {
    id: "textmask",
    name: "Text Mask",
    description: "SVG mask bubble reveal",
  },
  {
    id: "flip",
    name: "FLIP",
    description: "GSAP Flip layout animation",
  },
  {
    id: "framers",
    name: "Framers",
    description: "Splitting.js stagger text animation",
  },
  {
    id: "squares",
    name: "Squares",
    description: "Generative normal-distributed art",
  },
  {
    id: "textparticle",
    name: "Text Particle",
    description: "Canvas particle text morphing",
  },
  {
    id: "pathmorph",
    name: "Path Morph",
    description: "SVG path text morphing",
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    description: "Phyllotaxis spiral pattern",
  },
];
