import React, { useState } from "react";
import { Sidebar, type ShaderType } from "./components/Sidebar";
import { TechModal } from "./components/TechModal";
import { shaderGuides } from "./data/shaderGuides";
import { VortexCanvas, type VortexParams } from "./shaders/vortex/VortexCanvas";
import { VortexControls } from "./shaders/vortex/VortexControls";
import { LuminaCanvas, type LuminaParams } from "./shaders/lumina/LuminaCanvas";
import { LuminaControls } from "./shaders/lumina/LuminaControls";
import { IsometricCanvas, type IsometricParams } from "./shaders/isometric/IsometricCanvas";
import { IsometricControls } from "./shaders/isometric/IsometricControls";
import { FlowFieldCanvas, type FlowFieldParams } from "./shaders/flowfield/FlowFieldCanvas";
import { FlowFieldControls } from "./shaders/flowfield/FlowFieldControls";
import { TunnelCanvas, type TunnelParams } from "./shaders/tunnel/TunnelCanvas";
import { TunnelControls } from "./shaders/tunnel/TunnelControls";
import { AuraCanvas, type AuraParams } from "./shaders/aura/AuraCanvas";
import { AuraControls } from "./shaders/aura/AuraControls";
import { NeonCanvas, type NeonParams } from "./shaders/neon/NeonCanvas";
import { NeonControls } from "./shaders/neon/NeonControls";
import { FluidCanvas, type FluidParams } from "./shaders/fluid/FluidCanvas";
import { FluidControls } from "./shaders/fluid/FluidControls";
import { NeuroCanvas, type NeuroParams } from "./shaders/neuro/NeuroCanvas";
import { NeuroControls } from "./shaders/neuro/NeuroControls";
import { NeonwaveCanvas, type NeonwaveParams } from "./shaders/neonwave/NeonwaveCanvas";
import { NeonwaveControls } from "./shaders/neonwave/NeonwaveControls";
import { NeontextCanvas, type NeontextParams } from "./shaders/neontext/NeontextCanvas";
import { NeontextControls } from "./shaders/neontext/NeontextControls";
import { AuroraCanvas, type AuroraParams } from "./shaders/aurora/AuroraCanvas";
import { AuroraControls } from "./shaders/aurora/AuroraControls";
import { HypergridCanvas, type HypergridParams } from "./shaders/hypergrid/HypergridCanvas";
import { HypergridControls } from "./shaders/hypergrid/HypergridControls";
import { JellyfishCanvas, type JellyfishParams } from "./shaders/jellyfish/JellyfishCanvas";
import { JellyfishControls } from "./shaders/jellyfish/JellyfishControls";
import { TrainjourneyCanvas, type TrainjourneyParams } from "./shaders/trainjourney/TrainjourneyCanvas";
import { TrainjourneyControls } from "./shaders/trainjourney/TrainjourneyControls";
import { HorizonCanvas, type HorizonParams } from "./shaders/horizon/HorizonCanvas";
import { HorizonControls } from "./shaders/horizon/HorizonControls";

const DEFAULT_VORTEX: VortexParams = {
  color1: "#8b5cf6",
  color2: "#06b6d4",
  speed: 0.0,
  density: 1.0,
  suction: 0.0,
};

const DEFAULT_LUMINA: LuminaParams = {
  speed: 0.2,
  zoom: 3.0,
  warpStrength: 4.0,
  color1: "#000d33",
  color2: "#1a664d",
  color3: "#ffcc33",
};

const DEFAULT_ISOMETRIC: IsometricParams = {
  blockSize: 1.5,
  spacing: 2.5,
  timeSpeed: 0.8,
  mouseInfluence: 1.0,
  fogStart: 40,
  fogEnd: 100,
  camDistance: 80,
};

const DEFAULT_FLOWFIELD: FlowFieldParams = {
  flowSpeed: 0.2,
  streakLength: 1.5,
  zoom: 2.5,
  turbulence: 1.2,
  gridOpacity: 0.15,
};

