import React, { useRef, useEffect } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

export interface AuroraParams {
  waveSpeed: number;
  colorShift: number;
  opacity: number;
}

interface Props {
  params: AuroraParams;
}

export const AuroraCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }
    glRef.current = gl;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error("Fragment shader compilation error:", gl.getShaderInfoLog(fragmentShader));
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resizeCanvas = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const render = () => {
      if (!glRef.current || !programRef.current) return;

      resizeCanvas();

      const iTimeLocation = gl.getUniformLocation(programRef.current, "iTime");
      const iResolutionLocation = gl.getUniformLocation(programRef.current, "iResolution");
      const uWaveSpeedLocation = gl.getUniformLocation(programRef.current, "uWaveSpeed");
      const uColorShiftLocation = gl.getUniformLocation(programRef.current, "uColorShift");
      const uOpacityLocation = gl.getUniformLocation(programRef.current, "uOpacity");

      const elapsed = (Date.now() - startTimeRef.current) / 1000;

      gl.uniform1f(iTimeLocation, elapsed);
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(uWaveSpeedLocation, params.waveSpeed);
      gl.uniform1f(uColorShiftLocation, params.colorShift);
      gl.uniform1f(uOpacityLocation, params.opacity);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafRef.current = requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [params]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};
