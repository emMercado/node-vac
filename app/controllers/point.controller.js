const points = require('../../data.json');
const pointSchema = require('../models/point.model')

getPoint = (req, res) => {
  res.status(200).json(points.vaccination);
}

async function postPoint(req, res) {

  let point = new pointSchema(
    {
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      url: req.body.url,
    }
  )

  point.save((err, pointStored) => {
    if (err) res.status(500).send({ message: `Error saving point: ${err}` })

    res.status(200).send({ point: pointStored })
  }
  )
}


module.exports = { getPoint, postPoint };