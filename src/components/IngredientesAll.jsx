import React, { useState, useEffect } from "react";

function IngredientesAll() {
    const [ingredientes, setIngredientes] = useState([]);

    useEffect(() => {
        async function fetchIngredientes() {
            try {
                const response = await fetch("http://localhost:3000/api/busquedaIngredientes", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Error al intentar buscar los ingredientes");
                }
                const data = await response.json();
                setIngredientes(data);

                if (!response.ok) {
                    throw new Error("Error al agregar la poción");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchIngredientes();
    }, []);

    return (
        <div className="mx-8">
            <div>
                <h2 className="text-center flex items-center justify-center font-ubuntu text-2xl mb-8">Lista de ingredientes Disponibles</h2>
                <div className="border-2 border-black mb-8">
                    <div className="flex bg-gray-200 font-bold">
                        <div className="flex-1 p-2">Ingredientes</div>
                        <div className="flex-1 p-2">Cantidad</div>
                        <div className="flex-1 p-2">Descripción</div>
                    </div>
                    {ingredientes.map((ingrediente) => (
                        <div className="flex border-t border-black items-start justify-center text-sm" key={ingrediente.id}>
                            <div className="flex-1 p-2">{ingrediente.nombre}</div>
                            <div className="flex-1 p-2">{ingrediente.unidadesDisponibles}</div>
                            <div className="flex-1 p-2  text-xs text-justify">{ingrediente.descripcion}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IngredientesAll;
