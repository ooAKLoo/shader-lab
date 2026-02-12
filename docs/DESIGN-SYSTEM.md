# 设计系统

## 核心理念

极简、扁平、Linear/ScreenStudio 风格。**通过背景色层级交替 + 圆角模块分割建立视觉层次，不使用 border 和 shadow。**

## 颜色层级系统

通过 白→灰→白→灰 交替嵌套区分层级：

| 层级 | 颜色 | Tailwind | 用途 |
|------|------|----------|------|
| L0 页面底色 | `#f8f8f8` | `bg-[#f8f8f8]` | 最外层 body/page |
| L1 面板 | `#ffffff` | `bg-white` | 主内容面板、控制卡片、模态框 |
| L2 容器 | `neutral-100` | `bg-neutral-100` | 预览区、控制面板外壳、分组按钮底色 |
| L3 嵌套 | `neutral-50` | `bg-neutral-50` | 输入框内底、代码片段底色 |
| L4 控件轨道 | `neutral-200` | `bg-neutral-200` | 滑块轨道 |

## 文字颜色

| 用途 | Tailwind |
|------|----------|
| 页面标题 | `text-neutral-700` |
| 区块标签 | `text-neutral-400` |
| 正文/描述 | `text-neutral-500` |
| 强调数值 | `text-neutral-700` |
| 激活态文字 | `text-white`（配合 `bg-neutral-800`） |

## 圆角层级

由外到内递减：

| 元素 | Tailwind | 场景 |
|------|----------|------|
| `rounded-3xl` | 24px | 最外层白色面板、模态框 |
| `rounded-2xl` | 16px | 预览区容器、控制面板外壳、模态框内容块 |
| `rounded-xl` | 12px | 控制卡片、列表项 |
| `rounded-lg` | 8px | 按钮、输入框、颜色预设方块、代码块 |

## 字号层级

| 级别 | 大小 | 用途 | 完整 class |
|------|------|------|-----------|
| 标题 | 13-14px | 面板标题 | `text-[13px] font-medium text-neutral-700` |
| 副标题 | 11px | 条目名称、正文 | `text-[11px] font-medium text-neutral-700` |
| 控件 | 10px | 按钮文字、描述 | `text-[10px] font-medium` |
| 标签 | 9px | 区块标签、数值 | `text-[9px] font-medium text-neutral-400 uppercase tracking-wide` |
| 微型 | 8px | badge、图例 | `text-[8px] text-neutral-400` |

## 交互状态

统一的选中/未选中二态：

```tsx
// 选中
"bg-neutral-800 text-white"

// 未选中
"bg-neutral-100 text-neutral-500 hover:bg-neutral-200"

// 图标按钮
"bg-neutral-100 hover:bg-neutral-200 text-neutral-400 hover:text-neutral-600"
```

## 控制卡片模板

每个白色控制卡片的标准结构：

```tsx
<div className="bg-white rounded-xl p-3 mb-2">
  {/* 区块标签 */}
  <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
    SECTION LABEL
  </div>
  {/* 具体控件 */}
</div>
```

- 卡片之间 `mb-2`，最后一个不加
- 卡片内用 `gap-3`（滑块组）或 `gap-1.5`（按钮组）

## 滑块控件

```tsx
<div>
  <div className="flex items-center justify-between mb-1">
    <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
      {label}
    </span>
    <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">
      {value.toFixed(1)}
    </span>
  </div>
  <input
    type="range"
    className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
  />
</div>
```

## 颜色预设方块

**必须用 `w-6 h-6` 小方块 + `flex flex-wrap`，不用 grid 大方块：**

```tsx
<div className="flex flex-wrap gap-1.5">
  <button
    className={`w-6 h-6 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
      selected
        ? "ring-2 ring-neutral-800 ring-offset-1 scale-110"
        : "opacity-70 hover:opacity-100 hover:scale-105"
    }`}
    style={{ background: `linear-gradient(135deg, ...)` }}
  />
</div>
```

