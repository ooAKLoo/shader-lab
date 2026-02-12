import React, { useEffect, useRef } from "react";
import type { LiquidtransParams } from "./types";
import { vertexShader, fragmentShader } from "./shaderSource";

interface Props {
  params: LiquidtransParams;
}

const DISTORTION_MAP: Record<string, number> = {
  swirl: 0,
  stretch: 1,
  radial: 2,
  turbulent: 3,
};

const TEXTURE_MAP: Record<string, number> = {
  flat: 0,
  silk: 1,
  oil: 2,
  watercolor: 3,
  metal: 4,
};

function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [
    ((bigint >> 16) & 255) / 255,
    ((bigint >> 8) & 255) / 255,
    (bigint & 255) / 255,
  ];
}

export const LiquidtransCanvas: React.FC<Props> = ({ params }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const propsRef = useRef(params);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frozenTimeRef = useRef<number>(0);
  const wasPausedRef = useRef(false);

  useEffect(() => {
    propsRef.current = params;
  }, [params]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

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
    const uSpeed = gl.getUniformLocation(program, "uSpeed");
    const uScale = gl.getUniformLocation(program, "uScale");
    const uSwirl = gl.getUniformLocation(program, "uSwirl");
    const uTurbulence = gl.getUniformLocation(program, "uTurbulence");
    const uEdgeSoftness = gl.getUniformLocation(program, "uEdgeSoftness");
    const uColor1 = gl.getUniformLocation(program, "uColor1");
    const uColor2 = gl.getUniformLocation(program, "uColor2");
    const uColor3 = gl.getUniformLocation(program, "uColor3");
    const uVignette = gl.getUniformLocation(program, "uVignette");
    const uGrain = gl.getUniformLocation(program, "uGrain");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uMouseForce = gl.getUniformLocation(program, "uMouseForce");
    const uMouseRadius = gl.getUniformLocation(program, "uMouseRadius");
    const uSymmetry = gl.getUniformLocation(program, "uSymmetry");
    const uHueDrift = gl.getUniformLocation(program, "uHueDrift");
    const uDistortion = gl.getUniformLocation(program, "uDistortion");
    const uTexture = gl.getUniformLocation(program, "uTexture");

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height * 2 - 1),
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

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

      const p = propsRef.current;

      // Pause / freeze time logic
      const wallTime = (Date.now() - startTimeRef.current) / 1000.0;
      let t: number;
      if (p.paused) {
        if (!wasPausedRef.current) {
          // Just paused — freeze the current time
          frozenTimeRef.current = wallTime;
          wasPausedRef.current = true;
        }
        t = frozenTimeRef.current;
      } else {
        if (wasPausedRef.current) {
          // Just resumed — shift startTime so time continues from frozen point
          const pauseDuration = wallTime - frozenTimeRef.current;
          startTimeRef.current += pauseDuration * 1000;
          wasPausedRef.current = false;
        }
        t = (Date.now() - startTimeRef.current) / 1000.0;
      }

      gl.uniform1f(uTime, t);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uSpeed, p.speed);
      gl.uniform1f(uScale, p.scale);
      gl.uniform1f(uSwirl, p.swirl);
      gl.uniform1f(uTurbulence, p.turbulence);
      gl.uniform1f(uEdgeSoftness, p.edgeSoftness);

      const c1 = hexToRgb(p.color1);
      const c2 = hexToRgb(p.color2);
      const c3 = hexToRgb(p.color3);
      gl.uniform3f(uColor1, c1[0], c1[1], c1[2]);
      gl.uniform3f(uColor2, c2[0], c2[1], c2[2]);
      gl.uniform3f(uColor3, c3[0], c3[1], c3[2]);

      gl.uniform1f(uVignette, p.vignette);
      gl.uniform1f(uGrain, p.grain);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(uMouseForce, p.mouseForce);
      gl.uniform1f(uMouseRadius, p.mouseRadius);
      gl.uniform1f(uSymmetry, p.symmetry);
      gl.uniform1f(uHueDrift, p.hueDrift);
      gl.uniform1i(uDistortion, DISTORTION_MAP[p.distortion] ?? 0);
      gl.uniform1i(uTexture, TEXTURE_MAP[p.texture] ?? 0);

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

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};
