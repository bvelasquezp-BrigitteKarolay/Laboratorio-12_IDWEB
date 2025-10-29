// FUNCION media(...numeros) QUE CALCULA EL PROMEDIO USANDO EL OPERADOR REST
function media(...numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio18() {
  const entrada = prompt("Ingrese numeros separados por coma:");
  const numeros = entrada.split(",").map(num => parseFloat(num));
  const resultado = media(...numeros);
  document.getElementById("resultado18").innerText = "Promedio: " + resultado;
}
