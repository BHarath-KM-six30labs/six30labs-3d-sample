import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loading from "../animation/Loading";
import Island from "../models/Island";

function HomeBanner() {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let ScreenPosition = [0, -6.5, -43];
    if (window.innerWidth > 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, ScreenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <>
      <section className="w-full h-screen relative">
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{ near: 0.1, far: 100 }}
        >
          <Suspense fallback={<Loading />}>
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <ambientLight intensity={0.5} />
            <pointLight intensity={0.5} position={[10, 10, 10]} />
            <spotLight position={[0, 10, 0]} intensity={0.5} />
            <hemisphereLight intensity={0.5} />
            <Island 
            position={islandPosition}
            scale={islandScale}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}

export default HomeBanner;
