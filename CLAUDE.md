# Shader Lab 项目指南

## 项目概述

基于 React + Vite + Tailwind 的视觉效果展示平台。包含三大分类：

| 分类 | 定位 | 内容 |
|------|------|------|
| **Shaders** | WebGL Fragment Shader 画廊 | 16 个 GPU 渲染效果，含实时参数控制 |
| **Demos** | 前端动效案例复现 | CodePen 等来源的完整交互 demo |
| **Playground** | CSS/JS 交互实验场 | 轻量级视觉交互效果（光标追踪、文字遮罩等） |

每个条目均包含：实时渲染画布、参数控制面板（可选）、技术解读弹窗。

## 目录结构

```
shader-lab/
├── CLAUDE.md                    # 本文件（Claude Code 自动读取）
├── docs/
│   ├── ADD-SHADER.md           # 新增 shader 的集成指南
│   └── DESIGN-SYSTEM.md        # 设计系统完整规范
├── src/
│   ├── main.tsx                # 入口
│   ├── index.css               # Tailwind + 自定义滑块样式 + scrollbar-hide
│   ├── App.tsx                 # 主应用（状态管理 + 分类路由）
│   ├── components/
│   │   ├── NavRail.tsx         # 64px 图标导航栏（一级分类切换）
│   │   ├── ShaderStrip.tsx     # Shaders 水平 pill 选择器
│   │   ├── DemoStrip.tsx       # Demos 水平 pill 选择器
│   │   ├── PlaygroundStrip.tsx # Playground 水平 pill 选择器
│   │   ├── TechModal.tsx       # 技术解读模态框（通用渲染器）
│   │   └── WorldviewModal.tsx  # Worldview 模态框
│   ├── data/
│   │   ├── shaderTypes.ts      # ShaderType / Category 类型 + SHADERS 数据
│   │   ├── demoTypes.ts        # DemoType 类型 + DEMOS 数据
│   │   ├── playgroundTypes.ts  # PlaygroundType 类型 + PLAYGROUNDS 数据
│   │   ├── shaderGuides.ts     # Shader 技术解读内容
│   │   └── demoGuides.ts       # Demo 技术解读内容
│   ├── shaders/                # Shaders 分类（16 个）
│   │   ├── vortex/             #   每个含 shaderSource.ts + Canvas + Controls
│   │   ├── lumina/
│   │   └── ...
│   ├── demos/                  # Demos 分类
│   │   ├── gooey/              #   Gooey Overlay (Simplex Noise + Scroll)
│   │   └── parallax/           #   Parallax Scroll (SVG + GSAP)
│   └── playground/             # Playground 分类
│       ├── echotrace/          #   EchoTrace (Motion Trail)
│       ├── spotlight/          #   Spotlight (CSS Blend Mode + GSAP)
│       ├── textmask/           #   Text Mask (SVG Mask)
│       └── flip/               #   FLIP (GSAP FLIP Animation)
```

## 常用命令

```bash
npm run dev       # 启动开发服务器 (Vite)
npm run build     # 生产构建
```

---

## 设计系统

详见 `docs/DESIGN-SYSTEM.md`。包含颜色层级、文字、圆角、字号、交互状态、组件模板、布局结构、NavRail/Strip 规则、禁止事项等完整规范。

---

## 添加新内容

本项目采用 **一级分类（Category）→ 二级条目（Strip pill）** 的结构。

### 判断归属分类

| 场景 | 做法 |
|------|------|
| 用户明确指定了分类（如 "添加到 Playground"） | 直接放入对应分类 |
| 用户未指定，内容是 GLSL fragment shader | 放入 **Shaders** |
| 用户未指定，内容是完整前端交互 demo（含 HTML/CSS/JS） | 放入 **Demos** |
| 用户未指定，内容是轻量 CSS/JS 视觉交互效果 | 放入 **Playground** |
| 用户要求创建全新分类 | 新建分类（见下方流程） |

### 添加新分类

1. `src/data/shaderTypes.ts` — 扩展 `Category` 联合类型
2. `src/data/{category}Types.ts` — 新建条目类型 + 数据数组
3. `src/components/{Category}Strip.tsx` — 新建水平 pill 选择器
4. `src/components/NavRail.tsx` — 在 `NAV_ITEMS` 添加图标入口
5. `src/App.tsx` — 添加 `activeCategory === "{name}"` 渲染分支

### 向已有分类添加条目

各分类的添加流程模式一致：

