// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x num"

var numDivisible = prompt("Elija un número que sea divisible entre 2")
var dividendoParseado = Number(numDivisible)

if(dividendoParseado%2 === 0){
    console.log(dividendoParseado + " es divisible entre 2")
}else{
    console.log(dividendoParseado + " no es un número diviseble en 2")
}