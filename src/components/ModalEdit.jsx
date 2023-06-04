import React, { useState, useEffect } from "react";

function ModalEdit({ pocion, visible, onClose }) {
    const [formData, setFormData] = useState({
        id: "",
        nombre: "",
        categoria: "",
        precio: "",
        unidadesDisponibles: "",
        ingrediente1: "",
        ingrediente2: "",
        ingrediente3: "",
        ingrediente4: "",
        descripcion: "",
    });

    useEffect(() => {
        setFormData({
            id: pocion.id,
            nombre: pocion.nombre,
            categoria: pocion.categoria,
            precio: pocion.precio,
            unidadesDisponibles: pocion.unidadesDisponibles,
            ingrediente1: pocion.ingrediente1,
            ingrediente2: pocion.ingrediente2,
            ingrediente3: pocion.ingrediente3,
            ingrediente4: pocion.ingrediente4,
            descripcion: pocion.descripcion,
        });
    }, [pocion]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (formData.ingrediente1 === "") {
                formData.ingrediente1 = null;
            }
            if (formData.ingrediente2 === "") {
                formData.ingrediente2 = null;
            }
            if (formData.ingrediente3 === "") {
                formData.ingrediente3 = null;
            }
            if (formData.ingrediente4 === "") {
                formData.ingrediente4 = null;
            }
            const response = await fetch("http://localhost:3000/api/editarPocion", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error al editar la poción");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") onClose();
    };
    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="w-4/5 flex flex-col bg-[#3E5762] border-2 border-black p-2">
                <h2 className="font-ubuntu text-white text-center mb-4">Actualizar información de poción</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col font-yusei-magic">
                        <label className=" text-white ml-2" htmlFor="nombre">
                            Nombre de la pocion
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} />
                        <label className=" text-white ml-2" htmlFor="descripcion">
                            Descripcion
                        </label>
                        <textarea className="m-2 p-1" type="text" name="descripcion" id="descripcion" value={formData.descripcion} onChange={handleChange} />
                        <label className=" text-white ml-2" htmlFor="ingrediente1">
                            Ingrediente 1
                        </label>
                        <select className="m-2 " type="" name="ingrediente1" id="ingrediente1" value={formData.ingrediente1} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="Escama de dragón ígneo">Escama de dragón ígneo</option>
                            <option value="Lágrima de fénix">Lágrima de fénix</option>
                            <option value="Raíz de árbol centenario">Raíz de árbol centenario</option>
                            <option value="Polen de luna plateada">Polen de luna plateada</option>
                            <option value="Esencia de estrella fugaz">Esencia de estrella fugaz</option>
                            <option value="Flor de fuego eterno">Flor de fuego eterno</option>
                            <option value="Pluma de grifo dorado">Pluma de grifo dorado</option>
                            <option value="Hongo relámpago">Hongo relámpago</option>
                            <option value="Sangre de basilisco">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente2">
                            Ingrediente 2
                        </label>
                        <select className="m-2" type="" name="ingrediente2" id="ingrediente2" value={formData.ingrediente2} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="Escama de dragón ígneo">Escama de dragón ígneo</option>
                            <option value="Lágrima de fénix">Lágrima de fénix</option>
                            <option value="Raíz de árbol centenario">Raíz de árbol centenario</option>
                            <option value="Polen de luna plateada">Polen de luna plateada</option>
                            <option value="Esencia de estrella fugaz">Esencia de estrella fugaz</option>
                            <option value="Flor de fuego eterno">Flor de fuego eterno</option>
                            <option value="Pluma de grifo dorado">Pluma de grifo dorado</option>
                            <option value="Hongo relámpago">Hongo relámpago</option>
                            <option value="Sangre de basilisco">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente3">
                            Ingrediente 3
                        </label>
                        <select className="m-2" type="" name="ingrediente3" id="ingrediente3" value={formData.ingrediente3} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="Escama de dragón ígneo">Escama de dragón ígneo</option>
                            <option value="Lágrima de fénix">Lágrima de fénix</option>
                            <option value="Raíz de árbol centenario">Raíz de árbol centenario</option>
                            <option value="Polen de luna plateada">Polen de luna plateada</option>
                            <option value="Esencia de estrella fugaz">Esencia de estrella fugaz</option>
                            <option value="Flor de fuego eterno">Flor de fuego eterno</option>
                            <option value="Pluma de grifo dorado">Pluma de grifo dorado</option>
                            <option value="Hongo relámpago">Hongo relámpago</option>
                            <option value="Sangre de basilisco">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="ingrediente4">
                            Ingrediente 4
                        </label>
                        <select className="m-2" type="" name="ingrediente4" id="ingrediente4" value={formData.ingrediente4} onChange={handleChange}>
                            <option value="">Sin ingrediente</option>
                            <option value="Escama de dragón ígneo">Escama de dragón ígneo</option>
                            <option value="Lágrima de fénix">Lágrima de fénix</option>
                            <option value="Raíz de árbol centenario">Raíz de árbol centenario</option>
                            <option value="Polen de luna plateada">Polen de luna plateada</option>
                            <option value="Esencia de estrella fugaz">Esencia de estrella fugaz</option>
                            <option value="Flor de fuego eterno">Flor de fuego eterno</option>
                            <option value="Pluma de grifo dorado">Pluma de grifo dorado</option>
                            <option value="Hongo relámpago">Hongo relámpago</option>
                            <option value="Sangre de basilisco">Sangre de basilisco</option>
                        </select>
                        <label className=" text-white ml-2" htmlFor="categoria">
                            Categoría de la poción
                        </label>
                        <select className="m-2 p-1" type="" name="categoria" id="categoria" value={formData.categoria} onChange={handleChange}>
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
                            <button className="bg-[#657F8A] text-white font-ubuntu py-1 px-2">Actualizar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalEdit;
