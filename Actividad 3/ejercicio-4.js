// solicitar al usuario que ingrese dos números y mostrar cual de los dos es menor. No considerar elcaso en que ambos sean iguales

var eleccionUser1 = prompt("Elija un número")
var eleccionUser2 = prompt("Elija un número")

var num1 = Number(eleccionUser1)
var num2 = Number(eleccionUser2)

if(num1 > num2){
    alert("El número " + num2 + " es menor que " + num1)
}else if (num2 > num1){
    alert("El número " + num1 + " es menor que " + num2)
}else{
    alert("Ingrese un valor valido")
}

