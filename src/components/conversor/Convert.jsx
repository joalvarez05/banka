import React, { useEffect, useState } from "react";
import "./convert.css";
import fetchRates from "@/utils/changeCoins.js";
import currentDate from "@/utils/formatDate.js";

function Convert() {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    fetchRates(setRates, setError, setLoading);
  }, []);

  if (loading)
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  if (error)
    return <p className="negro lead">Error: en este momento no podemos procesar tu solicitud</p>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="tarjeta my-4 py-4 ps-4 d-flex flex-column align-items-center justify-content-center col-12 col-md-6 col-lg-6">
          <p className="btn-sm btn-secondary btn d-inline-block">
            1 USD = {rates.EUR} EUR
          </p>

          <div className="mx-4">
            <label
              htmlFor="send"
              className="form-label d-block fw-bold fs-5 text-center negro"
            >
              Ingresa una cantidad a convertir
            </label>
            <input
              type="text"
              id="send"
              className="form-control d-inline px-2 opacity-75"
              inputMode="decimal"
              placeholder="0"
              onChange={handleChange}
            />
          </div>
          <p className="my-3 fw-bold negro">
            {input} USD = {input * rates.EUR} EUR
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center pt-4 ps-4">
          <h4 className="text-center">Tipo de Cambio al {currentDate()} </h4>
          {rates && (
            <table className="table table-bordered opacity-75">
              <thead className="text-center sans-serif ">
                <tr>
                  <th>Moneda</th>
                  <th>1 USD</th>
                </tr>
              </thead>
              <tbody className="text-center sans-serif fw-bold">
                {Object.entries(rates).map(([currency, rate]) => (
                  <tr key={currency}>
                    <td>{currency}</td>
                    <td>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Convert;
