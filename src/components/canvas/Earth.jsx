import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Model as Low_poly_planet_earth } from "./low_poly_planet_earth";
import { Model as Lowpoly_earth } from "./lowpoly_earth";
import { Model as Planet_earth } from "./planet_earth";
import { Model as Realistic_earth_8k } from "./realistic_earth_8k";

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight />
        <Low_poly_planet_earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
