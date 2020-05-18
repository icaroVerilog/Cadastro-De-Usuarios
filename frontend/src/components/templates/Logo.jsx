import "./Logo.css"
import React from "react"
import Logo from "../../assets/img/Logo.png"
import { Link } from "react-router-dom";

export default Props => 
    <aside className="Logo">
        <Link to="/" className="Logo">
            <img src={Logo} alt="Logo"></img>
        </Link>
    </aside>