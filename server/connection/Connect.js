const mongoose = require("mongoose");
const Connectdb = async (DATABASE) => {
  try {
    const option = {
      Dbname: process.env.DBNAME,
    };
    await mongoose.connect(DATABASE, option);
    console.log("mongoose connect successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = Connectdb;
