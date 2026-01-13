import { useLocation, useNavigate } from "react-router";
import Header from "../Header/Header";
import posts from "./Posts/Posts";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import "./Post.css";
import Footer from "../Footer/Footer";

export default function Post() {
    const navigate = useNavigate();
    var id1 = useRef();
    var id2 = useRef();
    var id3 = useRef();
    var id4 = useRef();

    const [on, seton] = useState(false);

    //get params from route
    const { id } = useParams();

    const [currpost, setcurrpost] = useState(0);

    useEffect(() => {
        let found = false;
        posts.forEach((post) => {
            if (
                post.id == id &&
                (post.public === true || post.public == "dev")
            ) {
                setcurrpost(post);
                found = true;
            }
        });
        //navigate to 404 if post is not valid or not public
        if (!found) {
            navigate("/404", { replace: true });
        }
    }, []);

    function turnOn() {
        var offset = 150;
        var delay = 40;

        seton(true);

        id1.current = setTimeout(() => {
            seton(false);
        }, offset);
        id2.current = setTimeout(() => {
            seton(true);
        }, offset + delay);
        id3.current = setTimeout(() => {
            seton(false);
        }, offset + 2 * delay);
        id4.current = setTimeout(() => {
            seton(true);
        }, offset + 3 * delay);
    }

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
                    <h1
                        style={{
                            color: "white",
                            textShadow: on
                                ? "0px 0px 0px var(--yellow), 0px 0px 20px var(--yellow), 0px 0px 15px var(--yellow), 0px 0px 10px white"
                                : "none",
                            width: "fit-content",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        onMouseEnter={() => {
                            turnOn();
                        }}
                        onMouseLeave={() => {
                            clearTimeout(id1.current);
                            clearTimeout(id2.current);
                            clearTimeout(id3.current);
                            clearTimeout(id4.current);
                            seton(false);
                        }}
                    >
                        {currpost.title}
                    </h1>
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
