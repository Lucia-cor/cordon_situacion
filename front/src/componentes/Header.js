import React from "react";
import './../estilos/componentes/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <img src="IMG\Logo.png" width="200" alt="Logo"></img>
                <h1>Cabaña Cordón Situación</h1>
            </div>
        </header>
    )
}

export default Header; 