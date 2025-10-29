// FUNCION EXPRESADA calcularDescuento(precio, porcentaje)
const calcularDescuento = function(precio, porcentaje) {
  return precio - (precio * (porcentaje / 100));
};

// FUNCION PARA EJECUTAR
function ejecutarEjercicio9() {
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  const porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
  const resultado = calcularDescuento(precio, porcentaje);
  document.getElementById("resultado9").innerText =
    "El precio final con descuento es: " + resultado.toFixed(2);
}
