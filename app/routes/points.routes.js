const controller = require("../controllers/point.controller");

module.exports = function(app){
  
    app.get(
        "/point/",
        controller.getPoint
    );
    app.get(
        "/point/:id",
        controller.getPointById
    );
    app.post(
        "/add_point/",
        controller.postPoint
    );

};