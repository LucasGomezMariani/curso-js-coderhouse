import { crearUsuario } from "./registo-login.js";
import { mostrarPlanes } from "./planes.js";
import { UsersList } from "./usuarios.js";
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlanes();
});

        // El codigo se ejecuta si seleccionamos el boton de registro del header. 

// Capturamos los botones
const registrarse = document.querySelector('.login');

// Capturamos el contenedor
const form = document.getElementById('registerContainer');

registrarse.onclick = () => {
    alert('Para probar la validacion de que el mail ya fue utilizado, probar con \"asd@asd.com\"')
    form.showModal();
    crearUsuario();
};


export { form, registrarse };