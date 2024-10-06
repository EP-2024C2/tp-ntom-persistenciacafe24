const { Router } = require('express');
const { getAllProductos, getProducto, createProducto, updateProducto, deleteProducto, asociarFabricantes, getFabricantesDelProducto } = require('../controllers/producto.controller');

const routes = Router();

routes.get('/', getAllProductos);
routes.get('/:id', getProducto);
routes.post('/', createProducto);
routes.put('/:id', updateProducto);
routes.delete('/:id', deleteProducto);
routes.post('/:id/fabricantes', asociarFabricantes);
routes.get('/:id/fabricantes', getFabricantesDelProducto);

module.exports = routes;