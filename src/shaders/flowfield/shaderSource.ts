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
  uniform float uFlowSpeed;
  uniform float uStreakLength;
  uniform float uZoom;
  uniform float uTurbulence;
  uniform float uGridOpacity;

  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
      float v = 0.0;
      float amp = 0.5;
      float freq = 1.0;
      for (int i = 0; i < 5; i++) {
          v += amp * noise(p * freq);
          freq *= 2.0;
          amp *= 0.5;
      }
      return v;
  }

  vec2 getFlowField(vec2 p) {
      float t = iTime * uFlowSpeed;
      float zonal = sin(p.y * 3.0 + cos(p.y * 1.5));
      vec2 flow = vec2(zonal, 0.0);
      float eps = 0.05;
      vec2 shift = vec2(t * 0.2, 0.0);
      float n1 = fbm(p * 1.5 + shift);
      float n2 = fbm(p * 1.5 + vec2(eps, 0.0) + shift);
      float n3 = fbm(p * 1.5 + vec2(0.0, eps) + shift);
      vec2 curl = vec2((n3 - n1)/eps, -(n2 - n1)/eps);
      vec2 combined = flow * 0.5 + curl * uTurbulence;
      return combined;
  }

  vec3 getHeatmapColor(float t) {
      vec3 c0 = vec3(0.00, 0.05, 0.20);
      vec3 c1 = vec3(0.00, 0.35, 0.70);
      vec3 c2 = vec3(0.00, 0.70, 0.60);
      vec3 c3 = vec3(0.90, 0.90, 0.20);
      vec3 c4 = vec3(0.90, 0.20, 0.00);
      vec3 c5 = vec3(1.00, 0.95, 0.90);
      float v = clamp(t, 0.0, 1.0);
      vec3 col = c0;
      col = mix(col, c1, smoothstep(0.0, 0.2, v));
      col = mix(col, c2, smoothstep(0.2, 0.4, v));
      col = mix(col, c3, smoothstep(0.4, 0.7, v));
      col = mix(col, c4, smoothstep(0.7, 0.9, v));
      col = mix(col, c5, smoothstep(0.9, 1.0, v));
      return col;
  }

  void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= iResolution.x / iResolution.y;
      p *= uZoom;

      vec2 velocity = getFlowField(p);
      float speed = length(velocity);

      float cycleLen = 2.0;
      float timer = iTime * 0.5;
      float phase1 = fract(timer);
      float phase2 = fract(timer + 0.5);

      vec2 p1 = p - velocity * phase1 * uStreakLength;
      vec2 p2 = p - velocity * phase2 * uStreakLength;

      float noise1 = fbm(p1 * 4.0 + vec2(32.4, 9.2));
      float noise2 = fbm(p2 * 4.0 + vec2(51.2, 1.1));

      float blend = abs(2.0 * (0.5 - phase1));
      float streaks = mix(noise1, noise2, blend);
      streaks = smoothstep(0.3, 0.7, streaks);

      float speedNorm = smoothstep(0.0, 2.5, speed);
      vec3 baseColor = getHeatmapColor(speedNorm);

      float streakIntensity = smoothstep(0.1, 0.5, speedNorm);
      vec3 finalColor = baseColor * (0.7 + 0.6 * streaks * streakIntensity);

      float landNoise = fbm(p * 0.8 + vec2(10.0, 10.0));
      float landMask = smoothstep(0.55, 0.56, landNoise);
      finalColor = mix(finalColor, vec3(0.05, 0.08, 0.1), landMask * 0.8);

      vec2 gridUV = fract(p + 0.5);
      float grid = smoothstep(0.02, 0.0, abs(gridUV.x - 0.5)) + smoothstep(0.02, 0.0, abs(gridUV.y - 0.5));
      finalColor += vec3(0.3) * grid * uGridOpacity;

      float vig = 1.0 - length(uv - 0.5) * 0.6;
      finalColor *= vig;

      gl_FragColor = vec4(finalColor, 1.0);
  }
`;
