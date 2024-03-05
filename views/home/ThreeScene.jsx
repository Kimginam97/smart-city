import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'

import Bird from '@/components/models/Bird'
import Fox from '@/components/models/Fox'
import Island from '@/components/models/Island'
import Plane from '@/components/models/Plane'
import Sky from '@/components/models/Sky'

const ThreeScene = () => {
  return (
    <section className="h-screen">
      <Canvas shadows gl={{ preserveDrawingBuffer: true }} className="w-full h-full transition-all ease-in">
        <Environment preset="city" />
        <Bird />
        <Plane position={[0, 0, 0]} rotation={[0, 20.1, 0]} scale={[5, 5, 5]} isRotating={true} />
        <Sky />
        <Fox position={[0, 0, -20]} />
        <Island position={[0, 0, -30]} rotation={[0.1, 4.7077, 0]} />
        <CameraControls
          verticalDragToForward={true}
          dollySpeed={0.1}
          minPolarAngle={-Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </section>
  )
}

export default ThreeScene
