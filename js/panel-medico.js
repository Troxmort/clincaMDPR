const user = JSON.parse(localStorage.getItem('currentUser'));

const nombreMed=document.getElementById("nombreMedico")

nombreMed.innerHTML = `<h5 class="text-start">Médico: ${user.name}</h5>`;


