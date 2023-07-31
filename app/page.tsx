'use client'

import React, {useEffect, useState} from 'react';
import HomePage from "@/components/pages/HomePage";
import WorksPage from "@/components/pages/WorksPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingPage from "@/components/pages/LoadingPage";

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
                <Route path="/works" element={<WorksPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
