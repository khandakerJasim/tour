const jwt = require("jsonwebtoken");

const Generatetoken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "1d" });
};

module.exports = Generatetoken;
