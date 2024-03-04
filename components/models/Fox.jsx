import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

// 3D 모델 출처: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export default function Fox({ currentAnimation, ...props }) {
  const group = useRef() // 모델의 그룹 요소에 대한 참조
  const { nodes, materials, animations } = useGLTF('assets/models/fox.glb') // GLTF 파일로부터 노드, 재질, 애니메이션 데이터를 가져옴
  const { actions } = useAnimations(animations, group) // 애니메이션을 제어하기 위해 useAnimations 훅 사용

  // currentAnimation prop이 변경될 때마다 이펙트가 실행됨
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop()) // 모든 애니메이션을 중지시킴

    if (actions[currentAnimation]) {
      // 현재 애니메이션 이름이 유효한 경우
      actions[currentAnimation].play() // 해당 애니메이션 실행
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        {/* 여우 모델의 각 부분을 표현하는 skinnedMesh 요소들 */}
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  )
}

// 모델 로드를 미리 처리하여 성능을 최적화함
useGLTF.preload('assets/models/fox.glb')
