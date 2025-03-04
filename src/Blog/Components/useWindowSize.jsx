import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        windowwidth: window.innerWidth,
        window2height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowwidth: window.innerWidth,
                windowheight: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array ensures this runs only once on mount

    return windowSize;
}
