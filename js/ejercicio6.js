// FUNCION mayorDeTres(a, b, c) QUE DEVUELVE EL MAYOR NUMERO
function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

// LLAMADA A LA FUNCION
const resultado6 = mayorDeTres(12, 20, 7);
document.getElementById("resultado6").innerText = "El mayor de (12, 20, 7) es: " + resultado6;
