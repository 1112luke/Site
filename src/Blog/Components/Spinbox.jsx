import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import useHover from "./useHover";
import { CameraControls, Html, OrbitControls } from "@react-three/drei";
import { Camera } from "three";
import { useMotionValue, useSpring } from "framer-motion";

export default function Spinbox({ hovered }) {
    //for cube spin animation
    var cuberotmotion = useMotionValue(0);
    var smoothcube = useSpring(cuberotmotion, { stiffness: 150, damping: 18 });
    var cuberot = useRef(0); //keep track of total cube rotation

    //cube hove position
    var pos = useHover();

    var cuberef = useRef();

    var first = useRef(true);

    //smooth cube lookaround
    var mouseposmotx = useMotionValue(0);
    var smoothmousex = useSpring(mouseposmotx, {
        stiffness: 450,
        damping: 10,
    });

    var mouseposmoty = useMotionValue(0);
    var smoothmousey = useSpring(mouseposmoty, {
        stiffness: 450,
        damping: 10,
    });

    const [image, setimage] = useState("Me.jpeg");
    const [spinning, setspinning] = useState(false);
    const cubesize = useMotionValue(1);
    const smoothsize = useSpring(cubesize, { stiffness: 200, damping: 18 });
    //const [cuberot, setcuberot] = useState({ x: 0, y: 0, z: 0 });
    var [mouse, setmouse] = useState({ x: 0, y: 0, z: 0 });
    var [screensize, setscreensize] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    useEffect(() => {
        //spin cube
        if (!first.current) {
            cuberot.current = cuberot.current + 2 * Math.PI;
            cuberotmotion.set(cuberot.current);
        } else {
            first.current = false;
        }

        //change image after delay
        setTimeout(() => {
            switch (hovered) {
                case "electrical":
                    setimage("/electric.jpeg");
                    break;
                case "ND":
                    setimage("/Dome.avif");
                    break;
                case "electronics":
                    setimage("/electronics.png");
                    break;
                case "none":
                    setimage("/Me.jpeg");
                    break;
            }
        }, 100);
    }, [hovered]);

    function handlePointerMove(e) {
        setmouse({ x: e.x, y: e.y });
        mouseposmotx.set(e.x);
        mouseposmoty.set(e.y);
    }

    function handleResize(e) {
        setscreensize({ x: window.innerWidth, y: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("resize", handleResize);
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
                style={{
                    height: "100%",
                    width: "100%",
                }}
                camera={{ zoom: 5, position: [0, 0, 20] }}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <group
                    ref={cuberef}
                    position={[pos.x, pos.y, pos.z]}
                    rotation={[
                        0.1 + 0.1 * (smoothmousey.get() / screensize.y - 0.05),
                        -0.3 +
                            0.1 * (smoothmousex.get() / screensize.x - 0.05) +
                            smoothcube.get(),
                        0,
                    ]}
                    scale={[
                        smoothsize.get(),
                        smoothsize.get(),
                        smoothsize.get(),
                    ]}
                >
                    <mesh>
                        <boxGeometry args={[3, 3, 3]} />
                        <meshStandardMaterial wireframe color="yellow" />
                    </mesh>
                    <Html
                        scale={0.6}
                        style={{
                            width: "200px",
                            height: "200px",
                            zIndex: "5",
                        }}
                        position={[0, 0, 1.52]}
                        transform
                        occlude
                    >
                        {!spinning && (
                            <img
                                width="200px"
                                draggable={false}
                                src={image}
                                style={{ aspectRatio: 1 / 1 }}
                            ></img>
                        )}
                    </Html>
                </group>
            </Canvas>
        </>
    );
}
