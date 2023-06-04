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
                const data = await response.json();
                setIngredientes(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchIngredientes();
    }, []);

    return (
        <div className="mx-8">
            <div>
                <div className="border-2 border-black mb-8">
                    <div className="flex bg-gray-200 font-bold">
                        <div className="flex-1 p-2">Ingredientes</div>
                        <div className="flex-1 p-2">Cantidad</div>
                        <div className="flex-1 p-2">Descripción</div>
                    </div>
                    {ingredientes.map((ingrediente) => (
                        <div className="flex border-t border-black items-start justify-center" key={ingrediente.id}>
                            <div className="flex-1 p-2">{ingrediente.nombre}</div>
                            <div className="flex-1 p-2">{ingrediente.unidadesDisponibles}</div>
                            <div className="flex-1 p-2 text-sm text-justify">{ingrediente.descripcion}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IngredientesAll;
