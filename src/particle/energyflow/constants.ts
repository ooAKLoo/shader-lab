import type { EnergyflowParams, FlowStream } from "./types";

export const DEFAULT_CONFIG: EnergyflowParams = {
  streams: [
    {
      id: "1",
      color: "#ffffff",
      lineCount: 80,
      spread: 400,
      curvature: 0.5,
      speed: 2,
      opacity: 0.6,
      width: 1.5,
      targetX: 0.7,
      targetY: 0.4,
      sourceX: -0.1,
      sourceY: 0.3,
    },
    {
      id: "2",
      color: "#ff0000",
      lineCount: 120,
      spread: 300,
      curvature: 0.3,
      speed: 3,
      opacity: 0.8,
      width: 1.2,
      targetX: 0.8,
      targetY: 0.7,
      sourceX: -0.1,
      sourceY: 0.8,
    },
  ],
  showMarkers: true,
};

export interface EnergyflowPreset {
  id: string;
  label: string;
  params: EnergyflowParams;
}

export const PRESETS: EnergyflowPreset[] = [
  {
    id: "dual-stream",
    label: "Dual Stream",
    params: { ...DEFAULT_CONFIG, showMarkers: true },
  },
  {
    id: "solar-wind",
    label: "Solar Wind",
    params: {
      streams: [
        { id: "1", color: "#ff8800", lineCount: 200, spread: 600, curvature: 0.8, speed: 4, opacity: 0.7, width: 1.0, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.2 },
        { id: "2", color: "#ffcc00", lineCount: 150, spread: 500, curvature: 0.4, speed: 3, opacity: 0.5, width: 0.8, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.5 },
        { id: "3", color: "#ff4400", lineCount: 100, spread: 400, curvature: 1.2, speed: 2, opacity: 0.6, width: 1.2, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.8 },
      ],
    },
  },
  {
    id: "neural-net",
    label: "Neural",
    params: {
      streams: [
        { id: "1", color: "#00ffaa", lineCount: 60, spread: 200, curvature: 0.3, speed: 2, opacity: 0.5, width: 0.8, targetX: 0.5, targetY: 0.3, sourceX: -0.1, sourceY: 0.2 },
        { id: "2", color: "#00aaff", lineCount: 60, spread: 200, curvature: -0.3, speed: 2, opacity: 0.5, width: 0.8, targetX: 0.5, targetY: 0.7, sourceX: -0.1, sourceY: 0.8 },
        { id: "3", color: "#aa00ff", lineCount: 40, spread: 150, curvature: 0.6, speed: 3, opacity: 0.4, width: 0.6, targetX: 0.7, targetY: 0.5, sourceX: 0.5, sourceY: 0.3 },
        { id: "4", color: "#ff00aa", lineCount: 40, spread: 150, curvature: -0.6, speed: 3, opacity: 0.4, width: 0.6, targetX: 0.7, targetY: 0.5, sourceX: 0.5, sourceY: 0.7 },
      ],
    },
  },
  {
    id: "aurora-borealis",
    label: "Aurora",
    params: {
      streams: [
        { id: "1", color: "#00ff88", lineCount: 150, spread: 800, curvature: 1.5, speed: 1, opacity: 0.3, width: 2.0, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.0 },
        { id: "2", color: "#0088ff", lineCount: 150, spread: 800, curvature: -1.5, speed: 1, opacity: 0.3, width: 2.0, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 1.0 },
        { id: "3", color: "#ff00ff", lineCount: 80, spread: 600, curvature: 0.8, speed: 1.5, opacity: 0.2, width: 1.5, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.5 },
      ],
    },
  },
  {
    id: "blood-vessel",
    label: "Vessel",
    params: {
      streams: [
        { id: "1", color: "#cc0000", lineCount: 100, spread: 100, curvature: 0.2, speed: 5, opacity: 0.9, width: 2.0, targetX: 0.85, targetY: 0.5, sourceX: 0.15, sourceY: 0.5 },
        { id: "2", color: "#ff3333", lineCount: 60, spread: 80, curvature: 0.5, speed: 4, opacity: 0.7, width: 1.5, targetX: 0.85, targetY: 0.35, sourceX: 0.15, sourceY: 0.4 },
        { id: "3", color: "#ff6666", lineCount: 60, spread: 80, curvature: -0.5, speed: 4, opacity: 0.7, width: 1.5, targetX: 0.85, targetY: 0.65, sourceX: 0.15, sourceY: 0.6 },
      ],
    },
  },
  {
    id: "constellation",
    label: "Cosmic",
    params: {
      streams: [
        { id: "1", color: "#ffffff", lineCount: 40, spread: 300, curvature: 0.3, speed: 1, opacity: 0.4, width: 0.5, targetX: 0.3, targetY: 0.3, sourceX: -0.1, sourceY: 0.1 },
        { id: "2", color: "#aaaaff", lineCount: 40, spread: 300, curvature: -0.3, speed: 1, opacity: 0.4, width: 0.5, targetX: 0.7, targetY: 0.3, sourceX: 1.1, sourceY: 0.1 },
        { id: "3", color: "#ffaaaa", lineCount: 40, spread: 300, curvature: 0.5, speed: 1, opacity: 0.4, width: 0.5, targetX: 0.3, targetY: 0.7, sourceX: -0.1, sourceY: 0.9 },
        { id: "4", color: "#aaffaa", lineCount: 40, spread: 300, curvature: -0.5, speed: 1, opacity: 0.4, width: 0.5, targetX: 0.7, targetY: 0.7, sourceX: 1.1, sourceY: 0.9 },
        { id: "5", color: "#ffffaa", lineCount: 30, spread: 200, curvature: 0.0, speed: 2, opacity: 0.3, width: 0.8, targetX: 0.5, targetY: 0.5, sourceX: 0.5, sourceY: -0.1 },
      ],
    },
  },
  {
    id: "laser-show",
    label: "Laser",
    params: {
      streams: [
        { id: "1", color: "#ff0044", lineCount: 30, spread: 50, curvature: 0.0, speed: 8, opacity: 1.0, width: 2.5, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 0.0 },
        { id: "2", color: "#00ff44", lineCount: 30, spread: 50, curvature: 0.0, speed: 8, opacity: 1.0, width: 2.5, targetX: 0.5, targetY: 0.5, sourceX: -0.1, sourceY: 1.0 },
        { id: "3", color: "#0044ff", lineCount: 30, spread: 50, curvature: 0.0, speed: 8, opacity: 1.0, width: 2.5, targetX: 0.5, targetY: 0.5, sourceX: 1.1, sourceY: 0.0 },
        { id: "4", color: "#ff44ff", lineCount: 30, spread: 50, curvature: 0.0, speed: 8, opacity: 1.0, width: 2.5, targetX: 0.5, targetY: 0.5, sourceX: 1.1, sourceY: 1.0 },
      ],
    },
  },
  {
    id: "ocean-current",
    label: "Ocean",
    params: {
      streams: [
        { id: "1", color: "#003366", lineCount: 200, spread: 900, curvature: 1.8, speed: 1, opacity: 0.4, width: 1.8, targetX: 0.9, targetY: 0.5, sourceX: -0.1, sourceY: 0.3 },
        { id: "2", color: "#0066aa", lineCount: 150, spread: 700, curvature: 1.0, speed: 1.5, opacity: 0.3, width: 1.5, targetX: 0.85, targetY: 0.6, sourceX: -0.1, sourceY: 0.6 },
        { id: "3", color: "#00aacc", lineCount: 100, spread: 500, curvature: 0.5, speed: 2, opacity: 0.2, width: 1.0, targetX: 0.8, targetY: 0.4, sourceX: -0.1, sourceY: 0.8 },
      ],
      showMarkers: true,
    },
  },
];
