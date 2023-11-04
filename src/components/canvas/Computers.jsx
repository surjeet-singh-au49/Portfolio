import React, {Suspense, useState, useEffect} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' /**these are all helper which will help us to place our 3D model in canvas (Most important one is useGLTF which will allow us to render our 3D model) */

import CanvasLoader from "../Loader"


const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    // When creating three.js elements we do not start with div instead we start with mesh 
    <mesh>
      {/* inside mesh we create light so we can see the object otherwise we cannot see the object.  */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      <pointLight intensity={1} />

      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.5 :0.6} 
      position={isMobile ? [0, -2.5, -1] : [0, -3.2, -1.5]} 
      rotation={[-0.01, -0.2,-0.1]} 
      />

    </mesh>
  )
}

 const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size.
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the 'isMobile' state variable.
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query.
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query.
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted.
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  

  return (
    <Canvas
    frameloop='demand'
    shadows
    /**camera prop will help us to see from where we are looking our model.*/ 
    camera={{position: [20, 3, 5], fov: /**field of view */ 25}}
    gl={{preserveDrawingBuffer: true}}
    
    >
{/**the suspense will allow our model to have a loader when loading */}

    <Suspense fallback = {<CanvasLoader />} >

{/**this will allow us to move our model left and right. */}
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />

    <Computers isMobile = {isMobile}  />
    
  </Suspense>{/** Suspense tag allow us to build apps with more responsive UIs and use less browser resources. */}

  <Preload all />
      
</Canvas>
  )
}

export default ComputersCanvas