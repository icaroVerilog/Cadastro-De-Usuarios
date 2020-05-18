import "./Header.css"
import React from "react"


// d-none Para celulares o header n vai aparecer
// d-sm-flex para dispositivos acima de sm o displai será felx

export default Props => 
    <header className="Header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${Props.icon}`}></i> {Props.title}
        </h1>
    <p className="lead text-muted">{Props.subtitle}</p>
    </header>