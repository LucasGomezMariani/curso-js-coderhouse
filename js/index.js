import { crearUsuario } from "./registo-login.js";
import { mostrarPlanes } from "./planes.js";
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlanes();
})
// El codigo se ejecuta si seleccionamos alguno de los botones de registro. 
// Por ahora solo el boton del header esta configurado

// Capturamos los botones
const registrarse = document.querySelector('.login');

// Capturamos el contenedor
const form = document.getElementById('registerContainer');

registrarse.onclick = () => {
    form.showModal();
    crearUsuario();
}

const btnSuscripcion = document.querySelectorAll('.btnSuscripcion')

btnSuscripcion.forEach(boton => {
    boton.addEventListener('click', suscribirse('hola'))
})

const suscribirse = (id) => {
    Swal.fire({
        icon: 'success',
        title: `Te suscribiste al plan ${id}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

};
export { form, registrarse, suscribirse };