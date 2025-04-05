import Post2 from "./Post2/Post2";
import Post1 from "./Post1/Post1";
import Post7 from "./Post7/Post7";
import Post8 from "./Post8/Post8";
import { LoremIpsum } from "lorem-ipsum";
import Post9 from "./Post9/Post9";
import Post5 from "./Post5/Post5";
import Post10 from "./Post10/Post10";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const posts = [
    {
        id: "I've-Discovered-Docker",
        public: true,
        title: "I've Discovered Docker And My Life Will Never Be The Same",
        description:
            "Docker is one of the most prevalent tools in tech, yet up to this point I never understood it. This is the story of how that changed.",
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
        id: "cobalt-2-everything",
        public: false,
        title: "Cobalt 2 EVERYTHING",
        description:
            "What do this website, my terminal, my desktop, and my VS code have in common?? COBALT 2!",
        date: new Date("2025-03-31"),
        tags: ["blog"],
        component: <Post2></Post2>,
    },
    {
        id: "this-website",
        public: true,
        title: "The Story of This Website",
        description:
            "This website has been in the works for almost a year, yet I built this version it up to this point in less than a month... Let me explain.",
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
        description:
            "The article I wish I came across when I was learning PID controls. I present an interactive demo, mathematical analysis, and programmatic implementation.",
        date: new Date("2025-03-17"),
        tags: ["blog", "project"],
        component: <Post8></Post8>,
    },
    {
        id: "smells-like-calculus",
        public: true,
        title: "A Calculus Parody Music Video",
        description:
            "My junior year of high school, we were assigned a final project in AP Calc AB and one of our options was to make a music video. This does seem a bit odd, doesnt it? A music video? For calculus?",
        date: new Date("2025-03-20"),
        tags: ["blog", "project"],
        component: <Post9></Post9>,
    },
    {
        id: "ai-luke",
        public: true,
        title: "I Made an AI Chatbot That Responds As If It Were Me",
        description:
            "The widget that you can access in the bottom right corner of every page of my website is an AI chatbot just like any other, except I have created the AI so that it responds as if it were me.",
        date: new Date("2025-04-04"),
        tags: ["blog", "project"],
        component: <Post10></Post10>,
    },
];

export default posts;
