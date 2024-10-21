const express = require('express');
const routes = require('./routes/index');
const sequelize = require('./config/database');
require('dotenv').config();
const initialDatosCreados = require('./seeders/initialSeeder');
const app = express();

// Middlewares
app.use(express.json());

app.use(routes);

async function startDataBase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Base de datos sincronizada');
    await initialDatosCreados();
    console.log('Datos de inicialización creados correctamente.');
  } catch (error) {
    console.log('Error al sincronizar o inicializar los datos.');
  }
}

startDataBase();

/* sequelize.sync()
  .then(() => console.log('Base de datos sincronizada.'))
  .catch(error => console.log('Error al sincronizar la base de datos.', error)); */

const PORT = process.env.DB_PORT || 3500;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}...`);
});
