import { FlipParams } from './types';

export const DEFAULT_CONFIG: FlipParams = {
  stagger: 0.07,
  duration: 0.7,
  autoPlay: true,
  interval: 1.5,
  spinOnFinal: true,
  colorF: '#88ce02',
  colorL: '#f178b6',
  colorI: '#7dc8eb',
  colorP: '#0ae448',
  textColor: '#ffffff',
  bgColor: '#1a1a1a',
  fontSize: 10,
};

export const LAYOUTS = [
  { id: 'final', label: 'Final', description: 'FLIP for GSAP' },
  { id: 'plain', label: 'Plain', description: 'Text only' },
  { id: 'columns', label: 'Columns', description: '4 columns' },
  { id: 'grid', label: 'Grid', description: '2×2 grid' },
] as const;

export const COLOR_PRESETS = [
  {
    id: 'original',
    label: 'Original',
    colors: {
      colorF: '#88ce02',
      colorL: '#f178b6',
      colorI: '#7dc8eb',
      colorP: '#0ae448',
    },
  },
  {
    id: 'sunset',
    label: 'Sunset',
    colors: {
      colorF: '#ff6b6b',
      colorL: '#feca57',
      colorI: '#ff9ff3',
      colorP: '#ee5a6f',
    },
  },
  {
    id: 'ocean',
    label: 'Ocean',
    colors: {
      colorF: '#00d2ff',
      colorL: '#3a7bd5',
      colorI: '#2196f3',
      colorP: '#00bcd4',
    },
  },
  {
    id: 'forest',
    label: 'Forest',
    colors: {
      colorF: '#56ab2f',
      colorL: '#a8e063',
      colorI: '#38ef7d',
      colorP: '#11998e',
    },
  },
] as const;
