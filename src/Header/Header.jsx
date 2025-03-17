import Wip from "../Blog/Components/Wip";
import "./header.css";
import Headernav from "./Headernav";
import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <Wip></Wip>
            <div id="header">
                <div id="headerleft" className="centerbox">
                    <div>
                        <Link to={"/"} id="topleft">
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
