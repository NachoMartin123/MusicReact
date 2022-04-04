import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: widthViewport, innerHeight: heightViewport } = window;
    return {
        widthViewport,
        heightViewport,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);    


    return windowDimensions;
}
