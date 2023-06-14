const turno = JSON.parse(localStorage.getItem('turnos'));
const user = JSON.parse(localStorage.getItem('currentUser'));
const turnosPacientes=turnos.filter((turno) => turno.paciente===user.name);
const turnosRest=turnos.filter((turno) => turno.paciente!=user.name);



const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];



const tableBodyHTML = document.getElementById("tableBody");
const nombrePaciente =document.getElementById("nombrePaciente")
const espMed=document.getElementById("espMedico")
const formTurnos = document.getElementById("turnosForm");

nombrePaciente.innerHTML = `<h5 class="text-start">Paciente: ${user.name}</h5>`;


function renderizarTabla(arrayturnos)

{
  tableBodyHTML.innerHTML="";
  
  arrayturnos.forEach((turno, index) =>  {

 
        
    

    const posicion = String(index + 1).padStart(2, '0');
    
   

      const numeroDia= new Date(turno.date).getDay();
    
    tableBodyHTML.innerHTML += `<tr>
                                    
                                    <th scope="row">${posicion}</th>
                                    <td>${user.name}</td>
                                    <td>${turno.dni}</td>
                                    <td>${dias[numeroDia]}</td>
                                    <td>${turno.date}</td>
                                    <td>${turno.hour}</td>
                                    <td>${turno.medico}</td>
                                    <td>${turno.descripcion}</td>    
                                </tr>`;
})
}

function TodoslosTurnos()
{
    renderizarTabla(turnosPacientes);
}








function ordenar(order)
{
valor= order? 1 : -1;


  const collator= new Intl.Collator("es-AR", {sensitivity:"base"});

  turnosPacientes.sort(function(a,b)
  {
    if (order) return collator.compare(b.date,a.date);
    return collator.compare(a.date,b.date);
  })

  renderizarTabla(turnosPacientes);

}