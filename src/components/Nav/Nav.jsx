export default function Nav() {

    return (
        <nav className="nav">
            <div className="nav__content">
                <ul className="nav__content__items">
                    <li className="nav__content__item"><a href="#Portfolio" className="nav__content__link">Portfolio</a></li>
                    <li className="nav__content__item"><a href="#Competences" className="nav__content__link">Compétences</a></li>
                    <li className="nav__content__item"><a href="#A-propos" className="nav__content__link">À propos</a></li>
                    <li className="nav__content__item"><a href="#Contact" className="nav__content__link">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}