import { motion } from "framer-motion";

export default function Colorcard({ color, key }) {
    return (
        <>
            <motion.div
                style={{
                    width: "90%",
                    height: "90%",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px black",
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: key % 2 ? 1 : -1,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: 4,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            borderRadius: "100%",
                            width: "50%",
                            aspectRatio: 1,
                            backgroundColor: color,
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderTop: "2px solid var(--darkblue)",
                        color: "var(--darkblue)",
                    }}
                >
                    {color}
                </div>
            </motion.div>
        </>
    );
}
