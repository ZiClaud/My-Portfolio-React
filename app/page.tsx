"use client"

import React, { useEffect, useState } from "react"
import HomePage from "@/components/pages/HomePage"
import AllWorksPage from "../components/pages/AllWorksPage"
import { HashRouter, Route, Routes } from "react-router-dom"
import LoadingPage from "@/components/pages/LoadingPage"
import WorkPage from "@/components/pages/WorkPage"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false)
    }, 0)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  // When the document is loaded, render the routes
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<AllWorksPage />} />
        <Route path="/works/:linkName" element={<WorkPage />} />
      </Routes>
    </HashRouter>
  )
}
