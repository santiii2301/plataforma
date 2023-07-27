function agregarFila() {
    var table = document.getElementById('miTabla').getElementsByTagName('tbody')[0];
    var numRows = table.rows.length;

    if (numRows >= 5) {
      alert('Se ha alcanzado el límite máximo de filas (5).');
      return;
    }

    var newRow = table.insertRow(numRows);
    var columns = 4; // Cantidad de columnas en la tabla

    for (var i = 0; i < columns; i++) {
      var cell = newRow.insertCell(i);
      if (i === 0) {
        cell.innerHTML = '<input type="text" name="actividad[]" />';
      } else if (i === 1) {
        cell.innerHTML = '<input type="number" name="nota[]" />';
      } else if (i === 2) {
        cell.innerHTML = `
          <select name="porcentaje[]">
          <option value="0">0%</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="60">60%</option>
          <option value="70">70%</option>
          <option value="80">80%</option>
          <option value="90">90%</option>
          <option value="100">100%</option>
          </select>
        `;
      } else if (i === 3) {
        cell.innerHTML = '<input type="button" class="botoncito botonc2" onclick="eliminarFila(this)" value="X">';
      }
    }
  }
  function eliminarFila(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }



