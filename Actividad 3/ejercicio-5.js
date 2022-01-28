// solicitar al usuario que ingrese 3 números y mostrar cual de los tres es el número mayor. Considerar el caso en que 2 números sean iguales

var eleccionUser1 = prompt("Elija un número")
var eleccionUser2 = prompt("Elija un número")
var eleccionUser3 = prompt("Elija un número")

var num1 = Number(eleccionUser1)
var num2 = Number(eleccionUser2)
var num3 = Number(eleccionUser3)

if (num1 == num2 || num1 == num3 ||num2 == num3 ){
    alert("El número " + num1 + " es mayor que el resto")
}else if (num1 > num2 && num1 > num3 ){
    alert("Elegiste dos números iguales")
}else if (num2 > num1 && num2 > num3){
    alert("El número " + num2 + " es mayor que el resto")
}else if (num3 > num1 && num3 > num2){
    alert("El número " + num3 + " es mayor que el resto")
}else{
    alert("ingrese valores correctos")
}

