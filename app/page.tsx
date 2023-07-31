'use client'

import React, {useEffect, useState} from 'react';
import HomePage from "@/components/pages/HomePage";
import AllWorksPage from "../components/pages/AllWorksPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingPage from "@/components/pages/LoadingPage";
import WorkPage from "@/components/pages/WorkPage";
import {IremiApp} from "@/database/fakeDB";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (you can replace this with your actual loading logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 0);
    }, []);

    if (isLoading) {
        return <LoadingPage/>;
    }

    // When the document is loaded, render the routes
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/works" element={<AllWorksPage/>}/>
                <Route path="/works/:linkName" element={<WorkPage workData={IremiApp}/>}/>
            </Routes>
        </BrowserRouter>
    );
}
