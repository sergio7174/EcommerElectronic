import express from 'express';
import multer from 'multer';
import path from 'node:path';

const router = express.Router();

const storage = multer.diskStorage({
  
  destination(req, file, cb) {
   // cb(null, 'uploads/');
   cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
  },
  filename(req, file, cb) {
    cb(
      null,
      `${Date.now()}-${file.originalname}`
    );
  },
});

/*storage: multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
})*/



console.log("Estoy en uploadRoutes - line 21 - " );

function checkFileType(file: any, cb: any) {
  const filetypes = /jpg|jpeg|png/;
 // const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const extname = filetypes.test((file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const uploadImg = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// @desc    upload image
// @route   Post /api/image
// @access  Private

router.post('/image', uploadImg.single('image'), (req: any, res) => {
  //res.send(`/${req.file?.path}`);
  console.log("Estoy en uploadRoutes - line 58 - req.file?.filename: "+req.file?.filename)
  //const PathImage = `${req.file?.filename}`
  res.send(`${req.file?.filename}`);
});

export default router;