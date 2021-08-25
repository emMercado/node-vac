const mongoose = require('mongoose');

const PointScheme = mongoose.model(
    'Point',
    new mongoose.Schema({
        name: String,
        address: String,
        img: String,
        urlMap: String,
    })
);

module.exports = PointScheme;
