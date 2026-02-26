import React from "react";
import type { Category } from "./shaderTypes";
import { VortexCanvas } from "../shaders/vortex/VortexCanvas";
import { LuminaCanvas } from "../shaders/lumina/LuminaCanvas";
import { IsometricCanvas } from "../shaders/isometric/IsometricCanvas";
import { FlowFieldCanvas } from "../shaders/flowfield/FlowFieldCanvas";
import { TunnelCanvas } from "../shaders/tunnel/TunnelCanvas";
import { AuraCanvas } from "../shaders/aura/AuraCanvas";
import { NeonCanvas } from "../shaders/neon/NeonCanvas";
import { FluidCanvas } from "../shaders/fluid/FluidCanvas";
import { NeuroCanvas } from "../shaders/neuro/NeuroCanvas";
import { NeonwaveCanvas } from "../shaders/neonwave/NeonwaveCanvas";
import { NeontextCanvas } from "../shaders/neontext/NeontextCanvas";
import { AuroraCanvas } from "../shaders/aurora/AuroraCanvas";
import { HypergridCanvas } from "../shaders/hypergrid/HypergridCanvas";
import { JellyfishCanvas } from "../shaders/jellyfish/JellyfishCanvas";
import { TrainjourneyCanvas } from "../shaders/trainjourney/TrainjourneyCanvas";
import { HorizonCanvas } from "../shaders/horizon/HorizonCanvas";
import { SdfrayCanvas } from "../shaders/sdfray/SdfrayCanvas";
import { DotscapeCanvas } from "../shaders/dotscape/DotscapeCanvas";

export interface EffectEntry {
  category: Category;
  id: string;
  name: string;
  render: () => React.ReactNode;
}

/**
 * Maps glossary display names → canvas component + navigation info.
 * All defaults are inlined to keep the registry self-contained.
 */
