const turnos = [
    {
        "nombre": "Juan Pérez",
        "dni": "12345678",
        "id": 1,
        "dia": "Lunes",
        "fecha": "2023-06-12",
        "hora": "09:00",
        "descripcion": "Consulta general"
    },
    {
        "nombre": "María López",
        "dni": "98765432",
        "id": 2,
        "dia": "Martes",
        "fecha": "2023-06-13",
        "hora": "14:30",
        "descripcion": "Control de rutina"
    },
    {
        "nombre": "Carlos Rodríguez",
        "dni": "56789012",
        "id": 3,
        "dia": "Miércoles",
        "fecha": "2023-06-14",
        "hora": "11:15",
        "descripcion": "Estudio de laboratorio"
    },
    {
        "nombre": "Ana González",
        "dni": "34567890",
        "id": 4,
        "dia": "Jueves",
        "fecha": "2023-06-15",
        "hora": "16:00",
        "descripcion": "Revisión de resultados"
    }
]
const turnosLocal= JSON.parse(localStorage.getItem('turnos'));

if(!turnosLocal) {
    localStorage.setItem('turnos', JSON.stringify(turnos));
}


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
                                    <button class="btn btn-primary" onclick="borrarTurno(${turno.id})"><i class="fa-solid fa-trash"></i></button>
                                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalTurnos" onclick="editarTurno(${turno.id})"><i class="fa-solid fa-edit"></i></button>
                                    </td>
                                    
                                </tr>`;
})
}

function TodoslosTurnos()
{
    renderizarTabla(turnos);
}




function editarTurno(id)
{

let turno=turnos.find((turno,idx)=>{
  if(turno.id === id){
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


//buttonForm.innerHTML=`  <button type="submit" class="btn btn-info">editar pais</button>`;



};









  formTurnos.addEventListener("submit",function(evt)
{


    evt.preventDefault();
    
    const el= evt.target.elements;
    
      const nuevoPais=
      {
        nombre: el.nombre.value,
        dni: el.ubicacion.value,
        dia: el.habitantes.valueAsNumber,
        fecha: el.capital.value,
        hora: el.imagen.value,
        continente:el.continente.value,
        active:el.active.checked,
        id: Date.now()
    
      }

})



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

turnos[editIndex]=turnoEditado;
renderizarTabla(turnos);
editIndex=undefined;

}