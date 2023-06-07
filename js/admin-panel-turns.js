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
      <td>${turnTable.date} </td>
      <td>${turnTable.hour} </td>
      <td>
        <button class="btn btn-success" px-1" onclick="editarTurno(${turnTable.id})"> <i class="fa-solid fa-pen-to-square"></i> </i></button>
        <button class="btn btn-danger" px-1" onclick="borrarTurnos(${turnTable.id})"> <i class="fa-solid fa-trash"> </i></button>
      </td>
      </tr>`;
  
    });
  
  }

  mostrarTurnos(turns);

  function borrarTurnos(idTurnos) {
  
    const idTurnoTable = turns.findIndex(turn => turn.id === idTurnos);

    if (idTurnoTable === -1) return swal('Error', 'El pais no se pudo borrar', 'error');
  
    turns.splice(idTurnoTable, 1);
  
    localStorage.setItem('turnos', JSON.stringify(turns));
  
    mostrarTurnos(turns);
  
  }

  
