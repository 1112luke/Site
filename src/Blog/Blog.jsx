import Header from "../Header/Header";
import "../App.css";
import Card from "./Card";
import posts from "./Posts/Posts";
import ThreeBackground from "./Components/Background/Threebackground";
import Footer from "../Footer/Footer";
import Sortedposts from "./Sortedposts";

export default function Blog({ sort }) {
    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div className="widthwrapper">
                <h1>All Posts</h1>
                <Sortedposts sort={sort}></Sortedposts>
            </div>
            <Footer></Footer>
        </>
    );
}
