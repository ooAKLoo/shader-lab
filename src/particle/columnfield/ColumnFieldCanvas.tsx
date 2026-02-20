import React from "react";
import { Canvas } from "@react-three/fiber";
import { ColumnFieldScene } from "./ColumnFieldScene";
import { PALETTES } from "./presets";
import type { ColumnFieldParams } from "./types";
import type { Dotgrid2AudioAnalysis } from "../dotgrid2/shared/types";

interface Props {
  params: ColumnFieldParams;
  analysisRef: React.RefObject<Dotgrid2AudioAnalysis>;
  analyserNodeRef: React.RefObject<AnalyserNode | null>;
}

export const ColumnFieldCanvas: React.FC<Props> = ({ params, analysisRef, analyserNodeRef }) => {
  const pal = PALETTES[params.palette] || PALETTES.cosmic;

  return (
    <div className="w-full h-full" style={{ background: pal.bg }}>
      <Canvas
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
      >
        <ColumnFieldScene
          params={params}
          analysisRef={analysisRef}
          analyserNodeRef={analyserNodeRef}
        />
      </Canvas>
    </div>
  );
};
