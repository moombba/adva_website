import { Environment, Grid, Float } from '@react-three/drei';

export function Scene() {
  return (
    <>
      <color attach="background" args={['#FFFFFF']} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Grid
          infiniteGrid
          fadeDistance={25}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionThickness={1.5}
          sectionColor="#333333"
          cellColor="#333333"
          cellThickness={0.5}
          opacity={0.05}
          position={[0, -2, 0]}
          rotation={[Math.PI / 2.1, 0, 0]}
        />
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.1} />
      </mesh>
      
      <Environment preset="studio" />
    </>
  );
}