## 模态框结构

```
白色 rounded-3xl 容器 (max-w-[640px], max-h-[85vh])
  ├─ Header: 标题 + 副标题 + 关闭按钮
  └─ 滚动内容区
      ├─ neutral-100 rounded-2xl: What You See
      ├─ neutral-100 rounded-2xl: Rendering Pipeline
      │     └─ 白色 rounded-xl 步骤卡片 (×5)
      │           └─ neutral-50 rounded-lg 代码块
      ├─ neutral-100 rounded-2xl: Core Concepts
      │     └─ 白色 rounded-xl 概念卡片
      │           └─ neutral-50 rounded-lg 类比区
      ├─ neutral-100 rounded-2xl: Applications (grid-cols-2)
      └─ neutral-800 rounded-2xl: Key Insight (深色反转)
```

## 布局结构

```
┌────────────────────────────────────────────────────────┐
│ bg-[#f8f8f8] 页面底色, h-screen flex p-3 gap-3        │
│ ┌──────┬──────────────────────────────────────────────┐│
│ │ Rail │  Main Panel (white rounded-3xl)              ││
│ │ 64px │  ┌─ Header (py-3, 标题 + 技术标签 + ?) ────┐││
│ │      │  │                                           │││
│ │ Logo │  ├─ ShaderStrip (水平滚动 pill 选择器) ─────┤││
│ │      │  │                                           │││
│ │[icon]│  ├─ Content (flex-1 flex gap-4) ─────────────┤││
│ │Shade │  │ ┌────────────────┐ ┌────────────────────┐│││
│ │      │  │ │ Canvas         │ │ Controls           ││││
│ │[icon]│  │ │ flex-[3]       │ │ flex-[2]           ││││
│ │Play  │  │ │ neutral-100    │ │ neutral-100        ││││
│ │      │  │ │ rounded-2xl    │ │ rounded-2xl        ││││
│ │      │  │ │                │ │ ┌white cards──────┐││││
│ │      │  │ │ <Canvas/>      │ │ │ Parameters      │││││
│ │      │  │ │                │ │ │ Presets         │││││
│ │[info]│  │ │                │ │ └────────────────┘││││
│ │      │  │ └────────────────┘ └────────────────────┘│││
│ │      │  └───────────────────────────────────────────┘││
│ └──────┴──────────────────────────────────────────────┘│
└────────────────────────────────────────────────────────┘
```

## NavRail 结构

NavRail 为 64px 宽的垂直图标导航栏，内部分三个区域：

| 区域 | 行为 | 关键 class |
|------|------|-----------|
| Logo | **固定顶部** | `w-10 h-10 rounded-xl bg-neutral-800` |
| 分类按钮 | **垂直排列** | `w-10 h-10 rounded-xl` + 激活/非激活态 |
| Info 指示 | **固定底部** | `mt-auto` |

- 激活态：`bg-neutral-800 text-white rounded-xl`
- 非激活态：`text-neutral-400 hover:bg-neutral-100`
- 标签：`text-[8px] uppercase tracking-wide`

## ShaderStrip 滚动规则

ShaderStrip 为水平滚动 pill 选择器：

- 容器：`flex gap-1.5 overflow-x-auto scrollbar-hide`
- 自动滚动到激活 pill（`scrollIntoView`）
- 每个 pill：`px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap`

## 禁止事项

- **不使用 border** — 用背景色层级区分
- **不使用 shadow** — 保持完全扁平
- **不使用自定义 CSS**（index.css 中的滑块样式除外）— 统一 Tailwind
- **不使用鲜艳色彩** — 仅 neutral 灰度色系
- **控件文字不超过 10px**
- **颜色预设不用 grid 大方块** — 用 `w-6 h-6` flex 小方块
- **不在 canvas 画布上叠加控件** — 控件在独立的右侧面板
