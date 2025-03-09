import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import useHover from "./useHover";
import { CameraControls, Html, OrbitControls } from "@react-three/drei";
import { Camera } from "three";
import { useMotionValue, useSpring } from "framer-motion";

export default function Spinbox() {
    var pos = useHover();

    var cuberef = useRef();

    const [mounted, setmounted] = useState(false);
    const cubesize = useMotionValue(1);
    const smoothsize = useSpring(cubesize, { stiffness: 200, damping: 18 });

    var [mouse, setmouse] = useState({ x: 0, y: 0 });
    var [screensize, setscreensize] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    const [xrot, setxrot] = useState(0);

    var rotvel = 0;

    useEffect(() => {
        setmounted(true);

        var interval = setInterval(() => {
            setxrot((current) => current + rotvel);
        }, 1000 / 60);

        window.addEventListener("pointermove", (e) => {
            setmouse({ x: e.x, y: e.y });
        });

        window.addEventListener("resize", () => {
            setscreensize({ x: window.innerWidth, y: window.innerHeight });
        });

        return () => {
            clearInterval(interval);
            setmounted(false);
        };
    }, []);
    /*
    useEffect(() => {
        console.log(mouse);
    }, [mouse]);
*/

    return (
        <>
            <Canvas
                ref={cuberef}
                style={{
                    height: "100%",
                    width: "100%",
                }}
                camera={{ zoom: 5, position: [0, 0, 20] }}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group
                    position={[pos.x, pos.y, pos.z]}
                    rotation={[
                        0.1 + 0.1 * (mouse.y / screensize.y - 0.05),
                        -0.3 + 0.1 * (mouse.x / screensize.x - 0.05),
                        0,
                    ]}
                    scale={[
                        smoothsize.get(),
                        smoothsize.get(),
                        smoothsize.get(),
                    ]}
                >
                    <mesh>
                        <boxGeometry args={[3.5, 3.5, 3.5]} />
                        <meshStandardMaterial wireframe color="yellow" />
                    </mesh>
                    <Html
                        scale={0.7}
                        style={{
                            width: "200px",
                            height: "200px",
                            zIndex: "5",
                        }}
                        position={[0, 0, 1.78]}
                        transform
                        occlude
                    >
                        <img
                            onMouseDown={() => {
                                console.log("down");
                                cubesize.set(0.8);
                            }}
                            onMouseUp={() => {
                                cubesize.set(1);
                            }}
                            onMouseLeave={() => {
                                cubesize.set(1);
                            }}
                            width="200px"
                            draggable={false}
                            src="https://media.licdn.com/dms/image/v2/D4E03AQHEazpdvufamQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716318374422?e=1746662400&v=beta&t=VbL1eUEIZVmlo2RFV8X38GQSTXZRVjvrr1YwGEMWE10"
                        ></img>
                    </Html>
                </group>
            </Canvas>
        </>
    );
}
