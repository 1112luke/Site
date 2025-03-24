import { Link } from "react-router";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import "../App.css";

export default function Navobject({ obj, color, setopen }) {
    const underwidth = useMotionValue(0);
    const springunderwidth = useSpring(underwidth, {
        stiffness: 300,
        damping: 40,
    });
    const springpercent = useTransform(() => `${springunderwidth.get()}%`);

    return (
        <>
            <div className={`navobject`}>
                <Link
                    onMouseEnter={() => {
                        {
                            underwidth.set(100);
                        }
                    }}
                    onMouseLeave={() => {
                        {
                            underwidth.set(0);
                        }
                    }}
                    onClick={() => {
                        setopen && setopen(false);
                    }}
                    to={obj.link}
                >
                    <div style={{ width: "fit-content" }}>
                        <p
                            style={{
                                color: color,
                                fontWeight: "400",
                            }}
                            id="navtext"
                        >
                            {obj.title}
                        </p>
                        <motion.div
                            style={{
                                width: springpercent,
                                backgroundColor:
                                    color == "white" ? "var(--yellow)" : color,
                            }}
                            className="punderline"
                        >
                            &nbsp;
                        </motion.div>
                    </div>
                </Link>
            </div>
        </>
    );
}
