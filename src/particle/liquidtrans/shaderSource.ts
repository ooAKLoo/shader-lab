export const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uSwirl;
uniform float uTurbulence;
uniform float uEdgeSoftness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
// Phase 1
uniform float uVignette;
uniform float uGrain;
// Phase 2
uniform vec2 uMouse;
uniform float uMouseForce;
uniform float uMouseRadius;
uniform float uSymmetry;
// Phase 3
uniform float uHueDrift;
uniform int uDistortion;
uniform int uTexture;

/* ---- Simplex 3D Noise (Ashima Arts) ---- */
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

/* ---- FBM (Fractal Brownian Motion) ---- */
float fbm(vec3 p, float turb) {
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 5; i++) {
    val += amp * snoise(p * freq);
    freq *= 2.0;
    amp *= 0.5;
    if (float(i) >= turb * 4.0) break;
  }
  return val;
}

/* ---- HSL helpers ---- */
vec3 rgb2hsl(vec3 c) {
  float maxC = max(c.r, max(c.g, c.b));
  float minC = min(c.r, min(c.g, c.b));
  float l = (maxC + minC) * 0.5;
  if (maxC == minC) return vec3(0.0, 0.0, l);
  float d = maxC - minC;
  float s = l > 0.5 ? d / (2.0 - maxC - minC) : d / (maxC + minC);
  float h;
  if (maxC == c.r) h = (c.g - c.b) / d + (c.g < c.b ? 6.0 : 0.0);
  else if (maxC == c.g) h = (c.b - c.r) / d + 2.0;
  else h = (c.r - c.g) / d + 4.0;
  h /= 6.0;
  return vec3(h, s, l);
}

float hue2rgb(float p, float q, float t) {
  if (t < 0.0) t += 1.0;
  if (t > 1.0) t -= 1.0;
  if (t < 1.0/6.0) return p + (q - p) * 6.0 * t;
  if (t < 1.0/2.0) return q;
  if (t < 2.0/3.0) return p + (q - p) * (2.0/3.0 - t) * 6.0;
  return p;
}

vec3 hsl2rgb(vec3 hsl) {
  if (hsl.y == 0.0) return vec3(hsl.z);
  float q = hsl.z < 0.5 ? hsl.z * (1.0 + hsl.y) : hsl.z + hsl.y - hsl.z * hsl.y;
  float p = 2.0 * hsl.z - q;
  return vec3(
    hue2rgb(p, q, hsl.x + 1.0/3.0),
    hue2rgb(p, q, hsl.x),
    hue2rgb(p, q, hsl.x - 1.0/3.0)
  );
}

vec3 shiftHue(vec3 rgb, float shift) {
  vec3 hsl = rgb2hsl(rgb);
  hsl.x = fract(hsl.x + shift);
  return hsl2rgb(hsl);
}

