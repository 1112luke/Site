import { Link } from "react-router";
import { motion, useSpring } from "motion/react";
import "./Card.css";

export default function Card({
    title,
    date,
    description,
    id,
    tags,
    blank = false,
    index,
    image,
}) {
    const textpos = useSpring("120%");

    return (
        <>
            <Link to={blank ? "#" : `/${id}`}>
                <motion.div
                    id="container"
                    whileHover={{
                        backgroundColor: "#325671",
                        boxShadow: "-5px 5px #285071",
                        scale: 1.01,
                        rotate: index % 2 ? 0.5 : -0.5,
                    }}
                    onMouseEnter={() => {
                        textpos.set("20%");
                    }}
                    onMouseLeave={() => {
                        textpos.set("120%");
                    }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <div style={{ paddingLeft: "7px" }}>
                        <h2>{title}</h2>
                        <h4>{date}</h4>
                    </div>

                    <motion.div
                        style={{
                            position: "absolute",
                            top: textpos,
                            backgroundColor: "#325671",
                            paddingBottom: "1000px",
                            borderTop: "2px solid var(--yellow)",
                            zIndex: 1,
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.9rem",
                                paddingTop: "10px",
                                marginTop: "0px",
                            }}
                        >
                            {description}
                        </p>
                    </motion.div>

                    <img
                        src={image}
                        style={{
                            marginTop: "50%",
                            position: "relative",
                            transform: "translateY(-65%)",
                            zIndex: 0,
                        }}
                    ></img>
                    <div id="tagbox">
                        {tags.map((tag, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "rgba(255,198,0, 40%)",
                                        width: "15%",
                                        opacity: "100%",
                                        flex: 1,
                                        textAlign: "left",
                                        paddingBottom: "2px",
                                        paddingLeft: "7px",
                                        paddingRight: "7px",
                                        display: "inline",
                                        margin: "10px",
                                        borderRadius: "40px",
                                        border: "2px solid var(--yellow)",
                                        color: "var(--yellow)",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    {`#${tag}`}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </Link>
        </>
    );
}
