import Post2 from "./Post2/Post2";
import Post1 from "./Post1/testpost";
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
        title: "I've Discovered Docker And My Life Will Never Be The Same",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post1></Post1>,
    },
    {
        id: "Post-2",
        title: "The Useless Box: Do you Remember These?",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post2></Post2>,
    },
    {
        id: "Post-3",
        title: "How I created a Linkedin AI bot that talked to my friend for three hours",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post2></Post2>,
    },
    {
        id: "Post-4",
        title: "Cobalt Blue EVERYTHING",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post2></Post2>,
    },
    {
        id: "Post-5",
        title: "The Story of This Website",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post2></Post2>,
    },
    {
        id: "Post-6",
        title: "Sorting algorithms, rust, and web assembly",
        description: lorem.generateSentences(3),
        date: "Feb 26, 2025",
        component: <Post2></Post2>,
    },
];

export default posts;
