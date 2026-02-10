import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface HorizonParams {
  speed: number;
  layers: number;
  depth: number;
  turbulence: number;
  grain: number;
  vignette: number;
  color1: string;
  color2: string;
  color3: string;
}

const hexToRgb = (hex: string | undefined): [number, number, number] => {
  if (!hex) return [0, 0, 0];
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b];
};

export const HorizonCanvas: React.FC<{ params: HorizonParams }> = ({ params }) => {
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

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uSpeed = gl.getUniformLocation(program, "uSpeed");
    const uLayers = gl.getUniformLocation(program, "uLayers");
    const uDepth = gl.getUniformLocation(program, "uDepth");
    const uTurbulence = gl.getUniformLocation(program, "uTurbulence");
    const uGrain = gl.getUniformLocation(program, "uGrain");
    const uVignette = gl.getUniformLocation(program, "uVignette");
    const uColor1 = gl.getUniformLocation(program, "uColor1");
    const uColor2 = gl.getUniformLocation(program, "uColor2");
    const uColor3 = gl.getUniformLocation(program, "uColor3");

    let isRunning = true;
    const loop = () => {
      if (!isRunning) return;
      const dw = canvas.clientWidth * window.devicePixelRatio;
      const dh = canvas.clientHeight * window.devicePixelRatio;
      if (canvas.width !== dw || canvas.height !== dh) {
        canvas.width = dw;
        canvas.height = dh;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      const currentTime = (Date.now() - startTimeRef.current) / 1000.0;
      const p = propsRef.current;
      const c1 = hexToRgb(p.color1);
      const c2 = hexToRgb(p.color2);
      const c3 = hexToRgb(p.color3);

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, currentTime);
      gl.uniform1f(uSpeed, p.speed);
      gl.uniform1f(uLayers, p.layers);
      gl.uniform1f(uDepth, p.depth);
      gl.uniform1f(uTurbulence, p.turbulence);
      gl.uniform1f(uGrain, p.grain);
      gl.uniform1f(uVignette, p.vignette);
      gl.uniform3f(uColor1, c1[0], c1[1], c1[2]);
      gl.uniform3f(uColor2, c2[0], c2[1], c2[2]);
      gl.uniform3f(uColor3, c3[0], c3[1], c3[2]);

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

  return <canvas ref={canvasRef} className="w-full h-full block rounded-2xl" />;
};
