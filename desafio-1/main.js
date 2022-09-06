let nombre = prompt('Ingrese el nombre:')

function promedio(nota1, nota2, nota3) {
    nota1 = parseInt(prompt('Ingrese la primer nota: '))
    nota2 = parseInt(prompt('Ingrese la segunda nota: '))
    nota3 = parseInt(prompt('Ingrese la tercer nota: '))
    let promedio = (nota1+nota2+nota3) / 3;

    if (promedio>=6) {
        alert('Felicitaciones '+nombre+ ' tu nota es '+promedio+' y pasa a estar aprobado!')
        
    } else {
        alert('Tenemos malas noticias '+nombre+ '\n tu nota es '+ promedio+ ' y no alcanza para que apruebes.')
        
    }
}

promedio();