import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import FormularioRegistro from "./pages/FormularioRegistro";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <FormularioRegistro /> */}
    </>
  );
}

export default App;
