import React from "react";
import './../estilos/componentes/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main className="galeria">
            <div className="introduccion">
                <h2>GALERIA DE FOTOS</h2>
                <p>Descubre algunas de las vistas más hermosas y nuestros espacios.</p>
            </div>
            <div className="galeria-grid">
                <div className="foto">
                    <img src="IMG/Galeria/Fuera/Cabaña vista ppal.jpg" alt="Vista principal de la cabaña" />
                </div>
                <div className="foto">
                    <img src="IMG/Galeria/Fuera/Cabaña vista arriba.jpg" alt="Vista desde arriba de la cabaña" />
                </div>
                <div className="foto">
                    <img src="IMG/Galeria/Fuera/Cabaña vista arriba 2.jpg" alt="Vista desde abajo de la cabaña" />
                </div>
                <div className="foto">
                    <img src="IMG\Galeria\Habitacion Doble\Haabitacion Doble 3.JPG" alt="Habitación doble 1" />
                </div>
                <div className="foto">
                    <img src="IMG\Galeria\Habitacion Doble\Habitacion Doble 2.JPG" alt="Habitación doble 2" />
                </div>
                <div className="foto">
                    <img src="IMG\Galeria\Habitacion Doble\Habitacion Doble.JPG" alt="Habitación doble 3" />
                </div>
                <div className="foto">
                    <img src="IMG\Galeria\Habitación Individual\Habitacion Individual 2.JPG" alt="Habitación individual 1" />
                </div>
                <div className="foto">
                    <img src="IMG\Galeria\Habitación Individual\Habitacion Individual.JPG" alt="Habitación individual 2" />
                </div>

               
            </div>



        </main>
    );
}

export default GaleriaPage;
