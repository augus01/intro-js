/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */

const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12]

function compareNumbers(a, b) {
    return a - b;
}

arr.sort(compareNumbers);
console.log(arr)
var numMenores = arr.slice(0,2)
var numMayores = arr.slice(-2)
console.log(numMenores)
console.log(numMayores)