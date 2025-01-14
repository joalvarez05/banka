export function formatDate() {
  const minYearAge = new Date().getFullYear() - 18;
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  return `${minYearAge}-${month}-${day}`;
}
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function currentDate() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate().toString().padStart(2, "0");
  const fechaActual = `${day} de ${meses[month]} de ${year}`;
  return fechaActual;
}
