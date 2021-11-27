import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Routing from "./components/router/Routing";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routing/>
            <Footer/>
        </div>
    );
}

export default App;
