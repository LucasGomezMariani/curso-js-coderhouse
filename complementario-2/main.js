// cartelera de cine

// 1- crear objetos con las peliculas
// 2- Meter todo en un array
// 3- preguntarle al usuario que pelicula desea ver 

class pelicula {
    constructor(nombre, precio, clasificacion){
        this.nombre = nombre
        this.precio = precio
        this.clasificacion = clasificacion
    }
    hablar() {
        console.log('Esta pelicula es clasificacion ' +this.clasificacion);
    }
}

const hp1 = new pelicula('Harry Potter 1', 200, 'A' );
const hp2 = new pelicula('Harry Potter 2', 250, 'B');
const hp3 = new pelicula('Harry Potter 3', 300, 'A');
const hp4 = new pelicula('Harry Potter 4', 350, 'A');
const hp5 = new pelicula('Harry Potter 5', 400, 'B');
const hp6 = new pelicula('Harry Potter 6', 450, 'A');
const hp7 = new pelicula('Harry Potter 7', 500, 'B');
const hp8 = new pelicula('Harry Potter 8', 550, 'A');

const cartelera = [];

cartelera.push(hp1,hp2,hp3,hp4,hp5,hp6,hp7,hp8)

function verCartelera () {
    let comprarEntrada;
    comprarEntrada = confirm('Actualmente tenemos en cartelera ' + cartelera.length + ' peliculas. \nDesea comprar alguna entrada?')
    if (comprarEntrada) {
        comprarEntrada()
    } else {
        alert('Muchas gracias por su visita!')
    }
    
}
verCartelera()

function comprarEntrada() {
    alert('Las peliculas disponibles son: \n'+cartelera.nombre)
}
// console.log(cartelera.length);