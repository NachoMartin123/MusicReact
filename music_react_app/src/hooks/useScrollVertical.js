import { useState, useEffect } from "react";

function getOffsetY() {
    const { pageYOffset: scrollOffsetY  } = window;
    return {
        scrollOffsetY 
    };
}


export default function useWindowDimensions() {
    const [scrollOffsetY, setScrollOffsetY] = useState(
        getOffsetY()
    );

    useEffect(() => {
        function handleScrollOffsetY() {
            setScrollOffsetY(getOffsetY());
        }

        window.addEventListener("scroll", handleScrollOffsetY);
        return () => window.removeEventListener("scroll", handleScrollOffsetY);
    }, []);


    return scrollOffsetY;
}
