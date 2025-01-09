import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Convert from "@/components/conversor/Convert.jsx";
import lockLarge from "@/assets/img/lockLarge.webp";
import inversiones from "@/assets/img/inversiones.svg";
import rendimiento35 from "@/assets/img/rendimiento35.webp";
function Home() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const isInView1 = useInView(sectionRef1, { once: true });
  const isInView2 = useInView(sectionRef2, { once: true });

  return (
    <>
      <div className="my-5">
        <section className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="fw-bold fs-1 w-75">
                El banco del que te vas a enamorar
              </h1>
              <h2 className="lead my-3 lh-base">
                Gestiona tu dinero de forma sencilla y transparente. Ahorra,
                invierte y controla tus finanzas desde una app cómoda e
                intuitiva.
              </h2>
              <a href="#" className="btn my-3 btn-md morado1 ">
                Abrir una cuenta gratuita
              </a>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <Convert />
            </div>
          </div>
        </section>

        <motion.div
          ref={sectionRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
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
                    className="ink-offset-2 link-underline link-underline-opacity-0 verde1"
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
                  <a href="https://google.com" className="btn btn-lg morado1">
                    Saber más <i className="bi bi-chevron-right "></i>
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
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <section className="py-5 background-section container-fluid">
            <article className="row justify-content-center align-items-center ">
              <div className="col-12 col-md-6 col-lg-6 my-4">
                <h2 className="fw-bold ms-2 mt-2 mb-4">
                  Decepcionar a los ladrones
                </h2>
                <p className="lead ms-2">
                  Cada trimestre, nuestros clientes confían en nosotros para
                  transferir más de 30 000 millones de libras esterlinas de su
                  dinero. Estas son algunas de las formas importantes en que los
                  protegemos.
                </p>
                <a href="#" className="btn btn-md py-2 morado1 mt-4">
                  {" "}
                  Cómo mantenemos su dinero seguro
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-6 my-4 d-flex justify-content-center align-items-center">
                <img
                  src={lockLarge}
                  alt="candado"
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
      </div>
    </>
  );
}

export default Home;
