const { Fabricante } = require('../models/index');

const fabricanteController = {};

// Crear un fabricante
const createFabricante = async (req, res) => {
  const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body;
  try {
    const newFabricante = await Fabricante.create({
      nombre,
      direccion,
      numeroContacto,
      pathImgPerfil
    });
    res.status(201).json(newFabricante);
  } catch (error) {
    res.status(400).json({ message: 'Error en la creación del fabricante.' });
  }
};

fabricanteController.createFabricante = createFabricante;

module.exports = fabricanteController;