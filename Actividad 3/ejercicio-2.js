// Crear un programa que determine si un número introducido en prompt es par o no, la respuesta será nostrada en un Alert

var userEleccion = prompt("Elija un número para evaluar si es impar o par")
var userNum = Number(userEleccion)

if(userNum%2 === 0){
    alert(useNum + ' es un número par')
}else{
    alert(useNum + ' es un número impar')
}