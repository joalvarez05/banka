import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Convert from "@/components/conversor/Convert.jsx";
import lockLarge from "@/assets/img/lockLarge.webp";
import inversiones from "@/assets/img/inversiones.svg";
import rendimiento35 from "@/assets/img/rendimiento35.webp";
import creditCard from "@/assets/img/creditCardsm.jpg";
import contactless from "@/assets/img/contactless.jpg";
import Footer from "@/components/footer/Footer";
import argentina32 from "@/assets/img/ars32.png";
import brasil from "@/assets/img/brasil32.png";
import chile from "@/assets/img/chile32.png";
import peru from "@/assets/img/peru32.png";
import colombia from "@/assets/img/colombia32.png";
function Home() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const isInView1 = useInView(sectionRef1, { once: true });
  const isInView2 = useInView(sectionRef2, { once: true });

  return (
    <>
      <div className="my-5">
        <section className="py-5 morado0" id="sectionOne">
          <div className="container">
            <div className="row justify-content-center align-items-center py-5">
              <div className="col-12 col-md-6 col-lg-6">
                <h1 className="fw-bold fs-1 w-75">
                  El banco del que te vas a enamorar
                </h1>
                <h2 className="lead my-3 lh-base">
                  Gestiona tu dinero de forma sencilla y transparente. Ahorra,
                  invierte y controla tus finanzas desde una app cómoda e
                  intuitiva.
                </h2>
                <a href="#" className="btn my-3 btn-md btn-success ">
                  Abrir una cuenta gratuita
                </a>
              </div>

              <div className="col-12 col-md-6 col-lg-6 py-4">
                <Convert />
              </div>
            </div>
          </div>
        </section>

        <motion.div
          ref={sectionRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <section className="py-5 container-fluid">
            <div className="justify-content-center align-items-center row">
              <div className="col-12 col-md-6 col-lg-6 position-relative">
                <img src={inversiones} alt="slider" className="w-75" />
                <img
                  src={rendimiento35}
                  alt="rendimiento del 35%"
                  className="above-img"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h2 className="fw-bold fs-1 lh-base">
                  Descubre un mundo de oportunidades de inversión
                </h2>
                <p className="lead ">
                  Empieza a invertir en tu futuro desde solo
                  <span className="text-primary-emphasis"> $1000 Ars</span>,
                  directamente desde tu app Banka. Invierte en acciones y{" "}
                  <a
                    href="https://www.modocripto.es/blog/"
                    className="ink-offset-2 link-underline link-underline-opacity-0 verde2"
                    target="_blank"
                  >
                    criptomonedas****
                  </a>
                  . Y si buscas una forma de invertir todos los meses sin tener
                  que mover un dedo, puedes configurar un plan de inversión
                  automatizado con solo un par de clics y generar rendimientos
                  ¡Automaticamente!.
                </p>
                <div className="text-center mt-5">
                  <a href="https://google.com" className="btn btn-lg morado2">
                    Saber más <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          ref={sectionRef2}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <section className="py-5 background-section container-fluid">
            <article className="row justify-content-center align-items-center ">
              <div className="col-12 col-md-6 col-lg-6 my-4">
                <h2 className="fw-bold ms-2 mt-2 mb-4">
                  Decepcionar a los ladrones
                </h2>
                <p className="lead ms-2">
                  Cada trimestre, nuestros clientes confían en nosotros para
                  transferir más de 70.000 millones de pesos de su dinero. Estas
                  son algunas de las formas importantes en que los protegemos.
                </p>
                <a href="#" className="btn btn-md py-2 morado2 mt-4">
                  Cómo mantenemos su dinero seguro
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-6 my-4 d-flex justify-content-center align-items-center">
                <img
                  src={lockLarge}
                  alt="candado"
                  loading="lazy"
                  className="img-fluid w-50 "
                />
              </div>
              <div className="container row">
                <div className="col-12 col-md-12 col-lg-4 my-4 ">
                  <div className="my-3">
                    <i className="bi bi-lock fs-2 icono"></i>
                  </div>
                  <p className="lead">
                    Nuestros equipos dedicados a la seguridad y el fraude
                    trabajan para mantener su dinero seguro.
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 my-4 ">
                  <div className="my-3">
                    <i className="bi bi-shield-check fs-2 icono"></i>
                  </div>
                  <p className="lead">
                    Utilizamos autenticación de dos factores para proteger su
                    cuenta.
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 my-4 ">
                  <div className="my-3">
                    <i className="bi bi-bank2 fs-2 icono"></i>
                  </div>
                  <p className="lead">
                    Guardamos su dinero en instituciones financieras
                    establecidas.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </motion.div>

        <section className="py-5 container-fluid bg-success">
          <div className="row gap-3 d-flex justify-content-center mx-2">
            <article className="col-12 col-md-6 col-lg-3 text-center position-relative tarjetas rounded-5">
              <div className="py-2">
                <img
                  src={creditCard}
                  alt="credit card"
                  loading="lazy"
                  className="img-fluid rounded-5 img-card"
                />
              </div>
              <div className="d-flex justify-content-center overlay">
                <div className="card">
                  <div className="card__info">
                    <div className="card__logo text-end text-dark">VISA</div>

                    <div className="card__chip">
                      <svg
                        className="card__chip-lines"
                        role="img"
                        loading="lazy"
                        width="20px"
                        height="20px"
                        viewBox="0 0 100 100"
                        aria-label="Chip"
                      >
                        <g opacity="0.8">
                          <polyline
                            points="0,50 35,50"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="0,20 20,20 35,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="50,0 50,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="65,35 80,20 100,20"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="100,50 65,50"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="35,35 65,35 65,65 35,65 35,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="0,80 20,80 35,65"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="50,100 50,65"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                          <polyline
                            points="65,65 80,80 100,80"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                          ></polyline>
                        </g>
                      </svg>
                      <div className="card__chip-texture"></div>
                    </div>
                    <div className="card__type text-dark">Debit</div>
                    <div className="card__number">
                      <span className="card__digit-group text-dark">xxxx</span>
                      <span className="card__digit-group text-dark">xxxx</span>
                      <span className="card__digit-group text-dark">xxxx</span>
                      <span className="card__digit-group text-dark">xxxx</span>
                    </div>
                    <div
                      className="card__valid-thru text-dark"
                      aria-label="Valid thru"
                    >
                      Valid<br></br>thru
                    </div>
                    <div className="card__exp-date">
                      <time dateTime="2038-01">01/29</time>
                    </div>
                    <div className="card__name " aria-label="Dee Stroyer">
                      Juan.c.gonzález
                    </div>
                    <div
                      className="card__vendor"
                      role="img"
                      loading="lazy"
                      aria-labelledby="card-vendor"
                    >
                      <span id="card-vendor" className="card__vendor-sr">
                        VISA
                      </span>
                    </div>
                    <div className="card__texture"></div>
                  </div>
                </div>
              </div>
              <div className="pt-2 pb-4 negro">
                <h5>Tarjetas</h5>
                <p className="fw-bold h3">Gasta donde y como quieras!</p>
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-3 text-center position-relative tarjetas rounded-5">
              <div className="py-2">
                <img
                  src={contactless}
                  alt="contactless mobile"
                  className="img-fluid rounded-5 img-card"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 pb-3 negro">
                <h5>En todas tus wallets</h5>
                <p className="fw-bold h3">Permitido olvidarse la billetera</p>
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-3 text-center position-relative tarjetas rounded-5">
              <div className="py-2">
                <img
                  src={contactless}
                  alt="contactless mobile"
                  className="img-fluid rounded-5 img-card"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 pb-3 negro">
                <h5>En todas tus wallets</h5>
                <p className="fw-bold h3">Permitido olvidarse la billetera</p>
              </div>
            </article>
          </div>
        </section>
      </div>
      <h3 className="text-center">
        Países en los que opera <span className="verde1"> Banka </span>
      </h3>
      <div className="d-flex justify-content-center gap-5 py-3">
        <img src={argentina32} alt="Argentina" className="" />
        <img src={brasil} alt="Brasil" className="" />
        <img src={chile} alt="Chile" className="" />
        <img src={peru} alt="Peru" className="" />
        <img src={colombia} alt="Colombia" className="" />
      </div>
      <Footer />
      <div className="fixed-arrow">
        <a
          href="#sectionOne"
          className="bi bi-arrow-up text-black fs-3 a-rst"
        ></a>
      </div>
    </>
  );
}

export default Home;
