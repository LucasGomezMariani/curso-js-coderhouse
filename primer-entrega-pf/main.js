// Array de usuarios
const UsersList = []


// Molde de usuarios
class User {
    constructor(nombre, apellido, email, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.edad = edad
    }
    presentarme() {
        alert('Hola mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años de edad.');
    }
    
}
// Function creadora de usuarios.
function CrearUsuario() {
    do {
        // Algoritmo que crea al usuario
        const usuario = new User ( getName(), getSurname(), getEmail(), getAge() );
        // console.log(usuario1);
        usuario.presentarme();
        UsersList.push(usuario);

        // Seguir cargando usuarios?
        validar = confirm('Quiere crear otro usuario?');

    } while (validar); 
}

CrearUsuario()
console.log(UsersList);


function getName(nombre) {

    let acept = true;

    while (acept) {
        nombre = prompt('Ingrese su nombre')

        if (!nombre) {
            alert('El nombre ingresado no es correcto')
        } else {
            acept = false
            return nombre
        }
    }
}
function getSurname(apellido) {

    let acept = true;

    while (acept) {
        apellido = prompt('Ingrese su apellido')

        if (!apellido) {
            alert('El apellido ingresado no es correcto')
        } else {
            acept = false
            return apellido
        }
    }
}
function getEmail(email) {

    let acept = true;

    while (acept) {
        email = prompt('Ingrese su email')

        if (!email) {
            alert('El email ingresado no es correcto')
        } else {
            acept = false
            return email
        }
    }
}
function getAge(edad) {

    let acept = true;

    while (acept) {

        edad = Number(prompt('Ingrese su edad. Recuerde que debe ser mayor de edad.'))

        if ( edad < 18 || !edad) {
            alert('La edad ingresada no es correcta')
        } else {
            acept = false
            return edad
        }
    }
}
