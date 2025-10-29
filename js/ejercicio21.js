// FUNCION filtrarArreglo(arr, callback) QUE DEVUELVE LOS ELEMENTOS QUE CUMPLAN LA CONDICION DEL CALLBACK
function filtrarArreglo(arr, callback) {
  return arr.filter(callback);
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio21() {
  const entrada = prompt("Ingrese numeros separados por coma:");
  const numeros = entrada.split(",").map(num => parseFloat(num));
  const mayoresA5 = filtrarArreglo(numeros, num => num > 5);
  document.getElementById("resultado21").innerText =
    "Numeros mayores a 5: " + mayoresA5.join(", ");
}
