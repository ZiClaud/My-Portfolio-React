"use client"

import React, { FC } from "react"
import HomePageProps from "./index.types"
import Hero from "@organisms/Hero"
import Padding from "@atoms/Padding"
import Skills from "@organisms/Skills"
import Work from "@/components/organisms/Work"
import Works from "@/components/organisms/Works"
import About from "@organisms/About"
import Contact from "@organisms/Contact"
import Footer from "@organisms/Footer"
import Layout from "@/components/atoms/Layout"
import { JEIOM } from "@/database/fakeDB"

const HomePage: FC<HomePageProps> = ({}) => {
  return <>
    <main className="flex flex-col bg-black-background">
      <Layout>
        <Hero />
        <Padding />
        <Skills />
        <Padding />
        <Work />
        <Padding />
        <Works />
        <Padding />
        <About />
        <Padding />
        <Contact />
        <Padding />
        <Footer />
      </Layout>
    </main>
  </>
}

export default HomePage