const Joi = require('joi');

const usersSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

const recipeSchema = Joi.object().keys({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),

});

module.exports = {
  usersSchema,
  recipeSchema,
};