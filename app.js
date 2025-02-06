let listaAmigos = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value; // Ingresando el nombre
    let soloLetras = /^[A-Za-záéíóúñ]+$/.test(nombreIngresado); // Controlamos el buen ingreso de no
    if (soloLetras == true){
        listaAmigos.push(nombreIngresado); // Se ingresa nombre al array
        // Si no hay dos nombres ingresados no se activa botón "Sortear Amigo"
        if(listaAmigos.length > 1){document.getElementById('sorteo').removeAttribute('disabled')};
        let linea = document.createElement("li"); // Vamos formando la lista, se imprime en pantalla
        let texto = document.createTextNode(nombreIngresado);
        linea.appendChild(texto);
        document.getElementById("lineaAmigos").appendChild(linea);
    } else {
        alert('Por favor, ingrese un nombre correctamente.');
    }
    limpiarCaja();
}

function sortearAmigo(){
    let indiceGenerado = Math.floor(Math.random()*listaAmigos.length); // Indice sorteado, entre cero y length - 1
    sorteado = "<li><font color='green'>El amigo secreto sorteado es: " + listaAmigos[indiceGenerado] + "</font></li>";
    document.getElementById("lineaAmigos").innerHTML = sorteado; // Escribimos en pantalla nombre sorteado
    document.querySelector('#sorteo').setAttribute('disabled','true');  // DEshabilitamos el botón Sortear Amigo
    document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitamos botón Reiniciar Sorteo
}

function reiniciarSorteo() {
    limpiarCaja();
    listaAmigos = []; //
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById("lineaAmigos").innerHTML = ""; // Limpiamos la pantalla
}

function limpiarCaja() { // Luego de ingresar nombre borramos box
    document.querySelector('#amigo').value = '';
}