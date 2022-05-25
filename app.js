const express = require("express");
const cors = require("cors");
const app = express();
const PersonController = require("./controller/persona_controller");

app.use(cors());

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let personController = new PersonController();

app.use("/", personController.router);

module.exports = app;
