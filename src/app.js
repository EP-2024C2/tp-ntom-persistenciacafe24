const express = require('express');
const routes = require('./routes/index');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync()
  .then(() => console.log('Base de datos sincronizada.'))
  .catch(error => console.log('Error al sincronizar la base de datos.', error));

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}...`);
});