# 添加新 Shader Demo 指南

当用户提供一个 shader 项目文件夹时，按以下步骤将其集成到 Shader Lab。

---

## 前置：识别源项目结构

用户提供的项目通常来自 Shadertoy、独立 WebGL 项目等，典型结构：

```
用户提供的文件夹/
├── App.tsx                 # 主组件（包含状态和布局）
├── components/
│   ├── ShaderCanvas.tsx    # WebGL 渲染逻辑
│   └── Controls.tsx        # 原始控制面板（会被重写）
├── utils/ 或 constants.ts  # GLSL 着色器源码
└── package.json
```

**需要提取的关键信息：**

| 信息 | 来源 | 示例 |
|------|------|------|
| Fragment Shader 源码 | `shaderSource.ts` / `constants.ts` | GLSL 代码 |
| Vertex Shader 源码 | 同上（通常是标准全屏四边形） | 几乎所有项目相同 |
| Uniform 参数列表 | ShaderCanvas 的 `getUniformLocation` 调用 | `uSpeed`, `uColor1` |
| 参数范围和默认值 | Controls.tsx 的 `<input range>` 或 App.tsx 的 `useState` | `min=0 max=5 default=1.5` |
| 颜色预设 | App.tsx 的 PRESETS 常量 | `{c1: '#8b5cf6', c2: '#06b6d4'}` |

---

## 步骤 1：创建 shader 目录（3 个文件）

在 `src/shaders/{name}/` 下创建：

### 1.1 `shaderSource.ts` — GLSL 源码

直接从源项目提取，做以下适配：

```typescript
// src/shaders/{name}/shaderSource.ts

export const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const fragmentShaderSource = `
  precision highp float;

  // 标准 uniform（所有 shader 都需要）
  uniform vec2 iResolution;
  uniform float iTime;

  // 自定义 uniform（从源项目提取）
  uniform float uSpeed;
  uniform vec3 uColor1;
  // ... 按需添加

  // === 从源项目复制的 GLSL 逻辑 ===
  // 注意：如果源项目用 mainImage(out vec4, in vec2) 风格，
  // 需要改为直接写 void main() { ... gl_FragColor = ...; }
  // 或保留 mainImage 并在 main() 中调用它。

  void main() {
    // ...
    gl_FragColor = vec4(color, 1.0);
  }
`;
```

**适配要点：**
- 如果源项目 uniform 声明在外部注入（如 Lumina 的 ShaderCanvas 拼接），需要移到 fragmentShaderSource 内
- 如果源项目用 `mainImage(out vec4 fragColor, in vec2 fragCoord)` ShaderToy 风格，在 `main()` 中调用即可
- 确保 uniform 名称和 Canvas 组件中 `getUniformLocation` 的字符串完全一致

### 1.2 `{Name}Canvas.tsx` — WebGL 渲染组件

**从现有 Canvas 复制模板，只改 3 处：**

```typescript
// src/shaders/{name}/{Name}Canvas.tsx

import React, { useEffect, useRef } from "react";
import { vertexShaderSource, fragmentShaderSource } from "./shaderSource";

// ① 定义并导出参数接口（字段名和 uniform 对应）
export interface {Name}Params {
  speed: number;
  color1: string;
  // ... 根据 shader 的 uniform 定义
}

const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b];
};

export const {Name}Canvas: React.FC<{ params: {Name}Params }> = ({ params }) => {
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

    // --- Shader 编译（标准模板，不需要改） ---
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

    // --- 全屏四边形（标准模板，不需要改） ---
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // ② Uniform Locations（按 shader 实际 uniform 列出）
    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uSpeed = gl.getUniformLocation(program, "uSpeed");
    const uColor1 = gl.getUniformLocation(program, "uColor1");
    // ... 其他 uniform

    // --- 渲染循环 ---
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

      // ③ 传递参数到 uniform（按类型分）
      gl.uniform1f(uSpeed, p.speed);
      const c1 = hexToRgb(p.color1);
      gl.uniform3f(uColor1, c1[0], c1[1], c1[2]);
      // ... 其他 uniform

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
```

