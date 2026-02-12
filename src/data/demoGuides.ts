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

  videotext: {
    id: "videotext",
    title: "Video Text",
    subtitle: "SVG 滤镜视频文字填充",
    oneLiner:
      "基于 SVG feComponentTransfer 的视频填充文字效果——文字内部播放视频，同时保持可选择、可复制、可无障碍访问",
    whatYouSee:
      "屏幕上有四个区块，每个区块中硕大的「VIDEO TEXT」字样内部正在播放雪山视频。文字周围被纯色或图案背景包围，但文字部分是「镂空」的——你透过文字的轮廓看到背后的视频。最神奇的是：这些文字是真实的 DOM 文本，你可以选中、复制它们。这种效果叫 **Video Text Fill / Text Knockout Effect**，核心技术是 **SVG feComponentTransfer 滤镜**反转 alpha 通道。",
    pipeline: [
      {
        step: "01",
        title: "定义 SVG Alpha 反转滤镜 (feComponentTransfer)",
        description:
          "创建一个 SVG filter，用 feFuncA 的 table 映射反转 alpha 通道：alpha=1（文字像素）→ 映射为 0（透明），alpha<0.9（背景像素）→ 映射为 1（不透明）。效果：文字变透明，周围变不透明——刚好和正常渲染相反。",
        glsl: `<filter id='extract' x='0' y='0' width='1' height='1'>
  <feComponentTransfer>
    <!-- alpha 1→0, alpha 0→10(clamped to 1) -->
    <feFuncA type='table' tableValues='10 0'/>
  </feComponentTransfer>
</filter>`,
      },
      {
        step: "02",
        title: "CSS Grid 层叠视频与文字 (Grid Stacking)",
        description:
          "用 CSS Grid 的 grid-area: 1/1 让 video 和 text-box 完美重叠在同一个网格单元中。视频在底层全宽展示，文字层覆盖在上方。这种堆叠方式比 position: absolute 更灵活，尺寸自动同步。",
        glsl: `.video-text-container, .text-box { display: grid }
:is(.video-text-container, .text-box) > * {
  grid-area: 1/ 1  /* 所有子元素堆叠在同一格 */
}`,
      },
      {
        step: "03",
        title: "应用滤镜实现文字镂空 (Filter Application)",
        description:
          "给 .text-box 应用 filter: url(#extract)，SVG 滤镜将文字像素的 alpha 设为 0（透明），让视频从文字形状中透出来。同时叠加 drop-shadow 做边缘柔化和立体阴影。注意：背景色的 alpha 必须低于 0.9，否则也会被滤镜反转。",
        glsl: `.text-box {
  --c: light-dark(#a9d6e5, #00171f);
  color: var(--c);
  filter: url(#extract)     /* alpha 反转 */
    drop-shadow(0 0 2px var(--c))  /* 边缘柔化 */
    drop-shadow(2px 2px 4px #020202); /* 立体阴影 */
  background: rgb(from var(--c) r g b/ .8); /* alpha < .9! */
}`,
      },
      {
        step: "04",
        title: "背景图 + background-clip: text 变体 (Text Fill Variations)",
        description:
          "进阶变体：用 background-clip: text 让背景图案/渐变填充文字内部，再用 ::after 伪元素承载同一背景（不裁切）作为文字周围的底色。多层背景还可以用 background-blend-mode: hard-light 混合，创造丰富的视觉层次。",
        glsl: `.back-img {
  color: #0000;  /* 文字透明，让 background-clip 生效 */
  background: var(--back);
  background-clip: text;  /* 背景只在文字内显示 */

  &::after {
    background: inherit;
    background-clip: border-box;  /* 伪元素不裁切 */
    opacity: .8;  /* 保持 alpha < .9 */
  }
}`,
      },
      {
        step: "05",
        title: "视频自动播放与可见性控制 (Autoplay + IntersectionObserver)",
        description:
          "用 CSS 变量 --auto 标记自动播放状态，结合 JS 检测浏览器是否允许自动播放。如果被阻止，动态创建 play/pause 按钮。IntersectionObserver 监听视频可见性，离开视口时自动暂停以节省资源。还通过 prefers-reduced-motion 媒体查询尊重用户偏好。",
        glsl: `// 检测自动播放权限
let promise = video.play();
promise.catch(err => { /* 创建手动播放按钮 */ });

// 可见性控制
new IntersectionObserver((entries) => {
  let inview = Math.ceil(entry.intersectionRatio);
  if(+vid.dataset.auto) vid[['play','pause'][inview]]();
});`,
      },
    ],
    concepts: [
      {
        name: "feComponentTransfer",
        nameEN: "SVG feComponentTransfer Filter",
        analogy:
          "像 Photoshop 的「反相」——但只反转透明度通道，文字变透明、背景变不透明",
        explanation:
          "SVG 滤镜原语 feComponentTransfer 允许对 RGBA 四个通道分别做映射变换。feFuncA type='table' tableValues='10 0' 将 alpha 值做线性插值反转：0→10（clamp 到 1），1→0。这是实现 Text Knockout 的关键，比 mix-blend-mode 方案更可控、文字保持可选。",
        whyItMatters:
          "知道 feComponentTransfer 后，你就能对 AI 说「用 SVG feComponentTransfer 反转 alpha 通道实现 text knockout」——而不是说「让文字变成透明的，能看到后面的视频」。",
      },
      {
        name: "background-clip: text",
        nameEN: "CSS background-clip: text",
        analogy:
          "把背景图案用文字形状做饼干模具「切割」——只在文字轮廓内显示背景",
        explanation:
          "CSS background-clip: text 将元素背景裁切到文字前景区域。配合 color: transparent 使用，可以让任意背景（图片、渐变、视频截图）填充文字。这是 CSS 原生的 Text Fill 方案，但不能直接填充动态视频——需要配合本 demo 的滤镜方案。",
        whyItMatters:
          "知道 background-clip: text 后，你就能对 AI 说「用 background-clip: text + 渐变背景做文字填充效果」——精准描述文字内显示图案的需求。",
      },
      {
        name: "容器查询单位",
        nameEN: "Container Query Units (cqw)",
        analogy:
          "vw 相对于视口宽度，cqw 相对于容器宽度——让文字大小跟随容器而非窗口缩放",
        explanation:
          "CSS Container Query Units（cqw, cqh 等）让尺寸相对于最近的 container-type: inline-size 祖先。font-size: 30cqw 意味着文字宽度始终是容器的 30%，无论容器在页面中多大。比 vw 更灵活，是组件级响应式设计的基础。",
        whyItMatters:
          "知道 cqw 后，你就能对 AI 说「文字大小用 clamp(2rem, 30cqw, 25rem) 配合 container-type: inline-size」——实现容器级别的响应式排版。",
      },
      {
        name: "CSS Grid 层叠",
        nameEN: "CSS Grid Stacking",
        analogy:
          "所有子元素放在同一个格子里，像叠卡片一样——比 position: absolute 更优雅的重叠方案",
        explanation:
          "通过 display: grid 配合 grid-area: 1/1 让多个子元素重叠在同一网格区域。相比 absolute 定位，Grid Stacking 不脱离文档流、自动参与尺寸计算、更易维护。是现代 CSS 中实现元素重叠的推荐方式。",
        whyItMatters:
          "知道 CSS Grid Stacking 后，你就能对 AI 说「用 grid-area: 1/1 做元素层叠，替代 absolute 定位」——这是更现代、更健壮的重叠方案。",
      },
    ],
    applications: [
      {
        field: "品牌首页 Hero",
        examples:
          "用视频填充品牌名称，创造沉浸式的第一印象",
      },
      {
        field: "数据可视化标题",
        examples:
          "用实时数据流动画填充标题文字，暗示「动态数据」的概念",
      },
      {
        field: "交互式海报",
        examples:
          "文字内显示用户摄像头画面或交互式 Canvas，创造参与感",
      },
      {
        field: "无障碍视觉设计",
        examples:
          "视觉效果震撼的同时文字保持可选、可复制、屏幕阅读器可读",
      },
    ],
    keyInsight:
      "**视觉效果和语义可访问性不是对立的**。这个 demo 证明：文字可以同时是「视觉容器」（显示视频）和「语义文本」（可选择、可复制、可被屏幕阅读器读取）。核心术语链：**feComponentTransfer**（alpha 通道反转 → text knockout）→ **Grid Stacking**（grid-area: 1/1 → 元素层叠）→ **background-clip: text**（背景裁切 → 文字填充）→ **Container Query Units**（cqw → 容器响应式排版）。关键洞察：SVG 滤镜操作的是渲染层，不影响 DOM 层——所以文字「看起来」是视频，「本质上」仍是真实文本。",
  },
};
