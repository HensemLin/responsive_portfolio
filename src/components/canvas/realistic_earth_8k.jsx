/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scene.gltf 
Author: Shady Tex (https://sketchfab.com/ShadyTex4u)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/realistic-earth-8k-899b7a8202ed48f0a0903c33cb5501b6
Title: Realistic Earth 8K
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./realistic_earth_8k/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={20}>
        <mesh
          geometry={nodes.Surface_Material001_0.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI / 2, 0, 1.812]}
          scale={100}
        />
        <mesh
          geometry={nodes.atmos_Material003_0.geometry}
          material={materials["Material.003"]}
          rotation={[-1.973, 0.167, 0.055]}
          scale={101.786}
        />
        <mesh
          geometry={nodes.clouds_Material005_0.geometry}
          material={materials["Material.005"]}
          rotation={[-0.737, -1.086, -0.003]}
          scale={100.472}
        />
        <mesh
          geometry={nodes.atmos001_Material003_0.geometry}
          material={materials["Material.003"]}
          rotation={[-1.973, 0.167, 0.055]}
          scale={103.423}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./realistic_earth_8k/scene.gltf");
