// FUNCION mayorDeTres(a, b, c) QUE DEVUELVE EL MAYOR NUMERO
function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio6() {
  const a = parseFloat(prompt("Ingrese el primer numero:"));
  const b = parseFloat(prompt("Ingrese el segundo numero:"));
  const c = parseFloat(prompt("Ingrese el tercer numero:"));
  const resultado = mayorDeTres(a, b, c);
  document.getElementById("resultado6").innerText =
    "El mayor numero es: " + resultado;
}
