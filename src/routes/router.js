const router = require('express').Router();
const productController = require('../controllers/product-controller');
// const uploadImageMiddleware = require('../middlewares/upload-middleware');
const uploader = require('../libs/multer');

router.post(
  '/products',
  uploader.single('product_image_url'),
  productController.uploadImage
);

module.exports = router;
