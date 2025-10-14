import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('¡Mensaje enviado! (Revisa la consola para ver los datos)');
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
            </div>

            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                </label>
                <textarea
                    name="mensaje"
                    id="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
            </div>

            <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
            >
                Enviar Mensaje
            </button>

        </form>
    );
}
