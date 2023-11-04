import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >

      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75} >

        <icosahedronGeometry args={[1,1]} />

        <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading 
        />

        <Decal position={[0, 0, 1]} rotation={[2* Math.PI, 0, 6.25]} flatShading map={decal} />

      </mesh>

    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    >
{/**the suspense will allow our model to have a loader when loading */}

    <Suspense fallback = {<CanvasLoader />} >

{/**this will allow us to move our model left and right. */}
      <OrbitControls enableZoom={false} />

    <Ball imgUrl={icon} />
    
  </Suspense>{/** Suspense tag allow us to build apps with more responsive UIs and use less browser resources. */}

  <Preload all />
      
</Canvas>
  )
}

export default BallCanvas