import React from "react";
import './../estilos/componentes/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main>
            <div className="imagen">
                <img src="IMG/Home/Vista primavera.jpg" width="100%" alt="primavera" />
            </div>
            <div className="columnas">
                <section className="introduccion">
                    <h2>Descansa en la natraleza</h2>
                    <p>A tan solo un kilometro de Trevelin, Cabañas Cordon Situación te esperan para ofrecerte un descanso
                        absoluto lejos del ruido de la ciudad.</p>
                    <p>Trekking, ski, viñedos y el parque nacional Los alerces son
                        algunas de las atracciones que encontrarás y difrutarás durante tu estadia.</p>
                </section>
                <section className="reserva">
                    <h2>Solicitu de reserva</h2>
                    <form action="">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" className="cajas" />
                        </p>
                        <p>
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" className="cajas" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="email" name="email" className="cajas" />
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="tel" name="telefono" className="cajas" />
                        </p>
                        <p>
                            <label for="llegada">Fecha y hora de llegada</label>
                            <input type="datetime-local" name="fecha-hora-llegada" id="llegada" className="cajas" />

                        </p>
                        <p>
                            <label for="estadia">Días de permanencia</label>
                            <select id="estadia" className="cajas">
                                <option value="1" label="1" />
                                <option value="2" label="2" />
                                <option value="3" label="3" />
                                <option value="4" label="4" />
                                <option value="5" label="5" />
                            </select>
                        </p>
                        <input type="submit" value="enviar" name="submit" className="btn"></input>
                    </form>

                </section>
            </div>

        </main>

    );
}

export default HomePage;
