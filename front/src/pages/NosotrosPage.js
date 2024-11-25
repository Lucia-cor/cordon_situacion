import React from "react";
import './../estilos/componentes/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="nosotros">
            <div className="contenido">

                <div className="imagen-columna">
                    <img src="IMG\Home\Vista primavera.jpg" alt="Nuestra historia" />
                </div>
                <div className="texto-columna">
                    <h2>QUIENES SOMOS</h2>
                    <p>En el corazón de la Patagonia, nuestras cabañas fueron construidas con el amor y el respeto por la naturaleza que nos rodea. A tan solo un kilómetro de Trevelin, ofrecemos un refugio de paz y tranquilidad, ideal para quienes buscan escapar del bullicio de la ciudad.</p>
                    <p>Desde su inauguración, nos hemos comprometido a brindar experiencias únicas que conecten a nuestros huéspedes con la belleza natural de la región. Con una arquitectura inspirada en el entorno, cada rincón de nuestras cabañas ha sido pensado para ofrecer confort, privacidad y vistas espectaculares.</p>
                    <p>Ya sea que busques descansar, explorar el Parque Nacional Los Alerces, o disfrutar de actividades al aire libre como el trekking y el ski, nuestra misión es ofrecerte un lugar donde el descanso y la aventura se encuentren.</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
