const CForm = document.getElementById('Cform');

let newQuestion={};

let questions= JSON.parse(localStorage.getItem('questions'));

if (!questions)
{
    questions=[];
}


CForm.addEventListener('submit',function(evt){
    evt.preventDefault();

    const elm = evt.target.elements;
     
    newQuestion={
     nombre:elm.nombre.value,
     dni:elm.dni.value,
     mail:elm.email.value,
     mensaje:elm.mje.value,
    
    };

questions.push(newQuestion);
localStorage.setItem('questions', JSON.stringify(questions));

swal('Consulta enviada!', `recibirá pronto su respuesta via email`, 'success')

setTimeout(() => {
    window.location.href = '/';
}, 2000)


})