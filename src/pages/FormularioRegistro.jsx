import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { formatDate } from "@/utils/formatDate";
import Swal from "sweetalert2";

function FormularioRegistro() {
  const [successRegister, setSuccessRegister] = useState(false);
  const maxDate = formatDate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;

  const onSubmit = (data) => {
    const usuariosExistentes =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuariosActualizados = [...usuariosExistentes, data];

    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    setSuccessRegister(!successRegister);
  };

  const validarNumInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  useEffect(() => {
    if (successRegister) {
      Swal.fire({
        title: "Welcome to Banka!",
        text: "Now you have to wait between 24 and 48 hours for us to enable your account.",
        icon: "success",
        confirmButtonText: "Home",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    }
  }, [successRegister]);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column my-4">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nombre" className="form-label">
              Nombre Completo
            </label>
            <input
              placeholder="Juan Perez"
              className="sans-serif form-control"
              type="text"
              id="nombre"
              {...register("nombre", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Tu nombre debe contener mínimo 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "Tu nombre es demasiado largo",
                },
              })}
            />
            {errors.nombre && (
              <p className="fst-italic">{errors.nombre.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              placeholder="JuanPerez@gmail.com"
              className="sans-serif form-control"
              type="email"
              id="email"
              {...register("email", {
                required: true,
                minLength: 3,
                maxLength: 254,
                pattern: {
                  value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
                  message: "Ingresa un correo valido",
                },
              })}
            />
          </div>
          <div>
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              className="form-control"
              type="password"
              id="contrasena"
              {...register("contrasena", {
                required: true,
                pattern: {
                  value: regexPassword,
                  message:
                    "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y un simbolo",
                },
              })}
            />
            {errors.contrasena && (
              <p className="fst-italic ">{errors.contrasena.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="direccion" className="form-label">
              Domicilio Fiscal
            </label>
            <input
              placeholder="Calle Broadway 777"
              className="sans-serif form-control"
              type="text"
              id="direccion"
              {...register("direccion", {
                required: true,
                minLength: {
                  value: 3,
                  message: "Tu dirección es demasiado corta",
                },
                maxLength: {
                  value: 50,
                  message: "Tu dirección no debe exceder los 50 caracteres",
                },
              })}
            />
            {errors.direccion && (
              <p className="fst-italic"> {errors.direccion.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              className="sans-serif form-control"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              id="dni"
              onInput={validarNumInput}
              {...register("dni", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Tu DNI es demasiado corto",
                },
                maxLength: {
                  value: 11,
                  message: "Tu DNI no debe contener más de 11 dígitos",
                },
              })}
            />
            {errors.dni && <p className="fst-italic"> {errors.dni.message}</p>}
          </div>
          <div>
            <label htmlFor="fechaNacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              className="sans-serif form-control"
              type="date"
              min="1930-01-01"
              max={maxDate}
              id="fechaNacimiento"
              {...register("fechaNacimiento", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="pais" className="form-label">
              País
            </label>
            <select
              className="form-control"
              id="pais"
              {...register("pais", { required: true })}
            >
              <option value="" disabled>
                -- Elegir un país --
              </option>
              <option value="ar">Argentina</option>
              <option value="br">Brasil</option>
              <option value="co">Colombia</option>
              <option value="ch">Chile</option>
              <option value="pa">Paraguay</option>
            </select>
          </div>
          <div>
            <label htmlFor="sexo" className="form-label">
              Sexo
            </label>
            <select
              className="form-control"
              name="sexo"
              id="sexo"
              {...register("sexo", { required: true })}
            >
              <option value="" disabled>
                -- Elegir sexo --
              </option>
              <option value="masculino">Femenino</option>
              <option value="femenino">Masculino</option>
            </select>
          </div>
          <button type="submit" className=" morado2 w-100 mt-4 button">
            Crear tu cuenta de Banka
          </button>
          <br />
          <hr />
          <span>Al crear una cuenta, aceptas las </span>
          <a href="#" title="Lee las Condiciones de Uso">
            Condiciones de Uso
          </a>
          <span> y el </span>
          <a href="#" title="Lee el Aviso de Privacidad">
            Aviso de Privacidad
          </a>
          <span> de Banka.</span>
        </form>
      </div>
    </>
  );
}

export default FormularioRegistro;
