/* let nombreAlumno = prompt('Ingrese el nombre del alumno/a:')

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

promedio(); */


function datosAlumno() {


    let nombreAlumno;
    let nombreCorrecto = true


    do {
        nombreAlumno = prompt('Ingrese el nombre del alumno/a:');
        if (nombreAlumno == '') {
            alert('El nombre ingresado es invalido')
        } else {
            nombreCorrecto=false
        }
    } while (nombreCorrecto);


    let calificacion1;
    let numeroIngresado1 = true


    do {
        calificacion1 = Number(prompt('Ingrese la primer calificación: '))
        if (calificacion1 == '' || calificacion1<1 || calificacion1>10) {
            alert('El numero ingresado es invalido. Pruebe con un numero del 1 - 10')
        } else {
            numeroIngresado1 = false
        }
    } while (numeroIngresado1);

    
    let calificacion2;
    let numeroIngresado2 = true


    do {
        calificacion2 = Number(prompt('Ingrese la segunda calificación: '))

        if (calificacion2 == '' || calificacion2<1 || calificacion2>10) {
            alert('El numero ingresado es invalido. Pruebe con un numero del 1 - 10')
        } else {
            numeroIngresado2 = false
        }
    } while (numeroIngresado2);


    let calificacion3;
    let numeroIngresado3 = true


    do {
        calificacion3 = Number(prompt('Ingrese la tercera calificación: '))

        if (calificacion3 == '' || calificacion3<1 || calificacion3>10) {
            alert('El numero ingresado es invalido. Pruebe con un numero del 1 - 10')
        } else {
            numeroIngresado3 = false
        }
    } while (numeroIngresado3);


    promedio(nombreAlumno,calificacion1,calificacion2,calificacion3)

    
}


datosAlumno();  


function promedio(nombreAlumno,calificacion1, calificacion2, calificacion3) {


    let promedio = (calificacion1+calificacion2+calificacion3) / 3;


    mostrarData(nombreAlumno,promedio)


}


function mostrarData(nombreAlumno,promedio){


    if (promedio>=6) {

        alert('Felicitaciones '+nombreAlumno+ ' tu calificación es '+promedio+' y pasas a estar aprobado/a!')

        
    } else {

        alert('Tenemos malas noticias '+nombreAlumno+ '\n tu calificación es '+ promedio+ ' y no alcanza para que apruebes.')

        
    }

}