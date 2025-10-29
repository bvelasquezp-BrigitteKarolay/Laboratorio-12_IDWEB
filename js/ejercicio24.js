// FUNCION crearSecuencia(inicio, paso) QUE DEVUELVE OTRA FUNCION PARA GENERAR UNA SECUENCIA ARITMETICA
function crearSecuencia(inicio, paso) {
  let actual = inicio;
  return function() {
    const valor = actual;
    actual += paso;
    return valor;
  };
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio24() {
  const inicio = parseFloat(prompt("Ingrese el numero inicial:"));
  const paso = parseFloat(prompt("Ingrese el valor del paso:"));
  const secuencia = crearSecuencia(inicio, paso);

  let resultado = "Secuencia generada:\n";
  for (let i = 0; i < 5; i++) {
    resultado += secuencia() + " ";
  }

  document.getElementById("resultado24").innerText = resultado;
}
