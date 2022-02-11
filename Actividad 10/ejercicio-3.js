 /**
 * Dadas dos matrices de enteros,
 * encuentra qué elementos faltan en la segunda matriz
 * de la primera matriz.
​
Ejemplo
​
La matriz es la lista original. Los números que faltan son
    matriz = [7,2,5,3,5,3]
    br = [7,2,5,4,6,3,5,3]
​
    Los números que faltan en arr son [4,6]
​
*/
const br = [7,2,5,4,6,3,5,3]
const matriz = [7,2,5,3,5,3]

matriz.push(5,3)


for (let i = 0; i < br.length; i++) {
    if (br[i] !== matriz[i]) {
        console.log(`${br[i]} no existe`)
    }
}


