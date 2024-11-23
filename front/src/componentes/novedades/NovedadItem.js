import React from "react";

const NovedadItem = (props) => {
    const { titulo, lugar, cuerpo, imagen } = props;
    return (
        <main className="holder">
            <div className="introduccion">
                <h2>Actividades Culturales</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, porro facilis cumque maiores quasi,
                    dolores aliquam quo ullam rem blanditiis error eius perspiciatis voluptatibus id harum nesciunt quidem
                    provident ad!</p>
            </div>
            <div className="novedades">
                <div className="actividad">
                    <div className="info">
                        <h3>{titulo}</h3>
                        <h4>{lugar}</h4>
                        <img src={imagen} />
                        <p dangerouslySetInnerHTML={{__html: cuerpo}}></p>
                        <hr />
                    </div>
                </div>
            </div>
        </main>

    );
}

export default NovedadItem;