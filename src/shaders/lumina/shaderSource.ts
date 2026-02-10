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
  uniform float u_speed;
  uniform float u_zoom;
  uniform float u_warpStrength;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;

  float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  #define OCTAVES 6
  float fbm(in vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
    }
    return value;
  }

  vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return a + b*cos(6.28318*(c*t+d));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv.x *= iResolution.x / iResolution.y;
    vec2 p = uv * u_zoom;
    float t = iTime * u_speed;

    vec2 q = vec2(0.0);
    q.x = fbm(p + vec2(0.0, 0.0) + 0.05*t);
    q.y = fbm(p + vec2(5.2, 1.3) + 0.05*t);

    vec2 r = vec2(0.0);
    r.x = fbm(p + u_warpStrength*q + vec2(1.7, 9.2) + 0.15*t);
    r.y = fbm(p + u_warpStrength*q + vec2(8.3, 2.8) + 0.126*t);

    float f = fbm(p + u_warpStrength*r);

    vec3 color = mix(u_color1, u_color2, clamp(length(q), 0.0, 1.0));
    vec3 highlight = u_color3;
    float highlightMix = smoothstep(0.2, 0.8, f);
    color = mix(color, highlight, highlightMix);

    vec3 accent = mix(u_color2, u_color3, 0.5) * 1.2;
    color = mix(color, accent, smoothstep(0.0, 1.0, length(r.x) * length(r.y)));

    vec3 oilPalette = palette(
      length(q) + f,
      (u_color1 + u_color2) * 0.5,
      (u_color3 - u_color1) * 0.5,
      vec3(1.0, 1.0, 1.0),
      vec3(0.0, 0.33, 0.67)
    );

    color = mix(color, oilPalette, 0.3);
    color *= f * f * 2.5 + 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`;
