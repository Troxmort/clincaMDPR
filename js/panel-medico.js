const turnos = [
    {
        nombre: "Juan Pérez",
        dni: 12345678,
    
        dia: "Lunes",
        fecha: "2023-06-12",
        hora: "09:00",
        descripcion: "Consulta general"
    },
    {
        nombre: "María López",
        dni: 98765432,
       
        dia: "Martes",
        fecha: "2023-06-13",
        hora: "14:30",
        descripcion: "Control de rutina"
    },
    {
        nombre: "Carlos Rodríguez",
        dni: 56789012,
        
        dia: "Miércoles",
        fecha: "2023-06-14",
        hora: "11:15",
        descripcion: "Estudio de laboratorio"
    },
    {
        nombre: "Ana González",
        dni: 34567890,
     
        dia: "Jueves",
        fecha: "2023-06-15",
        hora: "16:00",
        descripcion: "Revisión de resultados"
    },
    {
        nombre: "Juan Pérez",
        dni: 12345678,
        dia: "Lunes",
        fecha: "2023-06-12",
        hora: "09:00",
        descripcion: "Consulta general"
    },
    {
        nombre: "María López",
        dni: 23456789,
        dia: "Martes",
        fecha: "2023-06-13",
        hora: "10:30",
        descripcion: "Control de seguimiento"
    },
    {
        nombre: "Pedro Gómez",
        dni: 34567890,
        dia: "Miércoles",
        fecha: "2023-06-14",
        hora: "15:45",
        descripcion: "Extracción de sangre"
    },
    {
        nombre: "Ana Torres",
        dni: 78901234,
        dia: "Viernes",
        fecha: "2023-06-16",
        hora: "14:15",
        descripcion: "Consulta pediátrica"
    },
    {
        nombre: "Laura Rodríguez",
        dni: 45678901,
        dia: "Lunes",
        fecha: "2023-06-19",
        hora: "11:30",
        descripcion: "Control de embarazo"
    },
    {
        nombre: "Carlos Ramírez",
        dni: 56789012,
        dia: "Martes",
        fecha: "2023-06-20",
        hora: "08:45",
        descripcion: "Revisión dental"
    },
    {
        nombre: "Marta Vargas",
        dni: 67890123,
        dia: "Miércoles",
        fecha: "2023-06-21",
        hora: "16:00",
        descripcion: "Vacunación"
    },
    {
        nombre: "Luisa Silva",
        dni: 89012345,
        dia: "Jueves",
        fecha: "2023-06-22",
        hora: "13:30",
        descripcion: "Consulta de alergias"
    },
    {
        nombre: "Roberto Fernández",
        dni: 90123456,
        dia: "Viernes",
        fecha: "2023-06-23",
        hora: "10:00",
        descripcion: "Control de presión arterial"
    },
    {
        nombre: "Julia Martínez",
        dni: 23456789,
        dia: "Lunes",
        fecha: "2023-06-26",
        hora: "15:30",
        descripcion: "Consulta oftalmológica"
    }
];
const turnosLocal= JSON.parse(localStorage.getItem('turnos'));

if(!turnosLocal) {
    localStorage.setItem('turnos', JSON.stringify(turnos));
}
//turnosLocal= JSON.parse(localStorage.getItem('turnos'));

let editIndex;

const user = JSON.parse(localStorage.getItem('currentUser'));


const tableBodyHTML = document.getElementById("tableBody");

const nombreMed=document.getElementById("nombreMedico")

const formTurnos = document.getElementById("turnosForm");

nombreMed.innerHTML = `<h5 class="text-start">Médico: ${user.name}</h5>`;


function renderizarTabla(arrayturnos)

{
  tableBodyHTML.innerHTML="";
  
  arrayturnos.forEach((turno, index) =>  {

    const posicion = String(index + 1).padStart(2, '0');
    
    
    
    tableBodyHTML.innerHTML += `<tr>
                                    
                                    <th scope="row">${posicion}</th>
                                    <td>${turno.nombre}</td>
                                    <td>${turno.dni}</td>
                                    <td>${turno.dia}</td>
                                    <td>${turno.fecha}</td>
                                    <td>${turno.hora}</td>
                                    <td>${turno.descripcion}</td>
                                    <td>
                                    <button class="btn btn-primary" onclick="borrarTurno(${turno.dni})"><i class="fa-solid fa-trash"></i></button>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalTurnos" onclick="editarTurno(${turno.dni})"><i class="fa-solid fa-edit"></i></button>
                                    </td>
                                    
                                </tr>`;
})
}

function TodoslosTurnos()
{
    renderizarTabla(turnosLocal);
}




function editarTurno(id)
{

let turno=turnosLocal.find((turnof,idx)=>{
  if(turnof.dni=== id){
  editIndex= idx;
  return true;
  }
});

let el= formTurnos.elements;

el.nombre.value= turno.nombre;
el.dni.value= turno.dni;
el.dia.value= turno.dia;
el.fecha.value= turno.fecha;
el.hora.value= turno.hora;
el.descripcion.value= turno.descripcion;



};




function guardarTurno()
{
    let el= formTurnos.elements;
const turnoEditado={
    nombre:el.nombre.value,
    dni: el.dni.value,
    dia: el.dia.value,
    fecha: el.fecha.value,
    hora: el.hora.value,
    descripcion: el.descripcion.value

}

turnosLocal[editIndex]=turnoEditado;
localStorage.setItem('turnos', JSON.stringify(turnosLocal));
renderizarTabla(turnosLocal);
editIndex=undefined;

}

function borrarTurno(idx)
{

    turnosLocal.splice(idx,1);
    localStorage.setItem('turnos', JSON.stringify(turnosLocal));
    renderizarTabla(turnosLocal);


}

const lunes="Lunes";
const martes="Martes";
const miercoles="Miercoles";
const jueves="Jueves";
const viernes="Viernes";

function filtrarTurno(dia)
{
const filter=turnosLocal.filter(turno=>turno.dia==dia);

filter.sort((a, b) =>{
    if (a.hora < b.hora) {
        return -1;
      }
      if (a.hora > b.hora) {
        return 1;
      }
    
      // names must be equal
      return 0;
});

renderizarTabla(filter);



}

//filtrarTurno(lunes);


function ordenar(order)
{
valor= order? 1 : -1;


  const collator= new Intl.Collator("es-AR", {sensitivity:"base"});

  filter.sort(function(a,b)
  {
    if (order) return collator.compare(b.hora,a.hora);
    return collator.compare(a.hora,b.hora);
  })

  renderizarTabla(filter);

}