const { Router } = require('express')
const fabricanteController = require('../controllers/fabricante.controller')


const routes = Router();

routes.get('/', fabricanteController.getAllFabricantes)

routes.get('/:id',fabricanteController.getFabricanteById)

routes.post('/', fabricanteController.createFabricante)

routes.delete('/:id',fabricanteController.deleteById)

routes.put('/:id',fabricanteController.updateFabricante)

routes.get('/:id/productos',fabricanteController.getProductosDelFabricante)

routes.post('/:id/productos', fabricanteController.asociarProductos)

module.exports = routes