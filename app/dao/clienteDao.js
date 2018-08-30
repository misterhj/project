/* comentarios traducidos del ingles de la documentación inicial */
/* Carga la entidad Cliente */
const Cliente = require('../model/cliente');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Acceso a los datos del Objeto Cliente
 */
class ClienteDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, nombre, apellido, direccion, documento, telefono, email FROM cliente WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Cliente(row.id, row.nombre, row.apellido, row.direccion, row.documento, row.telefono, row.email));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM cliente";
        return this.common.findAll(sqlRequest).then(rows => {
            let clientes = [];
            for (const row of rows) {
                clientes.push(new Cliente(row.id, row.nombre, row.apellido, row.direccion, row.documento, row.telefono, row.email));
            }
            return clientes;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM cliente";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Cliente
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Cliente) {
        let sqlRequest = "UPDATE cliente SET " +
            "nombre=$nombre, " +
            "apellido=$apellido, " +
            "direccion=$direccion, " +
            "documento=$documento, " +
            "telefono=$telefono, " +
            "email=$email " +
            "WHERE id=$id";

        let sqlParams = {
            $nombre: Cliente.nombre,
            $apellido: Cliente.apellido,
            $direccion: Cliente.direccion,
            $documento: Cliente.documento,
            $telefono: Cliente.telefono,
            $email: Cliente.email,
            $id: Cliente.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Cliente
     * returns database insertion status
     */
    create(Cliente) {
        let sqlRequest = "INSERT into cliente (nombre, apellido, direccion, documento, telefono, email) " +
            "VALUES ($nombre, $apellido, $direccion, $documento, $telefono, $email)";
        let sqlParams = {
            $nombre: Cliente.nombre,
            $apellido: Cliente.apellido,
            $direccion: Cliente.direccion,
            $documento: Cliente.documento,
            $telefono: Cliente.telefono,
            $email: Cliente.email
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Cliente
     * returns database insertion status
     */
    createWithId(Cliente) {
        let sqlRequest = "INSERT into cliente (id, nombre, apellido, direccion, documento, telefono, email) " +
            "VALUES ($id, $nombre, $apellido, $direccion, $documento, $telefono, $email)";
        let sqlParams = {
            $id: Cliente.id,
            $nombre: Cliente.nombre,
            $apellido: Cliente.apellido,
            $direccion: Cliente.direccion,
            $documento: Cliente.documento,
            $telefono: Cliente.telefono,
            $email: Cliente.email
        };

        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM cliente WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM cliente WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = ClienteDao;
