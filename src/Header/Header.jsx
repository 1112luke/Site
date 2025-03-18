import { useEffect, useRef, useState } from "react";
import Wip from "../Blog/Components/Wip";
import "./header.css";
import Headernav from "./Headernav";
import { Link } from "react-router";

export default function Header() {
    var hovered = useRef(false);

    const [person, setperson] = useState("luke");

    const hovercount = useRef(0);

    var checkhover = false;

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

    return (
        <>
            <Wip></Wip>
            <div id="header">
                <div id="headerleft" className="centerbox">
                    <div>
                        {person == "luke" ? (
                            <Link
                                to={"/"}
                                id="topleft"
                                onMouseOver={() => {
                                    hovered.current = true;
                                }}
                                onMouseLeave={() => {
                                    hovered.current = false;
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
                                }}
                                onMouseLeave={() => {
                                    hovered.current = false;
                                    setperson("luke");
                                }}
                            >
                                <div style={{ display: "inline" }}>Lynley </div>
                                <div style={{ display: "inline" }}>
                                    Scholler
                                </div>
                            </a>
                        )}
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
