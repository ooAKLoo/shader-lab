import React from "react";

export type ShaderType = "vortex" | "lumina" | "isometric" | "flowfield" | "tunnel" | "aura" | "neon" | "fluid" | "neuro" | "neonwave" | "neontext" | "aurora" | "hypergrid" | "jellyfish" | "trainjourney" | "horizon";

interface ShaderEntry {
  id: ShaderType;
  name: string;
  description: string;
  technique: string;
}

const SHADERS: ShaderEntry[] = [
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
];

interface SidebarProps {
  active: ShaderType;
  onSelect: (id: ShaderType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ active, onSelect }) => {
  return (
    <div className="w-[200px] flex-shrink-0 flex flex-col h-full py-4 px-3">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-5">
        <div className="w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="3" stroke="white" strokeWidth="1.5" />
            <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>
        <span className="text-[12px] font-semibold text-neutral-700">Shader Lab</span>
      </div>

      {/* Section label */}
      <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide px-2 mb-2">
        Shaders
      </div>

      {/* Shader list */}
      <div className="flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto">
        {SHADERS.map((shader) => (
          <button
            key={shader.id}
            onClick={() => onSelect(shader.id)}
            className={`w-full flex flex-col items-start px-3 py-2.5 rounded-xl text-left transition-all ${
              active === shader.id
                ? "bg-neutral-800 text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <span className="text-[11px] font-medium">{shader.name}</span>
            <span
              className={`text-[9px] mt-0.5 ${
                active === shader.id ? "text-neutral-400" : "text-neutral-400"
              }`}
            >
              {shader.description}
            </span>
          </button>
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-auto px-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Info
        </div>
        <div className="bg-white rounded-xl p-3">
          <div className="text-[9px] text-neutral-500 leading-relaxed">
            WebGL shader gallery with real-time parameter control. Pure fragment shader rendering.
          </div>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[8px] text-neutral-400">GPU Accelerated</span>
          </div>
        </div>
      </div>
    </div>
  );
};
