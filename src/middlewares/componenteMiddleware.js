const { Componente} = require("../models/index");

const validateIdEnModelo = async (req, res, next) => {
    
    const id = req.params.id
    const existeId = await Componente.findByPk(id)
    if (!existeId)
        return res.status(404).json({mensaje: `El ${id} no exite.`})
    next()

}


module.exports = {validateIdEnModelo}