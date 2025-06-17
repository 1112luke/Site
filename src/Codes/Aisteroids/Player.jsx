export default function Player({ player }) {
    return (
        <div
            style={{
                position: "absolute",
                width: `${player.width}%`,
                height: `${player.height}%`,
                backgroundColor: "white",
                top: `${player.ypos}%`,
                left: `${player.xpos}%`,
                transform: `rotate(${player.angle}deg) translate(-50%, -50%)`,
                transformOrigin: "top left",
            }}
        ></div>
    );
}
