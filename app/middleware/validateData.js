const Boom = require('@hapi/boom');

module.exports = (schema) => {
    return async(req, res, next) => {
        await schema.validateAsync(req.body);
        next();
        try {
        } catch(err) {
            res.send(Boom.badData());
        }
    };
};

