const { Componente, Producto} = require("../models/index");

const queryOptions = {
  attributes: {
    exclude: ["createdAt", "updatedAt"],
  },
};

// Obtener todos los componentes
const getAllComponentes = async (req, res) => {
  try {
    const componentes = await Componente.findAll(queryOptions);
    res.status(200).json(componentes);
  } catch (error) {
    res
      .status(404)
      .json({ message: "No se encontró la página solicitada.", error });
  }
};

// Obtener un componente en particular
const getComponente = async (req, res) => {
    const { id } = req.params;
    try {
      const componente = await Componente.findByPk(id, queryOptions);
      res.status(200).json(componente);
    } catch (error) {
      res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
    }
  };

// Crear un componente
const createComponente = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
      const componente = await Componente.create({
        nombre,
        descripcion,
      });
      res.status(201).json(componente);
    } catch (error) {
      res.status(400).json({ message: 'Error en la creación del componente.', error });
    }
  };

// Modificar los datos de un componente en particular
const updateComponente = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const { id } = req.params;
    try {
      const componente = await Componente.findByPk(id);
      componente.nombre = nombre;
      componente.descripcion = descripcion;
      await componente.save();
      res.status(200).json(componente);
    } catch (error) {
      res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
    }
  };

// Borrar un componente en particular
const deleteComponente = async (req, res) => {
    const { id } = req.params;
    try {
      const componenteEliminado = await Componente.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: 'Componente eliminado con éxito.' }); // falta error 500, ¿dónde utilizarlo?
    } catch (error) {
      res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
    }
  };

  // Crear la asociación de un componente con 1 o N productos

const asociarProducto = async (req, res) => {
    const { productos } = req.body; // productos es un arreglo de nombres de los productos
    const { id: idComponente } = req.params;
    const productosEncontrados = [];
    try {
      const componente = await Componente.findByPk(idComponente);
      for (i = 0; i < productos.length; i++) {
        const unProducto = await Producto.findOne({ where: { nombre: productos[i] } });
        productosEncontrados.push(unProducto);
      }
      await componente.addProductos(productosEncontrados);
      console.log('Componente encontrado:', componente); 
      res.status(201).json(productosEncontrados);
    } catch (error) {
      res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
    }
  };


  // Obtener todos los productos de un componente
const getProductosDelComponente = async (req, res) => {
    const { id: idComponente } = req.params;
    try {
      const componente = await Componente.findByPk(idComponente, queryOptions);
      const dataComponente = componente.dataValues;
      const productos = await componente.getProductos({ joinTableAttributes: [], ...queryOptions});
      const respuesta = {
        ...dataComponente,
        productos,
      };
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
    }
  };
  

module.exports = {  getAllComponentes,
                    getComponente,
                    createComponente,
                    updateComponente,
                    deleteComponente,
                    getProductosDelComponente,
                    asociarProducto
                };
