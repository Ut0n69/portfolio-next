import Head from 'next/head';
import { useState, useRef } from 'react';
import { Canvas, MeshProps, useFrame } from 'react-three-fiber';
import type { Mesh } from 'three';

type Props = MeshProps & {
  size?: number;
};

const maxDx = 15;
const startPositionTop = 250;
const startPositionBottom = -250;
const sizeMax = 3;
const sizeMin = 1;
const blockNum = 15;

const Line = (props: Props): JSX.Element => {
  const mesh = useRef<Mesh>();
  const width = window.innerWidth;
  const height = window.innerHeight / 4;
  let dx = Math.floor(Math.random() * (maxDx + 1 + maxDx)) - maxDx + 3;

  useFrame(() => {
    if (mesh.current) {
      if (
        mesh.current.position.y > height ||
        mesh.current.position.y < -height
      ) {
        dx = -dx;
      }
      mesh.current.position.y = mesh.current.position.y += dx;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[width, props.size || 1]} />
      <meshStandardMaterial color={0x000000} />
    </mesh>
  );
};

export const NotFound = (): JSX.Element => {
  const fontSizeGlitch = ['18px', '32px', '45px'];
  const [fontSize, setFontSize] = useState(fontSizeGlitch[0]);
  setInterval(() => {
    setFontSize(
      fontSizeGlitch[Math.floor(Math.random() * fontSizeGlitch.length)]
    );
  }, 300);

  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <div className="canvas">
        <p style={{ fontSize }}>404</p>
        <Canvas camera={{ position: [0, 0, 300] }}>
          <ambientLight />
          {[...Array(blockNum)].map((_, i) => {
            const size =
              Math.floor(Math.random() * (sizeMax + 1 - sizeMin)) + sizeMin;
            const startPositionY =
              Math.floor(
                Math.random() * (startPositionTop + 1 - startPositionBottom)
              ) - startPositionTop;
            return (
              <Line key={i} size={size} position={[0, startPositionY, 0]} />
            );
          })}
        </Canvas>
      </div>

      <style jsx>{`
        p {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .canvas {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default NotFound;
