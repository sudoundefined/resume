import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DataOcean() {
  const meshRef = useRef<THREE.Points>(null)
  
  // Create a grid of points
  const { positions, colors } = useMemo(() => {
    const size = 100
    const segments = 100
    const positions = new Float32Array(segments * segments * 3)
    const colors = new Float32Array(segments * segments * 3)
    
    const colorPrimary = new THREE.Color('#00f0ff') // Cyan
    const colorSecondary = new THREE.Color('#ff00ff') // Magenta

    let i = 0
    let i3 = 0
    for (let x = 0; x < segments; x++) {
      for (let y = 0; y < segments; y++) {
        // Grid position
        const posX = (x - segments / 2) * (size / segments)
        const posY = (y - segments / 2) * (size / segments)
        
        positions[i3] = posX
        positions[i3 + 1] = 0 // Initial Z (Y in 3D up)
        positions[i3 + 2] = posY

        // Mix colors based on position
        const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random() * 0.5)
        colors[i3] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b

        i++
        i3 += 3
      }
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const positionsAttr = meshRef.current.geometry.attributes.position
      const positions = positionsAttr.array as Float32Array

      let i3 = 0
      for (let i = 0; i < positions.length / 3; i++) {
        const x = positions[i3]
        const z = positions[i3 + 2]
        
        // Complex wave function
        const y = Math.sin(x * 0.2 + time) * Math.cos(z * 0.2 + time) * 2 
                  + Math.sin(x * 0.05 - time) * 3
                  + Math.sin(x * 0.5 + z * 0.5 + time) * 0.5

        positions[i3 + 1] = y
        i3 += 3
      }
      positionsAttr.needsUpdate = true
      
      // Slowly rotate the entire field
      meshRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points ref={meshRef} position={[0, -5, -20]} rotation={[0.2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          args={[positions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color" 
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation={true} 
      />
    </points>
  )
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <fog attach="fog" args={['#050505', 10, 50]} />
        <DataOcean />
      </Canvas>
    </div>
  )
}
