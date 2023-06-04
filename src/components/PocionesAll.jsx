import React, { useState, useEffect } from "react";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalImagen from "./ModalImagen";
import ModalDetalles from "./ModalDetalles";
import ModalCreate from "./ModalCreate";
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

function PocionAll() {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalImagen, setShowModalImagen] = useState(false);
    const [showModalDetalles, setShowModalDetalles] = useState(false);
    const [selectedPocion, setSelectedPocion] = useState(null);
    const [pociones, setPociones] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleOnClose = () => {
        setShowModalEdit(false);
        setShowModalDelete(false);
        setShowModalImagen(false);
        setShowModalDetalles(false);
        setShowModalCreate(false);
    };

    const handleCambiarImagen = (pocionId) => {
        setShowModalImagen(pocionId);
        console.log(pocionId);
    };

    const handleOpenModalDetalles = (pocion) => {
        console.log(pocion);
        setSelectedPocion(pocion);
        setShowModalDetalles(true);
    };

    const handleOpenModalDelete = (pocion) => {
        setSelectedPocion(pocion);
        setShowModalDelete(true);
    };

    const handleOpenModalEdit = (pocion) => {
        setSelectedPocion(pocion);
        setShowModalEdit(true);
    };

    useEffect(() => {
        async function fetchPociones() {
            try {
                const response = await fetch("http://localhost:3000/api/busquedaPociones", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setPociones(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPociones();
    }, [showModalCreate, showModalDelete, showModalImagen, showModalDetalles, showModalEdit]);

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

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredPociones = pociones.filter((pocion) => {
        const lowerCaseSearchValue = searchValue.toLowerCase();
        const lowerCaseNombre = pocion.nombre.toLowerCase();
        const lowerCaseDescripcion = pocion.descripcion.toLowerCase();
        const lowerCaseCategoria = pocion.categoria.toLowerCase();

        return lowerCaseNombre.includes(lowerCaseSearchValue) || lowerCaseDescripcion.includes(lowerCaseSearchValue) || lowerCaseCategoria.includes(lowerCaseSearchValue);
    });

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center border-b-8 border-black mb-8 w-full">
                <h2 className="text-center font-ubuntu mt-4 mb-4 text-xl">¡Encuentra la pocion que desees!</h2>

                <input
                    type="text"
                    placeholder="Ingresa el nombre de la pocion aqui..."
                    className="p-1 m-1 text-xs border-2 w-3/4 font-ubuntu bg-[#EAEAEA]"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                />
                <button type="button" onClick={() => setShowModalCreate(true)} className="bg-[#8FA9B5] font-ubuntu text-white p-2 my-6">
                    Crear nueva pocion
                </button>
                <ModalCreate onClose={handleOnClose} visible={showModalCreate} />
            </div>
            <h2 className="font-ubuntu text-2xl">Pociones Disponibles</h2>
            {filteredPociones.map((pocion) => (
                <div className="flex flex-col m-16 items-center justify-center border-2 border-black bg-[#19323C] font-yusei-magic text-white divide-y-2" key={pocion.id}>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="my-2">{pocion.nombre}</h3>
                        <img className="h-36" src={getImageByValue(pocion.imagen)} alt={`Imagen ${pocion.imagen}`} onClick={() => handleOpenModalDetalles(pocion)} />
                        <p className="my-2">Poción de {pocion.categoria}</p>
                        <p className="mb-2">{pocion.precio} de oro</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h3 className="my-2">Descripción</h3>
                        <p className="mx-4 mb-4 text-justify">{pocion.descripcion}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="my-1">{pocion.unidadesDisponibles} disponibles</p>
                        <div className="flex justify-evenly p-2 space-x-4">
                            <button type="button" onClick={() => handleOpenModalEdit(pocion)} className="bg-[#657F8A] font-ubuntu py-1 px-1 text-sm w-full">
                                Actualizar
                            </button>
                            <button type="button" onClick={() => handleOpenModalDelete(pocion)} className="bg-[#657F8A] font-ubuntu py-1 px-1 text-sm w-full">
                                Borrar
                            </button>
                            <button type="button" onClick={() => handleCambiarImagen(pocion.id)} className="bg-[#657F8A] font-ubuntu py-1 px-1 text-sm w-full">
                                Cambiar imagen
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {selectedPocion && <ModalEdit onClose={handleOnClose} visible={showModalEdit} pocion={selectedPocion} />}
            {selectedPocion && <ModalDelete onClose={handleOnClose} visible={showModalDelete} pocion={selectedPocion} />}
            <ModalImagen onClose={handleOnClose} visible={showModalImagen} pocionId={showModalImagen} />
            {selectedPocion && <ModalDetalles onClose={handleOnClose} visible={showModalDetalles} pocion={selectedPocion} />}
        </div>
    );
}

export default PocionAll;
