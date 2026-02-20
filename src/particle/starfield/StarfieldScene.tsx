import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import type { StarfieldParams } from "./types";
import { PALETTES } from "./constants";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDepth;
  attribute vec3 aColor;
  attribute float aSize;
  varying vec4 vColor;
  void main() {
    vColor = vec4(aColor, 1.0);
    vec3 p = position;
    p.z = -uDepth * 0.5 + mod(p.z + uTime, uDepth);
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec4 vColor;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float alpha = 1.0 - smoothstep(0.3, 0.5, d);
    if (alpha < 0.01) discard;
    gl_FragColor = vColor * alpha;
  }
`;

interface Props {
  params: StarfieldParams;
  warpActiveRef: React.RefObject<boolean>;
}

function StarPoints({ params, warpActiveRef }: Props) {
  const pointsRef = useRef<THREE.Points>(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  // Lerp-smoothed time coefficient (1 = normal, warpMultiplier = warping)
  const timeCoefRef = useRef(1);

  const { starCount, spread, depth, palette, minSize, maxSize } = params;

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const col = new Float32Array(starCount * 3);
    const sz = new Float32Array(starCount);
    const pal = PALETTES[palette];
    const color = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * depth;
      color.set(pal[Math.floor(Math.random() * pal.length)]);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
      sz[i] = minSize + Math.random() * (maxSize - minSize);
    }

    return { positions: pos, colors: col, sizes: sz };
  }, [starCount, spread, depth, palette, minSize, maxSize]);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uDepth: { value: depth },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });
  }, []);

  useEffect(() => {
    shaderMaterial.uniforms.uDepth.value = depth;
  }, [depth, shaderMaterial]);

  // Mouse tilt
  const { gl } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [gl]);

  useFrame((_, delta) => {
    const cfg = paramsRef.current;

    // Lerp timeCoef toward target (warp or normal)
    const targetCoef = warpActiveRef.current ? cfg.warpMultiplier : 1;
    timeCoefRef.current += (targetCoef - timeCoefRef.current) * 0.02;

    shaderMaterial.uniforms.uTime.value += delta * cfg.speed * 4 * timeCoefRef.current;

    const points = pointsRef.current;
    if (points) {
      const da = cfg.tiltSensitivity;
      points.rotation.x += (mouseRef.current.y * da - points.rotation.x) * 0.02;
      points.rotation.y += (-mouseRef.current.x * da - points.rotation.y) * 0.02;
    }
  });

  useEffect(() => {
    return () => {
      shaderMaterial.dispose();
    };
  }, [shaderMaterial]);

  return (
    <points ref={pointsRef} position={[0, 0, -depth / 2]} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
    </points>
  );
}

export const StarfieldScene: React.FC<Props> = ({ params, warpActiveRef }) => {
  return (
    <>
      <StarPoints params={params} warpActiveRef={warpActiveRef} />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={params.bloomStrength}
          luminanceThreshold={params.bloomThreshold}
          luminanceSmoothing={params.bloomRadius}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
};
