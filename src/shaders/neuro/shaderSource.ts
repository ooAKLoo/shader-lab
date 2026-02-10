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
  uniform float uZoom;
  uniform float uColorShift;
  uniform float uComplexity;
  uniform float uContrast;

  // Simplex Noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
      v += a * snoise(st);
      st = rot * st * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  // Hue rotation
  vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
  }

  void main() {
    vec2 st = gl_FragCoord.xy / iResolution.xy;
    st.x *= iResolution.x / iResolution.y;
    st *= uZoom;

    vec3 color = vec3(0.0);

    // Domain warping
    float t = iTime * uSpeed * 0.2;

    vec2 q = vec2(0.);
    q.x = fbm(st + 0.0);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    float complexFactor = 0.5 + 0.5 * uComplexity;
    r.x = fbm(st + 1.0*q*complexFactor + vec2(1.7,9.2) + 0.15*t);
    r.y = fbm(st + 1.0*q*complexFactor + vec2(8.3,2.8) + 0.126*t);

    float f = fbm(st + r);

    // Colors
    vec3 baseC = vec3(0.02, 0.02, 0.05);
    vec3 col1 = vec3(0.0, 0.5, 0.6);  // Cyan
    vec3 col2 = vec3(0.6, 0.1, 0.4);  // Magenta

    // Apply Hue Shift
    col1 = hueShift(col1, uColorShift);
    col2 = hueShift(col2, uColorShift + 1.0);

    // Mix colors
    color = mix(vec3(0.01), baseC, clamp(f*f*4.0, 0.0, 1.0));
    color = mix(color, col1, clamp(length(q), 0.0, 1.0));
    color = mix(color, col2, clamp(length(r.x), 0.0, 1.0));

    // Dynamic Lines
    float line1 = smoothstep(0.9, 0.95, sin(f * 50.0 * uComplexity + t * 2.0));
    float line2 = smoothstep(0.95, 0.98, sin(r.y * 30.0 * uComplexity - t * 1.0));

    // Additive light for lines
    color += (col1 + 0.4) * line1 * 0.3 * uContrast;
    color += (col2 + 0.4) * line2 * 0.3 * uContrast;

    // Contrast & Gamma
    float gamma = 1.4 - (uContrast - 1.0) * 0.5;
    color = pow(color, vec3(gamma));
    color *= uContrast;

    gl_FragColor = vec4(color, 1.0);
  }
`;
