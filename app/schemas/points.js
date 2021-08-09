const Joi = require('Joi');

const schema = Joi.object({
    id: "",
    name: Joi.string().min(3).max(25).required(),
    address: Joi.string().min(3).max(46).required(),
    latitude: Joi.string().min(9).max(10).required(),
    longitude: Joi.string().min(9).max(10).required(),
    url: Joi.string().min(3).max(240),
});

module.exports = schema;