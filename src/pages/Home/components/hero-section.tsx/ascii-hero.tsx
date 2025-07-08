// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { EffectComposer } from "@react-three/postprocessing";
// import { useMemo } from "react";
// import { ASCIIEffect } from "../../../../components/ascii/AsciiEffect";
// import FlowerModel from "../../../../components/ascii/FlowerModal";

// export default function Ascii() {
//   const asciiEffect = useMemo(
//     () =>
//       new ASCIIEffect({
//         invert: true,
//         fontSize: 64,
//         cellSize: 6,
//         characters: "@#%x#$%-.. ",
//         color: "#6b6b6b",
//       }),
//     []
//   );

//   return (
//     <Canvas
//       camera={{ position: [-2, -2, 4] }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "#1a1a1a1a",
//       }}
//     >
//       <FlowerModel />
//       <OrbitControls enableZoom={false} />

//       <directionalLight
//         position={[-1, 5, 5]}
//         intensity={2}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         color={"#ffffff"}
//       />
//       {/* <directionalLight position={[-5, -5, -3]} intensity={0.4} /> */}

//       <EffectComposer>
//         <primitive object={asciiEffect} />
//       </EffectComposer>
//     </Canvas>
//   );
// }
