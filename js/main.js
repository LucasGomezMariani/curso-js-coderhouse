// 1- Hacer un contador de numero pares e impares.

// para hacer contadores esta bueno declarar las variables = 0
/* let numerosImpares = 0;
let numerosPares = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        numerosPares++
    } else {
        numerosImpares++
    }
}
console.log('La cantidad de numeros impares es: ' + numerosImpares)
console.log('La cantidad de numeros pares es: ' + numerosPares) */

//Se podria simplificar un poco el codigo agregandole un !()

/* let numerosImpares = 0;
let numerosPares = 0;

//0 --> false (no entra al if)
//n° --> true (entra al if)

for (let i = 1; i <= 30; i++) {
    if (!(i % 2)) {
        numerosPares++
    } else {
        numerosImpares++
    }
}
console.log('La cantidad de numeros impares es: ' + numerosImpares)
console.log('La cantidad de numeros pares es: ' + numerosPares) */







//D-Imprimir por consola numeros del 1 al 15. Con un ciclo for. Pero cuando el número sea múltiplo de 3, imprimir "fizz"
//.Pero cuando el número sea múltiplo de 5, imprimir "buzz". Y cuando sea multiplo de 3 y de 5, imprimir "fizzbuzz"

// for (let i = 1; i <= 15; i++) {
//     if (!(i % 5) && !(i % 3)) {
//         console.log('FizzBuzz: ' + i);
//     } else if (!(i % 3)) {
//         console.log('Fizz: ' + i);
//     } else if (!( i % 5)) {
//         console.log('Buzz: ' + i);
//     }
// }






// let nombre;
// let contrasenia;

// let askAgain = true

// do {
//     nombre = prompt('Ingrese nombre: ')
//     contrasenia = prompt(' ingrese contraseña: ')
//     if ((nombre === "") || (contrasenia === "")) {
//         alert('Alguno de los campos esta vacio.')
//     } else {
//         alert('Los datos fueron ingresados con exito!!')
//         askAgain = false
//     }
// } while (askAgain);












//Ejercicio 1: switch y do while//Usando prompt y alert...

//A-Solicitar al usuario que marque un numero del 1 al 9 con switch y que con alert me indique que numero ingrese. Establecer una condicion default

//B-Si el usuario no marca un numero del 1 al 9, volver a pedirselo con un do...while

//C-Si el usuario no marca un numero del 1 al 9 y ademas...no ingresa un numero, volver a pedirselo con un do...while
// let numeroMarcado;




// do {
//     numero = Number(prompt('Ingrese un numero del 1 - 9'))
//     switch (numero) {
//         case 1:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 2:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 3:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 4:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 5:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 6:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 7:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 8:
//             alert('ingresaste el numero ' + numero)
//             break;
//         case 9:
//             alert('ingresaste el numero ' + numero)
//             break;
    
//         default:
//             alert('el numero ingresado no es valido >:(')
//             break;
//     }
// } while (numero<1 || numero>9);








let producto;
let precio = 0;
let cantidad = 0;
let continuarComprando = false;
let precioTotal = 0;

do {
    producto = prompt ('¿Que producto buscas? ¿vino, gaseosa o agua?').toUpperCase();
    cantidad = Number(prompt('¿Cuantas unidades queres?'));

    switch(producto) {
        case 'VINO':
            precio = 200;
            break;
        case 'GASEOSA':
            precio = 100;
            break;
        case 'AGUA':
            precio = 50;
            break;
        default:
            alert('Elegir entre una de los 3 varietales posibles');
            precio = 0;
            cantidad = 0;        
    }

    precioTotal += precio*cantidad;

    continuarComprando = confirm('Queres agregar otro producto');
} while (continuarComprando);

alert ('El total de la compra es $' + precioTotal);
alert ('Su compra fue realizada con exito, esperamos que vuelva pronto!');