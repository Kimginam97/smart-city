import { a } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function Island({ ...props }) {
  const islandRef = useRef() // 섬 요소에 대한 참조
  const { nodes, materials } = useGLTF('/assets/models/island.glb') // GLTF 파일로부터 노드와 재질 데이터를 가져옴

  return (
    <a.group ref={islandRef} {...props}>
      {/* 섬을 구성하는 각 요소를 표현하는 mesh 요소들 */}
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  )
}

// 모델 로드를 미리 처리하여 성능을 최적화함
useGLTF.preload('/assets/models/island.glb')
