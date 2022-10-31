const mostrarPlanes = async () => {
    const contenedorPlanes = document.getElementById('plansContainer');

    const response = await fetch('./api.json');
    const planes = await response.json();

    planes.forEach(plan => {
        const div = document.createElement('div');
        div.classList.add(`col-lg-4`);
        div.classList.add(`col-sm-6`);

        div.innerHTML += `<div class="single_pricing_part">
                                <p>${plan.nombre}</p>
                                <h3>$${plan.precio}</h3>
                                <ul>
                                    <li>${plan.velocidad}GB Ancho de banda</li>
                                    <li>${plan.cuentas} Cuentas</li>
                                    <li>${plan.almacenamiento}GB Almacenamiento</li>
                                </ul>
                                <button id="choosePlan${plan.nombre}" href="#" class="btn_2 btnSuscripcion ">Suscribirse</button>
                            </div>`;
        contenedorPlanes.appendChild(div);
    });
};

// agrego directo a la ventana un evento al cargar la pagina 
window.addEventListener('load', () => {
    // agrego un evento al hacer click sobre el body
    document.body.addEventListener('click', (e) => {
        // declaro una variable que identifique una clase en especifico
        const clasesElem = e.target.classList;
        // le indico la clase que debe escuchar y ejecuto la funcion
        clasesElem.contains('btnSuscripcion') && suscribirse(); 
    })
});

const suscribirse = () => {
    console.log('Te suscribiste con exito!');
    Swal.fire({
        icon: 'success',
        title: `Te suscribiste correctamente!!`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
};

export { mostrarPlanes };