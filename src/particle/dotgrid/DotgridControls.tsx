import React, { useMemo } from "react";
import type { DotgridParams } from "./types";
import { PhaseTimeline, type PhaseInfo } from "../PhaseTimeline";

interface Props {
  params: DotgridParams;
  onChange: (params: DotgridParams) => void;
  animStateRef?: React.RefObject<{ phase: number; progress: number }>;
}

const Slider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}> = ({ label, value, min, max, step, onChange }) => (
  <div>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-[9px] font-semibold text-neutral-700 tabular-nums">
        {step >= 1 ? value : value.toFixed(step >= 0.1 ? 1 : 2)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-neutral-200 rounded-full appearance-none cursor-pointer"
    />
  </div>
);

export const DotgridControls: React.FC<Props> = ({ params: rawParams, onChange, animStateRef }) => {
  const params = { shrinkDuration: 1200, spinDuration: 1000, ...rawParams };

  const phases: PhaseInfo[] = useMemo(() => [
    {
      name: "Spread",
      duration: params.spreadDuration,
      color: "#7c93ab",
      copyText: `[阶段: Spread] 时长: ${params.spreadDuration}ms | 缓动: easeInOutQuart(全局进度) + easeOutQuint(单点进度) | 交错: stagger=${params.stagger}(基于到中心距离的延迟, 中心先到达, 边缘后到达) | 视觉: 所有圆点从画布中心飞向各自的网格位置, opacity 0→1, 半径 ${(params.dotRadius * 0.67).toFixed(1)}→${params.dotRadius}px`,
    },
    {
      name: "Morph",
      duration: params.morphDuration,
      color: "#ab8f6e",
      copyText: `[阶段: Morph] 时长: ${params.morphDuration}ms | 缓动: easeOutQuint(easeInOutCubic(t)) 双重缓动嵌套 | 同步变形(无交错) | 视觉: 圆点半径缩小至15%(${params.dotRadius}→${(params.dotRadius * 0.15).toFixed(2)}px), 十字臂从0生长至${params.gridSize / 2}px, 臂宽从${params.dotRadius}px渐变为1px`,
    },
    {
      name: "Shrink",
      duration: params.shrinkDuration,
      color: "#9e7eab",
      copyText: `[阶段: Shrink] 时长: ${params.shrinkDuration}ms | 缓动: easeInOutCubic | 视觉: 十字臂从${params.gridSize / 2}px收缩至${(params.gridSize * 0.2).toFixed(1)}px, 形成独立分离的十字形`,
    },
    {
      name: "Spin",
      duration: params.spinDuration,
      color: "#ab6e7e",
      copyText: `[阶段: Spin] 时长: ${params.spinDuration}ms | 缓动: easeInOutCubic | 视觉: 每个独立十字臂绕中心旋转360°, 臂长${(params.gridSize * 0.2).toFixed(1)}px`,
    },
    {
      name: "Hold",
      duration: 600,
      color: "#6e9e7e",
      copyText: `[阶段: Hold] 时长: 600ms | 静态显示独立十字形, 臂长${(params.gridSize * 0.2).toFixed(1)}px, 线宽1px`,
    },
  ], [params.spreadDuration, params.morphDuration, params.shrinkDuration, params.spinDuration, params.stagger, params.dotRadius, params.gridSize]);

  const totalCopyText = useMemo(() => {
    const total = params.spreadDuration + params.morphDuration + params.shrinkDuration + params.spinDuration + 600;
    return `[动画: Dot Grid] 总时长: ${total}ms (5阶段循环)
网格: ${params.gridSize}px间距, 圆点半径: ${params.dotRadius}px, 颜色: rgb(${params.colorR},${params.colorG},${params.colorB})

阶段1 — Spread (${params.spreadDuration}ms):
  缓动: easeInOutQuart(全局) + easeOutQuint(每个点)
  交错延迟: stagger=${params.stagger} (基于到画布中心的距离, 中心先到达, 边缘后到达)
  视觉: 圆点从画布中心飞向网格位置, opacity 0→1, 半径 ${(params.dotRadius * 0.67).toFixed(1)}→${params.dotRadius}px

阶段2 — Morph (${params.morphDuration}ms):
  缓动: easeOutQuint(easeInOutCubic(t)) 双重缓动嵌套
  所有点同步变形(无交错)
  视觉: 圆点半径缩小至15%, 四方向十字臂从0生长到${params.gridSize / 2}px, 臂宽度从dotRadius渐变到1px

阶段3 — Shrink (${params.shrinkDuration}ms):
  缓动: easeInOutCubic
  视觉: 十字臂从${params.gridSize / 2}px收缩至${(params.gridSize * 0.2).toFixed(1)}px, 形成独立分离的十字形

阶段4 — Spin (${params.spinDuration}ms):
  缓动: easeInOutCubic
  视觉: 每个独立十字臂绕自身中心旋转360°

阶段5 — Hold (600ms):
  静态显示独立十字形`;
  }, [params]);

  return (
    <>
      {/* Phase Timeline */}
      {animStateRef && (
        <PhaseTimeline
          phases={phases}
          animStateRef={animStateRef}
          totalCopyText={totalCopyText}
        />
      )}

      {/* Grid */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Grid
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Grid Size"
            value={params.gridSize}
            min={12}
            max={48}
            step={2}
            onChange={(v) => onChange({ ...params, gridSize: v })}
          />
          <Slider
            label="Dot Radius"
            value={params.dotRadius}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(v) => onChange({ ...params, dotRadius: v })}
          />
        </div>
      </div>

      {/* Animation */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Animation
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Speed"
            value={params.speed}
            min={0.3}
            max={3.0}
            step={0.1}
            onChange={(v) => onChange({ ...params, speed: v })}
          />
          <Slider
            label="Stagger"
            value={params.stagger}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => onChange({ ...params, stagger: v })}
          />
          <Slider
            label="Spread Duration"
            value={params.spreadDuration}
            min={800}
            max={5000}
            step={100}
            onChange={(v) => onChange({ ...params, spreadDuration: v })}
          />
          <Slider
            label="Morph Duration"
            value={params.morphDuration}
            min={800}
            max={5000}
            step={100}
            onChange={(v) => onChange({ ...params, morphDuration: v })}
          />
          <Slider
            label="Shrink Duration"
            value={params.shrinkDuration}
            min={400}
            max={3000}
            step={100}
            onChange={(v) => onChange({ ...params, shrinkDuration: v })}
          />
          <Slider
            label="Spin Duration"
            value={params.spinDuration}
            min={400}
            max={3000}
            step={100}
            onChange={(v) => onChange({ ...params, spinDuration: v })}
          />
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-xl p-3 mb-2">
        <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
          Color
        </div>
        <div className="flex flex-col gap-3">
          <Slider
            label="Red"
            value={params.colorR}
            min={0}
            max={255}
            step={1}
            onChange={(v) => onChange({ ...params, colorR: v })}
          />
          <Slider
            label="Green"
            value={params.colorG}
            min={0}
            max={255}
            step={1}
            onChange={(v) => onChange({ ...params, colorG: v })}
          />
          <Slider
            label="Blue"
            value={params.colorB}
            min={0}
            max={255}
            step={1}
            onChange={(v) => onChange({ ...params, colorB: v })}
          />
        </div>
      </div>
    </>
  );
};
