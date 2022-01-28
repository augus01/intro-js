// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

while (diaSemana != "domingo" || diaSemana != "Domingo"){
    var diaSemana = prompt("Elige un día de la semana") 
    if(diaSemana == "Lunes" || diaSemana == "lunes"){
        alert("¡Ah empezado la semana a levantarse!")
    }else if(diaSemana == "Martes" || diaSemana == "martes"){
        alert("Tranqui ya paso el lunes")
    }else if(diaSemana == "Miercoles" || diaSemana == "miercoles"){
        alert("Ya estamos a mitad de semana ya casi es viernes")
    }else if(diaSemana == "Jueves" || diaSemana == "jueves"){
        alert("Mañana ya es Viernes!!!")
        
    }else if(diaSemana == "Viernes" || diaSemana == "viernes"){
        alert("Ya es viernes!!!!")
    }else if(diaSemana == "Sabado" || diaSemana == "sabado"){
        alert("Que lindos son los sabados!!")
    }
    if(diaSemana == "domingo" || diaSemana == "Domingo"){
        alert("Ve a descansar")
    }break;
}

