

const controller = require("../controllers/point.controller");


module.exports = function(app){
  
    app.get(
        "/point/",
        controller.getPoint
    );

    app.post(
        "/add_point/",
        controller.postPoint
    );

};