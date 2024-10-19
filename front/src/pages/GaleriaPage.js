import React from "react";
import './../estilos/componentes/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <div id="contcarrusel">
                <div class="carrusel" id="carrusel-1">
                    <div className="imagen">
                        <img src="IMG/Galeria/Fuera/Cabaña vista ppal.jpg" alt="vista" id="vista-1"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-7"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-2"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-2">
                    <div class="imagen">
                        <img src="IMG/Galeria/Fuera/Cabaña vista arriba.jpg" alt="vista-arriba" id="vista-2"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-1"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-3"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-3">
                    <div className="imagen">
                        <img src="IMG/Galeria/Fuera/Cabaña vista arriba 2.jpg" alt="vista-arriba2" id="vista-3"
                        />
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-2"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-4"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-4">
                    <div className="imagen">
                        <img src="IMG/Galeria/Habitacion Doble/Habitacion Doble.JPG" alt="habdoble" id="habitacion-1"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-3"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-5"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-5">
                    <div class="imagen">
                        <img src="IMG/Galeria/Habitacion Doble/Habitacion Doble 2.JPG" alt="habdoble2" id="habitacion-2"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-4"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-6"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-6">
                    <div className="imagen">
                        <img src="IMG/Galeria/Habitación Individual/Habitacion Individual.JPG" alt="habdoble2"
                            id="habitacion-i-1"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-5"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-7"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="carrusel" id="carrusel-7">
                    <div className="imagen">
                        <img src="IMG/Galeria/Habitación Individual/Habitacion Individual 2.JPG" alt="habdoble2"
                            id="habitacion-i-2"/>
                    </div>
                    <div className="flechas">
                        <a href="#carrusel-6"><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#carrusel-1"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default GaleriaPage;
