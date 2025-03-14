import "./Footer.css";
import { Link } from "react-router";
import Headernav from "../Header/Headernav";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";

export default function Footer() {
    return (
        <>
            <div className="svglayers">&nbsp;</div>
            <div className="container">
                <div className="width">
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
                        <div style={{ display: "block", width: "100%" }}>
                            &copy; 2025 Luke Scholler
                        </div>
                        <Link
                            to={"/"}
                            id="topleft"
                            style={{
                                color: "#1F4662",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            Back to Top
                        </Link>
                    </div>
                    <div id="footerright" className="centerbox">
                        <Headernav></Headernav>
                    </div>
                </div>
            </div>
        </>
    );
}
