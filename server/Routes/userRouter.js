const express = require("express");
const userControler = require("./../controler/Usercontroler");

const router = express.Router();

router.post("/register", userControler.register);
router.post("/userlogin", userControler.userLogin);
router.post("/adminuser", userControler.adminlogin);

module.exports = router;
