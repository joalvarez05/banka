import React from "react";
import "./footer.css";
import logo from "@/assets/img/logo64.webp";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlush">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿Es Banka un banco?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlush1"
              >
                <div className="accordion-body">
                  Banka es un banco online con licencia bancaria Latinoamericana
                  que actualmente opera en más de 5 países de LATAM. Banka está
                  supervisado por la Autoridad Reguladora de los Mercados
                  Financieros y cumple con todos los requisitos regulatorios
                  latinoamericanos. Los fondos de nuestros clientes están
                  garantizados hasta 10 000 USD por el Instituto para la
                  Protección al Ahorro Bancario (IPAB). En funcionamiento desde
                  el año 2022, a día de hoy cuenta con más de 1 millon de
                  clientes.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo1"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  ¿Es Banka seguro?
                </button>
              </h2>
              <div
                id="flush-collapseTwo1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlush1"
              >
                <div className="accordion-body">
                  Como banco online con licencia, Banka está supervisado por la
                  Autoridad Reguladora de los Mercados Financieros y cumple con
                  todos los requisitos regulatorios latinoamericanos. Los fondos
                  de nuestros clientes están garantizados hasta 10 000 USD por
                  el Instituto para la Protección al Ahorro Bancario (IPAB).
                  Además, la app de Banka cuenta con diferentes métodos de
                  seguridad que garantizan la seguridad de las cuentas y los
                  datos bancarios de los clientes.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  ¿Esta diseñada para viajar?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlush"
              >
                <div className="accordion-body">
                  Banka esta diseñada para viajar y pagar sin comisiones ni
                  cambios de divisas en los{" "}
                  <a href="#" className="verde1">
                    países que opera
                  </a>{" "}
                  .
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  ¿Cuanto cuesta abrirse una cuenta Banka?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlush"
              >
                <div className="accordion-body">
                  Banka es una cuenta bancaria digital gratuita: no hay
                  comisiones de mantenimiento de cuenta ni importes mínimos de
                  depósito. Las cuentas premium aun estan en desarrollo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="sm-none">
        <div className="py-3"></div>

        <section className="bg-color5 py-4">
          <article className="container-fluid">
            <div className="row text-center align-items-center">
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
                <a href="#">
                  <img
                    src={logo}
                    alt="logo de la empresa"
                    className="img-footer"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-start flex-column align-items-start">
                <ul className="list-unstyled">
                  <li className="display-inline text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="bi bi-instagram link-footer"
                    >
                      {" "}
                      Instagram
                    </a>
                  </li>
                  <li className="display-inline text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="bi bi-youtube link-footer"
                    >
                      {" "}
                      Youtube
                    </a>
                  </li>
                  <li className="display-inline text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="bi bi-twitter-x link-footer"
                    >
                      {" "}
                      X
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-start flex-column align-items-start">
                <h5 className="mb-3 fs-5 verde1">Empresa</h5>
                <ul className="list-unstyled">
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="¿Qué es Banka?"
                    >
                      ¿Qué es Banka?
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Equipo directivo"
                    >
                      Equipo Directivo
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Bolsa de Trabajo"
                    >
                      Bolsa de Trabajo
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Sala de Prensa"
                    >
                      Sala de Prensa
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Partners"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-start flex-column align-items-start">
                <h5 className="mb-3 fs-5 verde1 ">Ayuda</h5>

                <ul className="list-unstyled">
                  <li className="text-start lh-lg">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Preguntas frecuentes"
                    >
                      Atención al Cliente
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Sobre nosotros"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a href="#" className="link-footer fs-6" title="Contacto">
                      Centro de Ayuda
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Botón de arrepentimiento"
                    >
                      Seguridad
                    </a>
                  </li>
                  <li className="text-start lh-lg">
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Botón de arrepentimiento"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
        <section className="bg-color4 pt-4 pb-2">
          <div className="container-fluid text-center">
            <div className="row align-items-center">
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
                <a
                  href="./assets/pages/error-404.html"
                  className="nav-link1 fs-6"
                >
                  Términos y Condiciones
                </a>
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
                <a
                  href="./assets/pages/error-404.html"
                  className="nav-link1 fs-6"
                >
                  Configuración de cookies
                </a>
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
                <a
                  href="./assets/pages/error-404.html"
                  className="nav-link1 fs-6"
                >
                  Politicas de privacidad
                </a>
              </div>
              <div className="col-12 col-sm-3 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                <p className="fw-bold espacio">Banka, 2025</p>
                <span className="mx-2"> &copy;</span>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <footer className="lg-none">
        <div className="accordion accordion-flush" id="accordionOne">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Empresa
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionOne"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li className="text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Equipo directivo"
                    >
                      Equipo Directivo
                    </a>
                  </li>
                  <li className="text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Bolsa de Trabajo"
                    >
                      Bolsa de Trabajo
                    </a>
                  </li>
                  <li className="text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Sala de Prensa"
                    >
                      Sala de Prensa
                    </a>
                  </li>
                  <li className="text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Partners"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Ayuda
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li className="text-start">
                    <a
                      href="./assets/pages/error-404.html"
                      className="link-footer fs-6"
                      title="Preguntas frecuentes"
                    >
                      Atención al Cliente
                    </a>
                  </li>
                  <li className="text-start">
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Sobre nosotros"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li className="text-start">
                    <a href="#" className="link-footer fs-6" title="Contacto">
                      Centro de Ayuda
                    </a>
                  </li>
                  <li className="text-start">
                    <a
                      href="#"
                      className="link-footer fs-6"
                      title="Botón de arrepentimiento"
                    >
                      Seguridad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush" id="accordionFlush">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseRedes"
                  aria-expanded="false"
                  aria-controls="flush-collapseRedes"
                >
                  Redes sociales
                </button>
              </h2>
              <div
                id="flush-collapseRedes"
                className="accordion-collapse collapse d-flex justify-content-center align-items-center"
                data-bs-parent="#accordionFlush"
              >
                <div className="accordion-body">
                  <ul className=" d-flex gap-4 list-unstyled">
                    <li className="display-inline">
                      <a
                        href="./assets/pages/error-404.html"
                        className="bi bi-instagram link-footer"
                      ></a>
                    </li>
                    <li className="display-inline">
                      <a
                        href="./assets/pages/error-404.html"
                        className="bi bi-youtube link-footer"
                      ></a>
                    </li>
                    <li className="display-inline">
                      <a
                        href="./assets/pages/error-404.html"
                        className="bi bi-twitter-x link-footer"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <article className="pb-2 bg-footer-dev">
        <a
          href="https://www.linkedin.com/in/joalvarezdominguez/"
          className="mt-2 brand-dev"
          target="_blank"
        >
          By JotaDEV
        </a>
      </article>
    </>
  );
}

export default Footer;
