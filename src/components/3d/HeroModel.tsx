import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export function HeroModel(props: any) {
  const groupRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Modern Computer Setup */}
      {/* Main Monitor */}
      <group position={[0, 0.3, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.2, 0.7, 0.05]} />
          <meshStandardMaterial color="#1a202c" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Screen Content */}
        <mesh position={[0, 0, 0.026]}>
          <boxGeometry args={[1.15, 0.65, 0.001]} />
          <meshStandardMaterial color="#1e293b" emissive="#38bdf8" emissiveIntensity={0.2} />
        </mesh>
        {/* Monitor Stand */}
        <mesh position={[0, -0.45, 0.1]} castShadow>
          <cylinderGeometry args={[0.05, 0.1, 0.2, 8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.55, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 16]} />
          <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>

      {/* Secondary Monitor */}
      <group position={[-0.7, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.9, 0.05]} />
          <meshStandardMaterial color="#1a202c" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Screen Content */}
        <mesh position={[0, 0, 0.026]}>
          <boxGeometry args={[0.65, 0.85, 0.001]} />
          <meshStandardMaterial color="#1e293b" emissive="#38bdf8" emissiveIntensity={0.2} />
        </mesh>
        {/* Monitor Stand */}
        <mesh position={[0, -0.55, 0.1]} castShadow>
          <cylinderGeometry args={[0.05, 0.1, 0.2, 8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.65, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.02, 16]} />
          <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>

      {/* Desk */}
      <mesh position={[0, -0.7, 0]} receiveShadow>
        <boxGeometry args={[2.5, 0.1, 1]} />
        <meshStandardMaterial color="#475569" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Keyboard */}
      <group position={[0, -0.6, 0.2]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.03, 0.2]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Keycaps representation */}
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.55, 0.01, 0.15]} />
          <meshStandardMaterial color="#2d3748" metalness={0.4} roughness={0.6} />
        </mesh>
      </group>

      {/* Mouse */}
      <group position={[0.4, -0.6, 0.2]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.04, 0.08, 8, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Mouse pad */}
        <mesh position={[0, -0.02, 0]} receiveShadow>
          <boxGeometry args={[0.3, 0.01, 0.25]} />
          <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>

      {/* Desktop PC */}
      <group position={[0.9, -0.3, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.7, 0.3]} />
          <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* PC Details */}
        <mesh position={[0.151, 0, 0]} castShadow>
          <boxGeometry args={[0.001, 0.6, 0.25]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Power LED */}
        <mesh position={[0.152, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Decorative Elements */}
      {/* Coffee Cup */}
      <group position={[-0.4, -0.6, 0.2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.03, 0.08, 16]} />
          <meshStandardMaterial color="#fff" metalness={0.1} roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.02, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          <meshStandardMaterial color="#cbd5e0" metalness={0.3} roughness={0.5} />
        </mesh>
      </group>

      {/* Floating Tech Elements */}
      <mesh position={[1.2, 0.5, 0.5]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-1, 0.8, -0.3]} castShadow>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.7, 1, -0.5]} castShadow>
        <tetrahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
      </mesh>

      {/* Ambient Lighting */}
      <pointLight position={[0, 0.3, 1]} intensity={0.5} color="#38bdf8" />
      <pointLight position={[-0.7, 0, 1]} intensity={0.3} color="#38bdf8" />
    </group>
  );
}