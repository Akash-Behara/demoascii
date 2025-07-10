import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AsciiEffect } from "three-stdlib";
import ModelLoader from "./ModalLoader";

function Ascii() {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef<AsciiEffect>(null);

  useEffect(() => {
    const effect = new AsciiEffect(gl, " `'-!*#$%", {
      invert: true,
      resolution: 0.22,
    });

    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0";
    effect.domElement.style.left = "0";
    effect.domElement.style.pointerEvents = "none";
    effect.domElement.style.zIndex = "10";
    effect.domElement.style.color = "#999";
    effect.domElement.style.backgroundColor = "black";

    // Key improvements 👇
    effect.domElement.style.fontFamily = "'Courier New', monospace";
    effect.domElement.style.fontSize = "4.5px"; // smaller font
    effect.domElement.style.lineHeight = "4.5px"; // tighter lines
    effect.domElement.style.letterSpacing = "-0.5px"; // reduce horizontal space
    effect.domElement.style.textRendering = "optimizeSpeed";
    effect.domElement.style.imageRendering = "pixelated";

    const container = document.getElementById("ascii-wrapper");
    container?.appendChild(effect.domElement);
    effect.setSize(size.width, size.height);

    effectRef.current = effect;

    return () => {
      container?.removeChild(effect.domElement);
    };
  }, [gl, size]);

  useFrame(() => {
    if (effectRef.current) {
      effectRef.current.render(scene, camera);
    }
  }, 1); // render after default

  return null;
}

export default function Scene() {
  return (
    <Canvas
      // camera={{ position: [0, 0, 5], fov: 40 }}
      camera={{ fov: 40, position: [0, 0, 5], isPerspectiveCamera: true }} // <-- lower fov
      gl={{ antialias: false }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        position: "absolute", // make canvas and ascii stack
        top: 0,
        left: 0,
        zIndex: 1,
        background: "black",
      }}
      shadows
    >
      <color attach="background" args={["black"]} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} castShadow />
      <directionalLight position={[-2, -1, -3]} intensity={0.8} />

      <ModelLoader path="/flower.obj" />
      <OrbitControls enableZoom={false} />
      <Ascii />
    </Canvas>
  );
}
