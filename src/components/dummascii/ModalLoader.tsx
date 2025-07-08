// ModelLoader.tsx
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OBJLoader } from "three-stdlib";

export default function ModelLoader({ path }: { path: string }) {
  const obj = useLoader(OBJLoader, path);
  const ref = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useEffect(() => {
    obj.scale.set(1.5, 1.5, 1.5); // Increase size
    obj.position.set(0, -0.5, 0.5); // Adjust position if needed
  }, [obj]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = mouse.x * Math.PI * 0.05; // horizontal rotation
      ref.current.rotation.x = mouse.y * Math.PI * 0.05; // vertical rotation
    }
  });

  return (
    <primitive
      ref={ref}
      object={obj}
      scale={[1.4, 1.5, 2.2]}
      rotation={[0, 1, 0.1]}
    />
  );
}
