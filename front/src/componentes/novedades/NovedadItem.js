import React from "react";
import './../../estilos/componentes/layout/NovedadItem.css'

const NovedadItem = (props) => {
    const { titulo, lugar, cuerpo, imagen } = props;
    return (
        <main className="contenedor">
            <div className="novedades">
                <div className="actividad">
                    <div className="info">
                        <h3>{titulo}</h3>
                        <h4>{lugar}</h4>
                        <img src={imagen} />
                        <p dangerouslySetInnerHTML={{__html: cuerpo}}></p>
                    </div>
                </div>
            </div>
        </main >

    );
}

export default NovedadItem;