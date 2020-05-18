import "./Main.css"
import React from "react"
import Header from "./Header"

export default Props => 
    <React.Fragment>
        <Header {...Props}/>
        <main className="Content container-fluid">
            <div className="p-3 m-3">
                {Props.children}
            </div>
        </main>
    </React.Fragment>