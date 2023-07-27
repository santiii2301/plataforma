function redireccionar1(){
    let selectElement = document.getElementById("notas1");
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    window.location.href =  selectedOption;
}
function redireccionar2(){
  let selectElement = document.getElementById("notas2");
  let selectedOption = selectElement.options[selectElement.selectedIndex].value;
  window.location.href =  selectedOption;
}
// Obtener todas las filas de la tabla, excluyendo la fila de encabezado
var filas = document.querySelectorAll("table tbody tr");

// Recorrer cada fila de la tabla
for (var i = 0; i < filas.length; i++) {
  var fila = filas[i];

  // Obtener la celda de las notas y el elemento ul que contiene las notas
  var celdaNotas = fila.querySelector("td ul");
  var notas = celdaNotas.getElementsByTagName("li");

  // Calcular el promedio de las notas
  var total = 0;
  for (var j = 0; j < notas.length; j++) {
    total += parseInt(notas[j].textContent);
  }
  var promedio = total / notas.length;

  // Obtener la celda del promedio y actualizar su contenido
  var celdaPromedio = fila.querySelector("td[id^='promadio']");
  celdaPromedio.textContent = promedio.toFixed(2);
}
