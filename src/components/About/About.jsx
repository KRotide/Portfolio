import Me from "../../assets/images/CarolineRuiz.webp";

export default function About() {

    return (
        <section className="about" id="About">
            <div className="row">
                <h2>À propos</h2>
                <div className="about__content">
                    <div className="about__content__text">
                        <p>
                            Depuis mes années de lycée, ma passion pour le développement web ne cesse de croître,
                            m'inspirant à suivre une formation diplômante en tant qu'intégratrice web.
                        </p>
                        <p>
                            Mon engagement envers ce domaine va au-delà des codes et des designs.
                            <br />
                            J'adore relever des défis et trouver des solutions innovantes.
                        </p>
                        <p>
                            Créer des sites web est pour moi un réel plaisir qui me pousse constamment à explorer de nouvelles
                            possibilités et à évoluer dans un univers en perpétuel changement.
                        </p>
                        <p>
                            Je suis impatiente de continuer ce voyage passionnant et de contribuer à des projets significatifs
                            qui repoussent les limites de la créativité et de la technologie.
                        </p>
                        <a href="https://raw.githubusercontent.com/KRotide/CV/main/CV-2023.pdf" className="about__content__text__link" target="_blank" rel="noreferrer">Mon CV</a>
                    </div>
                    <div className="about__content__photo">
                        <img
                            className="about__content__photo__me"
                            src={Me}
                            alt="Caroline Ruiz"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}