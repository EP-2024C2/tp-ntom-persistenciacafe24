const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Componente extends Model {}

Componente.init({
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING
}, {
  sequelize,
  modelName: 'componente'
});

module.exports = Componente;