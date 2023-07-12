import Hero from "@organisms/Hero";
import Skills from "@organisms/Skills";
import Works from "@organisms/Works";
import About from "@organisms/About";
import Contact from "@organisms/Contact";
import Footer from "@organisms/Footer";

export default function Home() {
    return (
        <main className="flex flex-col bg-black-background px-28">
            <Hero />
            <Skills />
            <Works />
            <About />
            <Contact />
            <Footer />
        </main>
    )
}
