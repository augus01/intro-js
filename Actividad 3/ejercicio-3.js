// Solicitar al usuario un número. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando"

var eleccionUser = prompt("Elija un número entre 1 y 2463")
var numRifa = Number(eleccionUser)

if(numRifa === 1000){
    alert("Ganaste un premio")
}else{
    alert("Lo sentimos, sigue participando")
}