import "./header.css";
import { Link } from "react-router";

export default function Headernav() {
    const nav = [
        { title: "About", link: "/about" },
        { title: "Blog", link: "/blog" },
        { title: "Projects", link: "/projects" },
    ];

    return (
        <>
            <div id="headernav">
                {nav.map((obj, index) => {
                    return (
                        <div className="navobject" key={index}>
                            <Link to={obj.link}>
                                <p>{obj.title}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
