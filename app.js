let nombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); // Obtener el nombre del input
    if (nombre && !nombres.includes(nombre)) {
        nombres.push(nombre); // Agregar el nombre al arreglo
        actualizarListaNombres(); // Actualizar la lista en la interfaz
    }
    document.getElementById('amigo').value = ''; // Limpiar el campo de texto
}

function actualizarListaNombres() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar lista actual
    nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let nombreElegido = nombres[indiceAleatorio];
        asignarTextoElemento('#resultado', `El amigo secreto elegido es: ${nombreElegido}`);
    } else {
        asignarTextoElemento('#resultado', 'No hay nombres para sortear.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let botonSortear = document.querySelector('.button-draw');
    botonSortear.addEventListener('click', sortearAmigo);
});
