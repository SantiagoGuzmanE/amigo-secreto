// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto){ 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
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
    let lista = document.getElementById('lista');
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo(){
    if (amigos.length < 2) {
        alert('Por favor, ingrese al menos dos amigos para realizar el sorteo.');
        return;
    }
    let indice = Math.floor(Math.random()*amigos.length);
    let nombreSorteado = amigos[indice];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
}