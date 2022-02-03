var word1 = 'madam' 
var word2 = 'computadora'

function verificaPalíndromo(palabra) {
    var convertArray = palabra.split("").reverse( ).join("")
    if (palabra === convertArray) {
        return true
    }else{
        return false
    }
}
console.log(verificaPalíndromo(word1))
