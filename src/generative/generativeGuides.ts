import type { GenerativeType } from "./generativeTypes";

export interface GenerativeGuide {
  id: GenerativeType;
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

export const generativeGuides: Record<GenerativeType, GenerativeGuide> = {
  superformula: {
    id: "superformula",
    title: "Superformula",
    subtitle: "Gielis 超级公式几何图案",
    oneLiner:
      "基于 Gielis Superformula 的参数化几何图案生成器——用一条公式统一描述圆形、多边形、星形、花瓣等所有对称形状",
    whatYouSee:
      "你看到一组同心排列的圆点环，每个圆点的位置并非简单的圆形分布，而是沿着一条由 **超级公式（Superformula）** 定义的极坐标曲线排列。当你切换「Star」「Petal」「Gear」等预设时，曲线形状随参数 m/n1/n2/n3 的变化而平滑过渡。这种一个公式生成万千形状的方法在学术界叫 **Gielis Superformula**，在生成艺术领域属于 **Parametric Geometry / Procedural Shape Generation**。",
    pipeline: [
      {
        step: "01",
        title: "极坐标超级公式求值",
        description:
          "对每个角度 θ，计算 Superformula 的极径 r(θ)。公式核心：r = (|cos(mθ/4)/a|^n2 + |sin(mθ/4)/b|^n3)^(-1/n1)。参数 m 控制对称折数，n1/n2/n3 控制形变程度。",
        glsl: `function superformula(theta, m, n1, n2, n3) {
  const t1 = Math.abs(Math.cos(m * theta / 4));
  const t2 = Math.abs(Math.sin(m * theta / 4));
  return Math.pow(
    Math.pow(t1, n2) + Math.pow(t2, n3),
    -1 / n1
  );
}`,
      },
      {
        step: "02",
        title: "同心环布局 (Concentric Rings)",
        description:
          "从中心向外放置多层环（Ring），每层的圆点数量递增（baseCircles + ring * increment），相邻层交替偏移半个角度，形成编织般的视觉效果。",
        glsl: `for (let ring = 0; ring < numRings; ring++) {
  const numCircles = baseCircles + ring * circleIncrement;
  const offset = alternateOffset && ring % 2 === 1
    ? Math.PI / numCircles : 0;
  // ...each circle placed at angle + offset
}`,
      },
      {
        step: "03",
        title: "极径调制定位 (Radius Modulation)",
        description:
          "每个圆点的最终位置 = 环半径 × 超级公式极径 × (cos θ, sin θ)。超级公式使圆点分布从「均匀圆环」变形为星形、花瓣等各种形状。",
        glsl: `const sf = superformula(angle, m, n1, n2, n3);
const x = cx + ringRadius * sf * Math.cos(angle);
const y = cy + ringRadius * sf * Math.sin(angle);
// dot size also modulated: baseSize * sf
ctx.arc(x, y, size * sf, 0, Math.PI * 2);`,
      },
      {
        step: "04",
        title: "径向颜色插值 (Radial Color Gradient)",
        description:
          "内圈到外圈通过 RGB 线性插值（lerp）实现渐变色过渡，营造深度层次感。每层的透明度也从内到外递减。",
        glsl: `const ringT = ring / (numRings - 1);
const color = lerpColor(colorCenter, colorEdge, ringT);
ctx.globalAlpha = 0.6 + 0.4 * (1 - ringT);`,
      },
      {
        step: "05",
        title: "旋转动画 (Rotation Animation)",
        description:
          "可选的全局旋转动画通过每帧累加角度偏移实现，配合 requestAnimationFrame 驱动。旋转使静态图案获得「活的」视觉节奏。",
        glsl: `rotationRef.current += rotationSpeed * 0.01;
const angle = baseAngle + offset + rotationRef.current;`,
      },
    ],
    concepts: [
      {
        name: "超级公式",
        nameEN: "Superformula (Gielis Formula)",
        analogy: "想象一个魔法万花尺——你只需要转动 4 个旋钮（m, n1, n2, n3），它就能画出从圆到星星到齿轮到花瓣的任意对称图形",
        explanation:
          "Superformula 是 Johan Gielis 于 2003 年提出的超椭圆推广公式。它在极坐标系中用 4 个参数控制极径随角度的变化，能统一描述自然界中大量的对称形状（贝壳、花瓣、海星、雪花等）。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 Superformula 生成一个 m=6 的花瓣形状」，而不是模糊地说「画一个花一样的图案」。",
      },
      {
        name: "极坐标",
        nameEN: "Polar Coordinates",
        analogy: "不用「向右走 3 步、向上走 4 步」来描述位置，而是说「面朝 53° 方向走 5 步」——一个角度 + 一个距离",
        explanation:
          "极坐标系用 (r, θ) 描述平面上的点。在生成对称图案时，极坐标比笛卡尔坐标自然得多——角度决定方向，半径决定远近。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「在极坐标下按角度分布元素」，精准描述环形布局需求。",
      },
      {
        name: "参数化几何",
        nameEN: "Parametric Geometry",
        analogy: "就像用 Excel 公式批量生成数据——你定义规则（公式 + 参数），系统自动产出上千个精确定位的图形元素",
        explanation:
          "参数化几何通过数学公式 + 一组可调参数来程序化生成形状，而非手动绘制。改变任何参数，整个形状随之平滑变化。这是生成艺术和计算设计的核心方法。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用参数化方法生成可调的几何图案」，而不是「画一堆点然后能改」。",
      },
      {
        name: "同心环布局",
        nameEN: "Concentric Ring Layout",
        analogy: "往池塘里扔石头产生的波纹——一圈一圈从中心向外扩散，每圈上均匀放置元素",
        explanation:
          "将元素按半径递增的圆环排列，每层圆环包含不同数量的元素。交替偏移（Alternate Offset）让相邻环的元素错开，产生编织感。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用同心环布局排列粒子，相邻层交替偏移」来精确描述这类放射状分布。",
      },
    ],
    applications: [
      { field: "生成艺术", examples: "参数驱动的几何壁纸、NFT 生成、数据艺术可视化" },
      { field: "品牌设计", examples: "动态 logo、参数化品牌图形系统、可变标识" },
      { field: "科学可视化", examples: "自然形态模拟（贝壳、花瓣、晶体结构）" },
      { field: "教育", examples: "数学公式可视化教学、极坐标概念演示" },
    ],
    keyInsight:
      "Superformula 揭示了一个深刻的事实：自然界中看似千变万化的对称形状，其实可以用同一条公式、仅凭 4 个参数来统一描述。生成艺术的核心就在于此——用最少的规则产出最丰富的视觉多样性。",
  },

  sineorbit: {
    id: "sineorbit",
    title: "Sine Orbit",
    subtitle: "正弦波驱动的多层轨道系统",
    oneLiner:
      "基于多层正弦波轨道的参数化动态图案——用极坐标 + 正弦调制 + 加色混合实现发光的有机运动系统",
    whatYouSee:
      "你看到多层同心轨道上散布着花瓣状的小图形，它们沿轨道旋转，轨道本身并非完美圆形而是被 **正弦波（Sine Wave）** 调制成波浪形。相邻层反向旋转产生交织效果。所有图形叠加在深色背景上时呈现出发光效果——这是 **加色混合（Additive Blending）** 的特征。整个效果在生成艺术领域属于 **Orbital Motion System / Parametric Particle Field**。",
    pipeline: [
      {
        step: "01",
        title: "多层轨道布局 (Multi-Layer Orbits)",
        description:
          "从内到外创建多层轨道，每层的半径 = baseRadius + layer × radiusStep，每层上放置的元素数量递增。相邻层旋转方向交替（奇偶翻转），产生对转效果。",
        glsl: `for (let layer = 0; layer < layerCount; layer++) {
  const orbitRadius = baseRadius + layer * radiusStep;
  const numItems = baseItems + layer * itemsIncrement;
  const direction = layer % 2 === 0 ? 1 : -1;
  const layerAngle = globalT * layerRotationSpeed * direction
    + layer * layerTwist;
}`,
      },
      {
        step: "02",
        title: "正弦径向调制 (Sine Radial Modulation)",
        description:
          "每个元素的实际轨道半径 = 基础半径 + sin(频率 × 角度 + 时间 × 速度) × 振幅。正弦波让轨道从「完美圆」变成「呼吸的波浪」，这就是效果看起来有机流动的关键。",
        glsl: `const sineOffset = sineAmp * Math.sin(
  sineFreq * itemAngle + globalT * morphSpeed
);
const r = orbitRadius + sineOffset;
const x = cx + r * Math.cos(itemAngle);
const y = cy + r * Math.sin(itemAngle);`,
      },
      {
        step: "03",
        title: "自旋 + 形状绘制 (Item Spin + Shape Drawing)",
        description:
          "每个元素除了沿轨道公转外，还有自身的自旋角度。使用 Canvas 2D 的 save/translate/rotate/restore 模式实现局部坐标变换，然后绘制花瓣、三角形等参数化形状。",
        glsl: `ctx.save();
ctx.translate(x, y);
ctx.rotate(itemAngle + globalT * itemSpinSpeed);
// Draw petal shape with bezierCurveTo
ctx.beginPath();
ctx.moveTo(0, -h);
ctx.bezierCurveTo(w, -h*0.6, w, h*0.6, 0, h);
ctx.bezierCurveTo(-w, h*0.6, -w, -h*0.6, 0, -h);
ctx.fill();
ctx.restore();`,
      },
      {
        step: "04",
        title: "颜色插值 + 径向渐变 (Color Interpolation)",
        description:
          "内层到外层通过 RGB 线性插值实现渐变（如蓝→青）。每层的 t 值 = layer / (layerCount - 1)，映射到 colorInner → colorOuter 的梯度上。",
        glsl: `const layerT = layer / (layerCount - 1);
const color = lerpColor(colorInner, colorOuter, layerT);
ctx.fillStyle = color;
ctx.globalAlpha = opacity;`,
      },
      {
        step: "05",
        title: "加色混合模式 (Additive Blending)",
        description:
          "关键的视觉魔法：将 Canvas 的 globalCompositeOperation 设为 'lighter'（对应 P5.js 的 blendMode(ADD)），使重叠区域的颜色值相加而非覆盖，产生发光/辉光效果。这就是为什么交叉区域更亮。",
        glsl: `// P5.js: blendMode(ADD)
// Canvas 2D equivalent:
ctx.globalCompositeOperation = "lighter";
// Overlapping shapes: color = colorA + colorB (clamped)`,
      },
    ],
    concepts: [
      {
        name: "正弦调制",
        nameEN: "Sine Modulation",
        analogy: "想象把一根直线变成波浪——正弦函数就是「让任何东西有节奏地来回摆动」的万能工具",
        explanation:
          "将正弦函数叠加到轨道半径上，使元素的运动轨迹从圆形变为波浪形。频率（freq）控制波浪密度，振幅（amp）控制波浪高度，相位随时间推移产生动画。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用正弦调制轨道半径」来实现波浪形轨道，而不是「让圆变得扭曲」。",
      },
      {
        name: "加色混合",
        nameEN: "Additive Blending",
        analogy: "两束手电筒的光照在同一面墙上——重叠处更亮而不是更暗，和水彩叠色（减色）恰恰相反",
        explanation:
          "在 Canvas 2D 中设置 globalCompositeOperation = 'lighter' 实现。每个像素的 RGB 值直接相加（clamp 到 255），重叠越多越亮。这是所有「发光」「能量」「霓虹」效果的基础技术。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「用 Additive Blending 实现发光叠加效果」——这是所有发光/能量粒子效果的核心技术关键词。",
      },
      {
        name: "公转与自旋",
        nameEN: "Orbit + Spin (Revolution vs Rotation)",
        analogy: "地球围太阳公转的同时自己也在自转——两种旋转叠加产生复杂的运动轨迹",
        explanation:
          "每个元素同时进行两种旋转：沿轨道的公转（orbit）由 layerRotationSpeed 控制，自身的自旋（spin）由 itemSpinSpeed 控制。两者速度比不同会产生截然不同的视觉节奏。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「公转速度 0.5，自旋速度 2」来精确控制运动节奏。",
      },
      {
        name: "P5.js 到 Canvas 2D 转译",
        nameEN: "P5.js to Canvas 2D Translation",
        analogy: "把中文翻译成英文——语法不同但表达的意思一样",
        explanation:
          "P5.js 的 push/pop → Canvas 的 save/restore；beginShape/vertex → beginPath/lineTo；blendMode(ADD) → globalCompositeOperation='lighter'；lerpColor() → 手写 RGB 插值。掌握这套对照表就能将任何 P5 作品移植到原生 Canvas。",
        whyItMatters:
          "知道这个词后，你就能对 AI 说「把这个 P5.js sketch 转译为原生 Canvas 2D」，而不需要在项目里引入 P5 库。",
      },
    ],
    applications: [
      { field: "生成艺术", examples: "轨道运动系统、粒子花园、动态曼陀罗图案" },
      { field: "音乐可视化", examples: "频谱驱动的轨道粒子、节拍同步的发光环" },
      { field: "UI 动效", examples: "加载动画、品牌动态图标、过渡效果" },
      { field: "数据可视化", examples: "径向数据流图、层次关系动态展示" },
    ],
    keyInsight:
      "Sine Orbit 展示了生成艺术的一个经典范式：简单规则（圆形轨道 + 正弦波 + 旋转）× 多层叠加 × 加色混合 = 复杂的有机视觉系统。从 P5.js 转译到原生 Canvas 2D 的过程也揭示了一个重要认知：创意编程框架只是语法糖，底层的绘图原语（路径、变换、混合模式）才是真正需要理解的东西。",
  },
};
