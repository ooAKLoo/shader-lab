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
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uSpeed;
  uniform float uDensity;
  uniform float uSuction;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float persistence = 0.5;
    float scale = 1.0;
    for(int i = 0; i < 5; i++) {
        total += snoise(p * scale) * persistence;
        scale *= 2.0;
        persistence *= 0.5;
    }
    return total;
  }

  void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
      float r = length(uv);
      float angle = atan(uv.y, uv.x);

      float twist = 5.0 * uSuction;
      float rotationSpeed = uSpeed * 0.5;
      float theta = angle + (1.0 / (r + 0.1)) * twist - iTime * rotationSpeed;
      float radialOffset = iTime * uSpeed * 0.5;

      vec2 spiralUV = vec2(cos(theta), sin(theta)) * (r - radialOffset) * uDensity;

      float n = fbm(spiralUV + vec2(iTime * 0.1));
      n = n * 0.5 + 0.5;
      float n2 = fbm(spiralUV + n * 2.0);

      vec3 col = mix(uColor1, uColor2, n2);

      float glow = 0.02 / (r * r + 0.001);
      col += glow * uColor1;
      col *= (1.0 + n * 0.5);

      float maskRadius = 0.45;
      float maskSoftness = 0.3;
      float vignette = 1.0 - smoothstep(maskRadius, maskRadius + maskSoftness, r);
      col *= vignette;
      col = 1.0 - exp(-col * 1.5);

      gl_FragColor = vec4(col, 1.0);
  }
`;
