/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/cliente', require('./api/clienteRoutes'));

module.exports = router;
