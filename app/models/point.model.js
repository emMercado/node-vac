const mongoose = require('mongoose');

const PointScheme = mongoose.model(
    'Point',
    new mongoose.Schema({
        name: String,
        address: String,
        latitude: String,
        longitude: String,
        url: String,
    })
);

module.exports = PointScheme;
