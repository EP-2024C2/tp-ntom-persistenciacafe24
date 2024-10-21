const Joi = require('joi');

const componentesSchema = Joi.object().keys({
  nombre: Joi.string().required().min(3).max(255).messages({
    'any.required': 'nombre es requerido',
    'string.min': 'nombre debe tener como minimo {#limit} caracteres',
    'string.max': 'nombre puede tener como maximos {#limit} caracteres',
    //"string.empty":"nombre no puede ser vacio"
  }),
  descripcion: Joi.string().required().messages({
    'any.required': 'La descripcion es requerida',
  }),
});

module.exports = { componentesSchema };
