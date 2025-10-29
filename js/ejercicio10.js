// FUNCION FLECHA saludo QUE RECIBE UN NOMBRE Y DEVUELVE UN MENSAJE
const saludo = (nombre) => "Hola " + nombre + ", bienvenido!";

// FUNCION PARA EJECUTAR
function ejecutarEjercicio10() {
  const nombre = prompt("Ingrese su nombre:");
  const mensaje = saludo(nombre);
  document.getElementById("resultado10").innerText = mensaje;
}