/* ---- Grain hash ---- */
float hash12(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

/* ---- Kaleidoscope ---- */
vec2 kaleidoscope(vec2 p, float segments) {
  if (segments <= 1.0) return p;
  float angle = atan(p.y, p.x);
  float r = length(p);
  float seg = 6.2831853 / segments;
  angle = mod(angle, seg);
  if (angle > seg * 0.5) angle = seg - angle;
  return vec2(cos(angle), sin(angle)) * r;
}

void main() {
  // 1. UV + aspect correction
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * uScale;

  // 2. Time
  float t = uTime * uSpeed;

  // 3. Mouse displacement
  vec2 mouseP = uMouse * vec2(aspect, 1.0) * uScale * 0.5;
  float mouseDist = length(p - mouseP);
  float mouseInfluence = smoothstep(uMouseRadius, 0.0, mouseDist) * uMouseForce;
  vec2 mouseDir = mouseDist > 0.001 ? normalize(p - mouseP) : vec2(0.0);
  p += mouseDir * mouseInfluence * 0.5;

  // 4. Kaleidoscope
  p = kaleidoscope(p, uSymmetry);

  // 5. Hue drift on colors
  vec3 c1 = uColor1;
  vec3 c2 = uColor2;
  vec3 c3 = uColor3;
  if (uHueDrift > 0.001) {
    float drift = t * uHueDrift * 0.1;
    c1 = shiftHue(c1, drift);
    c2 = shiftHue(c2, drift + 0.33);
    c3 = shiftHue(c3, drift + 0.67);
  }

  // 6. Domain warping with distortion style branching
  vec2 finalP;
  if (uDistortion == 0) {
    // Swirl (original)
    float warp1 = fbm(vec3(p * 0.8, t * 0.7), uTurbulence);
    float warp2 = fbm(vec3(p * 0.8 + 5.2, t * 0.7 + 1.3), uTurbulence);
    vec2 warped = p + vec2(warp1, warp2) * uSwirl;
    float warp3 = fbm(vec3(warped * 0.6, t * 0.5 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 0.6 + 3.7, t * 0.5 + 7.8), uTurbulence);
    finalP = warped + vec2(warp3, warp4) * uSwirl * 0.5;
  } else if (uDistortion == 1) {
    // Stretch — directional FBM along dominant axis
    float warp1 = fbm(vec3(p.x * 1.5, p.y * 0.3, t * 0.6), uTurbulence);
    float warp2 = fbm(vec3(p.x * 0.3, p.y * 1.5, t * 0.6 + 3.0), uTurbulence);
    vec2 warped = p + vec2(warp1 * uSwirl * 1.5, warp2 * uSwirl * 0.3);
    float warp3 = fbm(vec3(warped * 0.5 + 8.0, t * 0.4), uTurbulence);
    finalP = warped + vec2(warp3 * uSwirl * 0.4, 0.0);
  } else if (uDistortion == 2) {
    // Radial — polar coordinate warping
    float r = length(p);
    float a = atan(p.y, p.x);
    float warpR = fbm(vec3(r * 2.0, a * 0.5, t * 0.6), uTurbulence);
    float warpA = fbm(vec3(r * 0.5, a * 2.0, t * 0.5 + 5.0), uTurbulence);
    r += warpR * uSwirl * 0.3;
    a += warpA * uSwirl * 0.5;
    vec2 warped = vec2(cos(a), sin(a)) * r;
    float warp3 = fbm(vec3(warped * 0.6, t * 0.4 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 0.6 + 4.0, t * 0.4 + 7.0), uTurbulence);
    finalP = warped + vec2(warp3, warp4) * uSwirl * 0.3;
  } else {
    // Turbulent — high-frequency multi-layer warping
    float warp1 = fbm(vec3(p * 1.2, t * 0.8), uTurbulence);
    float warp2 = fbm(vec3(p * 1.2 + 5.2, t * 0.8 + 1.3), uTurbulence);
    vec2 warped = p + vec2(warp1, warp2) * uSwirl * 0.7;
    float warp3 = fbm(vec3(warped * 1.0, t * 0.7 + 10.0), uTurbulence);
    float warp4 = fbm(vec3(warped * 1.0 + 3.7, t * 0.7 + 7.8), uTurbulence);
    vec2 w2 = warped + vec2(warp3, warp4) * uSwirl * 0.5;
    float warp5 = fbm(vec3(w2 * 1.5, t * 0.6 + 20.0), uTurbulence);
    float warp6 = fbm(vec3(w2 * 1.5 + 2.0, t * 0.6 + 15.0), uTurbulence);
    finalP = w2 + vec2(warp5, warp6) * uSwirl * 0.3;
  }

  // 7. Noise → color band mapping
  float n = fbm(vec3(finalP * 0.7, t * 0.3), uTurbulence);
  float edge = uEdgeSoftness;
  n = n * 0.5 + 0.5;

  float band1 = smoothstep(0.0, 0.333 + edge, n) * (1.0 - smoothstep(0.333 - edge, 0.667, n));
  float band2 = smoothstep(0.333 - edge, 0.667 + edge, n) * (1.0 - smoothstep(0.667 - edge, 1.0, n));
  float band3 = smoothstep(0.667 - edge, 1.0, n);

  float total = band1 + band2 + band3;
  total = max(total, 0.001);
  band1 /= total;
  band2 /= total;
  band3 /= total;

  vec3 color = c1 * band1 + c2 * band2 + c3 * band3;

  // 8. Detail noise
  float detail = snoise(vec3(finalP * 3.0, t * 0.2)) * 0.08;
  color += detail;

  // 8.5 Texture / material style
  if (uTexture == 1) {
    // Silk — directional sheen highlights along flow
    float sheen = snoise(vec3(finalP.x * 8.0, finalP.y * 1.5, t * 0.15));
    sheen = smoothstep(0.2, 0.8, sheen * 0.5 + 0.5);
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    color += sheen * 0.12 * mix(vec3(1.0), color / max(lum, 0.01), 0.5);
  } else if (uTexture == 2) {
    // Oil — impasto bumps, contrast boost, thick ridges
    float bump = snoise(vec3(finalP * 12.0, t * 0.1));
    float ridge = abs(bump);
    ridge = pow(ridge, 0.6) * 0.15;
    color += ridge * sign(bump);
    // contrast boost
    color = (color - 0.5) * 1.15 + 0.5;
  } else if (uTexture == 3) {
    // Watercolor — desaturate, soft bleed, paper grain
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(lum), color, 0.7); // desaturate
    float paper = snoise(vec3(gl_FragCoord.xy * 0.03, 0.0)) * 0.06;
    color += paper;
    // soften: pull toward midtone
    color = mix(color, vec3(lum), 0.08);
  } else if (uTexture == 4) {
    // Metal — sharp contrast, specular peaks, saturate
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    // specular highlight from noise peaks
    float spec = smoothstep(0.55, 0.9, n) * 0.3;
    color += spec;
    // saturate
    color = mix(vec3(lum), color, 1.4);
    // hard contrast
    color = (color - 0.5) * 1.3 + 0.5;
  }

  // 9. Vignette
  vec2 vuv = uv - 0.5;
  float vig = smoothstep(1.2, 0.25, length(vuv * vec2(aspect, 1.0)));
  color *= (1.0 - uVignette) + uVignette * vig;

  // 10. Grain
  float g = hash12(gl_FragCoord.xy + uTime * 60.0) - 0.5;
  color += g * uGrain;

  // 11. Gamma (sqrt)
  color = sqrt(max(color, 0.0));

  // 12. Output
  gl_FragColor = vec4(color, 1.0);
}
`;
