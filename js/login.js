document.getElementById('btn-iniciar-sesion').addEventListener("click", iniciarSesion);
document.getElementById('btn-registrarse').addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);
document.querySelector('.formulario-login').addEventListener('submit', redireccion);


let contenedorLoginRegistro = document.querySelector('.contenedor-login-registro');
let formularioLogin = document.querySelector('.formulario-login');
let formularioRegistro = document.querySelector('.formulario-registro');
let cajaAtrasLogin = document.querySelector('.caja-atras-login');
let cajaAtrasRegistro = document.querySelector('.caja-atras-registro');


function anchoPagina() {
  if (window.innerWidth > 850) {
    cajaAtrasLogin.style.display = 'block';
    cajaAtrasRegistro.style.display = 'block';
  } else {
    cajaAtrasRegistro.style.display = 'block';
    cajaAtrasRegistro.style.opacity = '1';
    cajaAtrasLogin.style.display = 'none';
    formularioLogin.style.display = 'block';
    formularioRegistro.style.display = 'none';
    contenedorLoginRegistro.style.left = '0px';
  }
}

anchoPagina();


function iniciarSesion() {
  if (window.innerWidth > 850) {
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "10px";
    formularioLogin.style.display = "block";
    cajaAtrasRegistro.style.opacity = "1";
    cajaAtrasLogin.style.opacity = "0";
  } else {
    formularioRegistro.style.display = "none";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "block";
    cajaAtrasRegistro.style.display = "block";
    cajaAtrasLogin.style.display = "none";
  }
}

function registro() {
  if (window.innerWidth > 850) {
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "410px";
    formularioLogin.style.display = "none";
    cajaAtrasRegistro.style.opacity = "0";
    cajaAtrasLogin.style.opacity = "1";
  } else {
    formularioRegistro.style.display = "block";
    contenedorLoginRegistro.style.left = "0px";
    formularioLogin.style.display = "none";
    cajaAtrasRegistro.style.display = "none";
    cajaAtrasLogin.style.display = "block";
    cajaAtrasLogin.style.opacity = "1";
  }
}



function validarCorreo() {
  let correo = document.getElementById("correo").value;
  let expresion = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  let mensaje = document.getElementById("mensaje");
  let contraseña1 = document.getElementById("contra1").value;
  let contraseña2 = document.getElementById("contra2").value;

  if (expresion.test(correo) && contraseña1 === contraseña2) {
    mensaje.innerHTML = "Contraseñas y correo válidos.";
    mensaje.style.color = "green";
    setTimeout(() =>{

        document.querySelector(".formulario-registro").submit();
    }, 1000)
  } else if (!expresion.test(correo) && contraseña1 === contraseña2) {
    mensaje.innerHTML = "Correo inválido. Ingresa un correo válido, por ejemplo: ejemplo@dominio.com";
    mensaje.style.color = "red";
  } else if (contraseña1 !== contraseña2) {
    mensaje.innerHTML = "Contraseñas inválidas, las 2 contraseñas deben ser iguales.";
    mensaje.style.color = "red";
  }
  return false;
}

//Modal
document.getElementById("forgot-password-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evita la acción predeterminada del enlace

  // Muestra el modal para recuperar la contraseña
  $('#forgot-password-modal').modal('show');
});

document.getElementById("forgot-password-submit").addEventListener("click", function(event) {
  event.preventDefault(); // Evita la acción predeterminada del botón

  let email = document.getElementById("forgot-password-email").value;
  console.log("Se ha enviado una solicitud de recuperación de contraseña para el correo electrónico: " + email);

  // Cierra el modal después de realizar alguna acción (por ejemplo, mostrar un mensaje de éxito)
  $('#forgot-password-modal').modal('hide');
});





  

// const loginForm= document.getElementsByClassName('formulario-login');
// loginForm.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     const emailInput = evt.target.elements.email.value;
//     const passwordInput = loginForm.elements.password.value;
//     const users = JSON.parse(localStorage.getItem('users'));
//      let userExists;
//      users.forEach(usr =>{
//          if(usr.email == emailInput){
//                  userExists=usr;
//         }
//      })
//      if(!userExists){
//          swal('Error al ingresar', 'datos incorrectos', 'error');
//          return;
//      }
    
//     //*Forma 2
//      const userIndex = users.findIndex(user =>{
//          if(user.email == emailInput){
//              return true;
//          }
//      })

//      if(userIndex < 0){
//           swal('Error al ingresar', 'datos incorrectos', 'error');
//           return;
//      }
//      const user = users[userIndex];

//     //*Forma 3
//     const user= users.find(usr =>{
//         if(usr.email == emailInput){
//             return true;
//         }
//     }) 
//     if(!user || user.password !== passwordInput){
//         swal('Error al ingresar', 'datos incorrectos', 'error');
//         return;
//     }
    
//     swal('Login correcto',`¡Bienvenido! ${user.name}`, 'success');
     // window.location.href= '/';
//     document.getElementsByClassName("button-ingresar").addEventListener("click", function() {
//         window.location.href = "index.html";
//       });
// })

// function redireccion() {
     // Obtener los valores de correo electrónico y contraseña
//     let correo = document.getElementById("emailsesion").value;
//     let contraseña = document.getElementById("passw").value;
  
     // Verificar si los campos están vacíos
//     if (correo.trim() === '' || contraseña.trim() === '') {
       // Mostrar mensaje de error
//       document.getElementById("mensaje-error").textContent = "Por favor, ingresa tu correo electrónico y contraseña";
//       return; // Detener el flujo de ejecución
//     } else{
  
     // Realizar el inicio de sesión
     // Aquí puedes agregar tu lógica de autenticación
  
     // Redireccionar al index.html después del inicio de sesión
//     window.location.href = "index.html";
//   }
// }



function redireccion(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuariosesion").value;
    let contraseña = document.getElementById("passw").value;
  
    if (usuario.trim() === '' || contraseña.trim() === '') {
      document.getElementById("mensaje-error").textContent = "Por favor, rellena todos los campos";
      return;
    }else{
  

  
    window.location.href = "index.html";
    }
  }


  