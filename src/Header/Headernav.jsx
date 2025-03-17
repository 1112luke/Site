import "./header.css";
import Navobject from "./Navobject";

export default function Headernav({ color = "white" }) {
    const nav = [
        { title: "About", link: "/" },
        { title: "All Posts", link: "/all-posts" },
        { title: "Projects", link: "/projects" },
    ];

    return (
        <>
            <div id="headernav">
                {nav.map((obj, index) => {
                    return (
                        <Navobject
                            obj={obj}
                            key={index}
                            color={color}
                        ></Navobject>
                    );
                })}
            </div>
        </>
    );
}
