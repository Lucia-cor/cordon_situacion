import React from "react";
import './../estilos/componentes/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="home">
            <div className="cont">

                <div className="imagen-col">
                    <img src="IMG\Home\Cabaña roja.jpg" alt="Home" />
                </div>
                <div className="texto-col">
                    <h2>BIENVENIDOS</h2>
                    <p>Nos complace ofrecerte un lugar único para desconectar, relajarte y disfrutar de la naturaleza en su máximo esplendor. Nuestras cabañas, ubicadas en el corazón de la Patagonia, son el espacio ideal para quienes buscan una experiencia auténtica y en armonía con el entorno natural. 
                        Rodeadas de paisajes impresionantes, montañas, bosques y lagos cristalinos, te invitamos a vivir una experiencia inolvidable en este rincón del mundo.</p>
                    <p>Ya sea que busques una escapada tranquila para descansar, una aventura al aire libre o un lugar especial para compartir con tus seres queridos, nuestras cabañas están equipadas para brindarte todo lo necesario para que tu estancia sea cómoda, relajante y memorable.</p>
                    <p>¡Esperamos que disfrutes de tu tiempo en la Patagonia tanto como nosotros disfrutamos compartirla contigo!</p>
                </div>
            </div>
        </main>

    );
}

export default HomePage;
