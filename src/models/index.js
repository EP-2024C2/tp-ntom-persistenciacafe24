const Producto = require('./Producto');
const Fabricante = require('./Fabricante');
const Componente = require('./Componente');

Producto.belongsToMany(Fabricante, { through: 'ProductoFabricante' });
Fabricante.belongsToMany(Producto, { through: 'ProductoFabricante' });

Producto.belongsToMany(Componente, { through: 'ProductoComponente' });
Componente.belongsToMany(Producto, { through: 'ProductoComponente' });

module.exports = { Producto, Fabricante, Componente };