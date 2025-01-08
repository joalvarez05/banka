import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import FormularioRegistro from "./pages/FormularioRegistro";

function App() {
  return (
    <>
      <Navbar />
      <FormularioRegistro />
    </>
  );
}

export default App;
