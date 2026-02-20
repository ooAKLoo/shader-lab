import type { DemoType } from "./demoTypes";

export interface DemoGuide {
  id: DemoType;
  title: string;
  subtitle: string;
  oneLiner: string;
  whatYouSee: string;
  pipeline: Array<{
    step: string;
    title: string;
    description: string;
    glsl?: string;
  }>;
  concepts: Array<{
    name: string;
    nameEN: string;
    analogy: string;
    explanation: string;
    whyItMatters: string;
  }>;
  applications: Array<{
    field: string;
    examples: string;
  }>;
  keyInsight: string;
}

export const demoGuides: Record<DemoType, DemoGuide> = {
  gooey: {
    id: "gooey",
    title: "Gooey Overlay",
    subtitle: "滚动驱动液态形变",
    oneLiner:
      "基于 Simplex Noise 的滚动驱动液态形变动画——让噪声变成液体，让滚动变成引力",
    whatYouSee:
      "屏幕上有 9 列垂直的液滴通道。当你滚动页面时，就像开启了引力——每条通道中的液滴开始下落，形成粘稠的水滴形态。你看到的液态变形效果叫 **Gooey Effect / Metaball Effect**。滴落的时机、速度都略有不同，创造出有机的、不可预测的视觉节奏。背景的噪声纹理也随滚动逐渐上涌，像是液体从底部慢慢填满整个画面。",
    pipeline: [
      {
        step: "01",
        title: "生成噪声基底 (Simplex Noise)",
        description:
          "用 Simplex Noise 生成有机纹理——不是完全随机的噪点，而是有连续性、有结构的灰度分布。就像在白纸上撒盐粒，每个位置的盐粒密度不同，形成自然的纹理基底。",
        glsl: `// Simplex Noise 生成有机纹理
float shape = snoise(noise_uv);
shape = clamp(.5 + .5 * shape, 0., 1.);`,
      },
      {
        step: "02",
        title: "创建 9 条液滴通道 (Column Layout)",
        description:
          "把画布垂直划分成 9 条独立的「车道」，每条车道用自己的随机种子运行独立的水滴动画。各通道的相位偏移产生参差不齐的视觉节奏。",
        glsl: `const int num_col = 9;
for (int i = 0; i < num_col; i++) {
    // 每条通道有独立的随机种子
    float start_time_offset = rand(100. * (float(i) + u_seed));
}`,
      },
      {
        step: "03",
        title: "计算液滴下落时序 (Segmented Easing)",
        description:
          "液滴的运动分为两个阶段：积累期（before_drop）缓慢蓄力，到达临界点后突然下落（after_drop）急速坠落。这种分段缓动（Segmented Easing）让水滴具有重量感和张力感。",
        glsl: `// 分段缓动：积累期 → 下落期
float before_drop_t = pow(before_drop_normal, .4) * drop_time;
float after_drop_t = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);`,
      },
      {
        step: "04",
        title: "绘制液滴形态 (SDF Composition)",
        description:
          "用 SDF（有符号距离场）组合两种基本形状：圆形画水滴主体（dot），竖条画拉伸的液体尾巴（bar）。两者叠加产生有机的液滴轮廓。",
        glsl: `// 圆形水滴
float dot = get_l(dot_uv);
dot = pow(dot, 4.);
// 竖条尾巴
float bar = smoothstep(-.5, 0., bar_uv.x)
          * (1. - smoothstep(0., .5, bar_uv.x));`,
      },
      {
        step: "05",
        title: "应用 Gooey 效果 (Threshold Blending)",
        description:
          "用 smoothstep 对噪声形状做阈值处理——在 0.48~0.5 范围内产生平滑的 0→1 过渡，创造液体的「表面张力」效果。多层 smoothstep 叠加实现 Gooey/Metaball 特有的粘稠融合感。",
        glsl: `// Gooey 阈值处理
float gooey = smoothstep(.48, .5, shape);
gooey -= .1 * smoothstep(.5, .6, shape);`,
      },
    ],
    concepts: [
      {
        name: "Simplex 噪声",
        nameEN: "Simplex Noise",
        analogy:
          "想象自然界的云彩纹理——不是完全随机的噪点，而是有连续性、有结构的随机分布",
        explanation:
          "Simplex Noise 是 Perlin Noise 的改进版，通过梯度插值在任意维度生成平滑连续的随机值。相邻像素值有关联性，形成自然的有机纹理。它是创造「看起来自然」的效果的核心工具。",
        whyItMatters:
          "知道 Simplex Noise 这个词后，你就能对 AI 说「用 Simplex Noise 生成有机纹理作为液态动画的基底」——而不是说「那种自然的随机花纹」。",
      },
      {
        name: "滚动进度映射",
        nameEN: "Scroll Progress Mapping",
        analogy:
          "把鼠标滚轮变成时间机器的把手——滚动幅度直接映射到动画进度 0→1",
        explanation:
          "通过 u_scroll_progr (0.0 → 1.0) 将页面滚动量映射到着色器参数，控制液滴下落位置、背景噪声上涌高度。这种模式叫 Scroll-Driven Animation，CSS 新规范中也引入了 scroll-timeline。",
        whyItMatters:
          "知道 Scroll Progress Mapping 后，你就能对 AI 说「用 scroll progress 0-1 驱动 shader 的 uniform 参数」——精确描述滚动与动画的绑定关系。",
      },
      {
        name: "分段缓动函数",
        nameEN: "Segmented Easing",
        analogy:
          "水滴不是匀速下落——先慢慢积累（低次幂缓动），突破临界点后急速坠落（高次幂缓动）",
        explanation:
          "通过 pow(t, 0.4) 和 pow(t, 2) 创造非线性的时间映射。积累期用低次幂让变化平缓，下落期用高次幂让加速度显著。这是「有生命力」动画的秘诀——自然界的运动很少是匀速的。",
        whyItMatters:
          "知道 Segmented Easing 后，你就能对 AI 说「用分段缓动：前半段 ease-out（积累），后半段 ease-in（释放），模拟水滴下落」——比说「先慢后快」精确得多。",
      },
      {
        name: "Gooey / Metaball 效果",
        nameEN: "Gooey / Metaball Effect",
        analogy:
          "用数学的平滑阶跃函数创造液体的「表面张力」——让两个靠近的形状像水银一样融合",
        explanation:
          "smoothstep(0.48, 0.5, shape) 在阈值附近产生平滑的 0→1 过渡。在 CSS/SVG 领域，同样的效果可以用 feGaussianBlur + feColorMatrix 滤镜实现。在 shader 中用 smoothstep 更高效。",
        whyItMatters:
          "知道 Gooey Effect / Metaball 后，你就能对 AI 说「我想要 Gooey Effect，两个形状靠近时融合成一体」——AI 就知道该用 blur + contrast 或 smoothstep threshold。",
      },
    ],
    applications: [
      {
        field: "加载动画",
        examples:
          "用液滴下落替代传统进度条，传达「内容正在流入」的隐喻",
      },
      {
        field: "滚动转场",
        examples:
          "页面切换时用液体覆盖/揭开效果，创造流畅的过渡",
      },
      {
        field: "数据可视化",
        examples:
          "将实时数据流映射为液滴速度/密度，让数字变得有机可感",
      },
      {
        field: "品牌动效",
        examples:
          "适合有机/自然/流动特质的品牌，打造独特的视觉记忆点",
      },
    ],
    keyInsight:
      "**滚动不只是导航，也是叙事的节奏控制器**。这个 demo 展示了如何用物理隐喻（重力、液体）让抽象的滚动量变得具象可感。核心术语链：**Scroll-Driven Animation**（滚动驱动）→ **Simplex Noise**（有机纹理）→ **Segmented Easing**（分段缓动）→ **Gooey/Metaball**（液态融合）。掌握这四个词，你就能精准描述这一整类效果。",
  },

  parallax: {
    id: "parallax",
    title: "Parallax Scroll",
    subtitle: "多层视差滚动叙事",
    oneLiner:
      "基于 GSAP ScrollTrigger 的多层视差滚动动画——用分层速度差异在 2D 画布上创造 3D 深度错觉",
    whatYouSee:
      "一个梦幻的山谷风景从白天过渡到黑夜。当你滚动时，不同图层以不同速度移动——这就是 **Parallax Scrolling（视差滚动）**。远处的山峦慢悠悠上升，近处的山丘快速掠过，云朵四散飘走，太阳从地平线升起又沉入夜空。中途有鸟飞过，傍晚蝙蝠群出现，最后繁星闪烁。整个过程由 **ScrollTrigger** 的 scrub 模式驱动，滚动即时间。",
    pipeline: [
      {
        step: "01",
        title: "分层定义场景深度 (Layer Separation)",
        description:
          "把风景画拆成多张透明图层——最远的山、中景的山、近景的山、云彩、鸟……每层是 SVG 中的独立 <g> 元素。图层数量和深度分配决定了视差的层次感。",
        glsl: `<!-- SVG 中的图层组织 -->
<g id="h1-1"><!-- 最远山丘 --></g>
<g id="h1-3"><!-- 中景山丘 --></g>
<g id="h1-7"><!-- 近景山丘 --></g>`,
      },
      {
        step: "02",
        title: "绑定滚动时间轴 (ScrollTrigger Binding)",
        description:
          "用 GSAP ScrollTrigger 把滚动条变成时间轴控制器。scrub: 3 表示动画以 3 秒的平滑延迟跟随滚动——值越大惯性越强，越流畅但响应越慢。start/end 定义触发区间。",
        glsl: `ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3  // 滚动与动画的耦合度
});`,
      },
      {
        step: "03",
        title: "按深度分配速度 (Depth-Speed Mapping)",
        description:
          "视差的核心：远景移动慢，近景移动快。速度比例约为 远景:中景:近景 ≈ 1:2:4。就像坐车看窗外——远山几乎静止，近处的树飞快掠过，大脑自动推断出深度。",
        glsl: `// 远山移动慢（speed × 1.7）
scene1.to("#h1-3", { y: 1.7 * speed }, 0);
// 近山移动快（speed × 5）
scene1.to("#h1-7", { y: 5 * speed }, 0);`,
      },
      {
        step: "04",
        title: "编排多场景过渡 (Multi-Scene Choreography)",
        description:
          "像电影分镜一样拆分叙事——Scene 1 白天 → Scene 2 黄昏 → Scene 3 夜晚。每个场景有独立的 gsap.timeline() 和 ScrollTrigger 区间，区间可部分重叠实现平滑过渡。",
        glsl: `// Scene 1: 0-45% 滚动
let scene1 = gsap.timeline();
// Scene 2: 15-40% 滚动（有重叠）
let scene2 = gsap.timeline();
// Scene 3: 70-100% 滚动
let scene3 = gsap.timeline();`,
      },
      {
        step: "05",
        title: "添加细节动画 (Detail Animation)",
        description:
          "在主叙事之外添加微动画：鸟飞行时改变朝向（scaleX 翻转）、星星闪烁（opacity 脉冲）、SVG 渐变色随滚动过渡（白天蓝→黄昏橙→夜晚紫）。这些细节增强生命力。",
        glsl: `// 鸟的飞行 + 翻转
onEnter: function() {
    gsap.to("#bird", { scaleX: 1, rotation: 0 });
},
onLeave: function() {
    gsap.to("#bird", { scaleX: -1, rotation: -15 });
}`,
      },
    ],
    concepts: [
      {
        name: "视差滚动",
        nameEN: "Parallax Scrolling",
        analogy:
          "坐在火车上看窗外——远处的山移动慢，近处的树飞快掠过，大脑自动推断出深度",
        explanation:
          "通过让不同图层以不同速度响应滚动，模拟真实世界的运动视差效应（Motion Parallax）。近景移动速度是远景的 3-5 倍即可创造可信的深度错觉。这是 2D 屏幕上创造 3D 沉浸感的最经典技巧。",
        whyItMatters:
          "知道 Parallax Scrolling 后，你就能对 AI 说「做一个 5 层视差滚动，速度比例 1:1.5:2:3:5，scrub 模式」——而不是说「那种有立体感的滚动效果」。",
      },
      {
        name: "ScrollTrigger Scrub",
        nameEN: "GSAP ScrollTrigger scrub",
        analogy:
          "把滚动条变成视频播放器的进度条——可以前进、后退、暂停在任意帧",
        explanation:
          "scrub 参数将滚动位置映射到动画进度。scrub: true 表示即时跟随，scrub: 3 表示以 3 秒的平滑过渡跟随。这是 Scroll-Driven Animation 的核心机制，CSS 新规范的 scroll-timeline 也是同一概念。",
        whyItMatters:
          "知道 ScrollTrigger scrub 后，你就能对 AI 说「用 ScrollTrigger 的 scrub: 2 绑定 timeline，trigger 从 top top 到 bottom bottom」——精确控制滚动与动画的耦合。",
      },
      {
        name: "SVG 渐变动画",
        nameEN: "SVG Gradient Animation",
        analogy:
          "不只移动图形，还动态修改颜色渐变——让太阳从黄色过渡到橙红，天空从蓝色变为紫色",
        explanation:
          "通过 GSAP tween SVG <radialGradient> 的 stop-color 和 offset 属性，实现光照、氛围的平滑过渡。SVG 渐变属性可以像任何 CSS 属性一样被动画化。",
        whyItMatters:
          "知道 SVG Gradient Animation 后，你就能对 AI 说「用 GSAP 动画 SVG radialGradient 的 stop-color，从 #FFD700 渐变到 #FF4500」——精准描述颜色过渡需求。",
      },
      {
        name: "分层时间线",
        nameEN: "Layered Timeline",
        analogy:
          "像 Premiere 的多轨道时间线——每个场景是一条轨道，可以交叉重叠、独立调试",
        explanation:
          "每个 gsap.timeline() 是独立的动画序列，通过不同的 ScrollTrigger 区间控制。Scene 1(0-45%) 和 Scene 2(15-40%) 可以重叠，创造自然的场景过渡而非硬切。",
        whyItMatters:
          "知道 Layered Timeline 后，你就能对 AI 说「创建 3 条 gsap.timeline，分别绑定 ScrollTrigger 的不同区间，Scene 1 和 2 重叠 20%」——这是组织复杂叙事动画的标准模式。",
      },
    ],
    applications: [
      {
        field: "品牌叙事页",
        examples:
          "用滚动讲述品牌故事，每屏一个场景，沉浸式体验",
      },
      {
        field: "产品介绍页",
        examples:
          "展示产品从设计到生产的过程，滚动即「时间推进」",
      },
      {
        field: "在线绘本/漫画",
        examples:
          "用滚动控制故事推进，结合视差创造立体感",
      },
      {
        field: "游戏关卡选择",
        examples:
          "横向滚动的地图，远近山峦移动速度不同，增强探索感",
      },
    ],
    keyInsight:
      "**滚动可以是叙事的节奏控制器，而非单纯的内容浏览工具**。核心术语链：**Parallax Scrolling**（分层速度差 → 深度错觉）→ **ScrollTrigger scrub**（滚动 → 时间轴映射）→ **Layered Timeline**（多场景编排）→ **SVG Gradient Animation**（色彩 → 情绪过渡）。记住黄金比例：远景:中景:近景 ≈ 1:2:4，这是可信视差的起点。",
  },

  frosted: {
    id: "frosted",
    title: "Frosted Glass",
    subtitle: "CSS 毛玻璃卡片",
    oneLiner:
      "基于 CSS backdrop-filter 的毛玻璃卡片预览效果——纯 CSS 实现 Glassmorphism 设计风格",
    whatYouSee:
      "三张卡片并排展示，每张卡片底部覆盖着一层「磨砂玻璃」——你可以透过玻璃隐约看到背景图片，但图片被模糊化了，同时饱和度和亮度也有微调。这种效果叫 **Glassmorphism**，也叫 **Frosted Glass Effect**。当鼠标悬停时，卡片整体放大，背景图片有微妙的缩放视差，弹性缓动让动画富有质感。",
    pipeline: [
      {
        step: "01",
        title: "构建卡片层叠结构 (Layered Card)",
        description:
          "三层结构：底层是全覆盖的背景图片（absolute + object-fit: cover），中层是 ::after 伪元素（承载毛玻璃效果），顶层是文字内容（z-index: 2）。卡片用 CSS Grid 的 align-content: end 让内容贴底。",
        glsl: `<div class="previewCard">
  <img class="backdrop" />  <!-- 底层：全覆盖背景图 -->
  <!-- ::after 伪元素 -->    <!-- 中层：毛玻璃层 -->
  <div class="content">     <!-- 顶层：文字内容 z-index:2 -->
    <div class="category">Instant</div>
    <div class="title">Soul Shatter</div>
    <div class="description">...</div>
  </div>
</div>`,
      },
      {
        step: "02",
        title: "::after 伪元素承载毛玻璃 (backdrop-filter)",
        description:
          "关键：毛玻璃效果不是在内容区域上，而是用 ::after 伪元素覆盖整张卡片。inset: 0 + border-radius: inherit 让伪元素完全贴合卡片的圆角边界（注意：不要用负 inset，backdrop-filter 在某些浏览器中不会被 overflow: hidden 正确裁切，会导致直角露出）。backdrop-filter 三件套：blur 模糊、saturate 增饱和、brightness 降亮度。",
        glsl: `.previewCard::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit; /* 贴合父级圆角 */
  z-index: 1;
  pointer-events: none;
  backdrop-filter:
    blur(1.5rem)
    saturate(1.5)
    brightness(0.85);
}`,
      },
      {
        step: "03",
        title: "mask-image 控制磨砂范围 (Gradient Mask)",
        description:
          "核心技巧：用 mask-image 渐变遮罩控制「哪里磨砂、哪里清晰」。顶部 transparent → 40% 处 0.1 不透明 → 55% 处 0.5 → 75% 处完全不透明。效果是：卡片上半部分清晰展示原图，下半部分逐渐磨砂，底部完全模糊。",
        glsl: `.previewCard::after {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,        /* 顶部：完全清晰 */
    rgba(0,0,0,0.1) 40%,  /* 开始微微磨砂 */
    rgba(0,0,0,0.5) 55%,  /* 明显磨砂 */
    black 75%              /* 底部：完全磨砂 */
  );
}`,
      },
      {
        step: "04",
        title: "白色渐变叠加层 (Subtle Overlay)",
        description:
          "::after 伪元素同时叠加一层微妙的白色渐变：从顶部完全透明到底部 20% 白色。这给磨砂区域增加了「雾气感」，让文字区域的对比度更好，同时不破坏整体暗色调。",
        glsl: `.previewCard::after {
  background: linear-gradient(
    to bottom,
    rgba(255,255,255, 0) 0%,
    rgba(255,255,255, 0.2) 100%
  );
}`,
      },
      {
        step: "05",
        title: "Hover 多层缩放 (Layered Scale)",
        description:
          "悬停时三层动画同时触发：卡片 scale(1.05)、背景图 scale(1.1)、箭头 SVG scale(1.5)。不同缩放比例产生微妙的层次差异。transition 时长也不同：卡片 250ms、图片 500ms（更柔和），创造错落感。",
        glsl: `.previewCard:hover { transform: scale(1.05); }
.previewCard:hover img { transform: scale(1.1); }
.previewCard:hover svg { transform: scale(1.5); }
/* 卡片 250ms / 图片 500ms ease-in-out */`,
      },
    ],
    concepts: [
      {
        name: "backdrop-filter",
        nameEN: "CSS backdrop-filter",
        analogy:
          "filter 模糊自己，backdrop-filter 模糊身后——一个是自己戴墨镜，一个是窗户变成磨砂玻璃",
        explanation:
          "CSS backdrop-filter 对元素背后的区域应用图形效果（blur、saturate、brightness 等），不影响元素自身内容。这是实现 Glassmorphism 的核心属性，浏览器实时合成背景内容并应用滤镜。所有现代浏览器均已支持。",
        whyItMatters:
          "知道 backdrop-filter 后，你就能对 AI 说「给这个卡片加 backdrop-filter: blur(12px) saturate(1.6) 的毛玻璃效果」——而不是模糊地说「让背景变模糊」。",
      },
      {
        name: "Glassmorphism",
        nameEN: "Glassmorphism Design Style",
        analogy:
          "iOS 控制中心、macOS 菜单栏的半透明模糊效果——这种设计风格有个专业名字",
        explanation:
          "Glassmorphism 是一种 UI 设计风格，核心特征：半透明背景 + 背景模糊 + 微妙边框 + 阴影。源自 Apple 的 Design Language，后成为 Web 设计趋势。关键参数：background rgba 透明度 5-15%、blur 8-20px、border 1px rgba 白色 10-20%。",
        whyItMatters:
          "知道 Glassmorphism 后，你就能对 AI 说「做一个 Glassmorphism 风格的卡片，blur 12px，背景透明度 8%，白色微光边框」——精准描述设计需求。",
      },
      {
        name: "mask-image 渐变遮罩",
        nameEN: "CSS mask-image",
        analogy:
          "给元素套一个渐变的「能见度罩」——黑色区域完全可见，透明区域完全隐藏",
        explanation:
          "CSS mask-image 用图像或渐变控制元素的可见区域。linear-gradient(to bottom, transparent, black) 让顶部渐隐、底部完全显示。支持与 mask-composite 组合实现复杂遮罩。",
        whyItMatters:
          "知道 mask-image 后，你就能对 AI 说「用 mask-image: linear-gradient 做一个顶部 20% 渐隐的遮罩」——而不是说「让边缘慢慢消失」。",
      },
      {
        name: "cubic-bezier 弹性缓动",
        nameEN: "Cubic Bezier Easing",
        analogy:
          "不是匀速变化，而是像弹簧——开始慢、中间快、结尾有微妙的回弹感",
        explanation:
          "cubic-bezier(0.23, 1, 0.32, 1) 的 P2 y 值大于 1，产生微妙的「过冲」效果。常见预设：ease-out(0, 0, 0.58, 1)、ease-in-out(0.42, 0, 0.58, 1)。自定义缓动让动画有物理质感。",
        whyItMatters:
          "知道 cubic-bezier 后，你就能对 AI 说「hover transition 用 cubic-bezier(0.23, 1, 0.32, 1) 弹性缓动，duration 0.5s」——精确控制动画节奏。",
      },
    ],
    applications: [
      {
        field: "卡片式布局",
        examples:
          "产品展示、作品集、新闻摘要等场景的 hover 预览卡片",
      },
      {
        field: "模态弹窗 / 对话框",
        examples:
          "用毛玻璃背景替代纯黑遮罩，保持上下文感",
      },
      {
        field: "导航栏 / 侧边栏",
        examples:
          "固定定位的导航用毛玻璃效果，既不遮挡内容又有层次感",
      },
      {
        field: "数据仪表盘",
        examples:
          "浮动面板用 Glassmorphism 风格，让多层信息共存而不混乱",
      },
    ],
    keyInsight:
      "**毛玻璃效果的本质是「有限透明」——不完全遮挡，也不完全暴露**。核心术语链：**backdrop-filter**（模糊背后内容）→ **Glassmorphism**（设计风格名称）→ **mask-image**（渐变遮罩柔化边缘）→ **cubic-bezier**（弹性缓动增加质感）。记住三件套公式：`backdrop-filter: blur()` + `background: rgba(低透明度)` + `border: rgba(白色微光)` = Glassmorphism。",
  },

  scrollformations: {
    id: "scrollformations",
    title: "Scroll Formations",
    subtitle: "滚动驱动网格布局变阵",
    oneLiner:
      "基于 GSAP ScrollTrigger + Lenis 的 9 种滚动驱动网格布局变阵动画——用 Pin + Scrub 把滚动变成布局编排的时间轴",
    whatYouSee:
      "一个摄影作品集页面，当你滚动时，图片以 9 种截然不同的方式从画面外「组装」到最终网格位置。有的从下方落入（**Stagger Drop-In**），有的从中心螺旋展开（**Center Spiral**），有的带 3D 透视从四周汇聚（**3D Converge**），有的像翻书一样从左侧翻入（**3D Card Flip**）。每个动画区域在滚动时会被 **Pin（钉住）**，让你通过继续滚动来「播放」整个编排过程。平滑滚动由 **Lenis** 提供。",
    pipeline: [
      {
        step: "01",
        title: "Pin + Scrub 绑定滚动时间轴 (ScrollTrigger Core)",
        description:
          "每个网格区域用 ScrollTrigger 的 pin 钉住父容器，scrub 将滚动距离映射到动画进度。end: '+=250%' 表示需要额外滚动 2.5 个视口高度才能播完动画。这是滚动叙事的核心模式。",
        glsl: `gsap.timeline({
  scrollTrigger: {
    trigger: grid,
    start: 'center center',   // 网格中心对齐视口中心时开始
    end: '+=250%',             // 额外滚动 2.5 倍视口高度
    pin: grid.parentNode,      // 钉住父容器
    scrub: 0.5                 // 0.5 秒平滑延迟
  }
})`,
      },
      {
        step: "02",
        title: "多种 Stagger 策略编排进场顺序 (Stagger Patterns)",
        description:
          "GSAP 的 stagger 控制元素逐个进场的时序。sequential（顺序）、from: 'center'（中心扩散）、from: 'edges'（边缘向内）、from: 'random'（随机）——不同策略创造截然不同的视觉节奏。",
        glsl: `// 顺序进场（每个间隔 70ms）
stagger: 0.07

// 中心扩散（总时长 0.3s）
stagger: { amount: 0.3, from: 'center' }

// 随机进场
stagger: { amount: 0.4, from: 'random', grid: [4, 9] }

// 边缘向内
stagger: { amount: 0.03, from: 'edges', grid: [3, 3] }`,
      },
      {
        step: "03",
        title: "3D 透视汇聚变换 (Perspective Converge)",
        description:
          "计算每个元素到视口中心的距离和角度，据此设置初始位移（x/y）、旋转（rotateX/Y）和 Z 轴深度。离中心越远的元素旋转和位移越大，形成从四周 3D 汇聚到中心的效果。",
        glsl: `// 计算元素到视口中心的方向和距离
const angle = Math.atan2(dy, dx);
const translateX = Math.cos(angle) * offsetDistance;
const translateY = Math.sin(angle) * offsetDistance;

// 距离越远，旋转和 Z 偏移越大
const distanceFactor = currentDistance / maxDistance;
const rotationX = dirY * (translateY / offset) * maxRotation * distanceFactor;
const translateZ = maxZTranslation * distanceFactor;`,
      },
      {
        step: "04",
        title: "双层反向滚动 (Dual-Layer Counter-Scroll)",
        description:
          "第七种动画的精妙之处：外层容器从上方滑入（yPercent: -102 → 0），内层图片同时从下方反向滑入（yPercent: 102 → 0）。两层相对运动创造「揭开」的视差效果。",
        glsl: `// 外层：从上方滑入
.fromTo(gridImages, { yPercent: -102 }, {
  stagger: 0.08,
  yPercent: 0
})
// 内层：同时从下方反向滑入
.from(innerImages, {
  stagger: 0.08,
  yPercent: 102
}, 0)  // 0 = 同时开始`,
      },
      {
        step: "05",
        title: "Lenis 平滑滚动集成 (Smooth Scroll Integration)",
        description:
          "Lenis 以 lerp: 0.15 的插值率提供惯性滚动，通过 lenis.on('scroll', ScrollTrigger.update) 与 GSAP 同步。gsap.ticker.lagSmoothing(0) 关闭延迟补偿，确保帧级精准。",
        glsl: `const lenis = new Lenis({ lerp: 0.15 });
// 同步 Lenis 滚动事件到 ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
// 同步 GSAP ticker 到 Lenis 帧更新
gsap.ticker.add(time => {
  lenis.raf(time * 1000);
});`,
      },
    ],
    concepts: [
      {
        name: "ScrollTrigger Pin",
        nameEN: "GSAP ScrollTrigger Pin",
        analogy:
          "把页面的某个区域「钉」在屏幕上不动，继续滚动只会推进动画进度——像固定住画布，用滚轮控制画笔",
        explanation:
          "pin: element 让指定元素在滚动到触发点后固定在视口中，同时创建等高的空白区域让页面继续可滚动。配合 scrub 使用，滚动距离直接驱动动画时间轴。这是实现「滚动即叙事」的核心机制。",
        whyItMatters:
          "知道 ScrollTrigger Pin 后，你就能对 AI 说「用 ScrollTrigger pin 住 section，scrub: 0.5，end: +=300% 来做一个滚动驱动的布局动画」——精准描述滚动锁定+动画驱动的需求。",
      },
      {
        name: "Stagger 编排",
        nameEN: "GSAP Stagger Orchestration",
        analogy:
          "多米诺骨牌的倒法——可以从头开始、从中间扩散、从边缘向内、甚至随机倒",
        explanation:
          "GSAP 的 stagger 支持多种模式：数值（固定间隔）、{ amount, from } 对象（总时长+起点方向）、grid 参数（按网格坐标计算距离）。from 可选 'start'、'center'、'edges'、'end'、'random' 或数字索引。",
        whyItMatters:
          "知道 Stagger 编排后，你就能对 AI 说「用 stagger: { amount: 0.3, from: 'center', grid: [4, 9] } 从中心向四周扩散」——而不是说「让元素一个接一个出现，从中间开始」。",
      },
      {
        name: "CSS Grid 布局变阵",
        nameEN: "CSS Grid Layout Formation",
        analogy:
          "同一组元素，通过切换 grid-template 定义可以瞬间重新排列——像军队变阵",
        explanation:
          "本 demo 用 9 种不同的 CSS Grid 配置（8x3、5x2、9x4、14x1、15-column 等）展示同一组图片的不同排列方式。grid-template-columns、grid-area、span 等属性控制每种阵型的布局。GSAP 负责动画过渡。",
        whyItMatters:
          "知道 Grid Layout Formation 后，你就能对 AI 说「做一个 CSS Grid 布局变阵效果，从 3x3 网格变为单列瀑布流，用 GSAP 做位移动画过渡」——精确描述布局变换需求。",
      },
      {
        name: "Lenis 平滑滚动",
        nameEN: "Lenis Smooth Scroll",
        analogy:
          "给浏览器原生滚动加上「惯性」——手指离开后页面还会滑行一段，像在冰面上推物体",
        explanation:
          "Lenis 通过拦截原生滚动事件，用 lerp（线性插值）平滑化滚动位置。lerp: 0.15 意味着每帧只移动剩余距离的 15%，创造丝滑的惯性感。需要与 GSAP ticker 同步以确保 ScrollTrigger 正确更新。",
        whyItMatters:
          "知道 Lenis 后，你就能对 AI 说「用 Lenis 做平滑滚动，lerp 0.12，配合 ScrollTrigger.update 同步」——而不是说「让滚动更顺滑」。",
      },
    ],
    applications: [
      {
        field: "摄影/作品集网站",
        examples:
          "用滚动驱动的网格变阵展示不同系列的作品，每种阵型对应不同的叙事节奏",
      },
      {
        field: "产品发布页",
        examples:
          "产品图片从四面八方 3D 汇聚到中心，营造「万众瞩目」的发布感",
      },
      {
        field: "年度报告/数据叙事",
        examples:
          "数据卡片以不同 stagger 策略进场，配合文字段落形成滚动叙事节奏",
      },
      {
        field: "电商瀑布流",
        examples:
          "商品卡片用 3D flip 或 drop-in 效果逐个进场，提升浏览体验的趣味性",
      },
    ],
    keyInsight:
      "**滚动不只是浏览内容的方式，更是编排视觉节奏的时间轴**。核心术语链：**ScrollTrigger Pin + Scrub**（滚动 → 时间轴映射 + 视口锁定）→ **Stagger Orchestration**（进场时序编排）→ **CSS Grid Formation**（布局变阵）→ **Lenis Smooth Scroll**（惯性平滑）。记住公式：Pin 锁定区域 + Scrub 映射进度 + Stagger 编排顺序 = 滚动叙事动画。9 种变阵的本质是：同一组元素，不同的进场方式（方向、旋转、透视、时序），创造截然不同的情绪。",
  },

  letteranimations: {
    id: "letteranimations",
    title: "Letter Animations",
    subtitle: "SVG 装饰性字母动画",
    oneLiner:
      "基于 Anime.js + Charming.js 的装饰性字母动画——用 SVG 几何形状为文字切换注入粒子爆发效果",
    whatYouSee:
      "9 个单词在幻灯片之间切换，每次切换时字母逐个出现/消失，同时大量 SVG 几何形状（圆形、三角、矩形、多边形）从字母位置喷射出来。这种效果叫 **Decorative Letter Animation / Text Particle Burst**。每个幻灯片有不同的动画风格：有的字母从底部弹入配合五彩碎片（**Confetti Burst**），有的圆形轮廓从字母中冒出像气泡（**Bubble Rise**），有的形状散布后持续漂浮（**Floating Debris**），有的字母交替从上下翻转进入（**Alternating Flip**）。背景也随幻灯片滑动过渡。",
    pipeline: [
      {
        step: "01",
        title: "字母拆分与包裹 (Charming.js Letter Splitting)",
        description:
          "Charming.js 将文字节点拆分成独立的 <span>，每个字母单独可控。这是逐字母动画的基础——没有拆分，就无法对单个字母施加独立的 delay、translateY、opacity 动画。类似工具还有 Splitting.js、SplitText。",
        glsl: `// Charming.js 将 "Hello" 拆分为：
// <span class="char1">H</span>
// <span class="char2">e</span>
// <span class="char3">l</span>
// ...
charming(wordElement);
this.letters = Array.from(word.querySelectorAll('span'));`,
      },
      {
        step: "02",
        title: "动态创建 SVG 装饰形状 (SVG Shape Generation)",
        description:
          "在每个单词的容器中动态创建 SVG 元素，随机选择形状类型（circle、rect、polygon、path）、颜色、填充/描边模式。这些形状初始状态隐藏（opacity: 0），等待动画触发。",
        glsl: `// 随机创建 SVG 形状
const types = ['circle', 'rect', 'polygon', 'path'];
const shapeEl = document.createElementNS(svgNS, type);
// 设置随机颜色和描边
shapeEl.style.fill = shapeFill ? color : 'none';
shapeEl.style.stroke = !shapeFill ? color : 'none';
shapeEl.style.strokeWidth = shapeStrokeWidth + 'px';`,
      },
      {
        step: "03",
        title: "字母 Stagger 动画 (Letter Stagger Animation)",
        description:
          "用 Anime.js 的 delay 回调函数实现字母逐个进场。不同效果使用不同的 stagger 策略：顺序 delay: i*40、从中间扩散 delay: |total/2 - i| * 60、随机延迟 delay: random(0,75)。配合 translateY、scale、rotate、opacity 等属性创造丰富的入场方式。",
        glsl: `// 顺序 stagger
delay: (t, i) => i * 40,
easing: 'easeOutElastic',
translateY: ['100%', '0%'],
opacity: [0, 1]

// 从中间扩散
delay: (t, i, total) => Math.abs(total/2 - i) * 60

// 交替方向进入
translateY: (t, i) => i%2 ? ['-80%','0%'] : ['80%','0%']`,
      },
      {
        step: "04",
        title: "形状粒子爆发动画 (Shape Particle Burst)",
        description:
          "字母动画的同时，SVG 形状从字母位置向四周喷射。每个形状有随机的 translateX/Y（扩散方向）、scale（大小）、rotate（旋转）、opacity（渐隐）。anime.random() 让每个形状的轨迹独一无二。形状可以在字母下方（默认）或上方（shapesOnTop: true）。",
        glsl: `shapesAnimationOpts: {
  duration: 700,
  delay: (t, i) => i * 40,
  easing: 'easeOutExpo',
  translateX: () => [0, anime.random(-200, 200)],
  translateY: () => [0, anime.random(-400, 400)],
  scale: () => [randomBetween(0.2, 0.6), randomBetween(0.2, 0.6)],
  rotate: () => [0, anime.random(-16, 16)],
  opacity: [{value:1, duration:1}, {value:0, duration:700}]
}`,
      },
      {
        step: "05",
        title: "幻灯片过渡编排 (Slideshow Choreography)",
        description:
          "切换时先隐藏当前单词（字母 + 形状的 hide 动画），同时背景用 translateY 滑动过渡，然后显示新单词（字母 + 形状的 show 动画）。用 Promise 控制异步流程，防止动画期间重复触发。支持键盘左右箭头和按钮导航。",
        glsl: `show(direction) {
  if (this.isAnimating) return;
  this.isAnimating = true;
  // 背景滑动
  anime({ targets: this.DOM.bgs[currentPos],
    translateY: direction === 'next' ? '-100%' : '100%' });
  // 隐藏当前 → 显示下一个
  this.words[current].hide(effects[current].hide)
    .then(() => { this.current = newPos; });
  this.words[newPos].show(effects[newPos].show)
    .then(() => this.isAnimating = false);
}`,
      },
    ],
    concepts: [
      {
        name: "字母拆分",
        nameEN: "Letter Splitting (Charming.js)",
        analogy:
          "把一个单词拆成一盒散装字母积木——每块积木可以独立移动、旋转、变色",
        explanation:
          "Charming.js 将文字节点拆分为独立的 <span> 元素，每个包含一个字符。这是实现逐字母动画的前提。类似工具有 Splitting.js（更现代，支持 CSS 变量）、GSAP SplitText（商业版）。拆分后可以用 CSS 变量 --char-index 或 JS delay 回调实现 stagger。",
        whyItMatters:
          "知道 Letter Splitting 后，你就能对 AI 说「用 Splitting.js 拆分文字，每个字母用 --char-index 做 stagger 延迟动画」——而不是说「让文字一个一个出现」。",
      },
      {
        name: "粒子爆发效果",
        nameEN: "Particle Burst / Confetti Effect",
        analogy:
          "像拉响彩带炮——大量小碎片从一个点向四周喷射、旋转、渐隐",
        explanation:
          "通过创建大量小型 SVG/DOM 元素，给每个元素随机的方向（translateX/Y）、旋转（rotate）、缩放（scale）和透明度衰减（opacity），模拟粒子爆发效果。关键是随机性——anime.random() 让每次爆发都不重复。CSS 版本可用 @property + animation 实现。",
        whyItMatters:
          "知道 Particle Burst 后，你就能对 AI 说「做一个 confetti burst 效果，30 个 SVG 形状从点击位置向四周随机喷射，easeOutExpo 缓动，700ms 渐隐」——精准描述粒子动画需求。",
      },
      {
        name: "Anime.js 时间线",
        nameEN: "Anime.js Timeline & Stagger",
        analogy:
          "乐队指挥的总谱——每个乐器（元素）在精确的时间点奏出自己的音符（动画）",
        explanation:
          "Anime.js 的 delay 回调 (target, index, total) => 值 让每个元素基于索引获得不同延迟，实现 stagger 效果。配合 easing 预设（easeOutElastic 弹性、easeOutExpo 急停、easeInOutExpo 对称缓动）控制运动质感。Promise 返回值可链式编排多段动画。",
        whyItMatters:
          "知道 Anime.js stagger 后，你就能对 AI 说「用 anime.js 做字母 stagger 动画，delay: i*40ms，easeOutElastic 弹性缓动，从底部 translateY 100% 到 0」——精确控制逐元素动画节奏。",
      },
      {
        name: "SVG 内联形状",
        nameEN: "Dynamic SVG Shape Creation",
        analogy:
          "用代码当画笔——在 JS 中动态创建圆形、矩形、多边形，像在画布上随手撒下彩色纸片",
        explanation:
          "通过 document.createElementNS(svgNS, 'circle') 动态创建 SVG 元素，设置 cx/cy/r（圆形）、points（多边形）等属性。fill/stroke 切换控制实心/描边风格。SVG 形状比 Canvas 粒子更易被 CSS/JS 动画库操控，且支持矢量缩放。",
        whyItMatters:
          "知道动态 SVG 创建后，你就能对 AI 说「用 createElementNS 动态生成 30 个随机 SVG 形状（circle/rect/polygon），描边模式，strokeWidth 3px」——精确描述装饰性图形生成需求。",
      },
    ],
    applications: [
      {
        field: "品牌 Logo 动画",
        examples:
          "品牌名称字母逐个出现，配合品牌色彩的形状粒子爆发，增强记忆点",
      },
      {
        field: "页面过渡标题",
        examples:
          "SPA 路由切换时标题文字的装饰性进场/退场动画",
      },
      {
        field: "交互式贺卡/邀请函",
        examples:
          "点击或滚动触发文字的 confetti 爆发效果，增加惊喜感",
      },
      {
        field: "游戏 UI 文字",
        examples:
          "关卡名称、得分数字的装饰性出场动画，配合音效增强反馈",
      },
    ],
    keyInsight:
      "**文字不只是信息载体，也可以是动画的舞台**。这个 demo 展示了 9 种截然不同的字母动画风格，但底层模式一致：**Letter Splitting**（拆分为独立单元）→ **Stagger Delay**（时序编排）→ **Particle Burst**（装饰性形状喷射）→ **Easing Curves**（运动质感）。掌握这个组合后，你可以对 AI 说「做一个 letter splitting + particle burst 效果，字母 easeOutElastic 弹入，同时 30 个 SVG circle 从字母位置 easeOutExpo 扩散」——精准复现任何装饰性文字动画。",
  },

  gradienttopography: {
    id: "gradienttopography",
    title: "Gradient Topography",
    subtitle: "SVG 渐变地形形变菜单",
    oneLiner:
      "基于 Anime.js 的 SVG 路径形变 + 渐变图层动画——用有机 Blob 形态作为导航的视觉载体",
    whatYouSee:
      "屏幕上 6 组有机的渐变色斑块（**Blob / Organic Shape**）彼此层叠，像等高线地图的色块。每组斑块由 6 层不同透明度的 SVG path 构成，呈现出「渐变地形」的深度感。左侧是文字菜单，当你点击某个菜单项时，对应的斑块会**形变展开（Path Morphing）**到全屏，同时其他斑块缩小消失，内容区域滑入。关闭时斑块**收缩回**原始形态。整个过程由 **Anime.js** 驱动 SVG `d` 属性插值实现。",
    pipeline: [
      {
        step: "01",
        title: "SVG 双路径定义 (Dual-Path Data)",
        description:
          "每个 blob 的 <path> 元素同时存储两套路径数据：`d` 属性是初始的有机小形状，自定义属性 `pathdata:id` 是展开后的全屏形状。Anime.js 在两套路径之间做插值动画，就像橡皮泥从一个形状变成另一个形状。",
        glsl: `<!-- 每个 path 有两套形状数据 -->
<path
  d="M 382.9,69.64 C..."         <!-- 初始：小 blob -->
  pathdata:id="M 5153,15.13 C..." <!-- 展开：全屏覆盖 -->
  fill="url(#gradient-1)"
/>`,
      },
      {
        step: "02",
        title: "渐变图层叠加 (Gradient Layer Stack)",
        description:
          "每组 blob 包含 6 层 path，fill-opacity 从 0.1 递增到 0.6，填充同一个 linearGradient（如 #f19872 → #e86c9a）。多层半透明叠加产生丰富的色彩过渡，形成等高线地图般的「地形」质感。6 组 blob 各有不同的渐变色。",
        glsl: `<!-- SVG 渐变定义 -->
<linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop stop-color="#f19872"/>
  <stop offset="1" stop-color="#e86c9a"/>
</linearGradient>

/* 6 层递增透明度 */
path:nth-of-type(1) { fill-opacity: 0.1; }
path:nth-of-type(6) { fill-opacity: 0.6; }`,
      },
      {
        step: "03",
        title: "Path Morphing 展开动画 (Anime.js Path Interpolation)",
        description:
          "点击菜单项时，Anime.js 将 path 的 `d` 属性从初始值动画到 `pathdata:id` 存储的展开值。1000ms 时长 + 自定义 cubic-bezier [0.2,1,0.1,1] 缓动，让形变有弹性的有机感。6 层 path 用 120ms 的 stagger 延迟依次展开，增加层次感。",
        glsl: `// Blob 展开动画
expand() {
  return anime({
    targets: this.DOM.paths,
    duration: 1000,
    delay: (t, i) => i * 120,
    easing: [0.2, 1, 0.1, 1],  // 自定义弹性曲线
    d: (t) => t.getAttribute('pathdata:id')  // 形变到展开形状
  }).finished;
}`,
      },
      {
        step: "04",
        title: "Charming.js 字母级文字动画 (Letter-Level Text Animation)",
        description:
          "菜单文字和内容标题用 Charming.js 拆分为单个 <span>。点击时菜单字母逐个淡出（stagger 延迟），内容标题字母逐个淡入。这种逐字母动画比整块文字淡入淡出精致得多，配合 blob 形变创造协调的叙事节奏。",
        glsl: `// 字母拆分
charming(menuItem);
const letters = menuItem.querySelectorAll('span');

// 逐字母淡出
anime({
  targets: letters,
  duration: 300,
  delay: (t, i) => i * 30,
  easing: 'easeOutQuad',
  opacity: 0,
  translateY: '-50%'
});`,
      },
      {
        step: "05",
        title: "交互状态编排 (Interaction State Choreography)",
        description:
          "整个交互分三阶段：intro（初始进场：blob scale 0.2→1 + 菜单淡入）→ open（点击展开：目标 blob expand + 其他 blob hide + 内容滑入）→ close（关闭收缩：blob collapse + 其他 blob show + 菜单恢复）。用 Promise 链式控制动画顺序，pointer-events 管理防止动画期间重复触发。",
        glsl: `// 打开流程
async open(index) {
  this.isAnimating = true;
  hideMenu();                     // 1. 菜单淡出
  await blobs[index].expand();    // 2. 目标 blob 展开
  showContent(index);             // 3. 内容淡入
  otherBlobs.forEach(b => b.hide()); // 4. 其他缩小
  this.isAnimating = false;
}`,
      },
    ],
    concepts: [
      {
        name: "SVG Path Morphing",
        nameEN: "SVG Path Morphing / Shape Interpolation",
        analogy:
          "像橡皮泥变形——一个形状平滑过渡到另一个形状，中间的每一帧都是有效的形状",
        explanation:
          "通过在两组 SVG path `d` 属性值之间做插值，实现形状的平滑变形。关键要求：两组路径的控制点数量必须匹配（相同数量的 M/C/L 指令）。Anime.js 内置了 SVG path 插值能力，也可以用 flubber、GSAP MorphSVG 等专用库。",
        whyItMatters:
          "知道 SVG Path Morphing 后，你就能对 AI 说「用 anime.js 做 SVG path morphing，从圆形 blob 形变到全屏矩形，两组 path 控制点数量匹配」——而不是说「让那个形状变大变成方的」。",
      },
      {
        name: "Organic Blob Shape",
        nameEN: "Organic Blob / Soft Body Shape",
        analogy:
          "自然界的水滴、云朵、变形虫——没有直线和尖角，边缘是流动的曲线",
        explanation:
          "用 SVG 的 cubic Bézier 曲线（C 指令）绘制的不规则有机形状。关键特征：无直线段、曲率连续、视觉上柔软。可以手动设计或用算法生成（如 blob maker 工具）。配合渐变填充和多层叠加，可以创造丰富的有机质感。",
        whyItMatters:
          "知道 Organic Blob 后，你就能对 AI 说「生成一个 6 控制点的 organic blob SVG path，曲率连续，用 linearGradient 填充」——精准描述有机形状需求。",
      },
      {
        name: "渐变地形叠加",
        nameEN: "Gradient Topography / Contour Layer Stack",
        analogy:
          "等高线地图的彩色版——每条等高线是一层半透明的渐变色，叠在一起形成地形的立体感",
        explanation:
          "多层相似但略有偏移的 SVG path，每层使用递增的 fill-opacity（0.1→0.6），同一 linearGradient 填充。叠加后颜色在中心最浓、边缘最淡，产生有机的深度感。这种技巧也叫 Contour Stacking 或 Topographic Layers。",
        whyItMatters:
          "知道 Gradient Topography 后，你就能对 AI 说「做 6 层 SVG path 叠加，fill-opacity 从 0.1 到 0.6 递增，同一个 linearGradient 填充，形成等高线地形效果」——精确描述这种视觉层次。",
      },
      {
        name: "自定义 Bézier 缓动",
        nameEN: "Custom Cubic Bézier Easing",
        analogy:
          "不是标准的 ease-in-out，而是定制的运动曲线——开始慢、中间快冲过头、最后轻轻回弹",
        explanation:
          "Anime.js 支持 [x1, y1, x2, y2] 格式的自定义 cubic-bezier 缓动。[0.2, 1, 0.1, 1] 的 y 值达到 1 表示快速到达终点并有微妙过冲，创造有弹性的有机运动感。这比 CSS 的 ease-in-out 更有表现力，适合模拟自然界的弹性运动。",
        whyItMatters:
          "知道自定义 Bézier 缓动后，你就能对 AI 说「用 cubic-bezier(0.2, 1, 0.1, 1) 做弹性缓动，让 blob 形变有有机的过冲感」——精确控制动画的运动质感。",
      },
    ],
    applications: [
      {
        field: "创意导航菜单",
        examples:
          "用有机形状替代传统矩形导航，点击时形变展开为内容区域",
      },
      {
        field: "品牌视觉识别",
        examples:
          "品牌色彩的渐变 blob 作为视觉锚点，形变动画增强品牌记忆",
      },
      {
        field: "数据可视化过渡",
        examples:
          "图表元素之间用 path morphing 平滑过渡，比硬切更有连续感",
      },
      {
        field: "艺术/画廊网站",
        examples:
          "用 blob 形态展示作品缩略图，点击形变到全屏查看",
      },
    ],
    keyInsight:
      "**形状本身可以是交互的载体，而不仅仅是装饰**。这个 demo 把有机 blob 从背景装饰变成了导航系统的核心——点击菜单时 blob 形变展开成内容容器，形状就是按钮、也是过渡动画、也是内容背景。核心术语链：**SVG Path Morphing**（路径插值形变）→ **Organic Blob**（有机曲线形状）→ **Gradient Topography**（渐变等高线叠加）→ **Custom Bézier Easing**（弹性运动曲线）。掌握这些后你可以对 AI 说「做一个 organic blob 导航，6 层 gradient topography 叠加，点击时 path morphing 到全屏，easing [0.2,1,0.1,1]」。",
  },

  draggablegrid: {
    id: "draggablegrid",
    title: "Draggable Grid",
    subtitle: "可拖拽产品网格",
    oneLiner:
      "基于 GSAP Draggable + Flip + SplitText 的可拖拽产品网格——拖拽浏览 + 点击展开的沉浸式产品展示",
    whatYouSee:
      "一个超出视口的大型产品网格，10 列 × 5 行的花瓶图片铺满画布。你可以用鼠标**拖拽（Drag）**整个网格在视口中滑动，也可以用滚轮平移。拖拽有**惯性（Inertia）**——松手后网格会顺着拖拽方向继续滑行一段。离开视口的产品会**淡出缩小**，进入视口时**淡入放大**。点击任意产品，网格向左滑开，产品图片用 **GSAP Flip** 动画飞到右侧详情面板的缩略图位置，标题和描述文字用 **SplitText** 逐字/逐行滑入。点击关闭时一切反向还原。",
    pipeline: [
      {
        step: "01",
        title: "初始进场动画 (Intro Stagger Animation)",
        description:
          "页面加载后，网格容器从 scale(0.5) 放大到 1，同时所有产品卡片以 random stagger 的方式从 opacity:0 + scale:0.5 逐个出现。random stagger 让进场没有固定方向，感觉像「散落的卡片逐个翻开」。imagesLoaded 确保图片加载完毕后才触发动画。",
        glsl: `timeline.set(this.products, { scale: 0.5, opacity: 0 })
timeline.to(this.products, {
  scale: 1, opacity: 1,
  duration: 0.6,
  ease: "power3.out",
  stagger: { amount: 1.2, from: "random" }  // 随机顺序进场
})
timeline.to(this.dom, {
  scale: 1, duration: 1.2, ease: "power3.inOut"
})`,
      },
      {
        step: "02",
        title: "Draggable 拖拽 + 惯性 (GSAP Draggable + Inertia)",
        description:
          "用 GSAP Draggable 让整个网格可拖拽，type:'x,y' 支持双向拖拽。bounds 限制拖拽范围不超出网格边界太多。inertia: true 开启物理惯性——松手后根据拖拽速度继续滑行。edgeResistance: 0.9 让边界有弹性阻力感。滚轮事件也映射到网格位移。",
        glsl: `Draggable.create(this.grid, {
  type: "x,y",
  bounds: {
    minX: -(gridWidth - windowWidth) - 200,
    maxX: 200,
    minY: -(gridHeight - windowHeight) - 100,
    maxY: 100
  },
  inertia: true,           // 物理惯性
  edgeResistance: 0.9,     // 边界弹性阻力
  allowEventDefault: true,
})`,
      },
      {
        step: "03",
        title: "IntersectionObserver 视口感知 (Viewport Awareness)",
        description:
          "用 IntersectionObserver 监测每个产品卡片是否在视口内。进入视口时 scale:1 + opacity:1 淡入，离开视口时 scale:0.5 + opacity:0 淡出。threshold: 0.1 表示只要 10% 可见就触发。这给拖拽浏览增加了「聚光灯」效果——只有视野内的产品是清晰可见的。",
        glsl: `const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, {
        scale: 1, opacity: 1, duration: 0.5
      })
    } else {
      gsap.to(entry.target, {
        opacity: 0, scale: 0.5, duration: 0.5
      })
    }
  })
}, { threshold: 0.1 })`,
      },
      {
        step: "04",
        title: "Flip 布局动画 (GSAP Flip Layout Transition)",
        description:
          "点击产品时，Flip.getState() 记录当前位置，然后用 DOM 操作将产品元素移到详情面板的缩略图容器中。Flip.from() 自动计算起终位置差异并动画过渡。产品图片从网格中「飞」到右侧详情面板，关闭时再「飞」回原位。",
        glsl: `flipProduct(product) {
  const state = Flip.getState(product)  // 记录当前状态
  this.detailsThumb.appendChild(product) // DOM 移动到新位置
  Flip.from(state, {
    absolute: true,
    duration: 1.2,
    ease: "power3.inOut",
  })  // 自动从旧位置动画到新位置
}`,
      },
      {
        step: "05",
        title: "SplitText 文字动画 (Character & Line Reveal)",
        description:
          "用 GSAP SplitText 将标题拆分为 chars（逐字符），描述文字拆分为 lines（逐行）。mask: 'lines' 让每行有独立的 overflow:hidden 遮罩，字符/行从 translateY:100% 滑入可见区域。关闭时反向滑出（from:'end' 让末尾的字符先消失）。",
        glsl: `// 拆分文字
const splitTitles = new SplitText(titles, {
  type: "lines, chars", mask: "lines"
})
// 标题字符逐个滑入
gsap.to(title.querySelectorAll(".char"), {
  y: 0, duration: 1.1, delay: .4,
  ease: "power3.inOut", stagger: 0.025
})
// 描述逐行滑入
gsap.to(text.querySelectorAll(".line"), {
  y: 0, duration: 1.1, stagger: .05
})`,
      },
    ],
    concepts: [
      {
        name: "GSAP Draggable",
        nameEN: "GSAP Draggable Plugin",
        analogy:
          "把网页元素变成触屏上的照片——可以用手指拖来拖去，松手后还会顺着惯性滑行",
        explanation:
          "GSAP Draggable 插件让任何 DOM 元素可拖拽，支持 x/y/rotation 等模式。配合 InertiaPlugin 实现物理惯性（基于释放速度计算减速滑行距离）。bounds 限制范围，edgeResistance 控制边界弹性。比原生 drag 事件更流畅、更可控。",
        whyItMatters:
          "知道 GSAP Draggable 后，你就能对 AI 说「用 GSAP Draggable 做一个可拖拽的画布，type:'x,y'，inertia: true，bounds 限制在容器内，edgeResistance 0.8」——精确描述拖拽交互需求。",
      },
      {
        name: "GSAP Flip",
        nameEN: "GSAP Flip Plugin (First Last Invert Play)",
        analogy:
          "记住元素的「旧位置」，把它移到「新位置」，然后自动动画从旧到新——像魔术师把卡片瞬移后再慢放回放",
        explanation:
          "FLIP 是 First-Last-Invert-Play 的缩写。Flip.getState() 记录元素的当前位置/尺寸，DOM 操作将其移到新容器后，Flip.from() 自动计算差异并生成补间动画。这让任何 DOM 结构变化都能有流畅过渡，是 layout animation 的终极方案。",
        whyItMatters:
          "知道 GSAP Flip 后，你就能对 AI 说「用 Flip.getState 记录状态，appendChild 移动元素，Flip.from 做布局过渡动画，duration 1.2s」——精准描述布局动画需求。",
      },
      {
        name: "SplitText 文字拆分",
        nameEN: "GSAP SplitText",
        analogy:
          "把一段文字切成单个字符或单行的「瓷砖」，每块瓷砖可以独立动画——翻转、滑入、旋转",
        explanation:
          "GSAP SplitText 将文字节点拆分为 chars（字符）、words（单词）、lines（行）三种粒度的 <div>/<span>。配合 mask:'lines' 自动为每行添加 overflow:hidden 遮罩，实现从下方滑入的「百叶窗」揭示效果。比 Charming.js/Splitting.js 更强大。",
        whyItMatters:
          "知道 SplitText 后，你就能对 AI 说「用 SplitText 拆分为 lines+chars，mask:'lines'，chars 逐个 stagger 0.025s 从 y:100% 滑入」——精确控制文字揭示动画。",
      },
      {
        name: "IntersectionObserver 视口感知",
        nameEN: "IntersectionObserver Viewport Detection",
        analogy:
          "在视口边缘安装一个「感应门」——元素进入视口时自动亮灯（淡入），离开时自动熄灯（淡出）",
        explanation:
          "浏览器原生 API，高效监测元素与视口的交叉状态。threshold: 0.1 表示 10% 可见即触发。比 scroll 事件监听更高效（浏览器内部优化），是实现 lazy loading、scroll reveal、viewport-aware animation 的标准方案。",
        whyItMatters:
          "知道 IntersectionObserver 后，你就能对 AI 说「用 IntersectionObserver threshold:0.1 监测元素可见性，进入视口时 gsap.to scale:1，离开时 scale:0.5」——精准描述视口感知动画。",
      },
    ],
    applications: [
      {
        field: "电商产品浏览",
        examples:
          "用可拖拽的大型网格替代分页列表，沉浸式浏览产品目录",
      },
      {
        field: "作品集/画廊",
        examples:
          "摄影作品或设计作品用拖拽网格展示，点击查看大图 + 详情",
      },
      {
        field: "地图式导航",
        examples:
          "信息密度大的仪表盘用拖拽平移替代传统滚动，IntersectionObserver 优化性能",
      },
      {
        field: "Mood Board / 灵感墙",
        examples:
          "设计师的灵感素材墙，可拖拽浏览 + 点击展开详情",
      },
    ],
    keyInsight:
      "**拖拽不只是移动，是空间探索的隐喻**。这个 demo 把传统的分页/滚动浏览转变为 2D 空间的自由探索——用户拖拽网格像在一张大桌子上推动照片。核心术语链：**GSAP Draggable + Inertia**（物理拖拽 + 惯性滑行）→ **IntersectionObserver**（视口感知 + 性能优化）→ **GSAP Flip**（DOM 结构变化 → 布局过渡动画）→ **SplitText**（文字拆分 → 逐字/逐行揭示）。掌握这四个工具的组合，你就能对 AI 说「做一个可拖拽的产品网格，inertia 惯性，IntersectionObserver 视口内淡入，点击时 Flip 到详情面板，SplitText 逐行揭示描述」。",
  },
};
