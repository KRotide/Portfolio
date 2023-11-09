import GitHubLogo from "../../assets/images/github.svg";
import LinkedInLogo from "../../assets/images/linkedin.svg";

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
                    <a
                        href="https://www.linkedin.com/in/caroline-ruiz-6842b71b3/"
                        className="footer__content__link"
                        title="Lien vers mon profil LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={LinkedInLogo}
                            className="footer__content__link__logo"
                            alt="LinkedIn"
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