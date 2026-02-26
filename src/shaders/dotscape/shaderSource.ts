export const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const fragmentShaderSource = `
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uGridDensity;
  uniform float uWarpStrength;
  uniform float uDotSize;
  uniform float uBrightness;
  uniform vec3 uColorLow;
  uniform vec3 uColorHigh;

  // ── Simplex 2D Noise ──
  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                             + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                             dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // ── FBM (4 octaves) ──
  float fbm(vec2 p) {
    float f = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      f += amp * snoise(p * freq);
      freq *= 2.0;
      amp *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;

    float t = iTime * uSpeed;

    // ── Domain Warping ──
    // Two layers of FBM warp for organic flowing folds
    vec2 baseP = uv * 1.8; // base scale for warp field

    vec2 warp1 = vec2(
      fbm(baseP * 0.8 + t * 0.12 + 0.0),
      fbm(baseP * 0.8 + t * 0.12 + 5.3)
    );

    vec2 warp2 = vec2(
      fbm(baseP * 0.6 + warp1 * 1.8 + t * 0.08 + 3.1),
      fbm(baseP * 0.6 + warp1 * 1.8 + t * 0.08 + 7.7)
    );

    // Warped UV — this creates the undulating fold patterns
    vec2 warpedUV = uv + warp2 * uWarpStrength * 0.15;

    // Scale to grid
    vec2 p = warpedUV * uGridDensity;

    // ── Compute local density via derivatives ──
    // dFdx/dFdy tell us how much the warped grid changes per pixel
    // High change = stretched (dark), low change = compressed (bright)
    vec2 dpx = dFdx(p);
    vec2 dpy = dFdy(p);
    // Local area of one grid cell in screen space (Jacobian determinant)
    float localArea = abs(dpx.x * dpy.y - dpx.y * dpy.x);
    // Invert: compressed areas (small localArea) → bright
    // Normalize: at no warp, localArea ≈ (gridDensity/resolution)^2
    float refArea = (uGridDensity / iResolution.y) * (uGridDensity / iResolution.y);
    float density = refArea / max(localArea, 0.0001);
    density = clamp(density, 0.0, 3.0);

    // ── Grid ──
    vec2 cellId = floor(p);
    vec2 cellUV = fract(p) - 0.5;

    // ── Find nearest dot in 3x3 neighborhood ──
    float minDist = 1.0;

    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 offset = vec2(float(dx), float(dy));
        vec2 neighborId = cellId + offset;

        // Slight jitter for organic feel
        vec2 jitter = vec2(
          snoise(neighborId * 0.37 + 1.0) * 0.06,
          snoise(neighborId * 0.37 + 2.0) * 0.06
        );

        vec2 dotPos = offset + jitter - cellUV;
        float d = length(dotPos);

        if (d < minDist) {
          minDist = d;
        }
      }
    }

    // ── Dot rendering ──
    // Uniform small dot size, slightly modulated by density
    float baseSize = 0.28 * uDotSize;
    float sizeScale = baseSize * mix(0.7, 1.0, clamp(density * 0.5, 0.0, 1.0));
    sizeScale = max(sizeScale, 0.02);
    float dotVal = smoothstep(sizeScale, sizeScale * 0.2, minDist);

    // ── Color — density drives brightness ──
    // Compressed areas glow bright, stretched areas stay dark
    float brightness = smoothstep(0.3, 2.0, density) * uBrightness;
    vec3 col = mix(uColorLow, uColorHigh, brightness);
    col *= dotVal;

    // Extra glow in compressed areas
    col += col * smoothstep(1.0, 2.5, density) * 0.4;

    // ── Vignette ──
    float vigDot = uv.x * uv.x + uv.y * uv.y;
    float vig = 1.0 - vigDot * 1.2;
    vig = smoothstep(0.0, 1.0, vig);
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;