export const EFFECT_REGISTRY: Record<string, EffectEntry> = {
  Vortex: {
    category: "shaders",
    id: "vortex",
    name: "Vortex Portal",
    render: () => (
      <VortexCanvas
        params={{
          color1: "#8b5cf6",
          color2: "#06b6d4",
          speed: 0.0,
          density: 1.0,
          suction: 0.0,
        }}
      />
    ),
  },
  Lumina: {
    category: "shaders",
    id: "lumina",
    name: "Lumina Flow",
    render: () => (
      <LuminaCanvas
        params={{
          speed: 0.2,
          zoom: 3.0,
          warpStrength: 4.0,
          color1: "#000d33",
          color2: "#1a664d",
          color3: "#ffcc33",
        }}
      />
    ),
  },
  Isometric: {
    category: "shaders",
    id: "isometric",
    name: "Isometric Flow",
    render: () => (
      <IsometricCanvas
        params={{
          blockSize: 1.5,
          spacing: 2.5,
          timeSpeed: 0.8,
          mouseInfluence: 1.0,
          fogStart: 40,
          fogEnd: 100,
          camDistance: 80,
        }}
      />
    ),
  },
  "Flow Field": {
    category: "shaders",
    id: "flowfield",
    name: "Flow Field",
    render: () => (
      <FlowFieldCanvas
        params={{
          flowSpeed: 0.2,
          streakLength: 1.5,
          zoom: 2.5,
          turbulence: 1.2,
          gridOpacity: 0.15,
        }}
      />
    ),
  },
  Tunnel: {
    category: "shaders",
    id: "tunnel",
    name: "Warp Tunnel",
    render: () => (
      <TunnelCanvas
        params={{
          speed: 0.5,
          twist: 1.0,
          noise: 1.0,
          width: 4.0,
          color1: "#4f46e5",
          color2: "#06b6d4",
        }}
      />
    ),
  },
  "Noise Aura": {
    category: "shaders",
    id: "aura",
    name: "Noise Aura",
    render: () => (
      <AuraCanvas
        params={{
          speed: 0.3,
          scale: 1.0,
          density: 1.0,
          brightness: 1.0,
          color1: "#3b0764",
          color2: "#06b6d4",
        }}
      />
    ),
  },
  Neon: {
    category: "shaders",
    id: "neon",
    name: "Neon Noise",
    render: () => (
      <NeonCanvas
        params={{
          speed: 1.0,
          scale: 1.0,
          hueShift: 0.0,
          saturation: 0.7,
          brightness: 1.0,
          warpStrength: 0.3,
        }}
      />
    ),
  },
  Fluid: {
    category: "shaders",
    id: "fluid",
    name: "Fluid Flow",
    render: () => (
      <FluidCanvas
        params={{
          speed: 1.0,
          scale: 1.2,
          hueSpeed: 1.0,
          saturation: 0.7,
          brightness: 0.8,
          contrast: 1.2,
        }}
      />
    ),
  },
  NeuroFlow: {
    category: "shaders",
    id: "neuro",
    name: "NeuroFlow",
    render: () => (
      <NeuroCanvas
        params={{
          speed: 0.2,
          zoom: 3.0,
          colorShift: 0.0,
          complexity: 1.0,
          contrast: 1.0,
        }}
      />
    ),
  },
  Neonwave: {
    category: "shaders",
    id: "neonwave",
    name: "Neonwave",
    render: () => (
      <NeonwaveCanvas
        params={{
          speed: 0.5,
          height: 2.0,
          smoothness: 1.0,
          color1: "#2266ff",
          color2: "#9933ff",
        }}
      />
    ),
  },
  "Neon Text": {
    category: "shaders",
    id: "neontext",
    name: "Neon Text",
    render: () => (
      <NeontextCanvas
        params={{ textGlow: 5.0, textScale: 1.0, terrainBrightness: 0.5 }}
      />
    ),
  },
  Aurora: {
    category: "shaders",
    id: "aurora",
    name: "Aurora Cloudscape",
    render: () => (
      <AuroraCanvas
        params={{ waveSpeed: 0.5, colorShift: 1.0, opacity: 0.4 }}
      />
    ),
  },
  "Hyper Grid": {
    category: "shaders",
    id: "hypergrid",
    name: "Hyper Grid",
    render: () => (
      <HypergridCanvas
        params={{
          speed: 1.0,
          glow: 1.0,
          gridSize: 1.0,
          color1: "#4040ff",
          color2: "#40a0ff",
        }}
      />
    ),
  },
  Luminescence: {
    category: "shaders",
    id: "jellyfish",
    name: "Luminescence",
    render: () => (
      <JellyfishCanvas
        params={{
          speed: 1.0,
          gamma: 2.0,
          accent1: "#ff1a80",
          accent2: "#ff801a",
          bg1: "#1a80ff",
          bg2: "#1a8099",
        }}
      />
    ),
  },
  "Train Journey": {
    category: "shaders",
    id: "trainjourney",
    name: "Train Journey",
    render: () => (
      <TrainjourneyCanvas
        params={{ speed: 1.0, grain: 0.1, vignette: 0.5 }}
      />
    ),
  },
  Horizon: {
    category: "shaders",
    id: "horizon",
    name: "Horizon",
    render: () => (
      <HorizonCanvas
        params={{
          speed: 1.0,
          layers: 12,
          depth: 1.0,
          turbulence: 1.0,
          grain: 0.05,
          vignette: 0.5,
          color1: "#c44b32",
          color2: "#f0a050",
          color3: "#9ab4ff",
        }}
      />
    ),
  },
  "SDF Raymorph": {
    category: "shaders",
    id: "sdfray",
    name: "SDF Raymorph",
    render: () => (
      <SdfrayCanvas
        params={{
          color1: "#ff2a5f",
          color2: "#00d2ff",
          shapeBlend: 0.5,
          twist: 1.5,
          speed: 1.0,
          lightX: 2.0,
          lightY: 3.0,
          lightZ: 4.0,
          ambient: 0.2,
          shininess: 64.0,
          cameraZ: 2.5,
        }}
      />
    ),
  },
  "Dot Terrain": {
    category: "shaders",
    id: "dotscape",
    name: "Dot Terrain",
    render: () => (
      <DotscapeCanvas
        params={{
          speed: 0.4,
          gridDensity: 60,
          warpStrength: 5.0,
          dotSize: 1.0,
          brightness: 1.5,
          color1: "#0a1628",
          color2: "#7db8e0",
        }}
      />
    ),
  },
};
