import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { regexPassword } from "@/utils/regexPw";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const [usuarios, setUsuarios] = useState(() => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    const usuario = usuarios.find(
      (user) => user.email === data.email && user.contrasena === data.contrasena
    );

    if (usuario) {
      setError("");
      console.log(usuario);

      // Actualizar el estado de usuarios
      const actualizarUsuario = usuarios.map((user) => {
        if (user.email === usuario.email) {
          return { ...user, logeado: !user.logeado }; // Ponerlo como logeado
        }
        return user;
      });

      // Guardar el arreglo actualizado en el localStorage
      localStorage.setItem("usuarios", JSON.stringify(actualizarUsuario));

      setUsuarios(actualizarUsuario); // Actualizar el estado local

      navigate(`/`);
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <>
      <div className="pad-register ">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="text-center h1 fw-bold">Mi Cuenta</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to="/"
                  className="text-center link-offset-2 link-underline link-underline-opacity-0"
                >
                  <span className="verde1">Home</span>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Mi Cuenta
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <div className=" p-2 row">
            <div className="col-12 col-md-6 col-lg-6 px-3">
              <h2 className="fw-bold h3 mb-4 text-center">ACCESO</h2>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Nombre de usuario o dirección de correo electronico{" "}
                    <span className="text-danger"> * </span>{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    {...register("email", { required: true })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="email" className="form-text">
                    Nunca compartiremos tu email con nadie.{" "}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label">
                    Contraseña <span className="text-danger"> * </span>{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    {...register("contrasena", {
                      required: true,
                      pattern: {
                        value: regexPassword,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y un símbolo",
                      },
                    })}
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                  {errors.contrasena && (
                    <p className="fst-italic">{errors.contrasena.message}</p>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check1"
                  />
                  <label className="form-check-label" htmlFor="Check1">
                    Recordarme
                  </label>
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <button type="submit" className="btn morado1 w-100">
                    Iniciar Sesión
                  </button>
                </div>
                {error && <p className="fst-italic"> {error}</p>}
              </form>
              <div className="mt-3">
                <a
                  href="#"
                  className="verde2 link-offset-2 link-underline link-underline-opacity-0"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 borde-lg px-3 my-5">
              <h2 className="fw-bold h3 mb-4 text-center">REGISTRARME</h2>
              <p className="h5 text-center">
                Al registrarse en este sitio podrá acceder a su banco digital
                que lo acompañara en los distintos viajes que realice por los
                países en los que operamos{" "}
                <a
                  href="#"
                  className="verde2 link-offset-2 link-underline link-underline-opacity-0"
                >
                  Ver Países
                </a>
                . Solo tiene que rellenar los campos que aparecen a continuación
                y en un abrir y cerrar de ojos le crearemos una nueva cuenta.
                Solo le solicitaremos la información necesaria para que el
                proceso de sea más rápido y sencillo.
              </p>
              <div className="py-3 text-center">
                <Link to="/registro">
                  <button className="btn btn-secondary">Registrarme</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
