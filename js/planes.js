// let planes = [
//     {
//         id: 1,
//         nombre: 'Bronce',
//         precio: 200,
//         almacenamiento: 2,
//         cuentas: 2,
//         velocidad: 2
//     },
//     {
//         id: 2,
//         nombre: 'Plata',
//         precio: 400,
//         almacenamiento: 4,
//         cuentas: 5,
//         velocidad: 4
//     },
//     {
//         id: 3,
//         nombre: 'Oro',
//         precio: 700,
//         almacenamiento: 10,
//         cuentas: 8,
//         velocidad: 10
//     }

// ];

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
                                <button id="choosePlan${plan.nombre}" href="#" class="btn_2">Suscribirse</button>
                            </div>`;
        contenedorPlanes.appendChild(div);
    });
};

export { mostrarPlanes };