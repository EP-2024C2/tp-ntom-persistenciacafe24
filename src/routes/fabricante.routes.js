const { Router } = require('express');
const fabricanteController = require('../controllers/fabricante.controller');

const routes = Router();

routes.get('/', fabricanteController.getAllFabricantes);
routes.get('/:id', fabricanteController.getFabricanteById);
routes.post('/', fabricanteController.createFabricante);
routes.put('/:id', fabricanteController.updateFabricante);
routes.delete('/:id', fabricanteController.deleteById);
routes.get('/:id/productos', fabricanteController.getProductosDelFabricante);

module.exports = routes;
