const tableTurns = document.getElementById('table-turns');

function mostrarTurnos(turnRender) {
  
    tableTurns.innerHTML = '';
  
    turnRender.forEach((turnTable, index) => {
  
      const posicion = String(index + 1).padStart(2, '0');
  
      tableTurns.innerHTML +=
        `<tr>
      <th scope="row">${posicion}</th>
      <td>
        ${turnTable.nombre}  
      </td>
      <td>${turnTable.dni}</td>
      <td>${turnTable.mail}</td>
      <td>${turnTable.hour} </td>
      <td>
        <button class="btn btn-danger" px-1" onclick="borrarPais(${turnTable.id})"> <i class="fa-solid fa-trash"> </i></button>
        <button class="btn btn-success" px-1" onclick="editarPais(${turnTable.id})"> <i class="fa-solid fa-pen-to-square"></i> </i></button>
      </td>
      </tr>`;
  
    });
  
  }

  mostrarTurnos(turns);