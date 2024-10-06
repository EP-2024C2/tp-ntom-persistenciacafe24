const { Router } = require('express');
const { createFabricante } = require('../controllers/fabricante.controller');

const routes = Router();

routes.get('/' /* controlador */);
routes.post('/', createFabricante);

module.exports = routes;
