import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const ThreeBackground = ({ abs = false }) => {
    const num_cubes = 30;

    var [cubes, setcubes] = useState([]);
    //generate starting point for unique cubes
    useEffect(() => {
        var tempcubes = [];

        var xextent = 160;
        var yextent = 120;
        var zextent = 160;

        for (var i = 0; i < num_cubes; i++) {
            tempcubes.push({
                x: Math.floor(Math.random() * xextent) - xextent / 2,
                y: Math.floor(Math.random() * yextent) - yextent / 2,
                z: Math.floor(Math.random() * zextent) - zextent / 2 - 80,
                rot: {
                    x: Math.floor(Math.random() * 360),
                    y: Math.floor(Math.random() * 360),
                    z: Math.floor(Math.random() * 360),
                },
            });
        }
        setcubes(tempcubes);
    }, []);

    return (
        <Canvas
            gl={{
                pixelRatio: 20,
            }}
            style={{
                position: abs ? "absolute" : "fixed",
                top: 0,
                left: 0,
                width: abs ? "100%" : "100vw",
                height: abs ? "100%" : "100vh",
                zIndex: -1,
            }}
        >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            {cubes.map((cube, index) => {
                return (
                    <Cube
                        x={cube.x}
                        y={cube.y}
                        z={cube.z}
                        rot={cube.rot}
                        key={index}
                    ></Cube>
                );
            })}
        </Canvas>
    );
};

export default ThreeBackground;
