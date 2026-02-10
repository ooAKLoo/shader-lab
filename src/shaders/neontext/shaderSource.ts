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
  uniform float uTextGlow;
  uniform float uTextScale;
  uniform float uTerrainBrightness;

  #define PI 3.141592654
  #define TAU (2.0*PI)

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

  float tanh_approx(float x) {
    float x2 = x*x;
    return clamp(x*(27.0 + x2)/(27.0+9.0*x2), -1.0, 1.0);
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

  vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
    vec3 oc = ro - sph.xyz;
    float b = dot( oc, rd );
    float c = dot( oc, oc ) - sph.w*sph.w;
    float h = b*b - c;
    if( h<0.0 ) return vec2(-1.0);
    h = sqrt( h );
    return vec2(-b - h, -b + h);
  }

  vec3 toSpherical(vec3 p) {
    float r = length(p);
    float t = acos(p.z/r);
    float ph = atan(p.y, p.x);
    return vec3(r, t, ph);
  }

  float hiheight(vec2 p) { return hifbm(p)-1.8; }

  // Simple SDF for drawing line segments
  float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
  }

  // Draw "NEON" text using line segments
  float sdText(vec2 p) {
    p *= uTextScale;
    float d = 100.0;
    float w = 0.05;

    // N
    vec2 p1 = p - vec2(-0.6, 0.0);
    float n = min(sdSegment(p1, vec2(-0.2,-0.3), vec2(-0.2,0.3)), sdSegment(p1, vec2(0.2,-0.3), vec2(0.2,0.3)));
    n = min(n, sdSegment(p1, vec2(-0.2,0.3), vec2(0.2,-0.3)));
    d = min(d, n);

    // E
    vec2 p2 = p - vec2(-0.1, 0.0);
    float e = sdSegment(p2, vec2(-0.2,-0.3), vec2(-0.2,0.3));
    e = min(e, sdSegment(p2, vec2(-0.2,0.3), vec2(0.2,0.3)));
    e = min(e, sdSegment(p2, vec2(-0.2,0.0), vec2(0.1,0.0)));
    e = min(e, sdSegment(p2, vec2(-0.2,-0.3), vec2(0.2,-0.3)));
    d = min(d, e);

    // O
    vec2 p3 = p - vec2(0.4, 0.0);
    float o = abs(length(p3) - 0.25);
    d = min(d, o);

    // N
    vec2 p4 = p - vec2(0.9, 0.0);
    float n2 = min(sdSegment(p4, vec2(-0.2,-0.3), vec2(-0.2,0.3)), sdSegment(p4, vec2(0.2,-0.3), vec2(0.2,0.3)));
    n2 = min(n2, sdSegment(p4, vec2(-0.2,0.3), vec2(0.2,-0.3)));
    d = min(d, n2);

    return smoothstep(w, w*0.8, d);
  }

  vec4 moon(vec3 ro, vec3 rd) {
    vec4 mdim = vec4(1E5*vec3(0., 0.4, 1.0), 20000.0);
    vec2 md = raySphere(ro, rd, mdim);
    vec3 mpos = ro + rd*md.x;
    vec3 mnor = normalize(mpos-mdim.xyz);

    float mf = smoothstep(0.0, 10000.0, md.y - md.x);

    // Map sphere surface to 2D
    vec2 sp = toSpherical(-mnor.zxy).yz;
    sp.x -= PI*0.5;
    sp *= 2.0;

    float txt = sdText(sp);

    // Neon pink/purple glow
    vec3 neonCol = vec3(1.0, 0.1, 0.8) * uTextGlow * txt;
    vec3 baseCol = hsv2rgb(vec3(0.75, 0.7, 0.2));

    vec3 col = baseCol + neonCol;
    return vec4(col, mf);
  }

  vec4 plane(vec3 ro, vec3 rd, vec3 pp, vec3 npp, vec3 off, float n) {
    float h = hash(n);
    vec2 p = (pp-off*2.0*vec3(1.0, 1.0, 0.0)).xy;
    const vec2 stp = vec2(0.5, 0.33);
    float he = hiheight(vec2(p.x, pp.z)*stp);
    float d = p.y-he;
    float aa = distance(pp, npp)*sqrt(1.0/3.0);
    float t = smoothstep(aa, -aa, d);
    float df = exp(-0.1*(distance(ro, pp)-2.));
    vec3 acol = hsv2rgb(vec3(mix(0.8, 0.6, df), 0.8, mix(0.5, 0.0, df) * uTerrainBrightness));
    return vec4(acol, t);
  }

  vec3 skyColor(vec3 ro, vec3 rd) {
    vec4 mcol = moon(ro, rd);
    vec3 col = vec3(0.05, 0.0, 0.1);
    col = mix(col, mcol.xyz, mcol.w);
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

    float tm = iTime * 0.25;
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
