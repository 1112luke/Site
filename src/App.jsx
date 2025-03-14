import "./App.css";
import { createRoot } from "react-dom/client";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepege from "./Homepage/Homepage";
import Blog from "./Blog/Blog";
import Post from "./Blog/Post";
import posts from "./Blog/Posts/Posts";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepege></Homepege>}></Route>
                    <Route path="/all-posts" element={<Blog></Blog>}></Route>
                    <Route path="/blog/:id" element={<Post></Post>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
