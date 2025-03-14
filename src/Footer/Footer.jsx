import "./Footer.css";
import { Link } from "react-router";
import Headernav from "../Header/Headernav";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
    return (
        <>
            <div className="svglayers">&nbsp;</div>
            <div className="container">
                <div className="widthconst">
                    <div id="footerleft" className="centerbox">
                        <a
                            href={"https://www.linkedin.com/in/lukescholler/"}
                            target="_blank"
                            style={{ margin: "7px", fontSize: "3rem" }}
                        >
                            <GrLinkedin
                                style={{ color: "var(--darkblue)" }}
                            ></GrLinkedin>
                        </a>
                        <a
                            href={"https://github.com/1112luke"}
                            target="_blank"
                            style={{ margin: "7px", fontSize: "3.3rem" }}
                        >
                            <GrGithub
                                style={{ color: "var(--darkblue)" }}
                            ></GrGithub>
                        </a>
                    </div>

                    <div id="footercenter" className="centerbox">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div
                                id="totop"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <IoIosArrowUp
                                    style={{
                                        display: "block",
                                        width: "100%",
                                    }}
                                ></IoIosArrowUp>
                                <div
                                    style={{
                                        display: "block",
                                        width: "100%",
                                    }}
                                >
                                    Back to Top
                                </div>
                            </div>
                            <Link
                                to={"/"}
                                id="topleft"
                                style={{
                                    color: "var(--darkblue)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                <div
                                    style={{
                                        flex: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    &copy; 2025 Luke Scholler
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id="footerright" className="centerbox">
                        <Headernav></Headernav>
                    </div>
                </div>
            </div>
        </>
    );
}
