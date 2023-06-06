const usersLocal = JSON.parse(localStorage.getItem('users'));
        //null
const users = [
    {
        name: `José Galindo`,
        user: `j.galindo`,
        email: `johndoe@gmail.com`,
        password: `alfabeta`,
        active: true,
        role: `medico`
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
        role: `medico`

    }
   
];

if(!usersLocal) {
    localStorage.setItem('users', JSON.stringify(users));
}


