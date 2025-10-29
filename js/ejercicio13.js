// FUNCION procesarTexto QUE TIENE UNA FUNCION INTERNA limpiarEspacios Y OTRA contarPalabras
function procesarTexto(texto) {
  // FUNCION INTERNA PARA ELIMINAR ESPACIOS EXTRAS
  function limpiarEspacios(cadena) {
    return cadena.trim().replace(/\s+/g, " ");
  }

  // FUNCION INTERNA PARA CONTAR PALABRAS
  function contarPalabras(cadena) {
    if (cadena === "") return 0;
    return cadena.split(" ").length;
  }

  const textoLimpio = limpiarEspacios(texto);
  const cantidadPalabras = contarPalabras(textoLimpio);

  return "Texto limpio: " + textoLimpio + "\nCantidad de palabras: " + cantidadPalabras;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio13() {
  const texto = prompt("Ingrese un texto con espacios:");
  const resultado = procesarTexto(texto);
  document.getElementById("resultado13").innerText = resultado;
}
