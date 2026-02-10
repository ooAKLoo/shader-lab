import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface FlowFieldParams {
  flowSpeed: number;
  streakLength: number;
  zoom: number;
  turbulence: number;
  gridOpacity: number;
}

export const FlowFieldCanvas: React.FC<{ params: FlowFieldParams }> = ({ params }) => {
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
    const uFlowSpeed = gl.getUniformLocation(program, "uFlowSpeed");
    const uStreakLength = gl.getUniformLocation(program, "uStreakLength");
    const uZoom = gl.getUniformLocation(program, "uZoom");
    const uTurbulence = gl.getUniformLocation(program, "uTurbulence");
    const uGridOpacity = gl.getUniformLocation(program, "uGridOpacity");

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
      gl.uniform1f(uFlowSpeed, p.flowSpeed);
      gl.uniform1f(uStreakLength, p.streakLength);
      gl.uniform1f(uZoom, p.zoom);
      gl.uniform1f(uTurbulence, p.turbulence);
      gl.uniform1f(uGridOpacity, p.gridOpacity);

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
