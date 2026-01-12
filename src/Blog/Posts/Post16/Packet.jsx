export default function Packet({ names, labels }) {
    return (
        <>
            <div
                style={{ width: "100%", display: "flex", marginBottom: "10px" }}
            >
                {names.map((name, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                flex: 1,
                                border: "1px solid var(--lightblue)",
                                padding: "10px",
                            }}
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
            <div
                style={{ width: "100%", display: "flex", marginBottom: "10px" }}
            >
                {labels.map((label, index) => {
                    return (
                        <div key={index} style={{ flex: "1" }}>
                            {label}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
