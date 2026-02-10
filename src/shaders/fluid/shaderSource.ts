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
  uniform float uScale;
  uniform float uHueSpeed;
  uniform float uSaturation;
  uniform float uBrightness;
  uniform float uContrast;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.1;
      a *= 0.5;
    }
    return v;
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    // Double Domain Warping
    float t = iTime * uSpeed;
    vec2 q = vec2(
      fbm(uv * uScale + t * 0.1),
      fbm(uv * uScale + vec2(1.0))
    );

    vec2 r = vec2(
      fbm(uv * uScale + q + t * 0.15),
      fbm(uv * uScale + q)
    );

    float n = fbm(uv * uScale + r);

    // Colorize with HSV
    float hue = fract(t * uHueSpeed * 0.05 + n * 0.3);
    vec3 col = hsv2rgb(vec3(hue, uSaturation, uBrightness * n + 0.2));

    // Contrast Enhancement
    col = pow(col, vec3(uContrast));
    col *= 1.4;

    gl_FragColor = vec4(col, 1.0);
  }
`;
