import Header from "../Header/Header";
import "../App.css";
import Card from "./Card";
import posts from "./Posts/Posts";
import ThreeBackground from "./Components/Background/Threebackground";
import Footer from "../Footer/Footer";

export default function Blog() {
    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div className="widthwrapper">
                <h1>All Posts</h1>
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
            </div>
            <Footer></Footer>
        </>
    );
}
