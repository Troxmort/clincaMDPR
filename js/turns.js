const turns = JSON.parse(localStorage.getItem('turnos')) || [];

const formTurns = document.getElementById('form-turn');



function agendarTurnos(event) {
    event.preventDefault();

    const turnsHTML = {
        nombre: event.target.elements.nombre.value,
        mail: event.target.elements.mail.value,
        date: event.target.elements.date.value,
        hour: event.target.elements.hour.value,
        id: Date.now()
    }

    turns.push(turnsHTML);

    localStorage.setItem('turnos', JSON.stringify(turns));

    event.target.reset();
    event.target.elements.nombre.focus();
}

formTurns.addEventListener('submit', (event) => agendarTurnos(event));

console.log(turns);