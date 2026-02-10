import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface IsometricParams {
  blockSize: number;
  spacing: number;
  timeSpeed: number;
  mouseInfluence: number;
  fogStart: number;
  fogEnd: number;
  camDistance: number;
}

export const IsometricCanvas: React.FC<{ params: IsometricParams }> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const propsRef = useRef(params);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    propsRef.current = params;
  }, [params]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height * 2 - 1),
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    const uMouse = gl.getUniformLocation(program, "iMouse");
    const uBlockSize = gl.getUniformLocation(program, "uBlockSize");
    const uSpacing = gl.getUniformLocation(program, "uSpacing");
    const uTimeSpeed = gl.getUniformLocation(program, "uTimeSpeed");
    const uMouseInfluence = gl.getUniformLocation(program, "uMouseInfluence");
    const uFogStart = gl.getUniformLocation(program, "uFogStart");
    const uFogEnd = gl.getUniformLocation(program, "uFogEnd");
    const uCamDistance = gl.getUniformLocation(program, "uCamDistance");

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
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uBlockSize, p.blockSize);
      gl.uniform1f(uSpacing, p.spacing);
      gl.uniform1f(uTimeSpeed, p.timeSpeed);
      gl.uniform1f(uMouseInfluence, p.mouseInfluence);
      gl.uniform1f(uFogStart, p.fogStart);
      gl.uniform1f(uFogEnd, p.fogEnd);
      gl.uniform1f(uCamDistance, p.camDistance);

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
