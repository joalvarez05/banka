export function formatDate() {
  const minYearAge = new Date().getFullYear() - 18;
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  return `${minYearAge}-${month}-${day}`;
}
export function currentDate() {
  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
