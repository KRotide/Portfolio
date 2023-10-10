import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/skills";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Portfolio />
                <Skills />
            </main>
        </>
    );
}

export default Home;