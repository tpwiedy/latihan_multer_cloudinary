const uploadToCloudinary = require('../libs/cloudinary');
const { Product } = require('../../models/');

const uploadImage = async (req, res) => {
  try {
    const image_url = await uploadToCloudinary(req.file.path);

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      product_image_url: image_url,
    });

    res.status(201).json({
      success: 1,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadImage };
