/**
 * La suma de un rango:
 * 
 * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
 * que contenga todos los números desde inicio hasta (e incluyendo) final. 
 * Luego, escribe una función suma que tome un array de números y retorne 
 * la suma de estos números
 */

var array = []
var sum = 0
var rango = (inicio, final) => {
    var numPush = inicio
    var lastNum = final

    while (numPush <= lastNum) {
        array.push(numPush)
        numPush += 1
    }
}
rango(1, 9)
console.log(array)

array.forEach((num) => {
    sum += num
})
console.log(sum)


