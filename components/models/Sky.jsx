import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// 3D 모델 출처: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Sky({ isRotating }) {
  const sky = useGLTF('/assets/models/sky.glb') // 하늘 모델을 불러옴
  const skyRef = useRef() // 하늘 요소에 대한 참조

  // 주의: 애니메이션 이름은 3D 모델이 호스팅된 Sketchfab 웹사이트에서 확인할 수 있음
  // 회전이 프레임 속도에 독립적으로 원활하게 이루어지도록 함
  // 'delta'는 마지막 프레임부터 경과한 시간을 나타냄
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta // 필요에 따라 회전 속도를 조정함
    }
  })

  return (
    <mesh ref={skyRef}>
      {/* 복잡한 3D 모델이나 장면을 직접적으로 포함시키려면 원시(primitive) 요소를 사용함 */}
      <primitive object={sky.scene} />
    </mesh>
  )
}

// 모델 로드를 미리 처리하여 성능을 최적화함
useGLTF.preload('/assets/models/sky.glb')
