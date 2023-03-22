const mongoose = require("mongoose");
var dotenv = require("dotenv").config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in Connect with DB"));

db.once("open", function () {
  console.log("Successfuly connected into db");
});

module.exports = db;
