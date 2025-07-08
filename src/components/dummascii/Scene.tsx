import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import ModelLoader from "./ModalLoader";
import { AsciiEffect } from "three-stdlib";

function Ascii() {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef<AsciiEffect>(null);

  useEffect(() => {
    const effect = new AsciiEffect(gl, " .:-=+*#%@", {
      invert: true,
      resolution: 0.18,
    });

    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0";
    effect.domElement.style.left = "0";
    effect.domElement.style.pointerEvents = "none";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "black";
    effect.domElement.style.width = "100%";
    effect.domElement.style.height = "100%";
    effect.domElement.style.zIndex = "10";

    effect.domElement.style.fontFamily = "Courier, monospace";
    effect.domElement.style.fontSize = "6px"; // Smaller = sharper
    effect.domElement.style.lineHeight = "6px";
    effect.domElement.style.letterSpacing = "0px";
    effect.domElement.style.color = "#ccc"; // Light gray for clarity
    effect.domElement.style.backgroundColor = "black";

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
    <Canvas gl={{ antialias: false }} style={{ background: "black" }} shadows>
      <color attach="background" args={["black"]} />
      <ambientLight />
      <directionalLight position={[0, 1, 1]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} castShadow />
      <directionalLight position={[-2, -1, -3]} intensity={0.8} />
      <ModelLoader path="/flower.obj" />
      <OrbitControls enableZoom={false} />
      <Ascii /> {/* ✅ Inside Canvas — now it's safe */}
    </Canvas>
  );
}
