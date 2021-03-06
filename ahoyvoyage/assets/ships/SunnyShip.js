/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/sunnyShip.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI  / 2, 0, 0]} scale={1}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials['mat_0-019.jpg']} />
      <mesh geometry={nodes.mesh_1.geometry} material={materials['mat_1-012.jpg']} />
      <mesh geometry={nodes.mesh_2.geometry} material={materials['mat_2-010.jpg']} />
      <mesh geometry={nodes.mesh_3.geometry} material={materials['mat_3-007.jpg']} />
      <mesh geometry={nodes.mesh_4.geometry} material={materials['mat_4-034.jpg']} />
      <mesh geometry={nodes.mesh_5.geometry} material={materials['mat_5-006.jpg']} />
      <mesh geometry={nodes.mesh_6.geometry} material={materials['mat_6-027.jpg']} />
      <mesh geometry={nodes.mesh_7.geometry} material={materials['mat_7-021.jpg']} />
      <mesh geometry={nodes.mesh_8.geometry} material={materials['mat_8-005.jpg']} />
      <mesh geometry={nodes.mesh_9.geometry} material={materials['mat_9-030.jpg']} />
      <mesh geometry={nodes.mesh_10.geometry} material={materials['mat_10-013.jpg']} />
      <mesh geometry={nodes.mesh_11.geometry} material={materials['mat_11-011.jpg']} />
      <mesh geometry={nodes.mesh_12.geometry} material={materials['mat_12-032.jpg']} />
      <mesh geometry={nodes.mesh_13.geometry} material={materials['mat_13-028.jpg']} />
      <mesh geometry={nodes.mesh_14.geometry} material={materials['mat_14-000.jpg']} />
      <mesh geometry={nodes.mesh_15.geometry} material={materials['mat_15-022.jpg']} />
      <mesh geometry={nodes.mesh_16.geometry} material={materials['mat_16-004.jpg']} />
      <mesh geometry={nodes.mesh_17.geometry} material={materials['mat_17-026.jpg']} />
      <mesh geometry={nodes.mesh_18.geometry} material={materials['mat_18-016.jpg']} />
      <mesh geometry={nodes.mesh_19.geometry} material={materials['mat_19-025.jpg']} />
      <mesh geometry={nodes.mesh_20.geometry} material={materials['mat_20-029.jpg']} />
      <mesh geometry={nodes.mesh_21.geometry} material={materials['mat_21-002.jpg']} />
      <mesh geometry={nodes.mesh_22.geometry} material={materials['mat_22-023.jpg']} />
      <mesh geometry={nodes.mesh_23.geometry} material={materials['mat_23-015.jpg']} />
      <mesh geometry={nodes.mesh_24.geometry} material={materials['mat_24-020.jpg']} />
      <mesh geometry={nodes.mesh_25.geometry} material={materials['mat_25-017.jpg']} />
      <mesh geometry={nodes.mesh_26.geometry} material={materials['mat_26-009.jpg']} />
      <mesh geometry={nodes.mesh_27.geometry} material={materials['mat_27-014.jpg']} />
      <mesh geometry={nodes.mesh_28.geometry} material={materials['mat_28-001.jpg']} />
      <mesh geometry={nodes.mesh_29.geometry} material={materials['mat_29-024.jpg']} />
      <mesh geometry={nodes.mesh_30.geometry} material={materials['mat_30-008.jpg']} />
      <mesh geometry={nodes.mesh_31.geometry} material={materials['mat_31-035.jpg']} />
      <mesh geometry={nodes.mesh_32.geometry} material={materials['mat_32-003.jpg']} />
      <mesh geometry={nodes.mesh_33.geometry} material={materials['mat_33-018.jpg']} />
      <mesh geometry={nodes.mesh_34.geometry} material={materials['mat_34-031.jpg']} />
      <mesh geometry={nodes.mesh_35.geometry} material={materials['mat_35-033.jpg']} />
      </group>
    </group>
  )
}

useGLTF.preload('/sunnyShip.glb')
