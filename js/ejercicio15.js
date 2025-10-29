// FUNCION crearContador() QUE GUARDA UN VALOR INICIAL Y DEVUELVE FUNCIONES PARA incrementar() Y resetear()
function crearContador() {
  let contador = 0;

  return {
    incrementar: () => ++contador,
    resetear: () => (contador = 0)
  };
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio15() {
  const contador = crearContador();
  contador.incrementar();
  contador.incrementar();
  const antesReset = contador.incrementar();
  contador.resetear();

  document.getElementById("resultado15").innerText =
    "Contador antes de resetear: " + antesReset + "\nContador despues de resetear: " + contador.incrementar();
}
