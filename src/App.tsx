import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainLayout from './layouts/main'
import Home from './pages/home'
import type {RouteObject} from "react-router-dom";
import RouteConfig from './routes'
import {useRoutes} from "react-router-dom";

function App() {

    return (
        <MainLayout>
            <RouteConfig/>
        </MainLayout>
    );
}

export default App;
