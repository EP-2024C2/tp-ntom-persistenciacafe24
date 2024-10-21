const Joi = require('joi');

const arraySchema = elementoAAsociar => {
  return Joi.object({
    [elementoAAsociar]: Joi.array()
      .items(Joi.string())
      .min(1)
      .required()
      .messages({
        'any.required': `Es requerido un array con al menos un nombre de ${elementoAAsociar}`,
        'array.min': `El array de ${elementoAAsociar} debe contener al menos {#limit}`,
      }),
  });
};

module.exports = arraySchema;
