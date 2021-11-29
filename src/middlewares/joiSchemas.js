const Joi = require('joi');

const usersSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

module.exports = {
  usersSchema,
};