require('dotenv').config();
const { Sequelize } = require('sequelize');

/* const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'sqlite',
  storage: './src/data/database.sqlite',
}); */

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  storage: './src/data/database.sqlite',
});

module.exports = sequelize;
