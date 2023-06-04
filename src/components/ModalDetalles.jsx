import React from "react";
import Pocion1 from "../assets/Pocion1.jpeg";
import Pocion2 from "../assets/Pocion2.jpeg";
import Pocion3 from "../assets/Pocion3.jpeg";
import Pocion4 from "../assets/Pocion4.jpeg";
import Pocion5 from "../assets/Pocion5.jpeg";
import Pocion6 from "../assets/Pocion6.jpeg";
import Pocion7 from "../assets/Pocion7.jpeg";
import Pocion8 from "../assets/Pocion8.jpeg";
import Pocion9 from "../assets/Pocion9.jpeg";
import Pocion10 from "../assets/Pocion10.jpeg";

function ModalDetalles({ visible, onClose, pocion }) {
    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") onClose();
    };
    const getImageByValue = (value) => {
        const imageMapping = {
            1: Pocion1,
            2: Pocion2,
            3: Pocion3,
            4: Pocion4,
            5: Pocion5,
            6: Pocion6,
            7: Pocion7,
            8: Pocion8,
            9: Pocion9,
            10: Pocion10,
        };
        return imageMapping[value] || null;
    };
    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-[#3E5762] text-white font-yusei-magic m-12">
                <div className="flex flex-col justify-center items-center divide-y-2">
                    <div className="my-5 flex flex-col justify-center items-center">
                        <img className="w-32" src={getImageByValue(pocion.imagen)} alt={`Imagen ${pocion.imagen}`} />
                        <h2 className="mt-3 text-xl">{pocion.nombre}</h2>
                    </div>
                    <div className="flex flex-row space-x-2 text-sm text-center">
                        <p className="my-6 px-4">Poción de {pocion.categoria}</p>
                        <p className="my-6 px-4">{pocion.unidadesDisponibles} disponibles</p>
                        <p className="my-6 px-4">{pocion.precio} de oro</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-sm w-full">
                        <p className="mt-4 mb-2">{pocion.ingrediente1}</p>
                        <p className="mt-2 mb-2">{pocion.ingrediente2}</p>
                        <p className="mt-2 mb-2">{pocion.ingrediente3}</p>
                        <p className="mt-2 mb-4">{pocion.ingrediente4}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <h2 className="mt-2 mb-4 ">Descripción</h2>
                        <p className="mx-5 mb-7 text-justify text-sm">{pocion.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDetalles;
