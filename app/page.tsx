'use client'

import HomePage from "@/components/pages/HomePage";
import {Route, Routes} from "react-router";
import WorksPage from "@/components/pages/WorksPage";
import {BrowserRouter} from "react-router-dom";

export default function Home() {
    // @ts-ignore
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/works" element={<WorksPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
