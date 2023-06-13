const turno = JSON.parse(localStorage.getItem('turnos'));
const user = JSON.parse(localStorage.getItem('currentUser'));
const turnosPacientes=turnos.filter((turno) => turno.paciente===user.especialidad);
const turnosRest=turnos.filter((turno) => turno.paciente!=user.especialidad);



const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];

let editIndex;
let turnoEditado={};

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
                                    <td>${turno.nombre}</td>
                                    <td>${turno.dni}</td>
                                    <td>${dias[numeroDia]}</td>
                                    <td>${turno.date}</td>
                                    <td>${turno.hour}</td>
                                    <td>${turno.medico}</td>
                                    <td>${turno.descripcion}</td>
                                    <td>
                                    <button class="btn btn-primary" onclick="borrarTurno(${turno.id})"><i class="fa-solid fa-trash"></i></button>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalTurnos" onclick="editarTurno(${turno.id})"><i class="fa-solid fa-edit"></i></button>
                                    </td>
                                    
                                </tr>`;
})
}

function TodoslosTurnos()
{
    renderizarTabla(turnosPacientes);
}

function editarTurno(id)
{

let turno=turnosPacientes.find((turnof,idx)=>{
  if(turnof.id=== id){
  editIndex= idx;
  return true;
  }
});

let el= formTurnos.elements;

el.nombre.value=turno.nombre;
el.dni.value= turno.dni;
//el.dia.value= turno.dia;
el.fecha.value= turno.date;
el.hora.value= turno.hour;
el.descripcion.value= turno.descripcion;

turnoEditado={
    paciente: turno.paciente,
    id: turno.id,
    mail: turno.mail
}


};

function guardarTurno()
{
    let el= formTurnos.elements;
    turnoEditado.nombre= el.nombre.value
    turnoEditado.date= el.fecha.value
    turnoEditado.dni=el.dni.value
    turnoEditado.hour= el.hora.value
    turnoEditado.descripcion=el.descripcion.value

    console.log(turnoEditado);
const index=turnos.findIndex(turno=>turno.id===turnoEditado.id)
const index2=turnosPacientes.findIndex(turno=>turno.id===turnoEditado.id)
turnos[index]=turnoEditado;
turnosPacientes[index2]=turnoEditado;


localStorage.setItem('turnos', JSON.stringify(turnos));


renderizarTabla(turnosPacientes);
editIndex=undefined;

}

function borrarTurno(id)
{

    const idx=turnos.findIndex(turno => turno.id===id);
    const idx2=turnosPacientes.findIndex(turno => turno.id===id);
    turnos.splice(idx,1);
    turnosPacientes.splice(idx2,1);
    localStorage.setItem('turnos', JSON.stringify(turnos));
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