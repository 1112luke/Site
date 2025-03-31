import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import Card from "../../Card";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Headernav from "../../../Header/Headernav";
import ThreeBackground from "../../Components/Background/Threebackground";

export default function Post5() {
    function dateToWords(date) {
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate();
        return `${month} ${day + 1}, ${year}`;
    }

    return (
        <>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1920/1080",
                    position: "relative",
                }}
            >
                <iframe
                    src="/"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                        zoom: "60%",
                    }}
                ></iframe>
            </div>
            <h3>History</h3>
            <p>
                This website has been in the works for almost a year, yet I
                built this version up to this point in less than a month... Let
                me explain.
            </p>
            <p>
                This is the third iteration of my website. The first was made
                during my senior year of high school, and was pure HTML and CSS.
                After a bit, I became emberassed having that site up with my
                name on it, and knew it needed a refresh. I had learned{" "}
                <a href="https://react.dev/" target="_blank">
                    React
                </a>{" "}
                for some miscellaneous projects, and was ready to begin
                building.
            </p>
            <p>
                I wanted my site to be impressive, so I set out with an
                ambitious plan: make the website fully 3D. Any 2D elements would
                be pasted onto 2D planes in the space I would build out, and the
                scroll experience would have the user flying through a starfield
                of all of my projects and posts. It was going to be glorious...
                or so I thought.
            </p>
            <p>
                After working on and off for about a month and a half, I had the
                following prototype:
            </p>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1920/1080",
                    position: "relative",
                }}
            >
                <iframe
                    src="https://dazzling-sopapillas-5aebe4.netlify.app/"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid var(--yellow)",
                        zoom: "60%",
                    }}
                ></iframe>
            </div>
            <p>
                If you mess with the above website a bit, you will probably
                notice three things:
            </p>
            <ol>
                <li>it is cool</li>
                <li>it bears strong resemblance to the current website</li>
                <li>
                    it is hard to navigate, buggy, confusing, bulky, and
                    unintuitive
                </li>
            </ol>
            <p>
                At a certain point, I finally decided to scrap the project, and
                I was so upset. The reality is, it <strong>was</strong>{" "}
                <i>so</i> cool. My work on this project for a long time was
                heavily motivated by the{" "}
                <a
                    href="https://thedecisionlab.com/biases/the-sunk-cost-fallacy"
                    target="_blank"
                >
                    sunk-cost fallacy
                </a>
                . I did end up cutting my losses though, as the codebase became
                very hard to work with and reviews from friends expressed the
                sentiment that yes, it was cool, but no, it was not enjoyable or
                intuitive to use.
            </p>
            <p>
                Looking back, the website was more of a lesson in project
                planning than in software. While I did learn a lot about web
                development, the most valuable thing I learned was about the
                value of design for functionality first, only implementing cool
                features where strong underlying design principles have already
                been established.
            </p>
            <p>
                When I began work on this website a little less than a month
                ago, progress came quickly. My react skills were honed, but,
                more importantly, I was equipped with the wisdom that can only
                come from a failure like the previous one that design and UI
                would come first.{" "}
            </p>
            <h3>The Tools I Use</h3>
            <p>
                In no particular order, the main tools I use to create this
                website are:
            </p>
            <ul>
                <li>
                    <a href="https://react.dev/" target="_blank">
                        React
                    </a>
                </li>
                <li>
                    <a
                        href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                        target="_blank"
                    >
                        Three.js (react-three-fiber)
                    </a>
                </li>
                <li>
                    <a href="https://motion.dev/" target="_blank">
                        Motion (previously Framer Motion)
                    </a>
                </li>
                <li>
                    <a href="https://www.netlify.com/" target="_blank">
                        Netlify
                    </a>
                </li>
            </ul>
            <p>
                As you can see, the stack is relatively simple. I hear many
                things about{" "}
                <a href="https://nextjs.org/learn" target="_blank">
                    Next.js
                </a>{" "}
                for server side rendeering or{" "}
                <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind
                </a>{" "}
                for CSS, but in my experience I have never felt limited by pure
                react and standard CSS. While my website might not be the
                fastest or the most pretty looking, I enjoy being relatively
                close to the actual HTML that my webpage will display and like
                the challenge of styling all of my components using vanilla CSS.
                Now, lets break down the tools I use one by one.
            </p>
            <p>
                I'll be using this card element I created for the following
                explanations:
            </p>
            <Card
                title="Example"
                id="ex"
                date={dateToWords(new Date())}
                description="Ullamco culpa non occaecat cupidatat reprehenderit esse amet ex exercitation commodo pariatur consequat dolor et magna. In do anim id duis in labore ad irure dolor adipisicing consectetur veniam aute anim proident. Eu in cillum quis."
                tags={["example1", "example2"]}
                blank={true}
                index={1}
            />
            <p>rendered using the following code:</p>
            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`<Card
                title="Example"
                id="ex"
                date={dateToWords(new Date())}
                description="Ullamco culpa non occaecat cupidatat reprehenderit esse amet ex exercitation commodo pariatur consequat dolor et magna. In do anim id duis in labore ad irure dolor adipisicing consectetur veniam aute anim proident. Eu in cillum quis."
                tags={["example1", "example2"]}
                blank={true}
                index={1}
            />`}</SyntaxHighlighter>
            <p>
                <b>React</b>
            </p>
            <p>
                Of all the programmatic paradigmns, I find compartmentalization
                and reuseability to be the most satisfying. Computers are really
                really good at doing the same thing over and over again. When I
                am able to design a component in React and have it map to a wide
                array of data, I feel powerful, like I am taking advantage of
                the computer. As you can see above, Creating the card is easy
                with the custom react component that I made. The short lines of
                code above really translate to the following:
            </p>
            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{` <>
            <Link>
                <motion.div
                    id="container"
                    whileHover={{
                        backgroundColor: "#325671",
                        boxShadow: "-5px 5px #285071",
                        scale: 1.01,
                        rotate: index % 2 ? 0.5 : -0.5,
                    }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <h2>{title}</h2>
                    <h4>{date}</h4>
                    <p >{description}</p>
                    <div id="tagbox">
                        {tags.map((tag, index) => {
                            return (
                                <div
                                    key={index}
                                    
                                >
                                    tag
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </Link>
        </>`}</SyntaxHighlighter>
            <p>
                This is a lot of code encapsulated by a simple component in
                react!
            </p>
            <p>
                It gets better though. To create a list of the card elements,
                each with different data, we can use a javascript map function
                to spawn many cards based on an array of data. Here is how that
                works:
            </p>
            <SyntaxHighlighter
                language="javascript"
                id="syntax"
                style={monoBlue}
            >{`const posts = [
    {
        id: "I've-Discovered-Docker",
        public: true,
        title: "I've Discovered Docker And My Life Will Never Be The Same",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-23"),
        tags: ["blog"],
        component: <Post1></Post1>,
    },
    {
        id: "Post-2",
        public: false,
        title: "The Useless Box: Do you Remember These?",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-23"),
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-3",
        public: false,
        title: "How I created a Linkedin AI bot that talked to my friend for three hours",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-24"),
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-4",
        public: false,
        title: "Cobalt Blue EVERYTHING",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-26"),
        tags: ["blog"],
        component: <Post2></Post2>,
    },
    {
        id: "this-website",
        public: true,
        title: "The Story of This Website",
        description: lorem.generateSentences(3),
        date: new Date("2025-03-21"),
        tags: ["blog", "project"],
        component: <Post5></Post5>,
    },
    {
        id: "Post-6",
        public: false,
        title: "Sorting algorithms, rust, and web assembly",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-27"),
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "thinking-in-code",
        public: false,
        title: "Thinking in Code",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-26"),
        tags: ["blog", "project"],
        component: <Post7></Post7>,
    },
    {
        id: "pid-control",
        public: true,
        title: "An Exploration of PID Control",
        description: lorem.generateSentences(3),
        date: new Date("2025-03-17"),
        tags: ["blog", "project"],
        component: <Post8></Post8>,
    },
    {
        id: "smells-like-calculus",
        public: true,
        title: "A Calculus Parody Music Video",
        description: lorem.generateSentences(3),
        date: new Date("2025-03-20"),
        tags: ["blog", "project"],
        component: <Post9></Post9>,
    },
];

{posts.map((post, index) =>
                post.public ? (
                    <div key={post.id}>
                        <Card
                            title={post.title}
                            id={post.id}
                            date={dateToWords(post.date)}
                            description={post.description}
                            tags={post.tags}
                            index={index}
                        />
                        <br />
                    </div>
                ) : null
            )}`}</SyntaxHighlighter>
            <p>
                The above contains an array of json objects, each representing a
                post on my webpage. We can then use posts.map on the data to
                display a card for each element on the array. AMAZING!
            </p>
            <h3>Framer Motion</h3>
            <p>
                I use framer motion for most of the animation on this site.
                Examples include the underline bars in my header, the hover
                effect on the card above, or even the mouse tracking feature of
                the cube on the front page of this website. I could explain it,
                but{" "}
                <a href="https://motion.dev/" target="_blank">
                    their website
                </a>{" "}
                is just too good that I'm going to direct you there if you want
                to learn more.
            </p>

            <h3>Three.js</h3>
            <p>
                For all the 3D components on this website, I am using{" "}
                <a href="https://threejs.org/" target="_blank">
                    Three.js
                </a>
                , specifically {` `}
                <a
                    href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                    target="_blank"
                >
                    react-three-fiber
                </a>
                , an implementation of three for react. See below the background
                I made for some pages on this website website:
            </p>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1920/1080",
                    position: "relative",
                    border: "1px solid var(--yellow)",
                }}
            >
                <ThreeBackground abs={true}></ThreeBackground>
            </div>

            <p>
                If you look closely, you see that the cubes are rotating
                randomly. You might also notice that the cubes are different
                with each refresh of this page.
            </p>

            <p>The code for this component is shown below:</p>
            <SyntaxHighlighter
                id="syntax"
                language="javascript"
                style={monoBlue}
            >{`import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const ThreeBackground = ({ abs = false }) => {
    const num_cubes = 30;

    var [cubes, setcubes] = useState([]);
    //generate starting point for unique cubes
    useEffect(() => {
        var tempcubes = [];

        var xextent = 160;
        var yextent = 120;
        var zextent = 160;

        for (var i = 0; i < num_cubes; i++) {
            tempcubes.push({
                x: Math.floor(Math.random() * xextent) - xextent / 2,
                y: Math.floor(Math.random() * yextent) - yextent / 2,
                z: Math.floor(Math.random() * zextent) - zextent / 2 - 80,
                rot: {
                    x: Math.floor(Math.random() * 360),
                    y: Math.floor(Math.random() * 360),
                    z: Math.floor(Math.random() * 360),
                },
            });
        }
        setcubes(tempcubes);
    }, []);

    return (
        <Canvas
            gl={{
                pixelRatio: 20,
            }}
            style={{
                position: abs ? "absolute" : "fixed",
                top: 0,
                left: 0,
                width: abs ? "100%" : "100vw",
                height: abs ? "100%" : "100vh",
                zIndex: -1,
            }}
        >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            {cubes.map((cube, index) => {
                return (
                    <Cube
                        x={cube.x}
                        y={cube.y}
                        z={cube.z}
                        rot={cube.rot}
                        key={index}
                    ></Cube>
                );
            })}
        </Canvas>
    );
};

export default ThreeBackground;
`}</SyntaxHighlighter>
            <p>
                This component can be broken down into two main parts, the data
                structure for each cube and the rendering of the cubes. Let's
                start with the data structure.
            </p>

            <p>
                All of the logic for creating the cubes data structure happens
                within a <i>useEffect</i> react hook with no dependencies so
                that it only runs when the component is mounted. I have some
                variables to setup the extent of the bounds for my scene to
                render all of the cubes within. Then, in a loop, I create a set
                of random cubes as objects with attributes for their rotation
                and position.
            </p>

            <p>
                To render the cubes, I am using some basic react-three-fiber
                components. I start with a Canvas filling the screen. To this
                scene, I add an ambient light and a point light, then map all of
                my cubes to a custom Cube component. Within the cube component,
                there is some logic to randomly increment each cube's rotation
                at a set interval, causing them each to rotate in their own way.
            </p>

            <h3>Netlify</h3>
            <p>
                {" "}
                I host this website on{" "}
                <a href="https://netlify.com" target="_blank">
                    Netlify
                </a>
                . Using this service, I can deploy my react site straight from
                github. To push live changes to the site, it is as simple as
                merging pull requests into the github repo. The rest is taken
                care of automatically.
            </p>

            <h3>Things to Improve</h3>

            <p>
                Overall, I am very happy with this website. It is so much better
                than the one I made in highschool, and actually makes me{" "}
                <i>proud</i> to have online. (sometimes I got nervous that
                people would actually see my old website). As I stated above, I
                am not using Next.js or Tailwind for css, but I am perfectly
                happy with this decision. If there is one reason I might
                consideer switching to Next, it would be for improved{" "}
                <a href="https://nextjs.org/learn/seo" target="_blank">
                    SEO optimization
                </a>{" "}
                capabilities that come with serverside rendering.
            </p>

            <p>
                Additionally, my current method of storing all the posts within
                the application itself seems a bit janky to me. Ideally, I setup
                some sort of database that I can push the articles to and render
                them on the server with Next. That, though, is a project for
                another time.
            </p>
        </>
    );
}
