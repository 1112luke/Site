import Navobject from "./Navobject";

export default function Pagenav({ nav, color, setopen }) {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    zIndex: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "var(--darkblue)",
                    zindex: "-10",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "40%",
                        display: "flex",
                        justifyContent: "centers",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    {nav.map((obj, index) => {
                        return (
                            <div key={index}>
                                <Navobject
                                    obj={obj}
                                    color={"white"}
                                    setopen={setopen}
                                ></Navobject>
                                <hr></hr>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
