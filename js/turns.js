const turns = JSON.parse(localStorage.getItem('turnos')) || [];

const formTurns = document.getElementById('form-turn');



function agendarTurnos(event) {
    event.preventDefault();
  
    const nuevoTurno = {
      nombre: event.target.elements.nombre.value,
      mail: event.target.elements.mail.value,
      date: event.target.elements.date.value,
      dni: event.target.elements.dni.valueAsNumber,
      hour: event.target.elements.hour.value,
      medico: event.target.elements.medico.value,
      descripcion: event.target.elements.descripcion.value,
      id: Date.now()
    };
  
    const indexTurnoExistente = turns.findIndex(turn => turn.id === nuevoTurno.id);
  
    if (indexTurnoExistente !== -1) {
      turns[indexTurnoExistente] = nuevoTurno;
    } else {
      turns.push(nuevoTurno);
    }
  
    localStorage.setItem('turnos', JSON.stringify(turns));
  
    event.target.reset();
    event.target.elements.nombre.focus();
  
    swal(`Felicidades ${nuevoTurno.nombre}`, 'Su turno se agendó con éxito', 'success');
  
    mostrarTurnos(turns);
  }
  
  

formTurns.addEventListener('submit', (event) => agendarTurnos(event));

console.log(turns);