const { Router } = require('express');

const { getAllComponentes,
        getComponente,
        createComponente,
        updateComponente,
        deleteComponente,
        getProductosDelComponente,
        asociarProducto
} = require('../controllers/componente.controller')

const routes = Router();

routes.get('/',getAllComponentes );
routes.get('/:id',getComponente );
routes.post('/', createComponente);
routes.put('/:id', updateComponente);
routes.delete('/:id', deleteComponente);
routes.post('/:id/productos', asociarProducto);
routes.get('/:id/productos', getProductosDelComponente);
module.exports = routes;


/*




GET	/componentes/:id/productos	200, 404	Obtener todos los productos de un componente
*/