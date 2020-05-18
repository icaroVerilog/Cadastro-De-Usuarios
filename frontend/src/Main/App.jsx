import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"
import Footer from "../components/templates/Footer"
import Routes from "./Routes"
import {BrowserRouter} from "react-router-dom"

export default Props => 
    <BrowserRouter>
        <div className="App">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>