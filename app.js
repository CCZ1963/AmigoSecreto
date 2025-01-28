// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;
    //nombreIngresado == '' ? alert('Por favor, inserte un nombre') : listaAmigos.push(nombreIngresado);
    if (nombreIngresado == ''){
        alert('Por favor, inserte un nombre');
    } else {
        listaAmigos.push(nombreIngresado);
        let linea = document.createElement("li");
        let texto = document.createTextNode(nombreIngresado);
        linea.appendChild(texto);
        document.getElementById("listaAmigos").appendChild(linea);
    }
    limpiarCaja();
    console.log(nombreIngresado);
    console.log(listaAmigos);
}

function sortearAmigo(){
    if(listaAmigos.length == []){
        return(document.getElementById("listaAmigos").innerHTML = "No se ha ingresado nombres");
    }
    let indiceGenerado = Math.floor(Math.random()*listaAmigos.length);
    sorteado = "<li><font color='green'>El amigo secreto sorteado es: " + listaAmigos[indiceGenerado] + "</font></li>";
    console.log(listaAmigos.length);
    console.log(indiceGenerado);
    document.getElementById("listaAmigos").innerHTML = sorteado;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}