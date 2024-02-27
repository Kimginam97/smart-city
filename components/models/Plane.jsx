import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export default function Plane({ isRotating, ...props }) {
  const planeRef = useRef()
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF('assets/models/plane.glb')
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, planeRef)

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play()
    } else {
      actions['Take 001'].stop()
    }
  }, [actions, isRotating])

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    planeRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    // Check if the bird reached a certain endpoint relative to the camera
    if (planeRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      planeRef.current.rotation.y = Math.PI
    } else if (planeRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      planeRef.current.rotation.y = 0
    }

    // Update the X and Z positions based on the direction
    if (planeRef.current.rotation.y === 0) {
      // Moving forward
      planeRef.current.position.x += 0.01
      planeRef.current.position.z += 0.01
    } else {
      // Moving backward
      planeRef.current.position.x -= 0.01
      planeRef.current.position.z -= 0.01
    }
  })

  return (
    <mesh {...props} ref={planeRef}>
      // use the primitive element when you want to directly embed a complex 3D model or scene
      <primitive object={scene} />
    </mesh>
  )
}

useGLTF.preload('assets/models/plane.glb')
