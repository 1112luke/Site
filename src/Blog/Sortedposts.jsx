import posts from "./Posts/Posts";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Sortedposts({ sort }) {
    var [sortby, setsortby] = useState("all");

    useEffect(() => {
        !sort ? setsortby("all") : null;
    }, []);

    return (
        <>
            {posts.map((post, index) => {
                return (
                    <div key={post.id}>
                        <Card
                            title={post.title}
                            id={post.id}
                            date={post.date}
                            description={post.description}
                            index={index}
                        ></Card>
                        <br></br>
                    </div>
                );
            })}
        </>
    );
}
