// FUNCION descargarArchivo(url, callback) QUE MUESTRA "DESCARGANDO..." Y LUEGO "DESCARGA COMPLETA"
function descargarArchivo(url, callback) {
  console.log("Descargando...");
  setTimeout(() => {
    callback("Descarga completa de " + url);
  }, 2000);
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio22() {
  const url = prompt("Ingrese la URL del archivo:");
  document.getElementById("resultado22").innerText = "Descargando...";
  descargarArchivo(url, mensaje => {
    document.getElementById("resultado22").innerText = mensaje;
  });
}
