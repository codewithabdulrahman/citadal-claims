import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login></Login>}/>
                <Route exact path="/register" element={<Register></Register>}/>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;
