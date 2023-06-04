import React, { useState, useEffect } from "react";

function ModalDelete({ pocion, visible, onClose }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") onClose();
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);

            const response = await fetch("http://localhost:3000/api/eliminarPocion/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: pocion.id }),
            });

            if (response.ok) {
                setIsDeleted(true);
                onClose();
            } else {
                console.error("Ocurrió un error al eliminar la poción");
            }
        } catch (error) {
            console.error("Error al borrar la poción", error);
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => {
        if (visible) {
            setIsDeleted(false);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="flex flex-col bg-[#3E5762] p-2 w-3/5 font-ubuntu text-white">
                {isDeleted ? (
                    <p className="text-white my-8 mx-3 text-justify">Poción eliminada exitosamente</p>
                ) : (
                    <>
                        <h2 className="text-white my-8 mx-3 text-justify">Pulsa borrar para confirmar la eliminación de esta poción</h2>
                        <button className="bg-[#657F8A] justify-center align-items mx-16 " onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? "Eliminando..." : "Borrar"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ModalDelete;
