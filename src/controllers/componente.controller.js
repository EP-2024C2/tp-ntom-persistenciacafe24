const { Componente, Producto, Fabricante } = require('../models/index');

const queryOptions = {
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
};

// Obtener todos los componentes
const getAllComponentes = async (req, res) => {
  try {
    const componentes = await Componente.findAll(queryOptions);
    res.status(200).json(componentes);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró la página solicitada.', error });
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
    res.status(200).json({ message: 'Componente eliminado con éxito.' });
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
  }
};

// Obtener todos los productos de un componente
const getProductosDelComponente = async (req, res) => {
  const { id: idComponente } = req.params;
  try {
    const componente = await Componente.findByPk(idComponente, {
      joinTableAttributes: [],
      ...queryOptions,
      include: [
        {
          model: Producto,
          ...queryOptions,
          through: { attributes: [] },
          include: [
            {
              model: Fabricante,
              ...queryOptions,
              through: { attributes: [] },
            },
          ],
        },
      ],
    });
    res.status(200).json(componente);
  } catch (error) {
    res.status(404).json({ message: 'No se encontró el componente solicitado.', error });
  }
};

module.exports = {
  getAllComponentes,
  getComponente,
  createComponente,
  updateComponente,
  deleteComponente,
  getProductosDelComponente,
};
