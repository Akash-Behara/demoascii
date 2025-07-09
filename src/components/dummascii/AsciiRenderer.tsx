// AsciiRenderer.tsx
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AsciiEffect } from "three-stdlib";

extend({ AsciiEffect });

export function Ascii({ renderIndex = 1 }) {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef<AsciiEffect>(null);

  useEffect(() => {
    const effect = new AsciiEffect(gl, " .:-+*=%@#", {
      invert: true,
      resolution: 0.02,
    });

    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0";
    effect.domElement.style.left = "0";
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "black";

    effect.domElement.style.fontFamily = "Courier, monospace";
    effect.domElement.style.fontSize = "6px"; // Smaller = sharper
    effect.domElement.style.lineHeight = "6px";
    effect.domElement.style.letterSpacing = "0px";
    effect.domElement.style.color = "#ccc"; // Light gray for clarity
    effect.domElement.style.backgroundColor = "black";

    document.body.appendChild(effect.domElement);
    effect.setSize(size.width, size.height);
    effectRef.current = effect;

    return () => {
      document.body.removeChild(effect.domElement);
    };
  }, [gl, size]);

  useFrame(() => {
    effectRef.current?.render(scene, camera);
  }, renderIndex);

  return null;
}
