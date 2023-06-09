const tableTurns = document.getElementById('table-turns');
let editTurns;

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
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editarTurno(${turnTable.id})"> <i class="fa-solid fa-pen-to-square"></i> </i></button>
        <button class="btn btn-danger" onclick="borrarTurnos(${turnTable.id})"> <i class="fa-solid fa-trash"> </i></button>
      </td>
      </tr>`;
  
    });
  
  }

  mostrarTurnos(turns);

  function borrarTurnos(idTurnos) {
    const indexTurno = turns.findIndex(turn => turn.id === idTurnos);
  
    if (indexTurno === -1) {
      return swal('Error', 'El turno no se pudo encontrar', 'error');
    }
  
    turns.splice(indexTurno, 1);
  
    localStorage.setItem('turnos', JSON.stringify(turns));
  
    mostrarTurnos(turns);
  }
  

  function editarTurno(id) {
    editTurns = id;
  
    const turnoEditado = turns.find(turn => turn.id === id);
    if (!turnoEditado) {
      swal('Error', 'El turno no se pudo encontrar', 'error');
      return;
    }
  
    const form = document.getElementById('form-turn');
    form.nombre.value = turnoEditado.nombre;
    form.mail.value = turnoEditado.mail;
    form.dni.value = turnoEditado.dni;
    form.medico.value = turnoEditado.medico;
    form.date.value = turnoEditado.date;
    form.hour.value = turnoEditado.hour;
  }
  
  function guardarTurnoEditado() {
    const form = document.getElementById('form-turn');
    const nombre = form.nombre.value;
    const mail = form.mail.value;
    const dni = form.dni.value;
    const medico = form.medico.value;
    const date = form.date.value;
    const hour = form.hour.value;
  
    const indexTurno = turns.findIndex(turn => turn.id === editTurns);
    if (indexTurno === -1) {
      swal('Error', 'El turno no se pudo encontrar', 'error');
      return;
    }
  
    const turnoExistente = turns[indexTurno];
    turnoExistente.nombre = nombre;
    turnoExistente.mail = mail;
    turnoExistente.dni = dni;
    turnoExistente.medico = medico;
    turnoExistente.date = date;
    turnoExistente.hour = hour;
  
    localStorage.setItem('turnos', JSON.stringify(turns));
  
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
  
    mostrarTurnos(turns);
  }
  