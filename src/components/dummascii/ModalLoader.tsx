// ModelLoader.tsx
import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useFrame } from "@react-three/fiber";

export default function ModelLoader({ path }: { path: string }) {
  const obj = useLoader(OBJLoader, path);
  const ref = useRef<any>();

  // useFrame(() => {
  //   if (ref.current) ref.current.rotation.y += 0.005;
  // });

  useEffect(() => {
    obj.scale.set(1.5, 1.5, 1.5); // Increase size
    obj.position.set(0, -0.5, 0.5); // Adjust position if needed
  }, [obj]);

  return <primitive ref={ref} object={obj} />;
}
