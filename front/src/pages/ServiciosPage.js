import React from "react";
import './../estilos/componentes/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <div className="introduccion">
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, porro facilis cumque maiores quasi,
                    dolores aliquam quo ullam rem blanditiis error eius perspiciatis voluptatibus id harum nesciunt quidem
                    provident ad!</p>
            </div>
            <div className="servicios">
                <div className="servicio">
                    <img src="IMG/Servicios/Desayuno.jpg" alt="Desayuno" />
                    <div className="info">
                        <h4>DESAYUNO</h4>
                        <p>Increible desayuno incluido: pan y mermelada casera, tartas dulces de la zona, exprimido de
                            naranja
                            natural y mucho mas.</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="IMG/Servicios/transporte aeropuerto.jpg" alt="Transporte" />
                    <div className="info">
                        <h4>TRANSPORTE AEROPUERTO</h4>
                        <p>Decisdiste viajar en aviòn? Te buscamos en el aeropuerto el dia de tu llegada y tambien te
                            llevamos
                            al
                            regreso. Solo disfruta de tu estadia</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="IMG/Servicios/pesca.jpg" alt="Pesca" />
                    <div className="info">
                        <h4>PESCA DEPORTIVA</h4>
                        <p>Si te apasiona este deporte, no dudes en reservar una excursion de pesca con los mejores
                            pescadores
                            de la
                            zona. Truchas arcoiris te esperan.</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="IMG/Servicios/trekking.jpg" alt="Trekking" />
                    <div className="info">
                        <h4>TREKKING</h4>
                        <p>Si te apasiona este deporte, no dudes en reservar una excursion de pesca con los mejores
                            pescadores
                            de la
                            zona. Truchas arcoiris te esperan.</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="IMG/Servicios/tulipanes.jpg" alt="Tulipanes" />
                    <div className="info">
                        <h4>TULIPANES</h4>
                        <p>En octubre, en la localidad de trevelin, florecen los maravillosos tulipanes. Conoce este
                            magnifico
                            campo
                            que te dejarà con la boca abierta</p>
                    </div>

                </div>
            </div>

        </main>
    );
}

export default ServiciosPage;
