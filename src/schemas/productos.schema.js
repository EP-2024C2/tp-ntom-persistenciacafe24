const Joi = require('joi');

const productosSchema = Joi.object().keys({
  nombre: Joi.string().required().min(3).max(255).messages({
    'any.required': 'nombre es requerido',
    'string.min': 'nombre debe tener como minimo {#limit} caracteres',
    'string.max': 'nombre puede tener como maximos {#limit} caracteres',
  }),
  descripcion: Joi.string().required().min(3).max(255).messages({
    'any.required': 'descripcion es requerido',
    'string.min': 'descripcion debe tener como minimo {#limit} caracteres',
    'string.max': 'descripcion puede tener como maximos {#limit} caracteres',
  }),
  precio: Joi.number().required().positive().precision(2).messages({
    'any.required': 'precio es requerido',
    'number.positivo': 'precio debe ser un numero positivo',
  }),
  pathImg: Joi.string().required().min(3).max(255).messages({
    'any.required': 'PathImgPerfil es requerido',
    'string.min': 'PathImgPerfil debe tener como minimo {#limit} caracteres',
    'string.max': 'PathImgPerfil puede tener como maximos {#limit} caracteres',
  }),
});

module.exports = { productosSchema };
