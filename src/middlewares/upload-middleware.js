const uploader = require('../libs/multer');

function uploadImageMiddleware(req, res, next) {
  uploader.single('product_image');
  next();
}

module.exports = uploadImageMiddleware;
