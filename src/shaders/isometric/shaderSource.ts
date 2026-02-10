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
  uniform vec2 iMouse;
  uniform float uBlockSize;
  uniform float uSpacing;
  uniform float uTimeSpeed;
  uniform float uMouseInfluence;
  uniform float uFogStart;
  uniform float uFogEnd;
  uniform float uCamDistance;

  #define PI 3.14159
  #define TWO_PI 6.28318
  #define NUM_MARCH_ITERS 60
  #define MAX_DIST 150.0

  float g_time = 0.;
  vec2 g_mouse = vec2(0.);

  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  mat2 rot2D(float a) {
      float c = cos(a), s = sin(a);
      return mat2(c, -s, s, c);
  }

  vec3 get_block_info(vec3 cellPos) {
      float h = hash(cellPos.xz * 0.13 + floor(g_time * 0.1));
      float wave = sin(cellPos.x * 0.15 + g_time * 0.8) * cos(cellPos.z * 0.12 + g_time * 0.6);
      float wave2 = sin(cellPos.x * 0.3 - cellPos.z * 0.2 + g_time * 1.2);
      float distToMouse = length(cellPos.xz - g_mouse * 50.0);
      float disturbance = smoothstep(20.0, 0.0, distToMouse) * sin(g_time * 5.0);
      float activation = wave + wave2 * 0.5 + disturbance;
      float exists = smoothstep(0.8, 1.2, activation + h * 0.5);
      float yOffset = sin(g_time * 2.0 + h * 10.0) * 0.2;
      return vec3(exists, h, yOffset);
  }

  vec3 get_block_color(float id, vec3 normal) {
      vec3 baseCol = vec3(0.95, 0.96, 0.98);
      if (id > 0.96) baseCol = vec3(1.0, 0.6, 0.2);
      else if (id > 0.92) baseCol = vec3(0.2, 0.5, 0.9);
      else if (id > 0.85) baseCol = vec3(0.85, 0.85, 0.85);
      float shade = 0.8 + 0.2 * normal.y;
      return baseCol * shade;
  }

  float edge_highlight(vec2 uv) {
      vec2 d = abs(uv - 0.5) * 2.0;
      float border = max(d.x, d.y);
      return smoothstep(0.85, 0.95, border);
  }

  void dda_march(vec3 ro, vec3 rd, out vec4 color) {
      float size = uSpacing;
      vec3 mapPos = floor(ro / size) * size;
      vec3 deltaDist = abs(vec3(length(rd)) / rd) * size;
      vec3 rayStep = sign(rd) * size;
      vec3 sideDist = (sign(rd) * (mapPos - ro) + (sign(rd) * 0.5 + 0.5) * size) * deltaDist / size;
      vec3 mask = vec3(0.0);

      bool hit = false;
      vec3 hitPos = vec3(0.0);
      vec3 normal = vec3(0.0);
      vec3 blockData = vec3(0.0);
      vec2 blockUV = vec2(0.0);

      for (int i = 0; i < NUM_MARCH_ITERS; i++) {
          if (length(mapPos - ro) > MAX_DIST) break;
          blockData = get_block_info(mapPos);

          if (blockData.x > 0.01) {
              vec3 center = mapPos + size * 0.5;
              center.y += blockData.z;
              vec3 halfSize = vec3(uBlockSize * 0.5 * blockData.x);
              vec3 rayLocal = (ro - center);
              vec3 t1 = (-halfSize - rayLocal) / rd;
              vec3 t2 = ( halfSize - rayLocal) / rd;
              vec3 tN = min(t1, t2);
              vec3 tF = max(t1, t2);
              float tNear = max(max(tN.x, tN.y), tN.z);
              float tFar = min(min(tF.x, tF.y), tF.z);

              if (tNear < tFar && tFar > 0.0) {
                  hit = true;
                  hitPos = ro + rd * tNear;
                  vec3 localHit = hitPos - center;
                  vec3 aLocalHit = abs(localHit);
                  if (aLocalHit.x > aLocalHit.y && aLocalHit.x > aLocalHit.z) normal = vec3(sign(localHit.x), 0., 0.);
                  else if (aLocalHit.y > aLocalHit.z) normal = vec3(0., sign(localHit.y), 0.);
                  else normal = vec3(0., 0., sign(localHit.z));
                  if (abs(normal.y) > 0.5) blockUV = localHit.xz / uBlockSize + 0.5;
                  else if (abs(normal.x) > 0.5) blockUV = localHit.zy / uBlockSize + 0.5;
                  else blockUV = localHit.xy / uBlockSize + 0.5;
                  break;
              }
          }
          mask = step(sideDist.xyz, sideDist.yxy) * step(sideDist.xyz, sideDist.zzx);
          sideDist += mask * deltaDist;
          mapPos += mask * rayStep;
      }

      vec3 fogColor = vec3(0.98, 0.98, 0.99);

      if (hit) {
          vec3 sunDir = normalize(vec3(0.5, 0.8, 0.3));
          float diff = max(dot(normal, sunDir), 0.0);
          float amb = 0.6 + 0.4 * normal.y;
          vec3 surfaceCol = get_block_color(blockData.y, normal);
          float edge = edge_highlight(blockUV);
          surfaceCol = mix(surfaceCol, vec3(1.0), edge * 0.5);
          vec3 finalCol = surfaceCol * (diff * 0.7 + amb * 0.6);
          float dist = length(hitPos - ro);
          float fogFactor = smoothstep(uFogStart, uFogEnd, dist);
          color = vec4(mix(finalCol, fogColor, fogFactor), 1.0);
      } else {
          color = vec4(fogColor, 1.0);
      }
  }

  void setup_camera(vec2 uv, vec2 mouse, out vec3 ro, out vec3 rd) {
      float rotX = mouse.x * 1.5 * uMouseInfluence + PI * 0.25;
      float rotY = 0.6 + mouse.y * 0.4 * uMouseInfluence;
      ro = vec3(
          uCamDistance * cos(rotX) * cos(rotY),
          uCamDistance * sin(rotY),
          uCamDistance * sin(rotX) * cos(rotY)
      );
      vec3 ta = vec3(0.0, -10.0, 0.0);
      vec3 cw = normalize(ta - ro);
      vec3 cp = vec3(0.0, 1.0, 0.0);
      vec3 cu = normalize(cross(cw, cp));
      vec3 cv = normalize(cross(cu, cw));
      rd = normalize(uv.x * cu + uv.y * cv + 3.5 * cw);
  }

  void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
      vec2 mouse = iMouse;
      g_mouse = mouse;
      g_time = iTime * uTimeSpeed;
      vec3 ro, rd;
      setup_camera(uv, mouse * 0.2, ro, rd);
      vec4 col;
      dda_march(ro, rd, col);
      col.rgb = pow(col.rgb, vec3(0.4545));
      float vignette = 1.0 - dot(uv, uv) * 0.15;
      col.rgb *= vignette;
      gl_FragColor = col;
  }
`;
