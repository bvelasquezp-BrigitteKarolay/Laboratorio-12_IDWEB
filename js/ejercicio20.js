// FUNCION ejecutarOperacion(fn, x, y) DONDE fn ES UNA FUNCION ARITMETICA
function ejecutarOperacion(fn, x, y) {
  return fn(x, y);
}

// FUNCIONES ARITMETICAS PARA PROBAR
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "No se puede dividir entre cero");

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio20() {
  const x = parseFloat(prompt("Ingrese el primer numero:"));
  const y = parseFloat(prompt("Ingrese el segundo numero:"));
  const operacion = prompt("Ingrese la operacion (sumar, restar, multiplicar, dividir):");

  let resultado;
  switch (operacion) {
    case "sumar": resultado = ejecutarOperacion(sumar, x, y); break;
    case "restar": resultado = ejecutarOperacion(restar, x, y); break;
    case "multiplicar": resultado = ejecutarOperacion(multiplicar, x, y); break;
    case "dividir": resultado = ejecutarOperacion(dividir, x, y); break;
    default: resultado = "Operacion no valida.";
  }

  document.getElementById("resultado20").innerText = "Resultado: " + resultado;
}
