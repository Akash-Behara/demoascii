// // FlowerModel.tsx
// import { useFrame, useLoader, useThree } from "@react-three/fiber";
// import { useRef } from "react";
// import { OBJLoader } from "three-stdlib";

// export default function FlowerModel() {
//   const obj = useLoader(OBJLoader, "/flower.obj");
//   const ref = useRef<THREE.Group>(null);
//   const { mouse } = useThree();

//   useFrame(() => {
//     if (ref.current) {
//       // Map mouse.x/y (-1 to 1) to subtle rotation angles
//       ref.current.rotation.y = mouse.x * Math.PI * 0.05; // horizontal rotation
//       ref.current.rotation.x = mouse.y * Math.PI * 0.05; // vertical rotation
//     }
//   });

//   return (
//     <primitive
//       ref={ref}
//       object={obj}
//       scale={[1.4, 1.5, 2.2]}
//       rotation={[0, 1, 0.1]}
//     />
//   );
// }
