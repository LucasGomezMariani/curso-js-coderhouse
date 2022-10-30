import { crearUsuario } from "./registo-login.js";
import { mostrarPlanes } from "./planes.js";
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlanes();
});

        // El codigo se ejecuta si seleccionamos el boton de registro del header. 

// Capturamos los botones
const registrarse = document.querySelector('.login');

// Capturamos el contenedor
const form = document.getElementById('registerContainer');

registrarse.onclick = () => {
    form.showModal();
    crearUsuario();
};

export { form, registrarse };