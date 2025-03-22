import { Link } from "react-router";
import { motion } from "motion/react";
import "./Card.css";

export default function Card({ title, date, description, id, tags, index }) {
    return (
        <>
            <Link to={`/${id}`}>
                <motion.div
                    id="container"
                    whileHover={{
                        backgroundColor: "#325671",
                        boxShadow: "-5px 5px #285071",
                        scale: 1.01,
                        rotate: index % 2 ? 0.5 : -0.5,
                    }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <h2>{title}</h2>
                    <h4>{date}</h4>
                    <p style={{ fontSize: "1.2rem" }}>{description}</p>
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
