import type { FormationTarget, FormationType } from "../shared/types";

interface GenerateOpts {
  text?: string;
  color?: [number, number, number];
  radius?: number;
  opacity?: number;
  canvasWidth?: number;
  canvasHeight?: number;
  seed?: number;
  variation?: number;
  chaos?: number;
  textDensity?: number;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRng(seed: number): () => number {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function jitter(rng: () => number, amount: number): number {
  return (rng() - 0.5) * 2 * amount;
}

/**
 * Generate formation targets for a given type.
 * All positions are normalized to 0-1 range.
 * The caller maps them to actual canvas coordinates.
 */
export function generateFormation(type: FormationType, count: number, opts: GenerateOpts = {}): FormationTarget[] {
  const r = opts.color?.[0] ?? 180;
  const g = opts.color?.[1] ?? 180;
  const b = opts.color?.[2] ?? 185;
  const radius = opts.radius ?? 2.0;
  const opacity = opts.opacity ?? 1.0;
  const variation = clamp(opts.variation ?? 0, 0, 1);
  const chaos = clamp(opts.chaos ?? 0.35, 0, 1);
  const textDensity = clamp(opts.textDensity ?? 0.75, 0.2, 1);
  const seed = opts.seed ?? hashString(`${type}_${count}_${opts.text ?? ""}`);
  const rng = createRng(seed || 1);

  switch (type) {
    case "scatter":
      return genScatter(count, r, g, b, radius, opacity, rng, chaos);
    case "grid":
      return genGrid(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "wave":
      return genWave(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "circle":
      return genCircle(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "heart":
      return genHeart(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "text":
      return genText(
        count,
        opts.text ?? "love",
        r,
        g,
        b,
        radius,
        opacity,
        opts.canvasWidth ?? 800,
        opts.canvasHeight ?? 600,
        textDensity,
        rng
      );
    case "burst":
      return genBurst(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "spiral":
      return genSpiral(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "converge":
      return genConverge(count, r, g, b, radius, opacity, chaos, rng);
    case "rain":
      return genRain(count, r, g, b, radius, opacity, variation, chaos, rng);
    case "ripple":
      return genRipple(count, r, g, b, radius, opacity, variation, chaos, rng);
    default:
      return genScatter(count, r, g, b, radius, opacity, rng, chaos);
  }
}

/* ── Scatter: seeded randomness with controllable chaos ── */
function genScatter(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  rng: () => number,
  chaos: number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const edgeSpread = 0.25 + chaos * 0.8;
  for (let i = 0; i < n; i++) {
    const angle = rng() * Math.PI * 2;
    const dist = Math.pow(rng(), 0.7 + (1 - chaos) * 1.8) * 0.5 * edgeSpread;
    targets.push({
      x: clamp(0.5 + Math.cos(angle) * dist + jitter(rng, chaos * 0.025), 0, 1),
      y: clamp(0.5 + Math.sin(angle) * dist + jitter(rng, chaos * 0.03), 0, 1),
      radius: radius * (0.5 + rng() * (0.7 + chaos * 0.5)),
      opacity: opacity * (0.3 + rng() * 0.7),
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Grid: ordered motif with slight narrative warp ── */
function genGrid(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const cols = Math.ceil(Math.sqrt(n * 1.5));
  const rows = Math.ceil(n / cols);
  const targets: FormationTarget[] = [];
  const padX = 0.08;
  const padY = 0.08;
  const colDenom = Math.max(cols - 1, 1);
  const rowDenom = Math.max(rows - 1, 1);
  const warp = variation * 0.018;

  for (let i = 0; i < n; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const baseX = padX + (col / colDenom) * (1 - 2 * padX);
    const baseY = padY + (row / rowDenom) * (1 - 2 * padY);
    const wave = Math.sin(col * 0.35 + row * 0.17 + variation * Math.PI);
    targets.push({
      x: clamp(baseX + wave * warp * 0.35 + jitter(rng, chaos * 0.006), 0, 1),
      y: clamp(baseY + wave * warp + jitter(rng, chaos * 0.008), 0, 1),
      radius: radius * (0.9 + variation * 0.15),
      opacity,
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Wave ── */
function genWave(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const rows = 10 + Math.round(variation * 6);
  const perRow = Math.ceil(n / rows);
  const freq = 2.3 + variation * 2.4;
  const amp = 0.02 + variation * 0.025;
  const phase = variation * Math.PI * 0.8;

  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / perRow);
    const col = i % perRow;
    const baseY = 0.1 + (row / Math.max(rows - 1, 1)) * 0.8;
    const xNorm = col / Math.max(perRow - 1, 1);
    const waveOffset = Math.sin(xNorm * Math.PI * freq + row * 0.75 + phase) * amp;
    targets.push({
      x: clamp(0.05 + xNorm * 0.9 + jitter(rng, chaos * 0.004), 0, 1),
      y: clamp(baseY + waveOffset + jitter(rng, chaos * 0.01), 0, 1),
      radius: radius * (0.78 + variation * 0.12),
      opacity,
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Circle ── */
function genCircle(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const rings = 4 + Math.round(variation * 3);
  let idx = 0;
  for (let ring = 0; ring < rings && idx < n; ring++) {
    const ringRadius = 0.08 + (ring / Math.max(rings - 1, 1)) * (0.28 + variation * 0.1);
    const dotsInRing = ring === 0 ? 1 : Math.min(Math.ceil(n / rings), n - idx);
    for (let j = 0; j < dotsInRing && idx < n; j++) {
      const angle = (j / Math.max(dotsInRing, 1)) * Math.PI * 2 + ring * variation * 0.18;
      const stretchY = 1.1 + variation * 0.3;
      targets.push({
        x: clamp(0.5 + Math.cos(angle) * ringRadius + jitter(rng, chaos * 0.006), 0, 1),
        y: clamp(0.5 + Math.sin(angle) * ringRadius * stretchY + jitter(rng, chaos * 0.008), 0, 1),
        radius: radius * (0.6 + ring * 0.1),
        opacity,
        r,
        g,
        b,
      });
      idx++;
    }
  }

  while (targets.length < n) {
    const src = targets[targets.length % Math.max(targets.length, 1)] ?? { x: 0.5, y: 0.5 };
    targets.push({
      x: clamp(src.x + jitter(rng, 0.01), 0, 1),
      y: clamp(src.y + jitter(rng, 0.01), 0, 1),
      radius: radius * 0.55,
      opacity: opacity * 0.7,
      r,
      g,
      b,
    });
  }

  return targets;
}

/* ── Heart shape ── */
function genHeart(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const layers = 4;
  let idx = 0;
  for (let layer = 0; layer < layers && idx < n; layer++) {
    const scale = 0.014 + layer * 0.005 + variation * 0.002;
    const dotsInLayer = Math.ceil(n / layers);
    for (let j = 0; j < dotsInLayer && idx < n; j++) {
      const t = (j / Math.max(dotsInLayer, 1)) * Math.PI * 2 + layer * 0.1 + variation * 0.35;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      targets.push({
        x: clamp(0.5 + hx * scale + jitter(rng, chaos * 0.006), 0, 1),
        y: clamp(0.48 + hy * scale + jitter(rng, chaos * 0.006), 0, 1),
        radius: radius * (0.68 + layer * 0.13),
        opacity: opacity * (0.58 + layer * 0.1),
        r,
        g,
        b,
      });
      idx++;
    }
  }
  return targets;
}

/* ── Text formation via offscreen canvas pixel sampling ── */
const textCache = new Map<string, { x: number; y: number }[]>();

function sampleTextPixels(
  text: string,
  canvasW: number,
  canvasH: number,
  sampleCount: number,
  density: number,
  rng: () => number
): { x: number; y: number }[] {
  const key = `${text}_${canvasW}_${canvasH}_${sampleCount}_${density.toFixed(2)}`;
  const cached = textCache.get(key);
  if (cached) return cached;

  const offscreen = document.createElement("canvas");
  const scale = 2;
  offscreen.width = canvasW * scale;
  offscreen.height = canvasH * scale;
  const ctx = offscreen.getContext("2d");
  if (!ctx) return [];

  const fontSize = (Math.min(canvasW, canvasH) * scale * 0.42 * (0.85 + density * 0.25)) / Math.max(text.length, 1);
  ctx.font = `bold ${Math.max(fontSize, 22)}px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000";
  ctx.fillText(text, offscreen.width / 2, offscreen.height / 2);

  const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
  const pixels: { x: number; y: number }[] = [];
  const step = Math.max(2, Math.round(5 - density * 3));
  for (let y = 0; y < offscreen.height; y += step) {
    for (let x = 0; x < offscreen.width; x += step) {
      const alpha = imageData.data[(y * offscreen.width + x) * 4 + 3];
      if (alpha > 128) {
        pixels.push({ x: x / offscreen.width, y: y / offscreen.height });
      }
    }
  }

  const result: { x: number; y: number }[] = [];
  if (pixels.length === 0) return result;

  if (pixels.length <= sampleCount) {
    result.push(...pixels);
    while (result.length < sampleCount) {
      const src = pixels[Math.floor(rng() * pixels.length)];
      result.push({
        x: clamp(src.x + jitter(rng, 0.004), 0, 1),
        y: clamp(src.y + jitter(rng, 0.004), 0, 1),
      });
    }
  } else {
    const shuffled = [...pixels];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    result.push(...shuffled.slice(0, sampleCount));
  }

  textCache.set(key, result);
  return result;
}

function genText(
  n: number,
  text: string,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  canvasW: number,
  canvasH: number,
  density: number,
  rng: () => number
): FormationTarget[] {
  const pixels = sampleTextPixels(text, canvasW, canvasH, n, density, rng);
  return pixels.map((p) => ({
    x: p.x,
    y: p.y,
    radius: radius * (0.75 + density * 0.1),
    opacity,
    r,
    g,
    b,
  }));
}

/* ── Burst: explode from center ── */
function genBurst(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const span = 0.3 + variation * 0.2;
  for (let i = 0; i < n; i++) {
    const angle = rng() * Math.PI * 2;
    const dist = 0.08 + Math.pow(rng(), 0.45 + chaos * 0.9) * span;
    targets.push({
      x: clamp(0.5 + Math.cos(angle) * dist + jitter(rng, chaos * 0.02), 0, 1),
      y: clamp(0.5 + Math.sin(angle) * dist * (1.05 + variation * 0.25) + jitter(rng, chaos * 0.02), 0, 1),
      radius: radius * (0.35 + rng() * 1.1),
      opacity: opacity * (0.45 + rng() * 0.55),
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Spiral ── */
function genSpiral(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const turns = 3 + variation * 2.5;
  for (let i = 0; i < n; i++) {
    const t = i / Math.max(n - 1, 1);
    const angle = t * Math.PI * 2 * turns;
    const dist = 0.02 + t * (0.3 + variation * 0.14);
    targets.push({
      x: clamp(0.5 + Math.cos(angle) * dist + jitter(rng, chaos * 0.01), 0, 1),
      y: clamp(0.5 + Math.sin(angle) * dist + jitter(rng, chaos * 0.01), 0, 1),
      radius: radius * (0.48 + t * (0.75 + variation * 0.2)),
      opacity: opacity * (0.5 + t * 0.5),
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Converge: all dots rush to center ── */
function genConverge(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const spread = 0.035 + chaos * 0.04;
  for (let i = 0; i < n; i++) {
    const angle = rng() * Math.PI * 2;
    const dist = rng() * spread;
    targets.push({
      x: 0.5 + Math.cos(angle) * dist,
      y: 0.5 + Math.sin(angle) * dist,
      radius: radius * 1.45,
      opacity,
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Rain: dots fall vertically ── */
function genRain(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  for (let i = 0; i < n; i++) {
    const lane = (i + rng()) / Math.max(n - 1, 1);
    targets.push({
      x: clamp(lane + jitter(rng, 0.06 + chaos * 0.04), 0, 1),
      y: clamp(rng(), 0, 1),
      radius: radius * (0.35 + rng() * (0.45 + variation * 0.2)),
      opacity: opacity * (0.22 + rng() * 0.5),
      r,
      g,
      b,
    });
  }
  return targets;
}

/* ── Ripple: concentric rings ── */
function genRipple(
  n: number,
  r: number,
  g: number,
  b: number,
  radius: number,
  opacity: number,
  variation: number,
  chaos: number,
  rng: () => number
): FormationTarget[] {
  const targets: FormationTarget[] = [];
  const rings = 6 + Math.round(variation * 4);
  let idx = 0;
  for (let ring = 0; ring < rings && idx < n; ring++) {
    const ringR = 0.04 + (ring / Math.max(rings - 1, 1)) * (0.36 + variation * 0.08);
    const dotsInRing = Math.max(10, Math.floor((n / rings) * (0.55 + ring / Math.max(rings - 1, 1))));
    for (let j = 0; j < dotsInRing && idx < n; j++) {
      const angle = (j / dotsInRing) * Math.PI * 2 + variation * ring * 0.2;
      targets.push({
        x: clamp(0.5 + Math.cos(angle) * ringR + jitter(rng, chaos * 0.008), 0, 1),
        y: clamp(0.5 + Math.sin(angle) * ringR + jitter(rng, chaos * 0.008), 0, 1),
        radius: radius * (0.52 + (1 - ring / rings) * 0.75),
        opacity: opacity * (0.45 + (1 - ring / rings) * 0.55),
        r,
        g,
        b,
      });
      idx++;
    }
  }

  while (targets.length < n) {
    const angle = rng() * Math.PI * 2;
    const ringR = rng() * 0.4;
    targets.push({
      x: 0.5 + Math.cos(angle) * ringR,
      y: 0.5 + Math.sin(angle) * ringR,
      radius: radius * 0.5,
      opacity: opacity * 0.3,
      r,
      g,
      b,
    });
  }

  return targets;
}

/** Clear text cache (call when canvas resizes) */
export function clearTextCache(): void {
  textCache.clear();
}
