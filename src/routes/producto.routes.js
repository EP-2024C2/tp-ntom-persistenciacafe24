const { Router } = require('express');
const {
  getAllProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
  asociarFabricantes,
  getFabricantesDelProducto,
  asociarComponentes,
  getComponentesDelProducto
} = require('../controllers/producto.controller');

const routes = Router();

routes.get('/', getAllProductos);
routes.get('/:id', getProducto);
routes.post('/', createProducto);
routes.put('/:id', updateProducto);
routes.delete('/:id', deleteProducto);
routes.post('/:id/fabricantes', asociarFabricantes);
routes.get('/:id/fabricantes', getFabricantesDelProducto);
routes.post('/:id/componentes', asociarComponentes);
routes.get('/:id/componentes', getComponentesDelProducto);

module.exports = routes;
