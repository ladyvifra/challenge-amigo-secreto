// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let listaAmigos =[];
//let cantidadAmigos=0;
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
    actualizarLista();
    
}

//Actualizar lista
function actualizarLista() {
    
    let lista = document.getElementById("listaAmigos");
    let contenedor = lista.parentElement; 
    // Verificar si ya existe el título, si no, crearlo
    if (!document.getElementById("tituloLista")) {
        let titulo = document.createElement("h3");
        titulo.id = "tituloLista"; // Evitar duplicados
        titulo.textContent = "Lista de Amigos";
        titulo.classList.add("lista-titulo"); // Agregar una clase para estilos si es necesario
        contenedor.insertBefore(titulo, lista); // Insertar el título antes de la lista
    }
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";

    // Recorrer el array listaAmigos y agregar cada amigo como <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li"); // Crear un <li>
        li.textContent = listaAmigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista UL
    }

}

//función para hacer le sorteo
// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
// Usa Math.random() y Math.floor() para obtener un índice aleatorio.

// Tareas específicas:

// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

// Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

// Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  
// e innerHTML para mostrar el amigo sorteado.

function sortearAmigo() {

    //validar que haya amigos disponibles

    if (listaAmigos.length===0) {
        alert("No hay una lista de amigos disponible para hacer el sorteo")
        return;
    }
    
    if (listaAmigos.length<=2) {
        alert("Para realizar el sorteo debe tener una lista de al menos 3 amigos")
        return;
    }

    let indiceAleatorio= Math.floor(Math.random()*listaAmigos.length);
    let nombreSorteado= listaAmigos[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>${nombreSorteado} ha sido sorteado 🎉</li>`;
}
