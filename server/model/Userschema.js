const mongoose = require("mongoose");
const validator = require("email-validator");
const bcrypt = require("bcrypt");

const userschema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
      },
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    refreshtoken: {
      type: String,
    },
    passwordchanged: Date,
    passwordResettoken: String,
    passwordResetExpire: Date,
  },
  { timestamps: true }
);
userschema.pre("save", async function (next) {
  const saltpassword = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, saltpassword);
});

userschema.methods.ispassMatched = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

const User = new mongoose.model("user", userschema);
module.exports = User;
