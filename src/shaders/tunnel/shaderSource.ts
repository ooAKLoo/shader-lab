export const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Volumetric Warp Tunnel — based on raymarching + FBM noise displacement
export const fragmentShaderSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uSpeed;
  uniform float uTwist;
  uniform float uNoise;
  uniform float uWidth;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  float orb(vec3 p, float t) {
    float ot = t * 4.0;
    return length(p - vec3(
      sin(sin(ot * 0.2) + ot * 0.4) * 6.0,
      1.0 + sin(sin(ot * 0.5) + ot * 0.2) * 4.0,
      12.0 + t + cos(ot * 0.3) * 8.0
    ));
  }

  void main() {
    float t = iTime * uSpeed;
    vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

    // Camera sway
    uv += vec2(cos(t * 0.1) * 0.3, cos(t * 0.3) * 0.1);

    float d = 0.0;
    vec3 col = vec3(0.0);

    for (float i = 0.0; i < 128.0; i += 1.0) {
      // Ray position
      vec3 p = vec3(uv * d, d + t);

      // Orb distance
      float e = orb(p, t) - 0.1;

      // Twist space
      float angle = uTwist * (0.1 * t + p.z / 8.0);
      vec4 cv = cos(angle + vec4(0.0, 33.0, 11.0, 0.0));
      p.xy = mat2(cv.x, cv.y, cv.z, cv.w) * p.xy;

      // Mirrored tunnel walls
      float s = uWidth - abs(p.y);

      // Noise octaves (6 iterations: 0.8 → 25.6)
      for (float j = 0.0; j < 6.0; j += 1.0) {
        float a = 0.8 * exp2(j);
        p += cos(0.7 * t + p.yzx) * 0.2;
        s -= abs(dot(sin(0.1 * t + p * a), vec3(0.6))) / a * uNoise;
      }

      // Adaptive march step
      float eClamp = max(0.5 * e, 0.01);
      float stepSize = min(0.03 + 0.2 * abs(s), eClamp);
      d += stepSize;

      // Volumetric glow accumulation
      float glow = 1.0 / (stepSize + eClamp * 3.0);
      float orbInfluence = exp(-e * 0.3);
      col += mix(uColor1, uColor2, orbInfluence) * glow;
    }

    // Tanh tonemapping
    col /= 10.0;
    vec3 e2x = exp(2.0 * clamp(col, -10.0, 10.0));
    col = (e2x - 1.0) / (e2x + 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`;
