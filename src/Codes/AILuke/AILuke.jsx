import { RxCross2 } from "react-icons/rx";
import Iconbutton from "../../Blog/Components/Iconbutton";
import "./AIluke.css";
import { RiSendPlane2Line } from "react-icons/ri";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import OpenAI from "openai";
import { lukecontent } from "./LukeContent";

export default function AILuke({ setopen }) {
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
            apiKey: "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",
            dangerouslyAllowBrowser: true, // Required if running in a browser environment
        });

        textRef.current = document.getElementById("aitextbox");

        var go = window.addEventListener("keydown", Handlekeypress);

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
                    width: "300px",
                    height: "40vh",
                    position: "fixed",
                    right: "20px",
                    bottom: "40px",
                    zIndex: 10,
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
                        }}
                    >
                        <h3 style={{ fontSize: "1rem", textAlign: "center" }}>
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
                        <Iconbutton
                            width="50%"
                            onclick={() => {
                                setopen(false);
                            }}
                        >
                            <RxCross2
                                style={{ zIndex: 200 }}
                                size="2rem"
                            ></RxCross2>
                        </Iconbutton>
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
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="text"
                            value={textbox}
                            id="aitextbox"
                            onChange={(e) => {
                                settextbox(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Iconbutton
                            width="50%"
                            onclick={() => {
                                sendMessage();
                            }}
                        >
                            <RiSendPlane2Line></RiSendPlane2Line>
                        </Iconbutton>
                    </div>
                </div>
            </div>
        </>
    );
}
