import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

// 3D 모델 출처: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Bird() {
  const birdRef = useRef()

  // GLTF 파일로부터 3D 모델과 애니메이션을 불러옵니다.
  const { scene, animations } = useGLTF('/assets/models/bird.glb')

  // 새의 애니메이션에 접근합니다.
  const { actions } = useAnimations(animations, birdRef)

  // 컴포넌트가 마운트되면 "Take 001" 애니메이션을 실행합니다.
  // 애니메이션 이름은 Sketchfab 웹사이트에서 확인할 수 있습니다.
  useEffect(() => {
    actions['Take 001'].play()
  }, [])

  useFrame(({ clock, camera }) => {
    // 새와 유사한 움직임을 시뮬레이션하기 위해 Y 위치를 업데이트합니다.
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    // 카메라에 대한 특정 끝점에 도달했는지 확인합니다.
    if (birdRef.current.position.x > camera.position.x + 10) {
      // 방향을 뒤로 변경하고 새를 y 축 주위로 180도 회전시킵니다.
      birdRef.current.rotation.y = Math.PI
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // 방향을 앞으로 변경하고 새의 회전을 재설정합니다.
      birdRef.current.rotation.y = 0
    }

    // 방향에 따라 X 및 Z 위치를 업데이트합니다.
    if (birdRef.current.rotation.y === 0) {
      // 앞으로 이동
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    } else {
      // 뒤로 이동
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    // 3D 객체를 생성하여 표시합니다.
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      {/* 복잡한 3D 모델이나 장면을 직접적으로 포함시키려면 원시(primitive) 요소를 사용합니다. */}
      <primitive object={scene} />
    </mesh>
  )
}

// 미리 로드하여 성능을 개선합니다.
useGLTF.preload('/assets/models/bird.glb')
