import "./App.css";
import { createRoot } from "react-dom/client";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepege from "./Homepage/Homepage";
import Blog from "./Blog/Blog";
import Post from "./Blog/Post";
import Pidemo from "./Codes/PID/Pidemo";

//google analytics
import ReactGA from "react-ga";
import Lynley from "./Codes/Lynley/Lynley";
import Nopath from "./Blog/Components/Nopath";
//import Wasm from "./Codes/Wasm/Wasm";
const TRACKING_ID = "G-5B6SM3E66B"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepege></Homepege>}></Route>
                    <Route path="/all-posts" element={<Blog></Blog>}></Route>
                    <Route
                        path="/projects"
                        element={<Blog sort={"project"}></Blog>}
                    ></Route>
                    <Route path="/:id" element={<Post></Post>}></Route>
                    <Route
                        path="/codes/pidemo"
                        element={<Pidemo></Pidemo>}
                    ></Route>
                    <Route
                        path="/codes/lynley"
                        element={<Lynley></Lynley>}
                    ></Route>
                    {/*
                    <Route path="/codes/Wasm" element={<Wasm></Wasm>}></Route>
                    */}

                    <Route path="/404" element={<Nopath></Nopath>}></Route>
                    <Route path="*" element={<Nopath></Nopath>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
