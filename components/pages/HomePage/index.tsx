'use client'

import React, {FC} from "react";
import HomePageProps from "./index.types"
import Hero from "@organisms/Hero";
import Padding from "@atoms/Padding";
import Skills from "@organisms/Skills";
import Works from "@organisms/Works";
import About from "@organisms/About";
import Contact from "@organisms/Contact";
import Footer from "@organisms/Footer";

const HomePage: FC<HomePageProps> = ({}) => {
    return <>
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
    </>
}

export default HomePage