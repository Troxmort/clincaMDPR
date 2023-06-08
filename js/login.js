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