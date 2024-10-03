const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Producto extends Model {}

Producto.init({
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  pathImg: DataTypes.STRING
}, {
  sequelize,
  modelName: 'producto'
});

module.exports = Producto;