const DEFAULT_TUNNEL: TunnelParams = {
  speed: 0.5,
  twist: 1.0,
  noise: 1.0,
  width: 4.0,
  color1: "#4f46e5",
  color2: "#06b6d4",
};

const DEFAULT_AURA: AuraParams = {
  speed: 0.3,
  scale: 1.0,
  density: 1.0,
  brightness: 1.0,
  color1: "#3b0764",
  color2: "#06b6d4",
};

const DEFAULT_NEON: NeonParams = {
  speed: 1.0,
  scale: 1.0,
  hueShift: 0.0,
  saturation: 0.7,
  brightness: 1.0,
  warpStrength: 0.3,
};

const DEFAULT_FLUID: FluidParams = {
  speed: 1.0,
  scale: 1.2,
  hueSpeed: 1.0,
  saturation: 0.7,
  brightness: 0.8,
  contrast: 1.2,
};

const DEFAULT_NEURO: NeuroParams = {
  speed: 0.2,
  zoom: 3.0,
  colorShift: 0.0,
  complexity: 1.0,
  contrast: 1.0,
};

const DEFAULT_NEONWAVE: NeonwaveParams = {
  speed: 0.5,
  height: 2.0,
  smoothness: 1.0,
  color1: "#2266ff",
  color2: "#9933ff",
};

const DEFAULT_NEONTEXT: NeontextParams = {
  textGlow: 5.0,
  textScale: 1.0,
  terrainBrightness: 0.5,
};

const DEFAULT_AURORA: AuroraParams = {
  waveSpeed: 0.5,
  colorShift: 1.0,
  opacity: 0.4,
};

const DEFAULT_HYPERGRID: HypergridParams = {
  speed: 1.0,
  glow: 1.0,
  gridSize: 1.0,
  color1: "#4040ff",
  color2: "#40a0ff",
};

const DEFAULT_JELLYFISH: JellyfishParams = {
  speed: 1.0,
  gamma: 2.0,
  accent1: "#ff1a80",
  accent2: "#ff801a",
  bg1: "#1a80ff",
  bg2: "#1a8099",
};

const DEFAULT_TRAINJOURNEY: TrainjourneyParams = {
  speed: 1.0,
  grain: 0.1,
  vignette: 0.5,
};

const DEFAULT_HORIZON: HorizonParams = {
  speed: 1.0,
  layers: 12,
  depth: 1.0,
  turbulence: 1.0,
  grain: 0.05,
  vignette: 0.5,
  color1: "#c44b32",
  color2: "#f0a050",
  color3: "#9ab4ff",
};

interface ShaderMeta {
  name: string;
  technique: string;
  credit?: { author: string; url: string; date: string };
}

const SHADER_META: Record<ShaderType, ShaderMeta> = {
  vortex: { name: "Vortex Portal", technique: "Simplex Noise + FBM + Polar Domain Warping" },
  lumina: { name: "Lumina Flow", technique: "Perlin Noise + Multi-Layer Domain Warping" },
  isometric: { name: "Isometric Flow", technique: "DDA Raymarching + AABB Collision + Procedural Animation" },
  flowfield: { name: "Flow Field", technique: "Curl Noise + Pseudo-LIC Advection + Procedural Heatmap" },
  tunnel: { name: "Warp Tunnel", technique: "Volumetric Raymarching + FBM Noise Displacement" },
  aura: { name: "Noise Aura", technique: "Volumetric Light Accumulation + Multi-Orb Lighting" },
  neon: { name: "Neon Noise", technique: "FBM + Domain Warping + HSV Color Mapping" },
  fluid: { name: "Fluid Flow", technique: "Double Domain Warping + FBM + HSV Gradients" },
  neuro: { name: "NeuroFlow", technique: "Simplex Noise + Hue Rotation + Dynamic Lines" },
  neonwave: {
    name: "Neonwave",
    technique: "3D Plane Stacking + FBM Terrain + HSV Gradients",
    credit: { author: "mrange", url: "https://www.shadertoy.com/view/7dyyRy", date: "2022-06-12" },
  },
  neontext: { name: "Neon Text", technique: "Sphere Raymarching + SDF Text + Neon Glow" },
  aurora: { name: "Aurora Cloudscape", technique: "Volumetric Clouds + Wave Motion + Color Gradients" },
  hypergrid: {
    name: "Hyper Grid",
    technique: "Grid Marching + Rodrigues Rotation + Glow Accumulation",
    credit: { author: "totetmatt", url: "https://www.shadertoy.com/view/lcjGWV", date: "2024-01-07" },
  },
  jellyfish: {
    name: "Luminescence",
    technique: "SDF Raymarching + Space Repetition + Volumetric Rendering",
    credit: { author: "BigWings", url: "https://www.shadertoy.com/view/MlKcDD", date: "2017-05-23" },
  },
  trainjourney: {
    name: "Train Journey",
    technique: "Multi-Layer Parallax + FBM Terrain + Procedural SDF",
    credit: { author: "mdb", url: "https://www.shadertoy.com/view/Ndc3zl", date: "2021-08-31" },
  },
  horizon: {
    name: "Horizon",
    technique: "Parametric Parallax + FBM Terrain + Depth Color Gradient",
  },
};

