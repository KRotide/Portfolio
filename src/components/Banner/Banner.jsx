import React, { useEffect, useState } from "react";

export default function Banner() {
    const me = "Caroline Ruiz";
    const [displayedMe, setDisplayedMe] = useState("");
    const [meTyped, setMeTyped] = useState(false);
    const [infoSlide, setInfoSlide] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= me.length) {
                setDisplayedMe(me.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setMeTyped(true);
                setInfoSlide(true);
            }
        }, 200);
        return () => clearInterval(typingInterval);
    }, [me]);

    return (
        <div className="banner row">
            <div className="banner__text">
                <h1 className={`banner__text__title ${meTyped ? "meTyped" : ""}`}>
                    <span>{displayedMe}</span>
                </h1>
                <p className={meTyped ? "infoSlide" : ""}>Intégratrice web, proche de Lyon, France</p>
                <a href="#Contact" className={`banner__text__btn banner__text__btn--pink ${meTyped && infoSlide ? "showButton" : ""}`}>Me contacter</a>
            </div>
        </div>
    )
}