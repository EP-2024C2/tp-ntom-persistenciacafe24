const Joi = require('joi');

const fabricantesSchema = Joi.object().keys({
  nombre: Joi.string().required().min(3).max(255).messages({
    'any.required': 'nombre es requerido',
    'string.min': 'nombre debe tener como minimo {#limit} caracteres',
    'string.max': 'nombre puede tener como maximos {#limit} caracteres',
  }),
  direccion: Joi.string().required().min(3).max(255).messages({
    'any.required': 'direccion es requerido',
    'string.min': 'direccion debe tener como minimo {#limit} caracteres',
    'string.max': 'direccion puede tener como maximos {#limit} caracteres',
  }),
  numeroContacto: Joi.string().required().min(10).max(10).messages({
    'any.required': 'numero de contacto es requerido',
    'string.min': 'numero de contacto debe tener como minimo {#limit} caracteres',
    'string.max': 'numero de contacto puede tener como maximos {#limit} caracteres',
  }),
  pathImgPerfil: Joi.string().required().min(3).max(255).messages({
    'any.required': 'PathImgPerfil es requerido',
    'string.min': 'PathImgPerfil debe tener como minimo {#limit} caracteres',
    'string.max': 'PathImgPerfil puede tener como maximos {#limit} caracteres',
  }),
});

module.exports = { fabricantesSchema };
