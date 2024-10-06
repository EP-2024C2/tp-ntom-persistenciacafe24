const { Producto, Fabricante } = require('../models/index');

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
const asociarFabricantes = async (req, res) => {
  const { fabricantes } = req.body; // fabricantes es un arreglo de nombres de los fabricantes
  const { id: idProducto } = req.params;
  const fabrEncontrados = [];
  try {
    const producto = await Producto.findByPk(idProducto);
    for (i = 0; i < fabricantes.length; i++) {
      const unFabricante = await Fabricante.findOne({ where: { nombre: fabricantes[i] } });
      fabrEncontrados.push(unFabricante);
    }
    await producto.addFabricantes(fabrEncontrados);
    res.status(201).json(fabrEncontrados);
  } catch (error) {
    res.status(404).json({ message: 'Falló la asociación de los Fabricantes.' });
  }
};

// Obtener todos los fabricantes de un producto
const getFabricantesDelProducto = async (req, res) => {
  const { id: idProducto } = req.params;
  try {
    const producto = await Producto.findByPk(idProducto);
    const productoData = producto.dataValues;
    const fabricantes = await producto.getFabricantes({ joinTableAttributes: [] });
    const respuesta = {
      ...productoData,
      fabricantes,
    };
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ message: 'Falló la obtención del recurso.' });
  }
};

productoController.getAllProductos = getAllProductos;
productoController.getProducto = getProducto;
productoController.createProducto = createProducto;
productoController.updateProducto = updateProducto;
productoController.deleteProducto = deleteProducto;
productoController.asociarFabricantes = asociarFabricantes;
productoController.getFabricantesDelProducto = getFabricantesDelProducto;

module.exports = productoController;
