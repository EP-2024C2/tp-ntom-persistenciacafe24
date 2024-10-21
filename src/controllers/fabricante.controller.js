const { Fabricante, Producto, Componente } = require('../models/index');

const queryOptions = {
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
};

const fabricanteController = {};

// obtener todos los fabricantes
const getAllFabricantes = async (req, res) => {
  try {
    const fabricantes = await Fabricante.findAll(queryOptions);
    res.status(200).json(fabricantes);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la página solicitada.', error });
  }
};

// obtener un fabricante en particular
const getFabricanteById = async (req, res) => {
  const { id } = req.params;
  try {
    const fabricante = await Fabricante.findByPk(id, queryOptions);
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.', error });
  }
};

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
const updateFabricante = async (req, res) => {
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
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.', error });
  }
};

// borrar un fabricante por Id
const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const fabricanteEliminado = await Fabricante.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: 'Fabricante eliminado con éxito.', fabricanteEliminado });
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el fabricante solicitado.', error });
  }
};

// Obtener todos los productos de un fabricante
const getProductosDelFabricante = async (req, res) => {
  const { id: idFabricante } = req.params;
  try {
    const fabricante = await Fabricante.findByPk(idFabricante, {
      joinTableAttributes: [],
      ...queryOptions,
      include: [
        {
          model: Producto,
          ...queryOptions,
          through: { attributes: [] },
          include: [
            {
              model: Componente,
              ...queryOptions,
              through: { attributes: [] },
            },
          ],
        },
      ],
    });
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(404).json({ message: 'Falló la obtención del recurso.', error });
  }
};

fabricanteController.getAllFabricantes = getAllFabricantes;
fabricanteController.getFabricanteById = getFabricanteById;
fabricanteController.createFabricante = createFabricante;
fabricanteController.updateFabricante = updateFabricante;
fabricanteController.deleteById = deleteById;
fabricanteController.getProductosDelFabricante = getProductosDelFabricante;

module.exports = fabricanteController;
