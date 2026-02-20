import React, { useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { StarfieldScene } from "./StarfieldScene";
import type { StarfieldParams } from "./types";

interface Props {
  params: StarfieldParams;
}

export const StarfieldCanvas: React.FC<Props> = ({ params }) => {
  const warpActiveRef = useRef(false);

  const onEnter = useCallback(() => {
    warpActiveRef.current = true;
  }, []);
  const onLeave = useCallback(() => {
    warpActiveRef.current = false;
  }, []);

  return (
    <div className="w-full h-full relative" style={{ background: "#000000" }}>
      <Canvas
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ fov: params.fov, near: 0.1, far: 1000, position: [0, 0, 0] }}
        dpr={[1, 1.5]}
      >
        <StarfieldScene params={params} warpActiveRef={warpActiveRef} />
      </Canvas>

      {/* Warp button overlay — matches the original TroisJS demo style */}
      {params.showWarpButton && (
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[300px] h-[50px] leading-[50px] text-center text-white text-[24px]
            font-medium no-underline rounded-full border border-white/60
            bg-black/50 backdrop-blur-sm select-none
            hover:bg-white/20 hover:border-white hover:scale-105
            transition-all duration-300 cursor-pointer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Warp Speed
        </a>
      )}
    </div>
  );
};
