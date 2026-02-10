import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface NeonParams {
  speed: number;
  scale: number;
  hueShift: number;
  saturation: number;
  brightness: number;
  warpStrength: number;
}

export const NeonCanvas: React.FC<{ params: NeonParams }> = ({ params }) => {
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
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uSpeed = gl.getUniformLocation(program, "uSpeed");
    const uScale = gl.getUniformLocation(program, "uScale");
    const uHueShift = gl.getUniformLocation(program, "uHueShift");
    const uSaturation = gl.getUniformLocation(program, "uSaturation");
    const uBrightness = gl.getUniformLocation(program, "uBrightness");
    const uWarpStrength = gl.getUniformLocation(program, "uWarpStrength");

    let isRunning = true;
    const loop = () => {
      if (!isRunning) return;
      const displayWidth = canvas.clientWidth * window.devicePixelRatio;
      const displayHeight = canvas.clientHeight * window.devicePixelRatio;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      const currentTime = (Date.now() - startTimeRef.current) / 1000.0;
      const p = propsRef.current;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, currentTime);
      gl.uniform1f(uSpeed, p.speed);
      gl.uniform1f(uScale, p.scale);
      gl.uniform1f(uHueShift, p.hueShift);
      gl.uniform1f(uSaturation, p.saturation);
      gl.uniform1f(uBrightness, p.brightness);
      gl.uniform1f(uWarpStrength, p.warpStrength);

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
