import React from "react";
import { Link } from "react-router-dom";
import walletTravel from "@/assets/img/wallet-travel.webp";
import { Helmet } from "react-helmet";
function Error404() {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Error 404 - Página no encontrada</title>
      </Helmet>
      <header>
        <div className="text-center my-5">
          <img
            src={walletTravel}
            className="error_logo"
            alt="logo de la marca"
            loading="lazy"
          />
        </div>
      </header>
      <div className="container">
        <div className="error_container">
          <div className="error_code">
            <p>4</p>
            <p>
              <i className="bi bi-coin verde1"></i>
            </p>
            <p>4</p>
          </div>
          <div className="error_title">Página no encontrada</div>
          <div className="error_description">
            Parece que no podemos encontrar esa página. Puede que se haya
            eliminado.
          </div>
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-lg morado2 mt-4">Ir al Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
