import Post2 from "./Post2/Post2";
import Post1 from "./Post1/Post1";
import Post7 from "./Post7/Post7";
import { LoremIpsum } from "lorem-ipsum";

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
        date: "Feb 26, 2025",
        tags: ["blog"],
        component: <Post1></Post1>,
    },
    {
        id: "Post-2",
        public: true,
        title: "The Useless Box: Do you Remember These?",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-3",
        public: true,
        title: "How I created a Linkedin AI bot that talked to my friend for three hours",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-4",
        public: true,
        title: "Cobalt Blue EVERYTHING",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-5",
        public: true,
        title: "The Story of This Website",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "Post-6",
        public: true,
        title: "Sorting algorithms, rust, and web assembly",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog", "project"],
        component: <Post2></Post2>,
    },
    {
        id: "thinking-in-code",
        public: true,
        title: "Thinking in Code",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        tags: ["blog", "project"],
        component: <Post7></Post7>,
    },
];

export default posts;
