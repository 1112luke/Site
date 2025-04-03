export default function Message({ content, name, date }) {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    borderBottom: "1px solid var(--lightblue)",
                    display: "flex",
                    justifyContent: name == "you" ? "right" : "left",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        backgroundColor: "var(--lightblue)",
                        maxWidth: "80%",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        padding: "4px",
                        borderRadius: "5px",
                        display: "inline-block",
                        margin: "10px",
                        paddingBottom: "5px",
                        textAlign: "left",
                        fontSize: "0.9rem",
                    }}
                >
                    {content}
                </div>
            </div>
        </>
    );
}
