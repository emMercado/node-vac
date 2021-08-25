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

async function getPlaceById(req, res, next) {
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

async function postPlace(req, res) {

  let point = new pointSchema(
    {
      name: req.body.name,
      address: req.body.address,
      img: req.body.img,
      urlMap: req.body.urlMap,
    }
  )
  point.save((err, pointStored) => {
    if (err) res.status(500).send({ message: `Error saving point: ${err}` })

    res.status(200).json({ message: 'Add Places Succesfully', pointStored })
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

async function patchPlaces(req, res) {

  const id = req.body.id;

  let docs = await pointSchema.updateOne({ _id: id }, req.body)
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    });
  res.status(200).json({ message: 'Update Place Succesfully', docs });
}

module.exports = { getPoint, getPlaces, getPlaceById, postPlace, deletePlace, patchPlaces };