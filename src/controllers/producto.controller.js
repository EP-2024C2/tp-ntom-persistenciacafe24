const { Producto, Fabricante, Componente } = require('../models/index');

const queryOptions = {
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
};

// Obtener todos los productos
const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll(queryOptions);
    res.status(200).json(productos);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la página solicitada.', error });
  }
};

// Obtener un producto en particular
const getProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id, queryOptions);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
  }
};

// Crear un producto
const createProducto = async (req, res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  try {
    const producto = await Producto.create({
      nombre,
      descripcion,
      precio,
      pathImg,
    });
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ message: 'Error en la creación del producto.', error });
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
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
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
    res.status(200).json({ message: 'Producto eliminado con éxito.' }); // falta error 500, ¿dónde utilizarlo?
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
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
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
  }
};

// Obtener todos los fabricantes de un producto
const getFabricantesDelProducto = async (req, res) => {
  const { id: idProducto } = req.params;
  try {
    const producto = await Producto.findByPk(idProducto, queryOptions);
    const dataProducto = producto.dataValues;
    const fabricantes = await producto.getFabricantes({ joinTableAttributes: [], ...queryOptions});
    const respuesta = {
      ...dataProducto,
      fabricantes,
    };
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
  }
};

// Crear la asociación de un producto con 1 o N componentes
const asociarComponentes = async (req, res) => {
  const { componentes } = req.body; // componentes es un arreglo de nombres de los componentes
  const { id: idProducto } = req.params;
  const componentesEncontrados = [];
  try {
    const producto = await Producto.findByPk(idProducto);
    for (i = 0; i < componentes.length; i++) {
      const unComponente = await Componente.findOne({ where: { nombre: componentes[i] } });
      componentesEncontrados.push(unComponente);
    }
    await producto.addComponentes(componentesEncontrados);
    res.status(201).json(componentesEncontrados);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
  }
};

// Obtener todos los fabricantes de un producto
const getComponentesDelProducto = async (req, res) => {
  const { id: idProducto } = req.params;
  try {
    const producto = await Producto.findByPk(idProducto, queryOptions);
    const dataProducto = producto.dataValues;
    const componentes = await producto.getComponentes({ joinTableAttributes: [], ...queryOptions});
    const respuesta = {
      ...dataProducto,
      componentes,
    };
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el producto solicitado.', error });
  }
};

module.exports = {
  getAllProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
  asociarFabricantes,
  getFabricantesDelProducto,
  asociarComponentes,
  getComponentesDelProducto
};
