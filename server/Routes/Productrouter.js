const express = require("express");
const Productcontroler = require("./../controler/Productcontroler");
const router = express.Router();

router.post("/product", Productcontroler.postproduct);

module.exports = router;
