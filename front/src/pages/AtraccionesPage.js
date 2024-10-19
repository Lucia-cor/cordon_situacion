import React from "react";
import './../estilos/componentes/pages/AtraccionesPage.css';

const AtraccionesPage = (props) => {
    return (
        <main className="holder">
            <div className="introduccion">
                <h2>Atracciones</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem possimus dignissimos tempora natus,
                    blanditiis ullam perspiciatis ut nulla vitae neque maiores enim mollitia quidem quas, alias officia
                    nemo, dolorum corrupti!</p>
            </div>
            <div className="atracciones">
                <div className="atraccion">
                    <img src="IMG/Atracciones/pqn.jpg" alt="parque-nacional"/>
                        <h3>Parque Nacional Los Alerces</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a
                            href="https://www.esquel.tur.ar/disfruta/excursiones-aventura/parque-nacional-los-alerces">aquí</a>
                        </p>
                </div>
                <div className="atraccion">
                    <img src="IMG/Atracciones/presa.jpg" alt="presa-futaleufú"/>
                        <h3>Represa Hidroeléctrica Futaleufú</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a
                            href="https://www.esquel.tur.ar/disfruta/excursiones-aventura/complejo-hidroelectrico-futaleufu">aqui</a>
                        </p>
                </div>
                <div className="atraccion">
                    <img src="IMG/Atracciones/lahoya.jpg" alt="la-hoya"/>
                        <h3>Centro de Ski La Hoya</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a href="https://skilahoya.com/">aquí</a></p>
                </div>
                <div className="atraccion">
                    <img src="IMG/Atracciones/tulipanes.jpg" alt="tulipanes"/>
                        <h3>Campo de Tulipanes</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a href="https://trevelin.tur.ar/experiencias/campo-de-tulipanes/">aquí</a></p>
                </div>
                <div className="atraccion">
                    <img src="IMG/Atracciones/casadete.jpg" alt="casa-de-te"/>
                        <h3>Casa de Té Galés Neim Magui</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a href="https://trevelin.tur.ar/servicios/nain-maggie/">aquí</a></p>
                </div>
                <div className="atraccion">
                    <img src="IMG/Atracciones/trochita.jpeg" alt="trochita"/>
                        <h3>Casa de Té Galés Neim Magui</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et quibusdam quia non distinctio
                            numquam, sed totam dicta amet? Aspernatur esse dignissimos odit distinctio ea maxime. Dignissimos
                            voluptatibus nostrum reprehenderit!</p>
                        <p>Para mas información <a href="https://latrochita.org.ar/">aquí</a></p>
                </div>
            </div>
        </main>
    );
}

export default AtraccionesPage;
