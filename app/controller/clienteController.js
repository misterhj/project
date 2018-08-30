/* Carga los datos del objeto Cliente */
const ClienteDao = require('../dao/clienteDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load la entidad Cliente */
const Cliente = require('../model/cliente');

/**
 * Controlador Cliente
 */
class ClienteController {

    constructor() {
        this.clienteDao = new ClienteDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.clienteDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.clienteDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.clienteDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let cliente = new Cliente();
        cliente.id = req.params.id;
        cliente.nombre = req.body.nombre;
        cliente.apellido = req.body.apellido;
        cliente.direccion = req.body.direccion;
        cliente.documento = req.body.documento;
        cliente.telefono = req.body.telefono;
        cliente.email = req.body.email;

        return this.clienteDao.update(cliente)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let cliente = new Cliente();
        if (req.body.id) {
            cliente.id = req.body.id;
        }
        cliente.nombre = req.body.nombre;
        cliente.apellido = req.body.apellido;
        cliente.direccion = req.body.direccion;
        cliente.documento = req.body.documento;
        cliente.telefono = req.body.telefono;
        cliente.email = req.body.email;

        if (req.body.id) {
            return this.clienteDao.createWithId(cliente)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.clienteDao.create(cliente)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.clienteDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.clienteDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = ClienteController;
