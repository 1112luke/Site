import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Colorcard from "./Colorcard";

export default function Post2() {
    const [images, setimages] = useState([
        "/cbb/1.png",
        "/cbb/2.png",
        "/cbb/3.png",
        "/cbb/4.png",
    ]);

    const [colors, setcolors] = useState([
        "#FFC600",
        "#0E3A59",
        "#1F4662",
        "#162F43",
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
                <li>A snapshot of my VS code</li>
            </ul>

            <p>What do they all have in common?</p>

            <h3>The cobalt 2 color scheme!!!</h3>

            <div style={{ width: "100%", display: "flex", height: "20vh" }}>
                {colors.map((color, index) => {
                    return (
                        <div style={{ flex: 1 }} key={index}>
                            <Colorcard color={color} key={index}></Colorcard>
                        </div>
                    );
                })}
            </div>

            <p>
                I initially came across this scheme about 4 years ago when I
                decided to change my VS code theme from the default. After
                trying a few options, I fount Cobalt 2, and since then it has
                been my goto theme for anything that I need to style.
            </p>

            <p>
                I would say one of my weakest traits in general is style. I have
                no sense for colors, so having a default for everything is
                phenomenal. On top of this, it is satisfying when all of the
                tools I frequently use on my computer have the same colors.
                Everything becomes very cohesive, and my machine becomes
                uniquely mine. Maybe someday I'll get tired of the scheme, but
                for the time being, I plan to keep styling all my tools this
                way.
            </p>
        </>
    );
}
