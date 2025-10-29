// FUNCION EXPRESADA promedio QUE RECIBE 3 NOTAS Y RETORNA SU PROMEDIO
const promedio = function(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
};

// FUNCION PARA EJECUTAR
function ejecutarEjercicio7() {
  const n1 = parseFloat(prompt("Ingrese la primera nota:"));
  const n2 = parseFloat(prompt("Ingrese la segunda nota:"));
  const n3 = parseFloat(prompt("Ingrese la tercera nota:"));
  const resultado = promedio(n1, n2, n3);
  document.getElementById("resultado7").innerText =
    "El promedio de las notas es: " + resultado.toFixed(2);
}
