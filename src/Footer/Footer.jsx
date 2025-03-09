import "./Footer.css";
import { Link } from "react-router";
import Headernav from "../Header/Headernav";

export default function Footer() {
    return (
        <>
            <div className="svglayers">&nbsp;</div>
            <div className="container">
                <div id="headerleft" className="centerbox">
                    <div>
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
                            Luke Scholler
                        </Link>
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
