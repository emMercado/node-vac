const points = require('../../data.json');

getPoint = (req, res) => {
    res.status(200).json(points.vaccination);
}

module.exports = { getPoint };