// Crear una función que recibe 2 parámetros (una oración y la palabra a buscar). 
// Retornar true o false en caso de que una oración contenga una palabra dada, es decir, 
// si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un 
// false. En cambio si mando "mundo" entonces debe retornar true.

function compararPalabras (oración, palabraBuscar){
    if (oración.includes(palabraBuscar)) {
        return true;
    }else{
        return false;
    }
}
var oración = "Hola mundo"
var palabraUser = prompt("Elija una palabra de esta oración 'Hola mundo' ")

compararPalabras(oración, palabraUser)