

const controller = require("../controllers/point.controller");


module.exports = function(app){
  
    app.get(
        "/point/",
        controller.getPoint
    );

}