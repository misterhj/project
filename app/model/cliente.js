/**
 * Cliente Entity (ES6 Class)
 */

class Cliente {
    constructor(id, nombre, apellido, direccion, documento,telefono,email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.documento = documento;
        this.telefono = telefono;
        this.email = email;
    }
}

module.exports = Cliente;
