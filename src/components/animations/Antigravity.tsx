"use client";

/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { AdditiveBlending } from "three";

export interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  /** Single colour fallback when `colors` is not provided. */
  color?: string;
  /**
   * Palette of hex colours sampled per-particle. Pass at least one
   * colour to enable multi-tone rendering; leave undefined to fall
   * back to `color`.
   */
  colors?: string[];
  /**
   * When true the orbit centre keeps drifting along a Lissajous curve
   * even while the user is moving the mouse — produces the gentle
   * ambient swirl seen on antigravity.google.
   */
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: "capsule" | "sphere" | "box" | "tetrahedron";
  fieldStrength?: number;
  /**
   * 0 → ignore mouse, 1 → fully follow mouse. Anything in between
   * blends the cursor with the ambient drift target.
   */
  mouseInfluence?: number;
}

interface Particle {
  t: number;
  speed: number;
  mx: number;
  my: number;
  mz: number;
  cx: number;
  cy: number;
  cz: number;
  randomRadiusOffset: number;
}

function AntigravityInner({
  count = 600,
  magnetRadius = 60,
  ringRadius = 18,
  waveSpeed = 0.35,
  waveAmplitude = 2.2,
  particleSize = 0.9,
  lerpSpeed = 0.045,
  color = "#89b54f",
  colors,
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0.08,
  depthFactor = 1,
  pulseSpeed = 1.6,
  particleShape = "sphere",
  fieldStrength = 6,
  mouseInfluence = 0.55,
}: AntigravityProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport, size } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);

  // Stable palette key so a new array literal with identical contents
  // does not cause the per-instance colours to be re-randomised.
  const palette = useMemo(
    () => (colors && colors.length > 0 ? colors : [color]),
    [colors, color]
  );
  const paletteKey = palette.join("|");

  const particleColors = useMemo<string[]>(() => {
    const arr: string[] = new Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = palette[Math.floor(Math.random() * palette.length)];
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, paletteKey]);

  // Window-level pointer tracking — keeps the animation reactive even
  // when content (text, buttons, images) sits on top of the canvas.
  const ndcMouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      ndcMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      ndcMouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      ndcMouse.current.active = true;
    };
    const onLeave = () => {
      ndcMouse.current.active = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const virtualTarget = useRef({ x: 0, y: 0 });

  // Write per-instance colours once the mesh is mounted (and again
  // whenever the palette or count changes).
  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < count; i++) {
      tmpColor.set(particleColors[i]);
      mesh.setColorAt(i, tmpColor);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [count, particleColors, tmpColor]);

  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    const width = viewport.width || 100;
    const height = viewport.height || 100;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const speed = 0.006 + Math.random() / 320;

      const x = (Math.random() - 0.5) * width * 1.6;
      const y = (Math.random() - 0.5) * height * 1.6;
      const z = (Math.random() - 0.5) * 28;

      const randomRadiusOffset = (Math.random() - 0.5) * 2;

      temp.push({
        t,
        speed,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        randomRadiusOffset,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { viewport: v, clock } = state;
    const time = clock.getElapsedTime();

    // Ambient orbit centre — a slow Lissajous loop so the swirl never stops.
    const ambientX = Math.sin(time * 0.32) * (v.width / 5);
    const ambientY = Math.cos(time * 0.26) * (v.height / 5);

    let destX = ambientX;
    let destY = ambientY;

    if (ndcMouse.current.active) {
      const mouseX = (ndcMouse.current.x * v.width) / 2;
      const mouseY = (ndcMouse.current.y * v.height) / 2;
      const blend = autoAnimate ? mouseInfluence : 1;
      destX = ambientX * (1 - blend) + mouseX * blend;
      destY = ambientY * (1 - blend) + mouseY * blend;
    }

    const smoothFactor = 0.035;
    virtualTarget.current.x += (destX - virtualTarget.current.x) * smoothFactor;
    virtualTarget.current.y += (destY - virtualTarget.current.y) * smoothFactor;

    const targetX = virtualTarget.current.x;
    const targetY = virtualTarget.current.y;

    const globalRotation = time * rotationSpeed;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const { speed, mx, my, mz, cz, randomRadiusOffset } = particle;

      particle.t += speed / 2;
      const t = particle.t;

      const projectionFactor = 1 - cz / 60;
      const projectedTargetX = targetX * projectionFactor;
      const projectedTargetY = targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const targetPos = { x: mx, y: my, z: mz * depthFactor };

      // Falloff makes the magnetic ring soft at its edge instead of a hard cutoff.
      const fall = Math.max(0, 1 - dist / magnetRadius);
      const influence = fall * fall * (3 - 2 * fall); // smoothstep

      if (influence > 0.001) {
        const angle = Math.atan2(dy, dx) + globalRotation;

        const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));

        const currentRingRadius = ringRadius + wave + deviation;

        const ringX = projectedTargetX + currentRingRadius * Math.cos(angle);
        const ringY = projectedTargetY + currentRingRadius * Math.sin(angle);
        const ringZ =
          mz * depthFactor + Math.sin(t) * (waveAmplitude * depthFactor);

        targetPos.x = mx + (ringX - mx) * influence;
        targetPos.y = my + (ringY - my) * influence;
        targetPos.z = mz * depthFactor + (ringZ - mz * depthFactor) * influence;
      }

      particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
      particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
      particle.cz += (targetPos.z - particle.cz) * lerpSpeed;

      dummy.position.set(particle.cx, particle.cy, particle.cz);

      if (particleShape === "capsule") {
        dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
        dummy.rotateX(Math.PI / 2);
      } else {
        dummy.rotation.set(0, 0, 0);
      }

      const currentDistToMouse = Math.sqrt(
        Math.pow(particle.cx - projectedTargetX, 2) +
          Math.pow(particle.cy - projectedTargetY, 2)
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 18;
      scaleFactor = Math.max(0.18, Math.min(1, scaleFactor));

      const finalScale =
        scaleFactor *
        (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) *
        particleSize;
      dummy.scale.set(finalScale, finalScale, finalScale);

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  // size is referenced so the canvas re-tunes if it gets resized.
  void size;

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      frustumCulled={false}
    >
      {particleShape === "capsule" && (
        <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      )}
      {particleShape === "sphere" && <sphereGeometry args={[0.18, 12, 12]} />}
      {particleShape === "box" && <boxGeometry args={[0.3, 0.3, 0.3]} />}
      {particleShape === "tetrahedron" && <tetrahedronGeometry args={[0.3]} />}
      <meshBasicMaterial
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={AdditiveBlending}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export function Antigravity(props: AntigravityProps) {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 60], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
}

export default Antigravity;
