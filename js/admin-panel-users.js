const tableRegister = document.getElementById('table-register');
let editRegister;

function mostrarRegister(registerRender) {
  
    tableRegister.innerHTML = '';
  
    registerRender.forEach((registerTable, index) => {
  
      const posicion = String(index + 1).padStart(2, '0');
  
      tableRegister.innerHTML +=
        `<tr>
      <th scope="row">${posicion}</th>
      <td>
        ${registerTable.nombre}  
      </td>
      <td>${registerTable.dni}</td>
      <td>${registerTable.mail}</td>
      <td>${registerTable.usuario} </td>
      <td>${registerTable.contrasena} </td>
      <td>${registerTable.especialidad} </td>
      <td>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editarRegister(${registerTable.id})"> <i class="fa-solid fa-pen-to-square"></i> </i></button>
        <button class="btn btn-danger" onclick="borrarRegister(${registerTable.id})"> <i class="fa-solid fa-trash"> </i></button>
      </td>
      </tr>`;
  
    });
  
  }

  mostrarRegister(users);

  function borrarRegister(idRegister) {
    const indexRegister = users.findIndex(registerTable => registerTable.id === idRegister);
  
    if (indexRegister === -1) {
      return swal('Error', 'El usuario no se pudo encontrar', 'error');
    }
  
    users.splice(indexRegister, 1);
  
    localStorage.setItem('users', JSON.stringify(users));
  
    mostrarRegister(users);
  }
  

  function editarRegister(id) {
    editRegister = id;
  
    const registerEditado = users.find(registerTable => registerTable.id === id);
    if (!registerEditado) {
      swal('Error', 'El usuario no se pudo encontrar', 'error');
      return;
    }
  
    const form = document.getElementById('form-register');
    form.nombre.value = registerEditado.nombre;
    form.mail.value = registerEditado.mail;
    form.dni.value = registerEditado.dni;
    form.usuario.value = registerEditado.usuario;
    form.contrasena.value = registerEditado.contrasena;
    form.especialidad.value = registerEditado.especialidad;
  }
  
  
  function guardarRegisterEditado() {
    const form = document.getElementById('form-register');
    const nombre = form.nombre.value;
    const mail = form.mail.value;
    const dni = form.dni.value;
    const usuario = form.usuario.value;
    const contrasena = form.contrasena.value;
    const especialidad = form.especialidad.value;
  
    const indexRegister = users.findIndex(registerTable => registerTable.id === editRegister);
    if (indexRegister === -1) {
      swal('Error', 'El usuario no se pudo encontrar', 'error');
      return;
    }
  
    const registroExistente = users[indexRegister];
    registroExistente.nombre = nombre;
    registroExistente.mail = mail;
    registroExistente.dni = dni;
    registroExistente.usuario = usuario;
    registroExistente.contrasena = contrasena;
    registroExistente.especialidad = especialidad;
  
    localStorage.setItem('users', JSON.stringify(users));
  
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
  
    mostrarRegister(users);
  }
  