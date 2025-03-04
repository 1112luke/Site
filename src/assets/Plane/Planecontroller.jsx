import { useEffect, useState } from "react";
import Plane from "./Plane";
import { motion, useMotionValue } from "framer-motion";
import useWindowSize from "../../Blog/Components/UseWindowSize";

export default function Planecontroller() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    var gravitygoing = true;

    var velx = 0;
    var vely = 0;
    var accx = 0;
    var accy = 0.05;

    const { windowwidth, windowheight } = useWindowSize();

    useEffect(() => {
        const moveplane = setInterval(() => {
            console.log("width", windowheight);
            if (gravitygoing) {
                /*
                if (y.get() > windowheight - 20) {
                    y.set(windowheight);
                } else {
                    y.set(y.get() + vely);
                }
                if (x.get() > windowwidth) {
                    x.set(windowwidth);
                } else {
                    x.set(x.get() + velx);
                }
                */
                velx += accx;
                if (vely < 10) {
                    vely += accy;
                }
            }
        }, 1000 / 60);

        return () => clearInterval(moveplane);
    }, []);

    return (
        <>
            <motion.div
                style={{ position: "absolute", top: y, left: x }}
                drag
                onPointerDown={() => {
                    console.log("down");
                    gravitygoing = false;
                }}
                onDragEnd={(event, info) => {
                    gravitygoing = true;
                    velx = info.velocity.x * 0.001;
                    vely = info.velocity.y * 0.001;
                }}
            >
                <Plane></Plane>
            </motion.div>
        </>
    );
}
