// FUNCION areaRectangulo(base, altura) QUE RETORNA EL AREA
function areaRectangulo(base, altura) {
  return base * altura;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio4() {
  const base = parseFloat(prompt("Ingrese la base del rectangulo:"));
  const altura = parseFloat(prompt("Ingrese la altura del rectangulo:"));
  const resultado = areaRectangulo(base, altura);
  document.getElementById("resultado4").innerText =
    "El area del rectangulo es: " + resultado;
}
