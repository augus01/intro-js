/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
var student = {
    name: {
        enumerable: true,
        value: "David Rayy"
    },
    sclass: {
        enumerable: true,
        value: "VI"
    },
    rollno: {
        enumerable: true,
        value: 12
    }
};
var propiedadesStudent = (Object.keys(student));

for (var i = 0; i < propiedadesStudent.length; i++) {
    console.log(`La propiendad ${i} es ${propiedadesStudent[i]}`)
}