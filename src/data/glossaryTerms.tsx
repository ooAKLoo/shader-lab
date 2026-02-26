import React from "react";

export type GlossaryTab =
  | "all"
  | "noise"
  | "rendering"
  | "math"
  | "technique"
  | "optimization";

export interface GlossaryTerm {
  term: string;
  label: string;
  cn: string;
  type: GlossaryTab;
  parent?: string;
  desc: string;
  descIntuitive?: string;
  appliedFor?: string[];
  usedIn?: string[];
  visual?: () => React.ReactNode;
}

export const GLOSSARY_TABS: { id: GlossaryTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "noise", label: "Noise & Fields" },
  { id: "rendering", label: "Rendering" },
  { id: "math", label: "Math & Space" },
  { id: "technique", label: "Techniques" },
  { id: "optimization", label: "GPU & Perf" },
];

/**
 * 每个 parent 分组的一句话介绍：告诉用户这类概念能用来做什么。
 */
export const PARENT_DESCRIPTIONS: Record<string, string> = {
  // ── Noise & Fields ──
  基础噪声:
    "一切自然纹理的起点。用纯数学公式生成丝绸般的流体、云海、山脉地形等有机质感，不需要任何图片贴图。",
  衍生噪声:
    "在基础噪声之上做旋度运算，生成无散度的矢量场，让粒子像烟雾和洋流一样自然旋转流动，不会突然断裂或交叉。",
  场与变换:
    "为空间中每个点定义运动方向，或者用一个噪声函数扭曲另一个噪声的输入坐标，从而产生漩涡、吸积盘拉丝等极度有机的复杂图案。",

  // ── Rendering ──
  光线追踪:
    "从屏幕每个像素向 3D 空间发射光线，让光线穿透星云、雾气和隐式曲面，计算不同深度的发光与吸收——画面\"厚度\"和\"发光气体\"感的来源。",
  几何表示:
    "不用三角形网格，而是用数学函数描述物体形状。支持平滑混合、布尔运算，是 Raymarching 的核心搭档，也是 Shadertoy 上最常见的建模方式。",
  光照:
    "决定物体明暗和质感的关键。从简单的环境光 + 漫反射 + 镜面高光，到自发光霓虹线条效果，都在这一层计算。",
  后处理:
    "渲染完成后的画面增强。将速度、高度、距离等数值映射到色彩渐变带上形成风格化配色，再叠加辉光让高亮区域产生刺眼光晕。",

  // ── Math & Space ──
  坐标系统:
    "漩涡、螺旋、径向对称——这些效果的第一步都是坐标变换。将像素从直角坐标转为极坐标 (r, θ)，或理解 UV 纹理映射，就能轻松实现旋转和对称构图。",
  数学函数:
    "Shader 中使用频率最高的两个内置函数：smoothstep 产生自然的渐入渐出，mix/lerp 在颜色、位置、参数之间做平滑过渡——几乎每行 Shader 代码都会用到。",

  // ── Techniques ──
  渲染优化:
    "画面中成千上万个重复几何体（粒子、网格点），显卡内存只存一份形状，然后一次 draw call 复制上万遍——Instancing 让大规模渲染成为可能。",
  几何变形:
    "在 GPU 上实时改变顶点位置：用噪声值控制高度起伏，就能把平面网格变成丝滑的海浪地形，无需修改任何实际几何数据。",
  线条渲染:
    "记录粒子运动轨迹的历史位置，用样条曲线插值后渲染为带状几何体，配合透明度衰减产生拖尾效果——单纯的圆点粒子出不来这种拉丝感。",
  深度效果:
    "将场景分为多个深度层，近处快、远处慢的运动视差在 2D 画面上创造强烈纵深感；运动模糊则模拟快门开启期间的物体残影，增加动感。",

  // ── GPU & Perf ──
  着色器类型:
    "GPU 可编程渲染管线的两个核心阶段：Vertex Shader 处理每个顶点的位置变换，Fragment Shader 计算每个像素的最终颜色——所有视觉效果的执行入口。",
  数据传递:
    "CPU 与 GPU 之间的桥梁。通过 Uniform 变量将时间、颜色、分辨率等参数传入 Shader，一次 draw call 中对所有像素保持不变。",
  架构原理:
    "GPU 拥有数千个小核心同时处理大量像素，这种大规模并行架构让实时渲染成为可能——但也要求避免分支和随机访存以保持效率。",
};

// Mini SVG visualizations
const PerlinVisual = () => (
  <svg viewBox="0 0 120 40" className="w-full h-full">
    <path
      d="M0 20 C10 10, 20 30, 30 18 C40 6, 50 32, 60 20 C70 8, 80 28, 90 22 C100 16, 110 26, 120 20"
      stroke="#a3a3a3"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 20 C10 14, 20 26, 30 19 C40 12, 50 28, 60 20 C70 12, 80 26, 90 21 C100 17, 110 24, 120 20"
      stroke="#d4d4d4"
      strokeWidth="1"
      fill="none"
      strokeDasharray="2 2"
    />
  </svg>
);

const FBMVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Layer 1 - low freq */}
    <path
      d="M0 25 C30 10, 60 40, 90 20 C100 15, 110 30, 120 25"
      stroke="#d4d4d4"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
    {/* Layer 2 - mid freq */}
    <path
      d="M0 25 C10 18, 20 32, 30 22 C40 12, 50 35, 60 25 C70 15, 80 32, 90 23 C100 18, 110 30, 120 25"
      stroke="#a3a3a3"
      strokeWidth="1.2"
      fill="none"
      opacity="0.7"
    />
    {/* Layer 3 - high freq (sum) */}
    <path
      d="M0 25 C5 20, 10 28, 15 22 C20 16, 25 30, 30 24 C35 18, 40 28, 45 20 C50 14, 55 30, 60 25 C65 19, 70 28, 75 22 C80 17, 85 29, 90 23 C95 19, 100 27, 105 21 C110 17, 115 28, 120 25"
      stroke="#525252"
      strokeWidth="1.5"
      fill="none"
    />
    <text x="2" y="8" fontSize="5" fill="#a3a3a3" fontFamily="monospace">
      f1 + f2 + f3
    </text>
  </svg>
);

const CurlVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M${10 + i * 22} 5 C${15 + i * 22} 15, ${25 + i * 22} 10, ${20 + i * 22} 25 C${15 + i * 22} 40, ${30 + i * 22} 45, ${25 + i * 22} 35`}
        stroke="#a3a3a3"
        strokeWidth="1"
        fill="none"
        opacity={0.4 + i * 0.15}
      />
    ))}
    {[15, 35, 55, 75, 95].map((x, i) => (
      <circle key={i} cx={x} cy={25} r="1.5" fill="#737373" opacity="0.6" />
    ))}
  </svg>
);

const VectorFieldVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {Array.from({ length: 5 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => {
        const x = 10 + col * 14;
        const y = 8 + row * 10;
        const angle =
          Math.sin(col * 0.8) * 0.6 + Math.cos(row * 0.9) * 0.4;
        const dx = Math.cos(angle) * 4;
        const dy = Math.sin(angle) * 4;
        return (
          <line
            key={`${row}-${col}`}
            x1={x}
            y1={y}
            x2={x + dx}
            y2={y + dy}
            stroke="#737373"
            strokeWidth="0.8"
            markerEnd="url(#arrow)"
            opacity="0.6"
          />
        );
      })
    )}
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 4 4"
        refX="4"
        refY="2"
        markerWidth="3"
        markerHeight="3"
        orient="auto"
      >
        <path d="M0 0 L4 2 L0 4Z" fill="#737373" />
      </marker>
    </defs>
  </svg>
);

const DomainWarpVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Grid - original */}
    {Array.from({ length: 6 }, (_, i) => (
      <React.Fragment key={i}>
        <line
          x1={5 + i * 10}
          y1="5"
          x2={5 + i * 10}
          y2="45"
          stroke="#e5e5e5"
          strokeWidth="0.5"
        />
        <line
          x1="5"
          y1={5 + i * 8}
          x2="55"
          y2={5 + i * 8}
          stroke="#e5e5e5"
          strokeWidth="0.5"
        />
      </React.Fragment>
    ))}
    <text x="20" y="48" fontSize="4" fill="#a3a3a3" fontFamily="monospace">
      input
    </text>
    {/* Arrow */}
    <path d="M60 25 L70 25" stroke="#a3a3a3" strokeWidth="1" markerEnd="url(#arrow2)" />
    <defs>
      <marker id="arrow2" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    {/* Warped grid */}
    {Array.from({ length: 6 }, (_, i) => (
      <path
        key={`warp-${i}`}
        d={`M${75 + i * 8} 5 C${78 + i * 8} 15, ${72 + i * 8} 30, ${76 + i * 8} 45`}
        stroke="#737373"
        strokeWidth="0.5"
        fill="none"
      />
    ))}
    <text x="85" y="48" fontSize="4" fill="#a3a3a3" fontFamily="monospace">
      warped
    </text>
  </svg>
);

const RaymarchVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Eye / camera */}
    <circle cx="10" cy="25" r="3" stroke="#737373" strokeWidth="1" fill="none" />
    <circle cx="10" cy="25" r="1" fill="#737373" />
    {/* Ray with steps */}
    <line x1="13" y1="25" x2="95" y2="25" stroke="#d4d4d4" strokeWidth="0.5" strokeDasharray="2 1" />
    {/* Step markers - decreasing spacing */}
    {[20, 38, 52, 62, 70, 76, 80, 83].map((x, i) => (
      <circle key={i} cx={x} cy="25" r="1" fill="#a3a3a3" opacity={0.4 + i * 0.08} />
    ))}
    {/* SDF sphere */}
    <circle cx="95" cy="25" r="12" stroke="#525252" strokeWidth="1.2" fill="none" />
    <text x="88" y="44" fontSize="4" fill="#a3a3a3" fontFamily="monospace">
      SDF
    </text>
    <text x="16" y="14" fontSize="4" fill="#a3a3a3" fontFamily="monospace">
      steps →
    </text>
  </svg>
);

const SDFVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Distance rings */}
    <circle cx="60" cy="25" r="10" stroke="#525252" strokeWidth="1.2" fill="none" />
    <circle cx="60" cy="25" r="16" stroke="#a3a3a3" strokeWidth="0.5" fill="none" strokeDasharray="2 1" />
    <circle cx="60" cy="25" r="22" stroke="#d4d4d4" strokeWidth="0.5" fill="none" strokeDasharray="2 1" />
    {/* Distance labels */}
    <text x="72" y="16" fontSize="4" fill="#a3a3a3" fontFamily="monospace">d=0</text>
    <text x="78" y="10" fontSize="4" fill="#d4d4d4" fontFamily="monospace">d&gt;0</text>
    {/* Inside label */}
    <text x="53" y="27" fontSize="4" fill="#525252" fontFamily="monospace">d&lt;0</text>
  </svg>
);

const PhongVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Light source */}
    <circle cx="20" cy="10" r="4" fill="#fbbf24" opacity="0.3" />
    <circle cx="20" cy="10" r="2" fill="#fbbf24" opacity="0.6" />
    {/* Light ray */}
    <line x1="23" y1="13" x2="58" y2="28" stroke="#fbbf24" strokeWidth="0.5" opacity="0.4" />
    {/* Sphere */}
    <circle cx="65" cy="30" r="14" fill="none" stroke="#525252" strokeWidth="1" />
    {/* Gradient fill to show shading */}
    <defs>
      <radialGradient id="phong" cx="0.4" cy="0.35" r="0.6">
        <stop offset="0%" stopColor="#a3a3a3" />
        <stop offset="100%" stopColor="#262626" />
      </radialGradient>
    </defs>
    <circle cx="65" cy="30" r="13" fill="url(#phong)" opacity="0.4" />
    {/* Specular highlight */}
    <circle cx="60" cy="26" r="2" fill="white" opacity="0.5" />
    {/* Labels */}
    <text x="85" y="20" fontSize="4" fill="#a3a3a3" fontFamily="monospace">ambient</text>
    <text x="85" y="28" fontSize="4" fill="#a3a3a3" fontFamily="monospace">diffuse</text>
    <text x="85" y="36" fontSize="4" fill="#a3a3a3" fontFamily="monospace">specular</text>
  </svg>
);

const BloomVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Original bright pixel */}
    <rect x="15" y="15" width="20" height="20" rx="2" fill="#404040" />
    <rect x="20" y="20" width="10" height="10" rx="1" fill="white" opacity="0.9" />
    <text x="15" y="45" fontSize="4" fill="#a3a3a3" fontFamily="monospace">original</text>
    {/* Arrow */}
    <path d="M42 25 L52 25" stroke="#a3a3a3" strokeWidth="1" markerEnd="url(#arrow3)" />
    <defs>
      <marker id="arrow3" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    {/* Bloomed */}
    <rect x="58" y="15" width="20" height="20" rx="2" fill="#404040" />
    <defs>
      <radialGradient id="bloom" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="white" stopOpacity="0.9" />
        <stop offset="50%" stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="68" cy="25" r="12" fill="url(#bloom)" />
    <text x="58" y="45" fontSize="4" fill="#a3a3a3" fontFamily="monospace">+ bloom</text>
  </svg>
);

const PolarVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Polar grid */}
    <circle cx="60" cy="25" r="8" stroke="#e5e5e5" strokeWidth="0.5" fill="none" />
    <circle cx="60" cy="25" r="14" stroke="#e5e5e5" strokeWidth="0.5" fill="none" />
    <circle cx="60" cy="25" r="20" stroke="#e5e5e5" strokeWidth="0.5" fill="none" />
    {/* Radial lines */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * Math.PI) / 4;
      return (
        <line
          key={i}
          x1="60"
          y1="25"
          x2={60 + Math.cos(angle) * 20}
          y2={25 + Math.sin(angle) * 20}
          stroke="#e5e5e5"
          strokeWidth="0.5"
        />
      );
    })}
    {/* Labels */}
    <text x="82" y="27" fontSize="4" fill="#a3a3a3" fontFamily="monospace">r</text>
    <path d="M65 17 A8 8 0 0 1 68 20" stroke="#737373" strokeWidth="0.8" fill="none" />
    <text x="70" y="16" fontSize="4" fill="#737373" fontFamily="monospace">θ</text>
    {/* Point */}
    <circle cx="72" cy="18" r="1.5" fill="#525252" />
  </svg>
);

const UVVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* UV grid */}
    <rect x="20" y="5" width="40" height="40" fill="none" stroke="#d4d4d4" strokeWidth="0.5" />
    {Array.from({ length: 4 }, (_, i) => (
      <React.Fragment key={i}>
        <line x1={30 + i * 10} y1="5" x2={30 + i * 10} y2="45" stroke="#e5e5e5" strokeWidth="0.3" />
        <line x1="20" y1={15 + i * 10} x2="60" y2={15 + i * 10} stroke="#e5e5e5" strokeWidth="0.3" />
      </React.Fragment>
    ))}
    {/* Axis labels */}
    <text x="38" y="50" fontSize="4" fill="#737373" fontFamily="monospace">U →</text>
    <text x="14" y="27" fontSize="4" fill="#737373" fontFamily="monospace" transform="rotate(-90 14 27)">V →</text>
    {/* Corner labels */}
    <text x="17" y="4" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">(0,0)</text>
    <text x="55" y="50" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">(1,1)</text>
    {/* Gradient fill */}
    <defs>
      <linearGradient id="uvgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#525252" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#525252" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <rect x="20" y="5" width="40" height="40" fill="url(#uvgrad)" />
    {/* Mapped to shape */}
    <path d="M70 25 L80 25" stroke="#a3a3a3" strokeWidth="0.8" markerEnd="url(#arrow4)" />
    <defs>
      <marker id="arrow4" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    <ellipse cx="100" cy="25" rx="14" ry="18" fill="none" stroke="#525252" strokeWidth="0.8" />
    {Array.from({ length: 4 }, (_, i) => (
      <ellipse
        key={i}
        cx="100"
        cy="25"
        rx={14 - i * 3}
        ry="18"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="0.3"
        transform={`rotate(${i * 45} 100 25)`}
      />
    ))}
  </svg>
);

const SmoothstepVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Axes */}
    <line x1="15" y1="42" x2="105" y2="42" stroke="#d4d4d4" strokeWidth="0.5" />
    <line x1="15" y1="42" x2="15" y2="8" stroke="#d4d4d4" strokeWidth="0.5" />
    {/* Linear (dashed) */}
    <line x1="30" y1="42" x2="90" y2="10" stroke="#d4d4d4" strokeWidth="0.8" strokeDasharray="2 2" />
    {/* Smoothstep curve */}
    <path
      d="M15 42 L30 42 C40 42, 45 42, 55 28 C65 14, 75 10, 90 10 L105 10"
      stroke="#525252"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Edge labels */}
    <text x="27" y="48" fontSize="4" fill="#a3a3a3" fontFamily="monospace">edge0</text>
    <text x="85" y="48" fontSize="4" fill="#a3a3a3" fontFamily="monospace">edge1</text>
    <text x="8" y="42" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">0</text>
    <text x="8" y="12" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">1</text>
  </svg>
);

const MixVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Color A */}
    <rect x="10" y="10" width="20" height="20" rx="3" fill="#525252" opacity="0.8" />
    <text x="14" y="40" fontSize="4" fill="#a3a3a3" fontFamily="monospace">A</text>
    {/* Color B */}
    <rect x="90" y="10" width="20" height="20" rx="3" fill="#d4d4d4" opacity="0.8" />
    <text x="96" y="40" fontSize="4" fill="#a3a3a3" fontFamily="monospace">B</text>
    {/* Gradient bar */}
    <defs>
      <linearGradient id="mixgrad">
        <stop offset="0%" stopColor="#525252" />
        <stop offset="100%" stopColor="#d4d4d4" />
      </linearGradient>
    </defs>
    <rect x="38" y="14" width="44" height="12" rx="2" fill="url(#mixgrad)" opacity="0.6" />
    {/* t label */}
    <text x="55" y="40" fontSize="4" fill="#737373" fontFamily="monospace">t = 0...1</text>
    {/* Arrow indicator */}
    <path d="M55 30 L55 28" stroke="#737373" strokeWidth="0.8" />
    <circle cx="55" cy="32" r="1" fill="#737373" />
  </svg>
);

const InstancingVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Single mesh */}
    <rect x="5" y="15" width="15" height="15" rx="2" stroke="#525252" strokeWidth="1" fill="none" />
    <text x="5" y="40" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">1 mesh</text>
    {/* Arrow */}
    <path d="M25 22 L35 22" stroke="#a3a3a3" strokeWidth="0.8" markerEnd="url(#arrow5)" />
    <defs>
      <marker id="arrow5" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    {/* Many instances */}
    {Array.from({ length: 12 }, (_, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      return (
        <rect
          key={i}
          x={42 + col * 18}
          y={6 + row * 14}
          width="12"
          height="12"
          rx="2"
          stroke="#737373"
          strokeWidth="0.5"
          fill="none"
          opacity={0.3 + (i % 3) * 0.2}
        />
      );
    })}
    <text x="55" y="48" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">N instances (1 draw call)</text>
  </svg>
);

const VertexDisplacementVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Flat mesh */}
    <polyline
      points="5,30 15,30 25,30 35,30 45,30 55,30"
      stroke="#d4d4d4"
      strokeWidth="0.8"
      fill="none"
    />
    {[5, 15, 25, 35, 45, 55].map((x, i) => (
      <circle key={i} cx={x} cy={30} r="1.2" fill="#a3a3a3" />
    ))}
    <text x="15" y="42" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">flat</text>
    {/* Arrow */}
    <path d="M58 25 L65 25" stroke="#a3a3a3" strokeWidth="0.8" markerEnd="url(#arrow6)" />
    <defs>
      <marker id="arrow6" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    {/* Displaced mesh */}
    <polyline
      points="70,30 80,22 90,28 100,16 110,24"
      stroke="#525252"
      strokeWidth="1"
      fill="none"
    />
    {[
      [70, 30],
      [80, 22],
      [90, 28],
      [100, 16],
      [110, 24],
    ].map(([x, y], i) => (
      <React.Fragment key={i}>
        <line x1={x} y1={30} x2={x} y2={y} stroke="#a3a3a3" strokeWidth="0.5" strokeDasharray="1 1" />
        <circle cx={x} cy={y} r="1.5" fill="#525252" />
      </React.Fragment>
    ))}
    <text x="78" y="42" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">displaced</text>
  </svg>
);

const ParallaxVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Back layer */}
    <rect x="10" y="8" width="100" height="34" rx="2" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
    <path d="M10 30 L30 20 L50 28 L70 18 L90 25 L110 22" stroke="#d4d4d4" strokeWidth="0.8" fill="none" />
    <text x="12" y="14" fontSize="3.5" fill="#d4d4d4" fontFamily="monospace">far (slow)</text>
    {/* Mid layer */}
    <path d="M10 32 L25 24 L45 30 L65 22 L85 28 L110 25" stroke="#a3a3a3" strokeWidth="1" fill="none" />
    {/* Front layer */}
    <path d="M10 36 L20 28 L35 34 L50 26 L70 32 L90 24 L110 30" stroke="#525252" strokeWidth="1.5" fill="none" />
    <text x="12" y="46" fontSize="3.5" fill="#525252" fontFamily="monospace">near (fast)</text>
    {/* Speed arrows */}
    <path d="M95 12 L105 12" stroke="#d4d4d4" strokeWidth="0.5" />
    <path d="M90 22 L105 22" stroke="#a3a3a3" strokeWidth="0.8" />
    <path d="M85 32 L105 32" stroke="#525252" strokeWidth="1" />
  </svg>
);

const GPUPipelineVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Pipeline stages */}
    {[
      { x: 5, label: "Vertex", short: "VS" },
      { x: 30, label: "Raster", short: "RS" },
      { x: 55, label: "Fragment", short: "FS" },
      { x: 80, label: "Output", short: "FB" },
    ].map((stage, i) => (
      <React.Fragment key={i}>
        <rect
          x={stage.x}
          y="15"
          width="20"
          height="20"
          rx="3"
          fill="none"
          stroke={i === 0 || i === 2 ? "#525252" : "#a3a3a3"}
          strokeWidth={i === 0 || i === 2 ? "1.2" : "0.8"}
        />
        <text
          x={stage.x + 10}
          y="27"
          fontSize="5"
          fill={i === 0 || i === 2 ? "#525252" : "#a3a3a3"}
          fontFamily="monospace"
          textAnchor="middle"
        >
          {stage.short}
        </text>
        <text
          x={stage.x + 10}
          y="44"
          fontSize="3.5"
          fill="#a3a3a3"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {stage.label}
        </text>
        {i < 3 && (
          <path
            d={`M${stage.x + 22} 25 L${stage.x + 28} 25`}
            stroke="#d4d4d4"
            strokeWidth="0.8"
          />
        )}
      </React.Fragment>
    ))}
    <text x="5" y="10" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">
      programmable ↓
    </text>
  </svg>
);

const VolumetricVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Eye */}
    <circle cx="10" cy="25" r="2.5" stroke="#737373" strokeWidth="0.8" fill="none" />
    {/* Ray through volume */}
    <line x1="13" y1="25" x2="110" y2="25" stroke="#d4d4d4" strokeWidth="0.5" strokeDasharray="2 1" />
    {/* Volume box */}
    <rect x="30" y="8" width="60" height="34" rx="3" fill="none" stroke="#a3a3a3" strokeWidth="0.8" strokeDasharray="3 2" />
    {/* Sample points */}
    {[38, 48, 58, 68, 78].map((x, i) => (
      <React.Fragment key={i}>
        <circle cx={x} cy="25" r="1.5" fill="#737373" opacity={0.3 + i * 0.12} />
        <line x1={x} y1="22" x2={x} y2="20" stroke="#a3a3a3" strokeWidth="0.3" />
      </React.Fragment>
    ))}
    <text x="45" y="6" fontSize="4" fill="#a3a3a3" fontFamily="monospace">volume</text>
    <text x="97" y="20" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">Σ color</text>
    <text x="97" y="30" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">× density</text>
  </svg>
);

const ColorMappingVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Input value bar */}
    <defs>
      <linearGradient id="valbar">
        <stop offset="0%" stopColor="#262626" />
        <stop offset="100%" stopColor="#fafafa" />
      </linearGradient>
      <linearGradient id="colorbar">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="33%" stopColor="#7c3aed" />
        <stop offset="66%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="100" height="8" rx="2" fill="url(#valbar)" />
    <text x="10" y="8" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">value 0..1</text>
    {/* Arrow */}
    <path d="M60 22 L60 28" stroke="#a3a3a3" strokeWidth="0.8" />
    {/* Output color ramp */}
    <rect x="10" y="30" width="100" height="8" rx="2" fill="url(#colorbar)" />
    <text x="10" y="46" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">mapped color</text>
  </svg>
);

const EmissionVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    <defs>
      <radialGradient id="glow1" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
        <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow */}
    <circle cx="40" cy="25" r="20" fill="url(#glow1)" />
    {/* Object */}
    <circle cx="40" cy="25" r="8" fill="#fbbf24" opacity="0.5" />
    <circle cx="40" cy="25" r="8" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.8" />
    <text x="32" y="44" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">emissive</text>
    {/* vs normal */}
    <circle cx="90" cy="25" r="8" fill="#525252" opacity="0.3" />
    <circle cx="90" cy="25" r="8" stroke="#737373" strokeWidth="0.8" fill="none" />
    <text x="78" y="44" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">non-emissive</text>
  </svg>
);

const TrailVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    <path
      d="M10 25 C20 15, 30 35, 45 20 C60 5, 70 40, 85 25 C95 15, 105 30, 115 22"
      stroke="#525252"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Control points */}
    {[
      [10, 25],
      [45, 20],
      [85, 25],
      [115, 22],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2" fill="#737373" opacity={0.4 + i * 0.2} />
    ))}
    {/* Trail fade */}
    <path
      d="M10 25 C20 15, 30 35, 45 20 C60 5, 70 40, 85 25 C95 15, 105 30, 115 22"
      stroke="#a3a3a3"
      strokeWidth="4"
      fill="none"
      opacity="0.15"
    />
    <text x="40" y="46" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">
      spline interpolation + fade
    </text>
  </svg>
);

const MotionBlurVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* Blur trail */}
    {[0, 1, 2, 3, 4].map((i) => (
      <rect
        key={i}
        x={20 + i * 14}
        y="15"
        width="16"
        height="16"
        rx="3"
        fill="#525252"
        opacity={0.08 + i * 0.08}
      />
    ))}
    {/* Final position */}
    <rect x="76" y="15" width="16" height="16" rx="3" fill="none" stroke="#525252" strokeWidth="1.2" />
    {/* Arrow */}
    <path d="M30 35 L85 35" stroke="#a3a3a3" strokeWidth="0.8" markerEnd="url(#arrow7)" />
    <defs>
      <marker id="arrow7" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    <text x="45" y="44" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">motion direction</text>
  </svg>
);

const UniformsVisual = () => (
  <svg viewBox="0 0 120 50" className="w-full h-full">
    {/* CPU side */}
    <rect x="5" y="8" width="35" height="34" rx="3" fill="none" stroke="#a3a3a3" strokeWidth="0.8" />
    <text x="10" y="18" fontSize="4" fill="#737373" fontFamily="monospace">CPU</text>
    <text x="8" y="26" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">time: 1.5</text>
    <text x="8" y="32" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">color: vec3</text>
    <text x="8" y="38" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">scale: 2.0</text>
    {/* Arrow */}
    <path d="M42 25 L52 25" stroke="#a3a3a3" strokeWidth="0.8" markerEnd="url(#arrow8)" />
    <defs>
      <marker id="arrow8" viewBox="0 0 4 4" refX="4" refY="2" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M0 0 L4 2 L0 4Z" fill="#a3a3a3" />
      </marker>
    </defs>
    <text x="42" y="20" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">uniform</text>
    {/* GPU side */}
    <rect x="58" y="8" width="55" height="34" rx="3" fill="none" stroke="#525252" strokeWidth="1" />
    <text x="63" y="18" fontSize="4" fill="#525252" fontFamily="monospace">GPU Shader</text>
    <text x="63" y="28" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">uniform float u_time;</text>
    <text x="63" y="35" fontSize="3.5" fill="#a3a3a3" fontFamily="monospace">uniform vec3 u_color;</text>
  </svg>
);

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // ── Noise & Fields ──
  {
    term: "Perlin Noise",
    label: "Perlin / Simplex Noise",
    cn: "柏林噪声 / 单纯形噪声",
    type: "noise",
    parent: "基础噪声",
    desc: "由 Ken Perlin 提出的梯度噪声算法，生成连续、自然的伪随机值。Simplex 是其改进版，在高维度下更高效，避免了方向性伪影。广泛用于地形生成、纹理和流体模拟。",
    descIntuitive:
      "把它当成“连续变化的随机数”：相邻位置会平滑过渡，不会像雪花噪点那样乱跳。实操中常先用它控制高度或亮度，再把时间加进输入，就能得到流动的云、波纹和地形。",
    appliedFor: [
      "生成连续自然纹理（云、水纹、地形）",
      "驱动顶点高度起伏动画",
      "给粒子运动提供平滑扰动",
    ],
    usedIn: ["Vortex", "Lumina", "Neon", "Aurora"],
    visual: PerlinVisual,
  },
  {
    term: "FBM",
    label: "Fractional Brownian Motion",
    cn: "分形布朗运动",
    type: "noise",
    parent: "基础噪声",
    desc: "将多层（octave）不同频率和振幅的噪声叠加，每层频率加倍（lacunarity）、振幅减半（gain）。产生丰富的自相似细节，是云、山脉、火焰等自然纹理的基础。",
    descIntuitive:
      "FBM 可以理解为“同一张噪声叠很多层”：大形状+中细节+小纹理。实操常用 4-6 层，每层频率翻倍、振幅减半，能快速做出丝绸、云气、地形这种有层次的自然质感。",
    appliedFor: [
      "做出层次丰富的丝绸和星云纹理",
      "不贴图也能生成自然细节",
      "给吸积盘和云雾提供主纹理",
    ],
    usedIn: ["Vortex", "Lumina", "Tunnel", "Neonwave", "Horizon", "Dot Terrain"],
    visual: FBMVisual,
  },
  {
    term: "Curl Noise",
    label: "Curl Noise",
    cn: "卷曲噪声",
    type: "noise",
    parent: "衍生噪声",
    desc: "对噪声场求旋度（curl）得到的无散度矢量场，生成的粒子运动自然旋转且不压缩。非常适合模拟烟雾、流水等流体粒子的运动轨迹。",
    descIntuitive:
      "它像给空间生成一张“打旋的风向图”。粒子顺着这张图走，会更像烟雾和水流那样自然盘旋，不容易出现突然堆积或断裂。",
    appliedFor: [
      "构建不易交叉的流线动画",
      "模拟烟雾、水流、等离子旋涡",
      "让粒子运动更接近真实流体",
    ],
    usedIn: ["Flow Field", "Fluid"],
    visual: CurlVisual,
  },
  {
    term: "Vector Field",
    label: "Vector / Velocity Field",
    cn: "矢量场 / 速度场",
    type: "noise",
    parent: "场与变换",
    desc: "空间中每个点都有一个方向和大小的矢量。粒子根据所在位置的矢量移动，形成流线效果。可由噪声函数、物理模拟或手动定义生成。",
    descIntuitive:
      "把它想成“看不见的风向图”：空间每个点都告诉粒子该往哪走、走多快。线条顺着这个场流动，就会更顺滑、少交叉。",
    appliedFor: [
      "驱动粒子形成自然的宇宙洋流感",
      "控制线条整体流向与速度节奏",
      "做风场、磁场和流体路径引导",
    ],
    usedIn: ["Flow Field", "Fluid", "NeuroFlow"],
    visual: VectorFieldVisual,
  },
  {
    term: "Domain Warping",
    label: "Domain Warping",
    cn: "域扭曲",
    type: "noise",
    parent: "场与变换",
    desc: "用一个噪声函数的输出来偏移另一个噪声函数的输入坐标，产生有机的扭曲和流动效果。可多次嵌套叠加，创造极其复杂的图案。",
    descIntuitive:
      "你不是在旋转图像，而是在扭曲“取样坐标”。可以把它想成先把坐标网格揉皱，再去采样颜色，直纹就会被拉成漩涡和拉丝。黑洞风格里常见做法是离中心越近，角度扭得越狠。",
    appliedFor: [
      "把直纹拉成漩涡和拉丝纹",
      "制作黑洞吸积盘扭曲感",
      "快速增加纹理复杂度和有机感",
    ],
    usedIn: ["Lumina", "Neon", "Fluid", "Dot Terrain"],
    visual: DomainWarpVisual,
  },

  // ── Rendering ──
  {
    term: "Raymarching",
    label: "Raymarching",
    cn: "光线步进",
    type: "rendering",
    parent: "光线追踪",
    desc: "从相机沿视线方向逐步前进，每步用 SDF 查询最近距离，直到距离足够小（命中表面）。适合渲染复杂隐式曲面、体积效果，是 Shadertoy 最常用的渲染技术。",
    descIntuitive:
      "把屏幕当作相机：每个像素都向 3D 空间发一条光线。光线每走一步都先问“离物体还有多远”，靠近后再细采样，适合黑洞、SDF 造型和体积雾这类传统网格难做的效果。",
    appliedFor: [
      "渲染黑洞、隧道、SDF 场景",
      "实现光线弯曲与空间纵深",
      "在同一着色器里融合几何和体积",
    ],
    usedIn: ["Isometric", "Tunnel", "Neon Text", "SDF Raymorph"],
    visual: RaymarchVisual,
  },
  {
    term: "Volumetric",
    label: "Volumetric Rendering",
    cn: "体积渲染",
    type: "rendering",
    parent: "光线追踪",
    desc: "沿光线在体积（如云、雾、火焰）中均匀采样，累积每个采样点的颜色和密度。结合光照散射可实现逼真的大气效果。采样数影响质量与性能。",
    descIntuitive:
      "它不是给一张平面贴图，而是在一团“有厚度的雾”里算光。光线穿过时会持续累积颜色和密度，所以会有星云、烟气、吸积盘那种深邃层次。采样越多越细腻，但性能开销也更高。",
    appliedFor: [
      "做星云、烟雾、发光气体厚度",
      "构建吸积盘体积发光层",
      "实现随深度变化的色彩融合",
    ],
    usedIn: ["Noise Aura", "Aurora", "Luminescence"],
    visual: VolumetricVisual,
  },
  {
    term: "SDF",
    label: "Signed Distance Function",
    cn: "有符号距离函数",
    type: "rendering",
    parent: "几何表示",
    desc: "返回空间中任意点到最近表面的有符号距离，正值在外部，负值在内部。SDF 支持布尔运算（并、交、差）和平滑混合，是 Raymarching 的核心几何表示。",
    descIntuitive:
      "把它当成“最近距离地图”：d>0 在外部，d<0 在内部，d=0 就是表面。Raymarching 靠它决定每一步走多远；做黑洞时也常用半径阈值模拟事件视界（r 小于阈值直接输出纯黑）。",
    appliedFor: [
      "定义黑洞视界和中心吞噬区",
      "组合几何体做程序化建模",
      "为光线步进提供自适应步长",
    ],
    usedIn: ["Neon Text", "SDF Raymorph", "Luminescence"],
    visual: SDFVisual,
  },
  {
    term: "Phong",
    label: "Phong / Blinn-Phong Lighting",
    cn: "冯氏光照模型",
    type: "rendering",
    parent: "光照",
    desc: "经典的经验光照模型，由环境光（ambient）、漫反射（diffuse）和镜面反射（specular）三部分组成。Blinn-Phong 用半角向量替代反射向量，计算更高效。",
    usedIn: ["SDF Raymorph", "Isometric"],
    visual: PhongVisual,
  },
  {
    term: "Bloom",
    label: "Bloom / Glow",
    cn: "辉光后处理",
    type: "rendering",
    parent: "后处理",
    desc: "提取画面中超过亮度阈值的区域，进行高斯模糊后叠加回原图。模拟相机镜头对高亮区域的光晕效果，增强视觉冲击力和发光感。",
    usedIn: ["Neon", "NeuroFlow", "Neonwave"],
    visual: BloomVisual,
  },
  {
    term: "Color Mapping",
    label: "Color Mapping / Color Ramp",
    cn: "色彩映射",
    type: "rendering",
    parent: "后处理",
    desc: "将 0-1 范围的标量值映射到预定义的颜色渐变条上。通过调整色带的颜色节点和位置，可以用同一个噪声场产生截然不同的视觉风格。",
    descIntuitive:
      "先算一个灰度值（速度、年龄、密度都可以），再把它映射到你定义的色带。这样同一份运动数据，只换调色板就能从冷色科技风切到金紫星云风。",
    appliedFor: [
      "把速度、年龄、距离映射成配色",
      "快速切换作品视觉风格",
      "突出黑洞边缘高亮和层次",
    ],
    usedIn: ["Vortex", "Lumina", "Aurora", "NeuroFlow"],
    visual: ColorMappingVisual,
  },
  {
    term: "Emission",
    label: "Emission / Self-luminance",
    cn: "自发光",
    type: "rendering",
    parent: "光照",
    desc: "物体自身发出的光，不依赖外部光源。在 shader 中直接将颜色值加到最终输出上（而非乘以光照），常与 Bloom 搭配使用以获得霓虹灯、能量线等效果。",
    descIntuitive:
      "自发光就是“像素自己在发光”，不依赖外部灯光。实操中会把高亮区域额外加亮，再配 Bloom 形成光晕；做黑洞吸积盘时也常按距离中心增强亮度。",
    appliedFor: [
      "制作霓虹线和能量边缘",
      "增强吸积盘中心亮度",
      "与 Bloom 叠加形成刺眼光晕",
    ],
    usedIn: ["Neon", "Neonwave", "NeuroFlow"],
    visual: EmissionVisual,
  },

  // ── Math & Space ──
  {
    term: "Polar",
    label: "Polar Coordinates",
    cn: "极坐标",
    type: "math",
    parent: "坐标系统",
    desc: "用半径 r 和角度 θ 代替直角坐标 (x, y) 描述位置。在 shader 中将 UV 转为极坐标可轻松创建旋转、径向对称、螺旋等效果。",
    descIntuitive:
      "做漩涡或黑洞时，用 (x, y) 很难直觉控制；换成极坐标 (r, θ) 会简单很多。r 管离中心多远，θ 管绕了多少角度。实操通常先做 uv->polar，再改 θ 做旋转、改 r 做挤压和吸入感。",
    appliedFor: [
      "实现漩涡、螺旋、径向结构",
      "按半径和角度精确控制旋转",
      "作为黑洞坐标基底做吸入扭曲",
    ],
    usedIn: ["Vortex", "Tunnel"],
    visual: PolarVisual,
  },
  {
    term: "UV",
    label: "UV Coordinates",
    cn: "纹理坐标",
    type: "math",
    parent: "坐标系统",
    desc: "将 2D 纹理映射到 3D 表面的坐标系统。U 和 V 范围通常为 0-1。Fragment Shader 接收插值后的 UV 来决定每个像素的纹理采样位置。",
    usedIn: ["Vortex", "Lumina", "Neon", "Fluid"],
    visual: UVVisual,
  },
  {
    term: "Smoothstep",
    label: "Smoothstep",
    cn: "平滑阶梯函数",
    type: "math",
    parent: "数学函数",
    desc: "将输入值在两个边界之间做 Hermite 平滑插值，输出 0-1。导数在边界处为零，产生自然的渐入渐出效果。是 shader 中使用频率最高的内置函数之一。",
    usedIn: ["Vortex", "Lumina", "SDF Raymorph"],
    visual: SmoothstepVisual,
  },
  {
    term: "Mix",
    label: "Mix / Lerp",
    cn: "线性插值",
    type: "math",
    parent: "数学函数",
    desc: "mix(a, b, t) = a*(1-t) + b*t，在两个值之间线性混合。t=0 得到 a，t=1 得到 b。可用于颜色混合、位置过渡、参数动画等几乎所有插值场景。",
    usedIn: ["Vortex", "Lumina", "Aurora", "Horizon", "Dot Terrain"],
    visual: MixVisual,
  },

  // ── Techniques ──
  {
    term: "Instancing",
    label: "Instancing",
    cn: "实例化渲染",
    type: "technique",
    parent: "渲染优化",
    desc: "用一次 draw call 渲染多个相同几何体的不同实例，每个实例可有不同的变换、颜色等属性。将 N 次绘制合并为 1 次，大幅减少 CPU-GPU 通信开销。",
    descIntuitive:
      "别把一万个点画一万次。实例化是“存一个模型，复制很多份”，每份只改位置、缩放或颜色。这样能把大量重复绘制合并成一次提交，非常适合点云、粒子阵列和规则网格。",
    appliedFor: [
      "高效渲染海量点云和粒子",
      "构建规则网格与阵列动画",
      "降低 CPU 提交开销保持帧率",
    ],
    usedIn: ["Hyper Grid", "Isometric", "Dot Terrain"],
    visual: InstancingVisual,
  },
  {
    term: "Vertex Displacement",
    label: "Vertex Displacement",
    cn: "顶点位移",
    type: "technique",
    parent: "几何变形",
    desc: "在 Vertex Shader 中根据噪声、时间或纹理采样偏移顶点位置。无需修改实际几何数据，即可在 GPU 上实时创建波浪、地形、有机变形等效果。",
    descIntuitive:
      "把网格想成一张有很多点的布。顶点位移就是给每个点一个高度偏移，让平面瞬间变成波浪地形。常见做法是用连续噪声控制高度，再加时间得到丝滑起伏动画。",
    appliedFor: [
      "把平面变成波浪和地形",
      "根据噪声驱动实时起伏",
      "让点阵和网格获得有机运动",
    ],
    usedIn: ["Luminescence", "Aurora", "Dot Terrain"],
    visual: VertexDisplacementVisual,
  },
  {
    term: "Trail",
    label: "Trail / Spline Rendering",
    cn: "拖尾与样条线",
    type: "technique",
    parent: "线条渲染",
    desc: "记录物体运动轨迹的历史位置，用样条曲线（Catmull-Rom、Bezier）插值后渲染为带状或管状几何体。结合透明度衰减产生拖尾效果。",
    descIntuitive:
      "单个粒子只是点，做不出拉丝。常见做法是记录粒子最近几帧位置，插值成平滑曲线，再加粗细、透明度和颜色渐变。需要更强速度感时，再叠一点运动模糊。",
    appliedFor: [
      "把粒子点变成丝滑拉丝线",
      "表现高速运动方向和残影",
      "构建神经流体与洋流轨迹视觉",
    ],
    usedIn: ["NeuroFlow", "Flow Field"],
    visual: TrailVisual,
  },
  {
    term: "Parallax",
    label: "Parallax Layers",
    cn: "视差层叠",
    type: "technique",
    parent: "深度效果",
    desc: "将场景分为多个深度层，每层以不同速度移动：近处快、远处慢。利用人眼对运动视差的感知，在 2D 画面上创造强烈的纵深感。",
    usedIn: ["Train Journey", "Horizon"],
    visual: ParallaxVisual,
  },
  {
    term: "Motion Blur",
    label: "Motion Blur",
    cn: "运动模糊",
    type: "technique",
    parent: "深度效果",
    desc: "模拟相机快门开启期间物体运动产生的模糊。可通过多帧累积、速度缓冲区或后处理方向模糊实现。增加动感，掩盖低帧率下的不连续感。",
    usedIn: ["Hyper Grid", "Neonwave"],
    visual: MotionBlurVisual,
  },

  // ── GPU & Perf ──
  {
    term: "Fragment Shader",
    label: "Fragment / Vertex Shader",
    cn: "片元 / 顶点着色器",
    type: "optimization",
    parent: "着色器类型",
    desc: "Vertex Shader 处理每个顶点的位置变换；Fragment Shader（Pixel Shader）计算每个像素的颜色。两者在 GPU 上大规模并行执行，是可编程渲染管线的核心。",
    usedIn: ["Vortex", "Lumina", "所有 Shader 效果"],
    visual: GPUPipelineVisual,
  },
  {
    term: "Uniforms",
    label: "Uniforms",
    cn: "统一变量",
    type: "optimization",
    parent: "数据传递",
    desc: "从 CPU 传递到 GPU Shader 的只读全局变量，在一次 draw call 中对所有顶点/片元保持不变。常用于传递时间、分辨率、鼠标位置、颜色参数等。",
    usedIn: ["所有 Shader 效果"],
    visual: UniformsVisual,
  },
  {
    term: "GPU Parallelism",
    label: "GPU Parallelism",
    cn: "GPU 并行计算",
    type: "optimization",
    parent: "架构原理",
    desc: "GPU 拥有数千个小核心，同时处理大量像素/顶点。Shader 代码为单个像素编写，GPU 自动并行执行。这种 SIMD 架构让实时图形成为可能，但要求避免分支和随机访存。",
    usedIn: [],
  },
];
