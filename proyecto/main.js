// 1- Registrarse


// Array de usuarios
let UsersList = []

// Molde de usuarios
class User {
    constructor(nombre, apellido, email, edad, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.edad = edad
        this.password = password
    }
    presentarme() {
        alert('Hola mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años de edad.');
    }

}

// Function creadora de usuarios.
function CrearUsuario() {
    do {
        // Algoritmo que crea al usuario
        const usuario = new User(getName(), getSurname(), getEmail(), getAge(), getPassword());

        // console.log(usuario1);
        usuario.presentarme();
        UsersList.push(usuario);

        // Seguir cargando usuarios?
        validar = confirm('Quiere crear otro usuario?');

    } while (validar);
}

CrearUsuario()
console.log(UsersList);

// Verificacion de datos.
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

        if (edad < 18 || !edad) {
            alert('La edad ingresada no es correcta')
        } else {
            acept = false
            return edad
        }
    }
}
function getPassword(password) {

    let acept = true;

    while (acept) {

        password = prompt('Ingrese una contraseña. Debe ser de minimo de 8 caracteres.')

        if (password.length < 8) {
            alert('La contraseña ingresada es demasiado corta')
        } else {
            acept = false
            return password
        }
    }
}






// 2- Iniciar seción
login();





// Funcion para iniciar seción.

function login() {
    let login = confirm('Desea iniciar sesión?')
    while (login) {
        confirmUser();

        login = false
    }
}

// comparacion y validacion del nombre de usuario (propiedad nombre)

function confirmUser() {

    let validar = true;

    while (validar) {

        let loginUser = prompt('Ingrese su nombre')
        const usuarioEncontrado = UsersList.map((item) => item.nombre === loginUser)

        // console.log(usuarioEncontrado);

        if (!usuarioEncontrado) {
            alert('El usuario no existe, por favor vuelva a intentar.')

        } else {
            console.log('Nombre ingresado con exito.');
            confirmPassword();

            validar = false
        }
    }
}

// comparacion y validacion del password (propiedad password)

function confirmPassword() {

    let validar = true;

    while (validar) {

        let loginPassword = prompt('Ingrese su contraseña')
        const correctPassword = UsersList.map((item) => item.password === loginPassword)

        // console.log(correctPassword);

        if (!correctPassword) {
            alert('La contraseña es incorrecta. Por favor vuelva a intentar')

        } else {
            console.log('Contraseña ingresada con exito.');
            alert('Datos ingresados correctamente. Bienvenido!')
            validar = false
        }
    }
}
