const usersLocal = JSON.parse(localStorage.getItem('users'));
        //null
const users = [
    {
        name: `John Doe`,
        user: `j.doe`,
        email: `johndoe@gmail.com`,
        password: `alfabeta`,
        active: true,
        role: `ADMIN_ROLE`
    },
    {
        name: `Jose Perez`,
        user: `j.perez`,
        email: `joseperez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`
    },
    {
        name: `Usuario Inactivo`,
        user: `u.inactivo`,
        email: `inactivo@gmail.com`,
        password: `1234`,
        active: false,
        role: `USER_ROLE`
    },
    {
        name: `Maria Gimenez`,
        user: `m.gimenez`,
        email: `mariagimenez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`

    }
   
];

if(!usersLocal) {
    localStorage.setItem('users', JSON.stringify(users));
}


