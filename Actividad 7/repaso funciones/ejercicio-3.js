// Escribe una función que reciba una cadena como parámetro (ejemplo: "soy una cadena de texto" y que convierta la primera letra de cada palabra en mayúscula

var cadenaTexto = "soy una cadena de texto";

var convertirMayúscula = function (cadena) {
    var primerMayús = cadena.charAt(0).toUpperCase();
    var eliminaCaracter = cadenaTexto.slice(1)
    var palabraFinal = primerMayús + eliminaCaracter
    return palabraFinal
};

console.log(convertirMayúscula(cadenaTexto));
