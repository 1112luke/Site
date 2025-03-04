import { useEffect, useRef, useState } from "react";

export default function Cube({ x, y, z, rot }) {
    var cuberef = useRef();

    var xvel;
    var yvel;
    var zvel;

    //begin spinning cube
    useEffect(() => {
        cuberef.current.rotation.x = rot.x;
        cuberef.current.rotation.y = rot.y;
        cuberef.current.rotation.z = rot.z;
        cuberef.current.position.x = x;
        cuberef.current.position.y = y;
        cuberef.current.position.z = z;

        xvel = Math.random() * 0.01;
        yvel = Math.random() * 0.01;
        zvel = Math.random() * 0.01;

        const xveltar = xvel;
        const yveltar = yvel;
        const zveltar = zvel;

        var acc = 0.98;

        var go = setInterval(() => {
            if (xvel > xveltar) {
                xvel *= acc;
            }
            if (yvel > yveltar) {
                yvel *= acc;
            }
            if (zvel > zveltar) {
                zvel *= acc;
            }

            if (cuberef.current && cuberef.current.rotation) {
                cuberef.current.rotation.x += xvel;
                cuberef.current.rotation.y += yvel;
                cuberef.current.rotation.z += zvel;
            }
        }, 1000 / 30);
    }, []);

    return (
        <>
            <mesh
                ref={cuberef}
                onPointerEnter={() => {
                    xvel += 0.3;
                    yvel += 0.3;
                    zvel += 0.3;
                }}
            >
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial wireframe color="yellow" />
            </mesh>
        </>
    );
}
