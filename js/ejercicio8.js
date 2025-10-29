// FUNCION EXPRESADA convertirAMayusculas QUE RECIBE UN TEXTO Y LO DEVUELVE EN MAYUSCULAS
const convertirAMayusculas = function(texto) {
  return texto.toUpperCase();
};

// FUNCION PARA EJECUTAR
function ejecutarEjercicio8() {
  const texto = prompt("Ingrese un texto:");
  const resultado = convertirAMayusculas(texto);
  document.getElementById("resultado8").innerText =
    "Texto en mayusculas: " + resultado;
}
