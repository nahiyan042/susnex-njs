"use client";

/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export interface AntigravityProps {
  colorBase?: string;
  colorOne?: string;
  colorTwo?: string;
  colorThree?: string;
  colors?: string[];
  color?: string;
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: "capsule" | "sphere" | "box" | "tetrahedron";
  fieldStrength?: number;
  mouseInfluence?: number;
}

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec2  uMouse;
  varying vec2  vUv;
  varying float vSize;
  varying vec2  vPos;

  attribute vec3  aOffset;
  attribute float aRandom;

  #define PI 3.14159265359

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vUv = uv;
    vec3 pos = aOffset;

    float driftSpeed = uTime * 0.15;
    float dx = sin(driftSpeed + pos.y * 0.5) + sin(driftSpeed * 0.5 + pos.y * 2.0);
    float dy = cos(driftSpeed + pos.x * 0.5) + cos(driftSpeed * 0.5 + pos.x * 2.0);
    pos.x += dx * 0.25;
    pos.y += dy * 0.25;

    vec2  relToMouse   = pos.xy - uMouse;
    float distFromMouse = length(relToMouse / vec2(1.3, 1.0));
    vec2  dirToMouse    = normalize(relToMouse + vec2(0.0001, 0.0));
    float shapeFactor   = noise(dirToMouse * 2.0 + vec2(0.0, uTime * 0.1));
    float breathCycle   = sin(uTime * 0.8);
    float baseRadius    = 2.4 + breathCycle * 0.5;
    float currentRadius = baseRadius + shapeFactor * 0.75;
    float rimInfluence  = smoothstep(1.8, 0.0, abs(distFromMouse - currentRadius));

    vec2 pushDir = dirToMouse;
    float pushAmt = (breathCycle * 0.5 + 0.5) * 0.5;
    pos.xy += pushDir * pushAmt * rimInfluence;
    pos.z  += rimInfluence * 0.3 * sin(uTime);

    float outerInfluence = smoothstep(baseRadius + 0.4, baseRadius + 2.2, distFromMouse);
    float outerOsc = sin(uTime * 2.6 + pos.x * 0.6 + pos.y * 0.6);
    pos.xy += dirToMouse * outerOsc * 0.76 * outerInfluence;

    float bSize = 0.016 + sin(uTime + pos.x) * 0.003;
    float currentScale = bSize + rimInfluence * 0.044;
    float stretch = rimInfluence * 0.02;

    vec3 transformed = position;
    transformed.x *= (currentScale + stretch);
    transformed.y *= currentScale * 0.6;

    vSize = rimInfluence;
    vPos  = pos.xy;

    float dirLen = max(length(relToMouse), 0.0001);
    vec2  dir    = relToMouse / dirLen;
    float oscPhase = aRandom * 6.28318530718;
    float osc = 0.5 + 0.5 * sin(uTime * 0.6 + oscPhase);
    float speedScale = mix(0.55, 1.35, osc);
    float jitter = sin(uTime * 0.1 * speedScale + pos.x * 0.35 + pos.y * 0.35) * (0.2 * mix(0.7, 1.45, osc));
    vec2  perp = vec2(-dir.y, dir.x);
    vec2  jitteredDir = normalize(dir + perp * jitter);
    mat2  rot = mat2(jitteredDir.x, jitteredDir.y, -jitteredDir.y, jitteredDir.x);
    transformed.xy = rot * transformed.xy;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos + transformed, 1.0);
  }
