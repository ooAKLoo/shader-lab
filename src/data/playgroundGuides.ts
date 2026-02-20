import type { PlaygroundType } from "./playgroundTypes";

export interface PlaygroundGuide {
  id: PlaygroundType;
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

export const playgroundGuides: Record<PlaygroundType, PlaygroundGuide> = {
  flip: {
    id: "flip",
    title: "FLIP",
    subtitle: "布局过渡动画",
    oneLiner:
      "基于 FLIP（First-Last-Invert-Play）技术的布局状态切换动画——让 CSS 布局变化拥有 60fps 的流畅过渡",
    whatYouSee:
      "四个彩色字母 F、L、I、P 在不同布局间平滑切换：先是水平排列拼成 \"FLIP for GSAP\"（Final 布局），然后变为无背景的纯文字（Plain），接着四列等宽排列（Columns），最后变成 2×2 网格（Grid）。每次布局切换时，字母从旧位置滑动到新位置，\"for\" 和 \"GSAP\" 文字在 Final 状态淡入、离开时淡出。切到 Final 时字母还会旋转一圈。这种效果在前端叫 **Layout Animation（布局动画）**。",
    pipeline: [
      {
        step: "01",
        title: "捕获初始状态 (First)",
        description:
          "在任何布局变化发生之前，用 Flip.getState() 快照所有元素的当前位置、尺寸、颜色。这一步对应 FLIP 中的 F（First）——记录「动画起点在哪」。",
        glsl: `// 捕获所有参与动画的元素状态
const state = Flip.getState(
  ".letter, .for, .gsap",
  { props: "color,backgroundColor", simple: true }
);`,
      },
      {
        step: "02",
        title: "切换到目标布局 (Last)",
        description:
          "直接修改 DOM——移除旧布局 class、添加新布局 class。CSS 立即生效，元素瞬间跳到最终位置。这一步对应 L（Last）——浏览器已经算好了「终点在哪」。",
        glsl: `// 同步切换 CSS class（无动画，瞬间生效）
container.classList.remove(layouts[curLayout]);
curLayout = (curLayout + 1) % layouts.length;
container.classList.add(layouts[curLayout]);`,
      },
      {
        step: "03",
        title: "反转 + 播放 (Invert & Play)",
        description:
          "Flip.from() 自动计算新旧位置的差值，用 CSS transform 把元素「拉回」旧位置，然后动画移除 transform——视觉上元素从旧位置平滑滑到新位置。这就是 I（Invert）和 P（Play）。",
        glsl: `Flip.from(state, {
  absolute: true,      // 动画期间用 position:absolute 避免布局抖动
  stagger: 0.07,       // 每个元素延迟 70ms 依次启动
  duration: 0.7,       // 动画时长 700ms
  ease: "power2.inOut", // 缓入缓出
  spin: curLayout === 0, // Final 布局时额外旋转 360°
  simple: true,        // 只追踪 transform（性能优化）
});`,
      },
      {
        step: "04",
        title: "元素进出场动画 (Enter/Leave)",
        description:
          "\"for\" 和 \"GSAP\" 只在 Final 布局显示。Flip 插件通过 onEnter/onLeave 回调检测哪些元素新出现或消失，自动为它们添加淡入/淡出动画。",
        glsl: `// 新出现的元素：延迟到主动画快结束时淡入
onEnter: (elements, animation) =>
  gsap.fromTo(elements,
    { opacity: 0 },
    { opacity: 1, delay: animation.duration() - 0.1 }
  ),
// 消失的元素：直接淡出
onLeave: (elements) =>
  gsap.to(elements, { opacity: 0 })`,
      },
      {
        step: "05",
        title: "循环调度 (Auto-play Timer)",
        description:
          "用 gsap.delayedCall 实现自动轮播。Final 布局停留 3.5 秒（展示完整标题），其他布局停留 1.5 秒。每次动画结束后递归调用下一轮。",
        glsl: `// Final 布局多停一会，其他布局快速切换
gsap.delayedCall(
  curLayout === 0 ? 3.5 : 1.5,
  nextState
);`,
      },
    ],
    concepts: [
      {
        name: "FLIP 技术",
        nameEN: "First-Last-Invert-Play",
        analogy:
          "想象拍一张「旧位置」的照片和一张「新位置」的照片，然后让 PS 自动生成中间的补间帧——FLIP 就是这个过程的实时版本",
        explanation:
          "FLIP 是 Paul Lewis 提出的高性能布局动画模式：先记录初始状态（First），让浏览器计算最终状态（Last），用 transform 反转差值（Invert），再动画播放（Play）。因为只动画 transform 和 opacity，完全跳过 layout/paint 阶段，性能极佳。",
        whyItMatters:
          "知道 FLIP 这个词后，你就能对 AI 说「我需要一个 FLIP layout animation，在网格和列表视图间切换」——而不是模糊地说「让元素滑过去」。",
      },
      {
        name: "布局动画",
        nameEN: "Layout Animation",
        analogy:
          "普通 CSS transition 只能动画 width/height/top/left（触发重排，性能差）。Layout Animation 的巧妙之处是：布局变化瞬间完成，动画全靠 transform 补间",
        explanation:
          "Layout Animation 指的是在不同 CSS 布局状态（grid、flexbox、absolute 等）之间平滑过渡。直接 transition 布局属性会触发昂贵的 reflow。FLIP 通过「先跳到终点，再用 transform 动画回来」绕开了这个性能瓶颈。",
        whyItMatters:
          "知道这个术语后，你就能对 AI 说「实现一个 layout animation，从 flex 水平排列切换到 CSS Grid 2×2」——AI 就知道用 FLIP 或 View Transitions API。",
      },
      {
        name: "交错动画",
        nameEN: "Stagger Animation",
        analogy:
          "多米诺骨牌效应——不是所有元素同时动，而是依次延迟启动，产生波浪般的视觉节奏",
        explanation:
          "stagger: 0.07 表示每个元素比前一个延迟 70ms 启动动画。GSAP 的 stagger 支持数值、对象（from/each/grid）、甚至函数，可以控制波浪方向和形状。",
        whyItMatters:
          "知道 stagger 这个词后，你就能对 AI 说「给列表项加 stagger 入场动画，from center 向两边扩散，each 50ms」——比说「一个一个出现」精确得多。",
      },
      {
        name: "绝对定位动画",
        nameEN: "Absolute Positioning in Animation",
        analogy:
          "把元素暂时「抬」出文档流，在空中自由移动，到达目的地后再「放回」文档流",
        explanation:
          "Flip.from 的 absolute: true 在动画期间将元素设为 position: absolute，防止它们在移动过程中推挤其他元素导致布局跳动。动画结束后自动恢复原始定位方式。",
        whyItMatters:
          "知道这个技巧后，你就能对 AI 说「动画期间需要 absolute positioning 防止 layout thrashing」——这是流畅布局动画的关键细节。",
      },
    ],
    applications: [
      {
        field: "视图切换",
        examples:
          "列表视图 ↔ 网格视图、卡片展开/收起、相册缩略图 → 大图浏览",
      },
      {
        field: "筛选/排序动画",
        examples:
          "Isotope/Masonry 风格的筛选动画、表格排序时行的平滑移动、标签拖拽重排",
      },
      {
        field: "共享元素过渡",
        examples:
          "页面间的 Shared Element Transition、导航栏 active indicator 滑动、Tab 切换内容过渡",
      },
      {
        field: "状态反馈",
        examples:
          "购物车添加商品飞入动画、待办事项完成后滑入「已完成」区、拖拽排序松手后归位",
      },
    ],
    keyInsight:
      "**布局动画的本质是「欺骗视觉」**：浏览器瞬间完成布局计算（毫秒级），然后用 transform 动画「回放」这个变化过程（数百毫秒）。FLIP 的核心洞察是：与其让浏览器在动画每一帧都重新计算布局（昂贵），不如只计算一次终态，然后用 GPU 加速的 transform 补间（廉价）。记住这个模式：**先到达终点，再演出过程**。",
  },

  echotrace: {
    id: "echotrace",
    title: "EchoTrace",
    subtitle: "迷幻运动拖尾",
    oneLiner:
      "基于 Canvas 2D 逐帧合成的 Motion Trail（运动拖尾）效果——用半透明覆盖实现时间的「残影」",
    whatYouSee:
      "移动鼠标时，光标位置不断产生彩色光斑，形成一条流光溢彩的轨迹。旧的光斑不会立刻消失，而是像余晖一样逐渐褪去——这就是 **Motion Trail（运动拖尾）** 效果。颜色沿 HSL 色轮连续变化，产生迷幻的彩虹渐变。整个效果基于 Canvas 2D 的逐帧半透明覆盖，不需要追踪历史坐标数组。",
    pipeline: [
      {
        step: "01",
        title: "帧循环 (Animation Loop)",
        description:
          "用 requestAnimationFrame 驱动 60fps 的渲染循环。每一帧执行两个操作：先画一层半透明背景（制造褪色效果），再在鼠标位置画一个新光斑。",
        glsl: `function animate() {
  // 半透明覆盖 → 旧内容逐渐褪色
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, w, h);
  // 画新光斑
  drawSpot(mouseX, mouseY);
  requestAnimationFrame(animate);
}`,
      },
      {
        step: "02",
        title: "褪色机制 (Fade Overlay)",
        description:
          "每帧用 rgba(0,0,0,0.05) 覆盖整个画布。alpha=0.05 意味着每帧只覆盖 5% 的不透明度——旧内容经过约 20 帧（~333ms）才完全消失。这个 alpha 值直接控制拖尾长度。",
        glsl: `// alpha 越小 → 拖尾越长（褪色越慢）
// alpha 越大 → 拖尾越短（褪色越快）
ctx.fillStyle = \`rgba(0, 0, 0, \${fadeAlpha})\`;
ctx.fillRect(0, 0, canvas.width, canvas.height);`,
      },
      {
        step: "03",
        title: "光斑绘制 (Spot Drawing)",
        description:
          "在鼠标位置用径向渐变绘制发光圆形。中心不透明、边缘透明，产生柔和的光晕效果。用 Canvas 的 globalCompositeOperation 控制混合模式。",
        glsl: `const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
gradient.addColorStop(0, \`hsla(\${hue}, 100%, 60%, 1)\`);
gradient.addColorStop(1, \`hsla(\${hue}, 100%, 60%, 0)\`);
ctx.fillStyle = gradient;
ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);`,
      },
      {
        step: "04",
        title: "色轮漫游 (Hue Rotation)",
        description:
          "每帧递增 hue 值（0→360 循环），光斑颜色沿 HSL 色轮连续变化。不需要复杂的颜色插值——HSL 的 H 通道天然就是环形的。",
        glsl: `// HSL 的 H 通道是 0-360 的环形
hue = (hue + hueSpeed) % 360;
// 直接用在 CSS 颜色字符串中
\`hsla(\${hue}, 100%, 60%, 1)\``,
      },
      {
        step: "05",
        title: "轨迹系统 (Trail Points)",
        description:
          "维护一个固定长度的坐标数组，每帧推入当前鼠标位置并移除最旧的点。从旧到新依次绘制，半径和透明度递减，形成从粗到细、从亮到暗的渐变拖尾。",
        glsl: `// 固定长度队列：新进旧出
trail.push({ x: mouseX, y: mouseY });
if (trail.length > maxLength) trail.shift();
// 从旧到新绘制，越新越大越亮
trail.forEach((point, i) => {
  const ratio = i / trail.length;
  drawSpot(point.x, point.y, ratio * maxRadius);
});`,
      },
    ],
    concepts: [
      {
        name: "运动拖尾",
        nameEN: "Motion Trail",
        analogy:
          "长曝光照片中的车灯轨迹——物体移动过，但光在时间中留下了残影",
        explanation:
          "Motion Trail 通过保留历史帧的部分信息（而非完全清除）来可视化运动路径。在 Canvas 中，最经典的实现是每帧覆盖半透明背景而非 clearRect，让旧内容自然衰减。",
        whyItMatters:
          "知道 Motion Trail 这个词后，你就能对 AI 说「我需要鼠标跟随的 motion trail 效果，fade duration 500ms」——而不是说「鼠标后面拖着一条彩色的尾巴」。",
      },
      {
        name: "HSL 色彩空间",
        nameEN: "HSL Color Space",
        analogy:
          "想象一个色彩转盘——H 是转盘角度（色相），S 是颜色纯度，L 是明暗。要做彩虹渐变，只需转动 H",
        explanation:
          "HSL（Hue-Saturation-Lightness）将颜色分解为人类直觉的三个维度。H 通道 0-360° 对应红→橙→黄→绿→青→蓝→紫→红的色环。连续递增 H 值就能自动产生平滑的彩虹过渡，这在 RGB 空间中需要复杂的插值。",
        whyItMatters:
          "知道 HSL 后，你就能对 AI 说「用 HSL 色轮做 hue rotation 动画，每秒转 60 度」——比描述「颜色从红变到蓝再变回红」简洁得多。",
      },
      {
        name: "帧合成",
        nameEN: "Frame Compositing",
        analogy:
          "不是每帧擦掉重画，而是在旧画面上叠一层半透明「薄膜」——旧内容透过薄膜还能看到，但逐渐变淡",
        explanation:
          "Canvas 默认每帧 clearRect 清空画布。Motion Trail 的核心技巧是用 fillRect + 低 alpha 覆盖替代清空，让之前帧的内容以指数衰减的方式保留。alpha 值控制衰减速度：0.02（慢褪色/长尾）到 0.2（快褪色/短尾）。",
        whyItMatters:
          "知道 frame compositing 后，你就能对 AI 说「用半透明覆盖做 frame compositing，alpha 0.05，实现 motion trail」——这是一个通用模式。",
      },
      {
        name: "requestAnimationFrame",
        nameEN: "requestAnimationFrame (rAF)",
        analogy:
          "告诉浏览器「下次你要刷新屏幕之前叫我一声」——保证动画和屏幕刷新率同步",
        explanation:
          "rAF 是浏览器提供的帧同步 API，在每次屏幕重绘前触发回调。比 setInterval 更高效：标签页不可见时自动暂停、自动匹配显示器刷新率（60/120/144Hz）、与浏览器渲染管线同步避免撕裂。",
        whyItMatters:
          "知道 rAF 后，你就能对 AI 说「用 rAF 驱动 canvas 动画循环，不要用 setInterval」——这是所有 Canvas/WebGL 动画的标准起点。",
      },
    ],
    applications: [
      {
        field: "光标效果",
        examples:
          "自定义光标拖尾、画板笔刷预览、游戏中技能释放的粒子轨迹",
      },
      {
        field: "数据可视化",
        examples:
          "实时股价走势的荧光屏效果、传感器数据流的余辉显示、心电图/示波器模拟",
      },
      {
        field: "音乐可视化",
        examples:
          "音频频谱的残影效果、节拍驱动的粒子拖尾、VJ 表演的实时视觉",
      },
      {
        field: "互动装置",
        examples:
          "体感互动展览的人体轮廓拖尾、AR 滤镜的运动追踪特效、创意编程艺术",
      },
    ],
    keyInsight:
      "**Motion Trail 的本质是用空间展示时间**。正常情况下，画布每帧清空重画，你只看到「此刻」。半透明覆盖让过去的帧「泄漏」到当前，把时间维度压缩到了二维画面上。这和长曝光摄影、运动模糊、示波器余辉是同一个原理——**不完全遗忘，就是记忆**。",
  },

  spotlight: {
    id: "spotlight",
    title: "Spotlight",
    subtitle: "光标聚光灯",
    oneLiner:
      "基于 CSS mix-blend-mode: screen 和径向渐变的光标追踪聚光灯——用混合模式「点亮」暗色背景",
    whatYouSee:
      "深色背景上，鼠标附近有一圈柔和的光晕跟随移动，就像手电筒照在墙上。光照区域的内容被「点亮」——颜色变亮、细节显现。移开后又恢复暗色。这个效果叫 **Spotlight Effect（聚光灯效果）**，核心是 CSS 的 **mix-blend-mode: screen**（滤色混合模式）。",
    pipeline: [
      {
        step: "01",
        title: "创建光源层 (Light Layer)",
        description:
          "在内容层上方叠一个全屏的「光源层」。用 CSS radial-gradient 创建一个从亮到暗的径向渐变圆——这就是「手电筒」的光斑。",
        glsl: `.spotlight-layer {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 300px at var(--x) var(--y),
    rgba(255,255,255,0.8) 0%,
    rgba(0,0,0,1) 100%
  );
}`,
      },
      {
        step: "02",
        title: "应用滤色混合 (Screen Blend)",
        description:
          "给光源层设置 mix-blend-mode: screen。Screen 模式的数学公式是 1-(1-A)×(1-B)：白色区域让底层完全显示（1），黑色区域让底层完全变黑（0）。效果就是「光斑区域亮，其余区域暗」。",
        glsl: `.spotlight-layer {
  mix-blend-mode: screen;
  /* screen: 白色→透明, 黑色→遮挡 */
  /* 类似 Photoshop 的「滤色」图层模式 */
}`,
      },
      {
        step: "03",
        title: "光标追踪 (Pointer Tracking)",
        description:
          "监听 mousemove 事件，用 GSAP 的 quickTo 将鼠标坐标平滑映射到 CSS 自定义属性 --x、--y。quickTo 自带弹性插值，让光斑跟随有惯性而非生硬。",
        glsl: `// GSAP quickTo：高性能的值追踪器
const xTo = gsap.quickTo(".spotlight", "--x", {
  duration: 0.3, ease: "power3"
});
document.addEventListener("mousemove", (e) => {
  xTo(e.clientX + "px");
  yTo(e.clientY + "px");
});`,
      },
      {
        step: "04",
        title: "渐变参数化 (Gradient Sizing)",
        description:
          "radial-gradient 的尺寸和衰减曲线决定光斑的「硬度」。小半径 + 急衰减 = 手电筒聚焦，大半径 + 缓衰减 = 环境光效果。通过控制面板实时调整。",
        glsl: `/* 硬聚光灯 */
radial-gradient(circle 150px at ..., white 0%, black 60%)
/* 柔和环境光 */
radial-gradient(circle 500px at ..., white 0%, black 100%)`,
      },
      {
        step: "05",
        title: "内容交互 (Content Reveal)",
        description:
          "底层内容可以是文字、图片或任何 DOM 元素。Spotlight 层不修改底层内容，纯粹通过混合模式叠加——这意味着可以用在任何现有页面上，零侵入。",
        glsl: `<!-- 底层：正常内容 -->
<div class="content">
  <h1>隐藏的标题</h1>
  <p>只有光照到才能看清</p>
</div>
<!-- 上层：spotlight 遮罩 -->
<div class="spotlight-layer"></div>`,
      },
    ],
    concepts: [
      {
        name: "滤色混合模式",
        nameEN: "mix-blend-mode: screen",
        analogy:
          "两台投影仪照在同一面墙上——光叠加只会更亮，不会更暗。白色全亮，黑色不改变",
        explanation:
          "Screen 模式公式：Result = 1 - (1-A) × (1-B)。白色(1)让结果为 1（全亮），黑色(0)让结果等于另一层。这是 CSS 的 16 种混合模式之一，直接在 GPU 上计算，性能极佳。",
        whyItMatters:
          "知道 mix-blend-mode: screen 后，你就能对 AI 说「用 screen blend mode 做聚光灯效果」——而不是说「那种鼠标移过去就变亮的效果」。",
      },
      {
        name: "GSAP quickTo",
        nameEN: "GSAP quickTo",
        analogy:
          "像一只追着激光笔的猫——不是瞬移到目标位置，而是带着惯性、有弹性地追过去",
        explanation:
          "quickTo 创建一个可复用的值插值器。每次调用只传入目标值，GSAP 自动从当前值平滑过渡。比每次创建新 tween 高效 10 倍以上，专为高频事件（mousemove、scroll）设计。",
        whyItMatters:
          "知道 quickTo 后，你就能对 AI 说「用 gsap.quickTo 做鼠标跟随，duration 0.3」——这是 GSAP 中处理 pointer tracking 的最佳实践。",
      },
      {
        name: "CSS 自定义属性动画",
        nameEN: "CSS Custom Property Animation",
        analogy:
          "把 CSS 变量当成遥控器的旋钮——JS 转动旋钮，CSS 实时响应",
        explanation:
          "通过 JS 修改 --x、--y 等 CSS 自定义属性，radial-gradient 引用这些属性实时更新。这种 JS 控制 + CSS 渲染的模式避免了直接操作 DOM 样式的开销。",
        whyItMatters:
          "知道这个模式后，你就能对 AI 说「用 CSS custom properties 传递坐标给 radial-gradient」——这是连接 JS 逻辑和 CSS 视觉的标准桥梁。",
      },
      {
        name: "径向渐变",
        nameEN: "radial-gradient",
        analogy:
          "在画布上放一盏灯——中心最亮，向外逐渐变暗，衰减曲线决定了光的「软硬」",
        explanation:
          "CSS radial-gradient 创建从中心向外辐射的颜色过渡。通过控制 circle 的尺寸、color stop 的位置和渐变的缓急，可以精确模拟各种光照效果。支持 at <position> 语法动态定位中心点。",
        whyItMatters:
          "知道 radial-gradient 的参数化控制后，你就能对 AI 说「radial-gradient circle 300px，从白到黑，60% 处 color stop」——精确描述你想要的光斑形态。",
      },
    ],
    applications: [
      {
        field: "内容揭示",
        examples:
          "隐藏信息揭示、暗色主题的焦点引导、游戏中的迷雾/战争迷雾效果",
      },
      {
        field: "产品展示",
        examples:
          "产品细节放大镜、暗色背景下的特性高亮、探照灯式的互动 showcase",
      },
      {
        field: "教学/引导",
        examples:
          "用户引导的聚光灯步骤、代码审查的焦点高亮、幻灯片的注意力引导",
      },
      {
        field: "艺术/创意",
        examples:
          "互动艺术装置、创意 portfolio 的探索式浏览、密室逃脱类网页游戏",
      },
    ],
    keyInsight:
      "**Spotlight 的本质是「不改变内容，只改变感知」**。底层 DOM 原封不动，仅通过一个混合模式图层就改变了用户看到的一切。这是 CSS 混合模式的威力——它在 GPU 上实时计算像素级的颜色数学，零 DOM 操作、零重排、零重绘。记住：**最好的视觉效果是叠加出来的，不是改出来的**。",
  },

  textmask: {
    id: "textmask",
    title: "Text Mask",
    subtitle: "SVG 文字遮罩",
    oneLiner:
      "基于 SVG <mask> 和 GSAP 气泡扩张动画的文字揭示效果——用遮罩形状控制文字的可见区域",
    whatYouSee:
      "点击画面时，一个圆形从点击位置向外扩张，圆形覆盖区域内显示大号文字，圆形外依然是背景色。多次点击会产生多个「气泡」，气泡重叠区域文字更加清晰。这个效果叫 **SVG Mask Reveal（遮罩揭示）**，核心是 SVG 的 **<mask>** 元素配合 GSAP 动画。",
    pipeline: [
      {
        step: "01",
        title: "创建文字层 (Text Layer)",
        description:
          "用 SVG <text> 元素创建大号文字，但初始时被 <mask> 完全遮挡——白色区域可见，黑色区域隐藏。初始 mask 为全黑 = 文字完全不可见。",
        glsl: `<svg>
  <mask id="revealMask">
    <!-- 初始全黑 = 文字完全隐藏 -->
    <rect width="100%" height="100%" fill="black"/>
    <!-- 白色圆形 = 文字可见区域 -->
    <circle class="bubble" cx="..." cy="..." r="0" fill="white"/>
  </mask>
  <text mask="url(#revealMask)">CREATIVE</text>
</svg>`,
      },
      {
        step: "02",
        title: "监听点击事件 (Click Handler)",
        description:
          "每次点击在 SVG mask 中动态创建一个新的 <circle> 元素，圆心在点击位置、半径为 0。这个白色圆就是即将扩张的「气泡」。",
        glsl: `document.addEventListener("click", (e) => {
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", e.clientX);
  circle.setAttribute("cy", e.clientY);
  circle.setAttribute("r", "0");
  circle.setAttribute("fill", "white");
  mask.appendChild(circle);
});`,
      },
      {
        step: "03",
        title: "气泡扩张动画 (Bubble Expand)",
        description:
          "用 GSAP 将圆的半径从 0 动画到足以覆盖整个画面的大小。ease 选择 power2.out 模拟气泡快速膨胀后减速的物理感。",
        glsl: `gsap.to(circle, {
  attr: { r: maxRadius },  // 扩张到覆盖全屏
  duration: 1.2,
  ease: "power2.out",       // 快速膨胀 → 缓慢收尾
});`,
      },
      {
        step: "04",
        title: "遮罩合成 (Mask Compositing)",
        description:
          "SVG mask 的工作原理：白色(255)=完全可见，黑色(0)=完全隐藏，灰色=半透明。多个白色圆形重叠时取最亮值（类似 lighten blend），所以多个气泡的可见区域会自然合并。",
        glsl: `<!-- mask 中多个白色圆形自动合并 -->
<mask id="revealMask">
  <rect fill="black"/>         <!-- 基底：全黑 -->
  <circle r="200" fill="white"/> <!-- 气泡 1 -->
  <circle r="150" fill="white"/> <!-- 气泡 2 -->
  <!-- 重叠区域：依然是白色，文字可见 -->
</mask>`,
      },
      {
        step: "05",
        title: "重置与交互循环",
        description:
          "可选：在所有气泡扩张完成后，反向动画缩小所有圆形，文字重新隐藏，等待下一轮点击。或者累积所有气泡，让文字逐步「被发现」。",
        glsl: `// 反向收缩：所有气泡同时缩回
gsap.to(".bubble", {
  attr: { r: 0 },
  duration: 0.8,
  stagger: 0.05,
  ease: "power2.in",
  onComplete: () => mask.innerHTML = '<rect fill="black"/>'
});`,
      },
    ],
    concepts: [
      {
        name: "SVG 遮罩",
        nameEN: "SVG <mask>",
        analogy:
          "把一张黑白照片当作「窗帘」——白色的地方能看穿，黑色的地方被挡住，灰色的地方是半透明的",
        explanation:
          "SVG <mask> 元素定义一个亮度遮罩：被遮罩元素的每个像素的可见度 = mask 对应位置的亮度值。与 clip-path（硬边缘裁切）不同，mask 支持灰度渐变，可以实现羽化、半透明等软边缘效果。",
        whyItMatters:
          "知道 SVG mask 后，你就能对 AI 说「用 SVG mask 做 reveal animation，mask 形状从圆形扩张」——而不是说「那种文字慢慢出现的效果」。",
      },
      {
        name: "遮罩揭示",
        nameEN: "Mask Reveal Animation",
        analogy:
          "擦去雾气的玻璃窗——手指划过的地方变透明，能看到窗外的风景",
        explanation:
          "Mask Reveal 是一种过渡动画模式：通过动画改变 mask 的形状/大小/位置，逐步揭示被遮挡的内容。常见形状有圆形扩张、矩形擦除、路径描边。核心优势是可以从任意位置、任意形状开始揭示。",
        whyItMatters:
          "知道 mask reveal 后，你就能对 AI 说「做一个 circular mask reveal，从点击位置展开，duration 1.2s」——这是页面过渡和内容揭示的经典模式。",
      },
      {
        name: "SVG 命名空间",
        nameEN: "SVG Namespace (createElementNS)",
        analogy:
          "SVG 元素住在自己的「国度」——创建 SVG 元素必须带上「护照」（命名空间 URI），否则浏览器不认",
        explanation:
          "动态创建 SVG 元素必须用 document.createElementNS('http://www.w3.org/2000/svg', tagName)，而非 createElement。这是因为 SVG 和 HTML 是不同的 XML 命名空间，浏览器需要知道元素属于哪个规范来正确解析。",
        whyItMatters:
          "知道 createElementNS 后，你就不会在动态创建 SVG 元素时踩坑。对 AI 说「用 createElementNS 在 SVG mask 中动态添加 circle」——避免常见的命名空间错误。",
      },
      {
        name: "GSAP attr 插件",
        nameEN: "GSAP attr:{} Tween",
        analogy:
          "GSAP 不仅能动画 CSS 属性，还能直接动画 HTML/SVG 属性——比如圆的半径 r、矩形的宽度 width",
        explanation:
          "gsap.to(el, { attr: { r: 200 } }) 直接 tween SVG 属性值。这比操作 CSS 的 transform: scale 更直观——直接改变形状的几何参数。GSAP 自动处理类型转换和单位。",
        whyItMatters:
          "知道 GSAP 的 attr 动画后，你就能对 AI 说「用 gsap.to 动画 SVG circle 的 r 属性从 0 到 maxRadius」——直接描述动画目标。",
      },
    ],
    applications: [
      {
        field: "页面过渡",
        examples:
          "圆形扩张的页面切换（Material Design）、墨水扩散转场、揭幕式内容加载",
      },
      {
        field: "互动叙事",
        examples:
          "擦雾效果的悬疑游戏、刮刮卡/抽奖互动、探索式地图揭示",
      },
      {
        field: "视觉设计",
        examples:
          "文字海报的创意排版、品牌 Logo 揭示动画、视差遮罩分层效果",
      },
      {
        field: "教学演示",
        examples:
          "逐步揭示的教程步骤、答案遮罩（点击揭示）、解剖图的分层展示",
      },
    ],
    keyInsight:
      "**遮罩是最优雅的「显示/隐藏」工具**。相比 opacity（全局透明度）和 clip-path（硬边缘裁切），mask 提供了像素级的精细控制——每个像素可以有不同的可见度。更重要的是，mask 是「声明式」的：你描述「什么区域可见」，浏览器负责渲染。这意味着你可以用任意形状（圆、路径、渐变、甚至图片）作为遮罩，创造无限的揭示效果。",
  },

  framers: {
    id: "framers",
    title: "Framers",
    subtitle: "逐字交错入场动画",
    oneLiner:
      "基于 Splitting.js 和 CSS @keyframes 的逐字符交错入场动画——用 CSS 变量驱动每个字母的独立时序",
    whatYouSee:
      "一个单词的首字母先从右侧滑入并旋转，然后其余字母依次从下方弹起、带有轻微回弹。每个字母的入场时间略有不同，形成瀑布般的 **Stagger Animation（交错动画）** 效果。整个动画纯 CSS 驱动，Splitting.js 只负责把文字拆成独立的 `<span>` 字符元素。这种效果叫 **Character Animation / Text Splitting Animation**。",
    pipeline: [
      {
        step: "01",
        title: "文字拆分 (Text Splitting)",
        description:
          "Splitting.js 将 `<div>framers</div>` 拆分为每个字符一个 `<span class=\"char\">`，并自动注入 CSS 变量 --char-index（当前字符索引）和 --char-total（总字符数）。这些变量是后续逐字动画的关键。",
        glsl: `<!-- Splitting.js 输出结果 -->
<div data-splitting class="splitting">
  <span class="char" style="--char-index:0; --char-total:7">
    <span>::before → "f"</span>
  </span>
  <span class="char" style="--char-index:1; --char-total:7">
    ...
  </span>
</div>`,
      },
      {
        step: "02",
        title: "首字母特殊动画 (First Char)",
        description:
          "首字母用独立的 @keyframes：先从右侧偏移 `.75ch × 字符总数` 的距离、从底部 200% 处滑入，经过两次回弹（-10%、7%）后落到原位。同时有独立的旋转动画——从半圈开始，经过反向摆动后归零。",
        glsl: `@keyframes first-char-transform {
  0%   { transform: translateX(calc(.75ch * var(--char-total)))
                    translateY(200%); }
  40%  { transform: translateX(...) translateY(-10%); }
  60%  { transform: translateX(...) translateY(7%); }
  100% { transform: none; }
}`,
      },
      {
        step: "03",
        title: "逐字交错延迟 (Stagger Delay)",
        description:
          "核心技巧：animation-delay 用 CSS calc() 根据 --char-index 计算。delay = duration + 0.05s × (total - index)——index 越大（越靠后的字母），延迟越短。效果是最后一个字母先动，倒序入场，和首字母的特殊动画形成呼应。",
        glsl: `.char {
  animation-delay: calc(
    var(--duration) +
    .05s * (var(--char-total) - var(--char-index))
  );
  /* 例：7个字符，index=1 → delay = 0.5s + 0.05s × 6 = 0.8s */
  /* index=6 → delay = 0.5s + 0.05s × 1 = 0.55s */
}`,
      },
      {
        step: "04",
        title: "嵌套变换分离 (Nested Transforms)",
        description:
          "关键技巧：位移（translateY）和旋转（rotate）分别在不同层级执行。.char 本身做 translateY 弹跳，.char::before 做 rotate 旋转。这样两个变换互不干扰，可以各自有不同的时序和缓动——这就是 **Nested Transforms（嵌套变换）**。",
        glsl: `.splitting .char {
  visibility: hidden; /* 隐藏原始字符 */
}
.splitting .char::before {
  visibility: visible; /* 只显示伪元素 */
  animation: inherit;  /* 继承父级动画 */
  animation-name: char-rotate; /* 覆盖为旋转动画 */
}`,
      },
      {
        step: "05",
        title: "弹性缓动 (Bounce Easing)",
        description:
          "cubic-bezier(.5, 0, .5, 1) 提供对称的缓入缓出。@keyframes 中通过多个关键帧手动构造回弹效果：translateY 从 50%→-6%→1%→0%，超过目标值再回来，模拟弹性碰撞。这比 CSS 内置的 ease 更有「物理感」。",
        glsl: `@keyframes char-transform {
  0%  { opacity: 0; transform: translateY(50%); }
  70% { transform: translateY(-6%); } /* 冲过目标 */
  90% { transform: translateY(1%);  } /* 微回弹 */
  to  { transform: translateY(0%);  } /* 落定 */
}`,
      },
    ],
    concepts: [
      {
        name: "文字拆分",
        nameEN: "Text Splitting (Splitting.js)",
        analogy:
          "把一个单词拆成一盒散装字母积木——每个字母都能独立移动、旋转、变色",
        explanation:
          "Splitting.js 是一个零依赖的 DOM 拆分库。它将文本节点拆分为字符（char）、单词（word）或行（line），每个片段包裹在带有 CSS 变量的 <span> 中。--char-index 和 --char-total 是实现逐字动画的关键——纯 CSS 就能完成交错时序。",
        whyItMatters:
          "知道 Splitting.js / Text Splitting 后，你就能对 AI 说「用 Splitting.js 拆分文字，每个字符用 --char-index 做 stagger delay」——精确描述文字动画的技术方案。",
      },
      {
        name: "CSS 变量驱动动画",
        nameEN: "CSS Custom Properties in Animation",
        analogy:
          "CSS 变量就像每个字母身上的编号牌——动画公式根据编号计算每个字母的专属时序",
        explanation:
          "通过 calc(var(--duration) + .05s * var(--char-index)) 这样的表达式，一条 CSS 规则就能为所有字符生成不同的 animation-delay。这是声明式动画的精髓：不需要 JS 循环，CSS 自己根据变量值计算。",
        whyItMatters:
          "知道这个模式后，你就能对 AI 说「用 CSS 变量 --index 和 calc() 做声明式的 stagger delay」——比手动在 JS 中设置每个元素的 delay 更优雅。",
      },
      {
        name: "嵌套变换",
        nameEN: "Nested Transforms",
        analogy:
          "一个人站在旋转木马上跳舞——旋转木马的运动和人的舞蹈互不干扰、各自独立",
        explanation:
          "CSS transform 是不可加的：一个元素只能有一个 transform 属性，多个变换会互相覆盖。Nested Transforms 的解决方案是：外层元素做 translate，内层元素（或 ::before 伪元素）做 rotate，两者在各自的层级独立动画。",
        whyItMatters:
          "知道 Nested Transforms 后，你就能对 AI 说「用嵌套元素分离 translate 和 rotate 动画，各自独立时序」——解决 CSS 单一 transform 属性的限制。",
      },
      {
        name: "交错动画",
        nameEN: "Stagger Animation",
        analogy:
          "多米诺骨牌——不是所有字母同时出现，而是依次延迟，形成波浪般的入场节奏",
        explanation:
          "Stagger 是指一组元素以固定间隔依次启动同一动画。间隔时间（如 50ms）× 元素数量 = 总展开时长。可以正序、倒序、从中间向两边展开。CSS 中用 --index × delay 实现，JS 动画库中通常有专门的 stagger 参数。",
        whyItMatters:
          "知道 stagger 后，你就能对 AI 说「字符入场用 50ms 的 stagger delay，倒序排列」——比说「一个个出来，最后一个先」精确得多。",
      },
    ],
    applications: [
      {
        field: "品牌动画",
        examples:
          "Logo 入场动画、品牌名称逐字展开、Slogan 打字机效果",
      },
      {
        field: "页面过渡",
        examples:
          "英雄区标题入场、页面切换时标题逐字淡入、导航项交错出现",
      },
      {
        field: "交互反馈",
        examples:
          "按钮点击后文字重组动画、表单验证消息逐字出现、Toast 通知入场",
      },
      {
        field: "创意排版",
        examples:
          "诗歌/歌词逐词展示、互动故事的渐进叙事、数据数字滚动计数器",
      },
    ],
    keyInsight:
      "**逐字动画的核心是「拆分 + 索引 + 公式」**。Splitting.js 负责拆分并注入索引变量，CSS calc() 负责根据索引计算时序，@keyframes 负责定义运动曲线。三者配合，一条 CSS 规则就能驱动任意数量的字符动画。核心术语链：**Text Splitting**（文字拆分）→ **--char-index**（CSS 变量索引）→ **Stagger Delay**（交错延迟）→ **Nested Transforms**（嵌套变换分离）。记住：**变量是声明式动画的引擎——有了索引，一切皆可计算**。",
  },

  textparticle: {
    id: "textparticle",
    title: "Text Particle",
    subtitle: "粒子文字变形",
    oneLiner:
      "基于 Canvas 像素采样和粒子插值的 Text Morphing（文字变形）效果——将文字拆解为粒子，在两个字形间做空间插值过渡",
    whatYouSee:
      "一个字符由数千个小圆点组成，点击 Morph 后，这些粒子从源字符的形状飞散、重组为目标字符。每个粒子沿各自的路径平滑运动，整体呈现出流畅的变形过渡。这种效果叫 **Particle Text Morphing（粒子文字变形）**，核心是 **离屏 Canvas 像素采样** + **空间就近匹配** + **逐帧 Lerp 插值**。",
    pipeline: [
      {
        step: "01",
        title: "离屏 Canvas 采样 (Offscreen Sampling)",
        description:
          "将目标文字渲染到一个不可见的 Canvas 上，然后逐像素扫描 imageData：alpha > 128 的像素坐标被收集为「有效点」。这一步把矢量文字转换为离散的点云。",
        glsl: `const offscreen = document.createElement("canvas");
const ctx = offscreen.getContext("2d");
ctx.fillText(char, cx, cy);
const data = ctx.getImageData(0, 0, w, h);
// 扫描像素，收集非透明坐标
for (let y = 0; y < h; y += step) {
  for (let x = 0; x < w; x += step) {
    if (data[(y * w + x) * 4 + 3] > 128)
      points.push({ x, y });
  }
}`,
      },
      {
        step: "02",
        title: "随机采样 + 就近匹配 (Sampling & Matching)",
        description:
          "从源字符和目标字符各随机采样 N 个点（如 3000 个），然后通过空间就近匹配（nearest neighbor）将源点和目标点一一配对。匹配质量直接影响变形的视觉流畅度——就近匹配让粒子走最短路径。",
        glsl: `// Fisher-Yates shuffle + slice(0, N)
shuffle(sourcePoints).slice(0, count);
shuffle(targetPoints).slice(0, count);
// 就近匹配：每个源点找最近的目标点
for (const src of sourcePoints) {
  const nearest = findNearest(src, targetPoints);
  particles.push({ sx: src.x, sy: src.y,
                    tx: nearest.x, ty: nearest.y });
}`,
      },
      {
        step: "03",
        title: "缓动插值 (Easing Interpolation)",
        description:
          "每帧递增 progress（0→1），通过 easeInOutCubic 缓动函数映射为平滑的 t 值。每个粒子的当前位置 = lerp(source, target, t)。缓动函数让动画「慢→快→慢」，而非匀速直线运动。",
        glsl: `// Cubic ease-in-out
const t = progress < 0.5
  ? 4 * p * p * p
  : 1 - Math.pow(-2 * p + 2, 3) / 2;
// 每个粒子插值
x = sx + (tx - sx) * t;
y = sy + (ty - sy) * t;`,
      },
      {
        step: "04",
        title: "多渲染模式 (Render Modes)",
        description:
          "提供三种可视化方式：Dots（圆点）直接在插值位置画圆；Trail（拖尾）用速度向量绘制运动尾迹；Pixel Grid（像素网格）将位置对齐到网格产生像素风格。不同模式改变的只是绘制方式，插值逻辑不变。",
        glsl: `// Dots 模式
ctx.arc(x, y, size, 0, Math.PI * 2);
// Trail 模式：用速度向量画尾迹
ctx.moveTo(x, y);
ctx.lineTo(x - vx * 3, y - vy * 3);
// Pixel 模式：对齐到网格
const gx = Math.round(x / grid) * grid;
ctx.fillRect(gx, gy, grid - 1, grid - 1);`,
      },
      {
        step: "05",
        title: "自动循环 (Auto Loop)",
        description:
          "当 progress 到达 1 时，延迟后翻转方向（forward ↔ backward），重置 progress 为 0，开始反向变形。源字符和目标字符之间来回切换，形成无限循环动画。",
        glsl: `if (progress >= 1 && autoLoop) {
  setTimeout(() => {
    forward = !forward;
    progress = 0;
    animating = true;
  }, 800);
}`,
      },
    ],
    concepts: [
      {
        name: "粒子文字变形",
        nameEN: "Particle Text Morphing",
        analogy:
          "想象一群萤火虫先排成「A」的形状，然后同时飞向各自的新位置，重新排成「B」的形状",
        explanation:
          "Particle Text Morphing 将文字视为点的集合而非笔画。通过离屏 Canvas 采样获取字形的像素坐标，建立源→目标的点对应关系，再用插值动画驱动每个点从源位置移动到目标位置。这是零依赖的纯 Canvas 方案，适合任何字符（中英文、emoji）。",
        whyItMatters:
          "知道 Particle Text Morphing 后，你就能对 AI 说「我需要 particle text morphing 效果，3000 个粒子，easeInOut 缓动」——精确描述想要的文字变形方案。",
      },
      {
        name: "离屏 Canvas 采样",
        nameEN: "Offscreen Canvas Pixel Sampling",
        analogy:
          "把文字「拍」成照片，然后扫描照片上哪些像素是有颜色的——这些像素的坐标就是文字的「骨架」",
        explanation:
          "在不可见的 Canvas 上渲染文字，通过 getImageData 获取像素数据，筛选 alpha > 阈值的像素坐标。采样步长（step）控制点的密度：step=1 最精确但点数多，step=4 粗糙但轻量。这是将任意 Canvas 可渲染内容转换为点云的通用技术。",
        whyItMatters:
          "知道 offscreen canvas sampling 后，你就能对 AI 说「用离屏 Canvas 采样文字像素坐标，step 2，alpha 阈值 128」——这是粒子文字效果的标准起点。",
      },
      {
        name: "空间就近匹配",
        nameEN: "Nearest Neighbor Matching",
        analogy:
          "每个萤火虫找离自己最近的目标位置飞过去——而不是随机分配，这样整体运动路径最短、最自然",
        explanation:
          "将源点和目标点做就近匹配（greedy nearest neighbor），让每个粒子走最短路径到目标。这避免了随机配对导致的「粒子交叉」混乱。更高级的方案可以用 Hungarian Algorithm 做最优匹配，但就近贪心已经够好。",
        whyItMatters:
          "知道 nearest neighbor matching 后，你就能对 AI 说「源和目标点用就近匹配配对，避免交叉路径」——这是粒子变形流畅度的关键。",
      },
      {
        name: "缓动函数",
        nameEN: "Easing Function",
        analogy:
          "汽车启动时慢慢加速、到站前慢慢减速——不是匀速行驶，而是有自然的加减速曲线",
        explanation:
          "Easing 函数将线性的 t∈[0,1] 映射为非线性的曲线。easeInOut 两端慢中间快（cubic-bezier），easeOut 快开始慢结束。在粒子动画中，easing 让变形的起止更柔和、中间更果断。CSS 的 transition-timing-function 和 JS 动画库都基于此。",
        whyItMatters:
          "知道 easing 后，你就能对 AI 说「用 cubic easeInOut 缓动，duration 1.2s」——而不是说「动画要有那种慢慢开始慢慢结束的感觉」。",
      },
    ],
    applications: [
      {
        field: "品牌动画",
        examples:
          "Logo 字符变形、品牌名称过渡动画、数字倒计时粒子效果",
      },
      {
        field: "数据可视化",
        examples:
          "数字 KPI 变化动画、图表标签切换、统计数据的粒子化展示",
      },
      {
        field: "互动体验",
        examples:
          "输入框粒子反馈、搜索结果过渡、游戏计分动画",
      },
      {
        field: "创意编程",
        examples:
          "生成艺术中的文字元素、音乐可视化字符、互动装置的粒子投影",
      },
    ],
    keyInsight:
      "**粒子文字变形的本质是「把文字当图片处理」**。不需要理解字体的矢量结构——只要能渲染出来，就能采样成点云，就能做任意变形。这是一种「暴力但通用」的方案：对 Canvas 能画的一切（文字、图标、图片）都适用。核心术语链：**Offscreen Canvas Sampling**（像素采样）→ **Nearest Neighbor Matching**（就近配对）→ **Easing Interpolation**（缓动插值）→ **Render Mode**（可视化模式）。记住：**当你不知道数据的结构时，把它光栅化成像素总是可行的**。",
  },

  pathmorph: {
    id: "pathmorph",
    title: "Path Morph",
    subtitle: "SVG 路径文字变形",
    oneLiner:
      "基于 opentype.js 字体解析和 flubber SVG Path 插值的轮廓级文字变形——在矢量层面实现字符间的平滑过渡",
    whatYouSee:
      "一个字符的轮廓线平滑地变形为另一个字符：笔画弯曲、延伸、收缩，像液态金属一样在两个形状之间流动。与粒子方案不同，这里的变形是连续的曲线——没有离散的点，而是完整的矢量路径在变化。这种效果叫 **SVG Path Morphing（路径变形）**，核心是 **opentype.js**（字体解析）+ **flubber**（路径插值）。",
    pipeline: [
      {
        step: "01",
        title: "字体加载 (Font Loading)",
        description:
          "用 opentype.js 从 CDN 加载字体文件（.ttf/.otf），解析为 Font 对象。opentype.js 能读取字体中每个字符的矢量轮廓数据——贝塞尔曲线控制点、路径指令等。",
        glsl: `import opentype from "opentype.js";
const font = await opentype.load(
  "https://fonts.gstatic.com/.../Roboto.ttf"
);
// font.getPath("A", x, y, size)
// → 返回 SVG path 数据`,
      },
      {
        step: "02",
        title: "字符转 Path (Glyph to SVG Path)",
        description:
          "调用 font.getPath(char, x, y, fontSize) 获取字符的 SVG path 对象，再转为 d 属性字符串（如 \"M10 20 L30 40 C...\"）。这个字符串完整描述了字符的矢量轮廓。",
        glsl: `function charToPath(font, char, size) {
  const path = font.getPath(char, 0, 0, size);
  // 提取 d 属性字符串
  return path.toSVG()
    .replace(/<path d="/, "")
    .replace(/".*/, "");
}
// "M 37.5 -225 L 150 0 L 262.5 -225 ..."`,
      },
      {
        step: "03",
        title: "路径插值 (Path Interpolation with flubber)",
        description:
          "flubber.interpolate(pathA, pathB) 创建一个插值器函数。它自动处理两条路径的点数不一致——通过细分和重采样让两条路径「点数对齐」，然后对每个控制点做插值。调用 interpolator(t) 返回 t 时刻的中间路径。",
        glsl: `import { interpolate } from "flubber";
const morph = interpolate(pathA, pathB, {
  maxSegmentLength: 5  // 控制精度
});
// morph(0)   → pathA（源字符）
// morph(0.5) → 中间过渡形态
// morph(1)   → pathB（目标字符）`,
      },
      {
        step: "04",
        title: "动画驱动 (RAF Animation)",
        description:
          "用 requestAnimationFrame 驱动动画循环。每帧计算 elapsed / duration 得到 rawT，通过缓动函数映射为 t，调用 interpolator(t) 获取当前帧的 path 数据，更新 SVG <path> 元素的 d 属性。",
        glsl: `function animate() {
  const elapsed = (now - startTime) / 1000;
  const rawT = Math.min(1, elapsed / duration);
  const t = easing(rawT);
  // 更新 SVG path
  pathEl.setAttribute("d", interpolator(t));
  requestAnimationFrame(animate);
}`,
      },
      {
        step: "05",
        title: "自动往返 (Auto Reverse)",
        description:
          "动画到达终点后，延迟一段时间，翻转方向重新播放——目标字符变形回源字符。通过切换 forward 标志改变 t 的计算方向，无需重建插值器。",
        glsl: `if (rawT >= 1) {
  setTimeout(() => {
    forward = !forward;
    startTime = performance.now();
  }, 600);
}
// 正向：t = easing(rawT)
// 反向：t = easing(1 - rawT)`,
      },
    ],
    concepts: [
      {
        name: "SVG 路径变形",
        nameEN: "SVG Path Morphing",
        analogy:
          "两根铁丝弯成不同形状——找到对应的弯折点，然后同时弯曲每个点，铁丝就从一个形状平滑变成另一个",
        explanation:
          "SVG Path Morphing 在矢量层面对两条路径做插值。核心挑战是「点数对齐」：字母 O 可能有 20 个控制点，字母 W 可能有 40 个。flubber 通过路径重采样和细分自动解决这个问题，让两条路径的点数一致后再做逐点插值。",
        whyItMatters:
          "知道 SVG Path Morphing 后，你就能对 AI 说「我需要两个 SVG shape 之间的 path morphing，用 flubber 做路径插值」——而不是说「那种形状变来变去的效果」。",
      },
      {
        name: "字体解析",
        nameEN: "Font Parsing (opentype.js)",
        analogy:
          "字体文件是一本「字符图纸大全」——opentype.js 能翻开任意一页，读出那个字符的精确绘制指令",
        explanation:
          "opentype.js 是一个纯 JavaScript 字体解析器，支持 TrueType (.ttf) 和 OpenType (.otf)。它能读取 glyph 的 Bezier 曲线路径、度量信息（advance width、baseline）、kerning 对等。getPath() 方法直接返回可用于 SVG 或 Canvas 的路径数据。",
        whyItMatters:
          "知道 opentype.js 后，你就能对 AI 说「用 opentype.js 解析字体，提取字符的 SVG path 数据」——这是做精确字形动画的基础工具。",
      },
      {
        name: "路径插值库",
        nameEN: "flubber (Path Interpolation)",
        analogy:
          "两张拼图的形状不同——flubber 自动给它们加辅助点，让它们「点数匹配」后就能逐点变形",
        explanation:
          "flubber 是专门做 SVG path 插值的库。它解决了 SVG 动画中最难的问题：两条路径的控制点数量和类型不同时如何插值。flubber 通过 subdivide → resample → interpolate 三步流程，让任意两条路径之间都能平滑过渡。",
        whyItMatters:
          "知道 flubber 后，你就能对 AI 说「用 flubber.interpolate 做两个 SVG path 之间的平滑变形」——这是目前最好用的 JS 路径插值方案。",
      },
      {
        name: "贝塞尔曲线",
        nameEN: "Bézier Curve",
        analogy:
          "在两个钉子之间绷一根橡皮筋，再用手指从侧面推——手指的位置就是控制点，决定了曲线的弯曲程度",
        explanation:
          "字体轮廓由二次（TrueType）或三次（OpenType）贝塞尔曲线构成。每条曲线由起点、终点和 1-2 个控制点定义。SVG 的 C/Q 指令直接对应三次/二次贝塞尔。路径变形本质上就是对这些控制点做坐标插值。",
        whyItMatters:
          "知道 Bézier curve 后，你就能对 AI 说「字体轮廓是 cubic Bézier curves，我需要在两组控制点之间做插值」——理解变形的数学本质。",
      },
    ],
    applications: [
      {
        field: "品牌 Logo 动画",
        examples:
          "Logo 字母间的平滑过渡、品牌 icon 的形态切换、字体 A/B 变体展示",
      },
      {
        field: "数据可视化",
        examples:
          "饼图→柱状图的形态变形、地图区域的形状过渡、组织架构图节点变化",
      },
      {
        field: "UI 过渡",
        examples:
          "汉堡菜单 ↔ 关闭按钮的图标变形、播放 ↔ 暂停按钮、展开/折叠箭头",
      },
      {
        field: "教学演示",
        examples:
          "字体设计中 glyph 变体的可视化、贝塞尔曲线原理教学、笔画顺序动画",
      },
    ],
    keyInsight:
      "**路径变形和粒子变形是两种根本不同的范式**。粒子方案把文字「打碎」成离散的点，变形是点的飞行——适合炫酷的粒子效果。路径方案保持文字的矢量轮廓完整，变形是曲线的连续形变——适合精确的形态过渡。核心术语链：**opentype.js**（字体解析）→ **SVG Path**（矢量轮廓提取）→ **flubber.interpolate**（路径点数对齐 + 逐点插值）→ **Bézier Curve**（曲线控制点动画）。记住：**粒子是像素级的暴力方案，路径是矢量级的精确方案——选择取决于你要「酷」还是要「准」**。",
  },

  squares: {
    id: "squares",
    title: "Squares",
    subtitle: "正态分布生成艺术",
    oneLiner:
      "基于正态分布和多段渐变色映射的 Canvas 2D 生成艺术——用统计学分布创造有机的视觉密度",
    whatYouSee:
      "画布上散布着数千个半透明的彩色方块，中心区域密集、边缘稀疏，形成自然的密度渐变。颜色从顶部的深蓝逐渐过渡到中部的天蓝、金黄，再到底部的橙红和暗红——像一幅抽象的日落风景。每个方块的颜色都有微妙的随机偏移，让画面充满有机的质感。这种效果叫 **Generative Art（生成艺术）**，核心是 **Normal Distribution（正态分布）** 控制空间密度。",
    pipeline: [
      {
        step: "01",
        title: "正态分布采样 (Box-Muller Transform)",
        description:
          "用 Box-Muller 变换将均匀分布的 Math.random() 转换为正态分布（高斯分布）。mean 设为画布中心，stddev 控制扩散程度。结果：中心区域采样密度高、边缘稀疏，形成自然的「聚集效应」。",
        glsl: `// Box-Muller 变换：均匀分布 → 正态分布
function normalRandom(mean, stddev) {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1))
          * Math.cos(2 * Math.PI * u2);
  return mean + z * stddev;
}`,
      },
      {
        step: "02",
        title: "多段渐变色映射 (Gradient Color Mapping)",
        description:
          "定义 7 个色标（color stops），将 y 坐标 [0,1] 映射到深蓝→靛蓝→天蓝→金黄→橙色→红色→暗红的渐变。通过 gamma 幂函数偏移 p = pow(y/h, 1.6)，让暖色调（底部）占据更大的色域范围。",
        glsl: `const stops = [
  { p: 0.0,  color: { r:15,  g:25,  b:60  } },  // 深蓝
  { p: 0.25, color: { r:40,  g:70,  b:140 } },  // 靛蓝
  { p: 0.45, color: { r:90,  g:160, b:200 } },  // 天蓝
  { p: 0.6,  color: { r:255, g:220, b:150 } },  // 金黄
  { p: 0.75, color: { r:255, g:140, b:60  } },  // 橙色
  { p: 0.9,  color: { r:220, g:70,  b:40  } },  // 红色
  { p: 1.0,  color: { r:120, g:30,  b:60  } },  // 暗红
];`,
      },
      {
        step: "03",
        title: "颜色扰动 (Color Perturbation)",
        description:
          "对每个方块的颜色做 ±30 的随机偏移。同一位置的方块颜色不完全相同，产生「油画笔触」般的有机质感。扰动量太小则画面呆板，太大则色彩混乱——30 是让结构可辨又不失细节的平衡点。",
        glsl: `function perturbColor(color, amount) {
  return {
    r: clamp(color.r + random(-amount, amount), 0, 255),
    g: clamp(color.g + random(-amount, amount), 0, 255),
    b: clamp(color.b + random(-amount, amount), 0, 255),
  };
}`,
      },
      {
        step: "04",
        title: "半透明叠加 (Alpha Compositing)",
        description:
          "每个方块的 opacity 设为 0.3。7500 个半透明方块叠加后，中心区域（密度高）颜色更饱和、更不透明，边缘（密度低）颜色更淡——这种「密度→饱和度」的自然映射是正态分布的视觉魅力所在。",
        glsl: `ctx.fillStyle = \`rgba(\${r}, \${g}, \${b}, 0.3)\`;
ctx.fillRect(x, y, w, h);
// 7500 次叠加后：
// 中心区域 ≈ 密集叠加 → 颜色饱满
// 边缘区域 ≈ 稀疏叠加 → 颜色淡薄`,
      },
      {
        step: "05",
        title: "尺寸随机化 (Size Distribution)",
        description:
          "方块的宽高也用正态分布采样：均值 50px、标准差 20px。大多数方块大小相近（聚集在 30-70px），偶尔出现特别大或特别小的方块，打破均匀感。位置 + 颜色 + 尺寸三个维度的随机性叠加，创造出丰富而非混乱的视觉层次。",
        glsl: `const w = normalRandom(50, 20);  // 均值50, 标准差20
const h = normalRandom(50, 20);
// 68% 的方块在 30-70px
// 95% 的方块在 10-90px
// 极少数超大/超小 → 视觉"惊喜"`,
      },
    ],
    concepts: [
      {
        name: "正态分布",
        nameEN: "Normal / Gaussian Distribution",
        analogy:
          "人群自然聚集的规律——大多数人站在中心附近，越往边缘人越少，形成钟形曲线",
        explanation:
          "正态分布（高斯分布）是自然界最常见的概率分布，用均值 μ 和标准差 σ 描述。68% 的值落在 μ±σ 内，95% 落在 μ±2σ 内。在 Canvas 中通过 Box-Muller 变换从 Math.random() 生成。它是生成艺术中创造「自然聚集感」的核心工具。",
        whyItMatters:
          "知道正态分布后，你就能对 AI 说「用正态分布采样位置，mean 在画布中心，stddev 为宽度的 1/4」——精确控制粒子的聚散效果。",
      },
      {
        name: "Box-Muller 变换",
        nameEN: "Box-Muller Transform",
        analogy:
          "把「掷骰子」（均匀分布）变成「扔飞镖」（中心密、边缘疏）的数学魔法",
        explanation:
          "Box-Muller 变换将两个独立的 [0,1] 均匀分布随机数转换为标准正态分布。公式：z = √(-2·ln(u₁)) · cos(2π·u₂)。这是在浏览器中生成正态分布随机数的最简单方法，因为 JavaScript 只提供均匀分布的 Math.random()。",
        whyItMatters:
          "知道 Box-Muller 后，你就能对 AI 说「用 Box-Muller 变换生成正态分布随机数」——而不是用一堆 Math.random() 相加来近似。",
      },
      {
        name: "多段颜色渐变",
        nameEN: "Multi-Stop Color Gradient",
        analogy:
          "调色板上的多个颜色锚点——在锚点之间做线性插值，就能生成任意位置的颜色",
        explanation:
          "定义若干 { position, color } 色标，对任意 t∈[0,1] 找到左右两个最近的色标并做 RGB 线性插值。这和 CSS linear-gradient 的原理一致。通过 pow(t, gamma) 做非线性映射可以偏移色域分布。",
        whyItMatters:
          "知道 multi-stop gradient 后，你就能对 AI 说「做一个 7 段色标的渐变映射，gamma 1.6 偏移向暖色调」——精确控制生成艺术的色彩空间。",
      },
      {
        name: "生成艺术",
        nameEN: "Generative Art",
        analogy:
          "艺术家不画每一笔，而是设计「规则」——让算法在规则内自由创作，每次运行结果不同",
        explanation:
          "Generative Art 是指由算法或规则系统生成的艺术作品。核心思想是：艺术家定义参数空间（分布、颜色、形状规则），程序在空间中采样生成作品。每次运行的随机种子不同，作品就不同——但风格一致。",
        whyItMatters:
          "知道 Generative Art 这个术语后，你就能搜索 Processing、p5.js、Canvas generative art 等资源，进入一个完整的创意编程社区。",
      },
    ],
    applications: [
      {
        field: "数据艺术",
        examples:
          "将真实数据（气温、股价、人口）映射为颜色和密度，让数据变成可感知的视觉作品",
      },
      {
        field: "动态壁纸",
        examples:
          "每次加载生成不同的抽象画面，作为网站背景或桌面壁纸",
      },
      {
        field: "NFT / 数字收藏",
        examples:
          "链上存储生成参数，每个 token 对应唯一的视觉输出（Art Blocks 模式）",
      },
      {
        field: "品牌视觉系统",
        examples:
          "用品牌色生成渐变色标，为每张名片/海报生成独一无二的抽象背景",
      },
    ],
    keyInsight:
      "**生成艺术的本质是「约束下的自由」**。正态分布提供了结构（中心聚集），随机扰动提供了变化（每次不同），多段渐变提供了氛围（色彩情绪）。三者叠加：有序 + 无序 = 有机。核心术语链：**Normal Distribution**（控制空间密度）→ **Box-Muller Transform**（生成正态随机数）→ **Multi-Stop Gradient**（颜色映射）→ **Alpha Compositing**（密度→饱和度的自然转化）。记住：**最好的生成艺术来自简单规则的叠加，而非复杂规则的堆砌**。",
  },
};
