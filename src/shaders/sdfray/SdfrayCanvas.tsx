import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface SdfrayParams {
  color1: string;
  color2: string;
  shapeBlend: number;
  twist: number;
  speed: number;
  lightX: number;
  lightY: number;
  lightZ: number;
  ambient: number;
  shininess: number;
  cameraZ: number;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [
    ((bigint >> 16) & 255) / 255,
    ((bigint >> 8) & 255) / 255,
    (bigint & 255) / 255,
  ];
};

export const SdfrayCanvas: React.FC<{ params: SdfrayParams }> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const propsRef = useRef(params);

  useEffect(() => {
    propsRef.current = params;
  }, [params]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
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
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    // Full-screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const u = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      color1: gl.getUniformLocation(program, "u_color1"),
      color2: gl.getUniformLocation(program, "u_color2"),
      shapeBlend: gl.getUniformLocation(program, "u_shapeBlend"),
      twist: gl.getUniformLocation(program, "u_twist"),
      lightPos: gl.getUniformLocation(program, "u_lightPos"),
      ambient: gl.getUniformLocation(program, "u_ambient"),
      shininess: gl.getUniformLocation(program, "u_shininess"),
      cameraZ: gl.getUniformLocation(program, "u_cameraZ"),
    };

    let startTime = performance.now();
    let logicalTime = 0;
    let isRunning = true;

    const loop = (now: number) => {
      if (!isRunning) return;
      const p = propsRef.current;

      // Time with speed
      const dt = (now - startTime) * 0.001;
      startTime = now;
      logicalTime += dt * p.speed;

      // Resize
      const dpr = window.devicePixelRatio || 1;
      const displayW = canvas.clientWidth * dpr;
      const displayH = canvas.clientHeight * dpr;
      if (canvas.width !== displayW || canvas.height !== displayH) {
        canvas.width = displayW;
        canvas.height = displayH;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.useProgram(program);

      // Set uniforms
      gl.uniform2f(u.resolution, canvas.width, canvas.height);
      gl.uniform1f(u.time, logicalTime);

      const c1 = hexToRgb(p.color1);
      gl.uniform3f(u.color1, c1[0], c1[1], c1[2]);
      const c2 = hexToRgb(p.color2);
      gl.uniform3f(u.color2, c2[0], c2[1], c2[2]);

      gl.uniform1f(u.shapeBlend, p.shapeBlend);
      gl.uniform1f(u.twist, p.twist);
      gl.uniform3f(u.lightPos, p.lightX, p.lightY, p.lightZ);
      gl.uniform1f(u.ambient, p.ambient);
      gl.uniform1f(u.shininess, p.shininess);
      gl.uniform1f(u.cameraZ, p.cameraZ);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block rounded-2xl" />;
};
