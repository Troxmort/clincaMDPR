const RForm = document.getElementById('regM-form');

let newUser={};

let users= JSON.parse(localStorage.getItem('usersReg'));

if (!users)
{
    users=[];
}


RForm.addEventListener('submit',function(evt){
    evt.preventDefault();

    const elm = evt.target.elements;
     
    newUser={
    nombre:elm.nombre.value,
     apellido:elm.apellido.value,
     email:elm.email.value,
     usuario:elm.usuario.value,
     contrasena:elm.contrasena.value,
     rol:"medico"
    };

users.push(newUser);
localStorage.setItem('usersReg', JSON.stringify(users));

swal('Solicitud enviada!', `pendiente a aprobación`, 'success')

setTimeout(() => {
    window.location.href = '/';
}, 2000)


})

console.log(users);