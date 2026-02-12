# dotgrid2 分层结构

- `layer1_preprocess/`
  - 离线预处理与 look-ahead 数据生成。
  - `preprocess.ts`

- `layer2_analysis/`
  - 实时分析与算法融合层（dB 频段权重、onset、BPM、峰值保持、预处理融合）。
  - `useAudioAnalyzer.ts`
  - `autoDirector.ts`

- `layer3_render/`
  - 粒子渲染与交互控制层（Canvas 动画、控制面板、时间轴、形态生成）。
  - `Dotgrid2Canvas.tsx`
  - `Dotgrid2Controls.tsx`
  - `timeline.ts`
  - `formations.ts`

- `content/`
  - 曲目与歌词相关资源逻辑。
  - `media.ts`
  - `lyrics.ts`

- `shared/`
  - 共享类型与配置。
  - `types.ts`
  - `constants.ts`
