import React from "react";
import './../estilos/componentes/pages/ContactoPage.css'
import { useState } from "react";
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre:'',
        email:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const { name, value} = e.target;
        setFormData (oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }
    return (
        <main className="contacto">
            <div className="conteiner">

                <div className="imagencolumna">
                    <img src="IMG\Home\Vista Otoño.jpeg" alt="Contacto" />
                </div>
                
                <div className="textocolumna">
                    <h2>CONTACTO</h2>
                    <p>Nos encantaría saber de ti. Si tienes preguntas, comentarios o necesitas más información sobre nuestras cabañas y la región, no dudes en ponerte en contacto con nosotros.</p>
                    <p>Ya sea que estés planificando tu próxima aventura en la Patagonia o buscando asesoramiento personalizado, nuestro equipo estará encantado de ayudarte. Aquí puedes encontrar nuestras formas de contacto:</p>

                    <h3>Ubicación</h3>
                    <p>Nos encontramos a tan solo un kilómetro de Trevelin, un lugar rodeado de belleza natural y serenidad.</p>

                    <h3>Email</h3>
                    <p>Para consultas generales, reservas o cualquier otra solicitud, puedes escribirnos a: <a href="mailto:cabañas.cs@gmail.com">cabañas.cs@gmail.com</a></p>

                    <h3>Teléfono</h3>
                    <p>Si prefieres contactarnos por teléfono, estamos disponibles al: <a href="tel:+542945533253">2945533253</a></p>

                    <h3>Formulario de Contacto</h3>
                    <form action="/contacto" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} required ></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
                
            </div>
        </main>
    );
}

export default ContactoPage;