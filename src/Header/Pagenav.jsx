import { RxCross2 } from "react-icons/rx";
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
                    <a
                        onClick={() => {
                            setopen((prevstate) => !prevstate);
                        }}
                        style={{
                            color:
                                color == "white"
                                    ? "var(--yellow)"
                                    : "var(--darkblue)",
                            zIndex: 2000,
                        }}
                        className="mobile"
                    >
                        <RxCross2
                            size="6rem"
                            style={{
                                position: "fixed",
                                left: "50%",
                                top: "15%",
                                transform: "translate(-50%, -50%)",
                                color: "var(--yellow)",
                            }}
                        ></RxCross2>
                    </a>

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
