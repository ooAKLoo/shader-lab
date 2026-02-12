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

uniform float uLetterDuration;
uniform float uStrokeW;
uniform float uLiquidMix;
uniform float uLiquidK;
uniform float uBloat;
uniform float uGlowSharp;
uniform float uEdgeSharp;
uniform vec3 uInkColorA;
uniform vec3 uInkColorB;
uniform vec3 uBgColorA;
uniform vec3 uBgColorB;
uniform float uVignette;
uniform float uGrain;

#define PI 3.14159265359

// ---------- SDF helpers ----------
float sdSegment(vec2 p, vec2 a, vec2 b){
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
    return length(pa - ba*h);
}

float sdRingStroke(vec2 p, float r, float w){
    return abs(length(p) - r) - w;
}

float smin(float a, float b, float k){
    float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
    return mix(b, a, h) - k*h*(1.0-h);
}

float easeInOutCubic(float t){
    t = clamp(t, 0.0, 1.0);
    return (t < 0.5) ? 4.0*t*t*t : 1.0 - pow(-2.0*t+2.0, 3.0)*0.5;
}

float aaFill(float d){
    float w = fwidth(d);
    return smoothstep(0.0, w, -d);
}

// ---------- Glyph SDF (A-Z) ----------
float sdGlyph(int c, vec2 p){
    float d = 1e5;

    float L = -0.35, R = 0.35;
    float T =  0.45, B = -0.45;
    float M =  0.00;
    float U =  0.22;
    float D = -0.22;
    float XR = 0.22;

    #define ADD(a,b) d = min(d, sdSegment(p, (a), (b)))

    // A
    if(c==0){
        ADD(vec2(L,B), vec2(0.0,T));
        ADD(vec2(R,B), vec2(0.0,T));
        ADD(vec2(-0.20,M), vec2(0.20,M));
    }
    // B
    else if(c==1){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T),  vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
        ADD(vec2(L,M),  vec2(XR,M));
        ADD(vec2(XR,M), vec2(XR,B));
        ADD(vec2(XR,B), vec2(L,B));
    }
    // C
    else if(c==2){
        float arc = sdRingStroke(p, 0.34, uStrokeW);
        arc = max(arc, p.x - 0.18);
        d = min(d, arc);
    }
    // D
    else if(c==3){
        ADD(vec2(L,B), vec2(L,T));
        float arc = sdRingStroke(p - vec2(L+0.02, 0.0), 0.38, uStrokeW);
        arc = max(arc, -(p.x - (L+0.02)));
        d = min(d, arc);
    }
    // E
    else if(c==4){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(L,M), vec2(0.25,M));
        ADD(vec2(L,B), vec2(R,B));
    }
    // F
    else if(c==5){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(L,M), vec2(0.22,M));
    }
    // G
    else if(c==6){
        float arc = sdRingStroke(p, 0.34, uStrokeW);
        arc = max(arc, p.x - 0.18);
        d = min(d, arc);
        ADD(vec2(0.02, D), vec2(0.30, D));
        ADD(vec2(0.30, D), vec2(0.30, -0.02));
    }
    // H
    else if(c==7){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,M), vec2(R,M));
    }
    // I
    else if(c==8){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.0,B), vec2(0.0,T));
        ADD(vec2(L,B), vec2(R,B));
    }
    // J
    else if(c==9){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.18,T), vec2(0.18, B+0.14));
        vec2 pc = p - vec2(0.00, B+0.14);
        float hook = sdRingStroke(pc, 0.23, uStrokeW);
        hook = max(hook, (pc.y));
        hook = max(hook, (pc.x - 0.18));
        d = min(d, hook);
    }
    // K
    else if(c==10){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,M), vec2(R,T));
        ADD(vec2(L,M), vec2(R,B));
    }
    // L
    else if(c==11){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,B), vec2(R,B));
    }
    // M
    else if(c==12){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,T), vec2(0.0, 0.12));
        ADD(vec2(R,T), vec2(0.0, 0.12));
    }
    // N
    else if(c==13){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(R,B), vec2(R,T));
        ADD(vec2(L,T), vec2(R,B));
    }
    // O
    else if(c==14){
        d = min(d, sdRingStroke(p, 0.34, uStrokeW));
    }
    // P
    else if(c==15){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
    }
    // Q
    else if(c==16){
        d = min(d, sdRingStroke(p, 0.34, uStrokeW));
        ADD(vec2(0.08,-0.10), vec2(0.34,-0.44));
    }
    // R
    else if(c==17){
        ADD(vec2(L,B), vec2(L,T));
        ADD(vec2(L,T), vec2(XR,T));
        ADD(vec2(XR,T), vec2(XR,M));
        ADD(vec2(XR,M), vec2(L,M));
        ADD(vec2(0.02,M-0.02), vec2(R,B));
    }
    // S
    else if(c==18){
        float topArc = sdRingStroke(p - vec2(0.00, 0.17), 0.22, uStrokeW);
        topArc = max(topArc, -(p.y - 0.17));
        float botArc = sdRingStroke(p - vec2(0.00,-0.17), 0.22, uStrokeW);
        botArc = max(botArc,  (p.y + 0.17));
        d = min(d, topArc);
        d = min(d, botArc);
        ADD(vec2(-0.22, 0.05), vec2(0.22,-0.05));
    }
    // T
    else if(c==19){
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(0.0,B), vec2(0.0,T));
    }
    // U
    else if(c==20){
        float yCut = B + 0.14;
        ADD(vec2(L,T), vec2(L, yCut));
        ADD(vec2(R,T), vec2(R, yCut));
        vec2 pc = p - vec2(0.0, yCut);
        float uArc = sdRingStroke(pc, 0.35, uStrokeW);
        uArc = max(uArc, pc.y);
        d = min(d, uArc);
    }
    // V
    else if(c==21){
        ADD(vec2(L,T), vec2(0.0,B));
        ADD(vec2(R,T), vec2(0.0,B));
    }
    // W
    else if(c==22){
        ADD(vec2(L,T), vec2(-0.18,B));
        ADD(vec2(-0.18,B), vec2(0.0, D));
        ADD(vec2(0.0, D), vec2(0.18,B));
        ADD(vec2(0.18,B), vec2(R,T));
    }
    // X
    else if(c==23){
        ADD(vec2(L,B), vec2(R,T));
        ADD(vec2(L,T), vec2(R,B));
    }
    // Y
    else if(c==24){
        ADD(vec2(L,T), vec2(0.0, 0.05));
        ADD(vec2(R,T), vec2(0.0, 0.05));
        ADD(vec2(0.0, 0.05), vec2(0.0,B));
    }
    // Z
    else {
        ADD(vec2(L,T), vec2(R,T));
        ADD(vec2(R,T), vec2(L,B));
        ADD(vec2(L,B), vec2(R,B));
    }

    #undef ADD

    return d - uStrokeW;
}

