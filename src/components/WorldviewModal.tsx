import React, { useEffect } from "react";

interface WorldviewModalProps {
  onClose: () => void;
}

export const WorldviewModal: React.FC<WorldviewModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 flex-shrink-0">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-neutral-800">
                图形学世界观
              </span>
              <span className="text-[10px] text-neutral-400">
                Three.js / WebGL / Shader / GPU
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              理清这些概念的关系，建立图形学的全局认知
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2L10 10M10 2L2 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto min-h-0 px-6 pb-6">
          {/* 核心层级 */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
              核心层级
            </div>
            <p className="text-[11px] text-neutral-600 leading-[1.7] mb-3">
              你可以把它们的关系想象成一家<span className="font-semibold">高级餐厅</span>的运作模式：
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                { num: "1", name: "Three.js", role: "餐厅经理", desc: "如果你只想点菜，找他就行" },
                { num: "2", name: "WebGL", role: "厨房规范", desc: "规定了怎么使用火、怎么用水" },
                { num: "3", name: "Shader", role: "大厨", desc: "真正动刀、炒菜、控制火候的人" },
                { num: "4", name: "GPU", role: "炉灶与锅具", desc: "物理硬件，提供算力" },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2.5">
                  <span className="text-[9px] font-semibold text-neutral-300 flex-shrink-0 w-4">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-semibold text-neutral-700">{item.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400">
                    {item.role}
                  </span>
                  <span className="text-[9px] text-neutral-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 详细拆解 */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
              详细拆解
            </div>
            <div className="flex flex-col gap-2">
              {/* Three.js */}
              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-semibold text-neutral-700">Three.js</span>
                  <span className="text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400">
                    餐厅经理 / 3D 引擎
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <p className="text-[10px] text-neutral-600 leading-[1.6] italic">
                    它是一个 JavaScript 库。它的存在就是为了让你不直接去写 WebGL。
                  </p>
                </div>
                <p className="text-[10px] text-neutral-500 leading-[1.6] mb-1.5">
                  如果没有 Three.js，你想画一个球，你需要写几百行代码去定义每一个顶点的位置。有了 Three.js，你只需要写一句话：<code className="text-[9px] font-mono bg-neutral-50 px-1 py-0.5 rounded">new THREE.SphereGeometry()</code>。它负责管理相机、灯光、场景图、模型加载等"宏观"事务。
                </p>
              </div>

              {/* WebGL */}
              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-semibold text-neutral-700">WebGL</span>
                  <span className="text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400">
                    厨房规范 / 浏览器接口
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <p className="text-[10px] text-neutral-600 leading-[1.6] italic">
                    它是浏览器和显卡（GPU）之间对话的标准接口。
                  </p>
                </div>
                <p className="text-[10px] text-neutral-500 leading-[1.6]">
                  它极其底层、极其繁琐。Three.js 的底层就是基于 WebGL 构建的。在 AI 辅助编程的时代，通常不需要直接写 WebGL 代码，除非你要做极度深度的性能优化。
                </p>
              </div>

              {/* Shader */}
              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-semibold text-neutral-700">Shader（着色器）</span>
                  <span className="text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400">
                    大厨 / 特效核心
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <p className="text-[10px] text-neutral-600 leading-[1.6] italic">
                    这是一段运行在显卡（GPU）上的小程序。它用的语言叫 GLSL（看上去有点像 C 语言）。
                  </p>
                </div>
                <p className="text-[10px] text-neutral-500 leading-[1.6] mb-2">
                  它决定了屏幕上的每一个像素具体是什么颜色。当你使用 <code className="text-[9px] font-mono bg-neutral-50 px-1 py-0.5 rounded">MeshStandardMaterial</code> 时，Three.js 已经在后台自动为你写好了一段 Shader。当你想要流体、SDF、像水银一样变形的效果时，就需要自己写 Shader。
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 bg-neutral-50 rounded-lg px-2.5 py-2">
                    <div className="text-[9px] font-semibold text-neutral-500 mb-1">顶点着色器</div>
                    <p className="text-[9px] text-neutral-400 leading-[1.5]">Vertex Shader — 处理形状，把 3D 空间的点算成屏幕上的 2D 坐标</p>
                  </div>
                  <div className="flex-1 bg-neutral-50 rounded-lg px-2.5 py-2">
                    <div className="text-[9px] font-semibold text-neutral-500 mb-1">片元着色器</div>
                    <p className="text-[9px] text-neutral-400 leading-[1.5]">Fragment Shader — 处理颜色，计算每个像素该是什么颜色、多亮</p>
                  </div>
                </div>
              </div>

              {/* GPU */}
              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-semibold text-neutral-700">GPU（显卡）</span>
                  <span className="text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400">
                    炉灶与锅具 / 硬件
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <p className="text-[10px] text-neutral-600 leading-[1.6] italic">
                    物理硬件，Shader 代码最终在这里并行执行。
                  </p>
                </div>
                <p className="text-[10px] text-neutral-500 leading-[1.6]">
                  GPU 拥有数千个小核心，可以同时处理屏幕上每一个像素的计算。这就是为什么 Shader 能实时渲染复杂特效——它是真正的"并行计算引擎"。
                </p>
              </div>
            </div>
          </div>

          {/* 协作流程 */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
              协作流程 — 以 SDF 形变为例
            </div>
            <p className="text-[11px] text-neutral-600 leading-[1.7] mb-3">
              回到"SDF 形变"的问题，看看三者如何配合：
            </p>
            <div className="flex flex-col gap-2">
              {[
                {
                  step: "1",
                  title: "Three.js 的工作",
                  desc: "在屏幕上放了一块「画布」（通常是一个简单的平面 Plane），搭建好舞台。",
                },
                {
                  step: "2",
                  title: "Shader 的工作",
                  desc: "这才是主角。你在 Shader 里写下 SDF 的数学公式（Raymarching 算法）。",
                },
                {
                  step: "3",
                  title: "渲染结果",
                  desc: "虽然 Three.js 认为场景里只是一个平面的板子，但 Shader 在这个板子的每一个像素上疯狂计算，画出了一个看起来像 3D 的、流动的、可以融合的「假」物体。",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4">
                      {item.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-neutral-700 mb-1">
                        {item.title}
                      </div>
                      <p className="text-[10px] text-neutral-500 leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt 指南 */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
              Prompt 指南 — 如何精准指挥 AI
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-xl p-3">
                <div className="text-[10px] font-semibold text-neutral-700 mb-1.5">
                  场景 1：常规 3D 效果
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <div className="text-[9px] font-semibold text-neutral-500 mb-1">关键词</div>
                  <p className="text-[9px] text-neutral-400 leading-[1.5]">
                    Three.js, Mesh, Geometry, Material, Light
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2">
                  <div className="text-[9px] font-semibold text-neutral-500 mb-1">指令示例</div>
                  <p className="text-[9px] text-neutral-400 leading-[1.5] italic">
                    "用 Three.js 帮我写一个场景，放一个红色的球体，给一点环境光。"
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3">
                <div className="text-[10px] font-semibold text-neutral-700 mb-1.5">
                  场景 2：酷炫特效
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                  <div className="text-[9px] font-semibold text-neutral-500 mb-1">关键词</div>
                  <p className="text-[9px] text-neutral-400 leading-[1.5]">
                    ShaderMaterial, GLSL, Fragment Shader, Vertex Shader, Uniforms
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg px-2.5 py-2">
                  <div className="text-[9px] font-semibold text-neutral-500 mb-1">指令示例</div>
                  <p className="text-[9px] text-neutral-400 leading-[1.5] italic">
                    "用 Three.js 的 ShaderMaterial 实现一个特效，写一段 GLSL 代码，用 SDF 和 Raymarching 画一个蠕动的液态球。"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 总结表格 */}
          <div className="bg-neutral-800 rounded-2xl p-4">
            <div className="text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-3">
              总结
            </div>
            <div className="overflow-hidden rounded-xl">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-neutral-500">
                    <th className="text-left font-medium px-3 py-2 bg-neutral-700/50">概念</th>
                    <th className="text-left font-medium px-3 py-2 bg-neutral-700/50">角色</th>
                    <th className="text-left font-medium px-3 py-2 bg-neutral-700/50">语言</th>
                    <th className="text-left font-medium px-3 py-2 bg-neutral-700/50">什么时候用到</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-400">
                  <tr className="border-t border-neutral-700/50">
                    <td className="px-3 py-2 font-semibold text-neutral-300">Three.js</td>
                    <td className="px-3 py-2">建筑师 / 总管</td>
                    <td className="px-3 py-2">JavaScript</td>
                    <td className="px-3 py-2">99% 的 Web 3D 开发都从这里开始</td>
                  </tr>
                  <tr className="border-t border-neutral-700/50">
                    <td className="px-3 py-2 font-semibold text-neutral-300">Shader</td>
                    <td className="px-3 py-2">具体的画师</td>
                    <td className="px-3 py-2">GLSL</td>
                    <td className="px-3 py-2">自定义特效（水流、火焰、粒子、SDF）</td>
                  </tr>
                  <tr className="border-t border-neutral-700/50">
                    <td className="px-3 py-2 font-semibold text-neutral-300">WebGL</td>
                    <td className="px-3 py-2">底层基石</td>
                    <td className="px-3 py-2">API</td>
                    <td className="px-3 py-2">几乎不需要直接写，知道它是基石就行</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-neutral-500 leading-[1.6] mt-3">
              <span className="text-neutral-300 font-semibold">Three.js 是容器，Shader 是内容。</span>你要的"丝滑形变"就是通过 Three.js 这个容器，运行了一段高级的 Shader 内容。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
