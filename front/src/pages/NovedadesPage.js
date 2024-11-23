import React, { useState, useEffect } from "react";
import axios from 'axios';
import './../estilos/componentes/pages/NovedadesPage.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Activiades Culturales</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id} titulo={item.titulo} lugar={item.lugar} imagen={item.imagen} cuerpo={item.cuerpo} />)
            )}
        </section>
    );

}

export default NovedadesPage;