const App: React.FC = () => {
  const [activeShader, setActiveShader] = useState<ShaderType>("vortex");
  const [vortexParams, setVortexParams] = useState<VortexParams>(DEFAULT_VORTEX);
  const [luminaParams, setLuminaParams] = useState<LuminaParams>(DEFAULT_LUMINA);
  const [isometricParams, setIsometricParams] = useState<IsometricParams>(DEFAULT_ISOMETRIC);
  const [flowfieldParams, setFlowfieldParams] = useState<FlowFieldParams>(DEFAULT_FLOWFIELD);
  const [tunnelParams, setTunnelParams] = useState<TunnelParams>(DEFAULT_TUNNEL);
  const [auraParams, setAuraParams] = useState<AuraParams>(DEFAULT_AURA);
  const [neonParams, setNeonParams] = useState<NeonParams>(DEFAULT_NEON);
  const [fluidParams, setFluidParams] = useState<FluidParams>(DEFAULT_FLUID);
  const [neuroParams, setNeuroParams] = useState<NeuroParams>(DEFAULT_NEURO);
  const [neonwaveParams, setNeonwaveParams] = useState<NeonwaveParams>(DEFAULT_NEONWAVE);
  const [neontextParams, setNeontextParams] = useState<NeontextParams>(DEFAULT_NEONTEXT);
  const [auroraParams, setAuroraParams] = useState<AuroraParams>(DEFAULT_AURORA);
  const [hypergridParams, setHypergridParams] = useState<HypergridParams>(DEFAULT_HYPERGRID);
  const [jellyfishParams, setJellyfishParams] = useState<JellyfishParams>(DEFAULT_JELLYFISH);
  const [trainjourneyParams, setTrainjourneyParams] = useState<TrainjourneyParams>(DEFAULT_TRAINJOURNEY);
  const [horizonParams, setHorizonParams] = useState<HorizonParams>(DEFAULT_HORIZON);
  const [showTechModal, setShowTechModal] = useState(false);

  const meta = SHADER_META[activeShader];

  return (
    <div className="h-screen bg-[#f8f8f8] flex p-3 gap-3">
      {/* Sidebar */}
      <Sidebar active={activeShader} onSelect={setActiveShader} />

      {/* Main Panel */}
      <div className="flex-1 bg-white rounded-3xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-3 flex-shrink-0">
          <span className="text-[13px] font-medium text-neutral-700">{meta.name}</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400">
            {meta.technique}
          </span>

          {meta.credit && (
            <a
              href={meta.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              by {meta.credit.author} · {meta.credit.date}
            </a>
          )}

          <div className="flex-1" />

          {/* Tech Guide button */}
          <button
            onClick={() => setShowTechModal(true)}
            className="w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.17 7 5.5 6.5 5.75C6.25 5.88 6 6.08 6 6.4V6.75"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="6" cy="8.25" r="0.5" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Content: Preview + Controls */}
        <div className="flex-1 flex min-h-0 px-5 pb-5 gap-4">
          {/* Left: Shader Canvas (60%) */}
          <div className="flex-[3] flex flex-col min-h-0">
            <div className="bg-neutral-100 rounded-2xl flex-1 overflow-hidden">
              {activeShader === "vortex" && <VortexCanvas params={vortexParams} />}
              {activeShader === "lumina" && <LuminaCanvas params={luminaParams} />}
              {activeShader === "isometric" && <IsometricCanvas params={isometricParams} />}
              {activeShader === "flowfield" && <FlowFieldCanvas params={flowfieldParams} />}
              {activeShader === "tunnel" && <TunnelCanvas params={tunnelParams} />}
              {activeShader === "aura" && <AuraCanvas params={auraParams} />}
              {activeShader === "neon" && <NeonCanvas params={neonParams} />}
              {activeShader === "fluid" && <FluidCanvas params={fluidParams} />}
              {activeShader === "neuro" && <NeuroCanvas params={neuroParams} />}
              {activeShader === "neonwave" && <NeonwaveCanvas params={neonwaveParams} />}
              {activeShader === "neontext" && <NeontextCanvas params={neontextParams} />}
              {activeShader === "aurora" && <AuroraCanvas params={auroraParams} />}
              {activeShader === "hypergrid" && <HypergridCanvas params={hypergridParams} />}
              {activeShader === "jellyfish" && <JellyfishCanvas params={jellyfishParams} />}
              {activeShader === "trainjourney" && <TrainjourneyCanvas params={trainjourneyParams} />}
              {activeShader === "horizon" && <HorizonCanvas params={horizonParams} />}
            </div>
          </div>

          {/* Right: Control Panel (40%) */}
          <div className="flex-[2] flex flex-col min-h-0">
            <div className="h-full bg-neutral-100 rounded-2xl flex flex-col overflow-hidden">
              <div className="p-3 overflow-y-auto flex-1 min-h-0">
                {activeShader === "vortex" && (
                  <VortexControls params={vortexParams} onChange={setVortexParams} />
                )}
                {activeShader === "lumina" && (
                  <LuminaControls params={luminaParams} onChange={setLuminaParams} />
                )}
                {activeShader === "isometric" && (
                  <IsometricControls params={isometricParams} onChange={setIsometricParams} />
                )}
                {activeShader === "flowfield" && (
                  <FlowFieldControls params={flowfieldParams} onChange={setFlowfieldParams} />
                )}
                {activeShader === "tunnel" && (
                  <TunnelControls params={tunnelParams} onChange={setTunnelParams} />
                )}
                {activeShader === "aura" && (
                  <AuraControls params={auraParams} onChange={setAuraParams} />
                )}
                {activeShader === "neon" && (
                  <NeonControls params={neonParams} onChange={setNeonParams} />
                )}
                {activeShader === "fluid" && (
                  <FluidControls params={fluidParams} onChange={setFluidParams} />
                )}
                {activeShader === "neuro" && (
                  <NeuroControls params={neuroParams} onChange={setNeuroParams} />
                )}
                {activeShader === "neonwave" && (
                  <NeonwaveControls params={neonwaveParams} onChange={setNeonwaveParams} />
                )}
                {activeShader === "neontext" && (
                  <NeontextControls params={neontextParams} onChange={setNeontextParams} />
                )}
                {activeShader === "aurora" && (
                  <AuroraControls params={auroraParams} onChange={setAuroraParams} />
                )}
                {activeShader === "hypergrid" && (
                  <HypergridControls params={hypergridParams} onChange={setHypergridParams} />
                )}
                {activeShader === "jellyfish" && (
                  <JellyfishControls params={jellyfishParams} onChange={setJellyfishParams} />
                )}
                {activeShader === "trainjourney" && (
                  <TrainjourneyControls params={trainjourneyParams} onChange={setTrainjourneyParams} />
                )}
                {activeShader === "horizon" && (
                  <HorizonControls params={horizonParams} onChange={setHorizonParams} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Guide Modal */}
      {showTechModal && (
        <TechModal
          guide={shaderGuides[activeShader]}
          onClose={() => setShowTechModal(false)}
        />
      )}
    </div>
  );
};

export default App;
