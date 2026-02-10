import type { ShaderType } from "../components/Sidebar";

export interface PipelineStep {
  step: string;
  title: string;
  description: string;
  glsl?: string;
}

export interface Concept {
  name: string;
  nameEN: string;
  analogy: string;
  explanation: string;
  whyItMatters: string;
}

export interface Application {
  field: string;
  examples: string;
}

export interface ShaderGuide {
  id: ShaderType;
  title: string;
  subtitle: string;
  oneLiner: string;
  whatYouSee: string;
  pipeline: PipelineStep[];
  concepts: Concept[];
  applications: Application[];
  keyInsight: string;
}

export const shaderGuides: Record<ShaderType, ShaderGuide> = {
  flowfield: {
    id: "flowfield",
    title: "Flow Field",
    subtitle: "向量场可视化",
    oneLiner: "用噪声生成「风向地图」，再让粒子沿着风向留下轨迹",
    whatYouSee:
      "想象气象台的风速图——颜色代表速度快慢（蓝→绿→黄→红），条纹代表风的流动轨迹。每个像素都在问：「这里的风往哪吹？」然后顺着风向往回看，采样噪声留下运动模糊的条纹。多个时间相位叠加，产生连续流动的动画效果。",
    pipeline: [
      {
        step: "01",
        title: "构建向量场",
        description:
          "用 FBM 噪声生成一个「势场」（potential field），然后计算它的旋度（curl）得到无散度的向量场。就像气压图→风向：高压流向低压，旋度确保风不会凭空消失或产生。加上纬向基础流（zonal flow）模拟地球大气环流。",
        glsl: "vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);\nvec2 combined = flow * 0.5 + curl * turbulence;",
      },
      {
        step: "02",
        title: "伪 LIC 平流",
        description:
          "LIC（线积分卷积）的简化版：不是真的沿流线积分，而是用两个交替的时间相位模拟。像拍两张长曝光照片，一张刚开始曝光，另一张快结束，然后混合——产生连续流动感且防止轨迹无限拉长。",
        glsl: "vec2 p1 = p - velocity * phase1 * streakLength;\nfloat streaks = mix(noise1, noise2, blend);",
      },
      {
        step: "03",
        title: "速度映射色彩",
        description:
          "计算向量场的模长（速度），用科学热力图映射颜色：深蓝（静止）→青色（微风）→绿色（温和）→黄色（强劲）→红色（湍流）→白色（极端）。smoothstep 实现平滑过渡，比 linear 插值更自然。",
        glsl: "float speedNorm = smoothstep(0.0, 2.5, speed);\nvec3 baseColor = getHeatmapColor(speedNorm);",
      },
      {
        step: "04",
        title: "条纹强度调制",
        description:
          "低速区域显示平滑色块（云彩般），高速区域显示明显条纹（流动感）。用 speedNorm 控制条纹的混合强度——这让静态区和动态区有层次对比，就像卫星云图中静止的高压带 vs 旋转的台风眼。",
        glsl: "float streakIntensity = smoothstep(0.1, 0.5, speedNorm);\nfinalColor = baseColor * (0.7 + 0.6 * streaks * streakIntensity);",
      },
      {
        step: "05",
        title: "地形遮罩 + 网格叠加",
        description:
          "用低频噪声阈值模拟「陆地」，深色遮罩产生地图感。叠加坐标网格线（经纬度风格）增强科学可视化氛围。最后加暗角聚焦视线中心，像真实的雷达屏幕或科研仪表盘。",
        glsl: "float landMask = smoothstep(0.55, 0.56, landNoise);\nfinalColor += vec3(0.3) * grid * gridOpacity;",
      },
    ],
    concepts: [
      {
        name: "向量场",
        nameEN: "Vector Field",
        analogy:
          "想象一张满是小箭头的图——每个位置都有一个箭头表示「这里应该往哪个方向走、走多快」。风速图、洋流图、电场线、磁场线都是向量场。",
        explanation:
          "数学上是一个函数 F: ℝ² → ℝ²，输入坐标 (x, y)，输出向量 (vx, vy)。GPU 可以高效并行计算每个像素位置的向量，用颜色或箭头可视化。",
        whyItMatters:
          "流体模拟、粒子系统、路径规划的核心数据结构。游戏中的风场影响树叶飘动，气象预报用它预测台风路径，电影 VFX 用它引导烟雾/火焰/魔法粒子流动。",
      },
      {
        name: "旋度场",
        nameEN: "Curl of a Field",
        analogy:
          "旋度描述「旋转倾向」。把小风车放在向量场中——风车转得快说明旋度大。直线吹的风旋度为零，漩涡中心旋度最大。",
        explanation:
          "旋度是向量场的导数：curl(F) = (∂Fy/∂x - ∂Fx/∂y)。对势场求旋度能得到无散度的向量场——确保流体不可压缩，质量守恒。",
        whyItMatters:
          "物理正确的流体模拟必须满足 ∇·v = 0（不可压缩）。旋度场天然满足这点，避免了求解复杂的 Navier-Stokes 方程，是实时流体效果的捷径。",
      },
      {
        name: "LIC 算法",
        nameEN: "Line Integral Convolution",
        analogy:
          "想象在河里倒一桶白色染料，长曝光拍摄——静水区模糊成圆点，急流区拉成长条纹。LIC 就是「数学版的长曝光摄影」，沿流线卷积纹理产生流动感。",
        explanation:
          "沿向量场的流线积分噪声纹理：∫ noise(p(t)) dt。本 shader 用双相位伪 LIC——两个时间相位的噪声混合，避免真正积分的计算成本。",
        whyItMatters:
          "NASA、NOAA 等科研机构的标准流场可视化方法。一张静态图就能展示复杂的流动模式，比箭头图更直观、比粒子系统更清晰。",
      },
      {
        name: "科学色彩映射",
        nameEN: "Scientific Color Map",
        analogy:
          "不是「好看的渐变」而是「准确的渐变」。彩虹色在数据可视化中是禁忌（黄绿色亮度太近），科学热力图用感知均匀的色彩序列——每个颜色步进代表相同的数值变化。",
        explanation:
          "本 shader 用 6 色梯度：蓝（冷/慢）→青→绿→黄→红（热/快）→白（极端）。smoothstep 实现感知均匀的过渡，避免线性插值的色带伪影。",
        whyItMatters:
          "糟糕的配色会误导数据解读。科学可视化领域有专门研究（如 Viridis、Plasma 调色板），确保色盲友好、灰度打印可辨、感知线性。",
      },
    ],
    applications: [
      { field: "气象/海洋", examples: "风速图、洋流可视化、台风路径预测、污染物扩散模拟" },
      { field: "流体力学", examples: "CFD 仿真结果展示、涡流分析、湍流研究" },
      { field: "数据可视化", examples: "网络流量、社交网络传播、人群运动、交通流" },
      { field: "游戏/VFX", examples: "魔法护盾能量流、水流/岩浆表面、粒子引导场" },
    ],
    keyInsight:
      "向量场可视化的本质是「让看不见的流动变得可见」。自然界的流动（风、水、热）本身无色透明，我们通过「示踪粒子」（烟、染料）观察它。数字世界中，噪声纹理就是虚拟的示踪剂，LIC 就是虚拟的长曝光相机——用纯数学复现物理世界的观测手段。",
  },

  isometric: {
    id: "isometric",
    title: "Isometric Flow",
    subtitle: "动态方块网格",
    oneLiner: "让摄像机射出无数条光线，每条光线跳着格子找「哪里有方块」",
    whatYouSee:
      "想象你站在一个无限大的棋盘上空，棋盘上随机放着一些会浮动的方块。你的视线就像一束激光——从你的眼睛射出，一格一格地跳着往前查看：「这格有方块吗？没有？下一格。有？那就画出来。」每个像素都射出一条这样的光线，最终拼成了你看到的等距视角方块流。",
    pipeline: [
      {
        step: "01",
        title: "设置摄像机",
        description:
          "想象你在用无人机拍摄——先确定无人机的位置（距离 + 角度）和朝向。鼠标控制旋转角度，摄像机围绕原点运动。setup_camera 构建了一套「相机坐标系」，让你能从任意角度发射光线。",
        glsl: "ro = vec3(\n  camDist * cos(rotX) * cos(rotY),\n  camDist * sin(rotY),\n  camDist * sin(rotX) * cos(rotY)\n);",
      },
      {
        step: "02",
        title: "DDA 射线步进",
        description:
          "DDA 是「数字微分分析器」——一种高效的格子跳跃算法。不是慢悠悠一小步一小步走，而是每次直接跳到下一个格子边界。就像走迷宫时只在交叉路口停下判断，而不是每走一厘米都停下来。",
        glsl: "vec3 sideDist = (sign(rd) * (mapPos - ro)\n  + (sign(rd) * 0.5 + 0.5) * size)\n  * deltaDist / size;",
      },
      {
        step: "03",
        title: "程序化方块生成",
        description:
          "每个格子用 hash 函数算出一个随机种子，再用波浪函数（sin/cos 组合）决定是否存在方块。波浪在时间和空间中传播，产生动态的出现/消失动画。鼠标附近的扰动让方块对交互作出反应。",
        glsl: "float wave = sin(cellPos.x * 0.15 + g_time * 0.8)\n  * cos(cellPos.z * 0.12 + g_time * 0.6);\nfloat exists = smoothstep(0.8, 1.2, activation);",
      },
      {
        step: "04",
        title: "AABB 碰撞检测",
        description:
          "射线可能穿过这个格子但不一定碰到方块（格子 2.5 单位、方块 1.5 单位）。用 AABB（轴对齐包围盒）算法计算射线与方块的精确交点。这比三角形求交快得多，是体素引擎的标准做法。",
        glsl: "vec3 tN = min(t1, t2);\nvec3 tF = max(t1, t2);\nfloat tNear = max(max(tN.x, tN.y), tN.z);\nif (tNear < tFar && tFar > 0.0) hit = true;",
      },
      {
        step: "05",
        title: "光照 + 雾",
        description:
          "用法线（碰撞面的朝向）计算简单的漫反射光照——向上的面更亮（环境光），侧面根据与光源夹角变暗。距离摄像机越远，雾的混合比例越高，产生自然的景深消失效果。",
        glsl: "float diff = max(dot(normal, sunDir), 0.0);\nfloat fogFactor = smoothstep(fogStart, fogEnd, dist);\ncolor = mix(finalCol, fogColor, fogFactor);",
      },
    ],
    concepts: [
      {
        name: "DDA 算法",
        nameEN: "Digital Differential Analyzer",
        analogy:
          "你要从家走到学校，可以每走 1 米停下看「我现在在哪个街区」，也可以直接走到下一个街区边界再停下。DDA 是后者——每次跳到下一个「格子边界」，跳过格子内部的所有点。",
        explanation:
          "DDA 预计算 deltaDist（光线前进一个格子宽度需要的步进距离），每次选择 x/y/z 三个方向中最近的边界跳过去。这让射线穿越体素网格从 O(n) 优化到 O(格子数)。",
        whyItMatters:
          "没有 DDA，体素渲染就是暴力循环——60 次迭代覆盖 150 单位距离（每次 2.5 单位）。DDA 让 Minecraft、体素引擎、医学 CT 扫描实时可行。",
      },
      {
        name: "AABB 碰撞",
        nameEN: "Axis-Aligned Bounding Box",
        analogy:
          "判断一条线是否穿过盒子：把盒子的六个面当作「进入时间 tN」和「离开时间 tF」。如果「进入时间 < 离开时间」且「还没离开就已经到了」，那就是碰撞了。",
        explanation:
          "用射线方程 P = O + t*D，算出与盒子三对平行面的交点时间，取最大的进入时间和最小的离开时间。如果 tNear < tFar 且 tFar > 0，射线击中盒子。",
        whyItMatters:
          "AABB 只需 6 次除法 + 几次 min/max，比三角形求交快 10 倍。是游戏物理、包围盒层级（BVH）、体素引擎的基础组件。",
      },
      {
        name: "等距投影",
        nameEN: "Isometric Projection",
        analogy:
          "3D → 2D 有两种方法：透视（近大远小、符合人眼）和等距（平行线永不相交、像工程图纸）。等距视角把摄像机拉远 + 缩小 FOV，模拟正交投影效果。",
        explanation:
          "真正的等距投影是正交相机，但这里用透视相机 + 大距离（80 单位）+ 小 FOV（zoom = 3.5）来近似。rotX = 45° + rotY = ~30° 产生经典的等轴测游戏视角。",
        whyItMatters:
          "《纪念碑谷》《Hades》《文明》等游戏的视觉语言。等距视角保留 3D 信息但去除透视扭曲，既直观又美观，特别适合策略/解谜游戏。",
      },
      {
        name: "程序化生成",
        nameEN: "Procedural Generation",
        analogy:
          "不是美术师一个个放方块，而是写一个规则：「用坐标算 hash，hash > 0.8 的位置放方块」。换个种子，整个世界完全不同，但不需要存储任何数据。",
        explanation:
          "hash(cellPos) 产生确定性随机数，sin/cos 波浪函数叠加产生时空动画。每个格子独立计算是否存在，无需全局数组——无限世界只占常数内存。",
        whyItMatters:
          "《Minecraft》《无人深空》的核心技术。程序化生成让一个 100MB 游戏包含万亿种星球。GPU 实时生成比 CPU 预生成 + 存储更快。",
      },
    ],
    applications: [
      { field: "游戏", examples: "体素地形引擎、方块建造游戏、等轴测策略游戏、程序化关卡生成" },
      { field: "数据可视化", examples: "3D 柱状图、城市建筑密度图、实时网络流量可视化" },
      { field: "建筑/设计", examples: "等轴测工程图、参数化城市景观、可交互的 3D 平面图" },
      { field: "艺术/装置", examples: "生成艺术、媒体立面、互动展览中的动态几何场" },
    ],
    keyInsight:
      "DDA + 程序化生成 = 「无限细节零存储」。传统 3D 渲染需要把模型加载到内存，体素方法只需一个数学函数实时生成。这正是为什么《Minecraft》能有几乎无限的世界——不是存储了所有方块，而是存储了生成规则。",
  },

  vortex: {
    id: "vortex",
    title: "Vortex Portal",
    subtitle: "螺旋能量场",
    oneLiner: "通过极坐标变换 + 噪声函数，让平面像素「旋转」起来",
    whatYouSee:
      "屏幕上每一个像素都在问同一个问题：「我离中心多远？我的角度是多少？」然后根据答案去查一张「噪声地图」，找到自己该显示什么颜色。中心附近的像素查的位置旋转得更快，远处的慢一些——于是你看到了一个漩涡。",
    pipeline: [
      {
        step: "01",
        title: "笛卡尔 → 极坐标",
        description:
          "把每个像素从 (x, y) 转换为 (距离, 角度)。就像从「第三排第五个座位」变成「距舞台 8 米、方位角 30°」。这样后续的旋转操作只需要改角度值就行。",
        glsl: "float r = length(uv);\nfloat angle = atan(uv.y, uv.x);",
      },
      {
        step: "02",
        title: "螺旋扭曲",
        description:
          "离中心越近，角度偏移越大 (1/r)。想象把一叠纸戳一根筷子旋转——中心转得最快、边缘几乎不动。这就产生了漩涡的「吸入感」。",
        glsl: "float theta = angle + (1.0/(r+0.1)) * twist\n  - iTime * rotationSpeed;",
      },
      {
        step: "03",
        title: "噪声采样",
        description:
          "用扭曲后的坐标去查 FBM 噪声。FBM 像叠加多层云彩——第一层是大团的云，第二层加细节纹理，第三层加更细的毛边。5 层叠加后得到丰富的等离子体纹理。",
        glsl: "float n = fbm(spiralUV + vec2(iTime * 0.1));",
      },
      {
        step: "04",
        title: "二次域变形",
        description:
          "用第一次的噪声结果去扰动坐标，再做一次噪声采样。这是「用噪声扭曲噪声」，让纹理从规律的云彩变成混沌的等离子体。",
        glsl: "float n2 = fbm(spiralUV + n * 2.0);",
      },
      {
        step: "05",
        title: "颜色映射 + 后处理",
        description:
          "噪声值 0→1 对应两种颜色的渐变混合。中心叠加 1/r² 的辉光，边缘加暗角遮罩。最后用 1-e^(-x) 做色调映射，防止过曝。",
        glsl: "vec3 col = mix(uColor1, uColor2, n2);\ncol = 1.0 - exp(-col * 1.5);",
      },
    ],
    concepts: [
      {
        name: "噪声函数",
        nameEN: "Simplex Noise",
        analogy: "像大自然的随机数生成器。普通 random() 是电视雪花——尖锐、无关联。Simplex Noise 是连绵的山丘——平滑、连续，相邻点的值接近。",
        explanation:
          "由 Ken Perlin 发明（获奥斯卡技术奖）。它在 N 维空间中生成平滑的伪随机值，同样的输入永远返回同样的输出，但宏观上看起来完全自然。",
        whyItMatters: "几乎所有程序化视觉效果的基础。没有它，就没有逼真的云、火焰、地形。",
      },
      {
        name: "分形布朗运动",
        nameEN: "FBM (Fractional Brownian Motion)",
        analogy:
          "看一条海岸线：远看是大弯，近看有小湾，再近看还有石块的凹凸。FBM 就是把多个「缩放级别」的噪声叠加，从大轮廓到细节逐层丰富。",
        explanation:
          "每一层（octave）频率翻倍、振幅减半。5 层叠加后，同时拥有宏观形态和微观细节。这正是自然界分形结构的数学描述。",
        whyItMatters: "单层噪声太单调。FBM 赋予纹理「自相似性」——不管放大到哪个尺度都有细节，和真实的云朵、地形一样。",
      },
      {
        name: "极坐标系",
        nameEN: "Polar Coordinates",
        analogy:
          "笛卡尔坐标说「往右 3 步、往上 4 步」，极坐标说「朝 53° 方向走 5 步」。描述旋转和辐射形状时，极坐标天然适配。",
        explanation:
          "将 (x, y) 转为 (r, θ)。任何关于中心对称的操作（旋转、径向波纹）在极坐标下只需对 θ 或 r 做简单加减。",
        whyItMatters: "漩涡效果的核心。没有极坐标转换，要实现「越靠近中心旋转越快」会复杂得多。",
      },
      {
        name: "域变形",
        nameEN: "Domain Warping",
        analogy:
          "想象在一张棋盘格纸上滴一滴水——纸张膨胀变形，直线变成了曲线。域变形就是在「查地图之前先扭曲坐标」，让规则的图案变得有机、流动。",
        explanation:
          "不是修改输出的颜色，而是修改「去哪里查颜色」。f(p) → f(p + noise(p))。同一张噪声图，扭曲前是云，扭曲后是等离子体。",
        whyItMatters: "用最少的代码产生最大的视觉复杂度。一个简单的噪声 + 域变形，就能模拟火焰、烟雾、岩浆。",
      },
    ],
    applications: [
      { field: "游戏特效", examples: "传送门、魔法阵、能量护盾、技能释放光效" },
      { field: "电影 VFX", examples: "星际穿越虫洞、奇异博士传送门、黑洞吸积盘" },
      { field: "音乐可视化", examples: "音频驱动的参数让漩涡随节拍律动" },
      { field: "UI/品牌", examples: "加载动画、Hero Section 背景、产品发布光效" },
    ],
    keyInsight:
      "整个漩涡效果只有一个核心技巧：在极坐标下，让内圈的角度偏移量大于外圈。自然界中的漩涡（龙卷风、星系旋臂、水流漩涡）都遵循相同的数学规律。",
  },

  lumina: {
    id: "lumina",
    title: "Lumina Flow",
    subtitle: "域变形流体",
    oneLiner: "三层噪声互相扰动，「用混沌扭曲混沌」产生流体质感",
    whatYouSee:
      "你看到的像油画、极光、或大理石纹理的效果，其实是三层域变形的结果。第一层噪声说「往这边偏」，第二层根据偏移后的位置再说「不对，往那边偏」，第三层再偏一次。三次扰动之后，原本规则的噪声图案变成了复杂的流体运动。",
    pipeline: [
      {
        step: "01",
        title: "基础坐标",
        description:
          "将像素坐标归一化为 0→1，再乘以缩放系数 (u_zoom)。就像决定你在看多大范围的地图——zoom 大看细节，zoom 小看全局。",
        glsl: "vec2 p = uv * u_zoom;",
      },
      {
        step: "02",
        title: "第一层变形 → q",
        description:
          "在基础坐标上做 FBM 噪声采样，得到一个二维偏移向量 q。q 描述了「这个位置应该往哪个方向歪」。",
        glsl: "q.x = fbm(p + vec2(0.0) + 0.05*t);\nq.y = fbm(p + vec2(5.2, 1.3) + 0.05*t);",
      },
      {
        step: "03",
        title: "第二层变形 → r",
        description:
          "用 q 偏移后的坐标再做 FBM 采样，得到 r。这里 u_warpStrength 控制扰动强度——强度高则更混沌，低则更平静。",
        glsl: "r.x = fbm(p + warp*q + vec2(1.7, 9.2) + 0.15*t);",
      },
      {
        step: "04",
        title: "最终采样 → f",
        description:
          "用 r 偏移后的坐标做最后一次 FBM，得到标量 f。这个 f 值决定了最终的颜色混合权重。三层叠加产生了远超单层噪声的复杂度。",
        glsl: "float f = fbm(p + u_warpStrength * r);",
      },
      {
        step: "05",
        title: "三色混合 + 余弦调色板",
        description:
          "基于 q 的长度混合 color1↔color2，基于 f 的值混合高光色 color3。再叠加余弦调色板产生虹彩/油膜质感。最终亮度由 f² 调制。",
        glsl: "color = mix(color, oilPalette, 0.3);\ncolor *= f * f * 2.5 + 0.5;",
      },
    ],
    concepts: [
      {
        name: "域变形",
        nameEN: "Domain Warping",
        analogy:
          "你要查字典里的「apple」，但有人把字典的页码顺序打乱了。你翻到的不是 apple 所在页，而是某个意外的词。域变形就是在「查颜色地图」之前，先扰动你的查询坐标。",
        explanation:
          "数学表达：f(p + g(p))，其中 g(p) 是另一个噪声函数。多层嵌套 f(p + g(p + h(p))) 产生层层递进的复杂度。每多一层，复杂度指数级增长。",
        whyItMatters:
          "域变形是 Shadertoy 和电影 VFX 中最常用的技巧之一。Inigo Quilez（Shadertoy 创始人）的经典论文让这个技术广为人知。",
      },
      {
        name: "柏林噪声",
        nameEN: "Perlin Noise",
        analogy:
          "在一张大网格的每个交叉点放一个小箭头（随机方向），然后计算任意点受周围四个箭头影响的「推力」。结果是一张到处平滑过渡的灰度图。",
        explanation:
          "1983 年 Ken Perlin 发明，用于电影 TRON。核心是在整数网格点定义随机梯度，然后对中间位置做平滑插值。这里用的是简化版本（基于 fract+sin 的伪随机）。",
        whyItMatters:
          "所有程序化纹理的祖先。地形高度图、木纹、大理石、火焰——几乎所有自然纹理都从 Perlin Noise 开始。",
      },
      {
        name: "余弦调色板",
        nameEN: "Cosine Palette",
        analogy:
          "普通渐变是 A→B 的直线。余弦调色板是 A→B→C→D 的平滑波浪。一个简单的公式就能产生彩虹、金属、肌肤等各种色调过渡。",
        explanation:
          "公式：color = a + b * cos(2π * (c*t + d))。四个参数控制基调、对比度、色相漂移和相位。Inigo Quilez 经典公式，4 个 vec3 参数定义无限种调色板。",
        whyItMatters:
          "用 4 行代码替代手工绘制的渐变贴图。实时可调、参数化、且天然平滑。生成艺术和 Shadertoy 社区的标配工具。",
      },
      {
        name: "分形布朗运动",
        nameEN: "FBM",
        analogy:
          "弹钢琴时同时按下 C2（低音）、C3（中音）、C4（高音）——每高一个八度音量减半。FBM 就是噪声的「和弦」：低频给大形状，高频给小细节，6 层叠出丰富纹理。",
        explanation:
          "循环中 st *= 2.0 (频率翻倍)、amplitude *= 0.5 (振幅减半)。6 个 octave 意味着最细的层是最粗层的 1/64 大小、1/64 强度。",
        whyItMatters:
          "FBM 的层数直接决定纹理的「分辨率」。太少层太光滑，太多层 GPU 吃不消。6 层是性能与细节的黄金平衡点。",
      },
    ],
    applications: [
      { field: "程序化纹理", examples: "大理石、木纹、岩石、布料——不需要贴图文件，数学函数实时生成" },
      { field: "流体模拟", examples: "烟雾、墨水扩散、天气云图。域变形能以极低成本近似 Navier-Stokes 方程" },
      { field: "生成艺术", examples: "NFT 艺术、互动装置、音乐可视化。参数化 = 无限变体" },
      { field: "影视后期", examples: "过渡转场、背景氛围层、标题序列的有机动态底纹" },
    ],
    keyInsight:
      "域变形的本质是「用函数的输出重新定义函数的输入」——这是一种递归思想。正如自然界的复杂性来自简单规则的反复叠加（细胞分裂、河流分支、闪电分叉），三层域变形用最简单的噪声函数就涌现出了极度复杂的流体形态。",
  },

  tunnel: {
    id: "tunnel",
    title: "Warp Tunnel",
    subtitle: "虫洞隧道",
    oneLiner: "128 步光线行军，一步步「走进」噪声构建的扭曲隧道",
    whatYouSee:
      "你像坐在一辆飞船里，穿越一条无限深的扭曲隧道。隧道壁上有脉动的纹理，远处有一颗光球沿螺旋路径飘荡，照亮了周围的空间。越靠近隧道壁或光球，画面越亮——这不是「画上去的」，而是 128 次数学查询累积出的体积光效果。",
    pipeline: [
      {
        step: "01",
        title: "光线发射",
        description:
          "从相机向每个像素方向发射一条射线。射线的方向就是归一化后的像素坐标 (u, v)。然后沿射线一步步前进（d += stepSize），每一步都在三维空间中查询「这里有东西吗？」",
        glsl: "vec3 p = vec3(uv * d, d + t);",
      },
      {
        step: "02",
        title: "空间扭曲",
        description:
          "在每一步的位置上，用旋转矩阵扭曲 XY 平面。扭曲量随 Z 轴深度和时间变化。这让原本笔直的隧道变成了螺旋形——就像拧麻花一样，越往深处拧得越紧。",
        glsl: "vec4 cv = cos(angle + vec4(0, 33, 11, 0));\np.xy *= mat2(cv.x, cv.y, cv.z, cv.w);",
      },
      {
        step: "03",
        title: "隧道几何 + 噪声位移",
        description:
          "隧道壁是「距 Y=0 平面 ±width 的两个镜像平面」。然后用 6 层噪声（频率 0.8→25.6）扰动这个距离值——噪声让平整的墙壁变成了崎岖的岩洞。噪声的湍流项 (cos(p.yzx)) 让纹理随时间流动。",
        glsl: "s = uWidth - abs(p.y);\n// 6 octaves: a = 0.8, 1.6, 3.2...\ns -= abs(dot(sin(p*a), vec3(0.6))) / a;",
      },
      {
        step: "04",
        title: "自适应步进",
        description:
          "每步的前进距离取决于「离最近表面多远」。离墙壁远就大步走（效率高），靠近就小步走（精度高）。同时考虑光球距离，确保不会穿过光球。这是 Sphere Tracing 的核心思想。",
        glsl: "float stepSize = min(\n  0.03 + 0.2*abs(s),  // 噪声墙壁距离\n  max(0.5*e, 0.01)    // 光球距离\n);",
      },
      {
        step: "05",
        title: "体积光累积 + 色调映射",
        description:
          "每一步累积 1/(步长 + 距离)。这意味着越靠近表面，贡献越大——128 步累积后产生了柔和的体积光效果。光球附近用 color2，远处用 color1。最后用 tanh 压缩亮度到 0→1。",
        glsl: "float glow = 1.0 / (stepSize + eClamp * 3.0);\ncol += mix(uColor1, uColor2, orbInfluence) * glow;",
      },
    ],
    concepts: [
      {
        name: "光线行军",
        nameEN: "Raymarching",
        analogy:
          "想象你在浓雾中拿着手电筒。你不能一眼看到远处，只能一步步往前试探。每一步你问「这里有障碍物吗？离最近的东西多远？」然后安全地往前走那么远。128 步之后，你就「画」出了整个场景。",
        explanation:
          "不同于三角形光栅化（告诉 GPU 画哪些三角形），Raymarching 是从相机发射射线，沿射线步进并查询距离场函数。每步步长 = 到最近表面的距离（Sphere Tracing），保证不会穿过物体。",
        whyItMatters:
          "Raymarching 能渲染传统光栅化无法高效处理的形状：分形、噪声位移表面、体积效果。ShaderToy 上 90% 的 3D 效果都用这个技术。",
      },
      {
        name: "体积光累积",
        nameEN: "Volumetric Accumulation",
        analogy:
          "在雾天看路灯：灯本身很亮，但周围有一圈柔和的光晕。这是因为雾中的每个微粒都散射了一点光。体积光累积就是模拟这个过程——沿着射线上每个位置都「收集」一点亮度。",
        explanation:
          "经典公式：color += brightness / (distance_to_surface)。每步贡献与距离成反比。128 步累积后，表面附近贡献最多（因为步长最小、值最大），远处衰减。这产生了柔和的辉光而非硬边。",
        whyItMatters:
          "这是 AE 中「Light Rays」「Glow」等效果的底层原理。理解它就能用 shader 实现几乎所有后期光效，且性能远超基于像素的后处理。",
      },
      {
        name: "噪声位移",
        nameEN: "Noise Displacement",
        analogy:
          "用砂纸打磨一根光滑的水管——表面变得凹凸不平。噪声位移就是用噪声函数「打磨」数学定义的光滑表面。隧道原本是两面平行的墙，加上噪声后变成了岩洞。",
        explanation:
          "对距离场函数做 s -= noise(p)。多层叠加（0.8→25.6）从大尺度到小尺度逐层添加粗糙度。湍流项 cos(p.yzx) 让噪声在三个轴向交叉扰动，产生更自然的流动感。",
        whyItMatters:
          "几乎所有自然表面（岩石、云、水面）都可以用「简单几何 + 噪声位移」建模。这是程序化建模的基础技巧。",
      },
      {
        name: "Sphere Tracing",
        nameEN: "Sphere Tracing",
        analogy:
          "你在陌生的房间里闭着眼走路。每一步前，你伸出手摸一圈，确认最近的墙在 2 米外。那你就安全地走 2 米。下一步再摸，最近的只有 0.3 米了，就小心地走 0.3 米。这就是 Sphere Tracing——步长 = 安全距离。",
        explanation:
          "给定点 p 的距离场值 d（到最近表面的距离），沿射线前进 d 的距离是安全的。这比固定步长高效得多——空旷处大步飞跃，表面附近精确逼近。",
        whyItMatters:
          "让 Raymarching 从 O(n) 暴力搜索变成自适应搜索。没有它，128 步只能覆盖很短的距离；有了它，128 步就能看到整个无限隧道。",
      },
    ],
    applications: [
      { field: "游戏/电影 VFX", examples: "虫洞穿越、超空间跳跃、深渊场景、隧道飞行序列" },
      { field: "动态背景", examples: "网站 Hero Section、直播背景、演示文稿动态底图、屏保" },
      { field: "AE 等效替代", examples: "CC Light Tunnel、Particular 隧道、Trapcode Form 体积光" },
      { field: "音乐可视化", examples: "音频驱动 speed/twist/noise，低音 → 隧道宽度脉动" },
    ],
    keyInsight:
      "这段代码用 128 次简单的距离查询，从零构建出了一个完整的 3D 隧道场景——没有三角形、没有模型、没有贴图。整个「世界」存在于一个数学函数里。这就是程序化渲染的哲学：用算法描述世界，而非用数据存储世界。",
  },

  aura: {
    id: "aura",
    title: "Noise Aura",
    subtitle: "噪声光晕",
    oneLiner: "去掉隧道几何，只保留体积光累积 + 噪声场 = 浮动星云",
    whatYouSee:
      "深色空间中漂浮着一团发光的星云/气体。两颗光球在其中螺旋运动，照亮了周围的噪声云层。没有明确的「物体」——所有的亮度都来自光线穿过噪声密度场时的逐步累积。暗处是稀薄的区域，亮处是噪声密度高的区域。",
    pipeline: [
      {
        step: "01",
        title: "双光球系统",
        description:
          "两颗光球在三维空间中以不同频率的正弦/余弦轨迹螺旋运动。它们是场景的唯一「光源」——没有方向光或环境光，所有照明都来自点光源的距离衰减。",
        glsl: "float e1 = orb(p, t) - 0.1;\nfloat e2 = orb2(p, t) - 0.1;\nfloat e = min(e1, e2);",
      },
      {
        step: "02",
        title: "空间旋转",
        description:
          "整个噪声场绕 XZ 平面缓慢旋转。这用的是标准 2D 旋转矩阵（不是隧道中的「伪旋转」）。慢速旋转让星云看起来在漂浮和翻转。",
        glsl: "float ca = cos(angle), sa = sin(angle);\np.xz = vec2(ca*p.x - sa*p.z,\n            sa*p.x + ca*p.z);",
      },
      {
        step: "03",
        title: "体积噪声密度场",
        description:
          "5 层噪声叠加构建三维密度场。和隧道的区别是：隧道用噪声修改几何表面，这里噪声本身就是「物质」。减去 0.4 的阈值在密度场中挖出空洞——亮区和暗区交织形成星云形态。",
        glsl: "for (float a = 1.0; a < 32.0; a *= 2.0)\n  s += abs(dot(sin(p * a * uScale),\n    vec3(0.6))) / a;\ns = s * uDensity - 0.4;",
      },
      {
        step: "04",
        title: "自适应行军 + 光累积",
        description:
          "步长由噪声密度和光球距离共同决定。密度高的区域步长小（更精确地采样），空旷处步长大（跳过空区域）。每步累积 1/(步长 + 光球距离)——同时考虑噪声密度和光照强度。",
        glsl: "float glow = 1.0 / (stepSize + eClamp * 2.0);\ncol += mix(uColor1, uColor2, orbMix) * glow;",
      },
      {
        step: "05",
        title: "色调映射",
        description:
          "tanh 将无限范围的累积值压缩到 0→1。brightness 参数在映射前缩放累积值——小值产生暗沉的深空感，大值产生明亮的星云感。",
        glsl: "col *= uBrightness / 12.0;\nvec3 e2x = exp(2.0 * clamp(col, -10., 10.));\ncol = (e2x - 1.0) / (e2x + 1.0);",
      },
    ],
    concepts: [
      {
        name: "体积渲染",
        nameEN: "Volume Rendering",
        analogy:
          "X 光片是怎么拍的？X 射线穿过身体，骨头吸收多、肌肉吸收少、空气几乎不吸收。最终胶片上的亮度 = 沿路径的总吸收量。体积渲染完全一样——光线穿过密度场，逐步累积颜色。",
        explanation:
          "沿射线离散采样密度场 ρ(p)，每个采样点的贡献 = 密度 × 光照 × 步长。累积所有贡献得到最终颜色。这是医学影像（CT/MRI）和天体物理可视化的核心算法。",
        whyItMatters:
          "能渲染没有明确表面的现象：烟雾、云、火焰、星云、光束。传统光栅化无法处理这类半透明、散射的介质。",
      },
      {
        name: "密度场",
        nameEN: "Density Field",
        analogy:
          "想象一瓶没摇匀的果汁——底部浓、上面稀，中间有渐变。密度场就是在三维空间中定义每个点的「浓度」。噪声函数产生的密度场看起来就像自然的云雾。",
        explanation:
          "用数学函数 ρ(x,y,z) 定义空间中每个点的密度。这里用多层噪声构建：基础密度 = Σ|sin(p*a)|/a，减去阈值 0.4 创造疏密对比。uDensity 和 uScale 分别控制密度强度和空间频率。",
        whyItMatters:
          "密度场是体积渲染的输入。不同的密度场产生完全不同的视觉：平滑噪声 = 云，尖锐噪声 = 烟，周期噪声 = 布料。",
      },
      {
        name: "点光源衰减",
        nameEN: "Point Light Attenuation",
        analogy:
          "站在篝火旁：脸被照得很亮，退后两步亮度就暗了很多，退后十步几乎看不到光。亮度和距离的平方成反比。",
        explanation:
          "经典公式：intensity = 1 / (distance² + ε)。ε 防止除以零。这里用 exp(-e*0.25) 的指数衰减做颜色混合——光球附近用暖色，远处用冷色，产生自然的空间深度感。",
        whyItMatters:
          "物理正确的光照衰减是让 3D 场景「可信」的关键。没有衰减，场景看起来平坦；加上衰减，空间感立即出现。",
      },
      {
        name: "色调映射",
        nameEN: "Tone Mapping",
        analogy:
          "人眼能看日光下的雪山（极亮）也能看星空（极暗），但显示器只有 0→255 的范围。色调映射就是「压缩动态范围」——把无限亮度映射到屏幕能显示的范围内，同时保留细节。",
        explanation:
          "tanh(x) 把 (-∞, +∞) 映射到 (-1, 1)。对于正值，小值几乎线性（保留暗部细节），大值压缩到 1 附近（防止过曝）。这是最简单的 HDR→LDR 转换。",
        whyItMatters:
          "体积光累积 128 步后值可能极大。没有色调映射，画面要么全白要么全黑。tanh/Reinhard/ACES 等映射让高动态范围场景在标准屏幕上正确显示。",
      },
    ],
    applications: [
      { field: "动态背景", examples: "网站 Hero、App 启动页、演示文稿——比渐变更有生命力的背景层" },
      { field: "AE 后期等效", examples: "Particular 星尘、CC Ball Action、Stardust 星云——一个 shader 替代多个插件" },
      { field: "文字特效", examples: "将噪声光场作为文字的 mask 或背景层，实现「文字从星云中浮现」的效果" },
      { field: "数据可视化", examples: "用密度场表示三维数据分布（气象、医学影像），光球作为交互探针" },
    ],
    keyInsight:
      "Warp Tunnel 和 Noise Aura 共享同一套底层技术（Raymarching + 噪声 + 体积累积），区别仅在于「有没有几何约束」。隧道有明确的墙壁边界，光晕没有。这说明体积渲染的威力：同一个算法框架，改变密度函数的定义，就能从隧道飞行变成星云漂浮。这也是为什么 AE/Nuke 中那么多看似不同的效果（光线、粒子、雾气）其实可以用同一个 shader 范式统一实现。",
  },

  neon: {
    id: "neon",
    title: "Neon Noise",
    subtitle: "霓虹噪声",
    oneLiner: "用噪声扭曲噪声，再用 HSV 色轮映射，产生迷幻色彩流",
    whatYouSee:
      "屏幕上流动着类似油彩、极光、或迷幻海报的抽象色彩。没有明确的物体轮廓，只有不断变换的色块和流动的纹理。色彩随时间旋转（色相变化），噪声随时间流动（坐标偏移），整个画面像液态的彩虹。",
    pipeline: [
      {
        step: "01",
        title: "第一层噪声 → 扰动向量",
        description:
          "在基础 UV 坐标上采样 FBM 噪声，得到一个标量值 n1。这个值将用于「扰动」坐标——就像在地图上标记「往东北方向偏移 n1 单位」。时间驱动坐标移动，让噪声图案随时间流动。",
        glsl: "vec2 movement = vec2(iTime * speed * 0.2, iTime * speed * 0.1);\nfloat n1 = fbm(uv * scale * 3.0 + movement);",
      },
      {
        step: "02",
        title: "域变形 → 扭曲坐标",
        description:
          "用第一层噪声值扰动 UV 坐标：uv' = uv + n1。这让原本规则的坐标网格变得扭曲。warpStrength 控制扭曲幅度——小值产生微妙的涟漪，大值产生剧烈的旋涡。",
        glsl: "vec2 distortedUV = uv + vec2(n1) * warpStrength;",
      },
      {
        step: "03",
        title: "第二层噪声 → 颜色基础",
        description:
          "在扭曲后的坐标上再做一次 FBM 采样，得到 n2。这是「用噪声扭曲噪声」——第一层定义流动模式，第二层定义颜色图案。双层叠加让纹理从简单的云彩变成复杂的湍流。",
        glsl: "float n2 = fbm(distortedUV * scale * 6.0 - movement);",
      },
      {
        step: "04",
        title: "HSV 色彩映射",
        description:
          "将 n2 的 0→1 值映射为色相环（H）。hueShift 控制色相起点，n2*0.4 让不同区域显示不同颜色。时间驱动色相旋转（hue += time），产生彩虹轮换效果。饱和度和明度由参数控制。",
        glsl: "float hue = fract(hueShift + iTime * 0.1 + n2 * 0.4);\nvec3 col = hsv2rgb(vec3(hue, saturation, brightness));",
      },
      {
        step: "05",
        title: "对比度增强",
        description:
          "用 smoothstep(0.1, 0.9, col) 压缩中间色调，拉开明暗对比。这让颜色从柔和渐变变成更鲜明的色块分界——类似 Photoshop 的 Curves 调整，把灰蒙蒙的噪声变成霓虹般的纯色。",
        glsl: "col = smoothstep(0.1, 0.9, col);",
      },
    ],
    concepts: [
      {
        name: "域变形",
        nameEN: "Domain Warping",
        analogy:
          "想象一张印刷精美的地图，你把它泡在水里——纸张膨胀、收缩，原本的直线街道变成了波浪。域变形就是「在查地图之前先把坐标扭曲」，让规则图案变得有机流动。",
        explanation:
          "不修改输出颜色 f(p)，而是修改查询位置：f(p + noise(p))。单层变形产生涟漪，双层嵌套 f(p + noise(p + noise(p))) 产生湍流。这是 Inigo Quilez 2017 年文章让业界广泛采用的技巧。",
        whyItMatters:
          "一行代码产生指数级的视觉复杂度。同一张噪声贴图，不扭曲是云彩，扭曲一次是烟雾，扭曲两次是火焰/岩浆/迷幻效果。几乎所有 Shadertoy 热门作品都用这招。",
      },
      {
        name: "HSV 色彩空间",
        nameEN: "HSV Color Space",
        analogy:
          "RGB 像调料配方（多少红+绿+蓝），HSV 像描述颜色（是什么色、多鲜艳、多明亮）。色相（H）是色轮上的角度（红→橙→黄→…→紫），饱和度（S）是纯度（灰→彩），明度（V）是亮度（黑→亮）。",
        explanation:
          "色相 H ∈ [0,1] 映射到 360° 色轮，S 和 V ∈ [0,1]。hsv2rgb 将 HSV 转为 RGB 显示。程序化生成色彩时，HSV 比 RGB 直观得多——H 随时间线性增加就产生彩虹循环。",
        whyItMatters:
          "动态配色的标配。想让颜色随音乐节拍变化？改 H。想做褪色/灰度转场？降 S。想实现日夜循环？调 V。用 RGB 实现这些需要复杂的插值公式，HSV 只需改一个值。",
      },
      {
        name: "分形布朗运动",
        nameEN: "FBM (Fractional Brownian Motion)",
        analogy:
          "看一幅山水画：远看是山的轮廓（大尺度），近看有树林纹理（中尺度），再近看树皮凹凸（小尺度）。FBM 就是叠加多个频率的噪声——从宏观形态到微观细节。",
        explanation:
          "循环中频率 × 2、振幅 × 0.5。4 层迭代意味着最细层是最粗层的 1/8 频率、1/8 振幅。累加后同时拥有大块形状和小细节。这是自相似分形的离散实现。",
        whyItMatters:
          "单层噪声太单调（纯云彩），FBM 赋予自然质感（岩石、水波、地形）。层数越多越真实，但 GPU 成本也越高。4 层是实时效果的甜点。",
      },
      {
        name: "对比度增强",
        nameEN: "Contrast Enhancement",
        analogy:
          "相机的对比度滑块：往右拉，暗处更黑、亮处更白，中间调被压缩。smoothstep 像 S 曲线——0.5 附近变化慢（保留渐变），0.1 和 0.9 附近变化快（锐化边缘）。",
        explanation:
          "smoothstep(0.1, 0.9, x) 将 [0,1] 映射为陡峭的 S 曲线。输入 0.1→0 输出 0（暗区纯黑），0.5→0.5（保留中间色），0.9→1 输出 1（亮区纯白）。这让柔和的噪声渐变变成鲜明的色块。",
        whyItMatters:
          "原始噪声往往灰蒙蒙的，不够「霓虹」。对比度增强让色彩跳出来。这是从「自然纹理」到「艺术效果」的关键一步——Photoshop 后期、电影调色、NFT 艺术都在做同样的事。",
      },
    ],
    applications: [
      { field: "动态背景", examples: "网站 Hero Section、App 启动页、PPT 背景——比渐变更生动，比视频更轻量" },
      { field: "音乐可视化", examples: "低音 → hueShift、高音 → warpStrength，音频反应式背景" },
      { field: "NFT 生成艺术", examples: "每个 token ID 作为 seed，生成唯一的色彩流——无限变体、零存储" },
      { field: "UI 特效", examples: "按钮 hover 背景、加载动画、文字特效底纹、扫光效果" },
    ],
    keyInsight:
      "这个 shader 只有 30 行核心代码，却包含了程序化生成的三大支柱：噪声（随机性）、域变形（有机性）、色彩映射（美学性）。改变参数就能从「深海极光」变成「赛博朋克」再变成「迷幻海报」——这正是参数化设计的威力：不是创作一个作品，而是定义一个作品空间。",
  },

  fluid: {
    id: "fluid",
    title: "Fluid Flow",
    subtitle: "流体流动",
    oneLiner: "双层域变形让噪声像液体一样流动、旋转、混合",
    whatYouSee:
      "屏幕上流淌着像墨水在水中扩散、或油彩在画布上融合的抽象图案。不同于单层域变形的简单涟漪，这里有更复杂的旋涡、湍流、和层次感——因为使用了「噪声 q 扰动坐标 → 噪声 r 再扰动 → 最终噪声 n」的三层嵌套结构。",
    pipeline: [
      {
        step: "01",
        title: "第一层域变形 → q 向量场",
        description:
          "在基础 UV 上采样两次 FBM，得到二维向量 q = (qx, qy)。这个向量场描述了「第一层的流动方向」。一个采样点用时间偏移，另一个用空间偏移，让两个分量不同步——产生旋转而非纯平移。",
        glsl: "vec2 q = vec2(\n  fbm(uv * scale + time * 0.1),\n  fbm(uv * scale + vec2(1.0))\n);",
      },
      {
        step: "02",
        title: "第二层域变形 → r 向量场",
        description:
          "用 q 扰动后的坐标再做两次 FBM 采样，得到 r。这是「用流动扰动流动」——第一层定义了大尺度的漩涡，第二层在漩涡内部添加小尺度的细节。时间参数略有不同（0.15 vs 0.1），让两层以不同速率旋转。",
        glsl: "vec2 r = vec2(\n  fbm(uv * scale + q + time * 0.15),\n  fbm(uv * scale + q)\n);",
      },
      {
        step: "03",
        title: "最终噪声采样 → n 标量场",
        description:
          "在双重扭曲后的坐标上做最后一次 FBM，得到标量 n。这个值包含了三层扰动的累积效果——宏观旋涡 + 中观湍流 + 微观噪声细节。相比单层变形，复杂度呈指数级增长。",
        glsl: "float n = fbm(uv * scale + r);",
      },
      {
        step: "04",
        title: "动态 HSV 色彩映射",
        description:
          "色相 H 由「时间 + 噪声值」共同决定，产生既流动又混沌的色彩变化。时间驱动整体色轮旋转（彩虹循环），噪声让不同区域偏移不同角度（局部色相变化）。hueSpeed 控制旋转快慢。",
        glsl: "float hue = fract(time * hueSpeed * 0.05 + n * 0.3);\nvec3 col = hsv2rgb(vec3(hue, saturation, brightness * n + 0.2));",
      },
      {
        step: "05",
        title: "幂律对比度增强",
        description:
          "用 pow(col, contrast) 调整伽马曲线。contrast > 1 压缩中间调、拉开明暗对比（高对比度），< 1 则相反（柔和渐变）。最后 × 1.4 提升整体亮度，让色彩更鲜艳。",
        glsl: "col = pow(col, vec3(contrast));\ncol *= 1.4;",
      },
    ],
    concepts: [
      {
        name: "多层域变形",
        nameEN: "Multi-Layer Domain Warping",
        analogy:
          "想象用搅拌棒搅拌一缸油漆：第一次搅拌产生大漩涡，第二次搅拌在漩涡内部产生小涡流。每多搅一次，图案就多一层复杂度。多层域变形就是数学版的「反复搅拌」。",
        explanation:
          "单层：f(p + noise(p))；双层：f(p + noise(p + noise(p)))；三层：f(p + noise(p + noise(p + noise(p))))。这里用两层 q 和 r，实际产生三层效果（q 是第一层扰动，r 是第二层，最终 n 是第三层）。",
        whyItMatters:
          "这是 Inigo Quilez 2017 年文章中展示的最强大技巧之一。单层变形产生的是「云彩」，双层变形产生「烟雾/墨水」，三层变形产生「火焰/岩浆/流体」。复杂度指数增长，但代码只线性增加。",
      },
      {
        name: "向量场与标量场",
        nameEN: "Vector Field vs Scalar Field",
        analogy:
          "标量场是「温度分布图」——每个位置一个数字（温度值）。向量场是「风速图」——每个位置一个箭头（方向 + 速度）。q 和 r 是向量场（描述流动方向），n 是标量场（描述颜色亮度）。",
        explanation:
          "q 和 r 是 vec2（二维向量），用于扰动坐标。n 是 float（标量），用于映射颜色。前者定义「流动的拓扑结构」，后者定义「视觉的最终呈现」。这是流体模拟的经典分离策略。",
        whyItMatters:
          "理解向量场 vs 标量场是掌握 shader 编程的分水岭。粒子系统、流体模拟、磁场可视化都基于向量场；颜色、密度、高度都基于标量场。掌握二者的转换就能实现各种复杂效果。",
      },
      {
        name: "时间相位差",
        nameEN: "Temporal Phase Shift",
        analogy:
          "两个时钟，一个快一个慢。快的转一圈时慢的才转大半圈——它们「相位不同步」。这产生了周期性的相对运动，就像行星的「逆行现象」或「莫尔纹」。",
        explanation:
          "q 用 time * 0.1，r 用 time * 0.15。两层以不同速率旋转，产生复杂的相对运动。当一层顺时针、另一层逆时针时，交界处产生剪切应力——这就是湍流的视觉化。",
        whyItMatters:
          "同步运动看起来机械、僵硬；相位差产生有机感。这是动画中的「次要动作」（secondary action）原理——主要角色停下时，衣服、头发还在摇摆。自然界的复杂运动都源于多层相位差的叠加。",
      },
      {
        name: "幂律对比度",
        nameEN: "Power-Law Contrast",
        analogy:
          "Photoshop 的 Curves 工具：直线是线性映射（无变化），向上凸是提亮暗部（低对比度），向下凹是压暗中间调（高对比度）。pow(x, γ) 就是数学版的 Curves。",
        explanation:
          "γ < 1 相当于开根号，拉高暗部（去雾）；γ > 1 相当于平方，压低中间调（增加对比度）。γ = 2.2 是标准的 sRGB 伽马校正。这里用可调的 contrast 参数让用户控制视觉风格。",
        whyItMatters:
          "线性颜色空间在人眼看来不自然（太平淡）。几乎所有显示器、照片、电影都使用非线性伽马曲线。理解幂律映射是理解「为什么屏幕上的颜色和代码里的值不一样」的关键。",
      },
    ],
    applications: [
      { field: "UI 背景", examples: "登录页、App 启动屏、PPT 背景——比静态渐变更有生命力，比视频更轻" },
      { field: "品牌视觉", examples: "产品发布会动态背景、品牌形象视频、社交媒体头图" },
      { field: "音乐可视化", examples: "低频 → speed、中频 → hueSpeed、高频 → contrast，实时反应音频" },
      { field: "NFT 生成艺术", examples: "用 token ID 作为随机种子，生成唯一的流体图案，on-chain 存储参数" },
    ],
    keyInsight:
      "单层域变形和双层域变形的区别，不是 1 vs 2 的线性差异，而是「简单」与「复杂」的质变跨越。自然界的复杂性（云、水波、岩石纹理）都源于多尺度过程的叠加——大气环流 + 局部气压 + 微观湍流 = 云朵；板块运动 + 地壳断裂 + 矿物结晶 = 大理石纹理。这个 shader 用 20 行代码复现了自然界亿万年的演化规律。",
  },

  neuro: {
    id: "neuro",
    title: "NeuroFlow",
    subtitle: "赛博朋克神经流",
    oneLiner: "用 Simplex 噪声 + 色相旋转 + 动态线条模拟赛博朋克的数据流视觉",
    whatYouSee:
      "深色背景上流淌着青色和品红色的抽象数据流，像科幻电影中的「神经网络可视化」或「黑客帝国的数据瀑布」。整个画面由两层域变形产生流动感，再叠加周期性的发光线条——线条沿着噪声场的等高线分布，像电路板上的走线或脑神经元的突触连接。",
    pipeline: [
      {
        step: "01",
        title: "Simplex Noise 基础",
        description:
          "不同于简单的 hash 噪声，Simplex Noise 是 Ken Perlin 2001 年改进的高质量噪声算法。它基于单纯形网格（三角形/四面体）而非方形网格，消除了方向性偏差，梯度更连续。结果是更平滑、更自然的噪声纹理。",
        glsl: "float snoise(vec2 v) {\n  // 单纯形网格计算\n  vec2 i = floor(v + dot(v, C.yy));\n  // ... 复杂的排列组合\n  return 130.0 * dot(m, g);\n}",
      },
      {
        step: "02",
        title: "旋转 FBM",
        description:
          "每层 FBM 迭代时，不是简单地缩放坐标，而是用旋转矩阵（rot）扭转 + 平移（shift）。这打破了网格的规律性，让噪声更有机、更流动。5 层叠加后产生从宏观到微观的丰富细节。",
        glsl: "mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));\nfor (int i = 0; i < 5; i++) {\n  v += a * snoise(st);\n  st = rot * st * 2.0 + shift;\n  a *= 0.5;\n}",
      },
      {
        step: "03",
        title: "双层域变形 q & r",
        description:
          "q 向量用两次独立的 FBM（偏移不同种子）构成，定义「第一层流动」。r 向量在 q 扰动后的坐标上再做 FBM，产生「流动中的流动」。complexity 参数控制 q 对 r 的影响强度——高复杂度让图案更混沌。",
        glsl: "vec2 q = vec2(fbm(st), fbm(st + vec2(1.0)));\nfloat complexFactor = 0.5 + 0.5 * complexity;\nvec2 r = vec2(\n  fbm(st + q*complexFactor + vec2(1.7,9.2) + t),\n  fbm(st + q*complexFactor + vec2(8.3,2.8) + t)\n);",
      },
      {
        step: "04",
        title: "色相旋转映射",
        description:
          "不是简单的颜色插值，而是用 RGB → 色相空间旋转 → RGB 的方法。hueShift 用 Rodrigues 旋转公式在 RGB 空间中旋转颜色向量。青色和品红色基调经过旋转后可以平滑过渡到任意色相组合，保持赛博朋克的双色对比风格。",
        glsl: "vec3 hueShift(vec3 color, float hue) {\n  const vec3 k = vec3(0.57735); // 归一化轴\n  float cosA = cos(hue);\n  return color * cosA + cross(k, color) * sin(hue)\n    + k * dot(k, color) * (1.0 - cosA);\n}",
      },
      {
        step: "05",
        title: "动态发光线条",
        description:
          "用 sin(f * 频率 + 时间) 在噪声场上生成周期性波纹，smoothstep(0.9, 0.95, ...) 提取波峰形成细线。两组线条（line1 基于 f，line2 基于 r.y）相位不同，产生交织的闪烁效果。线条颜色是基础色 + 额外亮度，形成霓虹灯管的发光感。",
        glsl: "float line1 = smoothstep(0.9, 0.95, \n  sin(f * 50.0 * complexity + t * 2.0));\ncolor += (col1 + 0.4) * line1 * 0.3 * contrast;",
      },
    ],
    concepts: [
      {
        name: "Simplex Noise",
        nameEN: "Simplex Noise",
        analogy:
          "Perlin Noise 是在方形网格上插值（想象方格纸），Simplex 是在三角形网格上插值（想象六边形蜂窝）。三角形比方形更「对称」——没有对角线方向和轴向方向的差别，所以噪声更均匀、更自然。",
        explanation:
          "2D Simplex 将平面划分为等边三角形网格。每个三角形的三个顶点有随机梯度向量，任意点的噪声值是这三个梯度的加权插值。相比 Perlin 的 4 点插值（方形），Simplex 只需 3 点，计算更快且质量更高。",
        whyItMatters:
          "这是现代游戏引擎（Unity、Unreal）默认的噪声算法。Minecraft 的地形生成、《无主之地》的程序化武器纹理都用它。比 Perlin 快 20-30%，且没有方向性伪影。",
      },
      {
        name: "色相旋转",
        nameEN: "Hue Rotation",
        analogy:
          "想象一个色轮（彩虹圆环）。色相旋转就是「转动色轮」——红色转 60° 变黄色，黄色转 60° 变绿色。这比 RGB 插值更自然，因为保留了颜色的「纯度」和「亮度」，只改变「色调」。",
        explanation:
          "用 Rodrigues 公式在 RGB 空间中绕 (1,1,1) 轴旋转颜色向量。公式：v' = v*cosθ + (k×v)*sinθ + k(k·v)(1-cosθ)。这等价于 RGB → HSV → 旋转 H → RGB，但避免了显式的色彩空间转换。",
        whyItMatters:
          "Instagram/Photoshop 的「色相」滑块就是这个。游戏中的「换肤系统」（同一个模型换不同颜色）、UI 主题色切换都用色相旋转。它保证颜色变化平滑且可预测。",
      },
      {
        name: "等高线提取",
        nameEN: "Isoline Extraction",
        analogy:
          "地形图上的等高线——相同海拔的点连成的曲线。这里用 sin 函数在噪声场上生成周期性波纹，smoothstep 提取波峰，就得到了「噪声等高线」。它自动沿着流动方向弯曲。",
        explanation:
          "sin(f * freq) 将标量场 f 映射为周期函数。当 sin 接近 1 时（波峰），smoothstep(0.9, 0.95, sin(...)) 输出接近 1，形成亮线。调整 freq 控制线条密度，调整 smoothstep 范围控制线条粗细。",
        whyItMatters:
          "这是科学可视化的经典技巧（等温线、等压线、电场线）。游戏中的「扫描特效」「全息投影」「电磁脉冲」都用这招。比手绘纹理更灵活，且自动适应拓扑结构。",
      },
      {
        name: "加法合成光效",
        nameEN: "Additive Light Synthesis",
        analogy:
          "舞台上的多盏彩色射灯。每盏灯单独很暗，但光束重叠处亮度叠加。赛博朋克的「霓虹灯管」就是这个原理——深色背景 + 加法发光 = 明暗对比强烈的科幻感。",
        explanation:
          "不是用 mix() 混合颜色（会变灰），而是用 += 直接累加（会变亮）。线条的亮度 = 基础色 + 发光项。多条线重叠处亮度翻倍，产生「过曝」的霓虹效果。这模拟了真实光源的物理行为。",
        whyItMatters:
          "游戏引擎的 Bloom、God Rays、Particle Systems 都基于加法混合。Photoshop 的「线性减淡（添加）」图层模式就是它。理解加法 vs 乘法混合是掌握光效合成的关键。",
      },
    ],
    applications: [
      { field: "品牌视觉", examples: "科技公司官网背景、产品发布会屏幕、游戏 UI 背景" },
      { field: "音乐可视化", examples: "电子音乐 MV、DJ 演出背景、音频反应式 VJ 素材" },
      { field: "UI/UX", examples: "加载动画、数据传输效果、「黑客风格」仪表盘背景" },
      { field: "影视后期", examples: "赛博朋克电影片头、科幻剧集转场、虚拟现实场景" },
    ],
    keyInsight:
      "赛博朋克视觉的本质是「高对比度 + 双色互补 + 几何线条」。NeuroFlow 用数学手段完美复现了这个公式：深色背景提供对比度，色相旋转产生青/品红互补色，噪声等高线生成有机的几何线条。这不是「画」出来的赛博朋克，而是「生长」出来的——每一帧都是实时计算的独特图案，永不重复。",
  },

  neonwave: {
    oneLiner: "飞行在霓虹地形波浪之上，体验赛博朋克的无尽之旅。",
    whatYouSee:
      "你正在以第一人称视角向前飞行，穿过一片由霓虹色彩构成的起伏地形。地面不是平整的，而是像海浪一样不断起伏，形成连绵的山峰和谷地。颜色从远处的青绿色渐变为近处的紫红色，整个画面充满了 80 年代复古未来主义的氛围。天空是深邃的蓝紫色，远方有柔和的光晕。你的飞行速度可以调节，地形的高度和平滑度也能实时改变，给人一种在赛博空间中漫游的沉浸感。",
    pipeline: [
      {
        step: "1. 生成地形高度场",
        analogy:
          "想象用分形布朗运动（FBM）在一张无限画布上绘制地形轮廓。就像堆沙子——先堆大的山丘（低频噪声），再在上面撒小颗粒（高频噪声），叠加 5 次，形成自然的起伏。",
        code: `float hifbm(vec2 p) {
  float sum = 0.0; float a = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += a*vnoise(p);  // 累加不同频率的噪声
    a *= 0.5;  // 振幅减半
    p *= 2.0;  // 频率加倍
  }
  return sum;
}
float hiheight(vec2 p) { return hifbm(p) - uHeight; }`,
        whyHere:
          "FBM 是程序化地形生成的黄金标准。5 层迭代平衡了细节丰富度和性能——Minecraft 用 6 层，《无人深空》用 8 层。uHeight 参数让你控制整体海拔，改变飞行的相对高度。",
      },
      {
        step: "2. 堆叠 12 层平面",
        analogy:
          "把地形切成 12 片平行的薄片，像翻页动画一样逐层渲染。摄像机向前移动时，旧平面从后方消失，新平面从前方出现，制造连续飞行的幻觉。",
        code: `const int furthest = 12;
for (int i = 1; i <= furthest; ++i) {
  float pz = planeDist*nz + planeDist*float(i);
  float pd = (pz - ro.z)/rd.z;  // 射线与平面相交距离
  vec3 pp = ro + rd*pd;  // 交点位置
  vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
  acol = alphaBlend(pcol, acol);  // Alpha 混合
}`,
        whyHere:
          "这是 raymarching 的简化版——不需要迭代求交，直接计算射线与每个平面的精确交点。12 层是视觉流畅度和性能的平衡点——太少会看到层与层之间的跳跃，太多会降低帧率。",
      },
      {
        step: "3. 用 FBM 高度决定可见性",
        analogy:
          "在每个平面上，用 FBM 计算该点的高度。如果射线交点低于地形高度，说明这个点在「地下」，应该显示地面颜色；如果高于地形高度，说明在「空中」，透明不显示。smoothstep 让边缘柔和过渡。",
        code: `float he = hiheight(vec2(p.x, pp.z)*stp);
float d = p.y - he;  // 交点与地形的高度差
float aa = distance(pp, npp)*sqrt(1.0/3.0);  // 抗锯齿阈值
float t = smoothstep(aa * uSmoothness, -aa * uSmoothness, d);`,
        whyHere:
          "这是 SDF（Signed Distance Field）渲染的核心。d > 0 表示在地表之上（透明），d < 0 表示在地表之下（不透明）。smoothstep 在边缘 ±aa 范围内过渡，消除了锯齿，让地形看起来平滑。uSmoothness 控制过渡宽度——值越大越柔和。",
      },
      {
        step: "4. HSV 渐变着色",
        analogy:
          "根据距离摄像机的远近，用 HSV 色彩空间生成渐变。远处偏青色（色相 0.9），近处偏紫红色（色相 0.6），饱和度和亮度也随距离衰减，营造景深感。",
        code: `float df = exp(-0.1*(distance(ro, pp)-2.));  // 距离衰减因子
vec3 acol = hsv2rgb(vec3(
  mix(0.9, 0.6, df),  // 色相：远 0.9（青）→ 近 0.6（紫）
  0.9,  // 饱和度固定为 0.9
  mix(1.0, 0.0, df)  // 亮度：远 1.0（亮）→ 近 0.0（暗）
));`,
        whyHere:
          "HSV 比 RGB 更适合做渐变——只需改变 H（色相）就能平滑过渡颜色，保持鲜艳度。exp(-0.1*dist) 是物理上的距离雾公式，比线性衰减更自然。这个颜色方案直接致敬了 80 年代的 Synthwave 美学。",
      },
      {
        step: "5. ACES 色调映射 + Gamma 校正",
        analogy:
          "ACES 是好莱坞电影工业标准的色调映射算法，能压缩 HDR 的明亮区域，同时保留细节。就像给照片加了电影滤镜——高光不会过曝，暗部不会死黑。Gamma 校正确保颜色在显示器上看起来准确。",
        code: `// ACES Tonemap
col = max(col, 0.0);
col *= 0.6;  // 降低整体亮度
float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);
// Gamma 校正
col = pow(col, vec3(1.0/2.2));`,
        whyHere:
          "ACES 让霓虹色不会「爆掉」——即使 HSV 生成的原始值很高，映射后也保持在合理范围。2.2 是 sRGB 标准的 Gamma 值，所有现代显示器都用这个。没有 Gamma 校正，画面会偏暗偏灰。",
      },
    ],
    concepts: [
      {
        name: "平面堆叠 Raymarching",
        nameEN: "Plane-Stacking Raymarching",
        analogy:
          "传统 raymarching 像盲人摸象——从摄像机出发，一步步向前试探，直到碰到物体。平面堆叠像解析几何——直接计算射线与每个平面的交点，跳过中间过程。就像知道答案直接写结果，而不是一步步演算。",
        explanation:
          "对于平行于 XY 平面的无限大平面，射线与平面的交点可以精确求解：pz = planeDist * n, pd = (pz - ro.z) / rd.z, pp = ro + rd * pd。只需 12 次计算（12 个平面），而传统 raymarching 可能需要 100+ 次迭代。",
        whyItMatters:
          "这是「知道答案就不要瞎猜」的典范。适用于所有可以解析求交的几何体（球体、圆柱、平面）。《Tron: Legacy》的数字世界、《黑客帝国》的代码雨都用了类似技巧——预先知道几何结构，避免昂贵的迭代。",
      },
      {
        name: "FBM 分形噪声",
        nameEN: "Fractal Brownian Motion",
        analogy:
          "大自然的纹理（树皮、云彩、山脉）都有「自相似性」——远看是大轮廓，近看是小细节，放大后小细节又有更小的细节。FBM 就是用数学复现这个规律：叠加不同频率的噪声，频率每次翻倍，振幅每次减半。",
        explanation:
          "公式：f(p) = Σ(a^i * noise(2^i * p))，其中 a 通常取 0.5。每一项称为一个「八度」（octave）。5 个八度意味着叠加了 5 个频率：1x, 2x, 4x, 8x, 16x。低频控制大轮廓，高频添加细节。",
        whyItMatters:
          "这是程序化内容生成（PCG）的基石。《我的世界》的地形、《无人深空》的星球、《上古卷轴》的岩石纹理都基于 FBM。Ken Perlin（Perlin Noise 发明者）凭这项技术获得了奥斯卡技术成就奖。",
      },
      {
        name: "HSV 色彩空间",
        nameEN: "HSV Color Space",
        analogy:
          "RGB 像混颜料——红+绿=黄，不直观。HSV 像调色盘——H（色相）选颜色（红/橙/黄/绿...），S（饱和度）控制鲜艳度（鲜艳↔灰），V（明度）控制亮度（亮↔暗）。调色时更符合人脑思维。",
        explanation:
          "H 是 0-360° 的圆环（0°红, 120°绿, 240°蓝）。S 和 V 是 0-1 的比例。转换到 RGB 需要分段函数（6 个扇区），但 GPU 能并行处理。这个 shader 用 HSV 做渐变，因为只需改变 H 值就能平滑过渡颜色。",
        whyItMatters:
          "Photoshop/GIMP 的色相滑块、游戏中的装备染色、UI 主题色系统都基于 HSV。理解 HSV 是做视觉设计的关键——比如「保持亮度不变，只改变色相」（换肤）或「保持色相不变，降低饱和度」（失色效果）。",
      },
      {
        name: "指数距离雾",
        nameEN: "Exponential Distance Fog",
        analogy:
          "现实中的雾不是均匀的——近处清晰，远处逐渐模糊，越远越模糊。指数衰减 exp(-k*d) 完美符合这个规律：距离 d 加倍时，能见度不是减半，而是平方级衰减，更真实。",
        explanation:
          "公式：visibility = exp(-density * distance)。density 控制雾的浓度——值越大雾越浓。这里用 exp(-0.1*(dist-2.0))，2.0 是偏移量，让近处（<2 单位）不受影响。df 用于调制颜色，让远处的颜色更暗更偏青色。",
        whyItMatters:
          "游戏引擎（Unity/Unreal）的「指数高度雾」就是它。比线性雾（mix(near, far, t)）更真实，因为符合光在介质中传播的物理规律（Beer-Lambert 定律）。恐怖游戏用浓雾营造压迫感，开放世界游戏用淡雾隐藏远处的 LOD 切换。",
      },
      {
        name: "ACES 色调映射",
        nameEN: "ACES Tonemapping",
        analogy:
          "HDR 照片的亮度范围远超显示器——太阳可能是黑暗的 10000 倍。色调映射就是「压缩亮度」——保留细节的同时，把 HDR 塞进显示器的 0-1 范围。ACES 是好莱坞标准，让高光不刺眼，暗部有层次。",
        explanation:
          "公式：col' = (col*(a*col+b)) / (col*(c*col+d)+e)，其中 a=2.51, b=0.03, c=2.43, d=0.59, e=0.14 是精心调校的系数。这是 S 型曲线——低亮度线性映射，高亮度渐进压缩。比简单的 clamp(col, 0, 1) 保留更多细节。",
        whyItMatters:
          "《神秘海域 4》《地平线：零之曙光》等 3A 游戏都用 ACES。它让 CG 画面有「电影感」——高光柔和，色彩饱满。理解色调映射是掌握 HDR 渲染的第一步，也是区分「游戏画面」和「电影级画质」的关键。",
      },
    ],
    applications: [
      { field: "游戏场景", examples: "赛博朋克飞行关卡、科幻竞速游戏背景、VR 飞行体验" },
      { field: "音乐可视化", examples: "Synthwave 音乐 MV、电子音乐节 VJ 素材、音频反应式背景" },
      { field: "品牌视觉", examples: "科技公司产品发布会背景、游戏启动画面、元宇宙入口动画" },
      { field: "艺术创作", examples: "生成艺术作品、NFT 动态背景、数字装置艺术投影" },
    ],
    keyInsight:
      "Neonwave 的核心洞察是「空间错觉 = 解析几何 + 分形细节 + 色彩心理学」。平面堆叠用初中几何（直线与平面求交）创造无限空间感，FBM 用高中数列（等比数列求和）生成自然地形，HSV 渐变用色彩理论（冷暖对比）强化景深。这不是暴力计算的 3D 场景，而是巧妙设计的 2.5D 幻觉——用最少的数学，营造最强的沉浸感。80 年代的计算机做不到真 3D，但程序员们用这种技巧在 Apple II 和 Commodore 64 上创造了赛博朋克美学的原型。",
  },

  neontext: {
    oneLiner: "在浩瀚宇宙中，一颗巨型星球表面浮现出发光的「NEON」文字。",
    whatYouSee:
      "你正在一片深邃的夜空中飞行，眼前出现一颗巨大的球体，就像月球一样悬浮在远方。但这不是普通的星球——它的表面用明亮的粉紫色霓虹灯勾勒出「NEON」四个字母，每个字母都由线段构成，像是用激光在球面上刻画。文字随着球体的曲率弯曲，具有真实的 3D 透视感。球体本身散发淡淡的紫色光晕，作为底色衬托文字。下方仍然有霓虹地形飞过，但亮度降低，不抢镜。你可以调节文字的发光强度、大小，以及地形的明暗对比。",
    pipeline: [
      {
        step: "1. 射线与球体求交",
        analogy:
          "想象你从摄像机向前射出一条光线（射线），它会不会击中那颗巨大的球体？这是解析几何问题——球体方程 (x-cx)²+(y-cy)²+(z-cz)²=r²，射线方程 p=ro+t*rd，联立求解得到交点距离 t。",
        code: `vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
  vec3 oc = ro - sph.xyz;  // 摄像机到球心向量
  float b = dot(oc, rd);
  float c = dot(oc, oc) - sph.w*sph.w;  // sph.w 是半径
  float h = b*b - c;  // 判别式
  if(h < 0.0) return vec2(-1.0);  // 不相交
  h = sqrt(h);
  return vec2(-b - h, -b + h);  // 近交点和远交点
}`,
        whyHere:
          "这是计算机图形学第一课的内容。球体是唯一能解析求交的复杂几何体（比多边形简单得多）。返回两个 t 值：近交点（射线进入球体）和远交点（射线离开球体）。这里只用近交点来渲染球体表面。",
      },
      {
        step: "2. 球面坐标映射",
        analogy:
          "地球仪上的经纬度——任何一个点都能用（纬度 θ, 经度 φ）表示。这里把 3D 球面坐标转换为 2D 纹理坐标（UV），就像把地球展开成平面地图。文字就「画」在这个 2D 坐标系上。",
        code: `vec3 toSpherical(vec3 p) {
  float r = length(p);  // 半径（距原点距离）
  float t = acos(p.z/r);  // 纬度角（0 到 π）
  float ph = atan(p.y, p.x);  // 经度角（-π 到 π）
  return vec3(r, t, ph);
}
vec2 sp = toSpherical(-mnor.zxy).yz;  // 取经纬度
sp.x -= PI*0.5;  // 旋转坐标系
sp *= 2.0;  // 缩放文字`,
        whyHere:
          "这是纹理映射的数学基础。球面坐标避免了极点的奇异性（比 UV 映射更稳定）。这里用法线方向 mnor 而不是位置，确保文字「贴」在球面上，不会因为球体移动而错位。",
      },
      {
        step: "3. SDF 文字渲染",
        analogy:
          "SDF（Signed Distance Field）就是「到最近边缘的距离」。对于字母「E」，屏幕上每个点都计算「我离 E 的笔画最近有多远」。距离小于某个阈值（比如 0.05）就点亮，形成字母形状。",
        code: `float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);  // 投影比例
  return length(pa - ba*h);  // 点到线段的距离
}
float sdText(vec2 p) {
  float d = 100.0;
  // 字母 N：三条线段（左竖、右竖、对角线）
  vec2 p1 = p - vec2(-0.6, 0.0);
  float n = min(sdSegment(p1, vec2(-0.2,-0.3), vec2(-0.2,0.3)), ...);
  d = min(d, n);
  // ... 类似地绘制 E, O, N
  return smoothstep(w, w*0.8, d);  // 柔和边缘
}`,
        whyHere:
          "SDF 是现代字体渲染的黄金标准。传统位图字体放大会模糊，SDF 永远清晰。Valve 在 2007 年的论文让这项技术流行——《传送门 2》《Dota 2》的 UI 字体都用 SDF。这里手绘「NEON」四个字母，虽然代码长，但渲染极快。",
      },
      {
        step: "4. 霓虹发光效果",
        analogy:
          "真实的霓虹灯管有两层：内部的灯丝（高亮核心）+ 外部的辉光（柔和光晕）。这里用 SDF 值控制亮度——靠近字母中心亮度高（模拟灯丝），远离中心亮度衰减（模拟辉光）。",
        code: `float txt = sdText(sp);  // 0-1，1 表示在字母内
vec3 neonCol = vec3(1.0, 0.1, 0.8) * uTextGlow * txt;  // 粉紫色 * 强度
vec3 baseCol = hsv2rgb(vec3(0.75, 0.7, 0.2));  // 球体底色（淡紫）
vec3 col = baseCol + neonCol;  // 叠加发光`,
        whyHere:
          "这是加法混合（Additive Blending）的典型应用。不是用 mix() 混合（会变灰），而是用 + 累加（会变亮）。真实霓虹灯的物理原理就是加法——气体发光叠加在管壁反射上。uTextGlow 参数让你控制霓虹强度，从微弱到炫目。",
      },
      {
        step: "5. 地形与球体合成",
        analogy:
          "画面是三层合成：最底层是深色天空，中间层是飞行地形（亮度降低，不抢镜），最上层是发光球体。用 Alpha 混合（透明度混合）按从后到前的顺序叠加，就像 Photoshop 的图层系统。",
        code: `vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
  // ... 地形渲染（同 Neonwave）
  vec3 acol = hsv2rgb(vec3(mix(0.8, 0.6, df), 0.8,
    mix(0.5, 0.0, df) * uTerrainBrightness));  // 降低亮度
  return vec4(acol, t);
}
vec3 skyColor(vec3 ro, vec3 rd) {
  vec4 mcol = moon(ro, rd);  // 球体颜色 + Alpha
  vec3 col = vec3(0.05, 0.0, 0.1);  // 深色天空
  col = mix(col, mcol.xyz, mcol.w);  // Alpha 混合
  return col;
}`,
        whyHere:
          "这是经典的 Alpha 合成公式：col_final = col_back * (1-alpha) + col_front * alpha。mcol.w 是球体的透明度（边缘处为 0，中心处为 1），确保球体边缘柔和过渡。uTerrainBrightness 参数让你压暗地形，突出球体主体。",
      },
    ],
    concepts: [
      {
        name: "SDF 符号距离场",
        nameEN: "Signed Distance Field",
        analogy:
          "想象你站在一个封闭房间里，SDF 就是「我离最近的墙有多远，方向是哪」。距离为正表示在外面（透明），为负表示在里面（不透明），为零表示在边界上（边缘）。这个「距离地图」包含了形状的全部信息。",
        explanation:
          "对于线段 AB，点 P 的 SDF = length(P - closest_point_on_AB)。对于组合形状（如字母 E），SDF = min(所有笔画的 SDF)。SDF 的优势是：1) 可以任意缩放不失真，2) 可以高效地做形状运算（并集/交集/差集），3) 自带抗锯齿（用 smoothstep）。",
        whyItMatters:
          "Valve 的 2007 年论文《Improved Alpha-Tested Magnification for Vector Textures and Special Effects》让 SDF 流行。现代游戏（《军团要塞 2》《Dota 2》）和 UI 框架（Flutter、Figma）都用 SDF 渲染文字和图标。它是矢量图形在实时渲染中的最优解。",
      },
      {
        name: "球面坐标系",
        nameEN: "Spherical Coordinates",
        analogy:
          "用（半径 r, 纬度 θ, 经度 φ）描述 3D 空间中的点，就像用「北纬 39°, 东经 116°」定位北京。θ=0 是北极，θ=π 是南极，φ=0 是本初子午线。球面坐标让球体上的计算变简单——纹理映射、旋转、对称性都能直接表达。",
        explanation:
          "转换公式：x=r*sin(θ)*cos(φ), y=r*sin(θ)*sin(φ), z=r*cos(θ)。反过来：r=√(x²+y²+z²), θ=acos(z/r), φ=atan(y, x)。这里用球面坐标的 (θ, φ) 作为 2D 纹理坐标，把文字「贴」到球面上，避免了极点的畸变问题。",
        whyItMatters:
          "物理学（电磁场、引力场）、天文学（星图投影）、3D 建模（UV 展开）都离不开球面坐标。在 shader 中，它用于全景天空盒、行星渲染、辐射光源。理解球面坐标是掌握 3D 空间变换的关键一步。",
      },
      {
        name: "射线-球体求交",
        nameEN: "Ray-Sphere Intersection",
        analogy:
          "射线是「从一点出发，沿固定方向无限延伸的直线」。球体是「所有离球心距离等于半径的点」。求交就是解方程：(ro + t*rd - center)² = radius²。这是一元二次方程，用求根公式就能精确求解。",
        explanation:
          "展开后得到：t² + 2*dot(oc, rd)*t + (dot(oc, oc) - r²) = 0，其中 oc = ro - center。判别式 Δ = b² - 4ac 决定：Δ<0 不相交，Δ=0 相切，Δ>0 两个交点。t₁ = (-b - √Δ)/2 是近交点，t₂ = (-b + √Δ)/2 是远交点。",
        whyItMatters:
          "这是光线追踪（Raytracing）的第一课。《玩具总动员》（1995，Pixar 第一部 CG 电影）就用这个算法渲染球形物体。现代 GPU 的硬件光追（RTX）也是基于射线求交，只不过加速结构更复杂。理解这个是学习高级渲染（全局光照、反射折射）的基础。",
      },
      {
        name: "加法混合",
        nameEN: "Additive Blending",
        analogy:
          "舞台上的聚光灯——红灯 + 绿灯 = 黄光，多盏灯重叠处亮度累加。这不同于颜料混合（红+绿=棕），而是光的物理叠加。加法混合让发光物体看起来「真的在发光」，而不是「画了个亮色」。",
        explanation:
          "公式：col_final = col_back + col_front。注意没有乘 (1-alpha)，直接累加。这模拟了光子的累积效应。多个发光源重叠时，亮度可以超过 1.0（需要色调映射压缩）。在 GPU 中，用 glBlendFunc(GL_ONE, GL_ONE) 实现。",
        whyItMatters:
          "游戏引擎的粒子特效（火焰、爆炸、魔法）、Bloom 后处理、镜头光晕都基于加法混合。Photoshop 的「线性减淡（添加）」图层模式就是它。理解加法 vs 乘法 vs Alpha 混合是做视觉特效的基本功——用错了混合模式，效果天差地别。",
      },
      {
        name: "双层渲染合成",
        nameEN: "Multi-Pass Compositing",
        analogy:
          "动画制作的「赛璐珞叠片」——背景层画天空和地面，前景层画角色，叠在一起拍摄。这里也是：第一遍渲染地形（plane pass），第二遍渲染球体（moon pass），最后用 Alpha 混合合成。",
        explanation:
          "先循环 12 次渲染地形平面，用 alphaBlend(pcol, acol) 累积颜色。再调用 moon(ro, rd) 渲染球体，返回 vec4(color, alpha)。最后 skyColor 中用 mix(sky, moon, moon.a) 叠加。这是从后到前（back-to-front）的画家算法（Painter's Algorithm）。",
        whyItMatters:
          "这是实时渲染的经典技巧——先渲染不透明物体（深度测试），再渲染半透明物体（Alpha 混合）。延迟渲染（Deferred Rendering）也是类似思想：先渲染几何，再渲染光照，最后合成。理解多遍渲染是优化性能和效果的关键。",
      },
    ],
    applications: [
      { field: "品牌标识", examples: "游戏启动画面、产品发布会片头、品牌宣传片 Logo 动画" },
      { field: "UI/UX", examples: "加载界面、启动动画、App 引导页、AR 空间标签" },
      { field: "艺术装置", examples: "博物馆互动展览、音乐节舞台视觉、城市灯光秀投影" },
      { field: "游戏场景", examples: "科幻游戏任务提示、赛博朋克广告牌、太空探索游戏星球标识" },
    ],
    keyInsight:
      "Neon Text 的核心洞察是「3D 幻觉 = 2D 技巧 + 正确的数学映射」。球面看起来是 3D，但实际上用解析几何（射线-球体求交）精确计算交点，避免了昂贵的体积渲染。文字看起来在球面上弯曲，但实际上是 2D SDF（平面几何）投影到球面坐标系（微分几何）。这种「降维攻击」的思想贯穿计算机图形学——用低维精确解代替高维暴力搜索。正是这些数学优雅性，让 80 年代的程序员能在 8MHz CPU 上渲染出星际场景，启发了后来的《精英》《星际争霸》等经典游戏。",
  },

  aurora: {
    oneLiner: "飞行穿越梦幻极光云层，体验大自然最美的光影奇迹。",
    whatYouSee:
      "你正在一片深邃的夜空中飞行，周围被柔和的半透明云层环绕。这些云层不是普通的白色，而是绿色到紫色的渐变，像极光一样流动变幻。云层非常稀薄，有强烈的体积感——你能看穿它们，仿佛在雾中穿行。云层随着你的前进缓缓波动，像海浪一样起伏，但又比海浪更轻盈梦幻。颜色会周期性地从翠绿色过渡到深紫色，营造出神秘的氛围。你可以调节云层的飘动速度、颜色变化节奏和透明度，从飘渺仙境到浓郁迷雾任意切换。",
    pipeline: [
      {
        step: "1. 低频噪声生成柔和云层",
        analogy:
          "FBM 有两种用法：高频（5 层迭代）生成细腻纹理（如 Neonwave 地形），低频（2 层迭代）生成柔和大块（如云团）。想象用粗毛刷画水彩——只有大块色彩晕染，没有锐利细节，正适合表现飘渺的极光云。",
        code: `float lofbm(vec2 p) {
  float sum = 0.0; float a = 1.0;
  for (int i = 0; i < 2; ++i) {  // 只迭代 2 次
    sum += a*vnoise(p);
    a *= 0.5; p *= 2.0;
  }
  return sum;
}
float cloudNoise(vec2 p) {
  return lofbm(p * 0.5);  // 再降低频率
}`,
        whyHere:
          "云层需要「大气感」——大块飘动，边缘模糊，没有锐利细节。2 层 FBM 是最低配置（再少就失去自然感），0.5 系数进一步降低频率。这比 Neonwave 的 5 层 FBM 快 2.5 倍，适合半透明体积渲染（需要多层叠加）。",
      },
      {
        step: "2. 波动函数模拟云层起伏",
        analogy:
          "云层不是静止的平面，而是像海浪一样缓慢起伏。用 sin 函数生成周期性波动——随着 z 坐标（深度）和时间变化，云层高度上下波动，形成「云海翻腾」的动态效果。",
        code: `float wave = sin(pp.z * 0.2 + iTime * uWaveSpeed) * 1.0;
float he = cloudNoise(vec2(p.x, pp.z)) * 2.0 - 2.0 + wave;`,
        whyHere:
          "sin(z*freq + t*speed) 是周期运动的标准公式。freq=0.2 控制波长（值越大波浪越密），speed=uWaveSpeed 控制速度，振幅 1.0 控制高度变化。这个简单的正弦波让静态噪声「活」起来，仿佛云层在呼吸。",
      },
      {
        step: "3. 极度柔和的 Smoothstep",
        analogy:
          "Neonwave 的地形边缘锐利（smoothstep 阈值 ±aa），但云层要飘渺，需要极宽的过渡区（±aa ± 1.5）。就像毛玻璃 vs 透明玻璃——毛玻璃的模糊区域很宽，让物体边界完全消失。",
        code: `float aa = distance(pp, npp) * sqrt(1.0/3.0);
float t = smoothstep(aa + 1.5, -aa - 1.5, d);  // ±1.5 扩大过渡区`,
        whyHere:
          "正常 smoothstep(a, b, x) 在 [a, b] 区间内从 0 过渡到 1。这里 [aa+1.5, -aa-1.5] 是很宽的区间（约 3 单位），让云层边缘极度模糊。这是体积渲染的关键——不是渲染「表面」，而是渲染「密度场」，厚度决定不透明度。",
      },
      {
        step: "4. 绿紫渐变 + 周期切换",
        analogy:
          "真实的极光颜色随海拔和太阳风强度变化——低层绿色（氧气），高层紫色/红色（氮气）。这里用 sin 函数周期性地在绿色（0,1,0.5）和紫色（0.5,0,1）之间切换，模拟极光的「呼吸」效果。",
        code: `vec3 colA = vec3(0.0, 1.0, 0.5);  // 绿色
vec3 colB = vec3(0.5, 0.0, 1.0);  // 紫色
float mixFactor = 0.5 + 0.5 * sin(pp.z * 0.1 + iTime + uColorShift);
vec3 col = mix(colA, colB, mixFactor);`,
        whyHere:
          "sin 输出 [-1,1]，0.5+0.5*sin 归一化到 [0,1]，用于 mix。mixFactor 随 z（深度）和时间变化，让不同云层显示不同颜色，且颜色沿 z 轴渐变。uColorShift 参数让你「快进」颜色循环，或固定在某个色调。",
      },
      {
        step: "5. 高度衰减 + 半透明叠加",
        analogy:
          "云层中心最亮（密度高），边缘最暗（密度低）。用 exp(-k*|d|) 衰减亮度——d 是点到云层中心的距离，越远越暗。最后乘以 0.4 的低透明度，让云层像薄纱一样半透明，能看穿多层。",
        code: `col *= exp(-0.5 * abs(d));  // 高度差越大越暗
return vec4(col, t * uOpacity);  // t 是形状 mask, uOpacity 控制总透明度`,
        whyHere:
          "exp(-k*|d|) 是体积渲染的密度衰减公式——靠近云层中心（d≈0）时 exp(0)=1 全亮，远离中心（|d|大）时 exp(-大数)≈0 全暗。uOpacity=0.4 让云层半透明，12 层云叠加后总透明度约 1-(1-0.4)¹²≈99.99%，既有体积感又不会完全遮挡背景。",
      },
    ],
    concepts: [
      {
        name: "体积渲染",
        nameEN: "Volumetric Rendering",
        analogy:
          "传统渲染画「表面」（如球体、平面）——要么不透明，要么透明。体积渲染画「介质」（如烟雾、云、水下）——每个点都有「密度」，光线穿过时逐渐衰减。就像在雾中开车，能见度随雾浓度降低。",
        explanation:
          "对于半透明云层，透明度 α 不是 0/1 二值，而是由密度场决定：α(p) = density(p) * smoothness。12 层云叠加时，用前向混合（front-to-back）或后向混合（back-to-front）累积颜色。这里用 Alpha 混合：col_final = col_cloud * α + col_back * (1-α)。",
        whyItMatters:
          "体积渲染是电影级 VFX 的核心——《阿凡达》的潘多拉丛林雾气、《星际穿越》的黑洞吸积盘、《银翼杀手 2049》的橙色雾霾都用它。游戏中的体积光（God Rays）、水下焦散（Caustics）也基于这个原理。理解体积渲染是区分「平面贴图」和「真实介质」的关键。",
      },
      {
        name: "低频 FBM",
        nameEN: "Low-Frequency FBM",
        analogy:
          "音乐中的「低音」（Bass）和「高音」（Treble）——低音震撼但不刺耳，高音清晰但不厚重。FBM 也是：高频（5+ 层）生成细腻纹理（树皮、岩石），低频（2-3 层）生成柔和大块（云团、水波）。",
        explanation:
          "FBM 的频率由迭代次数决定：1 层只有基础频率，5 层叠加了 1x, 2x, 4x, 8x, 16x。这里只用 2 层（1x + 2x），且再乘 0.5 降低频率，得到「大色块，少细节」的效果。公式：f(p) = noise(p*0.5) + 0.5*noise(p*1.0)。",
        whyItMatters:
          "不同频率的噪声适合不同场景：低频→云、雾、水面；中频→地形、木纹；高频→岩石、金属锈迹。《我的世界》地形用 6 层（平衡），《无人深空》行星大气用 3 层（性能优先），《荒野大镖客 2》云层用 2 层（写实风格）。选对频率事半功倍。",
      },
      {
        name: "周期性波动",
        nameEN: "Periodic Wave Motion",
        analogy:
          "海浪、呼吸、心跳——自然界的很多运动都是周期性的。sin/cos 函数是描述周期运动的数学语言。sin(ωt + φ) 中，ω 是角频率（快慢），φ 是相位（起点），振幅是高度。",
        explanation:
          "这里 wave = sin(z*0.2 + t*speed) 生成空间-时间耦合的波动。z*0.2 让波沿 z 轴分布（空间频率），t*speed 让波随时间传播（时间频率）。两者叠加产生「行波」——波峰从远处向近处推进，像海浪拍岸。",
        whyItMatters:
          "周期运动是动画的基础。游戏中的树叶摇曳、水面波纹、角色呼吸都用 sin/cos。理解相位（φ）是关键——多个物体用相同频率但不同相位，就能产生「此起彼伏」的群体动画（如麦浪、鱼群）。物理引擎（Unity/Unreal）的 Spring 组件也基于简谐运动。",
      },
      {
        name: "互补色渐变",
        nameEN: "Complementary Color Gradients",
        analogy:
          "色轮上相对的两个颜色是「互补色」——红/绿、橙/蓝、黄/紫。它们放在一起对比强烈但不刺眼，给人「和谐的冲突感」。极光用绿色（冷色调，神秘）到紫色（暖色调，梦幻）正是这个原理。",
        explanation:
          "这里用 RGB 线性插值：mix(vec3(0,1,0.5), vec3(0.5,0,1), t)。t 从 0 到 1 时，颜色从绿色平滑过渡到紫色。比 HSV 渐变简单（不需要色彩空间转换），但在 RGB 空间中，绿↔紫会经过灰色区域（饱和度降低），所以选了稍偏的绿（0,1,0.5）和紫（0.5,0,1）。",
        whyItMatters:
          "UI 设计的「配色方案」就基于色轮理论：单色（monochromatic）、类似色（analogous）、互补色（complementary）、三角色（triadic）。游戏中的阵营区分（《魔兽世界》联盟蓝/部落红）、情绪表达（愤怒红/平静蓝）都用互补色。掌握配色是视觉设计的第一课。",
      },
      {
        name: "密度场建模",
        nameEN: "Density Field Modeling",
        analogy:
          "传统 3D 建模用「多边形网格」（polygons）——物体由三角形拼接而成，边界明确。密度场用「浓度分布」（scalar field）——空间中每个点都有一个数值（密度），浓度高的地方「有物质」，浓度低的地方「没物质」。",
        explanation:
          "密度场 ρ(x,y,z) 是一个标量函数。渲染时，光线穿过密度场，累积透明度：α = 1 - exp(-Σρ(p_i)*Δs)，其中 Δs 是步长。这里简化为单层采样：α(p) = smoothstep(..., d) * opacity。多层叠加时，用 Alpha 混合累积最终颜色。",
        whyItMatters:
          "医学 CT/MRI 扫描、天气预报的云图、流体模拟（烟雾、爆炸）都基于密度场。Blender 的 Volume Shader、Houdini 的 VDB 格式就是密度场。这是「离散几何」到「连续场」的思维跃迁——不再问「这里有没有物体」，而是「这里的物质浓度是多少」。",
      },
    ],
    applications: [
      { field: "自然纪录片", examples: "极光科普视频、天文纪录片背景、自然风光延时摄影" },
      { field: "冥想/放松", examples: "冥想 App 背景、助眠动画、瑜伽课程视觉引导" },
      { field: "游戏场景", examples: "奇幻游戏天空、魔法森林迷雾、外星球大气层" },
      { field: "舞台演出", examples: "音乐会舞台背景、戏剧舞美、沉浸式艺术展览" },
    ],
    keyInsight:
      "Aurora Cloudscape 的核心洞察是「少即是多」——用最少的数学（2 层 FBM + 1 个 sin 波）营造最丰富的视觉（飘渺云层 + 流动极光）。这是东方美学的「留白」哲学在算法中的体现：不是堆砌细节，而是用柔和的大块和极宽的过渡营造氛围。低频噪声 + 高透明度 = 体积感，周期波动 + 颜色渐变 = 生命感。这种「做减法」的设计思想，在性能受限的实时渲染中尤为重要——《旷野之息》的草地、《风之旅人》的沙漠都用了类似的「简约而不简单」的技术。",
  },

  hypergrid: {
    id: "hypergrid",
    title: "Hyper Grid",
    subtitle: "超空间网格穿越",
    oneLiner: "在旋转的三维网格中以光速飞行，每个格子随机闪烁发光。",
    whatYouSee:
      "你正以极快的速度穿越一个三维空间网格。整个空间被分割成无数立方体格子，大多数格子是空的，但一些格子中漂浮着微小的发光粒子。整个网格在不断旋转——上下左右的方向感不断变化，像是在太空中翻滚。粒子发出蓝色和青色的光芒，光线随距离衰减，形成深邃的空间感。每隔一段时间，格子的分布会突然变化（因为随机种子与整数时间绑定），产生「脉冲」般的闪烁。远处的光逐渐被雾气吞噬，营造无限延伸的幻觉。",
    pipeline: [
      {
        step: "01",
        title: "网格空间划分",
        description:
          "用 floor() 将连续 3D 空间切割成离散的立方体网格。每条射线前进时，计算它会穿过哪个格子（grid_id）以及到达格子边界的距离（grid_d）。就像在一座无限大的仓库中，给每个货架编号——知道你在哪个货架前，就能查询这个货架上有什么。",
        glsl: "grid_id = (floor(ro + rd * 1e-3) / size + 0.5) * size;\nvec3 bz = src + dst;\ngrid_d = min(bz.x, min(bz.y, bz.z));",
      },
      {
        step: "02",
        title: "Rodrigues 空间旋转",
        description:
          "整个场景绕一个随时间变化的轴旋转。erot 函数用 Rodrigues 旋转公式：将向量分解为平行于轴和垂直于轴的分量，分别保持和旋转。就像把陀螺仪装在太空舱上——舱体绕陀螺轴持续旋转，营造失重翻滚的感觉。",
        glsl: "vec3 erot(vec3 p, vec3 ax, float t) {\n  return mix(dot(ax,p)*ax, p, cos(t)) + cross(ax,p)*sin(t);\n}",
      },
      {
        step: "03",
        title: "随机粒子生成",
        description:
          "每个格子用 hash(grid_id + floor(time)) 生成随机数。随机数 > 0 的格子是空的（SDF 返回 0.5，射线快速跳过）；随机数 ≤ 0 的格子包含一个小球体。floor(time) 让随机种子每秒变化一次，产生「脉冲切换」的闪烁效果。",
        glsl: "float cellRn = hash(grid_id + floor(t));\nfloat h = cellRn > 0.0 ? 0.5 : length(p) - 0.01;",
      },
      {
        step: "04",
        title: "光晕累积着色",
        description:
          "不是画出粒子本身，而是沿射线累积它们的「光晕」——每个粒子贡献一小部分光，距离越近越亮，衰减速率按 exp(e*e*i) 计算。就像夜晚透过雾气看远处的霓虹灯——看不清灯管本身，但能看到弥漫的辉光。多个光源叠加产生丰富的色彩层次。",
        glsl: "float glowPulse = 0.02 * exp(5.0 * fract(gy + t));\nvec3 cellColor = mix(uColor1, uColor2, abs(cellRn));\ncol += cellColor * (uGlow * 0.025 + glowPulse) / exp(e*e*fi);",
      },
      {
        step: "05",
        title: "距离雾 + Gamma",
        description:
          "用 exp(-0.08*g) 做指数距离雾衰减——射线走得越远，累积颜色越暗，远方自然消失在黑暗中。最后 sqrt(col) 做 Gamma 校正（等价于 pow(col, 0.5)），提亮暗部，让深空中微弱的辉光也能被看见。",
        glsl: "col *= exp(-0.08 * g);\ncol = sqrt(max(col, 0.0));",
      },
    ],
    concepts: [
      {
        name: "网格行进",
        nameEN: "Grid Marching",
        analogy:
          "传统 Raymarching 像盲人拄拐——每步试探一小段，效率低。网格行进像坐地铁——直接跳到下一站（下一个格子边界），中间不停靠。知道了空间被均匀分割，就能精确计算「到下一个格子墙壁的距离」，一步跨过去。",
        explanation:
          "对于轴对齐的均匀网格，射线到下一个格子边界的距离可以解析求解：d_axis = (cell_boundary - ray_origin) / ray_direction，取三个轴中最小的 d 即为下一步长。这是 DDA（Digital Differential Analyzer）算法的 3D 版本。",
        whyItMatters:
          "Minecraft 的方块选取（光标瞄准哪个方块）就用这个算法。体素引擎（MagicaVoxel、Teardown）的光线追踪核心也是网格行进。它是 SDF Raymarching 的离散版——用网格结构换取确定性步长，避免了步长过小导致的性能问题。",
      },
      {
        name: "Rodrigues 旋转公式",
        nameEN: "Rodrigues' Rotation Formula",
        analogy:
          "想象把一根筷子插在乒乓球上。绕筷子转动时，球上靠近筷子的点几乎不动（平行分量），远离筷子的点转得最多（垂直分量）。Rodrigues 公式就是：保留平行分量不变，把垂直分量旋转指定角度。",
        explanation:
          "公式：v' = v*cos(θ) + (k×v)*sin(θ) + k*(k·v)*(1-cos(θ))，其中 k 是单位旋转轴，θ 是旋转角度。第一项是原向量的缩放，第二项是叉积（垂直于 v 和 k 的分量），第三项保留平行于轴的分量。比构造旋转矩阵更直观高效。",
        whyItMatters:
          "机器人学（关节旋转）、航天器姿态控制、3D 动画骨骼系统都用这个。Unity 的 Quaternion.AngleAxis() 内部就是 Rodrigues。它只需要一个轴和一个角度，比欧拉角（三个角度）更直观，比四元数（四个分量）更易理解。",
      },
      {
        name: "光晕累积渲染",
        nameEN: "Glow Accumulation Rendering",
        analogy:
          "长曝光摄影——相机快门打开很长时间，沿光线路径上的所有光源都被「累加」到同一张照片上。射线穿过空间时，每经过一个发光点就在最终颜色上「加一笔」。100 个微弱光源累加起来，就形成了丰富的辉光效果。",
        explanation:
          "每次迭代计算 contribution = color * intensity / attenuation，然后 col += contribution。intensity 由 glow 参数和脉冲函数（exp(5*fract(...))）控制；attenuation 用 exp(e*e*i) 按距离和迭代次数衰减。这不是物理精确的体积光，而是一种高效的近似。",
        whyItMatters:
          "Shadertoy 上大量「宇宙飞行」「粒子云」效果都用这个技巧。它绕过了传统粒子系统的开销（不需要存储/排序粒子），在 fragment shader 中直接计算。游戏中的「上帝光线」（God Rays）、「体积雾光」也是累积思路。",
      },
    ],
    applications: [
      { field: "科幻场景", examples: "超空间跳跃、星际穿越过渡动画、赛博空间入口" },
      { field: "音乐可视化", examples: "电子音乐 VJ 素材、节拍同步脉冲、DJ 演出视觉背景" },
      { field: "游戏特效", examples: "传送门特效、量子隧穿过场、数据空间探索" },
      { field: "品牌视觉", examples: "科技发布会开场动画、AI 产品宣传片、元宇宙概念视频" },
    ],
    keyInsight:
      "Hyper Grid 的核心洞察是「离散化 = 效率 + 随机性」。把连续空间切成格子后，两件事变得简单：射线可以精确跳到下一个格子（网格行进），每个格子可以独立随机（hash(id)）。这和真实世界的城市规划一模一样——把混沌的土地切成整齐的街区，每个街区独立开发，宏观上却呈现出有序的城市天际线。离散化不是简化，而是把复杂性从「连续空间的微积分」转化为「离散单元的组合数学」——后者更适合 GPU 的并行架构。",
  },

  jellyfish: {
    id: "jellyfish",
    title: "Luminescence",
    subtitle: "生物发光水母",
    oneLiner: "用数学造出一群会发光、会呼吸、会游泳的水母，漂浮在无限深海中。",
    whatYouSee:
      "你看到的是一片漆黑深海中漂浮的发光水母群。每只水母的伞盖透明晶莹，内部有脉动的发光纹路，触手从伞下垂落并随水流摆动。它们以各自不同的节奏缓慢收缩和舒张——就像在呼吸。移动鼠标可以改变观察角度，就像在深潜器中环顾四周。水母的颜色在粉色、蓝色、橙色之间缓慢流转，光晕在透明伞盖内反射折射，营造出梦幻的深海氛围。",
    pipeline: [
      {
        step: "01",
        title: "空间重复 — 一只变无数只",
        description:
          "用 mod 运算将整个 3D 空间切成 6×30×6 的网格，每个格子放一只水母。就像在浴室贴瓷砖——你只需要设计一块瓷砖的花纹，mod 运算会自动重复铺满整面墙。每个格子有唯一 ID（floor(pos/size)），用来生成随机偏移，让每只水母位置略有不同。",
        glsl: "o.id = floor(pos/size);\no.p = mod(pos, size) - size*0.5;",
      },
      {
        step: "02",
        title: "SDF 建模 — 用数学雕刻形状",
        description:
          "水母不是用三角面片搭建的，而是用数学函数描述的。伞盖 = 球体减去另一个球体（挖空底部）；触手 = 极坐标重复的线条，粗细随高度递减。smooth max（smax）让两个形状的交界柔滑过渡，就像捏黏土时两团泥自然融合。",
        glsl: "float d1 = sdSphere(p, vec3(0.), 1.);\nfloat d2 = sdSphere(p, vec3(0.,-.5,0.), 1.);\no.d = smax(d1, -d2, .1);  // 柔滑布尔减法",
      },
      {
        step: "03",
        title: "光线步进 — 从像素发射探测光线",
        description:
          "对每个像素，从摄像机发射一条光线，沿光线方向一步步前进。每一步计算当前位置到最近水母表面的距离（SDF 值），用这个距离决定下一步走多远。距离大就大步跳，距离小就小心挪动——像蒙眼走路时用手探测障碍物，手摸到东西就停下。100 步之内命中表面就渲染，否则显示背景。",
        glsl: "for(float i=0.; i<MAX_STEPS; i++) {\n  p = r.o + r.d*d;\n  s = map(q.p, q.id);\n  if(s.d<HIT_DISTANCE) break;\n  d += min(s.d, dC);\n}",
      },
      {
        step: "04",
        title: "体积渲染 — 让伞盖透光发亮",
        description:
          "命中水母伞盖后，不是简单涂一个颜色，而是从内部发射 8 条子光线，在球体内部逐层采样发光纹路的密度。密度高的地方亮，密度低的地方暗，叠加后产生半透明的内发光效果。就像把手电筒放在果冻里——光会在内部散射，产生柔和的体积光。",
        glsl: "for(float i=0.; i<VOLUME_STEPS; i++) {\n  float sd = sph(o.uv, camRay.d, vec3(0.), .8+i*.015).x;\n  density += VolTex(o.uv, uv, 1.4+i*.03, o.pump);\n}\ncol = mix(col, accent*(density/VOLUME_STEPS), sat(density/VOLUME_STEPS));",
      },
      {
        step: "05",
        title: "菲涅尔反射 + 脉动动画",
        description:
          "水母伞盖边缘比正面更亮（菲涅尔效应）——就像站在湖边，正前方能看到水底，但远处的水面全是反光。脉动动画用 cos(x+cos(x)) 驱动——这不是简单的正弦波，而是「心跳」般的非对称节奏：快速收缩 + 缓慢舒张，模拟真实水母的肌肉运动。",
        glsl: "float fresnel = sat(1.+dot(camRay.d, n));\nfloat pump = cos(x+cos(x))+sin(2.*x)*.2+sin(4.*x)*.02;",
      },
    ],
    concepts: [
      {
        name: "有符号距离场",
        nameEN: "Signed Distance Function (SDF)",
        analogy:
          "想象你闭着眼在房间里走路。你伸出手，能感知到「离最近障碍物还有多远」。SDF 就是这个「距离感知器」——空间中每个点都知道自己离最近表面有多远。正值 = 在外面，负值 = 在里面，零 = 刚好在表面上。",
        explanation:
          "SDF 是一个标量函数 f(p)：给定空间中任意一点 p，返回该点到最近表面的有符号距离。球体 SDF = length(p) - r；两个 SDF 可以用 min（并集）、max（交集）、-f（反转）组合成复杂形状。smin/smax 是平滑版本，让交界处圆滑过渡。",
        whyItMatters:
          "SDF 是现代实时图形的核心技术。Unity 的 VFX Graph、Unreal 的 Nanite 都支持 SDF。字体渲染（TrueType）、物理碰撞检测、3D 打印的切片算法全部基于距离场。它比传统三角网格更适合描述有机形状和布尔运算。",
      },
      {
        name: "空间重复",
        nameEN: "Domain Repetition",
        analogy:
          "一面镜子只能反射你自己；但把两面镜子面对面放，你就看到了无穷个自己。mod 运算就是数学版的「对镜」——它把无限空间折叠到一个有限格子里，GPU 只需要计算一个格子的内容，就自动得到了无穷多份复制。",
        explanation:
          "p = mod(p, size) - size/2 将坐标 p 映射到 [-size/2, size/2] 的重复单元内。floor(p/size) 给出当前单元的整数 ID，可用于 hash 生成每个单元的随机参数。这是 O(1) 复杂度的无限复制——无论场景中有多少水母，GPU 的工作量不变。",
        whyItMatters:
          "《无人深空》18 万亿颗星球、Minecraft 的无限地形都用了空间重复。没有它，渲染无限场景需要无限内存。它是程序化生成的基石——用有限的规则生成无限的内容。",
      },
      {
        name: "体积渲染",
        nameEN: "Volumetric Rendering",
        analogy:
          "拍 X 光片时，X 射线穿过身体，在不同密度的组织中被不同程度地吸收和散射。体积渲染做的是一模一样的事——让虚拟光线穿过半透明物体，沿途累积颜色和亮度，最终形成「看得到内部结构」的效果。",
        explanation:
          "沿光线方向在物体内部均匀采样 N 个点（这里是 8 个），每个点查询发光纹路密度，然后累加。最终颜色 = Σ(density_i * color) / N。采样越多越精细但越慢。这里用球体求交来确定采样起点，避免在空气中浪费计算。",
        whyItMatters:
          "医学影像（CT/MRI）、天气预报（云层）、电影特效（烟雾/爆炸）全靠体积渲染。它突破了「表面渲染」的局限——不是所有东西都有清晰的表面，烟雾、云朵、水母伞盖都是半透明的体积。",
      },
      {
        name: "菲涅尔效应",
        nameEN: "Fresnel Effect",
        analogy:
          "站在湖边低头看——脚下的水很透明，能看到水底石头。但看向远处——水面变成了一面镜子，全是天空的倒影。这就是菲涅尔效应：观察角度越「擦边」（掠射），反射越强，透射越弱。",
        explanation:
          "fresnel = clamp(1 + dot(viewDir, normal), 0, 1)。当视线垂直于表面时 dot ≈ -1，fresnel ≈ 0（透明）；当视线平行于表面时 dot ≈ 0，fresnel ≈ 1（反射）。这是简化版的 Schlick 近似。水母用它来实现边缘发光——伞盖边缘比中心更亮。",
        whyItMatters:
          "几乎所有 3A 游戏都用菲涅尔：水面反射、玻璃折射、角色皮肤的次表面散射、汽车车漆的光泽。没有菲涅尔的材质看起来像塑料——加上菲涅尔立刻变得真实。它是「写实渲染」和「卡通渲染」之间最明显的差异之一。",
      },
    ],
    applications: [
      { field: "海洋纪录片", examples: "深海生物特效、水母群落模拟、海底生态可视化" },
      { field: "沉浸式艺术", examples: "数字水族馆、互动投影展览、冥想空间视觉设计" },
      { field: "游戏特效", examples: "水下关卡环境、魔法生物设计、科幻外星生态" },
      { field: "UI/品牌", examples: "生物科技公司品牌动画、医疗可视化、有机风格加载动画" },
    ],
    keyInsight:
      "Luminescence 的核心洞察是「生命感来自不对称节奏」。真实的水母不是匀速收缩的——它快速收缩（推进）然后缓慢舒张（滑行），就像心跳有收缩期和舒张期。cos(x+cos(x)) 这个简单的嵌套公式完美模拟了这种非对称周期运动，比 sin(x) 多了一层「节奏感」。这揭示了程序化动画的本质：不是模拟物理定律，而是捕捉运动的「韵律特征」。同样的思路可以生成走路、呼吸、鸟类飞行——关键不在于精确，而在于「看起来对」。",
  },
  trainjourney: {
    id: "trainjourney",
    title: "Train Journey",
    subtitle: "多层视差火车旅程",
    oneLiner: "用十几层噪声山叠出纵深，加一辆像素小火车穿行其间",
    whatYouSee:
      "想象你坐在火车窗边向外看——近处的山飞速后退，远处的山几乎不动。这就是视差滚动（parallax scrolling）的视觉效果。画面中有 14 层 FBM 噪声生成的山脉，每层以不同速度向左滚动，从最近的 1× 到最远的 100×，营造出深邃的空间纵深。画面下方有一辆由矩形和圆形组合的程序化小火车，烟囱冒出 FBM 烟雾，火车下方是铁桥的拱形结构。整个画面覆盖一层暗角和胶片颗粒，像老电影一样温暖。",
    pipeline: [
      {
        step: "01",
        title: "FBM 地形生成",
        description:
          "用分形布朗运动（FBM）生成每一层山脉的高度。像画家用不同粗细的笔触叠加——大的定义山脊轮廓，小的增加岩石细节。8 层 octave 逐次缩小（×0.7），频率翻倍，产生自然的分形质感。",
        glsl: "float fbm(vec2 x, int detail) {\n  float a = 0.0, b = 1.0, t = 0.0;\n  for (int i = 0; i < 8; i++) {\n    if (i >= detail) break;\n    a += b * valueNoise(x);\n    t += b; b *= 0.7; x *= 2.0;\n  }\n  return a / t;\n}",
      },
      {
        step: "02",
        title: "视差层叠加",
        description:
          "14 层山脉从前景到天际线依次排列，每层有不同的 midlevel（基线高度）、disp（起伏幅度）和 dist（距离系数）。距离越远的层，UV 滚动速度越慢（t/dist），产生视差深度感。每层还有 2-4 个色阶的轮廓线，模拟山的阴影和受光面。",
        glsl: "midlevel = 0.5;\ndisp = 2.3;\ndist = 30.0;\nuv2 = uv + vec2(t / dist + 20.5, 0.0);\nh = (fbm(uv2, 8) - 0.5) * disp;\nlayer(0.12, vec3(0.41, 0.27, 0.27));\nlayer(0.08, vec3(0.53, 0.35, 0.32));",
      },
      {
        step: "03",
        title: "程序化火车",
        description:
          "火车由简单的几何图元组合：用 step/box 函数画出车厢、车顶、连接件、机车头、烟囱。车轮是圆形 SDF（distance < radius）。fract(uv*9) 重复 UV 空间生成多节车厢。每个部件用 mix() 按遮罩覆盖到背景上。",
        glsl: "float wagon = 1.0;\nwagon *= 1.0 - step(0.45, uv.x);  // 左侧区域\nwagon *= 1.0 - step(0.115, uv.y); // 车厢上边\nwagon *= step(0.103, uv.y);        // 车厢下边\nwagon *= step(0.05, 1.0 - abs(uv2.x*2.0-1.0)); // 车厢间隔",
      },
      {
        step: "04",
        title: "烟雾与桥梁",
        description:
          "机车烟雾使用 FBM2（衰减 ×0.9，更蓬松）扰动一条从烟囱向左扩散的曲线，sqrt(x) 让烟雾越远越宽，exp(-x*10) 让它快速消散。铁桥用 fract(uv*3) 重复单元格，抛物线 pow(x-0.5,2)*0.15 画出拱形，配合 step/smoothstep 画横梁和竖柱。",
        glsl: "// 烟雾轮廓\nfloat x = -uv.x + 0.49;\nfloat y = abs(uv.y + h*0.4 - 0.16*sqrt(x) - 0.12)\n       - 0.8*x*exp(-x*10.0);\n// 桥拱\nk *= smoothstep(0.001, 0.003,\n  abs(uv2.y - pow(uv2.x-0.5, 2.0)*0.15 - 0.12));",
      },
      {
        step: "05",
        title: "胶片后处理",
        description:
          "最后两层效果赋予画面复古质感：胶片颗粒用 hash 函数生成随机噪点，按 uGrain 比例混入画面；暗角（vignette）用经典公式 16·u·v·(1-u)·(1-v) 计算边缘衰减，四角变暗、中心明亮，模拟老式镜头的光学特征。",
        glsl: "// 胶片颗粒\ncol = mix(col, grain, uGrain);\n// 暗角\ncol *= 0.5 + 0.5 * pow(\n  16.0*vUv.x*vUv.y*(1.0-vUv.x)*(1.0-vUv.y), 0.2);",
      },
    ],
    concepts: [
      {
        name: "视差滚动",
        nameEN: "Parallax Scrolling",
        analogy: "坐火车看风景——窗边的电线杆飞速后退，远处的山几乎不动。距离越远的物体，视觉移动速度越慢。",
        explanation:
          "通过给不同深度的层设置不同的滚动速度（uv.x += t/dist），距离系数 dist 从 1（最近）到 100（最远），产生 2D 画面中的 3D 纵深错觉。这是一种基于运动视差（motion parallax）的深度线索。",
        whyItMatters:
          "视差滚动是 2D 游戏和网页设计中最经典的深度营造手法。仅用 UV 偏移就能骗过视觉系统，让平面画面产生立体感。14 层叠加创造出电影级的景深效果。",
      },
      {
        name: "程序化 SDF 组合",
        nameEN: "Procedural SDF Composition",
        analogy: "用乐高积木拼火车——每个矩形、圆形都是一块积木，step() 和 box() 是裁切工具，mix() 是胶水。",
        explanation:
          "火车的每个部件（车厢、车顶、车轮、烟囱）都由简单的隐式函数定义：box() 判断点是否在矩形内，dot2() < r² 判断是否在圆内，fract(uv*9) 重复生成多节车厢。最终通过 mix() 按各遮罩的 alpha 顺序合成。",
        whyItMatters:
          "程序化几何不需要任何贴图资源，仅用数学函数就能生成任意复杂的 2D 图形。这个火车用不到 30 行代码就完成了形状定义，是 Shader 艺术中「以小博大」的典范。",
      },
      {
        name: "胶片后处理",
        nameEN: "Film Post-Processing",
        analogy: "给数字照片套上胶片滤镜——颗粒感让画面不再「数码味」，暗角把视线引向中心，像老照片一样温暖亲切。",
        explanation:
          "胶片颗粒用 hash 函数在每帧生成随机噪声，以低比例（~10%）混入画面。暗角使用 16uv(1-u)v(1-v) 的对称多项式，在画面四角衰减亮度。两者结合赋予画面模拟（analog）质感。",
        whyItMatters:
          "后处理效果是将「技术演示」变为「艺术作品」的最后一步。少量噪声打破了数字渲染的完美感，让画面更有温度。暗角自然引导注意力到画面中心的火车上。",
      },
    ],
    applications: [
      { field: "独立游戏", examples: "横版过关游戏背景、视觉小说场景、像素风开场动画" },
      { field: "网页设计", examples: "官网首屏视差滚动、产品展示页背景、创意工作室主页" },
      { field: "动态壁纸", examples: "桌面动态壁纸、手机锁屏动画、数字相框装饰" },
      { field: "影视片头", examples: "纪录片开场、旅行 Vlog 转场、复古风格 MV 背景" },
    ],
    keyInsight:
      "Train Journey 的核心洞察是「深度是速度差的错觉」。人类视觉系统通过物体的相对运动速度来推断距离——这叫运动视差（motion parallax），是我们日常生活中最强的深度线索之一。这个 shader 仅用 14 个不同速度的 2D 层就骗过了大脑的深度感知系统，创造出无限延伸的 3D 空间。同样的原理在电影中叫 multiplane camera（多层摄影机），迪士尼在 1937 年的《白雪公主》中首次使用。从物理层画到数学层，本质都是一个公式：视角速度 = 实际速度 / 距离。理解这个关系，你就掌握了所有 2D-to-3D 深度幻觉的钥匙。",
  },
  horizon: {
    id: "horizon",
    title: "Horizon",
    subtitle: "参数化视差山脉背景",
    oneLiner: "用循环生成任意数量的噪声山脉层，通过深度控制速度差产生无限纵深",
    whatYouSee:
      "一片无尽的山脉在缓缓滚动——远处的山几乎静止，近处的山飞速掠过。每座山都是 FBM 噪声生成的独特轮廓，颜色从天空渐变到近景。你可以实时调整层数（4-16层）、深度、起伏剧烈程度、甚至整个色调主题——从日落暖调到极地冰蓝，同一套算法生成完全不同的风景。这就是参数化程序生成的魅力：一个公式，无限风景。",
    pipeline: [
      {
        step: "01",
        title: "噪声地形函数",
        description:
          "FBM（分形布朗运动）是地形生成的核心。8 层 octave 逐层叠加，每层频率翻倍、振幅 ×0.7，就像用不同粗细的画笔叠加——大笔触画山脊，小笔触加岩石纹理。五阶 quintic 插值让过渡丝滑无锯齿。",
        glsl: "float fbm(vec2 x) {\n  float a = 0.0, b = 1.0, t = 0.0;\n  for (int i = 0; i < 8; i++) {\n    a += b * valueNoise(x);\n    t += b; b *= 0.7; x *= 2.0;\n  }\n  return a / t;\n}",
      },
      {
        step: "02",
        title: "参数化层循环",
        description:
          "用一个 for 循环取代硬编码的 14 层。每层根据 nearRatio（0=最远, 1=最近）自动计算滚动速度、基线高度、起伏幅度。远层慢、高、柔和；近层快、低、剧烈。每层有独特的 UV 偏移，确保山脉轮廓互不重复。",
        glsl: "for (int i = 0; i < 16; i++) {\n  if (i >= maxLayers) break;\n  float nearRatio = float(i) / max(float(maxLayers)-1.0, 1.0);\n  float scrollSpeed = mix(100.0, 1.0, nearRatio*nearRatio) * uDepth;\n  float baseline = mix(0.95, -0.1, nearRatio);\n}",
      },
      {
        step: "03",
        title: "深度色彩映射",
        description:
          "三色渐变系统：sky(color3) → mid(color2) → near(color1)。远层偏向天空色，近层偏向暖色/深色。分界点在 nearRatio=0.4，保证远景层占据更多的色域空间，视觉上更自然。每层还有 3 个亮度子层模拟山脊受光面。",
        glsl: "if (nearRatio < 0.4) {\n  layerColor = mix(uColor3*0.9, uColor2, nearRatio/0.4);\n} else {\n  layerColor = mix(uColor2, uColor1, (nearRatio-0.4)/0.6);\n}\n// 3 sub-layers: ridge → mid → shadow\nif (y < surface) col = layerColor;\nif (y < surface-0.04) col = layerColor * 0.82;\nif (y < surface-0.10) col = layerColor * 0.65;",
      },
      {
        step: "04",
        title: "天空渐变",
        description:
          "天空不是纯色——用 smoothstep 在 y 方向做渐变，底部略暗（0.85×sky color），顶部全亮。这让天空与最远山层自然衔接，避免生硬的色块边界。",
        glsl: "float skyGrad = smoothstep(0.3, 1.2, uv.y);\nvec3 col = mix(uColor3 * 0.85, uColor3, skyGrad);",
      },
      {
        step: "05",
        title: "后处理：颗粒与暗角",
        description:
          "胶片颗粒用每帧变化的 hash 噪声以低比例混入画面，打破数字渲染的「完美感」。暗角使用经典 16uv(1-u)v(1-v) 多项式衰减四角亮度，自然将视线引向画面中心。两个参数独立可调，从零到满。",
        glsl: "// Grain\ncol = mix(col, vec3(grain), uGrain);\n// Vignette\nfloat vig = pow(16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y), 0.2);\ncol *= mix(1.0, 0.5 + 0.5*vig, uVignette);",
      },
    ],
    concepts: [
      {
        name: "参数化程序生成",
        nameEN: "Parametric Procedural Generation",
        analogy: "一个菜谱可以做出无限种菜——同样的步骤，换食材（颜色）、调火候（速度）、改分量（层数），就是完全不同的风味。",
        explanation:
          "将硬编码的 14 层替换为参数驱动的循环：层数、深度、色彩都成为 uniform 变量。GPU 在每帧根据当前参数实时计算所有层，无需预烘焙。这是从「固定作品」到「生成系统」的本质跃迁。",
        whyItMatters:
          "参数化是程序生成的灵魂。一个参数化的 shader 可以生成无限变体——日落沙漠、极地冰川、午夜幽谷——只需调几个滑块。这正是游戏和影视中 PCG（程序化内容生成）的核心理念。",
      },
      {
        name: "运动视差",
        nameEN: "Motion Parallax",
        analogy: "坐车看风景：路边的树飞速后退，远山几乎不动。大脑通过速度差判断远近。",
        explanation:
          "每层的滚动速度 = t / dist，dist 从 1（最近）到 100（最远），形成二次曲线分布（nearRatio²）。这模拟了透视投影中「角速度与距离成反比」的物理规律，是 2D 画面中最强的深度线索。",
        whyItMatters:
          "运动视差是人类日常感知深度的主要方式之一（仅次于双目视差）。掌握这个原理，你可以在任何 2D 媒介中创造令人信服的 3D 空间感——网页、游戏、动画都适用。",
      },
      {
        name: "FBM 分形地形",
        nameEN: "FBM Fractal Terrain",
        analogy: "从太空看地球：大陆板块是最大的起伏，山脉是中等起伏，岩石是小起伏——它们在不同尺度上自相似。",
        explanation:
          "FBM 叠加 8 层噪声，每层频率 ×2、振幅 ×0.7。低频层决定山脊走势，高频层添加细节。0.7 的衰减比产生自然的 1/f 噪声特征，这与真实地形的功率谱分布惊人吻合。",
        whyItMatters:
          "FBM 是程序化地形生成的基石，从 Minecraft 到 3A 大作的开放世界都在使用。理解频率-振幅关系，你就能生成山脉、云层、海浪——自然界的大部分纹理都是分形的。",
      },
    ],
    applications: [
      { field: "动态壁纸", examples: "桌面/手机动态壁纸、数字相框、LED 墙面装饰" },
      { field: "游戏背景", examples: "横版游戏远景、主菜单动态背景、加载界面" },
      { field: "网页设计", examples: "着陆页首屏背景、博客 hero 区域、产品展示动态背景" },
      { field: "直播/视频", examples: "直播间虚拟背景、视频转场、音乐可视化底图" },
    ],
    keyInsight:
      "Horizon 的核心洞察是「参数化 = 从作品到工具的跃迁」。Train Journey 是一幅精心手绘的画——14 层手调颜色、固定的火车和桥梁；Horizon 是一台画画机器——用循环和参数取代硬编码，用三色渐变取代 40+ 个 RGB 值。看似简化，实则升维：一个固定作品只有一种形态，一个参数化系统拥有无限变体。这正是程序化生成（Procedural Generation）的哲学精髓——不要画一棵树，要写一个长树的规则。从游戏世界生成到 AI 辅助设计，参数化思维是通往「用代码创造世界」的第一步。",
  },
};
