import GitHubLogo from "../../assets/images/github.svg";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="row">
                <div className="footer__content">
                    <a
                        href="https://github.com/KRotide"
                        className="footer__content__link"
                        title="Lien vers mon profil Github"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={GitHubLogo}
                            className="footer__content__link__logo"
                            alt="GitHub"
                        />
                    </a>
                </div>
                <p>
                    &copy; 2023 - Site développé par Caroline Ruiz
                </p>
            </div>
        </footer>
    )
}