import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "./header.css";
import Navobject from "./Navobject";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Pagenav from "./Pagenav";

export default function Headernav({ color = "white" }) {
    const nav = [
        { title: "About", link: "/" },
        { title: "All Posts", link: "/all-posts" },
        { title: "Projects", link: "/projects" },
    ];

    const [menuOpen, setmenuOpen] = useState(false);

    return (
        <>
            <div id="headernav">
                {nav.map((obj, index) => {
                    return (
                        <Navobject
                            obj={obj}
                            key={index}
                            color={color}
                            wide={true}
                        ></Navobject>
                    );
                })}
            </div>

            <a
                onClick={() => {
                    setmenuOpen((prevstate) => !prevstate);
                }}
                style={{
                    color:
                        color == "white" ? "var(--yellow)" : "var(--darkblue)",
                    zIndex: 2000,
                }}
                className="mobile"
            >
                {menuOpen ? (
                    <RxCross2
                        size="6rem"
                        style={{
                            position: "fixed",
                            left: "50%",
                            top: "15%",
                            transform: "translate(-50%, -50%)",
                            color: "var(--yellow)",
                            zIndex: -1,
                        }}
                    ></RxCross2>
                ) : (
                    <GiHamburgerMenu size="3rem"></GiHamburgerMenu>
                )}
            </a>
            {menuOpen && (
                <Pagenav
                    nav={nav}
                    color={color}
                    setopen={setmenuOpen}
                ></Pagenav>
            )}
        </>
    );
}
