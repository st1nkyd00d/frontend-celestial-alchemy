import React from "react";
import { useState } from "react";
import ModalCreate from "./ModalCreate";
function SearchBar() {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const handleOnClose = () => setShowModalCreate(false);
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-ubuntu mt-4 mb-4 text-xl">¡Encuentra la pocion que desees!</h2>

            <input type="text" placeholder="Ingresa el nombre de la pocion aqui..." className="p-1 m-1 text-xs border-2 w-3/4 font-ubuntu bg-[#EAEAEA]" />

            <button type="button" onClick={() => setShowModalCreate(true)} className="bg-[#8FA9B5] font-ubuntu text-white p-2 my-6">
                Crear nueva pocion
            </button>
            <ModalCreate onClose={handleOnClose} visible={showModalCreate} />
        </div>
    );
}

export default SearchBar;
