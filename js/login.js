document.getElementById('btn-iniciar-sesion').addEventListener("click", iniciarSesion);
document.getElementById('btn-registrarse').addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);

let contenedorLoginRegistro = document.querySelector('.contenedor-login-registro');
let formularioLogin = document.querySelector('.formulario-login');
let formularioRegistro = document.querySelector('.formulario-registro');
let cajaAtrasLogin = document.querySelector('.caja-atras-login');
let cajaAtrasRegistro = document.querySelector('.caja-atras-registro');


function anchoPagina(){
       if(window.innerWidth > 850){
        cajaAtrasLogin.style.display='block';
        cajaAtrasRegistro.style.display='block';
       }else{
        cajaAtrasRegistro.style.display='block';
        cajaAtrasRegistro.style.opacity='1';
        cajaAtrasLogin.style.display='none';
        formularioLogin.style.display='block';
        formularioRegistro.style.display='none';
        contenedorLoginRegistro.style.left='0px';
       }
}
anchoPagina();


function iniciarSesion(){

    if(window.innerWidth > 850){

        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "10px";
        formularioLogin.style.display="block";
        cajaAtrasRegistro.style.opacity = "1";
        cajaAtrasLogin.style.opacity = "0";
    }else{
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display="block";
        cajaAtrasRegistro.style.display = "block";
        cajaAtrasLogin.style.display = "none"; 
    }
 }

function registro(){
    if(window.innerWidth >850){

        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "410px";
        formularioLogin.style.display="none";
        cajaAtrasRegistro.style.opacity = "0";
        cajaAtrasLogin.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display="none";
        cajaAtrasRegistro.style.display = "none";
        cajaAtrasLogin.style.display = "block";
        cajaAtrasLogin.style.opacity = "1"; 
    }

}

   function validarCorreo() {
       let correo = document.getElementById("correo").value;
       let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
       let mensaje = document.getElementById("mensaje");
       let contraseña1= document.getElementById("contra1").value;
       let contraseña2= document.getElementById("contra2").value;
     
     
       if (expresion.test(correo) && contraseña1 === contraseña2) {
           mensaje.innerHTML = "Contraseñas y correo válidos.";
           mensaje.style.color = "green";
           document.getElementsByClassName("formulario-registro").submit();
         

       } else if(!expresion.test(correo) && contraseña1 === contraseña2){
           mensaje.innerHTML = "Correo inválido. Ingresa un correo válido, por ejemplo: ejemplo@dominio.com";
           mensaje.style.color = "red";
           
       } else if(contraseña1 !== contraseña2) {
         mensaje.innerHTML = "Contraseñas inválidas, las 2 contraseñas deben ser iguales."
         mensaje.style.color = "red";
    } 
    return false;

}


// import { successAlert } from './js.js';
// successAlert('hola desde archivo login.js')

//Modal
document.getElementById("forgot-password-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
  
    // Muestra el modal para recuperar la contraseña
    $('#forgot-password-modal').modal('show');
  });
  
  document.getElementById("forgot-password-submit").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la acción predeterminada del botón
  
    // Aquí puedes agregar tu lógica para enviar la solicitud de recuperación de contraseña al servidor
    var email = document.getElementById("forgot-password-email").value;
    console.log("Se ha enviado una solicitud de recuperación de contraseña para el correo electrónico: " + email);
  
    // Cierra el modal después de realizar alguna acción (por ejemplo, mostrar un mensaje de éxito)
    $('#forgot-password-modal').modal('hide');
  });
  
  


