// FUNCION operacionesMatematicas() QUE DEFINE sumar, restar, multiplicar Y dividir USANDO CLOSURES Y FUNCIONES FLECHA
function operacionesMatematicas() {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => b !== 0 ? a / b : "No se puede dividir entre cero";

  return { sumar, restar, multiplicar, dividir };
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio14() {
  const a = parseFloat(prompt("Ingrese el primer numero:"));
  const b = parseFloat(prompt("Ingrese el segundo numero:"));
  const op = operacionesMatematicas();

  const resultado =
    "Suma: " + op.sumar(a, b) + "\n" +
    "Resta: " + op.restar(a, b) + "\n" +
    "Multiplicacion: " + op.multiplicar(a, b) + "\n" +
    "Division: " + op.dividir(a, b);

  document.getElementById("resultado14").innerText = resultado;
}
