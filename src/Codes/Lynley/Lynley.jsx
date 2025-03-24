import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import song from "/AML.mp3";
import { useEffect, useRef, useState } from "react";

export default function Lynley() {
    const audioRef = useRef(new Audio(song));

    const [playing, setplaying] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio(song);

        if (playing) {
            audioRef.current.play();
        }
        console.log(playing);
    }, [playing]);

    return (
        <>
            <audio
                ref={audioRef}
                style={{ position: "fixed", zIndex: "500" }}
            ></audio>
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    backgroundColor: "var(--darkblue)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                        fontSize: "5rem",
                    }}
                >
                    <i>Lynley Marie Pace,</i>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                    }}
                >
                    <motion.div
                        onClick={() => {
                            if (!playing) {
                                setplaying(true);
                            }
                        }}
                        onTap={() => {
                            if (!playing) {
                                setplaying(true);
                            }
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.5 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FaHeart size="20vh" style={{ color: "red" }}></FaHeart>
                    </motion.div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flex: 1,
                        fontSize: "5rem",
                    }}
                >
                    My heart beats for&nbsp;
                    <strong>YOU</strong>
                </div>
            </div>
        </>
    );
}
