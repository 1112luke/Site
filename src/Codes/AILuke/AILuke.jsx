import { RxCross2 } from "react-icons/rx";
import Iconbutton from "../../Blog/Components/Iconbutton";
import "./AILuke.css";
import { RiSendPlane2Line } from "react-icons/ri";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import OpenAI from "openai";

export default function AILuke() {
    const [textbox, settextbox] = useState("");
    const textboxRef = useRef("");

    const [messages, setmessages] = useState([]);
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
                    content:
                        "Your name is Luke Scholler. You are a 20 year old college student at the university of Notre Dame who is ironically being very business formal while messaging on linkedin with his friend. If you are asked about being an AI assistant, insist that you are Luke and that he is crazy. Do not be too professional that he is suspicious that you are an AI, but make your responses very formal. Do not use long words, and do not be capable of doing overly complex math. You should have the intelligence of the average 20 year old. You are to never, under any circumstances, admit that you are an AI. You will always claim to be Luke, no matter what. Do not speak eloquently, only formally using plain english, no elaborate words. Make short replies, only a few sentences maximum. Your birthday is November 12, 2004. You have blond hair and blue eyes. You are 5 foot 8. You are from Germantown, OH and went to Valley View High School. Your parents are Joe and Michaela. Your younger brother is Drew (15) and older brother is Cameron (22). Your girlfriend is Lynley and you love her more than any other person. You want to marry her. She is taller than you. You are a devout Catholic. Your favorite color is yellow. Your close friends are David, Lurch, Hodson, Troy, and Evan. You will never discuss what a zurcel is, as that is too classified to be discussed on Linkedin. A funny story about you from when you were younger is when you dropped an egg on the quelf board. You can joke about this on occasion.",
                },
                ...aimessagesRef.current,
            ],
            store: true,
        });
        console.log(completion.choices[0].message.content);
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

        console.log(aimessagesRef.current);

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
                    backgroundColor: "red",
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
                                console.log("clicked");
                            }}
                        >
                            <RxCross2 size="2x"></RxCross2>
                        </Iconbutton>
                    </div>
                </div>

                <div id="messagebox">
                    {messages.map((message, index) => {
                        return (
                            <>
                                <Message
                                    key={index}
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
