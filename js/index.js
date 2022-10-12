import { crearUsuario } from "./registo-login.js";
import { mostrarPlanes } from "./planes.js";
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlanes();
})
// El codigo se ejecuta si seleccionamos alguno de los botones de registro. 
// Por ahora solo el boton del header esta configurado

// Capturamos los botones
const registrarse = document.querySelector('.login')
// Capturamos el contenedor
const form = document.getElementById('registerContainer');
registrarse.onclick = () => {
    form.showModal();
    crearUsuario();
}

export { form, registrarse };