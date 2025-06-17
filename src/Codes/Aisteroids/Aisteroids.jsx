import { useEffect, useRef } from "react";

export default function Aisteroids() {
    var games = useRef([]);

    useEffect(() => {
        games.current.push(new Game());
        console.log("HELLO", games);
    }, []);

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></div>
            {games.current.forEach((index, game) => {
                <div style={{ flex: "1", color: "white" }}>Hello</div>;
            })}
        </>
    );
}
