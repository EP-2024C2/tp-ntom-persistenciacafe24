const { Fabricante ,Producto} = require('../models/index');

const fabricanteController = {};

// obtener todos los fabricantes
const getAllFabricantes = async (req,res) => {
  try{
    const fabricantes = await Fabricante.findAll({})
    res.status(200).json(fabricantes)
  }catch (error) {
    res.status(404).json({ message: 'No se encontró la página solicitada.' });
  }
  
}

// obtener un fabricante en particular
const getFabricanteById= async (req, res)=>{
  const { id } = req.params;
  try {
    const fabricante = await Fabricante.findByPk(id);
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.' });
  }
}

// borrar un fabricante por Id
const deleteById =async (req, res) => {
  const { id } = req.params;
  try {
    const fabricanteEliminado = await Fabricante.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(fabricanteEliminado); 
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.' });
  }
}



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


// modificar un fabricante en particular

const updateFabricante = async (req,res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  const { id } = req.params;
  try {
    const fabricante = await Fabricante.findByPk(id);
    fabricante.nombre = nombre;
    fabricante.descripcion = descripcion;
    fabricante.precio = precio;
    fabricante.pathImg = pathImg;
    await fabricante.save();
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.' });
  }
}

//Obtener todos los productos de un fabricante

const getProductosDelFabricante = async (req, res) => {
  const { id: idFabricante } = req.params;
  try {
    const fabricante = await Fabricante.findByPk(idFabricante);
    const fabricanteData = producto.dataValues;
    const productos = await fabricante.getProducto({ joinTableAttributes: [] });
    const respuesta = {
      ...fabricanteData,
      productos,
    };
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ message: 'Falló la obtención del recurso.' });
  }
};

// Crear la asociación de un fabricante con 1 o N productos
const asociarProductos = async (req, res) => {
  const { productos } = req.body; //productos es un arreglo de nombres de los fabricantes
  const { id: idFabricante } = req.params;
  const producEncontrados = [];
  try {
    const fabricante = await Fabricante.findByPk(idFabricante);
    for (i = 0; i < productos.length; i++) {
      const unProducto = await Producto.findOne({ where: { nombre: productos[i] } });
      fabrEncontrados.push(unProducto);
    }
    await fabricante.addProductos(producEncontrados);
    res.status(201).json(producEncontrados);
  } catch (error) {
    res.status(404).json({ message: 'Falló la asociación de los Productos.' });
  }
};
 
fabricanteController.getAllFabricantes = getAllFabricantes;
fabricanteController.createFabricante = createFabricante;
fabricanteController.deleteById = deleteById
fabricanteController.getFabricanteById = getFabricanteById
fabricanteController.updateFabricante = updateFabricante 
fabricanteController.getProductosDelFabricante = getProductosDelFabricante;
fabricanteController.asociarProductos = asociarProductos;

module.exports = fabricanteController;