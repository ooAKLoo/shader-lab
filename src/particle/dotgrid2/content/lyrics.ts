export interface LyricLine {
  time: number;
  text: string;
}

export function parseLrc(content: string): LyricLine[] {
  const lines = content.split(/\r?\n/);
  const result: LyricLine[] = [];

  for (const rawLine of lines) {
    if (!rawLine.trim()) continue;

    const matches = [...rawLine.matchAll(/\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\]/g)];
    if (matches.length === 0) continue;

    const text = rawLine.replace(/\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\]/g, "").trim();
    if (!text) continue;

    for (const m of matches) {
      const mm = Number(m[1]);
      const ss = Number(m[2]);
      const t = mm * 60 + ss;
      if (!Number.isFinite(t)) continue;
      result.push({ time: t, text });
    }
  }

  result.sort((a, b) => a.time - b.time);
  return result;
}

export async function loadLrc(url: string): Promise<LyricLine[]> {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) return [];
    const txt = await res.text();
    return parseLrc(txt);
  } catch {
    return [];
  }
}

export function getLyricAtTime(lines: LyricLine[], t: number): { current: string; next: string; index: number } {
  if (lines.length === 0) return { current: "", next: "", index: -1 };

  let idx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (t >= lines[i].time) {
      idx = i;
      break;
    }
  }

  if (idx < 0) {
    return {
      current: "",
      next: lines[0]?.text ?? "",
      index: -1,
    };
  }

  return {
    current: lines[idx]?.text ?? "",
    next: lines[idx + 1]?.text ?? "",
    index: idx,
  };
}
