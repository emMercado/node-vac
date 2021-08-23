const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConfig = require("./app/config/db.config");

/* let corsOptions = {
    origin: "http://localhost:8081"
}; */

const app = express();
const db = require("./app/models");

const initialFunction = require("./app/services/initialFunction");


db.mongoose
.connect(dbConfig.dbUri, dbConfig.mongooseOptions)
.then(() => {
    console.log("Successfully connect to MongoDB.");
    initialFunction();
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

app.use(morgan('combined'))
app.use(cors());
app.use(express.json());
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to pilar application." });
});

// routes
require("./app/routes/points.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});




