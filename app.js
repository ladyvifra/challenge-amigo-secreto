// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let listaAmigos =[];
l//et cantidadAmigos=0;
let nombre;



//funciones

//Asignar texto al elemento
function asignarTextoElemnto(elemento, texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}

//Limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value='';
    
}
//Agregar amigo
function agregarAmigo(){
 
    let nombre= document.getElementById('amigo').value;
    if (nombre.trim()==="") {
        alert("Por favor, inserte un nombre")
        return;
    } 

    listaAmigos.push(nombre.trim());
    console.log(listaAmigos);
    
    limpiarCaja();
    console.log(nombre);
    return;
}

