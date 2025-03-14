import posts from "./Posts/Posts";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Sortedposts({ sort }) {
    var [sortby, setsortby] = useState("all");
    //sortby should be either all, projects, or blog

    useEffect(() => {
        if (!sort) {
            setsortby("all");
        } else {
            setsortby("sort");
        }
    }, []);

    return (
        <>
            {posts.map((post, index) => {
                return post.public ? (
                    <div key={post.id}>
                        <Card
                            title={post.title}
                            id={post.id}
                            date={post.date}
                            description={post.description}
                            tags={post.tags}
                            index={index}
                        ></Card>
                        <br></br>
                    </div>
                ) : (
                    <></>
                );
            })}
        </>
    );
}
