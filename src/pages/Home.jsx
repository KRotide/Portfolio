import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/skills";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Portfolio />
                <Skills />
                <About />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}

export default Home;