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
  getComponentesDelProducto,
} = require('../controllers/producto.controller');
const { productosSchema } = require('../schemas/productos.schema');
const schemaValidator = require('../middlewares/schemaValidator');
const arraySchema = require('../schemas/array.schema');
const { validateIdEnModelo } = require('../middlewares/productoMiddleware');
const routes = Router();

routes.get('/', getAllProductos);
routes.get('/:id', validateIdEnModelo, getProducto);
routes.post('/', schemaValidator(productosSchema), createProducto);
routes.put('/:id', schemaValidator(productosSchema), validateIdEnModelo, updateProducto);
routes.delete('/:id', validateIdEnModelo, deleteProducto);
routes.post('/:id/fabricantes', schemaValidator(arraySchema('fabricantes')), validateIdEnModelo, asociarFabricantes);
routes.get('/:id/fabricantes', validateIdEnModelo, getFabricantesDelProducto);
routes.post('/:id/componentes', schemaValidator(arraySchema('componentes')), validateIdEnModelo, asociarComponentes);
routes.get('/:id/componentes', getComponentesDelProducto);

module.exports = routes;
