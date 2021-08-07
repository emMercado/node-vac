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
    app.get(
        "/places/",
        controller.getPlaces
    );
    app.post(
        "/add_point/",
        controller.postPoint
    );
    app.delete(
        "/deletePlace/:id",
        controller.deletePlace
    );
    app.patch(
        "/patchPlace/:id",
        controller.patchPlace
    );
    app.patch(
        "/cambiar/",
        controller.patchPlaces
    );
};