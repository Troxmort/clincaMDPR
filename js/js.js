swal("¡Registro Exitoso!", "Ya puedes iniciar sesión", "success");

export function successAlert(){
    swal({
        title:'¡Registro Exitoso!',
        text: texto,
        icon: 'success'
    })
}



const usersLocal = JSON.parse(localStorage.getItem('users'));
const users =[
    {
        name: 'Pedro Juan',
        email: 'pedrojuan@gmail.com',
        password:'contraseña',
        active:true,
        role: 'ADMIN_ROLE'
    },
    {
        name: 'Luana Ferreiro',
        email: 'luanaferreiro@gmail.com',
        password:'contraseña2',
        active:true,
        role: 'ADMIN_ROLE'
    }
]

if(!usersLocal){
    localStorage.setItem('users',   JSON.stringify(users));
}