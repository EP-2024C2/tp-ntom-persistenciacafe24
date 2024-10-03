const Producto = require('./Producto');
const Fabricante = require('./Fabricante');
const Componente = require('./Componente');

Producto.hasMany(Fabricante);
Fabricante.belongsToMany(Producto, { through: 'Producto_Fabricante' });

Producto.hasMany(Componente);
Componente.belongsToMany(Producto, { through: 'Producto_Componente' });

module.exports = { Producto, Fabricante, Componente };