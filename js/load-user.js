const usersLocal = JSON.parse(localStorage.getItem('users'));
const users = [
    {
        nombre: `John Doe`,
        email: `johndoe@gmail.com`,
        user: 'John123',
        password: `alfabeta`,
        active: true,
        role: `medic`,
        id: Date.now(),
        turno: ''
    },
];

if(!usersLocal) {
    localStorage.setItem('users', JSON.stringify(users));
}

