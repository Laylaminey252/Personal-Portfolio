import React from "react";
import '../Global.css'

function Header(){
    return(
        <div className="header">
            <h1> <span className="leyla" >Leya</span> <span className="adow">Adow</span></h1> 
            <ul>
                <li>
                    <a href="Home">Home</a>
                    <a href="#Bio">Bio</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export  default Header;