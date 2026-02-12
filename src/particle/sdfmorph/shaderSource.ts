export const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const fragmentShader = `
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

uniform float uBpm;
uniform float uGlobalSpeed;
uniform int uEaseId;

uniform float uMorphBloat;
uniform float uLiquidMix;
uniform float uLiquidK;
uniform float uLiquidMidBoost;

uniform float uSizeMain;
uniform float uStarInnerRatio;
uniform int uStarPoints;

uniform int uSeq[5];

uniform float uRotBase;
uniform float uRotMorph;
uniform float uScaleBreath;
uniform float uScaleMorph;

uniform float uStrokeWidth;
uniform float uGlowStrength;
uniform float uFillStrength;

uniform vec3 uBgColorA;
uniform vec3 uBgColorB;
uniform vec3 uInkColorA;
uniform vec3 uInkColorB;

uniform float uVignette;
uniform float uGrain;

const float PARAM_BEATS_PER_MORPH = 2.0;
const float PARAM_EDGE_SHARPNESS = 42.0;
const float PARAM_GLOW_SHARPNESS = 9.0;
const float PARAM_EDGE_STRENGTH = 0.35;
const float PARAM_SCANLINE = 0.05;

#define PI 3.14159265359

mat2 rot(float a){
    float c = cos(a), s = sin(a);
    return mat2(c,-s,s,c);
}

float hash12(vec2 p){
    p = fract(p*vec2(123.34, 345.45));
    p += dot(p, p+34.345);
    return fract(p.x*p.y);
}

float aaStep(float d){
    float w = fwidth(d);
    return smoothstep(0.0, w, -d);
}

// --- EASING ---
float ease_linear(float t){ return t; }
float ease_smooth(float t){ return t*t*(3.0-2.0*t); }

float ease_cubicInOut(float t){
    t = clamp(t,0.0,1.0);
    return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}

float ease_backOut(float t){
    t = clamp(t,0.0,1.0);
    float c1 = 1.70158;
    float c3 = c1 + 1.0;
    return 1.0 + c3*pow(t-1.0,3.0) + c1*pow(t-1.0,2.0);
}

float ease_elasticOut(float t){
    t = clamp(t,0.0,1.0);
    if(t==0.0) return 0.0;
    if(t==1.0) return 1.0;
    float c4 = (2.0*PI)/3.0;
    return pow(2.0, -10.0*t)*sin((t*10.0 - 0.75)*c4) + 1.0;
}

float ease_expoInOut(float t){
    t = clamp(t,0.0,1.0);
    if(t==0.0) return 0.0;
    if(t==1.0) return 1.0;
    if(t < 0.5) return pow(2.0, 20.0*t - 10.0) * 0.5;
    return (2.0 - pow(2.0, -20.0*t + 10.0)) * 0.5;
}

float applyEase(float t){
    if(uEaseId==0) return ease_linear(t);
    if(uEaseId==1) return ease_smooth(t);
    if(uEaseId==2) return ease_cubicInOut(t);
    if(uEaseId==3) return ease_backOut(t);
    if(uEaseId==4) return ease_elasticOut(t);
    return ease_expoInOut(t);
}

// --- SDFs ---
float sdCircle(vec2 p, float r){
    return length(p) - r;
}

float sdBox(vec2 p, vec2 b){
    vec2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdEquiTriangle(vec2 p, float r){
    const float k = 1.7320508075688772;
    p.x = abs(p.x) - r;
    p.y = p.y + r/k;
    if(p.x + k*p.y > 0.0){
        p = vec2(p.x - k*p.y, -k*p.x - p.y) * 0.5;
    }
    p.x -= clamp(p.x, -2.0*r, 0.0);
    return -length(p) * sign(p.y);
}

float sdNgon(vec2 p, int n, float r){
    float a = atan(p.y,p.x);
    float l = length(p);
    float m = float(n);
    float sector = 2.0*PI/m;
    float h = cos(floor(0.5 + a/sector)*sector - a) * l;
    return h - r;
}

float sdStar(vec2 p, float r, int n, float innerRatio){
    float a = atan(p.y,p.x);
    float l = length(p);
    float m = float(n);
    float sector = 2.0*PI/m;
    float h = mod(a + sector*0.5, sector) - sector*0.5;
    float k = abs(cos(h*m*0.5));
    float rr = mix(r*innerRatio, r, k);
    return l - rr;
}

float sdRing(vec2 p, float rOuter, float rInner){
    float d1 = length(p) - rOuter;
    float d2 = length(p) - rInner;
    return max(d1, -d2);
}

// --- MORPHING ---
float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5*(b - a)/k, 0.0, 1.0);
    return mix(b, a, h) - k*h*(1.0 - h);
}

float morphSDF(float d1, float d2, float t){
    float e = applyEase(t);
    float m = mix(d1, d2, e);
    m -= sin(e*PI) * uMorphBloat;

    float mid = smoothstep(0.10, 0.50, e) * (1.0 - smoothstep(0.50, 0.90, e));
    mid *= uLiquidMidBoost;

    float k = mix(uLiquidK, 0.03, abs(e-0.5)*2.0);
    float liquid = smin(d1, d2, k);

    m = mix(m, liquid, clamp(uLiquidMix*mid, 0.0, 1.0));
    return m;
}

float evalShape(int sid, vec2 p, float baseSize){
    if(sid==0) return sdCircle(p, baseSize);
    if(sid==1) return sdBox(p, vec2(baseSize*0.83));
    if(sid==2) return sdEquiTriangle(p*rot(0.2), baseSize*1.15);
    if(sid==3) return sdStar(p*rot(-0.1), baseSize*1.15, uStarPoints, uStarInnerRatio);
    if(sid==4) return sdNgon(p, 6, baseSize*1.02);
    return sdRing(p, baseSize*1.05, baseSize*0.70);
}

// WebGL1: dynamic array index not allowed, use if-else lookup
int seqAt(int i) {
    if(i==0) return uSeq[0];
    if(i==1) return uSeq[1];
    if(i==2) return uSeq[2];
    if(i==3) return uSeq[3];
    return uSeq[4];
}

// --- STYLING ---
vec3 palette(float t){
    float s = 0.5 + 0.5*sin(uTime*0.5 + t*6.2831);
    return mix(uInkColorA, uInkColorB, s);
}

vec3 shade(vec2 p, float d, float phase01){
    float fill = aaStep(d);
    float stroke = smoothstep(uStrokeWidth, 0.0, abs(d));
    float edgeHi = exp(-PARAM_EDGE_SHARPNESS*abs(d));
    float glow   = exp(-PARAM_GLOW_SHARPNESS*max(d, 0.0));

    float flow = 0.6 + 0.4*sin(8.0*p.x - 6.0*p.y + uTime*2.0);
    flow *= 0.7 + 0.3*sin(uTime*1.1 + phase01*6.2831);

    vec3 ink = palette(phase01);
    vec3 col = vec3(0.0);

    col += ink * fill   * (uFillStrength * (0.70 + 0.30*flow));
    col += ink * stroke * 0.25;
    col += ink * edgeHi * PARAM_EDGE_STRENGTH;
    col += ink * glow   * (uGlowStrength * (0.65 + 0.35*flow));

    return col;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    float time = uTime * uGlobalSpeed;
    float beats = time * (uBpm / 60.0);
    float morphUnit = PARAM_BEATS_PER_MORPH;
    float segF = floor(beats / morphUnit);
    float t = fract(beats / morphUnit);

    int idx0 = int(mod(segF, 5.0));
    int idx1 = int(mod(segF + 1.0, 5.0));

    int sid0 = seqAt(idx0);
    int sid1 = seqAt(idx1);

    float tE = applyEase(t);
    float ang = uRotBase
              + uRotMorph * (float(idx0) + tE) * 0.35
              + 0.15*sin(time*0.4);

    vec2 p = uv * rot(-ang);

    float scale = 1.0
                + uScaleBreath * sin(time*0.9)
                + uScaleMorph  * sin(tE*PI)*0.5;
    p *= (1.0/scale);

    float d1 = evalShape(sid0, p, uSizeMain);
    float d2 = evalShape(sid1, p, uSizeMain);

    float d = morphSDF(d1, d2, t);

    // BG
    vec3 bg = mix(uBgColorA, uBgColorB, 0.5 + 0.5*uv.y);
    bg += 0.03*vec3(0.02,0.04,0.08) * (0.5 + 0.5*sin(time*0.7));

    float phase01 = fract(segF / 5.0);
    vec3 col = bg + shade(p, d, phase01);

    // Post
    float vig = smoothstep(1.2, 0.25, length(uv));
    col *= (1.0 - uVignette) + uVignette*vig;

    float scan = 1.0 - PARAM_SCANLINE + PARAM_SCANLINE*(0.5 + 0.5*sin(gl_FragCoord.y*1.6));
    col *= scan;

    float g = hash12(gl_FragCoord.xy + time*60.0) - 0.5;
    col += g * uGrain;

    col = sqrt(max(col, 0.0));
    gl_FragColor = vec4(col, 1.0);
}
`;
