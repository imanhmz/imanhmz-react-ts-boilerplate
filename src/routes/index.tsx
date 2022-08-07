import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import React from "react";

export default function RouteConfig() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}