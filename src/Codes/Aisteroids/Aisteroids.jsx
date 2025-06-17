import { useEffect, useRef, useState } from "react";
import { Game } from "./asteroids";
import Gameel from "./Gameel";

export default function Aisteroids() {
    var [games, setgames] = useState([new Game()]);

    useEffect(() => {
        //run at 30fps
        setInterval(animate, 1000 / 60);
    }, []);

    function animate() {
        games.forEach((game) => {
            game.frame(1000 / 60 / 100);
        });

        setgames([...games]);
    }

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
                }}
            >
                {games.map((game, index) => {
                    return (
                        <>
                            <Gameel game={game} key={index}></Gameel>
                        </>
                    );
                })}
            </div>
        </>
    );
}
