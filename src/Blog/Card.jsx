import { Link } from "react-router";
import { motion } from "motion/react";
import "./Card.css";

export default function Card({ title, date, description, id, index }) {
    return (
        <>
            <Link to={`/blog/${id}`}>
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
                    <p>{description}</p>
                </motion.div>
            </Link>
        </>
    );
}
