// FUNCION FLECHA componerTransformaciones QUE RECIBE DOS FUNCIONES FLECHA DE TEXTO Y DEVUELVE UNA NUEVA FUNCION
const aMayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";
const componerTransformaciones = (f1, f2) => (texto) => f2(f1(texto));

// FUNCION PARA EJECUTAR
function ejecutarEjercicio12() {
  const texto = prompt("Ingrese un texto:");
  const transformar = componerTransformaciones(aMayusculas, agregarSigno);
  const resultado = transformar(texto);
  document.getElementById("resultado12").innerText =
    "Resultado de la transformacion: " + resultado;
}
