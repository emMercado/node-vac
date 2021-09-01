const points = require('../../data.json');
const db = require("../models");
const pointSchema = require('../models/point.model')

module.exports = async function chargePoints() {

    pointSchema.estimatedDocumentCount(async (err, count) => {

        if (!err && count === 0) {
            for await (const obj of points.vaccination){
                const point = new pointSchema({
                    name: obj.name,
                    address: obj.address,
                    img: obj.img,
                    urlMap: obj.urlMap,
                    latitude: obj.latitude,
                    longitude: obj.longitude
                })
                await point.save();
                console.log(point, obj)
            }
        }
        console.log("Points vaccination charged successfully..!")
    })
}