`;

const makeFragmentShader = (
  colorBase: string,
  colorOne: string,
  colorTwo: string,
  colorThree: string,
) => /* glsl */ `
  uniform float uTime;
  varying vec2  vUv;
  varying float vSize;
  varying vec2  vPos;

  void main() {
    vec2  center = vec2(0.5);
    vec2  pos    = abs(vUv - center) * 2.0;
    float d      = pow(pow(pos.x, 2.6) + pow(pos.y, 2.6), 1.0 / 2.6);
    float alpha  = 1.0 - smoothstep(0.8, 1.0, d);
    if (alpha < 0.01) discard;

    vec3 cBase   = vec3(${hexToGlsl(colorBase)});
    vec3 cOne    = vec3(${hexToGlsl(colorOne)});
    vec3 cTwo    = vec3(${hexToGlsl(colorTwo)});
    vec3 cThree  = vec3(${hexToGlsl(colorThree)});

    float t  = uTime * 1.2;
    float p1 = sin(vPos.x * 0.8 + t);
    float p2 = sin(vPos.y * 0.8 + t * 0.8 + p1);

    vec3 activeColor = mix(cOne, cTwo, p1 * 0.5 + 0.5);
    activeColor      = mix(activeColor, cThree, p2 * 0.5 + 0.5);

    vec3  finalColor = mix(cBase, activeColor, smoothstep(0.1, 0.8, vSize));
    float finalAlpha = alpha * mix(0.4, 0.95, vSize);

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

function hexToGlsl(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  return `${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)}`;
}

/** Determine grid size based on screen width for performance */
function getGridSize(): { countX: number; countY: number } {
  if (typeof window === "undefined") return { countX: 100, countY: 55 };
  const w = window.innerWidth;
  if (w < 640)  return { countX: 40, countY: 22 };   // mobile — ~880 particles
  if (w < 1024) return { countX: 60, countY: 33 };   // tablet — ~1980 particles
  return { countX: 100, countY: 55 };                 // desktop — ~5500 particles
}

/* ---------- React components ---------- */

function AntigravityInner({
  colorBase = "#1a2e0a",
  colorOne  = "#5c7c35",
  colorTwo  = "#89b54f",
  colorThree = "#c8d957",
}: AntigravityProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  // Responsive particle count
  const gridSize = useMemo(() => getGridSize(), []);
  const countX = gridSize.countX;
  const countY = gridSize.countY;
  const count = countX * countY;

  const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);

  const uniforms = useMemo(
    () => ({
      uTime:  { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERTEX_SHADER,
        fragmentShader: makeFragmentShader(colorBase, colorOne, colorTwo, colorThree),
        transparent: true,
        depthWrite: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Populate instanced attributes
  useEffect(() => {
    if (!meshRef.current) return;

    const offsets = new Float32Array(count * 3);
    const randoms = new Float32Array(count);

    const gridWidth = 40;
    const gridHeight = 22;
    const jitter = 0.25;

    let i = 0;
    for (let y = 0; y < countY; y++) {
      for (let x = 0; x < countX; x++) {
        const u = x / (countX - 1);
        const v = y / (countY - 1);
        offsets[i * 3]     = (u - 0.5) * gridWidth  + (Math.random() - 0.5) * jitter;
        offsets[i * 3 + 1] = (v - 0.5) * gridHeight + (Math.random() - 0.5) * jitter;
        offsets[i * 3 + 2] = 0;
        randoms[i] = Math.random();
        i++;
      }
    }

    meshRef.current.geometry.setAttribute(
      "aOffset",
      new THREE.InstancedBufferAttribute(offsets, 3),
    );
    meshRef.current.geometry.setAttribute(
      "aRandom",
      new THREE.InstancedBufferAttribute(randoms, 1),
    );
  }, [count, countX, countY]);

  // Pointer + gyroscope tracking
  const hovering = useRef(true);
  const globalPointer = useRef<{ x: number; y: number } | null>(null);
  const gyroInput = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const leave = () => { hovering.current = false; };
    const enter = () => { hovering.current = true; };
    const move = (e: PointerEvent) => {
      globalPointer.current = {
        x:  (e.clientX / window.innerWidth)  * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    // Gyroscope for mobile — maps device tilt to pointer position
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left-right tilt: -90..90
      const beta  = e.beta  ?? 0; // front-back tilt: -180..180
      // Clamp and normalize to -1..1
      const x = Math.max(-1, Math.min(1, gamma / 45));
      const y = Math.max(-1, Math.min(1, -(beta - 45) / 45));
      gyroInput.current = { x, y };
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.body.addEventListener("mouseleave", leave);
    document.body.addEventListener("mouseenter", enter);
    window.addEventListener("deviceorientation", handleOrientation, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      document.body.removeEventListener("mouseleave", leave);
      document.body.removeEventListener("mouseenter", enter);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    material.uniforms.uTime.value = clock.getElapsedTime();

    let targetX = 0;
    let targetY = 0;

    if (hovering.current && globalPointer.current) {
      // Desktop: pointer-based
      targetX = (globalPointer.current.x * viewport.width) / 2;
      targetY = (globalPointer.current.y * viewport.height) / 2;
    } else if (gyroInput.current) {
      // Mobile: gyroscope-based
      targetX = (gyroInput.current.x * viewport.width) / 2;
      targetY = (gyroInput.current.y * viewport.height) / 2;
    }

    const dragFactor = 0.015;
    const cur = material.uniforms.uMouse.value;
    cur.x += (targetX - cur.x) * dragFactor;
    cur.y += (targetY - cur.y) * dragFactor;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
}

export function Antigravity(props: AntigravityProps) {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
}

export default Antigravity;
