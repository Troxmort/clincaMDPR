const usersLocal = JSON.parse(localStorage.getItem('users'));
const turnosLocal= JSON.parse(localStorage.getItem('turnos'));
        
const users = [
    {
        name: `José Galindo`,
        user: `j.galindo`,
        email: `johndoe@gmail.com`,
        password: `alfabeta`,
        active: true,
        role: `medico`,
        especialidad:"cardiologo"
    },
    {
        name: `Jose Perez`,
        user: `j.perez`,
        email: `joseperez@gmail.com`,
        password: `1234`,
        active: true,
        role: `paciente`
    },
    
    {
        name: `Maria Gimenez`,
        user: `m.gimenez`,
        email: `mariagimenez@gmail.com`,
        password: `1234`,
        active: false,
        role: `medico`,
        especialidad:"pediatra"

    }
   
];

const turnos = [
  {
    nombre: "Juan Pérez",
    mail: "juan@gmail.com",
    date: "2023-06-12",
    dni: 12345678,
    hour: "09:00",
    medico: "cardiologo",
    descripcion: "Consulta general",
    id: 12345678
  },
  {
    nombre: "María López",
    mail: "maria@gmail.com",
    date: "2023-06-15",
    dni: 87654321,
    hour: "10:30",
    medico: "dermatólogo",
    descripcion: "Problemas de piel",
    id: 87654321
  },
  {
    nombre: "Carlos Rodríguez",
    mail: "carlos@gmail.com",
    date: "2023-06-18",
    dni: 98765432,
    hour: "14:00",
    medico: "cardiologo",
    descripcion: "chequeo gral",
    id: 98765432
  },
  {
    nombre: "Ana Martínez",
    mail: "ana@gmail.com",
    date: "2023-06-21",
    dni: 56789012,
    hour: "11:45",
    medico: "cardiologo",
    descripcion: "Control prenatal",
    id: 56789012
  },
  {
    nombre: "Laura Sánchez",
    mail: "laura@gmail.com",
    date: "2023-06-25",
    dni: 24681357,
    hour: "16:30",
    medico: "odontólogo",
    descripcion: "Limpieza dental",
    id: 24681357
  },
  {
    nombre: "Pedro Gómez",
    mail: "pedro@gmail.com",
    date: "2023-06-29",
    dni: 13579246,
    hour: "10:00",
    medico: "pediatra",
    descripcion: "Vacunación",
    id: 13579246
  },
  {
    nombre: "Sofía Herrera",
    mail: "sofia@gmail.com",
    date: "2023-07-03",
    dni: 97531024,
    hour: "15:15",
    medico: "dermatólogo",
    descripcion: "Acné y manchas en la piel",
    id: 97531024
  },
  {
    nombre: "Diego Castro",
    mail: "diego@gmail.com",
    date: "2023-07-06",
    dni: 65478932,
    hour: "11:00",
    medico: "cardiólogo",
    descripcion: "Control de presión arterial",
    id: 65478932
  },
  {
    nombre: "Lucía Torres",
    mail: "lucia@gmail.com",
    date: "2023-07-09",
    dni: 98765432,
    hour: "09:45",
    medico: "cardiologo",
    descripcion: "Control anual",
    id: 98765432
  }
];


if(!usersLocal) {
    localStorage.setItem('users', JSON.stringify(users));
}


if(!turnosLocal) {
    localStorage.setItem('turnos', JSON.stringify(turnos));
}