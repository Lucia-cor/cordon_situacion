import React from "react";
import './../estilos/componentes/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
        <div className="columna">
            <ul className="informacion">
                <li>Trevelin-Chubut</li>
                <li>Callejon peñas 539</li>
                <li>.............</li>
            </ul>
            <ul className="contacto">
                <li>
                    <p><i className="fa-solid fa-phone"></i> 2945533253</p>
                </li>
                <li>
                    <p><i className="fa-regular fa-envelope"></i> Cabañas.cs@gmail.com</p>
                </li>
                <li>
                    <p><i className="fa-brands fa-instagram"></i> Cabañas.c.s</p>
                </li>
            </ul>
        </div>

    </footer>
    )
}

export default Footer; 