export default function Laser({ laser }) {
    return (
        <div
            style={{
                position: "absolute",
                width: `${laser.width}%`,
                height: `${laser.height}%`,
                backgroundColor: "white",
                top: `${laser.ypos}%`,
                left: `${laser.xpos}%`,
                borderRadius: "100%",
                transform: `rotate(${laser.angle}deg) translate(-50%, -50%)`,
                transformOrigin: "top left",
            }}
        ></div>
    );
}
