// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;
    let soloLetras = /^[A-Za-záéíóúñ ]+$/.test(nombreIngresado);
    //nombreIngresado == '' ? alert('Por favor, inserte un nombre') : listaAmigos.push(nombreIngresado);
    if (soloLetras == true && nombreIngresado != ' '){ //Evitamos números y espacio incial
        listaAmigos.push(nombreIngresado);
        let linea = document.createElement("li"); // Vamos formando la lista
        let texto = document.createTextNode(nombreIngresado);
        linea.appendChild(texto);
        document.getElementById("listaAmigos").appendChild(linea);
    } else {
        alert('Por favor, inserte un nombre correctamente.');
    }
    limpiarCaja();
}

function sortearAmigo(){
    if(listaAmigos.length == []){ // Si es una lista vacía y pulsamos botón Sortear amigo
        return(document.getElementById("listaAmigos").innerHTML = "No se ha ingresado nombres");
    }
    let indiceGenerado = Math.floor(Math.random()*listaAmigos.length); // Indice sorteado, entre cero y length -1
    sorteado = "<li><font color='green'>El amigo secreto sorteado es: " + listaAmigos[indiceGenerado] + "</font></li>";
    document.getElementById("listaAmigos").innerHTML = sorteado;
}

function limpiarCaja() { // Luego de ingresar nombre borramos box
    document.querySelector('#amigo').value = '';
}