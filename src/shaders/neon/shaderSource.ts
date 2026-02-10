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
  uniform float uHueShift;
  uniform float uSaturation;
  uniform float uBrightness;
  uniform float uWarpStrength;

  float hash(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return fract(sin(p.x) * 43758.5453);
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
      for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.0;
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

      // Domain Warping
      vec2 movement = vec2(iTime * uSpeed * 0.2, iTime * uSpeed * 0.1);
      float n1 = fbm(uv * uScale * 3.0 + movement);

      vec2 distortedUV = uv + vec2(n1) * uWarpStrength;
      float n2 = fbm(distortedUV * uScale * 6.0 - movement);

      // Neon Color Mapping
      float hue = fract(uHueShift + iTime * 0.1 + n2 * 0.4);
      float sat = uSaturation;
      float val = (0.2 + 0.8 * n2) * uBrightness;

      vec3 col = hsv2rgb(vec3(hue, sat, val));

      // Contrast Enhancement
      col = smoothstep(0.1, 0.9, col);

      gl_FragColor = vec4(col, 1.0);
  }
`;
