// Molde de usuarios
class User {
    constructor(nombre, apellido, email, edad, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.edad = edad
        this.password = password
    }
    saludar() {
        alert(`Bienvenidx ${this.nombre}, ahora podras disfrutar de la experiencia completa nuestra web :D`);
    }
};

class Plans {
    constructor(nombre, precio, almacenamiento, cuentas, velocidad, id) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.almacenamiento = almacenamiento
        this.cuentas = cuentas
        this.velocidad = velocidad
    }
}


export { User };