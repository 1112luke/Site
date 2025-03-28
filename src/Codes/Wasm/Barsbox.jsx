/*
import { useEffect, useState } from "react";

export default function Barsbox({ bars }) {
    const [barwidth, setbarwidth] = useState();
    const [maxbar, setmaxbar] = useState();

    useEffect(() => {
        setbarwidth(100 / bars.length);
        setmaxbar(Math.max(...bars));
    }, [bars]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "40vh",
                    backgroundColor: "var(--lightblue)",
                    border: "1px solid var(--yellow)",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                {bars.map((bar, index) => {
                    return (
                        <div
                            style={{
                                height: `${(bar / maxbar) * 100}%`,
                                width: `${barwidth}%`,
                                position: "absolute",
                                left: `${barwidth * index}%`,
                                bottom: "0",
                                backgroundColor: "black",
                                border: "1px solid var(--darkblue)",
                                boxSizing: "border-box",
                            }}
                            key={index}
                        ></div>
                    );
                })}
            </div>
        </>
    );
}
*/
