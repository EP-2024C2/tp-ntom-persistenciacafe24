const { Producto } = require('../models/index');

const productoController = {};

// Obtener todos los productos
const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la página solicitada.' });
  }
};

// Obtener un producto en particular
const getProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.' });
  }
};

// Crear un producto
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

// Modificar los datos de un producto en particular
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
    res.status(404).json({ message: 'No se encontró el producto solicitado.' });
  }
};

// Borrar un producto en particular
const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(productoEliminado); // falta error 500, ¿dónde utilizarlo?
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.' });
  }
};

// Crear la asociación de un producto con 1 o N fabricantes
const asociarFabricante = async (req, res) => {
  const { nombre: nombreFabricante } = req.body;
  const { id: idProducto } = req.params;
  try {
    
  } catch (error) {
    
  }
}

productoController.getAllProductos = getAllProductos;
productoController.getProducto = getProducto;
productoController.createProducto = createProducto;
productoController.updateProducto = updateProducto;

module.exports = productoController;
