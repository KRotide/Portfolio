import React, { useState, useEffect } from "react";
import ArrowUp from "../../assets/images/arrow-up.svg";

export default function BackToTop() {
    const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);

    useEffect(() => {
        const alterStyles = () => {
            const backToTopButton = document.querySelector(".backToTop");
            if (backToTopButton) {
                backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
                backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
                backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
            }
        };

        alterStyles();

        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsBackToTopRendered(true);
            } else {
                setIsBackToTopRendered(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isBackToTopRendered]);

    return (
        <a href="#top" className="backToTop" title="Back to Top">
            <img src={ArrowUp} alt="Retour" className="backToTop__image" />
        </a>
    );
}