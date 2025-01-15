import React from "react";
import "./navbar.css";
import logo from "@/assets/img/logo64.webp";
import BtnLogin from "@/components/btnLogin/BtnLogin";
import Register from "@/components/registro/Registro";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg morado1
 fixed-top"
      >
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo de banka" className="logo-brand" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item custom-dropdown">
                <a
                  className="nav-link custom-dropdown-toggle blanco"
                  href="#"
                  role="button"
                >
                  Billetera
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-arrow-down ms-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                  </span>
                </a>
                <ul className="custom-dropdown-menu morado1">
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1" href="#">
                      Cuenta digital
                    </a>
                  </li>
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1 " href="#">
                      Cuenta en dólares
                    </a>
                  </li>
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1" href="#">
                      Transferencias
                    </a>
                  </li>
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1" href="#">
                      Retiro de efectivo
                    </a>
                  </li>
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1" href="#">
                      Seguros y Garantías
                    </a>
                  </li>
                  <li className="custom-dropdown-item py-2">
                    <a className="dropdown-item verde1" href="#">
                      Tarjeta prepaga VISA
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link blanco" href="#">
                  Comunidad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link blanco" href="#">
                  Beneficios
                </a>
              </li>
            </ul>
            <div className="me-2 boton-sm">
              <Link to="/login">
                <BtnLogin />
              </Link>
              <Link to="/registro">
                <Register />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
