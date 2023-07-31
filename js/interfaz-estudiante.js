 // Obtener la tabla y las filas de datos
 const table = document.getElementById("tabla-notas");
 const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

 // Iterar sobre las filas de datos
 for (let i = 1; i < rows.length; i++) {
     const cells = rows[i].getElementsByTagName("td");

     // Obtener los valores de los periodos y calcular el promedio
     let sum = 0;
     for (let j = 1; j <= 4; j++) {
         const value = parseInt(cells[j].innerText);
         sum += value;
     }
     const average = sum / 4;

     // Insertar el promedio en la celda "definitiva"
     cells[5].innerText = average.toFixed(2); // Ajusta la cantidad de decimales según tus necesidades
 }
