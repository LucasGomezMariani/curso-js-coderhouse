
import { form, registrarse, suscribirse } from "./index.js";
import { UserRegister } from "./objet_constructor.js";
import { UsersList, DatosLogin } from "./usuarios.js";


//REGISTRO
function crearUsuario() {
    // 1- capturamos el formulario
    const registerForm = document.getElementById('registerForm');

    // 2- Agregamos un event y cargamos los datos
    registerForm.addEventListener('submit', capturarDatos);
}

//Funcion para cargar datos.
const capturarDatos = (e) => {
    // metodo para no recargar la pagina
    e.preventDefault();

    // capturamos los datos del formulario
    const formulario = new FormData(registerForm);
    const nombre = formulario.get('first_name');
    const apellido = formulario.get('last_name');
    const email = formulario.get('email');
    const edad = formulario.get('age');
    const password = formulario.get('password');
    const confirmPassword = formulario.get('confirmPassword');

    // Validacion de formularios vacios
    if (nombre.length == 0 || apellido.length == 0 || edad.length == 0 || password.length == 0 || email.length == 0 ) {
        form.close();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar todos los campos',
          }).then((result) => {
            result.isConfirmed &&     form.showModal();
          })       
        return;
    }
    // Validacion de password
    if (confirmPassword != password) {
        
        // alert('Las contraseñas no coinciden. Por favor ingrese la misma contraseña en ambos campos.');
        password.onFocus()
        return;
    }


    // cargamos los datos capturados, dentro del molde de usuarios
    const registroUsuario = new UserRegister(nombre, apellido, email, edad, password);
    // pusheamos el usuario dentro del array
    UsersList.push(registroUsuario);
    console.log(...UsersList);


    // Creamos el objeto "datos de login" el cual subiremos al storage
    const loginUsuario = { nombre, email, password };
    // pusheamos el usuario dentro del array
    DatosLogin.push(loginUsuario);
    console.log(...DatosLogin);

    // Cerramos el modal
    form.close();
    registroUsuario.saludar();

    // Cargamos los datos del usuario en el session storaje en forma de JSON
    sessionStorage.setItem('UsuarioLogin', JSON.stringify(loginUsuario));

    // Cambiamos el boton de registro obteniendo el nombre desde el localStorage
    saludarUsuario(JSON.parse(sessionStorage.getItem('UsuarioLogin'))?.nombre || 'Incognito');
}

// Funcion para cambiar boton
const saludarUsuario = (nombre) => {
    const registerBtn = document.getElementById('registerBtn');
    registrarse.disabled = true;
    registerBtn.innerText = `Bienvenidx ${nombre}`;
}

export { crearUsuario };