// FUNCION RECURSIVA potencia(base, exponente) QUE CALCULA BASE ELEVADO A EXPONENTE SIN USAR ** NI Math.pow()
function potencia(base, exponente) {
  if (exponente === 0) return 1; 
  return base * potencia(base, exponente - 1); 
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio23() {
  const base = parseFloat(prompt("Ingrese la base:"));
  const exponente = parseInt(prompt("Ingrese el exponente:"));
  const resultado = potencia(base, exponente);
  document.getElementById("resultado23").innerText =
    base + " elevado a " + exponente + " es igual a " + resultado;
}
