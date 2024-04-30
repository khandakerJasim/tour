const User = require("./../model/Userschema");

exports.register = async (req, res) => {
  const email = req.body.email;
  try {
    const preuser = await User.findOne({ email: email });
    if (!preuser) {
      const newuser = await User.create(req.body);
      res.status(200).json(newuser);
    } else {
      res.status(400).json("the user is already exits");
    }
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const finduser = await User.findOne({ email });
    if (finduser && (await finduser.ispassMatched(password))) {
      res.json({
        _id: finduser?._id,
        fname: finduser?.fname,
        lname: finduser?.lname,
        email: finduser?.email,
        phone: finduser?.phone,
      });
    } else {
      res.status(400).json("invalid cridantial");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//adminlogin

exports.adminlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await User.findOne({ email });
    if (admin.role !== "admin") throw new Error("you are not admin");
    if (admin && (await admin.ispassMatched(password))) {
      res.json({
        id: admin?._id,
        fname: admin?.fname,
        lname: admin?.lname,
        email: admin?.email,
        phone: admin?.phone,
      });
    } else {
      res.status(400).json("cridantial error");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
