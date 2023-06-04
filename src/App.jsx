import React from "react";
import "./index.css";
import Header from "./components/Header";
import PocionAll from "./components/PocionesAll";
import Footer from "./components/Footer";
import IngredientesAll from "./components/IngredientesAll";

function App() {


    return (
        <div>
            <Header />
            <div className="divide-y-2 divide-black">
                <PocionAll />
            </div>
            <IngredientesAll />
            <Footer />
        </div>
    );
}

export default App;
