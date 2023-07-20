'use client'

import Hero from "@organisms/Hero";
import Skills from "@organisms/Skills";
import Works from "@organisms/Works";
import About from "@organisms/About";
import Contact from "@organisms/Contact";
import Footer from "@organisms/Footer";
import Padding from "@atoms/Padding";

export default function Home() {
    // @ts-ignore
    return (
        <main className="flex flex-col bg-black-background px-5 tablet:px-14 laptop:px-28">
            <Hero/>
            <Padding/>
            <Skills/>
            <Padding/>
            <Works/>
            <Padding/>
            <About/>
            <Padding/>
            <Contact/>
            <Padding/>
            <Footer/>
        </main>
    )
}
