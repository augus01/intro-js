// Escriba una función que acepte dos argumentos, una cadena y una letra, y la función contará el número de ocurrencias de la letra especificada dentro de la cadena

var text = `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. `;
var letraBuscada = prompt("Elija una letra para ver cuantas veces existe en un parrafo lorem")

function searchlyrics(cadenaTexto, letra) {
  var convertArray = cadenaTexto.split("");
  var i = 0;
  var vecesEncontrada = 0;

  while (i < convertArray.length) {
    if (convertArray[i] == letra) {
      vecesEncontrada++;
    }
    i++;
  }
  var msj = (`Tu letra "${letra}" fue encontrada ${vecesEncontrada} veces`);
  return msj;
}
console.log(searchlyrics(text,letraBuscada));
