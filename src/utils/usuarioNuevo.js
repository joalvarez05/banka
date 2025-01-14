export default class UsuarioNuevo {
  constructor({
    nombre,
    email,
    contrasena,
    direccion,
    dni,
    fechaNacimiento,
    pais,
    sexo,
    generarCvu = () => {
      return Array.from(crypto.getRandomValues(new Uint8Array(22)))
        .map((byte) => byte % 10)
        .join("");
    },
  }) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.direccion = direccion;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.pais = pais;
    this.sexo = sexo;
    this.logeado = false;
    this.cvu = generarCvu();
  }
}
