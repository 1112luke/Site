import { useLocation, useNavigate } from "react-router";
import Header from "../Header/Header";
import posts from "./Posts/Posts";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./Post.css";
import Footer from "../Footer/Footer";

export default function Post() {
    const navigate = useNavigate();

    //get params from route
    const { id } = useParams();

    const [currpost, setcurrpost] = useState(0);

    useEffect(() => {
        let found = false;
        posts.forEach((post) => {
            if (post.id == id && post.public) {
                setcurrpost(post);
                found = true;
            }
        });
        //navigate to 404 if post is not valid or not public
        if (!found) {
            navigate("/404", { replace: true });
        }
    }, []);

    function dateToWords(date) {
        var year = date.getFullYear();
        var month = date.toLocaleString("default", { month: "long" });
        var day = date.getDate();
        return `${month} ${day + 1}, ${year}`;
    }

    return (
        <>
            <Header></Header>
            {currpost != 0 && (
                <article>
                    <h1>{currpost.title}</h1>
                    <div
                        style={{
                            width: "70%",
                            margin: "auto",
                            textAlign: "left",
                            fontStyle: "italic",
                        }}
                    >
                        Published {dateToWords(currpost.date)}
                    </div>
                    <hr
                        style={{ border: "1px solid #FFC600", width: "70%" }}
                    ></hr>
                    <div className="widthwrapper">{currpost.component}</div>
                </article>
            )}
            <Footer></Footer>
        </>
    );
}
