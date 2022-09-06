let nombreAlumno = prompt('Ingrese el nombre del alumno/a:')

function promedio(calificacion1, calificacion2, calificacion3) {
    calificacion1 = parseInt(prompt('Ingrese la primer calificación: '))
    calificacion2 = parseInt(prompt('Ingrese la segunda calificación: '))
    calificacion3 = parseInt(prompt('Ingrese la tercer calificación: '))
    let promedio = (calificacion1+calificacion2+calificacion3) / 3;

    if (promedio>=6) {
        alert('Felicitaciones '+nombreAlumno+ ' tu calificación es '+promedio+' y pasas a estar aprobado/a!')
        
    } else {
        alert('Tenemos malas noticias '+nombreAlumno+ '\n tu calificación es '+ promedio+ ' y no alcanza para que apruebes.')
        
    }
}

promedio();