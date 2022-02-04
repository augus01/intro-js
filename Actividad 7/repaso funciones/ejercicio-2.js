// Crea una función que reciba un número de 5 digitos como parametro y lo revierta: ejemplo
var number = "34493"
function revertirNum(num1){
    var convertArray = num1.split("").reverse().join("")
    var convertNumero = parseInt(convertArray)
    return convertNumero
}
console.log(revertirNum(number))