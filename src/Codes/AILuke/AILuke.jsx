import { RxCross2 } from "react-icons/rx";
import Iconbutton from "../../Blog/Components/Iconbutton";
import "./AIluke.css";
import { RiSendPlane2Line } from "react-icons/ri";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import OpenAI from "openai";
import { lukecontent } from "./LukeContent";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function AILuke({ setopen, centered = false }) {
    const [textbox, settextbox] = useState("");
    const textboxRef = useRef("");

    const [messages, setmessages] = useState([
        {
            role: "assistant",
            content: "Hello! I'm Luke (kind of). What do you wanna talk about?",
        },
    ]);
    const aimessagesRef = useRef();

    const textRef = useRef();

    const openai = useRef();

    useEffect(() => {
        //load ai
        openai.current = new OpenAI({
            //apiKey: import.meta.env.VITE_GPT_KEY,
            apiKey: "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",
            dangerouslyAllowBrowser: true, // Required if running in a browser environment
        });

        textRef.current = document.getElementById("aitextbox");

        window.addEventListener("keydown", Handlekeypress);

        return () => {
            window.removeEventListener("keydown", Handlekeypress);
        };
    }, []);

    function Handlekeypress(event) {
        if (event.key == "Enter" && document.activeElement == textRef.current) {
            sendMessage();
        }
    }

    function sendMessage() {
        if (textboxRef.current != "") {
            setmessages((m) => [
                ...m,
                {
                    content: textboxRef.current,
                    name: "you",
                    date: Date.now(),
                },
            ]);
            settextbox("");
        }
    }

    async function getResponse() {
        const completion = await openai.current.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "developer",
                    content: lukecontent,
                },
                ...aimessagesRef.current,
            ],
            store: true,
        });
        setmessages((m) => [
            ...m,
            {
                role: "assistant",
                content: completion.choices[0].message.content,
            },
        ]);
    }

    useEffect(() => {
        textboxRef.current = textbox;
    }, [textbox]);

    useEffect(() => {
        aimessagesRef.current = [];

        messages.forEach((message) => {
            aimessagesRef.current.push({
                role: message.name == "you" ? "user" : "assistant",
                content: message.content,
            });
        });

        document.getElementById("messagebox").scrollTop =
            document.getElementById("messagebox").scrollHeight;

        if (
            messages[messages.length - 1] &&
            messages[messages.length - 1].name == "you"
        ) {
            getResponse();
        }
    }, [messages]);

    return (
        <>
            <div
                style={{
                    width: centered ? "100%" : "300px",
                    height: "50vh",
                    position: centered ? "relative" : "fixed",
                    right: centered ? "0px" : "20px",
                    bottom: centered ? "0px" : "40px",
                    zIndex: centered ? 1 : 1000000000,
                    backgroundColor: "var(--darkblue)",
                    border: "2px solid var(--lightblue)",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px black",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <div id="nameheader">
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            flex: 3,
                            color: "var(--darkblue)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            flexDirection: "column",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "16px",
                                textAlign: "center",
                            }}
                        >
                            Chat With (AI) Me
                        </h3>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        {!centered && (
                            <Iconbutton
                                width="32px"
                                onclick={() => {
                                    setopen(false);
                                }}
                            >
                                <RxCross2
                                    style={{ zIndex: 200 }}
                                    size="2rem"
                                ></RxCross2>
                            </Iconbutton>
                        )}
                    </div>
                </div>

                <div id="messagebox">
                    {messages.map((message, index) => {
                        return (
                            <>
                                <Message
                                    key={index}
                                    bottom={false}
                                    content={message.content}
                                    name={message.name}
                                    date={message.date}
                                ></Message>
                            </>
                        );
                    })}
                    <div
                        style={{
                            width: "100%",
                            height: "70px",
                        }}
                    ></div>
                </div>

                <div id="textarea">
                    <div style={{ flex: 1 }}></div>
                    <div
                        style={{
                            flex: 12,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="text"
                            style={{
                                width: "100%",
                            }}
                            value={textbox}
                            id="aitextbox"
                            onChange={(e) => {
                                settextbox(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div
                        style={{
                            flex: 4,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Iconbutton
                            width="35px"
                            onclick={() => {
                                sendMessage();
                            }}
                        >
                            <RiSendPlane2Line
                                style={{ fontSize: "16px" }}
                            ></RiSendPlane2Line>
                        </Iconbutton>
                    </div>
                    {!centered && (
                        <Link to="/ai-luke">
                            <motion.div
                                whileHover={{ color: "var(--yellow)" }}
                                style={{
                                    position: "absolute",
                                    textAlign: "center",
                                    left: "50%",
                                    transform: "translate(-50%)",
                                    fontSize: "12px",
                                    color: "var(--lightblue)",
                                    top: "-17px",
                                    zIndex: 200,
                                }}
                            >
                                How did I make this?{" "}
                                <FaExternalLinkAlt size="10px"></FaExternalLinkAlt>
                            </motion.div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