### 1.3 `{Name}Controls.tsx` — 参数控制面板

**必须遵循项目设计规范（CLAUDE.md），不复用源项目的控制面板样式：**

```typescript
// src/shaders/{name}/{Name}Controls.tsx

import React from "react";
import type { {Name}Params } from "./{Name}Canvas";

interface Props {
  params: {Name}Params;
  onChange: (params: {Name}Params) => void;
}

// 颜色预设（从源项目 PRESETS 提取）
const COLOR_PRESETS = [
  { id: "preset1", label: "Label", c1: "#hex", c2: "#hex" },
  // ...
];

// 复用 Slider 组件（标准模板）
const Slider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}> = ({ label, value, min, max, step, onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">
        {value.toFixed(step < 0.1 ? 2 : 1)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
  </div>
);

export const {Name}Controls: React.FC<Props> = ({ params, onChange }) => {
  return (
    <>
      {/* 参数滑块卡片 */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Parameters
        </div>
        <div className="flex flex-col gap-3">
          <Slider label="Speed" value={params.speed} min={0} max={5} step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })} />
          {/* ... 其他参数 */}
        </div>
      </div>

      {/* 颜色预设卡片 */}
      <div className="bg-white rounded-xl p-3">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
          Color Presets
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onChange({ ...params, color1: preset.c1, color2: preset.c2 })}
              className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                params.color1 === preset.c1
                  ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              style={{ background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})` }}
              title={preset.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};
```

---

## 步骤 2：注册到 Sidebar（`src/components/Sidebar.tsx`）

### 2.1 扩展 ShaderType 联合类型

```diff
- export type ShaderType = "vortex" | "lumina";
+ export type ShaderType = "vortex" | "lumina" | "{name}";
```

### 2.2 添加 SHADERS 条目

```diff
  const SHADERS: ShaderEntry[] = [
    { id: "vortex", name: "Vortex Portal", description: "Spiral energy field", technique: "FBM + Polar Warp" },
    { id: "lumina", name: "Lumina Flow", description: "Domain warping fluid", technique: "Multi-layer FBM" },
+   { id: "{name}", name: "{Display Name}", description: "{一句话描述}", technique: "{核心技术}" },
  ];
```

---

## 步骤 3：集成到 App（`src/App.tsx`）

需要修改 4 处，按顺序：

### 3.1 添加 import

```typescript
import { {Name}Canvas, type {Name}Params } from "./shaders/{name}/{Name}Canvas";
import { {Name}Controls } from "./shaders/{name}/{Name}Controls";
```

### 3.2 添加默认值常量

```typescript
const DEFAULT_{NAME}: {Name}Params = {
  speed: 0.0,
  color1: "#000000",
  // ... 从源项目 App.tsx 的 useState 默认值提取
};
```

### 3.3 添加 SHADER_META 条目

```typescript
const SHADER_META: Record<ShaderType, { name: string; technique: string }> = {
  // ... 现有条目
  {name}: { name: "{Display Name}", technique: "{核心技术关键词}" },
};
```

### 3.4 在组件内添加 state 和渲染分支

```typescript
// state
const [{name}Params, set{Name}Params] = useState<{Name}Params>(DEFAULT_{NAME});

// Canvas 渲染分支（在 flex-[3] 区域内）
{activeShader === "{name}" && <{Name}Canvas params={{name}Params} />}

