import { Link } from "react-router";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function Navobject({ obj }) {
    const underwidth = useMotionValue(0);
    const springunderwidth = useSpring(underwidth, {
        stiffness: 300,
        damping: 40,
    });
    const springpercent = useTransform(() => `${springunderwidth.get()}%`);

    return (
        <>
            <div className="navobject">
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
                    to={obj.link}
                >
                    <p>{obj.title}</p>
                    <motion.div
                        style={{
                            width: springpercent,
                        }}
                        className="punderline"
                    >
                        &nbsp;
                    </motion.div>
                </Link>
            </div>
        </>
    );
}
