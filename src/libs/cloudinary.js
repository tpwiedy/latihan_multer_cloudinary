require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  secure: true,
});

const uploadToCloudinary = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath);
    return result.secure_url;
  } catch (error) {
    console.error(error.stack);
  } finally {
    fs.unlinkSync(filepath);
  }
};

module.exports = uploadToCloudinary;
