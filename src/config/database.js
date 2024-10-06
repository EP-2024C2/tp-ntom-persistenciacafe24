const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/data/database.sqlite',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;