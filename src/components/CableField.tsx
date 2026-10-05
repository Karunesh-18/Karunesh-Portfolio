"use client";

import { useEffect, useRef } from "react";

// A grid of faint cables with packets travelling along them.
// Plain WebGL fragment shader; draws once (no loop) under reduced motion.
const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
const FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse;
float hash(float n){ return fract(sin(n*127.1)*43758.5453); }
vec3 cableColor(float i){
  float k = mod(floor(i), 4.0);
  if (k < 1.0) return vec3(0.227,0.447,1.0);
  if (k < 2.0) return vec3(1.0,0.482,0.11);
  if (k < 3.0) return vec3(0.965,0.776,0.0);
  return vec3(0.169,0.784,0.455);
}
void main(){
  vec2 uv = gl_FragCoord.xy;
  float cell = 56.0;
  vec3 col = vec3(0.078,0.086,0.102);
  // soft pull of cables toward the pointer
  vec2 m = uMouse * uRes;
  float md = distance(uv, m);
  float pull = exp(-md / 220.0) * 10.0;
  vec2 q = uv;
  q.y += sin(uv.x * 0.01 + uTime * 0.2) * 2.0 + (m.y - uv.y) * 0.06 * exp(-md / 260.0);
  q.x += (m.x - uv.x) * 0.05 * exp(-md / 260.0);

  // horizontal cables
  float row = floor(q.y / cell);
  float fy = abs(fract(q.y / cell) - 0.5) * cell;
  float lineH = smoothstep(1.2, 0.2, fy);
  // vertical cables, sparser
  float colI = floor(q.x / (cell * 2.0));
  float fx = abs(fract(q.x / (cell * 2.0)) - 0.5) * cell * 2.0;
  float lineV = smoothstep(1.0, 0.2, fx) * 0.55;
  col += vec3(0.16,0.18,0.21) * max(lineH, lineV) * 0.9;

  // packets on horizontal cables
  float seedR = hash(row + 3.0);
  if (seedR > 0.4) {
    float speed = 90.0 + seedR * 220.0;
    float dir = seedR > 0.8 ? -1.0 : 1.0;
    float span = uRes.x + 400.0;
    float x = mod(dir * uTime * speed + seedR * 5000.0, span) - 200.0;
    float d = abs(uv.x - x);
    float tail = dir > 0.0 ? (x - uv.x) : (uv.x - x);
    float head = smoothstep(22.0, 0.0, d);
    float trail = tail > 0.0 ? smoothstep(160.0, 0.0, tail) * 0.35 : 0.0;
    float on = lineH * (head + trail);
    col += cableColor(row + floor(seedR * 9.0)) * on * (1.6 + pull * 0.05);
  }
  // packets on vertical cables
  float seedC = hash(colI + 11.0);
  if (seedC > 0.7) {
    float speed = 70.0 + seedC * 160.0;
    float span = uRes.y + 300.0;
    float y = mod(uTime * speed + seedC * 4000.0, span) - 150.0;
    float d = abs(uv.y - y);
    float head = smoothstep(12.0, 0.0, d);
    float trail = (y - uv.y) > 0.0 ? smoothstep(120.0, 0.0, y - uv.y) * 0.3 : 0.0;
    col += cableColor(colI + 1.0) * (lineV / 0.55) * (head + trail) * 1.5;
  }
  // vignette keeps type readable
  vec2 vv = uv / uRes - 0.5;
  col *= 1.0 - dot(vv, vv) * 0.9;
  gl_FragColor = vec4(col, 1.0);
}`;

export default function CableField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0.7, y: 0.4, tx: 0.7, ty: 0.4 };
    let raf = 0;
    let visible = true;
    const t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    const draw = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      gl.uniform1f(uTime, reduced ? 6 : (now - t0) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = 1 - (e.clientY - r.top) / r.height;
    };
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      draw(performance.now());
    } else {
      window.addEventListener("pointermove", onMove);
      io.observe(canvas);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
