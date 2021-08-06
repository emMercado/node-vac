const points = require('../../data.json');
const pointSchema = require('../models/point.model');

getPoint = (req, res) => {
  res.status(200).json(points.vaccination);
}

async function getPlaces(req, res) {
  pointSchema.find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: "No entries found"
        })
      }
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({
        error: err
      })
    });
}

async function getPointById(req, res, next) {
  const id = req.params.id;
  pointSchema.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({ doc });
      } else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    });
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

async function deletePlace(req, res, next) {
  const id = req.params.id;
  pointSchema.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

async function patchPlace(req, res) {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.name] = 
      ops.value
  }
  pointSchema.updateMany({ _id: id }, {
    $set: updateOps /* {
      name: req.body.newName,
      address: req.body.newAddress,
      latitude: req.body.newLatitude,
      longitude: req.body.newLongitude,
      url: req.body.newUrl,
    } */
  })
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}


module.exports = { getPoint, getPlaces, getPointById, postPoint, deletePlace, patchPlace };