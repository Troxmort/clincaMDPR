const RForm = document.getElementById('regM-form');

let newUser={};

const users= JSON.parse(localStorage.getItem('users')) || [];

if (!users)
{
    users=[];
}


RForm.addEventListener('submit',function(evt){
    evt.preventDefault();

    const elm = evt.target.elements;
     
    newUser={
     nombre:elm.nombre.value,
     dni:elm.dni.value,
     mail:elm.email.value,
     usuario:elm.usuario.value,
     contrasena:elm.contrasena.value,
     especialidad:elm.especialidad.value,
     role:"medico",
     id: Date.now()
    };

users.push(newUser);
localStorage.setItem('users', JSON.stringify(users));

swal('Solicitud enviada!', `pendiente a aprobación`, 'success')

setTimeout(() => {
    window.location.href = '/';
}, 2000)


})

