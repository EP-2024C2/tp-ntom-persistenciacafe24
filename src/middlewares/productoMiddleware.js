const { Producto } = require('../models/index');

const validateIdEnModelo = async (req, res, next) => {
  const id = req.params.id;
  const existeId = await Producto.findByPk(id);
  if (!existeId) return res.status(404).json({ mensaje: `El ${id} no exite en la base` });
  next();
};

module.exports = { validateIdEnModelo };
