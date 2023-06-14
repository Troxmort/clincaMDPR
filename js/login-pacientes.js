const loginPForm = document.getElementById('loginP-form');

loginPForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const elm = evt.target.elements;
const userInput=elm.usuario.value;
const passwordInput=elm.contrasena.value;

const users = JSON.parse(localStorage.getItem('users'))

const user = users.find(usr => {
    if(usr.user === userInput) {
        return true
    }
});

if(!user  || user.password !== passwordInput) {
    swal('Error!', 'Verifique los datos ingresados y vuelva a intentarlo', 'error');
    return;
}

if(user.role != "paciente"){

    swal('Error!', 'Usted no está registrado/a como paciente', 'error');
    return;
}

swal('Inicio de sesión correcto!', `Bienvenido/a ${user.name}`, 'success')
    
    delete user.password;
    localStorage.setItem('currentUser', JSON.stringify(user))

   
    setTimeout(() => {
        window.location.href ="/pages/panel-pacientes.html";
    }, 2000)

});