import { useEffect, useRef, useState } from "react";
import Wip from "../Blog/Components/Wip";
import "./header.css";
import Headernav from "./Headernav";
import { Link } from "react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AILuke from "../Codes/AILuke/AILuke";

export default function Header() {
    var hovered = useRef(false);

    const [person, setperson] = useState("luke");

    const joketran = useMotionValue(-400);
    const springjoketran = useSpring(joketran);
    const springpx = useTransform(() => `${springjoketran.get()}px`);
    const jokerot = useMotionValue(0);
    const springjokerot = useSpring(jokerot);
    const springrot = useTransform(() => `rotate(${springjokerot.get()}deg)`);

    const [hoveredstate, sethovered] = useState(false);
    const [joke, setjoke] = useState("haha");

    const hovercount = useRef(0);

    useEffect(() => {
        var go = setInterval(() => {
            if (hovered.current) {
                hovercount.current += 1;
            }

            if (!hovered.current) {
                hovercount.current = 0;
            }

            if (hovercount.current > 200) {
                setperson("lynley");
            }
        }, 1000 / 30);

        return () => {
            clearInterval(go);
        };
    }, []);

    useEffect(() => {
        if (hoveredstate) {
            fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            })
                .then((response) => response.json())
                .then((data) => {
                    setjoke(data.joke);
                    joketran.set(30);
                    jokerot.set(-10);
                });
        } else {
            joketran.set(-400);
            jokerot.set(0);
        }
    }, [hoveredstate]);

    return (
        <>
            <Wip></Wip>
            <AILuke></AILuke>
            <div id="header" style={{ overflow: "visible" }}>
                <div
                    id="headerleft"
                    className="centerbox"
                    style={{ overflow: "visible" }}
                >
                    <div style={{ position: "relative", overflow: "visible" }}>
                        {person == "luke" ? (
                            <Link
                                to={"/"}
                                id="topleft"
                                onMouseOver={() => {
                                    hovered.current = true; //for timer for name
                                    sethovered(true); //for event for joke
                                }}
                                onMouseLeave={() => {
                                    hovered.current = false;
                                    sethovered(false);
                                }}
                            >
                                <div style={{ display: "inline" }}>Luke </div>
                                <div style={{ display: "inline" }}>
                                    Scholler
                                </div>
                            </Link>
                        ) : (
                            <a
                                href="https://wiseinnocent.com/"
                                target="_blank"
                                id="topleft"
                                onMouseOver={() => {
                                    hovered.current = true;
                                    sethovered(true);
                                }}
                                onMouseLeave={() => {
                                    hovered.current = false;
                                    sethovered(false);
                                    setperson("luke");
                                }}
                            >
                                <div style={{ display: "inline" }}>
                                    Lynley{` `}
                                </div>
                                <div style={{ display: "inline" }}>
                                    Scholler
                                </div>
                            </a>
                        )}
                        <motion.div
                            style={{
                                position: "absolute",
                                top: "3rem",
                                width: "20rem",
                                transform: springrot,
                                left: springpx,
                                fontSize: "1rem",
                                pointerEvents: "none",
                            }}
                        >
                            {joke}
                        </motion.div>
                    </div>
                </div>
                <div id="headercenter" className="centerbox"></div>
                <div id="headerright" className="centerbox">
                    <Headernav></Headernav>
                </div>
            </div>
        </>
    );
}
