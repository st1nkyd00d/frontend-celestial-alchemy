import React, { useState } from "react";

function ModalCreate({ visible, onClose }) {
    const [formData, setFormData] = useState({
        nombre: "",
        categoria: "",
        precio: "",
        imagen: "",
        unidadesDisponibles: "",
        ingrediente1: "",
        ingrediente2: "",
        ingrediente3: "",
        ingrediente4: "",
        descripcion: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/agregarPocion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error al agregar la poción");
            }
            limpiarCampos();
        } catch (error) {
            console.error(error);
        }
    };

    const limpiarCampos = () => {
        setFormData({
            nombre: "",
            categoria: "",
            precio: "",
            imagen: "",
            unidadesDisponibles: "",
            ingrediente1: "",
            ingrediente2: "",
            ingrediente3: "",
            ingrediente4: "",
            descripcion: "",
        });
    };

    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") onClose();
    };

    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="w-4/5 flex flex-col bg-[#3E5762] border-2 border-black p-2">
                <h2 className="font-ubuntu text-white text-center mb-4">Crear poción</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col font-yusei-magic">
                        <label className=" text-white ml-2" htmlFor="nombre">
                            Nombre de la poción
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} />
                        <label className=" text-white ml-2" htmlFor="descripcion">
                            Descripción
                        </label>
                        <textarea className="m-2 p-1" type="text" name="descripcion" id="descripcion" value={formData.descripcion} onChange={handleChange} />
                        <label className=" text-white ml-2" htmlFor="ingrediente1">
                            Ingrediente 1
                        </label>
                        <select className="m-2 " type="" name="ingrediente1" id="ingrediente1" value={formData.ingrediente1} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="1">Escama de dragón ígneo</option>
                            <option value="2">Lágrima de fénix</option>
                            <option value="3">Raíz de árbol centenario</option>
                            <option value="4">Polen de luna plateada</option>
                            <option value="5">Esencia de estrella fugaz</option>
                            <option value="6">Flor de fuego eterno</option>
                            <option value="7">Pluma de grifo dorado</option>
                            <option value="8">Hongo relámpago</option>
                            <option value="9">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente2">
                            Ingrediente 2
                        </label>
                        <select className="m-2" type="" name="ingrediente2" id="ingrediente2" value={formData.ingrediente2} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="1">Escama de dragón ígneo</option>
                            <option value="2">Lágrima de fénix</option>
                            <option value="3">Raíz de árbol centenario</option>
                            <option value="4">Polen de luna plateada</option>
                            <option value="5">Esencia de estrella fugaz</option>
                            <option value="6">Flor de fuego eterno</option>
                            <option value="7">Pluma de grifo dorado</option>
                            <option value="8">Hongo relámpago</option>
                            <option value="9">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente3">
                            Ingrediente 3
                        </label>
                        <select className="m-2" type="" name="ingrediente3" id="ingrediente3" value={formData.ingrediente3} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="1">Escama de dragón ígneo</option>
                            <option value="2">Lágrima de fénix</option>
                            <option value="3">Raíz de árbol centenario</option>
                            <option value="4">Polen de luna plateada</option>
                            <option value="5">Esencia de estrella fugaz</option>
                            <option value="6">Flor de fuego eterno</option>
                            <option value="7">Pluma de grifo dorado</option>
                            <option value="8">Hongo relámpago</option>
                            <option value="9">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente4">
                            Ingrediente 4
                        </label>
                        <select className="m-2" type="" name="ingrediente4" id="ingrediente4" value={formData.ingrediente4} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="1">Escama de dragón ígneo</option>
                            <option value="2">Lágrima de fénix</option>
                            <option value="3">Raíz de árbol centenario</option>
                            <option value="4">Polen de luna plateada</option>
                            <option value="5">Esencia de estrella fugaz</option>
                            <option value="6">Flor de fuego eterno</option>
                            <option value="7">Pluma de grifo dorado</option>
                            <option value="8">Hongo relámpago</option>
                            <option value="9">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="categoria">
                            Categoría de la poción
                        </label>
                        <select className="m-2 p-1" type="" name="categoria" id="categoria" value={formData.categoria} onChange={handleChange}>
                            <option value="">Sin categoría</option>
                            <option value="vida">Poción de vida</option>
                            <option value="maná">Poción de maná</option>
                            <option value="resistencia">Poción de resistencia</option>
                            <option value="elementos">Poción de elementos</option>
                            <option value="veneno">Poción de veneno</option>
                            <option value="alteración">Poción de alteración</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="precio">
                            Precio (en oro)
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="precio" id="precio" value={formData.precio} onChange={handleChange} />
                        <label className=" text-white ml-2" htmlFor="unidadesDisponibles">
                            Unidades disponibles
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="unidadesDisponibles" id="unidadesDisponibles" value={formData.unidadesDisponibles} onChange={handleChange} />
                        <div className="flex justify-center items-center">
                            <button className="bg-[#657F8A] text-white font-ubuntu mt-2 py-1 px-7">Crear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalCreate;
