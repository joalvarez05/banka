import { useState } from "react";
import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import FormularioRegistro from "@/pages/FormularioRegistro";
import Login from "@/pages/Login";
import Error404 from "@/pages/Error404";

function App() {
  const location = useLocation();
  const rutasSinNavbar = ["/error404", "/registro"];
  const mostrarNavbar = !rutasSinNavbar.includes(location.pathname);

  return (
    <>
      {mostrarNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
