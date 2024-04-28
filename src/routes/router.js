const router = require('express').Router();
const productController = require('../controllers/product-controller');
const uploadImageMiddleware = require('../middlewares/upload-middleware');

router.post('/products', uploadImageMiddleware, productController.uploadImage);

module.exports = router;
