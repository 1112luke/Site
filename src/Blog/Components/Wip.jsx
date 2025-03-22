export default function Wip() {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    backgroundColor: "var(--yellow)",
                    borderRadius: "1000px",
                    border: "10px solid var(--darkblue)",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--darkblue)",
                    padding: "20px",
                    boxSizing: "border-box",
                    transform: "rotate(20deg)",
                    zIndex: "100",
                }}
                className="wip"
            >
                This Website is a Work in Progress!!
            </div>
        </>
    );
}
