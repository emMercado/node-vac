const controller = require("../controllers/point.controller");

module.exports = function(app){
    //get places for json data
    app.get(
        "/points/",
        controller.getPoint
    );  
    //Routes fo DB MongoDB Atlas 
    //get all places from mongodb Atlas
    app.get(
        "/places/",
        controller.getPlaces
    );
    //get place for id
    app.get(
        "/places/:id",
        controller.getPlaceById
    );
    //add place
    app.post(
        "/places/",
        controller.postPlace
    );
    //delete place for id
    app.delete(
        "/places/:id",
        controller.deletePlace
    );
    //update place direct from json: {id, name, address, lat, long, url} 
    app.patch(
        "/places/",
        controller.patchPlaces
    );
};