import "./header.css";
import Navobject from "./Navobject";

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
                    return <Navobject obj={obj} key={index}></Navobject>;
                })}
            </div>
        </>
    );
}
