const { Router } = require('express');
const { getAllProductos, getProducto, createProducto, updateProducto } = require('../controllers/producto.controller');

const routes = Router();

routes.get('/', getAllProductos);
routes.get('/:id', getProducto);
routes.post('/', createProducto);
routes.put('/:id', updateProducto);

module.exports = routes;