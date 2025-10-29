// FUNCION acumulador(valorInicial) QUE DEVUELVE UNA FUNCION PARA SUMAR NUEVOS VALORES
function acumulador(valorInicial) {
  let total = valorInicial;
  return function(nuevoValor) {
    total += nuevoValor;
    return total;
  };
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio16() {
  const valorInicial = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));
  const acumular = acumulador(valorInicial);
  const valor1 = parseFloat(prompt("Ingrese un valor para sumar:"));
  const valor2 = parseFloat(prompt("Ingrese otro valor para sumar:"));

  const resultado = acumular(valor1);
  const resultadoFinal = acumular(valor2);

  document.getElementById("resultado16").innerText =
    "Total luego de sumar los valores: " + resultadoFinal;
}
