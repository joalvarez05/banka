import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import FormularioRegistro from "./pages/FormularioRegistro";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import FormularioRegistro from "./pages/FormularioRegistro";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registro" element={ <FormularioRegistro/>} />
      </Routes>
    </>
  );
}

export default App;
