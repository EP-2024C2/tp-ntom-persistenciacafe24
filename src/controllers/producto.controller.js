const { Producto } = require('../models/index');

const productoController = {};

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(404).json({ message: 'No se puedieron cargar los productos.' });
  }
};

const getProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: 'No se pudo encontrar el producto.' });
  }
};

const createProducto = async (req, res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  try {
    const newProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      pathImg,
    });
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(400).json({ message: 'Error en la creación del producto.' });
  }
};

const updateProducto = async (req, res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.precio = precio;
    producto.pathImg = pathImg;
    await producto.save();
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: 'Error al actualizar el producto.' });
  }
};

productoController.getAllProductos = getAllProductos;
productoController.getProducto = getProducto;
productoController.createProducto = createProducto;
productoController.updateProducto = updateProducto;

module.exports = productoController;
