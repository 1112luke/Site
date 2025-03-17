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
            >
                <div
                    style={{
                        position: "absolute",
                        width: "50%",
                        top: "50%",
                        left: "10%",
                        transform: "translate(-10%, -50%)",
                        fontSize: "40px",
                        margin: "auto",
                        boxSizing: "border-box",
                    }}
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
                    {". "}I am passionate about code,{" "}
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
                    {", "}
                    baseball, and guitar. Scroll to see some of my projects.
                </div>
            </div>
            <div
                style={{
                    width: "50%",
                    height: "80vh",
                    float: "left",
                }}
            >
                <Spinbox hovered={hovered}></Spinbox>
            </div>
            <div style={{ width: "100%", height: "80vh" }}></div>
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
