import ThreeBackground from "./Background/Threebackground";

export default function Nopath() {
    return (
        <>
            <ThreeBackground></ThreeBackground>
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div style={{ color: "var(--yellow)", fontSize: "5rem" }}>
                    404, Page Not Found...
                </div>
            </div>
        </>
    );
}
