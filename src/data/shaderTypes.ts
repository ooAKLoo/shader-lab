export type ShaderType =
  | "vortex"
  | "lumina"
  | "isometric"
  | "flowfield"
  | "tunnel"
  | "aura"
  | "neon"
  | "fluid"
  | "neuro"
  | "neonwave"
  | "neontext"
  | "aurora"
  | "hypergrid"
  | "jellyfish"
  | "trainjourney"
  | "horizon"
  | "sdfray";

export type Category = "shaders" | "playground" | "demos" | "particle" | "generative";

export interface ShaderEntry {
  id: ShaderType;
  name: string;
  description: string;
  technique: string;
}

export const SHADERS: ShaderEntry[] = [
  {
    id: "vortex",
    name: "Vortex Portal",
    description: "Spiral energy field",
    technique: "FBM + Polar Warp",
  },
  {
    id: "lumina",
    name: "Lumina Flow",
    description: "Domain warping fluid",
    technique: "Multi-layer FBM",
  },
  {
    id: "isometric",
    name: "Isometric Flow",
    description: "Dynamic block grid",
    technique: "DDA Raymarching",
  },
  {
    id: "flowfield",
    name: "Flow Field",
    description: "Vector field visualization",
    technique: "Curl Noise + LIC",
  },
  {
    id: "tunnel",
    name: "Warp Tunnel",
    description: "Volumetric wormhole",
    technique: "Raymarching + FBM",
  },
  {
    id: "aura",
    name: "Noise Aura",
    description: "Volumetric nebula",
    technique: "Vol. Accumulation",
  },
  {
    id: "neon",
    name: "Neon Noise",
    description: "Psychedelic color flow",
    technique: "FBM + Domain Warp",
  },
  {
    id: "fluid",
    name: "Fluid Flow",
    description: "Double-warped liquid",
    technique: "Dual Domain Warp",
  },
  {
    id: "neuro",
    name: "NeuroFlow",
    description: "Cyberpunk energy lines",
    technique: "Simplex + Hue Shift",
  },
  {
    id: "neonwave",
    name: "Neonwave",
    description: "Neon terrain flight",
    technique: "Plane Stacking + FBM",
  },
  {
    id: "neontext",
    name: "Neon Text",
    description: "SDF text on sphere",
    technique: "SDF + Raymarching",
  },
  {
    id: "aurora",
    name: "Aurora Cloudscape",
    description: "Volumetric aurora",
    technique: "Soft Clouds + Waves",
  },
  {
    id: "hypergrid",
    name: "Hyper Grid",
    description: "Warp speed grid cells",
    technique: "Grid March + Rotation",
  },
  {
    id: "jellyfish",
    name: "Luminescence",
    description: "Bioluminescent jellyfish",
    technique: "SDF + Volumetric",
  },
  {
    id: "trainjourney",
    name: "Train Journey",
    description: "Parallax mountain train",
    technique: "FBM + Parallax Layers",
  },
  {
    id: "horizon",
    name: "Horizon",
    description: "Parallax mountain scape",
    technique: "FBM + Depth Parallax",
  },
  {
    id: "sdfray",
    name: "SDF Raymorph",
    description: "SDF morphing solid",
    technique: "SDF + Phong Lighting",
  },
];
