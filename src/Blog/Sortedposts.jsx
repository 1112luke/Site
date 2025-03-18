import posts from "./Posts/Posts";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Sortedposts({ sort }) {
    const [sortby, setsortby] = useState("all");
    const [hereposts, sethereposts] = useState(posts);

    useEffect(() => {
        setsortby(sort || "all");
    }, [sort]);

    useEffect(() => {
        let outposts = [];

        if (sortby !== "all") {
            outposts = posts.filter((post) => isIn(sortby, post.tags));
        } else {
            outposts = [...posts]; // Ensure a new array reference
        }

        outposts = outposts
            .slice()
            .sort((p1, p2) => p2.date.getTime() - p1.date.getTime());

        sethereposts(outposts); // Ensure React recognizes the new state
    }, [sortby, posts]); // Add `posts` as a dependency in case posts change

    function dateToWords(date) {
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate();
        return `${month} ${day + 1}, ${year}`;
    }

    function isIn(str, arr) {
        return arr.includes(str);
    }

    return (
        <>
            {hereposts.map((post, index) =>
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
            )}
        </>
    );
}
