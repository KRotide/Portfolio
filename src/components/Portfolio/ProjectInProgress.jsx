import React, { useState } from "react";
import GitHubLogo from "../../assets/images/github.svg";

export default function ProjectInProgress() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const datas = [
        {
            "id": "0",
            "title": "Airgone",
            "description": "Site vitrine d'un artiste peintre",
            "technologies": [
                "Site en cours de création ..."
            ],
            "page": "",
            "code": "https://github.com/KRotide/SiteVitrine-Airgone",
            "picture": [
                "Airgone0.webp",
                "Airgone01.webp",
                "Airgone02.webp",
                "Airgone03.webp",
                "Airgone04.webp",
                "Airgone05.webp",
                "Airgone06.webp"
            ],
            "project": "Projet personnel",
        }
    ];

    const handleMouseEnter = () => {
        setHoveredIndex((prevIndex) => (prevIndex + 1) % datas[0].picture.length);
    }

    return (
        <>
            {
                datas.map(data => (
                    <div className="portfolio__project" key={data.id}>
                        <div className="portfolio__project__text">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <ul className="portfolio__project__text__list">
                                {data.technologies.map((technology, index) => (
                                    <li key={index}>{technology}</li>
                                ))}
                            </ul>
                            <div className="portfolio__project__text__links">
                                {data.page ? (
                                    <a href={data.page} target="_blank" rel="noreferrer" className="portfolio__project__text__links__text">
                                        Visiter le site <span>&rarr;</span>
                                    </a>
                                ) : null}
                                <a href={data.code} title="Voir le Code Source" target="_blank" rel="noreferrer">
                                    <img
                                        src={GitHubLogo}
                                        className="portfolio__project__text__links__code"
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="portfolio__project__screenshot" onMouseEnter={handleMouseEnter}>
                            {data.picture.map((screenshot, index) => (
                                <img
                                    key={index}
                                    src={require(`../../assets/images/airgone/${screenshot}`)}
                                    className={`portfolio__project__screenshot__data ${index === hoveredIndex ? "fade-in" : "fade-out"}`}
                                    alt={data.project}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </>
    )
}
