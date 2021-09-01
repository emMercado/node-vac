const mongoose = require('mongoose');

const PointScheme = mongoose.model(
    'Point',
    new mongoose.Schema({
        name: String,
        address: String,
        img: String,
        urlMap: String,
        latitude: String,
        longitude: String
    })
);

module.exports = PointScheme;
