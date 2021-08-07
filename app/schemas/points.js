const Joi = require('Joi');

const schema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).required(),
    address: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    url: Joi.string().required(),
});

module.exports = schema;