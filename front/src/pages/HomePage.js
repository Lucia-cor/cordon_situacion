import React from "react";
import './../estilos/componentes/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main>
            <div className="imagen">
                <img src="IMG/Home/Vista primavera.jpg" width="100%" alt="primavera" />
            </div>
            <div className="columnas">
                <section className="presentacion">
                    <h2>Descansa en la natraleza</h2>
                    <p>A tan solo un kilometro de Trevelin, Cabañas Cordon Situación te esperan para ofrecerte un descanso
                        absoluto lejos del ruido de la ciudad.</p>
                    <p>Trekking, ski, viñedos y el parque nacional Los alerces son
                        algunas de las atracciones que encontrarás y difrutarás durante tu estadia.</p>
                </section>
            </div>

        </main>

    );
}

export default HomePage;
