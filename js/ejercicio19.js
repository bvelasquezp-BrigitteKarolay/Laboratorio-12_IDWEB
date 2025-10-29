// FUNCION mostrarDatos(nombre, edad, ...hobbies) QUE MUESTRA TODOS LOS DATOS
function mostrarDatos(nombre, edad, ...hobbies) {
  return (
    "Nombre: " + nombre +
    "\nEdad: " + edad +
    "\nHobbies: " + (hobbies.length > 0 ? hobbies.join(", ") : "Ninguno")
  );
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio19() {
  const nombre = prompt("Ingrese su nombre:");
  const edad = prompt("Ingrese su edad:");
  const hobbies = prompt("Ingrese sus hobbies separados por coma:");
  const resultado = mostrarDatos(nombre, edad, ...hobbies.split(","));
  document.getElementById("resultado19").innerText = resultado;
}
