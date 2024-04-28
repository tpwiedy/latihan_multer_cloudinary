const multer = require('multer');

const localStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
    callback(null, true);
  }
  return callback(
    new Error('Only .png, .jpg and .jpeg format allowed!'),
    false
  );
};
const uploader = multer({ storage: localStorage, fileFilter });

module.exports = uploader;
