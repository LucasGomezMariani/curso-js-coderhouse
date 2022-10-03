
import { form } from "./index.js";
import { User } from "./objet_constructor.js";
import { UsersList } from "./usuarios.js";


//REGISTRO
const crearUsuario = () => {
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

    // cargamos los datos capturados, dentro del molde de usuarios
    const usuario = new User (nombre, apellido, email, edad, password);

    // pusheamos el usuario dentro del array
    UsersList.push(usuario);
    console.log(...UsersList);

    form.close();
    usuario.saludar();

    // Cargamos los datos del usuario en el session storaje en forma de JSON
    sessionStorage.setItem('Usuarios', JSON.stringify(UsersList));

    // Cambiamos el boton de registro
    saludarUsuario(nombre);
}

// Cambiar boton
const saludarUsuario = (nombre) => {
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.classList.remove('login')
    registerBtn.innerText = `Bienvenidx ${nombre}`
}

export { crearUsuario };