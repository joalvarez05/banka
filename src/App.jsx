import { useState } from "react";
import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import FormularioRegistro from "@/pages/FormularioRegistro";
import Login from "@/pages/Login";
import Error404 from "@/pages/Error404.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registro" element={<FormularioRegistro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<Error404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