// Controls 渲染分支（在 flex-[2] 区域内）
{activeShader === "{name}" && (
  <{Name}Controls params={{name}Params} onChange={set{Name}Params} />
)}
```

---

## 步骤 4：添加技术解读（`src/data/shaderGuides.ts`）

在 `shaderGuides` 对象中添加新条目：

```typescript
export const shaderGuides: Record<ShaderType, ShaderGuide> = {
  // ... 现有条目
  {name}: {
    id: "{name}",
    title: "{Display Name}",
    subtitle: "{中文副标题}",
    oneLiner: "{一句话，零术语，说清楚这个效果做了什么}",
    whatYouSee: "{用日常语言描述视觉现象，200字左右}",
    pipeline: [
      {
        step: "01",
        title: "{步骤标题}",
        description: "{做了什么 + 为什么这么做 + 生活类比}",
        glsl: "// 对应的 1-2 行关键 GLSL 代码",
      },
      // ... 共 5 步
    ],
    concepts: [
      {
        name: "{中文名}",
        nameEN: "{English Name}",
        analogy: "{生活类比，让没有图形学基础的人也能理解}",
        explanation: "{准确的技术解释，可以有术语但要解释}",
        whyItMatters: "{为什么这个概念重要，在更广的领域有什么意义}",
      },
      // ... 3-5 个核心概念
    ],
    applications: [
      { field: "{领域}", examples: "{具体应用举例}" },
      // ... 4 个应用场景
    ],
    keyInsight: "{跨学科的核心洞察，总结本质规律，150字左右}",
  },
};
```

### 内容编写原则（费曼学习法）

1. **先建立直觉**：whatYouSee 用「你看到的是 X」开头，不用「这是 Y 算法」
2. **类比锚定**：每个概念和 pipeline 步骤都需要类比，用已知解释未知
3. **代码↔视觉映射**：pipeline 的 GLSL 片段不需要完整，只要关键的 1-2 行
4. **Why 驱动动力**：concepts 的 whyItMatters 说明「不学这个会怎样 / 学了能干什么」
5. **Key Insight 升华**：不重复前面内容，而是提炼出一个通用规律

---

## 完整 Checklist

添加新 shader 时，逐项检查：

```
□ src/shaders/{name}/shaderSource.ts     — GLSL 源码，uniform 声明齐全
□ src/shaders/{name}/{Name}Canvas.tsx    — 参数接口 + WebGL 渲染组件
□ src/shaders/{name}/{Name}Controls.tsx  — 控制面板（遵循设计规范）
□ src/components/Sidebar.tsx             — ShaderType 联合类型 + SHADERS 条目
□ src/App.tsx                            — import + 默认值 + meta + state + 渲染分支
□ src/data/shaderGuides.ts              — 技术解读内容（5步pipeline + 概念 + 应用）
□ 颜色预设用 w-6 h-6 flex 小方块，不用 grid
□ 控件文字不超过 10px
□ 无 border、无 shadow、纯 neutral 灰度
□ 默认参数来自源项目
```

---

## 常见源项目适配场景

### 场景 A：ShaderToy 风格

源码用 `mainImage(out vec4 fragColor, in vec2 fragCoord)`：

```glsl
// 保留原函数，在 main() 中调用
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  // ... 原始逻辑
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
```

### 场景 B：Uniform 声明在 JS 端拼接

源项目 ShaderCanvas 中用模板字符串注入 uniform：

```typescript
// 源项目
const fullSource = `
  precision mediump float;
  uniform float u_speed;
  ${fragmentShaderSource}
`;
```

**适配**：将 uniform 声明移入 `shaderSource.ts` 的 fragmentShaderSource 顶部。

### 场景 C：使用纹理 / iChannel

如果 shader 依赖 `iChannel0`（噪声纹理等）：
- 需要在 Canvas 组件中创建纹理并绑定
- 这超出标准模板，需要在 Canvas 组件中额外处理
- 参考 WebGL texture binding 标准流程

### 场景 D：Three.js / React Three Fiber 项目

如果源项目使用 Three.js 而非原始 WebGL：
- 提取 ShaderMaterial 的 vertexShader / fragmentShader
- 将 Three.js uniform 转为原始 WebGL uniform
- 如果依赖 Three.js 几何体（非全屏 quad），需要评估是否值得转换
