import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; 
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
