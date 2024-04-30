const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const DATABASE = process.env.DATABASE;
const userrouter = require("./Routes/userRouter");
const Productrouter = require("./Routes/Productrouter");
const Connectdb = require("./connection/Connect");
const app = express();

//database conncet
Connectdb(DATABASE);
app.use(cors());
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userrouter);
app.use(Productrouter);

module.exports = app;
