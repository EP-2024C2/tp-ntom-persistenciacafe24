const { Router } = require('express');
const { getAllProductos } = require('../controllers/producto.controller');

const routes = Router();

routes.get('/', getAllProductos);

module.exports = routes;