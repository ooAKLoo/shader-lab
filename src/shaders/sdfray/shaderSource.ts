export const vertexShaderSource = `#version 300 es
in vec4 a_position;
void main() {
    gl_Position = a_position;
}
`;

export const fragmentShaderSource = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

// 用户可控参数
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_shapeBlend; // 0.0 = 立方体, 1.0 = 球体
uniform float u_twist;      // 扭曲程度
uniform vec3 u_lightPos;    // 光源位置
uniform float u_ambient;    // 环境光
uniform float u_shininess;  // 高光系数
uniform float u_cameraZ;    // 相机距离

out vec4 fragColor;

// SDF 基础函数：球体
float sdSphere(vec3 p, float s) {
    return length(p) - s;
}

// SDF 基础函数：圆角立方体
float sdRoundBox(vec3 p, vec3 b, float r) {
    vec3 q = abs(p) - b;
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;
}

// 空间扭曲函数
vec3 opTwist(vec3 p, float k) {
    float c = cos(k * p.y);
    float s = sin(k * p.y);
    mat2  m = mat2(c, -s, s, c);
    vec2  xz = m * p.xz;
    return vec3(xz.x, p.y, xz.y);
}

// 场景映射函数 (返回距离)
float map(vec3 p) {
    // 应用空间扭曲
    vec3 twistedP = opTwist(p, u_twist * sin(u_time * 0.5));

    // 物体自转
    float t = u_time * 0.3;
    mat2 rotX = mat2(cos(t), -sin(t), sin(t), cos(t));
    mat2 rotY = mat2(cos(t*1.2), -sin(t*1.2), sin(t*1.2), cos(t*1.2));

    vec3 q = twistedP;
    q.yz = rotX * q.yz;
    q.xz = rotY * q.xz;

    // 计算 SDF
    float dBox = sdRoundBox(q, vec3(0.6), 0.1);
    float dSphere = sdSphere(q, 0.85);

    // 形状融合 (Morphing)
    return mix(dBox, dSphere, u_shapeBlend);
}

// 计算法线
vec3 calcNormal(vec3 p) {
    vec2 e = vec2(1.0, -1.0) * 0.5773 * 0.0005;
    return normalize(e.xyy * map(p + e.xyy) +
                     e.yyx * map(p + e.yyx) +
                     e.yxy * map(p + e.yxy) +
                     e.xxx * map(p + e.xxx));
}

void main() {
    // 归一化像素坐标 (从 -1 到 1，修复比例)
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;

    // 相机设置
    vec3 ro = vec3(0.0, 0.0, u_cameraZ); // 射线起点 (Ray Origin)
    vec3 rd = normalize(vec3(uv, -1.0)); // 射线方向 (Ray Direction)

    // 光线步进 (Raymarching)
    float t = 0.0;
    float max_t = 20.0;
    int max_iters = 100;
    float d = 0.0;

    for(int i = 0; i < max_iters; i++) {
        vec3 p = ro + rd * t;
        d = map(p);
        if(d < 0.001 || t > max_t) break;
        t += d;
    }

    // 默认背景色 (深色渐变)
    vec3 col = vec3(0.02, 0.02, 0.05) - uv.y * 0.02;

    // 如果击中物体
    if(t < max_t) {
        vec3 p = ro + rd * t;
        vec3 n = calcNormal(p);
        vec3 l = normalize(u_lightPos - p);

        // 基础渐变颜色
        vec3 baseColor = mix(u_color1, u_color2, smoothstep(-1.0, 1.0, p.y + p.x));

        // 光照计算
        float diff = max(dot(n, l), 0.0); // 漫反射
        vec3 viewDir = normalize(ro - p);
        vec3 reflectDir = reflect(-l, n);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), u_shininess); // 高光

        // 组合颜色
        col = baseColor * (diff + u_ambient) + vec3(1.0) * spec * 0.6;

        // 添加深度雾化 (Fog)
        float fogFactor = 1.0 - exp(-0.03 * t * t);
        col = mix(col, vec3(0.02, 0.02, 0.05), fogFactor);
    }

    // Gamma 校正
    col = pow(col, vec3(1.0 / 2.2));

    fragColor = vec4(col, 1.0);
}
`;
