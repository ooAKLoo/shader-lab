import React, { useEffect, useRef } from "react";
import { vertexShader, fragmentShader } from "./shaderSource";

export interface GooeyParams {
  scrollProgress: number;
  colWidth: number;
  speed: number;
  scale: number;
  seed: number;
  color: [number, number, number];
}

interface GooeyCanvasProps {
  params: GooeyParams;
}

export const GooeyCanvas: React.FC<GooeyCanvasProps> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    glRef.current = gl;

    const createShader = (type: number, source: string) => {
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

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShader);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShader);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const getUniforms = () => {
      const uniforms: Record<string, WebGLUniformLocation | null> = {};
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        const info = gl.getActiveUniform(program, i);
        if (info) {
          uniforms[info.name] = gl.getUniformLocation(program, info.name);
        }
      }
      return uniforms;
    };

    uniformsRef.current = getUniforms();

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uniformsRef.current.u_resolution) {
        gl.uniform2f(uniformsRef.current.u_resolution, canvas.width, canvas.height);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const currentTime = performance.now();
      if (uniformsRef.current.u_time) {
        gl.uniform1f(uniformsRef.current.u_time, currentTime);
      }
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const gl = glRef.current;
    if (!gl) return;

    const uniforms = uniformsRef.current;
    if (uniforms.u_col_width) gl.uniform1f(uniforms.u_col_width, params.colWidth);
    if (uniforms.u_speed) gl.uniform1f(uniforms.u_speed, params.speed);
    if (uniforms.u_scale) gl.uniform1f(uniforms.u_scale, params.scale);
    if (uniforms.u_seed) gl.uniform1f(uniforms.u_seed, params.seed);
    if (uniforms.u_color) gl.uniform3f(uniforms.u_color, params.color[0], params.color[1], params.color[2]);
    if (uniforms.u_scroll_progr) gl.uniform1f(uniforms.u_scroll_progr, params.scrollProgress);
  }, [params]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};
