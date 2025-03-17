export default function Wip() {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    backgroundColor: "var(--yellow)",
                    width: "300px",
                    aspectRatio: 1,
                    borderRadius: "1000px",
                    border: "10px solid var(--darkblue)",
                    bottom: "-80px",
                    left: "-30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--darkblue)",
                    padding: "20px",
                    boxSizing: "border-box",
                    transform: "rotate(20deg)",
                    fontSize: "20px",
                }}
            >
                This Website is a Work in Progress!!
            </div>
        </>
    );
}
