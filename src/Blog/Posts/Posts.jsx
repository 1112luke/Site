import Post2 from "./Post2/Post2";
import Post1 from "./Post1/Post1";
import Post7 from "./Post7/Post7";
import Post8 from "./Post8/Post8";
import { LoremIpsum } from "lorem-ipsum";
import Post9 from "./Post9/Post9";

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
        id: "Post-5",
        public: false,
        title: "The Story of This Website",
        description: lorem.generateSentences(3),
        date: new Date("2025-02-26"),
        tags: ["blog", "project"],
        component: <Post2></Post2>,
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

export default posts;
