// Array de usuarios
let UsersList = [];

// Molde de usuarios
class User {
    constructor(nombre, apellido, email, edad, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.edad = edad
        this.password = password
    }
    saludar() {
        alert(`Bienvenidx ${this.nombre}, ahora podras disfrutar de la experiencia completa nuestra web :D`);
    }
}

//REGISTRO

// 1- capturamos el formulario
const form = document.getElementById('registerForm');

// 2- Agregamos un event
form.addEventListener('submit', cargarDatos);

// 3- Funcion para cargar datos.
function cargarDatos(e) {
    // metodo para no recargar la pagina
    e.preventDefault();

    // capturamos los datos del formulario
    const formulario = new FormData(registerForm);
    const nombre = formulario.get('first_name');
    const apellido = formulario.get('last_name');
    const email = formulario.get('email');
    const edad = formulario.get('age');
    const password = formulario.get('password');

    // cargamos los datos capturados, dentro del molde de usuarios
    const usuario = new User( nombre, apellido, email, edad, password );

    // pusheamos el usuario dentro del array
    UsersList.push(usuario);

    console.log(UsersList);
    
    // capturamos la seccion y la ocultamos con display: none
    let containerForm = document.getElementById('registerContainer');
    containerForm.classList.add('d-none')
    
    usuario.saludar();
}
































// Verificacion de datos.
// function getName(nombre) {

//     let acept = true;

//     while (acept) {
//         nombre = document.getElementById('first_name').value;

//         if (!nombre) {
//             // alert('El nombre ingresado no es correcto')
//         } else {
//             acept = false
//             return nombre
//         }
//     }
// }
// function getSurname(apellido) {

//     let acept = true;

//     while (acept) {
//         apellido = document.getElementById('last_name').value;

//         if (!apellido) {
//             // alert('El apellido ingresado no es correcto')
//         } else {
//             acept = false
//             return apellido
//         }
//     }
// }
// function getEmail(email) {

//     let acept = true;

//     while (acept) {
//         email = document.getElementById('email').value;

//         if (!email) {
//             // alert('El email ingresado no es correcto')
//         } else {
//             acept = false
//             return email
//         }
//     }
// }
// function getAge(edad) {

//     let acept = true;

//     while (acept) {

//         edad = document.getElementById('age').value;

//         if (edad < 18 || !edad) {
//             // alert('La edad ingresada no es correcta')
//         } else {
//             acept = false
//             return edad
//         }
//     }
// }
// function getPassword(password) {

//     let acept = true;

//     while (acept) {

//         password = document.getElementById('password').value;

//         if (password.length < 8) {
//             // alert('La contraseña ingresada es demasiado corta')
//         } else {
//             acept = false
//             return password
//         }
//     }
// }






// 2- Iniciar seción
// login();





// Funcion para iniciar seción.

// function login() {
//     let login = confirm('Desea iniciar sesión?')
//     while (login) {
//         confirmUser();

//         login = false
//     }
// }

// comparacion y validacion del nombre de usuario (propiedad nombre)

// function confirmUser() {

//     let validar = true;

//     while (validar) {

//         let loginUser = prompt('Ingrese su nombre')
//         const usuarioEncontrado = UsersList.map((item) => item.nombre === loginUser)

//         // console.log(usuarioEncontrado);

//         if (!usuarioEncontrado) {
//             alert('El usuario no existe, por favor vuelva a intentar.')

//         } else {
//             console.log('Nombre ingresado con exito.');
//             confirmPassword();

//             validar = false
//         }
//     }
// }

// comparacion y validacion del password (propiedad password)

// function confirmPassword() {

//     let validar = true;

//     while (validar) {

//         let loginPassword = prompt('Ingrese su contraseña')
//         const correctPassword = UsersList.map((item) => item.password === loginPassword)

//         // console.log(correctPassword);

//         if (!correctPassword) {
//             alert('La contraseña es incorrecta. Por favor vuelva a intentar')

//         } else {
//             console.log('Contraseña ingresada con exito.');
//             alert('Datos ingresados correctamente. Bienvenido!')
//             validar = false
//         }
//     }
// }
