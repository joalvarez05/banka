import React, { useEffect, useState } from "react";
import "./convert.css";
import fetchRates from "@/utils/changeCoins";
import { cambioDolarAeuro } from "@/utils/changeCoins";

function Convert() {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cambio } = cambioDolarAeuro();
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
  // if (error)
  //   return <p>Error: en este momento no podemos procesar tu solicitud</p>;

  return (
    <div className="">
      <div className="tarjeta my-4 py-4 d-flex flex-column align-items-center ">
        <p className="btn-sm btn-secondary btn d-inline-block">
          1 USD = {cambio} EUR
        </p>

        <div>
          <label
            htmlFor="send"
            className="form-label d-block fw-bold fs-5 text-center"
          >
            Ingresa una cantidad a convertir
          </label>
          <input
            type="text"
            id="send"
            className="form-control d-inline px-2 "
            inputMode="decimal"
            placeholder="0"
            onChange={handleChange}
          />
        </div>
        <p className="my-3 fw-bold">
          {input} USD = {cambioDolarAeuro(input)} EUR
        </p>
      </div>
      {/* <h2>Tipos de Cambio </h2>
      {rates && (
        <ul>
          {Object.entries(rates.rates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Convert;
