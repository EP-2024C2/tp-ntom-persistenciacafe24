const { Router } = require('express');

const { getAllComponentes, getComponente, createComponente, updateComponente, deleteComponente, getProductosDelComponente } = require('../controllers/componente.controller');

const routes = Router();

routes.get('/', getAllComponentes);
routes.get('/:id', getComponente);
routes.post('/', createComponente);
routes.put('/:id', updateComponente);
routes.delete('/:id', deleteComponente);
routes.get('/:id/productos', getProductosDelComponente);

module.exports = routes;
