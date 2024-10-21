const { Router } = require('express');
const fabricanteController = require('../controllers/fabricante.controller');
const {fabricantesSchema} = require('../schemas/fabricantes.schema');
const schemaValidator = require('../middlewares/schemaValidator');
const {validateIdEnModelo} = require('../middlewares/fabricanteMiddleware')

const routes = Router();

routes.get('/', fabricanteController.getAllFabricantes);
routes.get('/:id', validateIdEnModelo, fabricanteController.getFabricanteById);
routes.post('/',schemaValidator(fabricantesSchema) , fabricanteController.createFabricante);
routes.put('/:id',schemaValidator(fabricantesSchema) , validateIdEnModelo, fabricanteController.updateFabricante);
routes.delete('/:id', validateIdEnModelo, fabricanteController.deleteById);
routes.get('/:id/productos', validateIdEnModelo, fabricanteController.getProductosDelFabricante);

module.exports = routes;
