import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: widthViewport, innerHeight: heightViewport } = window;
    const mobileBreakpoint = 478;
    return {
        widthViewport,
        heightViewport,
        mobileBreakpoint
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        console.log("mobileBreakpoint: "+windowDimensions.mobileBreakpoint);
        console.log("widthViewport: "+windowDimensions.widthViewport);
        console.log("widthViewport > mobileBreakpoint : "+windowDimensions.widthViewport > windowDimensions.mobileBreakpoint);
        console.log("===========================");
    })
    

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);    


    return windowDimensions;
}
