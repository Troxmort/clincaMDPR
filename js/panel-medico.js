
const turnos= JSON.parse(localStorage.getItem('turnos'));
const user = JSON.parse(localStorage.getItem('currentUser'));
const turnosMed=turnos.filter((turno) => turno.medico===user.especialidad);
const turnosRest=turnos.filter((turno) => turno.medico!=user.especialidad);



const dias = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo'
      ];

let editIndex;
let turnoEditado={};

const tableBodyHTML = document.getElementById("tableBody");
const nombreMed=document.getElementById("nombreMedico")
const espMed=document.getElementById("espMedico")
const formTurnos = document.getElementById("turnosForm");
const botonBorrar= document.getElementById("botonBorrar");

nombreMed.innerHTML = `<h5 class="text-start">Médico: ${user.name}</h5>`;
espMed.innerHTML = `<h5 class="text-start">Especialidad: ${user.especialidad}</h5>`;

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
                                    <td>${turno.descripcion}</td>
                                    <td>
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalborrar" onclick="botonBorrarModal(${turno.id})""><i class="fa-solid fa-trash"></i></button>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalTurnos" onclick="editarTurno(${turno.id})"><i class="fa-solid fa-edit"></i></button>
                                    </td>
                                    
                                </tr>`;



})
}

function TodoslosTurnos()
{
    renderizarTabla(turnosMed);
}

function editarTurno(id)
{

let turno=turnosMed.find((turnof,idx)=>{
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
    medico: turno.medico,
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
const index2=turnosMed.findIndex(turno=>turno.id===turnoEditado.id)
turnos[index]=turnoEditado;
turnosMed[index2]=turnoEditado;


localStorage.setItem('turnos', JSON.stringify(turnos));


renderizarTabla(turnosMed);
editIndex=undefined;

}

function botonBorrarModal(id){
  botonBorrar.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> <button  type="button" class="btn btn-primary" onclick="borrarTurno(${id})">Borrar</button>`

}

function borrarTurno(id)
{

    const idx=turnos.findIndex(turno => turno.id===id);
    const idx2=turnosMed.findIndex(turno => turno.id===id);
    turnos.splice(idx,1);
    turnosMed.splice(idx2,1);
    localStorage.setItem('turnos', JSON.stringify(turnos));
    renderizarTabla(turnosMed);
}


function ordenar(order)
{
valor= order? 1 : -1;


  const collator= new Intl.Collator("es-AR", {sensitivity:"base"});

  turnosMed.sort(function(a,b)
  {
    if (order) return collator.compare(b.date,a.date);
    return collator.compare(a.date,b.date);
  })

  renderizarTabla(turnosMed);

}