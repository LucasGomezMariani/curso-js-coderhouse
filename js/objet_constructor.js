// Molde de registro de usuarios
class UserRegister {
    constructor(nombre, apellido, email, edad, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.edad = edad
        this.password = password
    };
    saludar() {
        Swal.fire({
            icon: 'success',
            title: `Bienvenidx ${this.nombre}, ahora podras disfrutar de la experiencia completa nuestra web :D`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
    };
};

// Molde de planes para armar más en el futuro
class Plans {
    constructor(nombre, precio, almacenamiento, cuentas, velocidad, id) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.almacenamiento = almacenamiento
        this.cuentas = cuentas
        this.velocidad = velocidad
    };
};


export { UserRegister, Plans };