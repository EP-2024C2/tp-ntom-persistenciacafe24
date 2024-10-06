const { Fabricante } = require('../models/index');

// Crear un fabricante
const createFabricante = async (req, res) => {
  const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body;
  try {
    const fabricante = await Fabricante.create({
      nombre,
      direccion,
      numeroContacto,
      pathImgPerfil,
    });
    res.status(201).json(fabricante);
  } catch (error) {
    res.status(400).json({ message: 'Error en la creación del fabricante.', error });
  }
};

module.exports = {
  createFabricante
};
