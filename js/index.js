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

function registrarCliente(){
    let primerNombre = document.getElementById('primerNombre').value;
    let segundoNombre=document.getElementById('segundoNombre').value;
    let primerApellido=document.getElementById('primerApellido').value;
    let segundoApellido=document.getElementById('segundoApellido').value;
    let telefono=document.getElementById('telefono').value;

    var data={
        'primerNombre':primerNombre,
        'segundoNombre':segundoNombre,
        'primerApellido':primerApellido,
        'segundoApellido':segundoApellido,
        'noTelefono':telefono
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