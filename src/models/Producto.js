const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Producto extends Model {}

Producto.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pathImg: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'producto'
});

module.exports = Producto;