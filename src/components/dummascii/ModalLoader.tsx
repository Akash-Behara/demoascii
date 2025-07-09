import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";

interface ModelLoaderProps {
  path: string;
}

export default function ModelLoader({ path }: ModelLoaderProps) {
  const obj = useLoader(
    OBJLoader,
    path
  ) as unknown as THREE.Group<THREE.Object3DEventMap>;

  const ref = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useEffect(() => {
    if (!obj) return;

    const box = new THREE.Box3().setFromObject(obj);
    const center = new THREE.Vector3();
    box.getCenter(center);
    obj.position.sub(center);

    const size = new THREE.Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxAxis;
    obj.scale.set(scale, scale, scale * 1.4);
  }, [obj, ref]);

  useFrame(() => {
    if (ref.current) {
      const baseTiltX = -0.6;
      const baseTiltY = 0.3;
      const baseTiltZ = 0.03;

      // ref.current.rotation.z = baseTiltZ;
      // ref.current.rotation.y = baseTiltY;
      // ref.current.rotation.x = baseTiltX;

      ref.current.rotation.z = baseTiltZ + mouse.x * Math.PI * 0.1;
      ref.current.rotation.y = baseTiltY + mouse.x * Math.PI * 0.1;
      ref.current.rotation.x = baseTiltX + mouse.y * Math.PI * 0.1;
    }
  });

  return <primitive ref={ref} object={obj} />;
}
