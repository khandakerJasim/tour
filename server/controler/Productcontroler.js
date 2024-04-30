const Product = require("./../model/Productschema");

exports.postproduct = async (req, res) => {
  const newproducts = new Product(req.body);
  try {
    const saveproduct = await newproducts.save();
    res.status(200).json({ data: saveproduct });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
