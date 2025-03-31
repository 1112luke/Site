import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Post2() {
    const [images, setimages] = useState([
        "/cbb/1.png",
        "/cbb/2.png",
        "/cbb/3.png",
        "/cbb/4.png",
    ]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                {images.map((image, index) => {
                    return (
                        <div
                            style={{ width: "100%", aspectRatio: 3824 / 2474 }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    rotate: index % 2 ? 1 : -1,
                                }}
                            >
                                <img
                                    key={index}
                                    src={image}
                                    style={{ width: "100%", height: "100%" }}
                                ></img>
                            </motion.div>
                        </div>
                    );

                    //return <img key={index} src={image}></img>;
                })}
            </div>
            <h3>Introduction</h3>

            <p>Above you see four things:</p>
            <ul>
                <li>An assignment tracker spreadsheet</li>
                <li>
                    <a href="/this-website" target="_blank">
                        This Website
                    </a>
                </li>
                <li>A snapshot of my terminal</li>
                <li>A snapshot of my VSCode</li>
            </ul>

            <p>What do they all have in common?</p>

            <h3>The cobalt blue color scheme!!!</h3>
        </>
    );
}
