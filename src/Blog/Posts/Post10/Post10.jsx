import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import AILuke from "../../../Codes/AILuke/AILuke";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router";

export default function Post10() {
    return (
        <>
            <div style={{ width: "100%", height: "50vh" }}>
                <AILuke centered={true}></AILuke>
            </div>
            <h3>Introduction</h3>
            <p>
                This widget, which you see above and can access in the bottom
                right corner of every page of my website, is an AI chatbot just
                like any other, except I have created the AI so that it responds
                as if it were me. I've given it some info about me as well as
                the context of all of the information on this website. I also
                created the chatbox component from scratch using React and CSS.
                I will break down both the AI component and the UI component,
                starting with the AI.
            </p>
            <aside>
                With this being said, it is still an AI, and I do not have
                direct control over exactly what it says, so please, do not take
                anything it says as if I said it!
            </aside>

            <h3>How I Made the AI</h3>
            <p>
                Making this chatbot was surprisingly simple. I embraced the
                "there's an API for that" mentality, and outsourced all the AI
                to chatgpt, using the{" "}
                <a
                    href="https://platform.openai.com/settings/proj_mTtLDzeafXyHruIx4KFBvVG9/api-keys"
                    target="_blank"
                >
                    OpenAI API platform
                </a>
                . This platform makes it surprisingly easy to get a response
                from ChatGPT. Below is the simplest example I could create using
                the Javascript fetch API:
            </p>

            <p>First, install the openai api package from npm:</p>

            <SyntaxHighlighter
                id="syntax"
                language="bash"
                style={monoBlue}
            >{`npm install openai`}</SyntaxHighlighter>

            <p>Then, we can write the code to generate a simple response:</p>

            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`import OpenAI from "openai";

openai.current = new OpenAI({
    apiKey: "you-api-key",
    dangerouslyAllowBrowser: true, // Required if running in a browser environment
});

const completion = await openai.current.chat.completions.create({
model: "gpt-4o-mini",
messages: [
    {
        role: "user",
        content: "chatgpt, tell me a joke!",
    },
],
store: true,
});

console.log(completions)

`}</SyntaxHighlighter>

            <p>
                In the above example, we first import the package, then
                initialize an OpenAI object with our credentials. Next, I am
                using the chat.completions.create method to create a request. In
                my request, I specify the model to field my request and a
                message to prompt it with. Its as simple as that! The completion
                object contains an array with some messages sent from ChatGPT.
            </p>

            <aside>
                As I was creating the project, one thing I noticed was just how
                fast the AI API is. It is truly astonishing. In the short time
                it takes for my chatbot to respond, all of these things have to
                happen:{" "}
                <ol>
                    <li>
                        Send my request 100 miles to the nearest OpenAI servers
                    </li>
                    <li>
                        OpenAI servers process my request and generate a new,
                        never before seen response using technology that would
                        seem like magic just a few years ago.
                    </li>
                    <li>
                        OpenAI servers package the response and send it back 100
                        miles back to my network.
                    </li>
                </ol>{" "}
                As one of my favorite professors says,{" "}
                <i>computers are magical, but they aren't magic.</i> We often
                take these things for granted, but sometimes it is projects like
                these that make me take a step back and remember that the
                internet is awesome.
            </aside>

            <p>
                This doesn't explain, though, how I made the AI respond as if it
                were me. To do this, first notice the message that I pass to the
                AI in the above exmaple has both a <i>content</i> member and a{" "}
                <i>role</i> member. The role member is key here. The API allows
                you to send multiple messages in the array with different roles.
                If I send a message with a role of <i>developer</i>, I can
                specify content about the context of the API and the way it
                should act. For example, If I wanted the AI to act like a
                pirate, I might send it a message but add a developer role with:
            </p>
            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`messages: [
    {
        role: "developer",
        content: "you are to respond to any messages as if you are a pirate",
    },   
    {
        role: "user",
        content: "chatgpt, tell me a joke!",
    },
],`}</SyntaxHighlighter>

            <p>
                So, to get my AI to respond like me, I just give it a lot of
                information about myself! The great thing is, because it has
                some reasoning skills, I've noticed that I can ask it things
                that I haven't told it and it is able to get them right. For
                example, I might ask: "what is your favorite baseball team?" I
                never gave it this information, yet the AI correctly infers
                based on my location that I root for the local team, the
                Cincinatti Reds. Try it out for yourself! (sometimes it works,
                sometimes it doesn't).
            </p>

            <p>
                The last bit of complexity to make this bot really work how I
                want it is to allow it to remember the context of the
                conversation. Any good AI chatbot not only understand the most
                recent message, but also the entire context fo the conversation.
                To implement this, we again take advantage of the <i>role</i>{" "}
                attribute of the messages:
            </p>
            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`import OpenAI from "openai";

const [messages, setmessages] = useState([
        {
            role: "assistant",
            content: "Hello! I'm Luke (kind of). What do you wanna talk about?",
        },
]);
            
openai.current = new OpenAI({
    apiKey: "you-api-key",
    dangerouslyAllowBrowser: true, // Required if running in a browser environment
});

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

`}</SyntaxHighlighter>

            <p>
                In this code, you can see that we initialize a stateful react
                variable <i>messages</i> to store the context of the
                conversation. We can then use this variable to send the context
                of the converstation to the bot and render the entire
                conversation to the screen. Also, you will notice the role
                "assistant", which tells the API that the message content was
                said by itself rather than the user.
            </p>

            <h3>How I Made the UI</h3>
            <p>
                I built the UI from scratch using React and CSS. I will give a
                brief explanation here. For further explanation of the tools I
                use and how I implement them, see the article I wrote about
                that:{" "}
                <i>
                    <a href="/this-website" target="_blank">
                        The Story of This Website
                    </a>
                    .
                </i>
            </p>

            <p>
                Besides some basic styling, animation, and flex box layout, the
                most difficult part of the UI was the scrollable message box.
                Still, it was pretty straight forward. If you rememebr from
                above, we had a <i>messages</i> stateful variable to keep track
                of our messages. Using React, we can <strong>map</strong> each
                element in that array to a custom message component:
            </p>

            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`export default function Message({ content, name, date }) {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    borderBottom: "1px solid var(--lightblue)",
                    display: "flex",
                    justifyContent: name == "you" ? "right" : "left",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        backgroundColor: "var(--lightblue)",
                        maxWidth: "80%",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        padding: "4px",
                        borderRadius: "5px",
                        display: "inline-block",
                        margin: "10px",
                        paddingBottom: "5px",
                        textAlign: "left",
                        fontSize: "16px",
                    }}
                >
                    {content}
                </div>
            </div>
        </>
    );
}

`}</SyntaxHighlighter>

            <p>
                As you can see, it really is just a div with special styling,
                but noe key thing to notice is that justifyContent style in the
                container div is declared as a ternary which depends on the name
                of the person who sent the message. If it was you, put the
                message on the right side of the UI. If not, slide left.
            </p>

            <p>
                Once I have the message component, I can <i>map</i> the message
                array to it as shown:
            </p>
            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`<div id="messagebox">
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
`}</SyntaxHighlighter>

            <h3>Moving Forward</h3>

            <p>
                AI is definitely a huge interest of mine. While I say I "made"
                an AI chatbot, I didn't actually make anything about the AI. In
                this project, the AI is kinda just a black box that I use and
                trust that works. In the future, I hope to learn more about how
                these neural networks acually work and implement them for my own
                specific applications, whether it be LLM or not.
            </p>
        </>
    );
}
