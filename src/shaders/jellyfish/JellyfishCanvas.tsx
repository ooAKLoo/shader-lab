import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface JellyfishParams {
  speed: number;
  gamma: number;
  accent1: string;
  accent2: string;
  bg1: string;
  bg2: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b];
};

export const JellyfishCanvas: React.FC<{ params: JellyfishParams }> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const propsRef = useRef(params);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    propsRef.current = params;
  }, [params]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio;
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (rect.height - (e.clientY - rect.top)) * dpr;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

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
    const uMouse = gl.getUniformLocation(program, "iMouse");
    const uGamma = gl.getUniformLocation(program, "uGamma");
    const uAccent1 = gl.getUniformLocation(program, "uAccent1");
    const uAccent2 = gl.getUniformLocation(program, "uAccent2");
    const uBg1 = gl.getUniformLocation(program, "uBg1");
    const uBg2 = gl.getUniformLocation(program, "uBg2");

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
      const m = mouseRef.current;

      gl.uniform3f(uResolution, canvas.width, canvas.height, 1.0);
      gl.uniform1f(uTime, currentTime * p.speed);
      gl.uniform4f(uMouse, m.x, m.y, m.active ? 1.0 : -1.0, 0.0);
      gl.uniform1f(uGamma, p.gamma);

      const a1 = hexToRgb(p.accent1);
      const a2 = hexToRgb(p.accent2);
      const b1 = hexToRgb(p.bg1);
      const b2 = hexToRgb(p.bg2);
      gl.uniform3f(uAccent1, a1[0], a1[1], a1[2]);
      gl.uniform3f(uAccent2, a2[0], a2[1], a2[2]);
      gl.uniform3f(uBg1, b1[0], b1[1], b1[2]);
      gl.uniform3f(uBg2, b2[0], b2[1], b2[2]);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(loop);
    };

    loop();
    return () => {
      isRunning = false;
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block rounded-2xl" />;
};
