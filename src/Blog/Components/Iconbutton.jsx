export default function Iconbutton({ width, height, onclick, children }) {
    return (
        <>
            <div
                id="hoverpointer"
                style={{
                    width: width,
                    aspectRatio: "1",
                    borderRadius: "100%",
                    boxShadow: "0px 0px 5px black",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                }}
                onClick={() => {
                    onclick();
                }}
            >
                {children}
            </div>
        </>
    );
}
