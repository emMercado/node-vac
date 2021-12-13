const Joi = require('joi');

const schema = Joi.object({
    id: "",
    name: Joi.string().min(3).max(25).required(),
    address: Joi.string().min(3).max(46).required(),
    img: Joi.string().min(3).max(240),
    urlMap: Joi.string().min(3).max(240),
    latitude: Joi.string().min(6).max(11),
    longitude: Joi.string().min(6).max(11),
});

const schemaPatch = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).max(25).required(),
    address: Joi.string().min(3).max(46).required(),
    img: Joi.string().min(3).max(240),
    urlMap: Joi.string().min(3).max(240),
    latitude: Joi.string().min(6).max(11),
    longitude: Joi.string().min(6).max(11),
});

module.exports = {schema, schemaPatch};