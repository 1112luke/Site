import ThreeBackground from "../Blog/Components/Background/Threebackground";
import Spinbox from "../Blog/Components/Spinbox";
import ThreeScene from "../Blog/Components/Threescene";
import { Canvas } from "@react-three/fiber";
import Header from "../Header/Header";
import { OrbitControls } from "@react-three/drei";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sortedposts from "../Blog/Sortedposts";
import "../App.css";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBearLeft } from "react-icons/tb";
import Wip from "../Blog/Components/Wip";

export default function Homepege() {
    const [hovered, sethovered] = useState("none");

    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div
                style={{
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                }}
                className="mobile"
            >
                <div style={{ fontSize: "4rem" }}>Hi! I'm Luke 👋</div>
                <hr></hr>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "1.5rem",
                            flex: "1",
                        }}
                    >
                        I'm an Electrical Engineering major at the Unversity of
                        Notre Dame. I am passionate about electronics, code,
                        baseball, and guitar. Scroll to see some of my projects.
                    </div>
                    <div style={{ flex: "0.7" }}>
                        <img
                            src="./Me.jpeg"
                            width="90%"
                            style={{
                                border: "3px solid var(--yellow)",
                                borderRadius: "2%",
                                boxShadow: "-5px 5px 0 black",
                            }}
                        ></img>
                    </div>
                </div>
            </div>
            <div
                style={{
                    height: "20vh",
                    fontSize: "10vh",
                    position: "absolute",
                    top: "15%",
                    left: "50%",
                    margin: "auto",
                    whiteSpace: "nowrap",
                    transform: "translate(-50%,-50% )",
                    zIndex: 1,
                }}
                className="wide"
            >
                Hi! I'm Luke 👋
            </div>

            <div
                style={{
                    top: "50%",
                    width: "50%",
                    height: "80vh",
                    float: "left",
                    zIndex: 100,
                }}
                className="wide"
            >
                <div
                    style={{
                        position: "absolute",
                        width: "50%",
                        top: "50%",
                        left: "10%",
                        transform: "translate(-10%, -50%)",
                        fontSize: "2.5rem",
                        margin: "auto",
                        boxSizing: "border-box",
                    }}
                    className="wide"
                >
                    I'm an{" "}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hovertext"
                        onMouseOver={() => {
                            sethovered("electrical");
                        }}
                        onMouseLeave={() => {
                            sethovered("none");
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-50px",
                                transform: "rotate(-20deg)",
                                fontSize: "25px",
                                color: "white",
                                fontWeight: 200,
                            }}
                        >
                            Hover Me
                            <TbArrowBearLeft
                                style={{
                                    position: "absolute",
                                    left: "50px",
                                    top: "30px",
                                    transform: "scaleX(-1) rotate(205deg)",
                                }}
                            />
                        </div>
                        Electrical Engineering
                    </motion.div>{" "}
                    major at the{" "}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hovertext"
                        onMouseOver={() => {
                            sethovered("ND");
                        }}
                        onMouseLeave={() => {
                            sethovered("none");
                        }}
                    >
                        University of Notre Dame
                    </motion.div>
                    {". "}I am passionate about{" "}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hovertext"
                        onMouseOver={() => {
                            sethovered("electronics");
                        }}
                        onMouseLeave={() => {
                            sethovered("none");
                        }}
                    >
                        electronics
                    </motion.div>
                    , code, baseball, and guitar. Scroll to see some of my
                    projects.
                </div>
            </div>
            <div
                style={{
                    width: "50%",
                    height: "80vh",
                    float: "left",
                }}
                className="wide"
            >
                <Spinbox hovered={hovered}></Spinbox>
            </div>
            <div
                style={{ width: "100%", height: "80vh" }}
                className="wide"
            ></div>
            <div
                style={{
                    margin: "auto",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.5rem",
                }}
            >
                <div>Recent</div>
                <IoIosArrowDown></IoIosArrowDown>
            </div>
            <hr></hr>
            <div className="widthwrapper">
                <Sortedposts></Sortedposts>
            </div>

            <Footer></Footer>
        </>
    );
}
