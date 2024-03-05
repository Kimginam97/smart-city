import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// 3D 모델 출처: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export default function Plane({ isRotating, ...props }) {
  const planeRef = useRef() // 비행기 요소에 대한 참조
  // 3D 모델과 애니메이션을 불러옴
  const { scene, animations } = useGLTF('/assets/models/plane.glb')
  // 비행기와 관련된 애니메이션 액션을 가져옴
  const { actions } = useAnimations(animations, planeRef)

  // 'isRotating'에 따라 비행기의 애니메이션을 제어하는 효과를 사용함
  // 주의: 애니메이션 이름은 3D 모델이 호스팅된 Sketchfab 웹사이트에서 확인할 수 있음
  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play() // 애니메이션 실행
    } else {
      actions['Take 001'].stop() // 애니메이션 중지
    }
  }, [actions, isRotating])

  useFrame(({ clock, camera }) => {
    // 사인 파동을 사용하여 새와 유사한 움직임을 시뮬레이션하기 위해 Y 위치를 업데이트함
    planeRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    // 카메라에 대한 특정 끝점에 도달했는지 확인함
    if (planeRef.current.position.x > camera.position.x + 10) {
      // 뒤로 방향을 변경하고 비행기를 y 축 주위로 180도 회전시킴
      planeRef.current.rotation.y = Math.PI
    } else if (planeRef.current.position.x < camera.position.x - 10) {
      // 앞으로 방향을 변경하고 비행기의 회전을 재설정함
      planeRef.current.rotation.y = 0
    }

    // 방향에 따라 X 및 Z 위치를 업데이트함
    if (planeRef.current.rotation.y === 0) {
      // 앞으로 이동
      planeRef.current.position.x += 0.01
      planeRef.current.position.z += 0.01
    } else {
      // 뒤로 이동
      planeRef.current.position.x -= 0.01
      planeRef.current.position.z -= 0.01
    }
  })

  return (
    <mesh {...props} ref={planeRef}>
      {/* 복잡한 3D 모델이나 장면을 직접적으로 포함시키려면 원시(primitive) 요소를 사용함 */}
      <primitive object={scene} />
    </mesh>
  )
}

// 모델 로드를 미리 처리하여 성능을 최적화함
useGLTF.preload('/assets/models/plane.glb')
