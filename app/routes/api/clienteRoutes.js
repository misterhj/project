/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const ClienteController = require('../../controller/clienteController');
const clienteController = new ClienteController();

/**
 * Rutas de la entidad Cliente
 */
router.get('/count', function (req, res) {
    clienteController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    clienteController.exists(req, res);
});

router.get('/:id', function (req, res) {
    clienteController.findById(req, res);
});

router.get('/', function (req, res) {
    clienteController.findAll(res);
});

router.put('/:id', function (req, res) {
    clienteController.update(req, res);
});

router.post('/create', function (req, res) {
    clienteController.create(req, res);
});

router.delete('/:id', function (req, res) {
    clienteController.deleteById(req, res);
});

module.exports = router;
