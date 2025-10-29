// FUNCION saludo(nombre = "Amigo") QUE DEVUELVE UN MENSAJE
function saludo(nombre = "Amigo") {
  return "Hola " + nombre + ", espero que tengas un buen dia.";
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio17() {
  const nombre = prompt("Ingrese su nombre (o deje vacio):");
  const resultado = nombre ? saludo(nombre) : saludo();
  document.getElementById("resultado17").innerText = resultado;
}
