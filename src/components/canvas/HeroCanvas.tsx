"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  RoundedBox,
  ContactShadows,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const ACCENT = "#d8ff4e";
const PERIWINKLE = "#c9d8ff";

// Backdrop the transmissive glass refracts. The hero is a dark command surface,
// so the procedural environment stays ink-green while lime and periwinkle do
// the lighting work.
const GLASS_BG = new THREE.Color("#171b18");

type TileSpec = {
  pos: [number, number, number];
  size: [number, number, number];
  rot: [number, number, number];
  tone: "glass" | "lime" | "peri" | "ink";
  float: number;
};

/* Deterministic scatter of bento tiles around the centerpiece. */
const TILES: TileSpec[] = [
  { pos: [-2.6, 1.2, -1], size: [1.5, 1.5, 0.25], rot: [0.1, 0.3, 0.08], tone: "glass", float: 1.1 },
  { pos: [2.5, 1.5, -1.5], size: [1.7, 1.1, 0.25], rot: [-0.1, -0.3, -0.05], tone: "lime", float: 1.4 },
  { pos: [-2.9, -1.4, -0.5], size: [1.3, 1.3, 0.25], rot: [0.2, 0.4, -0.1], tone: "peri", float: 0.9 },
  { pos: [2.8, -1.3, -1], size: [1.4, 1.4, 0.25], rot: [-0.15, -0.2, 0.12], tone: "glass", float: 1.2 },
  { pos: [0.2, 2.4, -2], size: [1.2, 1.2, 0.22], rot: [0.1, 0.1, 0.2], tone: "ink", float: 1.6 },
  { pos: [-0.4, -2.4, -1.6], size: [1.6, 1.0, 0.22], rot: [0.05, -0.15, -0.08], tone: "lime", float: 1.0 },
];

function Tile({ spec }: { spec: TileSpec }) {
  const mat = useMemo(() => {
    switch (spec.tone) {
      case "lime":
        return <meshStandardMaterial color={ACCENT} roughness={0.25} metalness={0.1} emissive={ACCENT} emissiveIntensity={0.18} />;
      case "peri":
        return <meshStandardMaterial color={PERIWINKLE} roughness={0.3} metalness={0.1} />;
      case "ink":
        return <meshStandardMaterial color="#141414" roughness={0.35} metalness={0.4} />;
      default:
        return (
          <MeshTransmissionMaterial
            thickness={0.6}
            roughness={0.18}
            transmission={1}
            ior={1.25}
            chromaticAberration={0.04}
            samples={4}
            resolution={256}
            background={GLASS_BG}
            color="#ffffff"
          />
        );
    }
  }, [spec.tone]);

  return (
    <Float speed={spec.float} rotationIntensity={0.4} floatIntensity={0.7}>
      <RoundedBox args={spec.size} radius={0.14} smoothness={4} position={spec.pos} rotation={spec.rot}>
        {mat}
      </RoundedBox>
    </Float>
  );
}

function Centerpiece() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.25;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref}>
        <mesh>
          <icosahedronGeometry args={[1.4, 0]} />
          <MeshTransmissionMaterial
            thickness={0.7}
            roughness={0.05}
            transmission={1}
            ior={1.35}
            chromaticAberration={0.08}
            samples={6}
            resolution={512}
            backside
            background={GLASS_BG}
            color="#ecff9e"
            attenuationColor="#ecff9e"
            attenuationDistance={4.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <pointLight position={[-5, 2, 3]} intensity={30} color={ACCENT} />
      <pointLight position={[5, -3, 2]} intensity={18} color={PERIWINKLE} />
    </>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  // Parallax driven by a window-level listener (not the canvas pointer) so it
  // works even though the stage is pointer-events-none and sits behind content.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.x * 0.3, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -target.current.y * 0.2, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Pause the render loop whenever the hero scrolls out of view. A canvas left
  // on frameloop="always" keeps rendering at 60fps behind every other section,
  // stealing GPU from scroll compositing — the "lag even on desktop".
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 42 }}
        frameloop={active ? "always" : "demand"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <Lights />
        {/* Procedural studio env (no network HDR) so the transmissive glass has
            something bright to refract — without it, transmission renders black. */}
        <Environment resolution={128} frames={1}>
          <color attach="background" args={["#171b18"]} />
          <Lightformer intensity={2.8} position={[0, 3, 5]} scale={[9, 9, 1]} color="#ffffff" />
          <Lightformer intensity={1.6} position={[-5, 1, 3]} scale={[5, 5, 1]} color="#d8ff4e" />
          <Lightformer intensity={1.4} position={[5, -2, 3]} scale={[5, 5, 1]} color="#c9d8ff" />
        </Environment>
        <Rig>
          <Centerpiece />
          {TILES.map((spec, i) => (
            <Tile key={i} spec={spec} />
          ))}
        </Rig>
        <ContactShadows position={[0, -3.2, 0]} opacity={0.28} scale={16} blur={2.6} far={6} frames={1} color="#1a1a1a" />
      </Canvas>
    </div>
  );
}
