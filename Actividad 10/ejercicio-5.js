/**
 * Revirtiendo un array:
 * 
 * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
 * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
 * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
 * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
 * El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: 
 * modifica el array dado como argumento invirtiendo sus elementos. 
 * Ninguno de los dos puede usar el método reverse estándar.
 */

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion', 'cat'];
var newArray1 = animals.slice(0,3)
var newArray2 = animals.slice(-3)
var arrayRevertido = []
console.log(newArray1)
console.log(newArray2)


const revertirArray = (array) => {
    for (var i = 0; i < array.length / 2; i++) {
        let temporal = array[i]
        let iContrario = array.length - i -1
        array[i] = array[iContrario]
        array[iContrario] = temporal
        return temporal
    }

}
const revertirArrayEnSuLugar = (array) =>{
    for (var i = 0; i < array.length / 2; i++) {
        let temporal = array[i]
        let iContrario = array.length - i -1
        array[i] = array[iContrario]
        array[iContrario] = temporal
        
    }
}

revertirArray(animals)
console.log("invertir" , animals)
revertirArrayEnSuLugar(revertirArray(animals))
console.log("Acomodar" , animals)


