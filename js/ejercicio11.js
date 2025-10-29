// FUNCION FLECHA esPositivo QUE INDICA SI UN NUMERO ES MAYOR A 0
const esPositivo = (num) => num > 0;

// FUNCION PARA EJECUTAR
function ejecutarEjercicio11() {
  const numero = parseFloat(prompt("Ingrese un numero:"));
  const resultado = esPositivo(numero);
  document.getElementById("resultado11").innerText =
    "¿El numero " + numero + " es positivo? " + resultado;
}