| 步骤 | Shaders | Demos | Playground |
|------|---------|-------|------------|
| 1. 创建目录 | `src/shaders/{name}/` | `src/demos/{name}/` | `src/playground/{name}/` |
| 2. 必要文件 | shaderSource.ts + Canvas + Controls | Canvas（+ Controls 可选） | Canvas + Controls + types.ts + constants.ts |
| 3. 注册类型 | `shaderTypes.ts` 的 `ShaderType` + `SHADERS` | `demoTypes.ts` 的 `DemoType` + `DEMOS` | `playgroundTypes.ts` 的 `PlaygroundType` + `PLAYGROUNDS` |
| 4. 集成 App | `App.tsx` 添加 import、默认值、渲染分支 | 同左 | 同左 |
| 5. 技术解读 | `shaderGuides.ts` | `demoGuides.ts` | 待建 `playgroundGuides.ts` |

Shader 详细集成步骤另见 `docs/ADD-SHADER.md`。

---

## 集成外部项目（GitHub 仓库 / 代码包）

当用户提供一个完整的外部项目（GitHub 仓库、下载的代码包等）要求集成时，**必须遵循以下原则**：

### 核心原则：原版代码零改写

> **不要改写原版代码。不要用 CDN 替换本地依赖。不要用 React 重写。不要用 srcdoc 拼接。**
> 原版怎么跑的，就原封不动地让它跑。

### 标准流程

1. **完整复制原版项目到 `public/{name}/`**
   ```
   public/{name}/
   ├── index.html          # 原版入口
   ├── css/                # 原版样式
   ├── js/                 # 原版脚本（含依赖库的 min.js）
   └── img/ 或 assets/     # 原版资源
   ```
   - 保持原版目录结构不变
   - 所有依赖（GSAP、Lenis、Three.js 等）使用原版自带的本地文件，不替换为 CDN
   - 图片、字体等资源路径不修改

2. **创建极简 Canvas 组件** (`src/demos/{name}/{Name}Canvas.tsx`)
   ```tsx
   import React from "react";

   export const XxxCanvas: React.FC = () => (
     <div className="w-full h-full relative">
       <iframe
         src="/{name}/index.html"
         className="w-full h-full border-0"
         title="Xxx Demo"
       />
     </div>
   );
   ```
   - 用 `src` 属性指向 `public/` 下的原版 HTML，**不用 `srcdoc`**
   - 组件只做一件事：提供 iframe 容器

3. **注册到项目**（同「向已有分类添加条目」流程）
   - `demoTypes.ts` 添加类型 + 数据
   - `App.tsx` 添加 import + header 信息 + 渲染分支
   - `demoGuides.ts` 添加技术解读

### 禁止事项

| 禁止 | 原因 |
|------|------|
| 用 CDN 链接替换原版本地 JS 文件 | 可能加载失败、版本不一致 |
| 用 `srcdoc` 拼接 HTML/CSS/JS 字符串 | 资源路径解析问题、脚本加载顺序问题 |
| 用 React 重写原版 HTML + 手动调 GSAP/ScrollTrigger | 行为差异大、调试成本高、容易丢失效果 |
| npm install 原版依赖然后在 React 中 import | 原版代码依赖全局变量和 DOM 操作，不适合 React 生命周期 |
| 修改原版 CSS/JS 代码 | 破坏原版效果的完整性 |

### 已有案例

- `public/scrollformations/` — OnScrollLayoutFormations (Codrops)，9 种滚动驱动网格变阵

---

## 技术解读内容编写规范

每个条目都必须有技术解读（TechModal）。**不同分类的侧重点不同：**

### Shaders — 费曼学习法（理解原理）

目标：让用户从「看到效果」到「理解原理」，建立直觉式认知。

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

### Demos / Playground — 术语赋能（学会描述）

目标：让用户从「喜欢这个效果但说不清」到「能用专业术语精准描述给 AI」。

设计初衷：用户看到一个喜欢的效果 → 点击技术解读 → 学会对应的专业名词 → 之后与 AI 交流时能准确描述需求，而不是模糊地说「那种滑滑的效果」。

编写侧重点：

1. **oneLiner** — 一句话，突出效果的**专业名称**（如 "基于 Simplex Noise 的滚动驱动液态形变动画"）
2. **whatYouSee** — 描述视觉现象时**自然引入术语**（如 "你看到的液态变形效果叫 Metaball / Gooey Effect"）
3. **pipeline** — 实现步骤中**标注每步对应的技术名词**，附关键代码片段
4. **concepts** — 核心概念聚焦于**用户向 AI 描述时会用到的术语**：
   - `analogy`：直觉类比
   - `explanation`：技术含义 + 该术语在业界的通用叫法
   - `whyItMatters`：「知道这个词后，你就能对 AI 说 ____」
5. **applications** — 展示这类效果的常见应用场景
6. **keyInsight** — 总结「这类效果的本质是什么」，帮助用户举一反三
