import React from "react";
import datas from "../../datas/projects.json";
import GitHubLogo from "../../assets/images/github.svg";

export default function Portfolio() {

    return (
        <section className="portfolio" id="Portfolio">
            <div className="row">
                <h2>Portfolio</h2>
                <div className="portfolio__projects">
                    {datas.map(data => (
                        <div className="portfolio__project" key={data.id}>
                            <div className="portfolio__project__text">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                                <ul className="portfolio__project__text__list">
                                    {data.languages.map((language, index) => (
                                        <li key={index}>{language}</li>
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
                            <div className="portfolio__project__picture">
                                <img
                                    src={require(`../../assets/images/${data.picture}`)}
                                    className="portfolio__project__picture__data"
                                    alt={data.project}
                                />
                                <div className="portfolio__project__picture__info">
                                    <p>{data.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}