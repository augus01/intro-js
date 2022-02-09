/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

if (student.name != null || student.name != undefined){
    console.log(`El nombre de ${student.name} si existe`)
}else{
    console.log(`No se encontro el nombre`)
}