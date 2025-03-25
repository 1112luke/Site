import ThreeBackground from "../Blog/Components/Background/Threebackground";
import Sortedposts from "../Blog/Sortedposts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Projects() {
    return (
        <>
            <Header></Header>
            <ThreeBackground></ThreeBackground>
            <div className="widthwrapper">
                <h1>All Posts</h1>
                <Sortedposts sort={"project"}></Sortedposts>
            </div>
            <Footer></Footer>
        </>
    );
}