// ---------- Morph ----------
float morphSDF(float d1, float d2, float t){
    float e = easeInOutCubic(t);
    float m = mix(d1, d2, e);
    m -= sin(e * PI) * uBloat;

    float mid = smoothstep(0.10, 0.50, e) * (1.0 - smoothstep(0.50, 0.90, e));
    float k   = mix(uLiquidK, 0.03, abs(e-0.5)*2.0);
    float liq = smin(d1, d2, k);

    m = mix(m, liq, clamp(uLiquidMix * mid, 0.0, 1.0));
    return m;
}

// ---------- Shading ----------
vec3 shade(vec2 p, float d, float phase){
    float fill  = aaFill(d);
    float edge  = exp(-uEdgeSharp * abs(d));
    float glow  = exp(-uGlowSharp * max(d, 0.0));

    float flow = 0.6 + 0.4*sin(8.0*p.x - 6.0*p.y + uTime*2.0);
    flow *= 0.7 + 0.3*sin(uTime*1.1 + phase*6.2831);

    vec3 ink = mix(uInkColorA, uInkColorB,
                   0.35 + 0.35*sin(uTime*0.6 + phase*6.2831));

    vec3 col = vec3(0.0);
    col += ink * fill * (0.70 + 0.30*flow);
    col += ink * edge * 0.35;
    col += ink * glow * (0.25 + 0.30*flow);
    return col;
}

void main(){
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    // Background
    vec3 bg = mix(uBgColorA, uBgColorB, 0.5 + 0.5*uv.y);
    float vign = smoothstep(1.25, 0.25, length(uv));
    bg *= (1.0 - uVignette) + uVignette * vign;

    // Timeline A->Z
    float tt  = uTime / uLetterDuration;
    float seg = floor(tt);
    float t   = fract(tt);

    int c0 = int(mod(seg, 26.0));
    int c1 = int(mod(seg + 1.0, 26.0));

    vec2 p = uv;
    float e  = easeInOutCubic(t);
    float sc = 1.0 + 0.04*sin(uTime*0.9) + 0.05*sin(e*PI);
    p /= sc;

    float d0 = sdGlyph(c0, p);
    float d1 = sdGlyph(c1, p);
    float d  = morphSDF(d0, d1, t);

    float phase = float(c0) / 26.0;
    vec3 col = bg + shade(p, d, phase);

    // scanline + grain
    float scan  = 0.95 + 0.05*sin(gl_FragCoord.y*1.5);
    float grain = fract(sin(dot(gl_FragCoord.xy + uTime*60.0, vec2(12.9898,78.233))) * 43758.5453);
    col = col*scan + (grain - 0.5) * uGrain;

    col = sqrt(max(col, 0.0));
    gl_FragColor = vec4(col, 1.0);
}
`;
