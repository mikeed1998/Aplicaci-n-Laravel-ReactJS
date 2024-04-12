import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Formulario() {
    // Estado para almacenar los valores del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: ""
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/data', {
                nombre: e.target.nombre.value,
                descripcion: e.target.descripcion.value,
            });
            toast.success('¡Los datos se han guardado exitosamente!');
            onFormSubmit();
            e.target.reset();
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                    <div className="row mt-4 form-group">
                        <div className="col">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="form-control shadow-none"
                        />
                        </div>
                    </div>
                    <div className="row mt-4 form-group">
                        <div className="col">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            cols="30"
                            rows="10"
                            className="form-control shadow-none"
                        ></textarea>
                        </div>
                    </div>
                    <div className="row mt-4 form-group">
                        <div className="col">
                        <input
                            type="submit"
                            className="btn btn-dark w-100"
                            value="Crear nuevo"
                        />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    );
}
