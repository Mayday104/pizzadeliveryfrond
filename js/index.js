/*async function insertaCliente(data){
    const response = await fetch('https://localhost:44397/api/clientes',
    {
        method:'POST',        
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify(data)
    });

    return response.json();
}
*/

function iniciarSesion(){
    let emailLogin = document.getElementById('emailLogin').value;
    let passwordLogin = document.getElementById('contraseniaLogin').value;

    let data={
        'email': emailLogin,
        'contrasenia': passwordLogin
    }

    fetch('https://localhost:44397/api/login',{
        method:'POST',
        body:JSON.stringify(data),
        headers: new Headers({
            "Content-Type":"application/json"
        })
    }).then((resp) => resp.json())
    .then(function(data){
        

        if(data.success){
            Swal.fire(
                'Inicio de sesion correcto',
                'Bienvenido ' + data.data.cliente.primerNombre + ' ' + data.data.cliente.primerApellido,
                'success'
              )
        }
        else{
            Swal.fire(
                'Inicio de sesion no valido',
                data.message,
                'error'
              )
        }
    })
}

function registrarCliente(){
    let primerNombre = document.getElementById('primerNombre').value;
    let segundoNombre=document.getElementById('segundoNombre').value;
    let primerApellido=document.getElementById('primerApellido').value;
    let segundoApellido=document.getElementById('segundoApellido').value;
    let telefono=document.getElementById('telefono').value;

    let email=document.getElementById('correo').value;
    let contrasenia=document.getElementById('contrasenia').value;

    let data={
        'cliente':{
            'primerNombre':primerNombre,
            'segundoNombre':segundoNombre,
            'primerApellido':primerApellido,
            'segundoApellido':segundoApellido,
            'noTelefono':telefono
        },
        "usuarioViewModel":{
            'email': email,
            'contrasenia': contrasenia
        }
        
    }

    fetch('https://localhost:44397/api/clientes',{
        method:'POST',
        body:JSON.stringify(data),
        headers: new Headers({
            "Content-Type":"application/json"
        })
    }).then(function(){
        Swal.fire(
            'Cliente Registrado',
            'Cliente registrado satisfactoriamente',
            'success'
          )
    })
/*
    fetch('https://localhost:44397/api/clientes')
    .then((resp)=> resp.json())
    .then(function(data){
        alert(JSON.stringify(data));
    })
*/
/*
    insertaCliente(data).then(data => {
        alert(JSON.stringify(data));
    })
*/
    
}