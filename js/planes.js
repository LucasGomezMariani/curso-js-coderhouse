const mostrarPlanes = async () => {
    const contenedorPlanes = document.getElementById('plansContainer');
    
    const response = await fetch('./api.json');
    const planes = await response.json();

    planes.forEach (plan => {
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
                                <button id="choosePlan${plan.nombre}" href="#" class="btn_2 btnSuscripcion">Suscribirse</button>
                            </div>`;
        contenedorPlanes.appendChild(div);
    });
};

export { mostrarPlanes };