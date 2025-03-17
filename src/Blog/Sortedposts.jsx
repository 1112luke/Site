import posts from "./Posts/Posts";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Sortedposts({ sort }) {
    var [sortby, setsortby] = useState("all");
    var [hereposts, sethereposts] = useState(posts);

    useEffect(() => {
        console.log(sort);
    }, []);
    //sortby should be either all, projects, or blog
    useEffect(() => {
        if (sort) {
            setsortby(sort);
        } else {
            setsortby("all");
        }
    }, [sort]);

    useEffect(() => {
        var outposts = [];
        var postcopy = posts;
        //filter for tag
        console.log(sortby);
        if (sortby != "all") {
            postcopy.forEach((post) => {
                if (isIn(sortby, post.tags)) {
                    outposts.push(post);
                }
            });
        } else {
            outposts = postcopy;
        }

        //sort posts by date
        sethereposts(
            outposts.sort((p1, p2) => {
                return p2.date.getTime() - p1.date.getTime();
            })
        );
    }, [sortby]);

    function dateToWords(date) {
        var year = date.getFullYear();
        var month = date.toLocaleString("default", { month: "long" });
        var day = date.getDate();
        return `${month} ${day + 1}, ${year}`;
    }

    function isIn(str, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (str == arr[i]) {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            {hereposts.map((post, index) => {
                return post.public ? (
                    <div key={post.id}>
                        <Card
                            title={post.title}
                            id={post.id}
                            date={dateToWords(post.date)}
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
