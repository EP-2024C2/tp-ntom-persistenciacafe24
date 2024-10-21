const { Router } = require('express');

const { getAllComponentes, getComponente, createComponente, updateComponente, deleteComponente, getProductosDelComponente } = require('../controllers/componente.controller');
const schemaValidator = require('../middlewares/schemaValidator');
const {componentesSchema} = require('../schemas/componente.schema');
const {validateIdEnModelo} = require('../middlewares/componenteMiddleware');
const routes = Router();

routes.get('/', getAllComponentes);
routes.get('/:id',validateIdEnModelo, getComponente);
routes.post('/', schemaValidator(componentesSchema), createComponente);
routes.put('/:id',schemaValidator(componentesSchema),validateIdEnModelo, updateComponente);
routes.delete('/:id',validateIdEnModelo, deleteComponente);
routes.get('/:id/productos',validateIdEnModelo, getProductosDelComponente);

module.exports = routes;
