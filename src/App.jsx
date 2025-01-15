import { useState } from "react";
import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import FormularioRegistro from "@/pages/FormularioRegistro";
import Login from "@/pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registro" element={<FormularioRegistro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
