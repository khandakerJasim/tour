const jwt = require("jsonwebtoken");

const Refreshtoken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};
module.exports = Refreshtoken;
