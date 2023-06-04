import React from "react";
import CelestialAlchemyLogo from '../assets/CelestialAlchemyLogo.png';

function Header() {
    return (
        <div>
            <header className="bg-[#19323C] h-14">
                <nav className="flex flex-row justify-between">
                    <img className="w-24" src={CelestialAlchemyLogo} alt="Descripción de la imagen" />
                    <h2 className="pr-2 text-center text-white text-sm ml-24 mt-1 font-yusei-magic ">Pociones celestiales para desatar tu poder interior</h2>
                </nav>
            </header>
        </div>
    );
}

export default Header;