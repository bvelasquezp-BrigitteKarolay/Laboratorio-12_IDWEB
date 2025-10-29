// FUNCION esMultiplo(a, b) QUE INDICA SI a ES MULTIPLO DE b
function esMultiplo(a, b) {
  return a % b === 0;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio5() {
  const a = parseInt(prompt("Ingrese el primer numero (a):"));
  const b = parseInt(prompt("Ingrese el segundo numero (b):"));
  const resultado = esMultiplo(a, b);
  document.getElementById("resultado5").innerText =
    "¿" + a + " es multiplo de " + b + "? " + resultado;
}
