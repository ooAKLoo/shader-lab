# Shader Lab 项目指南

## 项目概述

基于 React + Vite + Tailwind 的 WebGL Shader 展示平台。每个 demo 包含实时渲染画布、参数控制面板、以及费曼式技术解读弹窗。

## 目录结构

```
shader-lab/
├── CLAUDE.md                    # 本文件（Claude Code 自动读取）
├── docs/
│   ├── ADD-SHADER.md           # 新增 shader 的集成指南
│   └── DESIGN-SYSTEM.md        # 设计系统完整规范
├── src/
│   ├── main.tsx                # 入口
│   ├── index.css               # Tailwind + 自定义滑块样式
│   ├── App.tsx                 # 主应用（状态管理 + 路由）
│   ├── components/
│   │   ├── Sidebar.tsx         # 左侧导航（ShaderType 联合类型定义处）
│   │   └── TechModal.tsx       # 技术解读模态框（通用渲染器）
│   ├── data/
│   │   └── shaderGuides.ts     # 所有 shader 的技术解读内容
│   └── shaders/
│       ├── vortex/             # Vortex Portal
│       │   ├── shaderSource.ts     # GLSL vertex + fragment
│       │   ├── VortexCanvas.tsx    # WebGL 渲染组件
│       │   └── VortexControls.tsx  # 参数控制面板
│       └── lumina/             # Lumina Flow
│           ├── shaderSource.ts
│           ├── LuminaCanvas.tsx
│           └── LuminaControls.tsx
```

## 常用命令

```bash
npm run dev       # 启动开发服务器 (Vite)
npm run build     # 生产构建
```

---

## 设计系统

详见 `docs/DESIGN-SYSTEM.md`。包含颜色层级、文字、圆角、字号、交互状态、组件模板、布局结构、Sidebar 滚动规则、禁止事项等完整规范。

---

## 添加新 Shader

详见 `docs/ADD-SHADER.md`。

简要流程：
1. `src/shaders/{name}/` 下创建 3 个文件
2. `src/components/Sidebar.tsx` 添加类型和条目
3. `src/App.tsx` 添加 import、默认值、meta、渲染分支
4. `src/data/shaderGuides.ts` 添加技术解读内容

---

## 技术解读内容编写规范（费曼学习法）

每个 shader 的 guide 需按以下认知递进顺序编写：

1. **oneLiner** — 一句话总结，零术语
2. **whatYouSee** — 用日常语言描述视觉现象，建立感性认知
3. **pipeline** — 5 步渲染流水线，每步必须包含：
   - 类比（让人「啊原来如此」）
   - GLSL 代码片段（建立代码↔视觉的映射）
4. **concepts** — 核心概念，每个三层结构：
   - `analogy`：生活类比（斜体展示）
   - `explanation`：准确的技术解释
   - `whyItMatters`：为什么这个概念重要
5. **applications** — 4 个实际应用场景（建立「学了能干什么」的动力）
6. **keyInsight** — 跨学科的核心洞察，提炼本质规律
