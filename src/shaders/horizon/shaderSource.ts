export const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const fragmentShaderSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uLayers;
  uniform float uDepth;
  uniform float uTurbulence;
  uniform float uGrain;
  uniform float uVignette;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float valueNoise(vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    float a = hash(p);
    float b = hash(p + vec2(1.0, 0.0));
    float c = hash(p + vec2(0.0, 1.0));
    float d = hash(p + vec2(1.0, 1.0));
    return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
  }

  float fbm(vec2 x) {
    float a = 0.0;
    float b = 1.0;
    float t = 0.0;
    for (int i = 0; i < 8; i++) {
      a += b * valueNoise(x);
      t += b;
      b *= 0.7;
      x *= 2.0;
    }
    return a / t;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.y;
    vec2 screenUv = gl_FragCoord.xy / iResolution.xy;
    float t = iTime * uSpeed;

    // Sky gradient
    float skyGrad = smoothstep(0.3, 1.2, uv.y);
    vec3 col = mix(uColor3 * 0.85, uColor3, skyGrad);

    int maxLayers = int(uLayers);

    // Render from farthest (i=0) to nearest (i=maxLayers-1)
    for (int i = 0; i < 16; i++) {
      if (i >= maxLayers) break;

      float nearRatio = float(i) / max(float(maxLayers) - 1.0, 1.0);

      // Parallax: far layers scroll slow, near layers fast
      float scrollSpeed = mix(100.0, 1.0, nearRatio * nearRatio) * uDepth;

      // Vertical baseline: far layers high, near layers low
      float baseline = mix(0.95, -0.1, nearRatio);

      // Displacement: varies with depth for natural look
      float disp = mix(3.5, 1.7, nearRatio) * uTurbulence;

      // Unique offset per layer so each ridge is different
      float offset = float(maxLayers - i) * 3.7 + float(i * i) * 0.3;

      vec2 samplePos = uv + vec2(t / scrollSpeed + offset, 0.0);
      float h = (fbm(samplePos) - 0.5) * disp;

      float surface = h + baseline;
      float adjustedY = uv.y - 0.15;

      // Color: interpolate from far(color3) → mid(color2) → near(color1)
      vec3 layerColor;
      if (nearRatio < 0.4) {
        layerColor = mix(uColor3 * 0.9, uColor2, nearRatio / 0.4);
      } else {
        layerColor = mix(uColor2, uColor1, (nearRatio - 0.4) / 0.6);
      }

      // 3 sub-layers: ridge highlight → mid → shadow base
      if (adjustedY < surface) {
        col = layerColor;
      }
      if (adjustedY < surface - 0.04) {
        col = layerColor * 0.82;
      }
      if (adjustedY < surface - 0.10) {
        col = layerColor * 0.65;
      }
    }

    // Film grain
    float grain = hash(uv * 100.0 + vec2(t * 0.17, t * 0.13));
    col = mix(col, vec3(grain), uGrain);

    // Vignette
    float vig = pow(16.0 * screenUv.x * screenUv.y * (1.0 - screenUv.x) * (1.0 - screenUv.y), 0.2);
    col *= mix(1.0, 0.5 + 0.5 * vig, uVignette);

    gl_FragColor = vec4(col, 1.0);
  }
`;
