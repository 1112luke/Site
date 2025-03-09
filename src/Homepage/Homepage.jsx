import ThreeBackground from "../Blog/Components/Background/Threebackground";
import Spinbox from "../Blog/Components/Spinbox";
import ThreeScene from "../Blog/Components/Threescene";
import { Canvas } from "@react-three/fiber";
import Header from "../Header/Header";
import { OrbitControls } from "@react-three/drei";
import Footer from "../Footer/Footer";

export default function Homepege() {
    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div
                style={{
                    height: "20vh",
                    fontSize: "20vh",
                    position: "absolute",
                    top: "13%",
                    left: "50%",
                    margin: "auto",
                    whiteSpace: "nowrap",
                    transform: "translate(-50%,-50% )",
                }}
            >
                Hi! I'm Luke 👋
            </div>
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Spinbox></Spinbox>
            </div>
            <Footer></Footer>
        </>
    );
}
