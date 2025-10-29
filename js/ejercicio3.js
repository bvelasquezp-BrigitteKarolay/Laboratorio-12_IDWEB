// FUNCION esPar(num) QUE DEVUELVE TRUE SI EL NUMERO ES PAR
function esPar(num) {
  return num % 2 === 0;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio3() {
  const numero = parseInt(prompt("Ingrese un numero para verificar si es par:"));
  const resultado = esPar(numero);
  document.getElementById("resultado3").innerText =
    "¿El numero " + numero + " es par? " + resultado;
}
