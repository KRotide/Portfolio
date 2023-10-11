import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/skills";
import About from "../components/About/About";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Portfolio />
                <Skills />
                <About />
            </main>
        </>
    );
}

export default Home;