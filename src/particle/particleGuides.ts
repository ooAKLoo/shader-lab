import type { ParticleType } from "./particleTypes";

export interface ParticleGuide {
  id: ParticleType;
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

export const particleGuides: Record<ParticleType, ParticleGuide> = {
  fission: {
    id: "fission",
    title: "Fission",
    subtitle: "粒子分裂聚合系统",
    oneLiner:
      "基于 Canvas 2D + requestAnimationFrame 的粒子动画系统——用 lerp 插值驱动粒子的放大、分裂、散开、聚合、缩小全生命周期",
    whatYouSee:
      "一个发光圆点在屏幕中央出现并缓慢放大，然后突然「分裂」成多个小圆点，沿圆形均匀散开。散开后，所有粒子又被「吸引」回中心聚合为一个，缩小消失后重新开始。整个过程流畅自然，带有惯性缓动。这种效果叫 **Particle System（粒子系统）**，核心是每帧用 **Lerp（线性插值）** 让当前值趋近目标值，天然产生缓动效果。",
    pipeline: [
      {
        step: "01",
        title: "粒子数据模型 (Particle Data Model)",
        description:
          "每个粒子是一个对象，包含当前状态（x, y, radius）和目标状态（targetX, targetY, targetRadius）。动画不直接设置位置，而是设置「目标」——粒子自己会慢慢靠过去。这种「目标驱动」的模型让所有动画效果都归结为修改 target 值。",
        glsl: `interface Particle {
  x: number;  y: number;  radius: number;
  targetX: number;  targetY: number;  targetRadius: number;
}
// 动画 = 修改 target → lerp 自动补间`,
      },
      {
        step: "02",
        title: "帧循环 + Lerp 缓动 (Animation Loop)",
        description:
          "每帧用 lerp 让当前值趋近目标值。lerp(a, b, t) = a + (b-a) * t，t 值越大越快。用 1 - pow(0.001, dt) 作为 t，让缓动与帧率无关——无论 60fps 还是 144fps，视觉速度一致。",
        glsl: `function update(dt) {
  const t = 1 - Math.pow(0.001, dt * speed);
  for (const p of particles) {
    p.x = lerp(p.x, p.targetX, t);
    p.y = lerp(p.y, p.targetY, t);
    p.radius = lerp(p.radius, p.targetRadius, t);
  }
}`,
      },
      {
        step: "03",
        title: "分裂逻辑 (Split)",
        description:
          "分裂 = 一个粒子变多个。在原位置生成 N 个新粒子，每个粒子的 targetX/Y 设为圆形均匀分布的点。角度 = i × 2π/N，距离 = scatterRadius。粒子自动从中心 lerp 到目标位置，视觉上就是「爆开」。",
        glsl: `for (let i = 0; i < count; i++) {
  const angle = (i * 2 * Math.PI) / count;
  newParticles.push({
    x: center.x, y: center.y,  // 从中心出发
    targetX: center.x + Math.cos(angle) * radius,
    targetY: center.y + Math.sin(angle) * radius,
    targetRadius: parentSize * 0.45,
  });
}`,
      },
      {
        step: "04",
        title: "聚合逻辑 (Gather)",
        description:
          "聚合 = 多个粒子归一。把所有粒子的 targetX/Y 都设为中心点，lerp 自动让它们汇聚。当所有粒子距中心小于阈值时，替换为一个大粒子。",
        glsl: `// 聚合：所有粒子目标 → 中心
for (const p of particles) {
  p.targetX = centerX;
  p.targetY = centerY;
}
// 到达后合并为一个
if (allNearCenter) {
  particles = [{ x: centerX, y: centerY,
    targetRadius: fullSize }];
}`,
      },
      {
        step: "05",
        title: "发光渲染 (Glow Rendering)",
        description:
          "每个粒子用两层径向渐变绘制：外层大半径 + 低透明度 = 光晕，内层小半径 + 高透明度 = 核心。配合 globalCompositeOperation: 'lighter' 实现叠加发光——粒子重叠处更亮。半透明覆盖（trail alpha）制造运动残影。",
        glsl: `ctx.globalCompositeOperation = "lighter";
// 外层光晕
const outerGrad = ctx.createRadialGradient(...);
outerGrad.addColorStop(0, "rgba(r,g,b, 0.35)");
outerGrad.addColorStop(1, "rgba(r,g,b, 0)");
// 内层核心
const coreGrad = ctx.createRadialGradient(...);
coreGrad.addColorStop(0, "rgba(255,255,255, 0.95)");
coreGrad.addColorStop(1, "rgba(r,g,b, 0)");`,
      },
    ],
    concepts: [
      {
        name: "粒子系统",
        nameEN: "Particle System",
        analogy:
          "一群听指挥的萤火虫——每只萤火虫有自己的位置和大小，但统一响应「散开」「集合」的命令",
        explanation:
          "Particle System 是计算机图形学中的经典模式：维护一个粒子数组，每个粒子有独立的状态（位置、大小、速度、生命周期等）。每帧更新所有粒子的状态并渲染。粒子系统可以模拟火焰、烟雾、爆炸、雨雪等自然现象。",
        whyItMatters:
          "知道 Particle System 后，你就能对 AI 说「做一个粒子系统，支持 spawn、split、merge 三种行为」——而不是说「那种圆点分开又合起来的效果」。",
      },
      {
        name: "线性插值",
        nameEN: "Lerp (Linear Interpolation)",
        analogy:
          "橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生缓动",
        explanation:
          "lerp(a, b, t) = a + (b-a) × t。每帧对粒子位置做 lerp，t 值决定「靠近速度」。这比手动设计缓动曲线简单得多，且效果自然。t 值用 1-pow(0.001, dt) 计算可保证帧率无关性。lerp 是游戏开发和动效中最常用的基础函数。",
        whyItMatters:
          "知道 lerp 后，你就能对 AI 说「用 lerp 做帧率无关的指数衰减缓动，每帧 t = 1-pow(0.001, dt)」——这是实现流畅跟随动画的标准方法。",
      },
      {
        name: "圆形均匀分布",
        nameEN: "Circular Uniform Distribution",
        analogy:
          "圆桌上等距摆放的餐具——N 个物品围成一圈，每个之间的角度间隔恰好是 360°/N",
        explanation:
          "将 N 个粒子均匀分布在圆周上：第 i 个粒子的角度 = i × 2π/N，坐标 = (center + cos(θ)×r, center + sin(θ)×r)。这是分裂动画中计算目标位置的标准方法，确保视觉上的对称美感。",
        whyItMatters:
          "知道圆形均匀分布后，你就能对 AI 说「分裂时用 circular distribution 计算 N 个目标位置」——精确描述粒子散开的几何布局。",
      },
      {
        name: "叠加发光",
        nameEN: "Additive Blending (Lighter)",
        analogy:
          "两束手电筒光照在同一点——光只会叠加变亮，不会变暗，重叠处最亮",
        explanation:
          "Canvas 的 globalCompositeOperation: 'lighter' 启用加法混合模式。新绘制的像素颜色与已有颜色直接相加（而非替换）。配合径向渐变的发光粒子，重叠区域自然变亮，产生真实的光照叠加效果。",
        whyItMatters:
          "知道 additive blending 后，你就能对 AI 说「用 lighter composite operation 做粒子的 additive glow 效果」——这是实现发光粒子的标准技术。",
      },
    ],
    applications: [
      {
        field: "加载动画",
        examples:
          "应用启动时的 Logo 粒子汇聚、数据加载中的呼吸光点、页面过渡的粒子爆散",
      },
      {
        field: "数据可视化",
        examples:
          "节点合并/拆分的力导向图动画、集群分析的视觉反馈、层级结构的展开/折叠",
      },
      {
        field: "游戏特效",
        examples:
          "技能释放的能量球分裂、道具收集的粒子汇聚、爆炸碎片的扩散与消散",
      },
      {
        field: "交互反馈",
        examples:
          "按钮点击的粒子爆发、拖拽节点的粒子跟随、状态切换时的元素拆合动画",
      },
    ],
    keyInsight:
      "**粒子分裂/聚合的本质是「目标驱动 + 插值补间」**。不需要复杂的物理模拟或缓动函数——只需为每个粒子设定 target 值，然后每帧做 lerp。分裂 = 生成多个粒子 + 设置不同 target；聚合 = 所有粒子 target 设为同一点。核心术语链：**Particle System**（数据结构）→ **Lerp**（补间引擎）→ **Circular Distribution**（分裂几何）→ **Additive Blending**（发光渲染）。记住：**最优雅的动画系统是声明式的——你描述「去哪里」，系统自动决定「怎么去」**。",
  },

  metaball: {
    id: "metaball",
    title: "Metaball",
    subtitle: "CSS Gooey 液态粒子融合",
    oneLiner:
      "基于 CSS Gooey Filter（blur + contrast）+ DOM 渲染的粒子动画系统——用 lerp 插值驱动粒子分裂聚合，blur 模糊叠加 + contrast 裁切实现液态融合效果",
    whatYouSee:
      "一个白色圆点在黑色背景中央出现并缓慢放大，然后「分裂」成多个小圆点，沿圆形均匀散开。关键视觉：粒子靠近时会像液滴一样**黏连融合**，拉远后又自然分离——这就是 **Gooey Effect / Metaball Effect（粘稠效果）**。聚合时所有粒子汇聚回中心融为一体，缩小消失后重新开始。融合效果的核心是 CSS `filter: blur() contrast()`——blur 让边缘扩散重叠，contrast 把灰色区域裁切回纯色，重叠区域恰好存活形成平滑连接。",
    pipeline: [
      {
        step: "01",
        title: "粒子数据模型 (Particle Data Model)",
        description:
          "与 Fission 共享相同的粒子数据模型：每个粒子包含当前状态和目标状态。区别在于渲染方式——这里用 DOM 元素而非 Canvas。",
        glsl: `interface Particle {
  id: number;
  x: number;  y: number;  radius: number;
  targetX: number;  targetY: number;  targetRadius: number;
}
// React state 驱动渲染：setRenderParticles([...particles])`,
      },
      {
        step: "02",
        title: "帧循环 + Lerp 缓动 (Animation Loop)",
        description:
          "同样使用 requestAnimationFrame + lerp 缓动。每帧更新粒子位置后，通过 React setState 触发 DOM 重渲染。相比 Canvas 方案，DOM 方案更简单但粒子数量受限。",
        glsl: `function update(dt) {
  const t = 1 - Math.pow(0.001, dt * speed);
  for (const p of particles) {
    p.x = lerp(p.x, p.targetX, t);
    p.y = lerp(p.y, p.targetY, t);
    p.radius = lerp(p.radius, p.targetRadius, t);
  }
  setRenderParticles([...particles]); // 触发 DOM 更新
}`,
      },
      {
        step: "03",
        title: "相态机 (Phase State Machine)",
        description:
          "动画循环通过状态机管理：idle → grow → split → scatter → gather → shrink → idle。每个相态有独立的持续时间和初始化逻辑。split 时生成多个粒子设置圆形分布目标，gather 时所有目标回归中心。",
        glsl: `const PHASE_ORDER = ["idle","grow","split","scatter","gather","shrink"];
function nextPhase() {
  const idx = PHASE_ORDER.indexOf(phase);
  startPhase(PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]);
}`,
      },
      {
        step: "04",
        title: "DOM 粒子渲染 (DOM Particle Rendering)",
        description:
          "每个粒子渲染为一个绝对定位的圆形 div（border-radius: 50%）。位置通过 left/top 控制，大小通过 width/height 控制。React 通过 key={id} 追踪每个粒子 DOM 节点。",
        glsl: `{renderParticles.map((p) => (
  <div key={p.id} style={{
    position: "absolute",
    left: p.x, top: p.y,
    width: p.radius * 2, height: p.radius * 2,
    borderRadius: "50%",
    background: color,
    transform: "translate(-50%, -50%)",
  }} />
))}`,
      },
      {
        step: "05",
        title: "Gooey 融合渲染 (CSS Gooey Filter)",
        description:
          "核心技巧：容器设置黑色背景 + `filter: blur(Npx) contrast(M)`。blur 让白色圆形的边缘向外扩散为灰色渐变；contrast 把灰色裁切回黑/白——只有两个粒子重叠处的灰度足够高，能在 contrast 裁切中存活，形成平滑的液态连接桥。这就是 **CSS Metaball** 的原理。",
        glsl: `// 容器：黑底 + gooey 滤镜
<div style={{
  filter: \`blur(\${blur}px) contrast(\${contrast})\`,
  background: "#000",
}}>
  {/* 每个粒子：白色圆形 div */}
  <div style={{
    width: d, height: d,
    borderRadius: "50%",
    background: color,  // 默认 #fff
    transform: "translate(-50%, -50%)",
  }} />
</div>`,
      },
    ],
    concepts: [
      {
        name: "粘稠效果",
        nameEN: "Gooey / Metaball Effect",
        analogy:
          "两滴水银靠近时会自动融合成一滴——不需要额外代码，CSS 滤镜组合自然产生这种液态黏连",
        explanation:
          "Gooey Effect 的核心是 `filter: blur(N) contrast(M)` 的组合。blur 让每个元素边缘向外扩散为灰色渐变；contrast 将灰色区域二值化裁切回黑/白。当两个模糊圆重叠时，重叠区的灰度值足以在 contrast 中存活，形成平滑的连接桥。这个技巧也叫 CSS Metaball，因为效果与经典 Metaball 算法一致——用隐式场函数的等值面来融合几何体。",
        whyItMatters:
          "知道 Gooey / Metaball Effect 后，你就能对 AI 说「用 CSS blur + contrast 做 gooey metaball 融合效果」——这是纯 CSS 实现液态动画最优雅的方法。",
      },
      {
        name: "高斯模糊",
        nameEN: "Gaussian Blur (CSS filter: blur)",
        analogy:
          "透过毛玻璃看世界——每个像素向四周「扩散」，边界变得柔和模糊",
        explanation:
          "CSS `filter: blur(Npx)` 对元素应用高斯模糊。模糊半径 N 决定扩散范围。在 Gooey 效果中，blur 的作用是让纯色圆形的边缘产生灰色渐变区域——这是后续 contrast 裁切的前提。blur 值越大，粒子「融合距离」越远。",
        whyItMatters:
          "知道 blur 在 gooey 中的角色后，你就能精确调参：blur 控制「多远开始融合」，contrast 控制「融合边缘多锐利」。",
      },
      {
        name: "对比度裁切",
        nameEN: "Contrast Clipping",
        analogy:
          "把灰度照片的亮度拉到极端——灰色全变黑或全变白，只留下纯黑和纯白",
        explanation:
          "CSS `filter: contrast(M)` 增强对比度。当 M 值很大（如 20）时，接近中间值的灰色会被「裁切」为纯黑或纯白。在 Gooey 效果中，这把 blur 产生的灰色渐变裁切回硬边缘——但两个 blur 区域重叠处的灰度值更高，能在裁切中存活，形成融合桥。",
        whyItMatters:
          "知道 contrast clipping 后，你就能对 AI 说「用高 contrast 值做 threshold 二值化裁切」——这在很多 CSS 特效中都有应用。",
      },
      {
        name: "线性插值",
        nameEN: "Lerp (Linear Interpolation)",
        analogy:
          "橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生缓动",
        explanation:
          "lerp(a, b, t) = a + (b-a) × t。每帧对粒子位置做 lerp，t 值决定「靠近速度」。与 Fission 相同的动画引擎，区别仅在渲染层。",
        whyItMatters:
          "lerp 是实现流畅跟随动画的标准方法，与渲染技术无关——Canvas、DOM、WebGL 都可以用同一套 lerp 动画系统。",
      },
    ],
    applications: [
      {
        field: "液态 UI 动效",
        examples:
          "导航菜单的液态切换、按钮悬停的粘稠变形、下拉菜单的弹性展开",
      },
      {
        field: "加载动画",
        examples:
          "液态 Loading 指示器、数据同步的水滴脉冲、进度条的流体填充",
      },
      {
        field: "品牌动画",
        examples:
          "Logo 液态变形、启动屏的 Metaball 汇聚、品牌色的流体过渡",
      },
      {
        field: "交互反馈",
        examples:
          "拖拽时的液态连接线、多选时节点的粘连合并、状态切换的流体形变",
      },
    ],
    keyInsight:
      "**CSS Gooey/Metaball 的本质是「模糊 + 裁切 = 隐式融合」**。blur 创建灰色渐变场，contrast 做阈值裁切——重叠区域的灰度值存活下来就形成融合。这与 3D 图形学中的 Metaball 算法原理相同（隐式场函数 + 等值面提取），但用纯 CSS 两行代码就实现了。核心术语链：**Gaussian Blur**（模糊扩散）→ **Contrast Clipping**（阈值裁切）→ **Metaball / Gooey**（液态融合）→ **Lerp**（补间驱动）。记住：**blur + contrast 是 CSS 中的「万能融合器」——任何靠近的元素都会自动产生液态连接**。",
  },

  sdfmorph: {
    id: "sdfmorph",
    title: "SDF Morph",
    subtitle: "SDF 形状变形与液态融合",
    oneLiner:
      "基于 WebGL Fragment Shader 的 SDF（Signed Distance Field）形状变形系统——6 种几何图元通过 smooth minimum 液态融合，配合 BPM 节拍驱动和多种缓动曲线实现电影级形态动画",
    whatYouSee:
      "一个发光的几何形状（圆形、方形、三角形、星形、六边形、环形）在深色背景上不断变换形态。变形过程不是简单的淡入淡出，而是像**液态金属**一样流动——形状边缘像水银般融合拉伸，中间过渡态呈现有机的 **Metaball 融合效果**。整个动画节奏跟随 BPM 节拍，配合旋转和呼吸缩放，加上描边发光和扫描线后处理，呈现出电影级的视觉质感。",
    pipeline: [
      {
        step: "01",
        title: "SDF 图元库 (Signed Distance Functions)",
        description:
          "每种形状用一个数学函数定义：输入一个 2D 点坐标，输出该点到形状边缘的**有符号距离**——负值在内部，正值在外部，零值在边缘上。SDF 的优势：可以精确计算边缘、做平滑混合、生成描边和发光。",
        glsl: `float sdCircle(vec2 p, float r) {
  return length(p) - r;  // 到圆心距离 - 半径
}
float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
// + Triangle, Star, Hexagon, Ring`,
      },
      {
        step: "02",
        title: "液态变形 (Morph with Smooth Minimum)",
        description:
          "两个 SDF 之间的变形不是简单的 mix(d1, d2, t)。关键在于 **smin（smooth minimum）**——它让两个距离场在靠近时产生平滑融合，而非硬边界。再加上 morphBloat（膨胀）让变形中间态更饱满，liquidMidBoost 增强中间态的融合程度。",
        glsl: `float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);  // 平滑混合
}
float morphSDF(float d1, float d2, float t) {
  float e = applyEase(t);
  float m = mix(d1, d2, e);      // 基础线性混合
  m -= sin(e*PI) * morphBloat;   // 中间膨胀
  float liquid = smin(d1, d2, k); // 液态融合
  m = mix(m, liquid, liquidMix);  // 混入液态
}`,
      },
      {
        step: "03",
        title: "BPM 节拍驱动 (Beat-Synced Timeline)",
        description:
          "动画时间线由 BPM（每分钟节拍数）驱动。每 2 拍完成一次形状变形。通过 floor(beats/2) 确定当前形状对和 fract(beats/2) 确定变形进度。形状序列可自定义（如 Circle→Box→Tri→Star→Circle），循环播放。",
        glsl: `float beats = time * (bpm / 60.0);
float segF = floor(beats / 2.0);  // 当前段索引
float t = fract(beats / 2.0);     // 段内进度 0→1
int sid0 = sequence[idx0];  // 源形状
int sid1 = sequence[idx1];  // 目标形状`,
      },
      {
        step: "04",
        title: "缓动曲线 (Easing Functions)",
        description:
          "6 种缓动函数控制变形的「手感」：Linear（匀速）、Smooth（平滑启停）、Cubic InOut（立方缓入缓出）、Back Out（回弹）、Elastic Out（弹性）、Expo InOut（指数）。缓动函数将线性的 t 映射为非线性的 eased_t，让变形节奏更有表现力。",
        glsl: `float ease_cubicInOut(float t) {
  return t < 0.5
    ? 4.0*t*t*t
    : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}
float ease_elasticOut(float t) {
  return pow(2.0, -10.0*t)
    * sin((t*10.0 - 0.75) * (2.0*PI/3.0)) + 1.0;
}`,
      },
      {
        step: "05",
        title: "渲染与后处理 (Shading & Post)",
        description:
          "SDF 值用于生成多层视觉效果：aaStep(d) 做抗锯齿填充、exp(-k*|d|) 做边缘高光和外发光、smoothstep 做描边。颜色在两个 ink color 之间随时间振荡。最后加 vignette 暗角、scanline 扫描线、film grain 胶片噪点做电影感后处理。",
        glsl: `float fill = aaStep(d);          // 抗锯齿填充
float stroke = smoothstep(w, 0.0, abs(d)); // 描边
float glow = exp(-9.0 * max(d, 0.0));      // 外发光
vec3 ink = mix(inkA, inkB, oscillation);
col += ink * fill * fillStrength;
col += ink * glow * glowStrength;
// + vignette + scanline + grain`,
      },
    ],
    concepts: [
      {
        name: "有符号距离场",
        nameEN: "SDF (Signed Distance Field)",
        analogy:
          "在地图上标注「距海岸线 X 公里」——每个点都知道自己离边界多远，负值表示在海里，正值表示在陆地上",
        explanation:
          "SDF 是一个函数 f(p)→float，对空间中任意一点返回到最近表面的有符号距离。负值在形状内部，正值在外部，零值恰好在边缘。SDF 的优势在于可以精确做布尔运算（union/intersection/subtraction）、平滑混合（smooth min）、生成描边（|d| < width）和发光（exp(-k*d)）。",
        whyItMatters:
          "知道 SDF 后，你就能对 AI 说「用 SDF 做形状渲染，支持 smooth union 和 edge glow」——这是 Shader 中表达几何形状最灵活的方式。",
      },
      {
        name: "平滑最小值",
        nameEN: "Smooth Minimum (smin)",
        analogy:
          "两团橡皮泥靠近时不是硬碰硬，而是柔软地融合在一起——smin 就是数学版的橡皮泥融合",
        explanation:
          "smin(a, b, k) 是 min(a, b) 的平滑版本。参数 k 控制融合半径：k=0 退化为硬 min，k 越大融合越圆润。在 SDF 变形中，smin 让两个形状的距离场在靠近时产生光滑的 Metaball 式连接，而非突兀的切换。这是 Inigo Quilez 提出的经典技巧。",
        whyItMatters:
          "知道 smooth minimum 后，你就能对 AI 说「用 smin 做两个 SDF 的液态融合，k 值控制融合柔软度」——这是实现有机形态动画的关键函数。",
      },
      {
        name: "缓动函数",
        nameEN: "Easing Functions",
        analogy:
          "开车时的加速减速——匀速开很无聊，先慢后快再慢下来才自然，弹性缓动就像弹簧一样过冲回弹",
        explanation:
          "Easing 将线性的 t∈[0,1] 映射为非线性曲线。常用类型：Smooth (Hermite)、Cubic (三次方)、Back (过冲)、Elastic (弹性)、Expo (指数)。每种给变形不同的「手感」。在动画系统中，easing 是时间轴和视觉效果之间的「翻译层」。",
        whyItMatters:
          "知道 easing 后，你就能对 AI 说「用 cubic-in-out 缓动做形状变形，或 elastic-out 做弹性回弹」——精确控制动画的节奏感。",
      },
      {
        name: "BPM 节拍同步",
        nameEN: "BPM-Synced Animation",
        analogy:
          "跟着音乐节拍跳舞——每 2 拍变一个动作，动作的快慢跟节拍同步",
        explanation:
          "用 BPM（Beats Per Minute）作为动画时钟：beats = time × (bpm/60)。每 N 拍完成一个动画单元（如形状变形）。通过 floor/fract 分解为「第几段」和「段内进度」。这让动画自动与音乐节奏同步，改变 BPM 即改变所有动画速度。",
        whyItMatters:
          "知道 BPM 同步后，你就能对 AI 说「做一个 BPM-driven 的动画系统，每 2 拍完成一次 morph transition」——这是音乐可视化和 MV 特效的基础。",
      },
    ],
    applications: [
      {
        field: "音乐可视化",
        examples:
          "MV 特效中的形状变换、DJ 现场的实时视觉、音频频谱驱动的 SDF 变形",
      },
      {
        field: "品牌动画",
        examples:
          "Logo 形态变换（如 Google I/O、Apple 发布会）、品牌 Loading 动画、App 启动屏",
      },
      {
        field: "UI 微交互",
        examples:
          "图标状态切换的形态变形（播放↔暂停）、Tab 切换的液态过渡、按钮 hover 的有机形变",
      },
      {
        field: "生成艺术",
        examples:
          "参数化几何动画、NFT 生成艺术、互动装置中的实时形态演化",
      },
    ],
    keyInsight:
      "**SDF 变形的本质是「距离场插值 + 隐式融合」**。SDF 把几何形状编码为连续的距离场函数，变形只需在两个距离场之间插值。smooth minimum 在插值中引入额外的融合项，让过渡态呈现液态的有机质感。核心术语链：**SDF**（几何编码）→ **Smooth Minimum**（液态融合）→ **Easing**（时间映射）→ **BPM Sync**（节拍驱动）→ **Post-Processing**（电影质感）。记住：**SDF 是 Shader 世界的「万能几何语言」——任何形状都是一个函数，任何变形都是函数之间的插值**。",
  },

  lettermorph: {
    id: "lettermorph",
    title: "Letter Morph",
    subtitle: "26 字母 SDF 液态变形",
    oneLiner:
      "基于 WebGL Fragment Shader 的 26 字母（A-Z）SDF 变形系统——每个字母用线段骨架 + 圆弧构建 SDF，通过 smooth minimum 液态融合实现字母间的有机形态过渡",
    whatYouSee:
      "深色背景上，一个发光的英文字母不断变换：A 液化流动变成 B，B 融化重塑为 C……26 个字母循环变形。变形过程不是简单的淡入淡出，而是笔画像**液态金属**一样拉伸、融合、重组——竖线弯曲成弧线，横线收缩后在新位置展开。这种效果的核心是 **Stroke SDF**（骨架距离场）+ **Smooth Minimum**（液态融合）。",
    pipeline: [
      {
        step: "01",
        title: "字母骨架 SDF (Glyph Skeleton SDF)",
        description:
          "每个字母用基础图元组合定义：直线段用 sdSegment（到线段的最近距离），弧线用 sdRingStroke（环形描边）+ 空间裁切。所有图元取 min 得到「骨架距离」，再减去 STROKE_W 得到描边 SDF。26 个字母 = 26 组图元组合，通过 if-else 分支选择。",
        glsl: `float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
  return length(pa - ba*h);
}
// 字母 A = 两条斜线 + 一条横线
d = min(d, sdSegment(p, vec2(L,B), vec2(0,T)));
d = min(d, sdSegment(p, vec2(R,B), vec2(0,T)));
d = min(d, sdSegment(p, vec2(-0.2,M), vec2(0.2,M)));
return d - STROKE_W;  // 骨架 → 描边`,
      },
      {
        step: "02",
        title: "液态变形 (Smooth Min Morphing)",
        description:
          "两个字母 SDF 之间的变形使用与 SDF Morph 相同的技术：基础 mix 插值 + smooth minimum 液态融合 + mid-bloat 膨胀。easeInOutCubic 控制变形节奏。关键区别：字母的笔画结构比几何图元复杂，smin 让不同笔画在过渡时自然「黏连」而非突兀切换。",
        glsl: `float morphSDF(float d1, float d2, float t) {
  float e = easeInOutCubic(t);
  float m = mix(d1, d2, e);     // 基础插值
  m -= sin(e*PI) * BLOAT;       // 中间膨胀
  float liq = smin(d1, d2, k);  // 液态融合
  m = mix(m, liq, liquidMix*mid);
}`,
      },
      {
        step: "03",
        title: "时间线驱动 (A→Z Timeline)",
        description:
          "时间除以 letterDuration 得到连续进度，floor 取整确定当前字母对（c0, c1），fract 取小数作为变形进度 t。mod(seg, 26) 让 A-Z 循环。呼吸缩放 + 缓动让动画节奏更自然。",
        glsl: `float tt = uTime / letterDuration;
float seg = floor(tt);
float t = fract(tt);
int c0 = int(mod(seg, 26.0));  // 源字母
int c1 = int(mod(seg+1.0, 26.0)); // 目标字母`,
      },
      {
        step: "04",
        title: "渲染与后处理 (Shading & Post)",
        description:
          "SDF 值生成三层效果：aaFill（抗锯齿填充）、edge（边缘高光）、glow（外发光）。flow 函数让颜色随空间和时间流动。ink 颜色在两个色调之间振荡。最后加 scanline + grain 做复古质感。",
        glsl: `float fill = aaFill(d);            // 抗锯齿填充
float edge = exp(-edgeSharp*abs(d)); // 边缘高光
float glow = exp(-glowSharp*max(d,0.0)); // 外发光
vec3 ink = mix(inkA, inkB, oscillation);
// + scanline + film grain`,
      },
    ],
    concepts: [
      {
        name: "骨架距离场",
        nameEN: "Stroke SDF (Skeleton + Offset)",
        analogy:
          "用铅笔画一条线，然后用固定粗细的马克笔沿着铅笔线描一遍——铅笔线是骨架，马克笔的宽度就是 offset",
        explanation:
          "Stroke SDF 的构建方式：先计算到骨架（线段、弧线等）的最近距离 d，再做 d - width 得到有宽度的描边。这种方法比直接定义填充形状更灵活——改变 width 就改变笔画粗细，骨架结构不变。",
        whyItMatters:
          "知道 Stroke SDF 后，你就能对 AI 说「用 sdSegment 骨架 + offset 构建字母的 SDF 描边」——这是 GPU 上渲染矢量字体最高效的方式。",
      },
      {
        name: "线段距离函数",
        nameEN: "sdSegment (Point-to-Segment Distance)",
        analogy:
          "站在马路旁边，你到马路的最近距离——如果你在马路范围内就是垂直距离，超出端点就是到端点的距离",
        explanation:
          "sdSegment(p, a, b) 计算点 p 到线段 ab 的最近距离。核心是将 p 投影到 ab 方向上，clamp 到 [0,1] 范围内限制在线段上。这是构建字母骨架的基本单元——每个笔画就是一条线段。",
        whyItMatters:
          "sdSegment 是 SDF 字体渲染的「原子操作」——知道它后，你能用线段组合构建任何字母或图形的骨架。",
      },
      {
        name: "平滑最小值",
        nameEN: "Smooth Minimum (smin)",
        analogy:
          "两团橡皮泥靠近时柔软地融合在一起——smin 是数学版的橡皮泥融合",
        explanation:
          "smin(a, b, k) 是 min(a, b) 的平滑版本，k 控制融合半径。在字母变形中，不同笔画的 SDF 通过 smin 融合，让过渡态的笔画自然「黏连」——比如 A 的斜线变成 B 的竖线时，中间态会出现液态的连接桥。",
        whyItMatters:
          "知道 smin 后，你就能对 AI 说「用 smooth minimum 做字母 SDF 之间的液态 morph」——k 值控制融合的「粘稠度」。",
      },
      {
        name: "抗锯齿边缘",
        nameEN: "Analytical Anti-Aliasing (fwidth + smoothstep)",
        analogy:
          "照片放大后边缘有锯齿——fwidth 自动检测像素大小，用 smoothstep 做恰好一个像素宽的模糊，既不太锐也不太糊",
        explanation:
          "aaFill(d) = smoothstep(0, fwidth(d), -d)。fwidth(d) 返回 d 在屏幕空间的变化率（≈一个像素对应的 SDF 距离变化）。用它做 smoothstep 的过渡宽度，可以在任意缩放下保持恰好 1 像素的抗锯齿边缘。",
        whyItMatters:
          "知道 fwidth 抗锯齿后，你就能对 AI 说「用 fwidth + smoothstep 做 SDF 的屏幕空间抗锯齿」——这是 GPU SDF 渲染的标准技巧。",
      },
    ],
    applications: [
      {
        field: "字体动画",
        examples:
          "品牌 Logo 的字母变形动画、MV 歌词的液态过渡、倒计时数字的有机变形",
      },
      {
        field: "创意编码",
        examples:
          "生成艺术中的字母演化、互动装置的文字变形、Shader 编程教学演示",
      },
      {
        field: "UI 微交互",
        examples:
          "搜索框的字母 morph 提示、状态码的数字液态切换、导航文字的过渡动画",
      },
      {
        field: "数据可视化",
        examples:
          "数值变化的数字 morph、分类标签的文字过渡、时间轴标记的动态变形",
      },
    ],
    keyInsight:
      "**字母 SDF 变形的本质是「骨架编码 + 距离场插值 + 液态融合」**。每个字母被分解为线段和弧线的骨架，通过统一的 SDF 距离场表示。变形只需在两个距离场之间插值——smooth minimum 让不同笔画在过渡时自然黏连，产生液态的有机质感。核心术语链：**sdSegment**（线段距离）→ **Stroke SDF**（骨架描边）→ **Smooth Minimum**（液态融合）→ **fwidth AA**（抗锯齿渲染）。记住：**任何矢量图形都可以用 SDF 骨架编码，任何变形都是距离场之间的插值——字母只是最直观的应用场景**。",
  },

  liquidfill: {
    id: "liquidfill",
    title: "Liquid Fill",
    subtitle: "Gooey 液态填充动画",
    oneLiner:
      "基于 CSS Gooey Filter（blur + contrast）+ SVG Path 极坐标谐波变形的液态填充动画——用 Catmull-Rom 曲线生成有机 blob 轮廓，配合溅射粒子实现液态扩散与吸收效果",
    whatYouSee:
      "一个有机形态的白色 blob 在黑色背景中央出现，形状不断轻微蠕动。blob 迅速膨胀的同时，多个小圆点像**水花**一样从 blob 表面向外飞溅——在 CSS Gooey 滤镜的作用下，这些飞溅粒子看起来像从 blob 上甩出的水滴。随后粒子减速、被「吸」回 blob 体内（融合效果由 blur + contrast 自动产生），blob 继续膨胀直至充满整个画面，最后收缩回中心，循环往复。切换形状预设时，blob 轮廓在 blob/star/organic/flower 之间**平滑变形**——这是 **Harmonic Morphing（谐波变形）** 的效果。",
    pipeline: [
      {
        step: "01",
        title: "极坐标谐波轮廓 (Polar Harmonic Outline)",
        description:
          "blob 的轮廓由极坐标方程生成：r(θ) = baseRadius + Σ amplitude_i × sin(freq_i × θ + phase_i + time)。每组谐波参数（频率、振幅、相位）决定轮廓形态——低频大振幅产生 blob，高频大振幅产生 star，混合频率产生 organic。time 参数让形状自然蠕动。",
        glsl: `function generateBlobPath(cx, cy, radius, harmonics, time) {
  for (let i = 0; i < numPoints; i++) {
    const θ = (i / numPoints) * 2π;
    let r = radius;
    for (const h of harmonics) {
      r += radius * h.amp * sin(h.freq * θ + h.phase + time);
    }
    points.push([cx + r*cos(θ), cy + r*sin(θ)]);
  }
}`,
      },
      {
        step: "02",
        title: "Catmull-Rom → SVG 贝塞尔路径 (Smooth Path)",
        description:
          "将 N 个极坐标采样点转换为平滑的 SVG 闭合曲线。使用 Catmull-Rom 插值算法：对每段 P0-P1-P2-P3，计算两个控制点 CP1 = P1 + (P2-P0)/6、CP2 = P2 - (P3-P1)/6，生成三阶贝塞尔曲线。闭合路径首尾相连，形成无缝的有机轮廓。",
        glsl: `// Catmull-Rom → Cubic Bézier 控制点
const cp1x = p1.x + (p2.x - p0.x) / 6;
const cp1y = p1.y + (p2.y - p0.y) / 6;
const cp2x = p2.x - (p3.x - p1.x) / 6;
const cp2y = p2.y - (p3.y - p1.y) / 6;
d += \` C \${cp1x} \${cp1y}, \${cp2x} \${cp2y}, \${p2.x} \${p2.y}\`;`,
      },
      {
        step: "03",
        title: "谐波变形 (Harmonic Morphing)",
        description:
          "切换形状预设时，对两组谐波参数做线性插值：每个谐波的 freq、amp、phase 从当前值平滑过渡到目标值。长度不同时，短的一方用零振幅补齐。这让轮廓在 blob↔star↔organic↔flower 之间自然变形，无需关键帧动画。",
        glsl: `function interpolateHarmonics(from, to, t) {
  return from.map((f, i) => ({
    freq: lerp(f.freq, to[i].freq, t),
    amp:  lerp(f.amp,  to[i].amp,  t),
    phase: lerp(f.phase, to[i].phase, t),
  }));
}`,
      },
      {
        step: "04",
        title: "溅射粒子 + 吸收 (Splash & Absorb)",
        description:
          "膨胀阶段在 blob 边缘生成多个小圆点 div，初始位置在 blob 表面，target 位置在更远处——lerp 让它们「飞溅」出去。吸收阶段把所有粒子 target 设回中心——lerp 让它们减速回归。CSS Gooey 滤镜自动让粒子与 blob 产生液态融合效果。",
        glsl: `// splash: 粒子从 blob 边缘飞出
for (let i = 0; i < count; i++) {
  const angle = (i / count) * 2π;
  particles.push({
    x: cx + cos(angle) * edgeDist,
    targetX: cx + cos(angle) * edgeDist * (1 + force),
  });
}
// absorb: 所有 target → 中心
for (const p of particles) {
  p.targetX = centerX;
  p.targetY = centerY;
}`,
      },
      {
        step: "05",
        title: "CSS Gooey 液态渲染 (Gooey Filter)",
        description:
          "容器设黑色背景 + filter: blur(N) contrast(M)。SVG blob 和 splash 粒子都是白色——blur 让它们的边缘产生灰色渐变，contrast 把灰色裁切回黑/白。当粒子靠近 blob 时，两者的灰色区域重叠，在 contrast 裁切中存活形成液态连接桥。这就是整个「液态」视觉的来源。",
        glsl: `<div style={{
  filter: \`blur(\${blur}px) contrast(\${contrast})\`,
  background: "#000",
}}>
  <svg><path d={blobPath} fill={color} /></svg>
  {splashParticles.map(p => (
    <div style={{
      borderRadius: "50%",
      background: color,
    }} />
  ))}
</div>`,
      },
    ],
    concepts: [
      {
        name: "极坐标谐波",
        nameEN: "Polar Harmonics",
        analogy:
          "在旋转的圆上叠加多个不同频率的波纹——低频波让圆变成 blob，高频波让圆长出尖角",
        explanation:
          "极坐标谐波用 r(θ) = R + Σ A_i × sin(f_i × θ + φ_i) 定义封闭曲线。每个谐波分量的频率 f 决定「波的个数」（f=5 → 5 个尖角），振幅 A 决定变形程度，相位 φ 控制旋转偏移。多个谐波叠加产生复杂的有机形态。这是 Procedural Shape Generation（程序化形状生成）的基础技术。",
        whyItMatters:
          "知道 Polar Harmonics 后，你就能对 AI 说「用极坐标谐波叠加生成有机 blob 轮廓，5 次谐波做星形，混合谐波做不规则形态」——精确描述任何有机形状。",
      },
      {
        name: "Catmull-Rom 样条",
        nameEN: "Catmull-Rom Spline",
        analogy:
          "穿过每个钉子的柔软铁丝——曲线经过所有控制点，且在每个点处平滑过渡",
        explanation:
          "Catmull-Rom 是一种插值样条：给定 N 个点，曲线精确经过每个点且保证 C1 连续（切线连续）。它可以无损转换为三阶贝塞尔曲线（SVG 的 C 命令），转换公式简单：CP1 = P1 + (P2-P0)/6, CP2 = P2 - (P3-P1)/6。这是将离散采样点转为平滑 SVG 路径的标准方法。",
        whyItMatters:
          "知道 Catmull-Rom 后，你就能对 AI 说「用 Catmull-Rom 插值把采样点转为平滑 SVG cubic Bézier 路径」——这比手动调控制点高效得多。",
      },
      {
        name: "粘稠效果",
        nameEN: "Gooey / Metaball Effect",
        analogy:
          "两滴水银靠近时自动融合成一滴——CSS blur + contrast 滤镜组合自然产生这种液态黏连",
        explanation:
          "Gooey Effect 的核心是 filter: blur(N) contrast(M)。blur 让元素边缘扩散为灰色渐变，contrast 将灰色二值化裁切回纯色/纯黑。当两个模糊元素重叠时，重叠区灰度值在 contrast 裁切中存活，形成平滑连接桥。在 Liquid Fill 中，SVG blob 和 splash 粒子共享同一个 Gooey 滤镜容器，自动产生液态融合。",
        whyItMatters:
          "知道 Gooey Effect 后，你就能对 AI 说「用 CSS blur + contrast 做 gooey metaball 融合，让 SVG 路径和 DOM 粒子自动液态连接」——这是纯 CSS 实现液态动画最优雅的方法。",
      },
      {
        name: "相态机动画",
        nameEN: "Phase State Machine Animation",
        analogy:
          "一段舞蹈编排——每个动作（idle→expand→splash→absorb→fill→shrink）有固定时长，按顺序循环执行",
        explanation:
          "将动画分解为有限个「相态」，每个相态有独立的初始化逻辑和持续时间。状态机按顺序推进，每次切换相态时重置目标值。这种模式让复杂的多阶段动画变得可维护——每个相态只需关心「设置正确的 target」，lerp 引擎自动完成过渡。",
        whyItMatters:
          "知道 Phase State Machine 后，你就能对 AI 说「用状态机管理动画阶段，每个 phase 设独立的 target 和 duration」——这是构建循环多阶段动画的标准模式。",
      },
    ],
    applications: [
      {
        field: "页面过渡动画",
        examples:
          "全屏液态展开的路由切换、Landing Page 的 blob 背景填充、品牌色液态覆盖过渡",
      },
      {
        field: "加载与启动",
        examples:
          "App 启动时的液态 Logo 展开、数据加载的 blob 脉冲填充、骨架屏的液态揭示",
      },
      {
        field: "交互反馈",
        examples:
          "按钮点击的液态扩散、拖拽释放的水花溅射、状态切换的 blob 形变",
      },
      {
        field: "创意着陆页",
        examples:
          "产品展示的有机形态背景、艺术网站的 blob 遮罩动画、互动广告的液态填充效果",
      },
    ],
    keyInsight:
      "**液态填充的本质是「极坐标谐波 + Catmull-Rom 平滑 + Gooey 融合 + 状态机驱动」**。用谐波叠加在极坐标系中生成有机轮廓，Catmull-Rom 将采样点转为平滑 SVG 路径，CSS blur + contrast 让 blob 与粒子自动产生液态融合。整个动画由状态机管理——每个相态只需设置目标值，lerp 引擎自动补间。核心术语链：**Polar Harmonics**（形状生成）→ **Catmull-Rom Spline**（路径平滑）→ **Gooey Filter**（液态融合）→ **Phase State Machine**（动画编排）。记住：**极坐标谐波是程序化形状的万能语言——改变频率和振幅就能从 blob 变成 star、flower、organic，谐波插值让任意形态之间的变形浑然天成**。",
  },

  gooeyfx: {
    id: "gooeyfx",
    title: "Gooey FX",
    subtitle: "SVG Gooey 音频频谱可视化",
    oneLiner:
      "基于 SVG Filter（feGaussianBlur + feColorMatrix）的粘稠频谱可视化——多个竖条通过 Gooey 滤镜融合为有机的液态脉冲体，灵感来自 Codrops Creative Gooey Effects 的 Music Visualizer",
    whatYouSee:
      "深色背景底部，一排竖条（模拟音频频谱）不断随机地上下脉动。关键视觉：相邻竖条高度接近时，它们会**自动融合成一个有机的液态 blob**——高的竖条像粘稠的岩浆一样向上涌起，回落时与相邻竖条粘连。底部有一条「地板」将所有竖条底部连成一体。这就是 **SVG Gooey Filter** 的效果——feGaussianBlur 模糊所有竖条的 alpha 通道，feColorMatrix 做阈值裁切把重叠区域保留为粘稠连接。Spectrum 模式模拟音频频谱，Wave 模式是正弦波流过竖条，Pulse 模式从中心向两侧脉冲。",
    pipeline: [
      {
        step: "01",
        title: "SVG Gooey 滤镜 (SVG Filter Pipeline)",
        description:
          "滤镜由两步（或三步）组成：feGaussianBlur 模糊所有元素的 alpha 通道，产生扩散的渐变区域；feColorMatrix 用 alpha 行 `0 0 0 {threshold} -{offset}` 做阈值裁切，把渐变二值化回硬边缘——只有相邻竖条重叠处的 alpha 存活，形成粘稠连接。可选第三步 feComposite atop 叠回原图保持清晰边缘（Crisp 模式）。默认不加 feComposite，让竖条完全融合成有机 blob（与原版 Music Visualizer 的 goo-no-comp 一致）。",
        glsl: `<!-- 默认：全融合（无 feComposite）-->
<filter id="goo-fx">
  <feGaussianBlur in="SourceGraphic"
    stdDeviation="10" result="blur" />
  <feColorMatrix in="blur" mode="matrix"
    values="1 0 0 0 0  0 1 0 0 0
            0 0 1 0 0  0 0 0 20 -9"
    result="goo" />
</filter>
<!-- Crisp 模式：加 feComposite atop 保持锐利边缘 -->`,
      },
      {
        step: "02",
        title: "竖条数据模型 (Bar State Model)",
        description:
          "每个竖条维护 current（当前高度比例 0-1）和 target（目标高度比例）。Spectrum 模式中，每个竖条还有 rising（是否上升中）和 cooldown（下次变化前的等待时间）。动画引擎每帧用 lerp 让 current 趋近 target，上升和下落使用不同的 lerp 速度——上升快、下落慢，模拟重力感。",
        glsl: `interface BarState {
  current: number;  // 当前高度比例 0-1
  target: number;   // 目标高度比例
  rising: boolean;  // 是否在上升
  cooldown: number; // 下次随机变化的冷却
}
// 上升快 (lerp factor 大), 下落慢 (factor 小)
const f = rising ? riseLerp : fallLerp;
bar.current += (bar.target - bar.current) * f;`,
      },
      {
        step: "03",
        title: "三种动画模式 (Animation Modes)",
        description:
          "Spectrum：每个竖条独立随机设定目标高度，到达后切换方向（高→低→高），随机冷却延迟制造错落感。Wave：竖条高度由两个正弦波叠加驱动（h = sin(i×2π/N + t×2) + sin(i×2π/N×1.6 + t×3.3)），形成流动的波浪。Pulse：高度由距中心的距离和时间决定（h = sin(t×3 - dist×4)），形成从中心向两侧传播的脉冲波。",
        glsl: `// Spectrum: 随机目标 + 涨落切换
if (near(current, target)) {
  target = rising ? randomLow : randomHigh;
  rising = !rising;
}

// Wave: 双频正弦叠加
target = 0.08 + sin(t*2 + phase)*0.45
             + sin(t*3.3 + phase*1.6)*0.35;

// Pulse: 中心外扩波
target = 0.08 + max(0, sin(t*3 - dist*4))*0.85;`,
      },
      {
        step: "04",
        title: "Lerp 帧循环 (Animation Loop)",
        description:
          "requestAnimationFrame 驱动的帧循环。每帧计算 dt（帧间隔，clamp 到 0.05 防止跳帧），更新所有竖条的 current 值（lerp 趋近 target），然后将高度比例转换为像素值（ratio × containerHeight × 0.65）写入 React state 触发渲染。ensureBars() 在循环中动态响应 barCount 变化。",
        glsl: `function update(dt) {
  s.time += dt * speed;
  ensureBars();  // 动态调整竖条数量
  for (const bar of bars) {
    const f = 1 - Math.pow(0.01, dt * speed * k);
    bar.current += (bar.target - bar.current) * f;
  }
  const maxH = containerHeight * 0.65;
  setBarPixelHeights(bars.map(b => b.current * maxH));
}`,
      },
      {
        step: "05",
        title: "DOM 渲染 + Floor 连接 (Render Structure)",
        description:
          "所有竖条渲染为 flex 容器中的 div（宽度固定，高度由动画驱动），底部对齐向上生长。一个同色「Floor」div 铺在最底部，与竖条底部重叠，通过 Gooey 滤镜将所有竖条底部融合为连续的粘稠基座。整个容器应用 filter: url(#goo-fx)。SVG filter 定义放在隐藏的 <svg> 中，useId() 生成唯一 ID。",
        glsl: `<div style={{ filter: \`url(#\${filterId})\` }}>
  {/* Floor: 底部同色条，连接所有竖条底部 */}
  <div style={{
    position: "absolute", bottom: 0,
    width: "100%", height: 25, background: color
  }} />
  {/* Bars: flex 底部对齐，向上生长 */}
  <div style={{ display: "flex", alignItems: "flex-end" }}>
    {barHeights.map((h, i) => (
      <div style={{ width: barWidth, height: h,
        background: color }} />
    ))}
  </div>
</div>`,
      },
    ],
    concepts: [
      {
        name: "SVG 粘稠滤镜",
        nameEN: "SVG Gooey Filter (feGaussianBlur + feColorMatrix)",
        analogy:
          "把所有竖条的影子模糊后用阈值裁切——重叠的影子形成粘稠连接，就像岩浆在相邻柱子之间拉丝",
        explanation:
          "SVG Gooey Filter 的核心是 feGaussianBlur + feColorMatrix。blur 对 alpha 通道做高斯模糊，让每个元素边缘产生渐变扩散。feColorMatrix 的 alpha 行 `0 0 0 M -N`（如 `0 0 0 20 -9`）做阈值裁切：alpha × 20 - 9，低 alpha 被裁为 0，高 alpha 保留。相邻竖条的模糊区域重叠时，alpha 值叠加超过阈值，形成粘稠连接桥。与 CSS blur+contrast 不同，SVG 方案可选加 feComposite atop 保持元素清晰边缘。",
        whyItMatters:
          "知道 SVG Gooey Filter 后，你就能对 AI 说「用 feGaussianBlur + feColorMatrix 做 SVG gooey 滤镜，threshold 控制融合强度」——这是实现粘稠液态效果最灵活的方法，支持任意背景色。",
      },
      {
        name: "Alpha 通道裁切",
        nameEN: "Alpha Channel Thresholding (feColorMatrix)",
        analogy:
          "把一张模糊的灰度照片的亮度拉到极端——接近黑的全变纯黑，接近白的全变纯白，得到清晰的剪影",
        explanation:
          "feColorMatrix 的 alpha 行 `0 0 0 M -N` 对 alpha 通道做线性变换：newAlpha = oldAlpha × M - N。M 值越大裁切越锐利，N 控制偏移阈值。高 M（如 20）配合适中 N（如 9），将模糊产生的低 alpha 渐变裁切回硬边缘，同时保留相邻元素重叠区的高 alpha——这就是粘稠连接桥的来源。",
        whyItMatters:
          "知道 alpha thresholding 后，你就能精确调参：threshold 控制「连接桥的锐利度」，offset 控制「多近才开始融合」。对 AI 说「feColorMatrix alpha 行用 threshold 20 offset 9」即可精确描述效果。",
      },
      {
        name: "Floor 融合",
        nameEN: "Floor Element (Gooey Base Connection)",
        analogy:
          "所有柱子插在同一块黏土上——柱子底部天然通过黏土相连，看起来像从同一个有机体中长出来的",
        explanation:
          "在所有竖条底部放置一个同色的宽条（Floor），与竖条底部重叠。经过 Gooey 滤镜后，Floor 和所有竖条底部的 alpha 重叠区域自动融合，形成一个连续的有机基座。这个技巧让独立的竖条看起来像从同一个液态体中涌出的柱子。",
        whyItMatters:
          "知道 Floor 融合后，你就能对 AI 说「在元素底部加同色 floor div，通过 gooey 滤镜实现基座融合效果」——这是 Codrops Music Visualizer 的关键视觉技巧。",
      },
      {
        name: "目标驱动动画",
        nameEN: "Target-Driven Animation (Lerp)",
        analogy:
          "橡皮筋效应——设定目标位置后，当前值像被橡皮筋拉着一样自然趋近，离目标越远移动越快",
        explanation:
          "每个竖条维护 current 和 target 两个值。每帧用 lerp 让 current 趋近 target：current += (target - current) × factor。上升用较大 factor（快速响应），下落用较小 factor（慢速衰减），模拟重力感。到达目标后切换方向——这种「目标驱动 + 涨落切换」的模式让随机动画依然流畅自然。",
        whyItMatters:
          "知道目标驱动动画后，你就能对 AI 说「每个元素维护 current/target，用 lerp 补间，rising/falling 用不同 factor」——这是实现有机感随机动画的标准模式。",
      },
    ],
    applications: [
      {
        field: "音频可视化",
        examples:
          "音乐播放器的频谱动画、DJ 软件的实时可视化、Podcast App 的声波展示",
      },
      {
        field: "数据可视化",
        examples:
          "实时数据柱状图的液态过渡、仪表盘指标的有机脉冲、股票行情的粘稠走势",
      },
      {
        field: "加载与反馈",
        examples:
          "语音识别中的粘稠波形指示器、文件上传的液态进度条、系统活动的有机脉搏",
      },
      {
        field: "创意着陆页",
        examples:
          "音乐网站的液态频谱背景、产品页的粘稠装饰动画、互动广告的有机 UI 元素",
      },
    ],
    keyInsight:
      "**SVG Gooey 频谱的本质是「竖条 + 模糊 + 阈值裁切 = 有机液态体」**。独立的竖条经过 feGaussianBlur 模糊后，相邻竖条的 alpha 区域重叠；feColorMatrix 阈值裁切保留重叠区域，形成粘稠连接桥。底部 Floor 元素将所有竖条基座融合为一体。核心术语链：**feGaussianBlur**（alpha 扩散）→ **feColorMatrix**（alpha 阈值裁切）→ **Floor Element**（基座融合）→ **Target-Driven Lerp**（目标驱动动画）。记住：**Gooey 滤镜的魔力在于「相邻元素自动融合」——你只需让元素靠近，滤镜自动产生液态连接，这让任何排列的 DOM 元素都能变成有机的液态体**。",
  },

  eyetrack: {
    id: "eyetrack",
    title: "Eye Track",
    subtitle: "光标跟踪眼球动画",
    oneLiner:
      "基于 DOM + requestAnimationFrame 的光标跟踪眼球系统——用 Lerp 插值驱动瞳孔平滑跟随鼠标，配合 CSS scaleY 实现自然眨眼效果",
    whatYouSee:
      "一张彩色卡片上有两只白色椭圆形眼睛，每只眼睛中有一个黑色瞳孔。当你移动鼠标时，两个瞳孔会**平滑地跟随**光标方向转动——瞳孔的运动有轻微的惯性延迟，像真眼球一样自然。每隔几秒，眼睛会**自然眨一下**——一层与卡片同色的「眼皮」从上方快速闭合再张开。这种效果叫 **Cursor Tracking / Gaze Following**（光标跟踪/注视跟随），核心是 **getBoundingClientRect** 计算眼睛位置 + **Lerp** 平滑跟随。",
    pipeline: [
      {
        step: "01",
        title: "坐标系建立 (Coordinate System)",
        description:
          "每只眼睛通过 getBoundingClientRect() 获取屏幕坐标，计算眼睛中心点 (cx, cy)。鼠标位置 (clientX, clientY) 减去眼睛中心得到方向向量 (dx, dy)。两只眼睛各自独立计算——因此瞳孔会微微「对眼」看向同一个目标。",
        glsl: `const r = eye.getBoundingClientRect();
const cx = r.left + r.width / 2;
const cy = r.top + r.height / 2;
const dx = target.x - cx;  // 鼠标相对于眼睛中心的偏移
const dy = target.y - cy;`,
      },
      {
        step: "02",
        title: "运动范围限制 (Clamped Movement)",
        description:
          "瞳孔不能超出眼白范围。用 clamp 函数将偏移量限制在 maxX = eyeWidth × 0.18、maxY = eyeHeight × 0.10 的椭圆范围内。sensitivity 系数控制鼠标距离到瞳孔偏移的映射比例——值越大瞳孔反应越灵敏。",
        glsl: `const maxX = r.width * 0.18;
const maxY = r.height * 0.10;
const tx = clamp(dx * sensitivity, -maxX, maxX);
const ty = clamp(dy * sensitivity, -maxY, maxY);`,
      },
      {
        step: "03",
        title: "Lerp 平滑跟随 (Smooth Following)",
        description:
          "瞳孔不直接跳到目标位置，而是每帧用 lerp 逐渐靠近。smoothing 系数控制跟随速度：0.12 时有明显的惯性延迟（像真眼球），0.5 时几乎即时响应。每帧 current += (target - current) × smoothing，这是最简形式的指数衰减缓动。",
        glsl: `// 每帧：当前值向目标值靠近
state.currentX += (tx - state.currentX) * smoothing;
state.currentY += (ty - state.currentY) * smoothing;

pupil.style.transform =
  \`translate(calc(-50% + \${state.currentX}px),
             calc(-50% + \${state.currentY}px))\`;`,
      },
      {
        step: "04",
        title: "眨眼动画 (Blink Animation)",
        description:
          "眨眼用一个与卡片同色的「眼皮」div 覆盖在眼睛上方。平时 scaleY(0) 完全隐藏，眨眼时 scaleY(1) 展开覆盖整个眼睛。transformOrigin 设为顶部（50% 0%），让眼皮从上往下「闭合」。setInterval 控制眨眼间隔，setTimeout 控制眨眼持续时间（约 200ms）。",
        glsl: `// 眼皮样式
{
  position: "absolute",
  inset: -2,
  background: cardColor,  // 与卡片同色 = 视觉上的眼皮
  transformOrigin: "50% 0%",
  transform: blinkPhase ? "scaleY(1)" : "scaleY(0)",
  transition: "transform 0.08s ease-in-out",
}
// 定时眨眼
setInterval(() => {
  setBlinkPhase(true);
  setTimeout(() => setBlinkPhase(false), 200);
}, blinkInterval * 1000);`,
      },
      {
        step: "05",
        title: "DOM 渲染结构 (DOM Render Structure)",
        description:
          "整体结构：外层容器（深色背景）→ 卡片 div（圆角 + 彩色背景）→ 眼睛容器（flex 水平排列）→ 每只眼睛（白色椭圆 overflow:hidden）→ 瞳孔（黑色椭圆 absolute 定位）+ 眼皮（同色遮罩）。通过 useRef 直接操控瞳孔 DOM 的 transform，避免 React 重渲染开销。",
        glsl: `<div className="card" style={{ background: cardColor }}>
  <div className="eyes" style={{ gap: eyeGap }}>
    {[0, 1].map(i => (
      <div className="eye" ref={eyeRef}
        style={{ width: eyeWidth, height: eyeHeight }}>
        <div className="pupil" ref={pupilRef}
          style={{ width: pupilSize }} />
        <div className="eyelid"
          style={{ background: cardColor }} />
      </div>
    ))}
  </div>
</div>`,
      },
    ],
    concepts: [
      {
        name: "光标跟踪",
        nameEN: "Cursor Tracking / Gaze Following",
        analogy:
          "猫头鹰盯着猎物——不管猎物跑到哪里，头和眼睛总是朝向目标方向",
        explanation:
          "Cursor Tracking 是一种常见的交互模式：UI 元素（眼球、指针、光标）实时跟随鼠标位置。核心步骤：监听 mousemove 获取光标坐标 → 计算目标偏移 → 限制在合理范围内 → 平滑插值到目标位置。这种模式广泛用于交互式角色、视差效果、磁性按钮等。",
        whyItMatters:
          "知道 Cursor Tracking 后，你就能对 AI 说「做一个 gaze following 效果，用 getBoundingClientRect 计算元素中心，clamp 限制移动范围」——精确描述眼球跟随交互。",
      },
      {
        name: "线性插值",
        nameEN: "Lerp (Linear Interpolation)",
        analogy:
          "橡皮筋效应——离目标越远拉力越大、移动越快，越接近目标速度越慢，天然产生惯性延迟",
        explanation:
          "current += (target - current) × factor 是 lerp 的最简形式。factor 值越小惯性越大（0.05 = 很黏），越大响应越快（0.5 = 近乎即时）。这种每帧递进式的 lerp 本质是指数衰减——距离每帧缩减为 (1-factor) 倍，理论上永远不会精确到达目标但视觉上无限接近。",
        whyItMatters:
          "知道 lerp smoothing 后，你就能对 AI 说「用 lerp factor 0.12 做指数衰减的平滑跟随，factor 越小惯性越大」——这是实现「有质感的跟随动画」的标准方法。",
      },
      {
        name: "椭圆范围限制",
        nameEN: "Elliptical Clamping",
        analogy:
          "鱼缸里的鱼——可以自由游动但永远不会超出鱼缸边界",
        explanation:
          "瞳孔的运动范围是一个椭圆（水平方向可移动更多、垂直方向更少），通过分别 clamp X 和 Y 方向实现近似椭圆约束。maxX = eyeWidth × ratio 和 maxY = eyeHeight × ratio 的不同比例让瞳孔在水平方向有更大的活动空间——符合真实眼球的运动规律。",
        whyItMatters:
          "知道 elliptical clamping 后，你就能对 AI 说「用分轴 clamp 约束元素在椭圆范围内运动」——这比圆形约束更自然，常用于眼球和摇杆模拟。",
      },
      {
        name: "CSS 变形遮罩",
        nameEN: "CSS Transform Masking (scaleY Blink)",
        analogy:
          "百叶窗——从顶部拉下遮帘覆盖窗户，再拉回去恢复透明",
        explanation:
          "用一个与背景同色的 div 作为「眼皮」，通过 scaleY(0→1→0) 实现开闭动画。transformOrigin 设为顶部让缩放从上往下展开。overflow:hidden 确保眼皮不会超出眼白边界。这种技巧不需要 clip-path 或 mask——只需一个同色遮罩层 + transform 即可模拟任何「开合」效果。",
        whyItMatters:
          "知道 transform masking 后，你就能对 AI 说「用 scaleY + transformOrigin 做单方向的遮罩开合动画」——这是纯 CSS 实现眨眼、窗帘、百叶窗效果的最简方法。",
      },
    ],
    applications: [
      {
        field: "交互式角色",
        examples:
          "网站吉祥物的眼球跟随、虚拟助手的注视反馈、游戏 NPC 的视线追踪",
      },
      {
        field: "趣味 UI",
        examples:
          "404 页面的卡通眼球、表单输入时的角色注视、密码输入时的「遮眼」动画",
      },
      {
        field: "视差交互",
        examples:
          "鼠标驱动的多层视差效果、产品展示的 3D 倾斜跟随、磁性按钮的吸附动效",
      },
      {
        field: "教育与创意",
        examples:
          "儿童教育 App 的互动角色、创意 Landing Page 的动态装饰、互动贺卡",
      },
    ],
    keyInsight:
      "**光标跟踪眼球的本质是「坐标映射 + 范围限制 + 平滑插值」**。getBoundingClientRect 建立元素本地坐标系，clamp 限制瞳孔在椭圆范围内运动，lerp 提供惯性感的平滑跟随。眨眼只是一个同色遮罩层的 scaleY 开合。核心术语链：**Cursor Tracking**（交互模式）→ **getBoundingClientRect**（坐标获取）→ **Elliptical Clamping**（范围限制）→ **Lerp Smoothing**（惯性跟随）→ **Transform Masking**（眨眼遮罩）。记住：**最有温度的 UI 是「有眼神」的 UI——一双跟随鼠标的眼睛能让整个页面从静态变成活的**。",
  },
  liquidtrans: {
    id: "liquidtrans",
    title: "Liquid Transition",
    subtitle: "液态大理石转场效果",
    oneLiner:
      "基于 WebGL + Simplex Noise + 双层 Domain Warping 的液态颜料流动效果——用噪声场扭曲坐标空间，将平面像素映射为浓稠油漆般的有机流动色带",
    whatYouSee:
      "你看到的画面像是三种浓稠油漆（蓝、粉、黄）被倒在一起后缓慢搅拌——色带沿弧线流动、互相推挤，但始终保持鲜明的边界而不混为一色。这种效果在业界被称为 **Liquid Transition** 或 **Marble Texture**，核心技术是 **Domain Warping**（域扭曲）：用一层噪声去扭曲另一层噪声的坐标，产生有机的流体感。",
    pipeline: [
      {
        step: "01",
        title: "Simplex Noise 生成基础噪声场",
        description:
          "Simplex Noise 是一种连续随机函数，输入坐标 (x, y, z) 输出 [-1, 1] 的平滑值。与 Perlin Noise 类似但更高效。我们用 3D Simplex Noise（第三维是时间），让噪声场随时间平滑演化，产生流动感。",
        glsl: `float snoise(vec3 v) {
  // Simplex 3D: 将空间分割为四面体网格
  // 对每个点计算其所在四面体的4个顶点贡献
  // 返回 [-1, 1] 的平滑连续值
}`,
      },
      {
        step: "02",
        title: "FBM 叠加多层细节 (Fractal Brownian Motion)",
        description:
          "单层噪声太「光滑」，缺少细节。FBM 叠加多个频率递增、振幅递减的噪声层：低频给出大的流动趋势，高频添加细碎的「颜料纹理」。turbulence 参数控制叠加层数——越多越细腻但越重。",
        glsl: `float fbm(vec3 p) {
  float val = 0.0, amp = 0.5, freq = 1.0;
  for (int i = 0; i < 5; i++) {
    val += amp * snoise(p * freq);
    freq *= 2.0;  // 频率翻倍
    amp *= 0.5;   // 振幅减半
  }
  return val;
}`,
      },
      {
        step: "03",
        title: "双层 Domain Warping (域扭曲)",
        description:
          "这是液态效果的灵魂。第一层：用 fbm 生成两个偏移值 (dx, dy)，将原始坐标扭曲为 p' = p + swirl * (dx, dy)。第二层：再对 p' 做同样的事，得到 p''。两层扭曲叠加就像先搅拌一次再搅拌一次——产生复杂的漩涡和分支。",
        glsl: `// 第一层扭曲
float w1 = fbm(vec3(p * 0.8, t * 0.7));
float w2 = fbm(vec3(p * 0.8 + 5.2, t * 0.7));
vec2 warped = p + vec2(w1, w2) * swirl;

// 第二层扭曲
float w3 = fbm(vec3(warped * 0.6, t * 0.5));
float w4 = fbm(vec3(warped * 0.6 + 3.7, t * 0.5));
vec2 finalP = warped + vec2(w3, w4) * swirl * 0.5;`,
      },
      {
        step: "04",
        title: "噪声值 → 三色带映射 (Color Banding)",
        description:
          "在扭曲后的坐标上再取一次 fbm，得到最终噪声值 n ∈ [0, 1]。将 [0, 1] 划分为三个区间，每个区间对应一种颜色。用 smoothstep 在区间边界创建平滑过渡——edgeSoftness 控制过渡宽度，小值产生锐利边界（像油漆），大值产生柔和渐变。",
        glsl: `float n = fbm(vec3(finalP * 0.7, t * 0.3));
n = n * 0.5 + 0.5;  // 归一化到 [0, 1]

// 三个平滑色带
float band1 = smoothstep(0.0, 0.333+edge, n)
            * (1.0 - smoothstep(0.333-edge, 0.667, n));
float band2 = smoothstep(0.333-edge, 0.667+edge, n)
            * (1.0 - smoothstep(0.667-edge, 1.0, n));
float band3 = smoothstep(0.667-edge, 1.0, n);

vec3 color = c1*band1 + c2*band2 + c3*band3;`,
      },
      {
        step: "05",
        title: "细节纹理叠加 (Detail Noise)",
        description:
          "在最终颜色上叠加一层高频低振幅噪声，模拟颜料表面的微观纹理变化——让画面不会太「数字感」。这一步振幅很小（约 0.08），只添加微妙的颗粒质感。",
        glsl: `float detail = snoise(vec3(finalP * 3.0, t * 0.2)) * 0.08;
color += detail;`,
      },
    ],
    concepts: [
      {
        name: "域扭曲",
        nameEN: "Domain Warping",
        analogy:
          "*想象你在一张印有条纹的橡皮膜上涂了一层油，然后用手指在不同位置推拉——条纹被扭曲成有机的曲线*",
        explanation:
          "Domain Warping 是将一个噪声函数的输出作为另一个噪声函数的坐标偏移，f(p + g(p))。这打破了噪声的「自相似性」，产生涡旋、分支等自然界常见的复杂图案。在 Inigo Quilez 的经典文章中被系统阐述，是 Shader Art 的核心技法。",
        whyItMatters:
          "知道 Domain Warping 后，你就能对 AI 说：「我要一个 Domain Warping 液态效果，用两层嵌套 FBM 做坐标扭曲，swirl 强度设为 3.0」",
      },
      {
        name: "分形布朗运动",
        nameEN: "Fractal Brownian Motion (FBM)",
        analogy:
          "*就像远看一座山只有轮廓，走近才看到岩石、再走近看到石头上的裂纹——每个尺度都有细节*",
        explanation:
          "FBM 将多层噪声以「频率翻倍、振幅减半」的规律叠加。低频层决定大的流动趋势（像大的油漆色块），高频层添加小的细节（像颜料边缘的不规则凹凸）。层数越多计算越重，turbulence 参数控制这个平衡。",
        whyItMatters:
          "知道 FBM 后，你就能对 AI 说：「用 5 层 FBM 叠加生成有细节的液态噪声，turbulence 参数控制叠加层数」",
      },
      {
        name: "平滑阶梯",
        nameEN: "Smoothstep Color Banding",
        analogy:
          "*像调色盘上两种颜料交界处的自然过渡带——不是一刀切的，而是有一个柔和的混合区域*",
        explanation:
          "smoothstep(edge0, edge1, x) 在 [edge0, edge1] 区间从 0 平滑过渡到 1，用三次多项式（Hermite 插值）消除线性混合的突兀感。在液态效果中，它决定颜色之间是锐利的油漆边界还是柔和的渐变。edgeSoftness 控制 edge0 到 edge1 的宽度。",
        whyItMatters:
          "知道 Smoothstep Banding 后，你就能对 AI 说：「用 smoothstep 在三个颜色之间做平滑过渡，edgeSoftness 设 0.3」",
      },
      {
        name: "单纯形噪声",
        nameEN: "Simplex Noise",
        analogy:
          "*想象一个蜂巢网格（三角形/四面体），每个格点上放一个随机倾斜的「小山丘」，它们平滑地连接在一起*",
        explanation:
          "Simplex Noise 由 Ken Perlin 在 2001 年发明，是 Perlin Noise 的改进版。它使用单纯形（三角形/四面体）而非正方形/立方体网格，计算复杂度从 O(2^n) 降为 O(n^2)，且没有 Perlin Noise 的方向偏差。在 WebGL Shader 中几乎是程序化纹理的标配。",
        whyItMatters:
          "知道 Simplex Noise 后，你就能对 AI 说：「用 3D Simplex Noise（第三维做时间动画）生成程序化流动纹理」",
      },
    ],
    applications: [
      {
        field: "网页转场",
        examples:
          "Awwwards 获奖网站的液态页面过渡、WebGL 图片切换特效、Hero Section 的流体背景",
      },
      {
        field: "品牌视觉",
        examples:
          "产品 Landing Page 的大理石纹背景、App 启动画面、品牌宣传视频的液态转场",
      },
      {
        field: "数据可视化",
        examples:
          "热力图的流体动画、状态变化的液态过渡、音乐可视化的频谱流动",
      },
      {
        field: "游戏 & 创意编码",
        examples:
          "Shader Art 生成艺术、游戏地图的程序化地形纹理、粒子系统的颜色场驱动",
      },
    ],
    keyInsight:
      "**液态转场的本质是「噪声 + 扭曲 + 色带映射」三步链**。Simplex Noise 提供随机但连续的数值场；Domain Warping 将这个场「搅拌」出漩涡和分支；Smoothstep Banding 将连续数值切分为离散色带。核心术语链：**Simplex Noise**（基础随机场）→ **FBM**（多尺度细节）→ **Domain Warping**（有机扭曲）→ **Smoothstep Banding**（色带分离）。记住：**你看到的每一帧「油画」都不是真正的流体模拟——它只是一个被反复扭曲的噪声场在不同阈值处的切片，这种「用简单函数欺骗视觉」的思路是 Shader Art 的精髓**。",
  },

  dotgrid: {
    id: "dotgrid",
    title: "Dot Grid",
    subtitle: "点阵扩散与网格变形动画",
    oneLiner:
      "基于 Canvas 2D + Staggered Easing 的点阵扩散→网格变形动画——从中心向外扩散的点阵，每个圆点原地「伸展」为十字臂最终拼合成完整网格线",
    whatYouSee:
      "屏幕中央开始，大量圆点像涟漪一样**从中心向四周扩散**，排列成均匀的点阵（Dot Grid）。扩散完成后，每个圆点**原地变形**——圆形「身体」逐渐缩小，同时向上下左右伸出四条细线（十字臂），相邻点的臂彼此衔接，最终所有圆点融合为一张完整的**网格线**。这种效果的核心是 **Staggered Animation**（交错动画）——离中心越远的点启动越晚，形成波纹状的传播感；以及 **Shape Morphing**（形状变形）——同一个粒子从圆形连续变形为十字形。",
    pipeline: [
      {
        step: "01",
        title: "网格布局计算 (Grid Layout)",
        description:
          "根据画布尺寸和 gridSize 参数计算网格的行列数、起始偏移。行列数取 ceil(尺寸/gridSize)+2 保证边缘覆盖，偏移量让网格相对画布居中对齐。所有后续渲染都基于这个布局。",
        glsl: `const cols = Math.ceil(width / gridSize) + 2;
const rows = Math.ceil(height / gridSize) + 2;
const offsetX = ((width % gridSize) - gridSize) / 2;
const offsetY = ((height % gridSize) - gridSize) / 2;
// 每个点的位置: (offsetX + c * gridSize, offsetY + r * gridSize)`,
      },
      {
        step: "02",
        title: "中心扩散动画 (Staggered Spread)",
        description:
          "所有圆点从画布中心出发，向各自的网格目标位置飞去。核心技巧：每个点根据「离中心的距离」计算一个延迟量 staggerDelay = dist/maxDist × stagger。全局进度 globalT 经 easeInOutQuart 缓动后，减去延迟量得到每个点的本地进度 localT。结果：中心的点先到达，边缘的点后到达，形成涟漪般的扩散波。",
        glsl: `const globalT = easeInOutQuart(progress);
// 每个点的距离决定启动延迟
const staggerDelay = (dist / maxDist) * stagger;
const localT = clamp((globalT - staggerDelay) / (1 - staggerDelay));
const easedT = easeOutQuint(localT);
// 从中心插值到目标位置
const x = cx + dx * easedT;
const y = cy + dy * easedT;`,
      },
      {
        step: "03",
        title: "圆点→十字臂变形 (Dot-to-Cross Morphing)",
        description:
          "所有圆点**同步**变形为十字形——与扩散阶段的交错延迟不同，变形阶段所有粒子共享同一个 morphT，产生「整体形变」的视觉效果。圆点半径按 dotRadius × (1 - morphT × 0.85) 缩小；同时四条臂从 0 生长到 gridSize/2（恰好与相邻点的臂衔接）；臂的粗细从 dotRadius 渐变为 1px。整个过程是同一个粒子的连续形变，不创建新元素。",
        glsl: `// 全局同步变形——无 stagger
const morphT = easeOutQuint(easeInOutCubic(progress));
// 圆点缩小
const dotRadius = baseRadius * (1 - morphT * 0.85);
// 臂生长（到 gridSize/2 刚好接上邻居）
const armLength = (gridSize / 2) * morphT;
// 臂变细
const armThickness = baseRadius * (1 - morphT) + 1 * morphT;`,
      },
      {
        step: "04",
        title: "网格线定型 (Grid Settle)",
        description:
          "变形完成后，所有点的臂完全衔接，画面变为完整的横竖网格线。此阶段直接绘制全屏水平线和垂直线，1px 线宽，无需逐点计算——这是最终静态态，保持短暂后循环回扩散阶段。",
        glsl: `// 水平线
for (let r = 0; r < rows; r++) {
  ctx.moveTo(0, offsetY + r * gridSize);
  ctx.lineTo(width, offsetY + r * gridSize);
}
// 垂直线
for (let c = 0; c < cols; c++) {
  ctx.moveTo(offsetX + c * gridSize, 0);
  ctx.lineTo(offsetX + c * gridSize, height);
}`,
      },
      {
        step: "05",
        title: "循环与帧驱动 (Animation Loop)",
        description:
          "requestAnimationFrame 驱动的帧循环。维护 phase（0=扩散, 1=变形, 2=定型）和 accumulatedTime。每帧累加 dt × speed，当累计时间超过当前阶段时长时切换到下一阶段，phase 2 结束后回到 phase 0 循环。speed 参数作为时间倍率控制全局速度。",
        glsl: `const tick = (ts) => {
  const dt = (ts - lastTimestamp) * speed;
  accumulatedTime += dt;
  if (accumulatedTime >= durations[phase]) {
    phase = (phase + 1) % 3;  // 0→1→2→0 循环
    accumulatedTime = 0;
  }
  const progress = accumulatedTime / durations[phase];
  renderFrame(ctx, w, h, phase, progress, params);
  requestAnimationFrame(tick);
};`,
      },
    ],
    concepts: [
      {
        name: "交错动画",
        nameEN: "Staggered Animation",
        analogy:
          "往池塘里扔一颗石子——水波从落点向外一圈一圈扩散，远处的涟漪比近处的晚到达",
        explanation:
          "Staggered Animation 是让多个元素按照某种规则（距离、索引、随机）依次启动动画，而非同时开始。核心公式：localT = (globalT - delay) / (1 - delay)，delay 由元素与锚点（如中心）的距离决定。delay 越大元素启动越晚，视觉上形成传播波。这是 Motion Design 中最常用的编排手法之一。",
        whyItMatters:
          "知道 Staggered Animation 后，你就能对 AI 说「用 stagger delay 按距中心距离编排动画，形成涟漪扩散效果」——而不是说「那种一个一个冒出来的效果」。",
      },
      {
        name: "缓动函数",
        nameEN: "Easing Functions",
        analogy:
          "汽车的油门和刹车——不是匀速从 A 到 B，而是先加速再减速，动作有「呼吸感」",
        explanation:
          "缓动函数将线性的 [0,1] 时间映射为非线性的进度值。easeInOutQuart（四次方）让动画「慢-快-慢」，适合整体进度；easeOutQuint（五次方出）让动画快速启动后缓慢停下，适合单个粒子到位；easeInOutCubic（三次方）提供中等力度的缓动，适合变形过程。不同阶段选择不同缓动函数是动效精细调控的关键。",
        whyItMatters:
          "知道 easing functions 后，你就能对 AI 说「扩散阶段用 easeInOutQuart，落位用 easeOutQuint，变形用 easeInOutCubic」——精确控制每个阶段的运动节奏。",
      },
      {
        name: "形状变形",
        nameEN: "Shape Morphing",
        analogy:
          "一块橡皮泥被慢慢捏成另一个形状——始终是同一块材料，只是外形在连续变化",
        explanation:
          "Shape Morphing 是让一个图形连续变形为另一个图形。本效果中每个圆点 morph 为十字形：圆的半径缩小（消失）的同时线段长度增长（出现），中间过程是「有核心的短十字」。关键是所有几何参数（半径、臂长、线粗）都由同一个 morphT ∈ [0,1] 驱动，保证变形的连贯性。",
        whyItMatters:
          "知道 Shape Morphing 后，你就能对 AI 说「做 circle-to-cross 的 shape morphing，用单一参数 t 同时驱动半径缩小和臂长增长」——精确描述粒子的形变过程。",
      },
      {
        name: "Canvas 2D 即时模式渲染",
        nameEN: "Canvas 2D Immediate Mode Rendering",
        analogy:
          "在白板上画画——每次先擦干净再重新画一帧，画什么完全由代码控制",
        explanation:
          "Canvas 2D 的 API（arc、moveTo、lineTo、stroke、fill）是即时模式——没有保留的场景图，每帧必须重新绘制所有内容。clearRect 清空画布后，逐点计算位置和形状并绘制。这种模式适合大量简单几何体的动画（如数百个圆点），因为没有 DOM 节点的创建销毁开销。",
        whyItMatters:
          "知道 Canvas 2D immediate mode 后，你就能对 AI 说「用 Canvas 2D 即时模式渲染网格动画，每帧 clearRect + 逐点绘制」——这是处理大量粒子的最高效方案。",
      },
    ],
    applications: [
      {
        field: "页面加载与启动",
        examples:
          "网站首屏的网格揭示动画、App 启动画面的点阵扩散、背景网格的渐进出现",
      },
      {
        field: "数据可视化",
        examples:
          "散点图到热力图的 morphing 过渡、网格布局的展开动画、矩阵数据的波纹填充",
      },
      {
        field: "UI 过渡",
        examples:
          "网格布局视图的出场动画、卡片列表的交错入场、瀑布流的涟漪加载",
      },
      {
        field: "创意背景",
        examples:
          "科技感的动态网格背景、交互式点阵装饰、品牌 Landing Page 的呼吸网格",
      },
    ],
    keyInsight:
      "**点阵→网格变形的本质是「交错编排 + 单粒子形变」**。数百个圆点不是各做各的动画——它们共享一个全局进度条，每个点根据「离中心的距离」获得不同的延迟偏移，形成涟漪般的传播波。形变阶段，每个圆点用同一个 morphT 参数同时驱动半径缩小和臂长增长，实现 circle→cross 的连续变形。核心术语链：**Staggered Animation**（交错编排）→ **Easing Functions**（缓动曲线）→ **Shape Morphing**（形状变形）→ **Canvas 2D Immediate Mode**（即时渲染）。记住：**最自然的群体动画不是「同时开始」而是「依次启动」——一个简单的距离延迟就能把机械的全体运动变成有机的传播波浪**。",
  },
  glassturbine: {
    id: "glassturbine",
    title: "Glass Turbine",
    subtitle: "玻璃涡轮叶片旋转拖影效果",
    oneLiner:
      "基于 Canvas 2D Trail Fade + Additive Blending 的玻璃涡轮叶片效果——用每帧半透明覆盖实现自然拖影衰减，配合 lighter 混合模式产生光叠加的玻璃质感",
    whatYouSee:
      "你看到的是一个缓慢旋转的圆形涡轮，由几片半透明的弧形叶片组成，叶片后面拖着柔和的渐变尾迹。叶片重叠的区域会自然变亮，中心有一个微微发光的高光点。这种效果叫 **Trail Fade（拖影衰减）**——不是每帧清空画布重画，而是每帧叠一层半透明背景色，让旧画面慢慢淡出。配合 **Additive Blending（加法混合）**，重叠区域的颜色值相加，自然产生发光的 **Glassmorphism（玻璃拟态）** 质感。",
    pipeline: [
      {
        step: "01",
        title: "拖影衰减层 (Trail Fade Layer)",
        description:
          "每帧不清空画布，而是绘制一层 rgba(bgColor, trailFade) 的半透明矩形覆盖整个画布。trailFade 值越小（如 0.03），旧帧消失得越慢，拖影就越长。这是所有 trail 效果的核心技巧——用半透明覆盖替代全清空。",
        glsl: `// 每帧开头：不用 clearRect，而是叠半透明背景
ctx.fillStyle = \`rgba(\${bgR},\${bgG},\${bgB},\${trailFade})\`;
ctx.fillRect(0, 0, w, h);
// trailFade=0.03 → 旧帧需要约100帧才能完全消失`,
      },
      {
        step: "02",
        title: "圆弧叶片构造 (Arc Segment Path)",
        description:
          "每个叶片是一个圆弧扇形（Arc Segment）：外弧 + 内弧围成的环形区域。用 ctx.arc() 画外弧，再用 ctx.arc(counterclockwise) 画内弧，closePath 闭合。叶片均匀分布在 360° 上，每个占 bladeArc 度。",
        glsl: `const gapAngle = (2 * Math.PI) / bladeCount;
for (let i = 0; i < bladeCount; i++) {
  const start = rotation + i * gapAngle;
  const end = start + bladeArcRad;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, start, end);       // 外弧
  ctx.arc(cx, cy, innerR, end, start, true);  // 内弧（逆时针）
  ctx.closePath();
  ctx.fill();
}`,
      },
      {
        step: "03",
        title: "径向渐变玻璃质感 (Radial Gradient Glass)",
        description:
          "每个叶片的填充不是纯色，而是从中心到边缘的径向渐变：中心用 highlightColor（亮色），过渡到 bladeColor（主色），边缘渐变到透明。这模拟了光线穿过玻璃时中心更亮、边缘渐暗的效果。",
        glsl: `const grad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
grad.addColorStop(0, \`rgba(highlight, \${opacity * 0.8})\`);
grad.addColorStop(0.3, \`rgba(blade, \${opacity})\`);
grad.addColorStop(0.7, \`rgba(blade, \${opacity * 0.6})\`);
grad.addColorStop(1, \`rgba(blade, 0)\`);  // 边缘完全透明`,
      },
      {
        step: "04",
        title: "加法混合发光 (Additive Blending Glow)",
        description:
          "将 globalCompositeOperation 设为 'lighter'（即 Additive Blending）。在这种模式下，两个颜色重叠时 RGB 值相加——两个半透明紫色叠在一起就变成更亮的紫色，而非更暗。这就是为什么叶片交叉处会自然发光。再加一层 blur 滤镜的发光层，模拟光晕扩散。",
        glsl: `ctx.globalCompositeOperation = "lighter";
// 此时重叠区域: resultColor = color1 + color2
// 半透明紫 + 半透明紫 = 更亮的紫（自然发光）

// 额外发光层
ctx.filter = \`blur(\${glowIntensity}px)\`;
ctx.globalAlpha = 0.3;
// 再画一次同样的叶片 → 产生柔和的光晕扩散`,
      },
      {
        step: "05",
        title: "中心高光汇聚 (Center Highlight)",
        description:
          "在涡轮中心画一个小的径向渐变圆——从白色/高光色到透明。配合 lighter 混合模式，这个高光点模拟所有叶片光线汇聚到焦点的效果，让整个涡轮看起来有一个发光的「能量核心」。",
        glsl: `const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
centerGrad.addColorStop(0, "rgba(highlight, 0.6)");
centerGrad.addColorStop(0.5, "rgba(highlight, 0.15)");
centerGrad.addColorStop(1, "rgba(highlight, 0)");
ctx.fillStyle = centerGrad;
ctx.fill();  // lighter 模式下自然叠加到叶片上`,
      },
    ],
    concepts: [
      {
        name: "拖影衰减",
        nameEN: "Trail Fade",
        analogy:
          "就像在黑板上写字后不擦干净，而是用半透明的黑色颜料薄薄刷一层——字迹会慢慢变淡但不会立刻消失",
        explanation:
          "Trail Fade 是一种 Canvas 动画技巧：每帧不调用 clearRect 清空画布，而是绘制一层低透明度的背景色覆盖。旧帧的像素值被逐帧衰减，产生运动物体后面的渐变拖影。fade 值控制衰减速度：0.01 产生极长的拖影，0.3 则几乎看不到拖影。业界也称为 Motion Trail 或 Ghosting Effect。",
        whyItMatters:
          "知道 Trail Fade 后，你就能对 AI 说「给这个动画加 trail fade 效果，fade 值设为 0.03 让拖影很长」，而不是说「让它后面有那种渐变的影子」",
      },
      {
        name: "加法混合",
        nameEN: "Additive Blending",
        analogy:
          "就像两束手电筒的光照在同一面墙上——重叠区域不会变暗，反而会更亮",
        explanation:
          "Additive Blending（Canvas 中对应 globalCompositeOperation = 'lighter'）将重叠像素的 RGB 值直接相加。与默认的 alpha 混合不同，加法混合让重叠区域更亮而非更暗，非常适合模拟光、火焰、能量等发光效果。在游戏和视觉特效中，这是最常用的粒子混合模式之一。",
        whyItMatters:
          "知道 Additive Blending 后，你就能对 AI 说「用 lighter 混合模式让粒子重叠处产生加法发光效果」，而不是说「让重叠的地方变亮一点」",
      },
      {
        name: "圆弧扇形",
        nameEN: "Arc Segment",
        analogy:
          "就像把一个甜甜圈切成几段——每段是一个弧形区域，由内外两条弧线围成",
        explanation:
          "Arc Segment 是用 Canvas ctx.arc() 构造的扇形/环形路径。通过指定起止角度和内外半径，可以画出任意大小的弧形区域。多个 Arc Segment 等角度分布就构成了涡轮叶片、饼图扇区、Loading 环等常见图形。关键技巧是用两次 arc（一次顺时针画外弧，一次逆时针画内弧）闭合路径。",
        whyItMatters:
          "知道 Arc Segment 后，你就能对 AI 说「用 arc segment 画 3 个等分的环形叶片，每个占 100 度弧度」，而不是说「画几个弯弯的形状像风扇叶片一样」",
      },
      {
        name: "玻璃拟态",
        nameEN: "Glassmorphism",
        analogy:
          "就像透过磨砂玻璃看彩色灯光——半透明、边缘模糊、重叠处颜色混合",
        explanation:
          "Glassmorphism 是一种视觉设计风格，核心特征是：半透明背景、模糊效果（backdrop-filter: blur）、微妙的边框和高光。在 Canvas 中，用低 opacity 填充 + 径向渐变 + additive blending 可以模拟类似的玻璃质感——物体看起来是半透明的、发光的、有深度层次的。",
        whyItMatters:
          "知道 Glassmorphism 后，你就能对 AI 说「给这个组件做 glassmorphism 风格，半透明背景加模糊加发光边缘」，而不是说「让它看起来像玻璃一样透明发光」",
      },
    ],
    applications: [
      {
        field: "Loading 动画",
        examples:
          "玻璃质感的旋转 loading、发光涡轮加载指示器、trail fade 进度环",
      },
      {
        field: "背景装饰",
        examples:
          "Landing Page 的动态玻璃涡轮背景、SaaS 产品的 hero section 动效、暗色主题的发光装饰元素",
      },
      {
        field: "数据可视化",
        examples:
          "带拖影的旋转饼图过渡、环形图的发光动画、仪表盘的玻璃质感指针",
      },
      {
        field: "游戏特效",
        examples:
          "能量护盾的旋转发光效果、技能释放的涡旋动画、传送门的玻璃涡轮特效",
      },
    ],
    keyInsight:
      "**玻璃涡轮效果的本质是「不清空 + 加法叠加」的组合魔法**。传统动画每帧清空重画，画面干净但没有时间记忆；Trail Fade 保留历史帧的「残影」，让运动产生连续的渐变拖尾。Additive Blending 让重叠变亮而非变暗，违反日常直觉但完美模拟光的行为。两者结合：旋转的叶片留下渐变的光迹，光迹重叠处自然发光——不需要任何模糊滤镜或后处理，仅靠最基础的 Canvas 2D 操作就能产生复杂的玻璃光效。核心术语链：**Trail Fade**（拖影衰减）→ **Additive Blending**（加法混合）→ **Arc Segment**（圆弧路径）→ **Radial Gradient**（径向渐变）→ **Glassmorphism**（玻璃拟态）。记住：**最惊艳的视觉效果往往不是复杂算法的产物，而是简单操作的巧妙组合——一层半透明覆盖 + 一个混合模式切换，就能让平凡的旋转圆弧变成流光溢彩的玻璃涡轮**。",
  },
  cosmicvortex: {
    id: "cosmicvortex",
    title: "Cosmic Vortex",
    subtitle: "宇宙涡旋黑洞吸积盘效果",
    oneLiner:
      "基于开普勒轨道力学（Keplerian Orbit）的粒子螺旋系统——用对数螺旋分布 + 差异角速度 + 加法混合吸积盘产生宇宙黑洞的视觉效果",
    whatYouSee:
      "数千粒子沿多条螺旋旋臂环绕屏幕中央的黑暗空洞运动，内侧粒子转得更快，外侧更慢——这就是 **Keplerian Orbit（开普勒轨道）** 的差异旋转。在特定半径带上，粒子密集重叠形成一条明亮的光环——这就是 **Accretion Disk（吸积盘）**，通过 **Additive Blending（加法混合）** 让重叠粒子自然发亮。拖尾效果来自 **Trail Fade（拖影衰减）**——每帧用半透明背景色覆盖而非清空画布，历史帧逐渐衰减产生流线型光迹。中央黑暗区域是 **Event Horizon（事件视界）**——一个无粒子的暗色径向渐变覆盖区。",
    pipeline: [
      {
        step: "01",
        title: "粒子生成 — 对数螺旋分布 (Logarithmic Spiral Spawn)",
        description:
          "粒子用极坐标 (angle, radius) 存储。半径用高斯分布偏向吸积盘中心位置，角度基于旋臂编号 + 对数螺旋偏移 + 随机散布。这样粒子天然形成多条旋臂结构，密度集中在特定半径带上。",
        glsl: `const arm = Math.floor(Math.random() * armCount);
const armOffset = (arm * 2 * Math.PI) / armCount;
// Gaussian-biased radius → 粒子密度偏向 diskRadius
const gauss = Math.sqrt(-2*Math.log(u)) * Math.cos(2*Math.PI*v);
let r = diskCenter + gauss * diskSigma;
// Log spiral angle offset
const spiralAngle = tightness * Math.log(r / minR + 1);
angle = armOffset + spiralAngle + scatter;`,
      },
      {
        step: "02",
        title: "开普勒运动 — 差异角速度 (Keplerian Differential Rotation)",
        description:
          "每帧根据粒子到中心的距离计算角速度 ω ∝ r^(-1.5)——距离越近，转得越快。这是真实天体力学中开普勒第三定律的简化版本。同时粒子有微弱的径向向内漂移，模拟物质被吸积的过程。越过事件视界或超出边界的粒子会被重新生成。",
        glsl: `const normR = particle.radius / maxR;
const omega = rotationSpeed / (Math.pow(normR + 0.05, 1.5) + 0.01);
particle.angle += omega * dt;
particle.radius += radialDrift * dt;  // 缓慢向内漂移
if (radius < eventHorizon || radius > maxR) respawn();`,
      },
      {
        step: "03",
        title: "拖影衰减 (Trail Fade)",
        description:
          "不清空画布，而是每帧用半透明背景色覆盖：fillRect(rgba(bg, trailFade))。旧帧自然衰减，产生连续的流线型拖尾。trailFade 越小，拖尾越长；越大，画面越「干净」。这个技术和 Glass Turbine 完全一致——简单但效果惊人。",
        glsl: `// 每帧开头：不 clearRect，而是叠一层半透明背景
ctx.globalCompositeOperation = "source-over";
ctx.fillStyle = \`rgba(\${bgR},\${bgG},\${bgB},\${trailFade})\`;
ctx.fillRect(0, 0, w, h);`,
      },
      {
        step: "04",
        title: "加法混合粒子绘制 (Additive Blending Particle Draw)",
        description:
          "切换到 globalCompositeOperation = 'lighter'（加法混合），逐粒子绘制。近吸积盘的粒子更大更亮（高斯权重 diskFactor），并带有 shadowBlur 发光。白/银色粒子占 85%，随机混入暖色点缀（橙/琥珀）。小于 1px 的粒子用 fillRect 替代 arc 提升性能。",
        glsl: `ctx.globalCompositeOperation = "lighter";
const diskFactor = exp(-(distToDisk²) / (2 * sigma²));
const drawSize = baseSize * (1 + diskFactor * 1.5);
const drawOpacity = opacity * (0.3 + diskFactor * 0.7);
if (glowIntensity > 0 && diskFactor > 0.3) {
  ctx.shadowBlur = glowIntensity * diskFactor;
}
drawSize < 1 ? fillRect(...) : arc(...);`,
      },
      {
        step: "05",
        title: "中央空洞 — 事件视界 (Event Horizon Void)",
        description:
          "切回 source-over 模式，在中心绘制一个暗色径向渐变覆盖。中心完全不透明（和背景色一致），边缘渐变透明。这会「吞噬」落入事件视界附近的粒子光迹，强化黑洞的视觉效果。",
        glsl: `ctx.globalCompositeOperation = "source-over";
const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidR);
voidGrad.addColorStop(0, \`rgba(bg, 1)\`);     // 中心完全黑
voidGrad.addColorStop(0.5, \`rgba(bg, 0.95)\`);
voidGrad.addColorStop(0.8, \`rgba(bg, 0.4)\`); // 边缘渐隐
voidGrad.addColorStop(1, \`rgba(bg, 0)\`);`,
      },
    ],
    concepts: [
      {
        name: "开普勒轨道",
        nameEN: "Keplerian Orbit",
        analogy:
          "*就像太阳系中水星比海王星转得快得多——越靠近中心，公转越快*",
        explanation:
          "开普勒第三定律的简化：角速度 ω ∝ r^(-1.5)。在粒子系统中，这产生了「差异旋转」——内侧粒子甩开外侧粒子，自然形成旋臂拖曳和扭曲的视觉效果。不需要真实的引力模拟，一个简单的幂律公式就够了。",
        whyItMatters:
          "知道 Keplerian Orbit 后，你可以对 AI 说「让粒子像行星轨道一样差异旋转」而不是模糊地说「让里面的转快一点」",
      },
      {
        name: "吸积盘",
        nameEN: "Accretion Disk",
        analogy:
          "*想象浴缸放水时水流旋转汇聚的那个圆环——物质在特定轨道上密集堆积*",
        explanation:
          "天体物理中，吸积盘是物质围绕致密天体旋转形成的高密度盘状结构。在粒子效果中，通过高斯分布让粒子密度集中在特定半径带，配合 Additive Blending 让重叠区域自然变亮——不需要额外的发光滤镜，密度本身就是亮度。",
        whyItMatters:
          "知道 Accretion Disk 后，你可以对 AI 说「做一个吸积盘效果，粒子密度偏向某个半径带并用加法混合发光」",
      },
      {
        name: "拖影衰减",
        nameEN: "Trail Fade",
        analogy:
          "*就像在毛玻璃上画画——新笔迹清晰，旧笔迹慢慢被雾气覆盖消失*",
        explanation:
          "每帧用 rgba(bgColor, alpha) 覆盖整个画布。alpha 越小，旧帧衰减越慢，拖尾越长。这是 Canvas 2D 最经典的拖尾技术——零额外内存开销，不需要存储历史帧，仅靠持续叠加半透明层实现时间维度上的视觉记忆。",
        whyItMatters:
          "知道 Trail Fade 后，你可以对 AI 说「用 trail fade 做粒子拖尾，alpha 0.04 左右」而不是「怎么让粒子有尾巴」",
      },
      {
        name: "加法混合",
        nameEN: "Additive Blending",
        analogy:
          "*两束手电筒的光交叉时，交叉处更亮——光是叠加的而不是覆盖的*",
        explanation:
          "Canvas 2D 的 globalCompositeOperation = 'lighter'。新像素的 RGB 值与已有像素相加（上限 255）。多个半透明粒子重叠时，颜色值累加变亮。吸积盘区域粒子密集 → 重叠多 → 自然最亮。这完美模拟了发光体的物理行为。",
        whyItMatters:
          "知道 Additive Blending 后，你可以对 AI 说「用 lighter 混合模式让粒子重叠区域自然发光」",
      },
      {
        name: "事件视界",
        nameEN: "Event Horizon",
        analogy:
          "*瀑布的边缘——水流过这条线就再也回不来了*",
        explanation:
          "黑洞的「不归点」。在视觉效果中，用一个从不透明到透明的径向渐变覆盖中心区域，让粒子的光迹在接近中心时被「吞噬」。配合事件视界内无粒子生成的规则，产生中央黑暗空洞的效果。",
        whyItMatters:
          "知道 Event Horizon 后，你可以对 AI 说「中心做一个事件视界效果——径向渐变暗色覆盖，内部无粒子」",
      },
    ],
    applications: [
      {
        field: "科学可视化",
        examples:
          "黑洞吸积盘模拟、星系旋臂结构展示、天体物理教学动画",
      },
      {
        field: "游戏特效",
        examples:
          "传送门旋涡、暗黑系技能释放、宇宙主题 UI 背景、Boss 出场黑洞效果",
      },
      {
        field: "数据可视化",
        examples:
          "向心力场数据展示、网络流量聚合可视化、粒子密度分布图",
      },
      {
        field: "影视后期",
        examples:
          "科幻片黑洞场景预览、宇宙题材片头动画、MV 视觉效果",
      },
    ],
    keyInsight:
      "**宇宙涡旋效果的本质是「简单物理规则 + 统计密度 + 加法混合」的涌现**。没有复杂的 N-body 引力模拟，只有一个 r^(-1.5) 的角速度公式（开普勒轨道）；没有刻意绘制发光带，只有高斯分布让粒子在特定半径上密集聚集（吸积盘）；没有后处理泛光滤镜，只有 globalCompositeOperation = 'lighter' 让重叠变亮（加法混合）；没有帧缓冲区存储，只有每帧一层半透明覆盖（Trail Fade）。四个简单技术的组合，涌现出了宇宙黑洞的壮丽视觉。核心术语链：**Keplerian Orbit**（开普勒轨道）→ **Accretion Disk**（吸积盘）→ **Trail Fade**（拖影衰减）→ **Additive Blending**（加法混合）→ **Event Horizon**（事件视界）。记住：**最令人敬畏的宇宙现象，往往可以用最基础的数学规则复现——一个幂律公式、一个高斯分布、一个混合模式，就能在浏览器里创造一个黑洞**。",
  },
  trailfade: {
    id: "trailfade",
    title: "Trail Fade",
    subtitle: "贝塞尔画笔拖影引擎",
    oneLiner:
      "基于 Canvas 2D destination-out 混合模式的旋转画笔拖影动画——用透明度衰减制造光芒消散效果",
    whatYouSee:
      "你看到几条发光的弧线从中心旋转扩散，像风车一样匀速转动，每条弧线身后拖着一条逐渐消散的光尾。这种效果叫 **Trail Fade（拖影衰减）**，核心技巧是每帧不清空画布，而是用 **destination-out** 混合模式让已有像素慢慢变透明，画布本身是透明的，底下的 CSS 渐变背景自然透出，形成「光芒在色彩背景上消散」的优雅视觉。",
    pipeline: [
      {
        step: "01",
        title: "透明画布 + CSS 背景分离 (Transparent Canvas)",
        description:
          "Canvas 以 alpha: true 模式创建，自身完全透明。背景色由 CSS linear-gradient 提供。这样画布上的拖影衰减不会累积成脏色——像素变透明后就露出干净的渐变背景。这是比传统「半透明黑色矩形覆盖」更优雅的拖影方案。",
        glsl: `const ctx = canvas.getContext('2d', { alpha: true });
// Canvas 透明 → 拖影衰减 → 露出 CSS 背景
// 传统方案用 rgba(0,0,0,0.06) 覆盖会导致残影累积
// destination-out 方案直接降低像素透明度，干净利落`,
      },
      {
        step: "02",
        title: "拖影衰减 (Trail Fade via destination-out)",
        description:
          "每帧开头，将混合模式设为 destination-out，然后用一个带透明度的矩形覆盖整个画布。destination-out 的含义是「新绘制的区域会从已有像素中扣除透明度」，相当于让整个画面每帧变淡一点点。trailFade 值越小，每帧扣除的透明度越少，拖影就越长。",
        glsl: `ctx.globalCompositeOperation = 'destination-out';
ctx.fillStyle = \`rgba(0, 0, 0, \${trailFade / 100})\`;
ctx.fillRect(0, 0, w, h);
// trailFade=6 → 每帧扣除 6% 透明度 → 约 16 帧后完全消失
// trailFade=2 → 每帧扣除 2% → 约 50 帧后消失 → 拖影更长`,
      },
      {
        step: "03",
        title: "旋转坐标系 + 分支复制 (Rotation + Branch Cloning)",
        description:
          "将坐标原点移到画布中心，然后按全局角度旋转。对每个分支，再旋转 (i * 2π / N) 的角度。这样只需定义一条弧线的形状，通过旋转复制就能生成 N 条均匀分布的分支——这是「对称图案」的标准做法。",
        glsl: `ctx.translate(cx, cy);
ctx.rotate(angle * Math.PI / 180);
for (let i = 0; i < branches; i++) {
  ctx.save();
  ctx.rotate(i * 2 * Math.PI / branches);
  // 只画一条弧线，旋转复制 N 次
  ctx.restore();
}
angle += speed; // 每帧递增角度`,
      },
      {
        step: "04",
        title: "二次贝塞尔曲线画笔 (Quadratic Bezier Brush)",
        description:
          "每条分支的形状是一条从中心出发的二次贝塞尔曲线。控制点的 Y 值（curve 参数）决定弧线的弯曲方向和幅度——正值向上弯，负值向下弯，零值是直线。配合 lineCap: 'round' 实现圆润笔触。",
        glsl: `ctx.beginPath();
ctx.moveTo(0, 0);
// quadraticCurveTo(控制点X, 控制点Y, 终点X, 终点Y)
ctx.quadraticCurveTo(curve, radius / 2, radius, 0);
ctx.lineWidth = brushSize;
ctx.lineCap = 'round';
// curve > 0 → 弧线向上弯 (像扇叶)
// curve < 0 → 弧线向下弯 (像爪子)
// curve = 0 → 直线 (像光束)`,
      },
      {
        step: "05",
        title: "线性渐变 + shadowBlur 辉光 (Gradient + Glow)",
        description:
          "笔刷的颜色从中心色渐变到边缘色，用 createLinearGradient 沿弧线方向铺设。再加上 shadowColor + shadowBlur 制造辉光效果。Canvas 的 shadow 系列属性是最简单的辉光方案——不需要后处理滤镜，直接在绘制时生效。",
        glsl: `const grad = ctx.createLinearGradient(0, 0, radius, 0);
grad.addColorStop(0, colorCenter); // 中心：白色
grad.addColorStop(1, colorEdge);   // 边缘：紫色
ctx.strokeStyle = grad;
ctx.shadowColor = colorEdge;
ctx.shadowBlur = glowBlur;
ctx.stroke();
// shadow 会在笔触周围生成高斯模糊的辉光层`,
      },
    ],
    concepts: [
      {
        name: "destination-out 混合模式",
        nameEN: "Destination-Out Compositing",
        analogy:
          "想象一张画在玻璃上的画，你用橡皮每秒轻轻擦一遍——不是一次擦干净，而是每次只擦掉一点点。旧的笔迹慢慢消失，新的笔迹最清晰。",
        explanation:
          "Canvas 的 globalCompositeOperation: 'destination-out' 让新绘制的形状不会添加颜色，而是从已有像素中「扣除」透明度。配合每帧绘制一个低透明度的全屏矩形，就能让整个画面逐渐变透明。这是制造拖影效果的最干净方案，因为不会像 rgba 覆盖法那样产生残影累积。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 destination-out compositing 做 trail fade 效果」，而不是含糊地说「让画面慢慢消失」。",
      },
      {
        name: "二次贝塞尔曲线",
        nameEN: "Quadratic Bezier Curve",
        analogy:
          "在两个钉子之间绷一根橡皮筋，然后用一根手指从侧面把它拉出一个弧度——手指的位置就是「控制点」，决定了弧线的形状。",
        explanation:
          "quadraticCurveTo(cpx, cpy, x, y) 用一个控制点和一个终点定义一条平滑曲线。曲线从当前点出发，被控制点「吸引」后到达终点。控制点不在曲线上，但决定了曲线的弯曲方向和幅度。这是 Canvas 中最基础的曲线绘制 API。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 quadratic Bezier 画弧形笔触」，精确描述你想要的曲线效果。",
      },
      {
        name: "Canvas Shadow 辉光",
        nameEN: "Canvas Shadow Glow",
        analogy:
          "就像霓虹灯管——灯管本身是一条线，但周围会散发出柔和的光晕。shadowBlur 就是控制这个光晕大小的旋钮。",
        explanation:
          "Canvas 的 shadowColor + shadowBlur 属性会在任何绘制操作周围生成一层高斯模糊的「影子」。虽然叫 shadow（阴影），但用明亮的颜色就变成了辉光（Glow）。这是不需要后处理的最简单辉光方案，代价是 shadowBlur 值大时性能开销较高。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 Canvas shadowBlur 做 neon glow 效果」，而不是去研究复杂的后处理管线。",
      },
      {
        name: "旋转对称复制",
        nameEN: "Rotational Symmetry Cloning",
        analogy:
          "万花筒的原理——只需要一小块碎片图案，通过镜面反射和旋转复制，就能产生完美对称的整体图案。",
        explanation:
          "定义一个基础形状，然后在 for 循环中旋转 (i * 2π / N) 弧度绘制 N 次，就能生成 N 重旋转对称图案。Canvas 的 save/rotate/restore 机制让这种变换非常高效——每次旋转不影响其他分支的坐标系。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 rotational symmetry 生成 N 分支对称图案」，一句话描述出万花筒、风车、雪花等效果的核心思路。",
      },
    ],
    applications: [
      {
        field: "加载动画",
        examples:
          "旋转拖影 Loading Spinner、品牌化等待动画、应用启动过渡效果",
      },
      {
        field: "音乐可视化",
        examples:
          "节拍驱动的旋转光芒、频谱映射到分支数/速度/半径、DJ 软件视觉效果",
      },
      {
        field: "游戏特效",
        examples:
          "技能释放旋转光环、传送门能量效果、角色 Buff 光圈、魔法阵旋转",
      },
      {
        field: "UI 装饰",
        examples:
          "仪表盘背景动效、暗色主题装饰元素、Hero Section 动态背景",
      },
    ],
    keyInsight:
      "**拖影效果的本质是「不清空 + 逐帧衰减」的时间积分可视化**。传统动画每帧清空画布重绘，拖影则反其道而行——保留历史帧的痕迹，只让它们慢慢消失。destination-out 是最优雅的衰减手段：不往画布上加颜色，而是从已有像素上减去透明度。配合透明画布 + CSS 背景分离，拖影消散后露出的是干净的渐变背景，而非累积的脏色。核心术语链：**Trail Fade**（拖影衰减）→ **destination-out**（透明度扣除）→ **Quadratic Bezier**（贝塞尔曲线）→ **Rotational Symmetry**（旋转对称）→ **shadowBlur Glow**（阴影辉光）。记住：**最惊艳的拖影效果，不是画出来的，而是「没有擦干净」的——控制遗忘的速度，就是控制美的余韵**。",
  },
};
