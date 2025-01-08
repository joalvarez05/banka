import React from "react";
// import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <a
        href="/FormularioRegistro"
        className="button blanco link-underline-opacity-0 link-offset-2 link-underline w-equal"
      >
        Regístrate ahora
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </>
  );
}

export default Register;
