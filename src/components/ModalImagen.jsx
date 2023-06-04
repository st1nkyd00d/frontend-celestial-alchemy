import React, { useState } from "react";
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

function ModalImagen({ pocionId, visible, onClose }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") {
            onClose();
        }
    };

    const handleImageClick = (imageName) => {
        setSelectedImage(imageName);
    };

    const handleGuardarClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/cambiarImagen", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: pocionId, imagen: selectedImage }),
            });

            if (response.ok) {
                console.log("Imagen guardada correctamente");
                onClose();
            } else {
                console.log("Error al guardar la imagen");
            }
        } catch (error) {
            console.error("Error. No se pudo guardar la imagen:", error);
        }
    };

    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-[#3E5762] border-2 border-black p-2">
                <p className="text-white my-8 mx-3 font-ubuntu">Selecciona una imagen</p>
                <div className="flex justify-center m-4">
                    <img src={Pocion1} alt="Imagen 1" className={`h-28 mr-10 cursor-pointer ${selectedImage === "1" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("1")} />
                    <img src={Pocion2} alt="Imagen 2" className={`h-28 cursor-pointer ${selectedImage === "2" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("2")} />
                </div>

                <div className="flex justify-center m-4">
                    <img src={Pocion3} alt="Imagen 3" className={`h-28 mr-10 cursor-pointer ${selectedImage === "3" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("3")} />
                    <img src={Pocion4} alt="Imagen 4" className={`h-28 cursor-pointer ${selectedImage === "4" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("4")} />
                </div>

                <div className="flex justify-center m-4">
                    <img src={Pocion5} alt="Imagen 5" className={`h-28 mr-10 cursor-pointer ${selectedImage === "5" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("5")} />
                    <img src={Pocion6} alt="Imagen 6" className={`h-28 cursor-pointer ${selectedImage === "6" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("6")} />
                </div>

                <div className="flex justify-center m-4">
                    <img src={Pocion7} alt="Imagen 7" className={`h-28 mr-10 cursor-pointer ${selectedImage === "7" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("7")} />
                    <img src={Pocion8} alt="Imagen 8" className={`h-28 cursor-pointer ${selectedImage === "8" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("8")} />
                </div>

                <div className="flex justify-center m-4">
                    <img src={Pocion9} alt="Imagen 9" className={`h-28 mr-10 cursor-pointer ${selectedImage === "9" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("9")} />
                    <img src={Pocion10} alt="Imagen 10" className={`h-28 cursor-pointer ${selectedImage === "10" ? "border-2 border-blue-500" : ""}`} onClick={() => handleImageClick("10")} />
                </div>

                <button
                    className="bg-[#657F8A] text-white font-ubuntu py-1 px-2"
                    onClick={() => {
                        handleGuardarClick();
                        onClose();
                        setSelectedImage(null);
                    }}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

export default ModalImagen;
