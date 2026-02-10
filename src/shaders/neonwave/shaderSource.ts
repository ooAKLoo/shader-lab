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
  uniform float uHeight;
  uniform float uSmoothness;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  #define PI 3.141592654
  #define TAU (2.0*PI)

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  float tanh_approx(float x) {
    float e2x = exp(2.0 * x);
    return (e2x - 1.0) / (e2x + 1.0);
  }

  vec3 tanh_approx(vec3 v) {
    return vec3(tanh_approx(v.x), tanh_approx(v.y), tanh_approx(v.z));
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  vec4 alphaBlend(vec4 back, vec4 front) {
    float w = front.w + back.w*(1.0-front.w);
    vec3 xyz = (front.xyz*front.w + back.xyz*back.w*(1.0-front.w))/w;
    return w > 0.0 ? vec4(xyz, w) : vec4(0.0);
  }

  vec3 alphaBlend(vec3 back, vec4 front) {
    return mix(back, front.xyz, front.w);
  }

  float hash(float co) { return fract(sin(co*12.9898) * 13758.5453); }
  float hash(vec2 p) { float a = dot(p, vec2(127.1, 311.7)); return fract(sin(a)*43758.5453123); }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    float a = hash(i + vec2(0.0,0.0));
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float hifbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 5; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  float lofbm(vec2 p) {
    float sum = 0.0; float a = 1.0;
    for (int i = 0; i < 2; ++i) { sum += a*vnoise(p); a *= 0.5; p *= 2.0; }
    return sum;
  }

  vec3 toSpherical(vec3 p) {
    float r = length(p);
    float t = acos(p.z/r);
    float ph = atan(p.y, p.x);
    return vec3(r, t, ph);
  }

  float hiheight(vec2 p) { return hifbm(p) - uHeight; }
  float loheight(vec2 p) { return lofbm(p) - 2.15; }

  vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
    float h = hash(n);
    vec2 p = (pp-off*2.0*vec3(1.0, 1.0, 0.0)).xy;
    const vec2 stp = vec2(0.5, 0.33);
    float he = hiheight(vec2(p.x, pp.z)*stp);
    float lohe = loheight(vec2(p.x, pp.z)*stp);
    float d = p.y-he;
    float lod = p.y - lohe;
    float aa = distance(pp, npp)*sqrt(1.0/3.0);
    float t = smoothstep(aa * uSmoothness, -aa * uSmoothness, d);
    float df = exp(-0.1*(distance(ro, pp)-2.));
    float hue1 = rgb2hsv(uColor1).x;
    vec3 acol = hsv2rgb(vec3(mix(hue1 + 0.3, hue1, df), 0.9, mix(1.0, 0.0, df)));
    vec3 gcol = hsv2rgb(vec3(hue1, 0.5, tanh_approx(exp(-mix(2.0, 8.0, df)*lod))));
    return vec4(acol + 0.5*gcol, t);
  }

  vec3 skyColor(vec3 ro, vec3 rd) {
    vec3 lpos = 1E6*vec3(0., -0.15, 1.0);
    vec3 ldir = normalize(lpos);
    vec2 sp = toSpherical(rd.xzy).yz;
    float lf = pow(max(dot(ldir, rd), 0.0), 80.0);
    float li = 0.02*mix(1.0, 10.0, lf)/(abs((rd.y+0.055))+0.025);
    float hue1 = rgb2hsv(uColor1).x;
    float hue2 = rgb2hsv(uColor2).x;
    vec3 col = smoothstep(-0.4, 0.0, (sp.x-PI*0.5))*hsv2rgb(vec3(hue1, 0.9, 0.075));
    col += tanh_approx(hsv2rgb(vec3(hue2, 0.8, 1.0))*li);
    return col;
  }

  vec3 color(vec3 ww, vec3 uu, vec3 vv, vec3 ro, vec2 p) {
    float rdd = 2.0;
    vec3 rd = normalize(p.x*uu + p.y*vv + rdd*ww);
    vec3 nrd = normalize((p.x + 2.0/iResolution.y)*uu + (p.y + 2.0/iResolution.y)*vv + rdd*ww);

    const float planeDist = 1.0;
    const int furthest = 12;
    const float maxDist = planeDist*float(furthest);
    float nz = floor(ro.z / planeDist);

    vec3 skyCol = skyColor(ro, rd);
    vec4 acol = vec4(0.0);
    const float cutOff = 0.95;

    for (int i = 1; i <= furthest; ++i) {
      float pz = planeDist*nz + planeDist*float(i);
      float pd = (pz - ro.z)/rd.z;

      if (pd > 0.0 && acol.w < cutOff) {
        vec3 pp = ro + rd*pd;
        vec3 npp = ro + nrd*pd;

        if (pp.y < 5.0) {
          vec4 pcol = plane(ro, rd, pp, npp, vec3(0.0), nz+float(i));
          float fadeIn = smoothstep(maxDist, maxDist*0.5, pd);
          pcol.xyz = mix(skyCol, pcol.xyz, fadeIn);
          pcol = clamp(pcol, 0.0, 1.0);
          acol = alphaBlend(pcol, acol);
        }
      } else {
        break;
      }
    }
    return alphaBlend(skyCol, acol);
  }

  void main() {
    vec2 q = gl_FragCoord.xy / iResolution.xy;
    vec2 p = -1.0 + 2.0 * q;
    p.x *= iResolution.x / iResolution.y;

    float tm = iTime * uSpeed * 0.25;
    vec3 ro = vec3(0.0, 0.0, tm);
    vec3 dro = normalize(vec3(0.0, 0.09, 1.0));
    vec3 ww = normalize(dro);
    vec3 uu = normalize(cross(normalize(vec3(0.0,1.0,0.0)), ww));
    vec3 vv = normalize(cross(ww, uu));

    vec3 col = color(ww, uu, vv, ro, p);

    col *= smoothstep(0.0, 8.0, iTime - abs(q.y));

    // ACES Tonemap
    col = max(col, 0.0);
    col *= 0.6;
    float a = 2.51; float b = 0.03; float c = 2.43; float d = 0.59; float e = 0.14;
    col = clamp((col*(a*col+b))/(col*(c*col+d)+e), 0.0, 1.0);

    // Gamma
    col = pow(col, vec3(1.0/2.2));

    gl_FragColor = vec4(col, 1.0);
  }
`;
