import { useEffect } from "react";
import Player from "./Player";
import Asteroid from "./Asteroid";
import Laser from "./Laser";

export default function Gameel({ game }) {
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            game.pressed(event.key);
        });

        document.addEventListener("keyup", (event) => {
            game.unpressed(event.key);
        });
    }, []);

    return (
        <div
            style={{
                flex: 1,
                position: "relative",
                width: "100%",
                height: "100%",
                border: "1px solid white",
                boxSizing: "border-box",
                overflow: "hidden",
            }}
        >
            <Player player={game.player}></Player>

            {game.lasers.map((laser) => {
                return <Laser laser={laser}></Laser>;
            })}

            {game.asteroids.map((asteroid) => {
                return <Asteroid></Asteroid>;
            })}
        </div>
    );
}
