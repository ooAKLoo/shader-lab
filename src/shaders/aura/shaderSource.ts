export const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Noise Aura — volumetric noise field with orb lighting
// Derived from the tunnel shader: keeps the core accumulation technique
// but replaces tunnel geometry with open-space noise clouds
export const fragmentShaderSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uDensity;
  uniform float uBrightness;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  // Orb — spiraling light source
  float orb(vec3 p, float t) {
    float ot = t * 3.0;
    return length(p - vec3(
      sin(ot * 0.3) * 4.0,
      cos(ot * 0.2) * 3.0,
      8.0 + t + sin(ot * 0.15) * 5.0
    ));
  }

  // Second orb for richer lighting
  float orb2(vec3 p, float t) {
    float ot = t * 2.5;
    return length(p - vec3(
      cos(ot * 0.4) * 3.0,
      sin(ot * 0.35) * 2.5,
      6.0 + t + cos(ot * 0.2) * 4.0
    ));
  }

  void main() {
    float t = iTime * uSpeed;
    vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

    // Gentle camera drift
    uv += vec2(sin(t * 0.08) * 0.15, cos(t * 0.12) * 0.1);

    float d = 0.0;
    vec3 col = vec3(0.0);

    for (float i = 0.0; i < 100.0; i += 1.0) {
      // Ray position, moving forward through noise field
      vec3 p = vec3(uv * d, d + t * 0.4);

      // Orb distances
      float e1 = orb(p, t) - 0.1;
      float e2 = orb2(p, t) - 0.1;
      float e = min(e1, e2);

      // Slow space rotation
      float angle = t * 0.08;
      float ca = cos(angle);
      float sa = sin(angle);
      p.xz = vec2(ca * p.x - sa * p.z, sa * p.x + ca * p.z);

      // Volumetric noise density
      float s = 0.0;
      for (float j = 0.0; j < 5.0; j += 1.0) {
        float a = exp2(j);
        p += cos(0.5 * t + p.yzx) * 0.15;
        s += abs(dot(sin(0.12 * t + p * a * uScale), vec3(0.6))) / a;
      }

      // Shape: subtract base threshold to create voids and clouds
      s = s * uDensity - 0.4;

      // Adaptive march step
      float eClamp = max(0.5 * e, 0.01);
      float stepSize = min(0.04 + 0.15 * max(abs(s), 0.01), eClamp);
      d += stepSize;

      // Volumetric glow: accumulate light based on proximity to noise surface
      float glow = 1.0 / (stepSize + eClamp * 2.0);

      // Orb-based color mixing
      float orbMix = exp(-e * 0.25);
      col += mix(uColor1, uColor2, orbMix) * glow;

      if (d > 40.0) break;
    }

    // Tanh tonemapping with brightness control
    col *= uBrightness / 12.0;
    vec3 e2x = exp(2.0 * clamp(col, -10.0, 10.0));
    col = (e2x - 1.0) / (e2x + 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`;
