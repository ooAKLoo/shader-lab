import { SpotlightParams } from './types';

export const DEFAULT_CONFIG: SpotlightParams = {
  text: 'Hello there!',
  bgColor: '#2128bd',
  shape1Color: '#005ffe',
  shape1Size: 650,
  shape2Color: '#ffe5e3',
  shape2Size: 440,
  shape3Color: '#ffcc57',
  shape3Size: 270,
  cursorSize: 20,
  stagger: 0.1,
  fontSize: 120,
};

export const COLOR_PRESETS = [
  {
    id: 'original',
    label: 'Original',
    bg: '#2128bd',
    shape1: '#005ffe',
    shape2: '#ffe5e3',
    shape3: '#ffcc57',
  },
  {
    id: 'sunset',
    label: 'Sunset',
    bg: '#1a0033',
    shape1: '#ff3366',
    shape2: '#ff9933',
    shape3: '#ffcc00',
  },
  {
    id: 'ocean',
    label: 'Ocean',
    bg: '#001a33',
    shape1: '#0066cc',
    shape2: '#00ccff',
    shape3: '#66ffcc',
  },
  {
    id: 'forest',
    label: 'Forest',
    bg: '#1a3300',
    shape1: '#336600',
    shape2: '#66cc33',
    shape3: '#ccff66',
  },
] as const;
