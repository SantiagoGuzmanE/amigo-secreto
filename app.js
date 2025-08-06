// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
    let amigo = document.getElementById('amigo').value;
        if (amigo == ""){
            alert('Por favor ingrese un nombre')
        }else{
            amigos.push(amigo);
            document.getElementById('amigo').value = "";
            console.log(amigos);
        }
}
function actualizarAmigos(){
    let 
}