import { EchotraceParams } from './types';

export const DEFAULT_CONFIG: EchotraceParams = {
  trailLength: 30,
  shape: 'circle',
  text: 'Echo',
  size: 40,
  opacityDecay: true,
  scaleDecay: true,
  rotationSpeed: 0,
  hueSpeed: 2,
  baseHue: 280,
  blendMode: 'screen',
  spread: 1,
  lag: 0.1,
};

export const BLEND_MODES = [
  { value: 'normal', label: 'Normal' },
  { value: 'screen', label: 'Glow' },
  { value: 'difference', label: 'Psychedelic' },
  { value: 'exclusion', label: 'X-Ray' },
  { value: 'plus-lighter', label: 'Neon' },
] as const;

export const SHAPES = [
  { value: 'circle', label: '●' },
  { value: 'square', label: '■' },
  { value: 'triangle', label: '▲' },
  { value: 'star', label: '★' },
  { value: 'text', label: 'Aa' },
] as const;
