import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../Login";

function Routing() {
    return (
        <Routes>
            <Route exact path="/" component={Login}/>
            <Route path="/about" component={Login}/>
            {/*<Route path="/service" component={Service}/>*/}
        </Routes>

    );
}

export default Routing;
