const { Producto, Fabricante } = require('../models/index');

const productoController = {};

const getAllProductos = (req, res) => {
}

const createProducto = async (req, res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  try {
    const newProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      pathImg
    });
  } catch (error) {
    console.log(error);
  }
}

productoController.getAllProductos = getAllProductos;
productoController.createProducto = createProducto;

module.exports = productoController;