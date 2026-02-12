import React, { useEffect, useRef } from "react";
import type { LettermorphParams } from "./types";
import { vertexShader, fragmentShader } from "./shaderSource";

interface Props {
  params: LettermorphParams;
}

function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [
    ((bigint >> 16) & 255) / 255,
    ((bigint >> 8) & 255) / 255,
    (bigint & 255) / 255,
  ];
}

export const LettermorphCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const propsRef = useRef(params);

  useEffect(() => {
    propsRef.current = params;
  }, [params]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    gl.getExtension("OES_standard_derivatives");

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vertexShader, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Fullscreen quad
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uLetterDuration = gl.getUniformLocation(program, "uLetterDuration");
    const uStrokeW = gl.getUniformLocation(program, "uStrokeW");
    const uLiquidMix = gl.getUniformLocation(program, "uLiquidMix");
    const uLiquidK = gl.getUniformLocation(program, "uLiquidK");
    const uBloat = gl.getUniformLocation(program, "uBloat");
    const uGlowSharp = gl.getUniformLocation(program, "uGlowSharp");
    const uEdgeSharp = gl.getUniformLocation(program, "uEdgeSharp");
    const uInkColorA = gl.getUniformLocation(program, "uInkColorA");
    const uInkColorB = gl.getUniformLocation(program, "uInkColorB");
    const uBgColorA = gl.getUniformLocation(program, "uBgColorA");
    const uBgColorB = gl.getUniformLocation(program, "uBgColorB");
    const uVignette = gl.getUniformLocation(program, "uVignette");
    const uGrain = gl.getUniformLocation(program, "uGrain");

    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;

      const dpr = window.devicePixelRatio || 1;
      const dw = canvas.clientWidth * dpr;
      const dh = canvas.clientHeight * dpr;
      if (canvas.width !== dw || canvas.height !== dh) {
        canvas.width = dw;
        canvas.height = dh;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      const t = (Date.now() - startTimeRef.current) / 1000.0;
      const p = propsRef.current;

      gl.uniform1f(uTime, t);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uLetterDuration, p.letterDuration);
      gl.uniform1f(uStrokeW, p.strokeWidth);
      gl.uniform1f(uLiquidMix, p.liquidMix);
      gl.uniform1f(uLiquidK, p.liquidK);
      gl.uniform1f(uBloat, p.bloat);
      gl.uniform1f(uGlowSharp, p.glowSharp);
      gl.uniform1f(uEdgeSharp, p.edgeSharp);

      const inkA = hexToRgb(p.inkColorA);
      const inkB = hexToRgb(p.inkColorB);
      const bgA = hexToRgb(p.bgColorA);
      const bgB = hexToRgb(p.bgColorB);
      gl.uniform3f(uInkColorA, inkA[0], inkA[1], inkA[2]);
      gl.uniform3f(uInkColorB, inkB[0], inkB[1], inkB[2]);
      gl.uniform3f(uBgColorA, bgA[0], bgA[1], bgA[2]);
      gl.uniform3f(uBgColorB, bgB[0], bgB[1], bgB[2]);

      gl.uniform1f(uVignette, p.vignette);
      gl.uniform1f(uGrain, p.grain);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};
