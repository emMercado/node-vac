const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConfig = require("./app/config/db.config");

const app = express();


let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

const db = require("./app/models");

db.mongoose
    .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to pilarTecno application." });
});

// routes
require("./app/routes/points.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


