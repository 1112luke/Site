import ThreeBackground from "../Blog/Components/Background/Threebackground";
import Spinbox from "../Blog/Components/Spinbox";
import ThreeScene from "../Blog/Components/Threescene";
import { Canvas } from "@react-three/fiber";
import Header from "../Header/Header";
import { OrbitControls } from "@react-three/drei";

export default function Homepege() {
    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        height: "20%",
                        fontSize: "120px",
                    }}
                >
                    Hi! I'm Luke 👋
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "80%",
                    }}
                >
                    <Spinbox></Spinbox>
                </div>
            </div>
        </>
    );
}
